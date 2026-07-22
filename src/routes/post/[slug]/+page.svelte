<script lang="ts">
  import SvelteCover from '$components/blog/SvelteCover.svelte';

  let { data } = $props();
  const content = $derived(data.content);
  const image = $derived(data.image);
  const title = $derived(data.meta.title);
  const date = $derived(data.meta.date);
  const usesSvelteCover = $derived(image === '/svelte-cover.svg');
</script>

<article class="mx-auto w-full max-w-5xl py-10 pb-20 md:py-16">
  <header class="animate-fade-in">
    <div class="flex flex-col gap-8">
      <a
        href="/"
        class="text-base-content/45 hover:text-primary inline-flex items-center gap-2 self-start font-mono text-[10px] tracking-[0.14em] uppercase transition-colors duration-200"
      >
        <span aria-hidden="true">&larr;</span>
        back to home
      </a>

      <div class="flex flex-col gap-6">
        <h1
          class="font-body text-base-content max-w-4xl text-4xl leading-[0.98] font-semibold tracking-[-0.055em] md:text-6xl"
        >
          {title}<span class="text-primary">.</span>
        </h1>
        <span
          class="text-base-content/40 font-mono text-[10px] tracking-[0.12em] uppercase"
        >
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </span>
      </div>
    </div>
  </header>

  <div class="animate-fade-in-up mt-12 min-w-0 md:mt-16">
    {#if image}
      <div class="border-neutral bg-base-100 mb-12 overflow-hidden rounded-lg border md:mb-16">
        {#if usesSvelteCover}
          <SvelteCover />
        {:else}
          <img src={image} alt={title} class="aspect-[16/9] w-full object-cover" />
        {/if}
      </div>
    {/if}

    <div class="article-prose prose prose-warm w-full max-w-4xl">
      {@render content()}
    </div>
  </div>
</article>
