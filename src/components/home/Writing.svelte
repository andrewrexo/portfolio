<script lang="ts">
  import type { Post } from '$lib/post';

  let { posts }: { posts: Post[] } = $props();

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
</script>

<section class="flex flex-col gap-8">
  <span class="font-mono text-sm tracking-wider text-base-content/40">04 — writing</span>

  <div class="flex flex-col">
    {#each posts as post, i}
      <a
        href={`/post/${post.slug}`}
        class="group flex items-baseline justify-between gap-4 border-b border-neutral/30 py-4 transition-colors duration-200 first:border-t"
        style="animation: fadeIn 0.5s ease-out {0.1 + i * 0.08}s both"
      >
        <h3
          class="text-base text-base-content transition-colors duration-200 group-hover:text-primary"
        >
          {post.title}
        </h3>
        <span class="shrink-0 font-mono text-xs text-base-content/30">
          {formatDate(post.date)}
        </span>
      </a>
    {/each}
  </div>
</section>
