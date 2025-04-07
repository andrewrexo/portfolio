<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { goto } from '$app/navigation';
  import BackArrow from '$components/icons/BackArrow.svelte';

  let loaded = $state(false);

  let { data } = $props();
  let {
    content,
    meta: { title, date, categories }
  } = data;
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
</svelte:head>

<article
  class="mx-auto flex min-h-[calc(100vh-65px)] max-w-3xl flex-col justify-start px-4 py-8 sm:px-6 lg:px-8"
  in:fade={{ duration: 200 }}
>
  <header class="mb-6 flex flex-col gap-2 md:mb-8" in:fly={{ y: 100, duration: 500 }}>
    <div class="">
      <button
        aria-label="Back to home"
        id="back-to-home"
        onclick={() => {
          goto('/');
        }}
        class="mb-4 mr-auto duration-200 hover:rotate-6 md:-mb-[36px] md:-ml-[60px] md:block"
      >
        <BackArrow
          class="right-4 -mb-0.5 h-8 w-8 cursor-pointer transition-all duration-300 hover:text-primary md:block"
        />
      </button>
      <h1 class="text-4xl font-bold capitalize md:-ml-1">{title}</h1>
    </div>
    <p class="text-sm">
      written on {new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}
    </p>
    <div class="flex flex-wrap gap-2 pt-2" in:fly={{ x: 25, duration: 500 }}>
      {#each categories as category}
        <span
          class="badge badge-sm cursor-pointer border-none bg-primary/40 transition-all duration-300 hover:badge-info hover:rotate-1 hover:scale-105"
        >
          #{category}
        </span>
      {/each}
    </div>
  </header>
  <div class="prose-md prose prose-invert h-full max-w-none flex-grow prose-img:mx-auto">
    {@render content()}
  </div>
</article>
