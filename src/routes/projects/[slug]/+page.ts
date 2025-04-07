import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { loadProjectFromDisk } from '$lib/project';

export const prerender = true;

export const load = (async ({ params }) => {
  try {
    if (!/^[a-z0-9-]+$/i.test(params.slug)) {
      throw error(400, 'Invalid slug format');
    }

    const project = await loadProjectFromDisk(params.slug);

    if (!project || !project.title || !project.image) {
      throw error(404, 'Project content is incomplete');
    }

    return project;
  } catch (err) {
    console.error('Error loading project:', err);
    throw error(500, 'Failed to load project');
  }
}) satisfies PageLoad;
