import { loadProjectsFromDisk } from '$lib/project';

export const prerender = true;

export async function load() {
  const projects = await loadProjectsFromDisk();
  return { projects };
}
