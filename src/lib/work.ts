import type { CollectionEntry } from 'astro:content';

export type WorkEntry = CollectionEntry<'work'>;

export function sortWork(entries: WorkEntry[]) {
  return [...entries].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatWorkDate(date: Date) {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  }).format(date);
}

export function workHref(entry: WorkEntry) {
  return `/work/${entry.id}/`;
}
