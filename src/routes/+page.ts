import { loadPostsFromDisk } from '$lib/post';

export const prerender = true;

export async function load() {
  return {
    posts: loadPostsFromDisk()
  };
}
