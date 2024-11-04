import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Project } from '$lib/project';

export const GET: RequestHandler = async () => {
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

  return json(projects);
};
