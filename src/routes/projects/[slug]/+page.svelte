<script lang="ts">
  import BackArrow from '$components/icons/BackArrow.svelte';
  import Github from '$components/icons/Github.svelte';
  import { ExternalLink } from 'lucide-svelte';

  let { data } = $props();
  const projectPromise = Promise.resolve(data);
  const hasViewTransitions = 'startViewTransition' in document;
</script>

<svelte:head>
  {#await projectPromise}
    <title>Loading Project...</title>
  {:then { title, description, slug }}
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={`https://rubes.dev/projects/${slug}`} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <link rel="canonical" href={`https://rubes.dev/projects/${slug}`} />
  {:catch}
    <title>Error Loading Project</title>
  {/await}
</svelte:head>

{#await projectPromise}
  <div class="mx-auto flex max-w-5xl flex-col items-center justify-center px-4 py-12">
    <div class="loading loading-spinner loading-lg text-primary"></div>
  </div>
{:then { title, description, slug, content, github, demo }}
  <article class="mx-auto w-full max-w-5xl">
    <div
      style={hasViewTransitions ? `view-transition-name: content-${slug}` : ''}
      class="mt-8 max-w-none px-4 pb-8"
    >
      <section class="flex items-center gap-4">
        <div class="flex w-full flex-col justify-between gap-6 md:flex-row">
          <h1 class="flex gap-4 text-3xl font-extrabold lowercase">
            <button
              aria-label="Back to home"
              id="back-to-home"
              onclick={() => history.back()}
              class="transition duration-300 hover:rotate-6 hover:text-primary"
            >
              <BackArrow class="-mb-1 size-7" />
            </button>
            {title}
          </h1>
          <div class="flex gap-4">
            {#if github}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-outline btn-primary btn-sm"
              >
                github
                <Github />
              </a>
            {/if}
            {#if demo}
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-outline btn-primary btn-sm"
              >
                live demo
                <ExternalLink class="size-4" />
              </a>
            {/if}
          </div>
        </div>
      </section>
      <h3 class="text-md my-6 pb-2 font-light text-neutral-content">{description}</h3>
      <div class="prose-md prose prose-invert max-w-none prose-img:mx-auto">
        {@render content()}
      </div>
    </div>
  </article>
{:catch error}
  <div class="mx-auto flex max-w-5xl flex-col items-center justify-center px-4 py-12">
    <p class="text-error">Failed to load project. Please try again later.</p>
  </div>
{/await}
