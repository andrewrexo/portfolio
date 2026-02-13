import { loadPostsFromDisk } from '$lib/post';
import { loadProjectsFromDisk } from '$lib/project';

export const prerender = true;

export async function load() {
  const [posts, projects] = await Promise.all([loadPostsFromDisk(), loadProjectsFromDisk()]);
  return { posts, projects };
}
