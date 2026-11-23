import { getCollection } from 'astro:content';

export async function getProjects() {
  const all = await getCollection('projects');
  return all.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}
