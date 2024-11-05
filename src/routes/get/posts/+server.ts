import { json } from '@sveltejs/kit';
import { loadPostsFromDisk } from '$lib/post';

export async function GET() {
  const posts = await loadPostsFromDisk();
  return json(posts);
}
