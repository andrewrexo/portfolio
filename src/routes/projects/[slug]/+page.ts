import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Project } from '$lib/project';
import type { Snippet } from 'svelte';

export const prerender = true;

export const load = (async ({ params }) => {
  try {
    if (!/^[a-z0-9-]+$/i.test(params.slug)) {
      throw error(400, 'Invalid slug format');
    }

    const projects = import.meta.glob('../../../projects/*.md');
    const module = (await projects[`../../../projects/${params.slug}.md`]()) as {
      metadata: Project;
      default: Snippet;
    };

    const content = module.default;

    if (!module.metadata.title || !module.metadata.image || !content) {
      throw error(404, 'Project content is incomplete');
    }

    return {
      content,
      ...module.metadata,
      slug: params.slug
    };
  } catch (err) {
    console.error('Error loading project:', err);
    throw error(500, 'Failed to load project');
  }
}) satisfies PageLoad;
