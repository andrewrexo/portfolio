import { loadProjectsFromDisk } from '$lib/project';

export async function load() {
  // Only load metadata by default
  const projects = await loadProjectsFromDisk(false);
  return { projects };
}
