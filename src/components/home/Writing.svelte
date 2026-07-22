<script lang="ts">
  import type { Post } from '$lib/post';

  let { posts }: { posts: Post[] } = $props();

  const formatYear = (dateStr: string) => new Date(dateStr).getFullYear();
</script>

<section id="writing" class="scroll-mt-28">
  <header class="mb-3 md:mb-2">
    <h2
      class="font-body text-base-content text-2xl font-semibold tracking-[-0.04em] lowercase md:text-xl"
    >
      writing
      <span class="text-primary">.</span>
    </h2>
  </header>

  <div class="flex flex-col gap-0.5">
    {#each posts as post, i}
      <a
        href={`/post/${post.slug}`}
        class="group hover:bg-base-100 -mx-3 grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 rounded-lg px-3 py-2.5 transition-colors duration-200"
        style="animation: fadeIn 0.5s ease-out {0.08 + i * 0.08}s both"
      >
        <h3
          class="text-base-content group-hover:text-primary truncate text-[15px] leading-5 transition-colors duration-200 md:text-sm"
        >
          {post.title}
        </h3>
        <span class="text-base-content/35 font-mono text-[9px] tracking-[0.08em]">
          {formatYear(post.date)}
        </span>
      </a>
    {/each}
  </div>
</section>
