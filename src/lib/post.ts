export const Categories = [
  'nextjs',
  'react',
  'typescript',
  'svelte',
  'sveltekit',
  'tailwindcss',
  'css',
  'html',
  'web3',
] as const;

export type Category = typeof Categories[number];

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Category[]
	published: boolean
}