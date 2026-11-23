import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

export async function getProjects() {
  const all = await getCollection('projects');
  return all.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

/** Cover first, then gallery, without duplicates. */
export function reelImages(p: Project) {
  const imgs = [p.data.cover, ...p.data.gallery].filter((x) => x !== undefined);
  return imgs.filter((img, i) => imgs.findIndex((o) => o.src === img.src) === i);
}
