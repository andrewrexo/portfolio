import type { Post } from '$lib/post';

export async function load({ fetch }) {
  const response = await fetch('/get/posts');
  const posts: Post[] = await response.json();
  return { posts };
}
