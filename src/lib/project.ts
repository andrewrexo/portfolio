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

export const loadProjectsFromDisk = async () => {
  const projectFiles = import.meta.glob('/src/projects/*.md');

  const projects = await Promise.all(
    Object.entries(projectFiles).map(async ([path, loader]) => {
      const project = await loader();
      const slug = path.split('/').pop()?.replace('.md', '');

      if (project && typeof project === 'object' && 'metadata' in project && 'default' in project) {
        const metadata = project.metadata as Omit<Project, 'slug'>;

        return {
          slug,
          ...metadata,
          content: project.default
        };
      }
    })
  );

  return projects
    .filter((project): project is NonNullable<typeof project> => project !== undefined)
    .sort((a, b) => {
      if (a.priority !== undefined && b.priority !== undefined) {
        return a.priority - b.priority;
      }
      if (a.priority !== undefined) return -1;
      if (b.priority !== undefined) return 1;
      return 0;
    });
};

export const loadProjectFromDisk = async (slug: string) => {
  const projectFiles = import.meta.glob('/src/projects/*.md');
  const projectPath = `/src/projects/${slug}.md`;

  if (projectPath in projectFiles) {
    const project = await projectFiles[projectPath]();

    if (project && typeof project === 'object' && 'metadata' in project && 'default' in project) {
      const metadata = project.metadata as Omit<Project, 'slug'>;

      return {
        slug,
        ...metadata,
        content: project.default
      };
    }
  }

  return null;
};
