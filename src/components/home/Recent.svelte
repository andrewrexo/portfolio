<script lang="ts">
  import { goto } from '$app/navigation';
  import type { Post } from '$lib/post';
  import { ArrowDownCircle, ArrowUpRight } from 'lucide-svelte';
  import { fade, fly } from 'svelte/transition';

  let { posts }: { posts: Post[] } = $props();

  let mounted = $state(false);

  $effect(() => {
    if (mounted) return;
    mounted = true;
  });
</script>

<section class="grid grid-cols-1 gap-4">
  <h2 class="flex items-center gap-4 text-3xl font-bold">
    {#if mounted}
      <span class="flex gap-4" transition:fade={{ duration: 300, delay: 200 }}>
        <ArrowDownCircle class="mt-1 h-8 w-8 text-primary" />
        recent posts
      </span>
    {/if}
  </h2>
  <div class="grid grid-cols-1 gap-4">
    {#if posts.length === 0}
      <div class="card rounded-lg shadow-md">
        <p class="text-sm text-base-content/90">no posts found</p>
      </div>
    {:else}
      {#each posts as post}
        {#if mounted}
          <button
            class="card rounded-lg border border-base-200 bg-base-100 p-2 shadow-md brightness-105 transition-all hover:-translate-y-1 hover:cursor-pointer active:-translate-y-1 active:scale-[0.975]"
            onclick={() => goto(`/post/${post.slug}`)}
            transition:fly={{ x: 100, duration: 1000 }}
          >
            <div class="flex justify-between gap-4">
              <h3 class="text-lg font-semibold">{post.title}</h3>
              <span class="space-x-1">
                {#each post.categories as category}
                  <span class="badge badge-sm border-none bg-primary/40 py-2">
                    {category}
                  </span>
                {/each}
              </span>
            </div>
            <p class="text-left text-sm text-base-content/90">{post.description}</p>
            <span class="py-1 text-left text-xs text-base-content/50">
              <span>{post.date}</span>
            </span>
            <span class="absolute bottom-2 right-2">
              <ArrowUpRight class="h-8 w-8 text-base-content" />
            </span>
          </button>
        {/if}
      {/each}
    {/if}
  </div>
</section>
