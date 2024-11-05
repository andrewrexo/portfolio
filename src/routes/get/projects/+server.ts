import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { loadProjectsFromDisk } from '$lib/project';

export const GET: RequestHandler = async () => {
  const projects = await loadProjectsFromDisk();

  return json(projects);
};
