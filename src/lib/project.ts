export type Project = {
  title: string;
  priority?: number;
  description: string;
  github?: string | null;
  demo?: string | null;
  image?: string | null;
  slug: string;
  published?: boolean;
};

type ProjectWithContent = Project & {
  content: unknown;
};

type ProjectMetadata = Omit<Project, 'slug'>;

// Cache for projects metadata
let projectsMetadataCache: Project[] | null = null;
let lastMetadataCacheTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Cache for project content
const projectContentCache = new Map<string, { data: unknown; timestamp: number }>();

export const loadProjectsFromDisk = async (loadContent = false) => {
  // Return cached data if it's still valid
  if (projectsMetadataCache && Date.now() - lastMetadataCacheTime < CACHE_DURATION) {
    if (!loadContent) {
      return projectsMetadataCache;
    }
  }

  const projectFiles = import.meta.glob('/src/projects/*.md');

  const projects = await Promise.all(
    Object.entries(projectFiles).map(async ([path, loader]) => {
      const project = await loader();
      const slug = path.split('/').pop()?.replace('.md', '') ?? '';

      if (project && typeof project === 'object' && 'metadata' in project) {
        const metadata = project.metadata as ProjectMetadata;

        const projectData = {
          slug,
          ...metadata
        } as Project;

        if (loadContent && 'default' in project) {
          const content = project.default;
          projectContentCache.set(slug, { data: content, timestamp: Date.now() });
          return { ...projectData, content } as ProjectWithContent;
        }

        return projectData;
      }
      return null;
    })
  );

  const filteredProjects = projects
    .filter((project): project is Project | ProjectWithContent => project !== null)
    .sort((a, b) => {
      if (a.priority !== undefined && b.priority !== undefined) {
        return a.priority - b.priority;
      }
      if (a.priority !== undefined) return -1;
      if (b.priority !== undefined) return 1;
      return 0;
    });

  // Update cache
  projectsMetadataCache = filteredProjects;
  lastMetadataCacheTime = Date.now();

  return filteredProjects;
};

export const loadProjectFromDisk = async (slug: string) => {
  // Check content cache first
  const cachedContent = projectContentCache.get(slug);
  if (cachedContent && Date.now() - cachedContent.timestamp < CACHE_DURATION) {
    const metadata = projectsMetadataCache?.find((p) => p.slug === slug);
    if (metadata) {
      return { ...metadata, content: cachedContent.data } as ProjectWithContent;
    }
  }

  const projectPath = `/src/projects/${slug}.md`;
  const project = await import(projectPath);

  if (project && typeof project === 'object' && 'metadata' in project && 'default' in project) {
    const metadata = project.metadata as ProjectMetadata;
    const content = project.default;

    // Update content cache
    projectContentCache.set(slug, { data: content, timestamp: Date.now() });

    return {
      slug,
      ...metadata,
      content
    } as ProjectWithContent;
  }
  return null;
};

// Preload a specific project's content
export const preloadProject = async (slug: string) => {
  if (projectContentCache.has(slug)) return;

  try {
    const projectPath = `/src/projects/${slug}.md`;
    const project = await import(projectPath);

    if (project && typeof project === 'object' && 'default' in project) {
      projectContentCache.set(slug, {
        data: project.default,
        timestamp: Date.now()
      });
    }
  } catch (error) {
    console.error(`Failed to preload project ${slug}:`, error);
  }
};
