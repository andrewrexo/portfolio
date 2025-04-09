<script lang="ts">
  import { goto } from '$app/navigation';
  import type { Post } from '$lib/post';
  import { ArrowDownCircle, ArrowUpRight } from 'lucide-svelte';
  import { fade, scale } from 'svelte/transition';

  let { posts }: { posts: Post[] } = $props();

  let mounted = $state(false);

  $effect(() => {
    if (mounted) return;
    mounted = true;
  });
</script>

<section class="grid grid-cols-1 gap-4">
  <h2 class="flex items-center gap-4 text-3xl font-bold">
    <span class="flex gap-4">
      <ArrowDownCircle class="mt-1 h-8 w-8 text-primary" />
      recent posts
    </span>
  </h2>
  <div class="grid grid-cols-1 gap-4">
    {#if posts.length === 0}
      {#each Array(1) as _}
        <div
          class="card animate-pulse rounded-lg border border-base-100 bg-base-200 p-2 opacity-5 duration-100"
          transition:fade={{ duration: 300 }}
        >
          <div class="flex justify-between gap-4">
            <div class="h-6 w-48 rounded-sm bg-white/40"></div>
            <div class="flex gap-2">
              <div class="h-5 w-16 rounded-sm bg-white/40"></div>
              <div class="h-5 w-16 rounded-sm bg-white/40"></div>
            </div>
          </div>
          <div class="mt-2 h-4 w-full rounded-sm bg-white/40"></div>
          <div class="mt-1 h-4 w-3/4 rounded-sm bg-white/40"></div>
          <div class="mt-2 h-3 w-24 rounded-sm bg-white/40"></div>
        </div>
      {/each}
    {:else}
      {#each posts as post}
        {#if mounted}
          <button
            class="card rounded-lg border border-base-200 bg-base-100 p-2 shadow-md outline-hidden brightness-105 transition-all hover:-translate-y-1 hover:cursor-pointer active:-translate-y-1 active:scale-[0.975]"
            onclick={() => goto(`/post/${post.slug}`)}
            transition:scale={{ start: 0.9, duration: 500 }}
          >
            <div class="flex flex-wrap justify-between gap-4">
              <h3 class="flex-1 text-left text-lg font-semibold">{post.title}</h3>
              <span class="flex flex-wrap justify-end space-x-1">
                {#each post.categories as category}
                  <span class="badge badge-sm border-none bg-primary/40 py-2">
                    {category}
                  </span>
                {/each}
              </span>
            </div>
            <p class="py-1 text-left text-sm text-base-content/90">{post.description}</p>
            <span class="py-2 text-left text-xs text-base-content/50">
              <span>{post.date}</span>
            </span>
            <span class="absolute bottom-2 right-2">
              <ArrowUpRight class="h-4 w-4 text-base-content md:h-8 md:w-8" />
            </span>
          </button>
        {/if}
      {/each}
    {/if}
  </div>
</section>
