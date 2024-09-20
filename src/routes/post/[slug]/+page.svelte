<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { page } from '$app/stores';
  import { ArrowLeft } from 'lucide-svelte';
  import { goto } from '$app/navigation';

  let loaded = $state(false);

  let { data } = $props();
  let {
    content,
    meta: { title, date, categories }
  } = data;

  $effect(() => {
    loaded = true;
  });

  const navigateHome = () => {
    loaded = false;

    setTimeout(() => {
      goto('/');
    }, 500);
  };
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
</svelte:head>

{#if loaded}
  <article class="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8" transition:fade={{ duration: 500 }}>
    <header
      class="mb-6 flex h-full flex-col gap-2 md:mb-8"
      in:fly={{ y: 100, duration: 500 }}
      out:fade={{ duration: 500 }}
    >
      <div class="items-center gap-2">
        <ArrowLeft
          onclick={navigateHome}
          class="hover:rotate-8 right-4 -mb-[36px] -ml-[60px] hidden h-8 w-8 cursor-pointer transition-all duration-300 hover:text-primary md:block"
        />
        <h1 class="text-4xl font-bold capitalize">{title}</h1>
      </div>
      <p class="text-sm text-secondary">
        Published on {new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </p>
      <div class="flex flex-wrap gap-2 pt-2" transition:fly={{ x: 25, duration: 500 }}>
        {#each categories as category}
          <span
            class="badge badge-primary badge-sm cursor-pointer transition-all duration-300 hover:badge-info hover:rotate-1 hover:scale-105"
          >
            #{category}
          </span>
        {/each}
      </div>
    </header>
    <div class="prose prose-lg max-w-none" transition:fly={{ x: -25, duration: 500 }}>
      {@render content()}
    </div>
  </article>
{/if}
