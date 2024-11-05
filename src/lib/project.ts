export type Project = {
  title: string;
  description: string;
  image?: string | null;
  slug: string;
  published?: boolean;
};

export const loadProjectsFromDisk = async () => {
  const projectFiles = import.meta.glob('/src/projects/*.md');

  return Promise.all(
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
};

export const loadProjectFromDisk = async (slug: string) => {
  const projectPath = `/src/projects/${slug}.md`;
  const project = await import(projectPath);

  if (project && typeof project === 'object' && 'metadata' in project && 'default' in project) {
    const metadata = project.metadata as Omit<Project, 'slug'>;

    return {
      slug,
      ...metadata,
      content: project.default
    };
  }
  return null; // Return null if no project is found
};
