import type { Project } from '$lib/project';

export async function load({ fetch }) {
  const response = await fetch('/get/projects');
  const projects: Project[] = await response.json();
  return { projects };
}
