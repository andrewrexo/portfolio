import type { Post } from '$lib/post.js';
import { error } from '@sveltejs/kit';
import type { Snippet } from 'svelte';

export async function load({ params }) {
  try {
    // Validate slug to prevent directory traversal
    if (!/^[a-z0-9-]+$/i.test(params.slug)) {
      throw error(400, 'Invalid slug format');
    }

    const posts = import.meta.glob('../../../posts/*.md');
    const module = (await posts[`../../../posts/${params.slug}.md`]()) as {
      metadata: Post;
      default: Snippet;
    };

    const content = module.default;

    if (!module.metadata.title || !module.metadata.date || !content) {
      throw error(404, 'Post content is incomplete');
    }

    return {
      content,
      meta: {
        title: module.metadata.title,
        description: module.metadata.description || 'Read this post on rubes.dev',
        image: module.metadata.image || 'https://rubes.dev/opengraph-image.jpg',
        date: module.metadata.date
      }
    };
  } catch (err) {
    console.error('Error loading project:', err);
    throw error(500, 'Failed to load project');
  }
}
