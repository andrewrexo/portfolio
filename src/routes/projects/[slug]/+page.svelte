<script lang="ts">
  import { page } from '$app/stores';
  import Github from '$components/icons/Github.svelte';
  import type { Snippet } from 'svelte';

  let { data } = $props();
  const title = $derived(data.title);
  const description = $derived(data.description);
  const slug = $derived(data.slug);
  const github = $derived(data.github);
  const demo = $derived(data.demo);
  const content = $derived(data.content as Snippet);

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

<article class="mx-auto w-full max-w-5xl py-10 pb-20 md:py-16">
  <div
    style={hasViewTransitions ? `view-transition-name: content-${slug}` : ''}
    class="animate-fade-in"
  >
    <header>
      <div class="flex flex-col gap-8">
        <a
          href={fromHome ? '/' : '/projects'}
          class="text-base-content/45 hover:text-primary inline-flex items-center gap-2 self-start font-mono text-[10px] tracking-[0.14em] uppercase transition-colors duration-200"
        >
          <span aria-hidden="true">&larr;</span>
          {fromHome ? 'back to home' : 'back to projects'}
        </a>

        <div class="flex flex-col gap-5">
          <h1
            class="font-body text-base-content max-w-4xl text-4xl leading-[0.98] font-semibold tracking-[-0.055em] md:text-6xl"
          >
            {title}<span class="text-primary">.</span>
          </h1>
          <p class="text-base-content/65 max-w-4xl text-[16px] leading-7">{description}</p>
        </div>

        {#if github || demo}
          <div class="flex flex-wrap items-center gap-x-6 gap-y-3">
            {#if demo}
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary hover:text-base-content inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
              >
                live demo <span aria-hidden="true">&nearr;</span>
              </a>
            {/if}
            {#if github}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                class="text-base-content/55 hover:text-primary inline-flex items-center gap-2 text-sm transition-colors duration-200"
              >
                <Github size="15" />
                github
              </a>
            {/if}
          </div>
        {/if}
      </div>
    </header>

    <div class="mt-12 min-w-0 md:mt-16">
      <div class="project-prose prose prose-warm max-w-none">
        {@render content()}
      </div>
    </div>
  </div>
</article>

<style>
  :global(.project-prose > img:first-child) {
    margin-bottom: 3.5rem;
    border-radius: 0.5rem;
  }

  @media (max-width: 47.999rem) {
    :global(.project-prose > img:first-child) {
      margin-bottom: 2.5rem;
    }
  }
</style>
