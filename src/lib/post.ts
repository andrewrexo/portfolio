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

type PostWithContent = Post & {
  content: unknown;
};

type PostMetadata = Omit<Post, 'slug'>;

// Cache for posts metadata
let postsMetadataCache: Post[] | null = null;
let lastMetadataCacheTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Cache for post content
const postContentCache = new Map<string, { data: unknown; timestamp: number }>();

export const loadPostsFromDisk = async (loadContent = false) => {
  // Return cached data if it's still valid
  if (postsMetadataCache && Date.now() - lastMetadataCacheTime < CACHE_DURATION) {
    if (!loadContent) {
      return postsMetadataCache;
    }
  }

  let posts: Post[] = [];

  const paths = import.meta.glob('/src/posts/*.md', { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '') ?? '';

    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as PostMetadata;
      const post = { ...metadata, slug } satisfies Post;

      if (post.published) {
        if (loadContent && 'default' in file) {
          const content = file.default;
          postContentCache.set(slug, { data: content, timestamp: Date.now() });
          posts.push({ ...post, content } as PostWithContent);
        } else {
          posts.push(post);
        }
      }
    }
  }

  posts = posts.sort(
    (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
  );

  // Update cache
  postsMetadataCache = posts;
  lastMetadataCacheTime = Date.now();

  return posts;
};

export const loadPostFromDisk = async (slug: string) => {
  // Check content cache first
  const cachedContent = postContentCache.get(slug);
  if (cachedContent && Date.now() - cachedContent.timestamp < CACHE_DURATION) {
    const metadata = postsMetadataCache?.find((p) => p.slug === slug);
    if (metadata) {
      return { ...metadata, content: cachedContent.data } as PostWithContent;
    }
  }

  const postPath = `/src/posts/${slug}.md`;
  const post = await import(postPath);

  if (post && typeof post === 'object' && 'metadata' in post && 'default' in post) {
    const metadata = post.metadata as PostMetadata;
    const content = post.default;

    // Update content cache
    postContentCache.set(slug, { data: content, timestamp: Date.now() });

    return {
      slug,
      ...metadata,
      content
    } as PostWithContent;
  }
  return null;
};

// Preload a specific post's content
export const preloadPost = async (slug: string) => {
  if (postContentCache.has(slug)) return;

  try {
    const postPath = `/src/posts/${slug}.md`;
    const post = await import(postPath);

    if (post && typeof post === 'object' && 'default' in post) {
      postContentCache.set(slug, {
        data: post.default,
        timestamp: Date.now()
      });
    }
  } catch (error) {
    console.error(`Failed to preload post ${slug}:`, error);
  }
};

export const formatPostTS = (timestamp: string) => {
  return new Date(timestamp).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
