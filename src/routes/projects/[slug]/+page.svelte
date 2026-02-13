<script lang="ts">
  import { page } from '$app/stores';
  import Github from '$components/icons/Github.svelte';
  import type { Snippet } from 'svelte';

  let { data } = $props();
  const { title, description, slug, github, demo } = data;
  const content = data.content as Snippet;

  const hasViewTransitions = 'startViewTransition' in document;
  const fromHome = $page.url.searchParams.get('from') === 'home';
</script>

<svelte:head>
  <meta name="description" content={description} />

  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={`https://rubes.dev/projects/${slug}`} />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />

  <link rel="canonical" href={`https://rubes.dev/projects/${slug}`} />
</svelte:head>

<article class="mx-auto w-full max-w-6xl py-12 md:py-16">
  <div
    style={hasViewTransitions ? `view-transition-name: content-${slug}` : ''}
    class="animate-fade-in max-w-none"
  >
    <section class="mb-8 flex flex-col gap-6">
      <a
        href={fromHome ? '/' : '/projects'}
        class="inline-flex items-center gap-1 font-mono text-sm tracking-wide text-base-content/30 transition-colors duration-200 hover:text-primary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64"/></svg>
        {fromHome ? 'back to home' : 'back to projects'}
      </a>
      <h1 class="font-display text-3xl text-base-content md:text-4xl">
        {title}
      </h1>
      <p class="text-base font-light text-base-content/50">{description}</p>
      {#if github || demo}
        <div class="flex gap-4">
          {#if github}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-sm text-base-content/40 transition-colors duration-200 hover:text-primary"
            >
              <Github size="14" />
              github
            </a>
          {/if}
          {#if demo}
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 text-sm text-base-content/40 transition-colors duration-200 hover:text-primary"
            >
              live demo &nearr;
            </a>
          {/if}
        </div>
      {/if}
    </section>
    <hr class="mb-8" />
    <div class="prose prose-warm max-w-none">
      {@render content()}
    </div>
  </div>
</article>
