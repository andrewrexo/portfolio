import { loadPostsFromDisk } from '$lib/post';

export async function load() {
  // Only load metadata by default
  const posts = await loadPostsFromDisk(false);
  return { posts };
}
