<script lang="ts">
  import BackArrow from '$components/icons/BackArrow.svelte';
  import Github from '$components/icons/Github.svelte';
  import type { Snippet } from 'svelte';

  let { data } = $props();
  const { title, description, slug, github, demo } = data;
  const content = data.content as Snippet;

  const hasViewTransitions = 'startViewTransition' in document;
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

<article class="mx-auto w-full max-w-3xl py-12 md:py-16">
  <div
    style={hasViewTransitions ? `view-transition-name: content-${slug}` : ''}
    class="animate-fade-in max-w-none"
  >
    <section class="mb-8 flex flex-col gap-6">
      <div class="flex items-center gap-4">
        <button
          aria-label="Back to projects"
          onclick={() => history.back()}
          class="text-base-content/40 transition-colors duration-200 hover:text-primary"
        >
          <BackArrow class="size-5" />
        </button>
        <h1 class="font-display text-3xl text-base-content md:text-4xl">
          {title}
        </h1>
      </div>
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
    <div class="prose prose-lg prose-warm max-w-none">
      {@render content()}
    </div>
  </div>
</article>
