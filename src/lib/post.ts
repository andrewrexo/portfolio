export const Categories = [
  'nextjs',
  'react',
  'typescript',
  'svelte',
  'sveltekit',
  'tailwindcss',
  'css',
  'html',
  'web3'
] as const;

export type Category = (typeof Categories)[number];

export type Post = {
  title: string;
  slug: string;
  description: string;
  date: string;
  categories: Category[];
  published: boolean;
  image: string;
};

export const loadPostsFromDisk = async () => {
  let posts: Post[] = [];

  const paths = import.meta.glob('/src/posts/*.md', { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');

    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Post, 'slug'>;
      const post = { ...metadata, slug } satisfies Post;
      if (post.published) {
        posts.push(post);
      }
    }
  }

  posts = posts.sort(
    (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
  );

  return posts;
};

export const formatPostTS = (timestamp: string) => {
  return new Date(timestamp).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
