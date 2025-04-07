import { loadPostsFromDisk } from '$lib/post';

export async function load() {
  return {
    posts: loadPostsFromDisk()
  };
}
