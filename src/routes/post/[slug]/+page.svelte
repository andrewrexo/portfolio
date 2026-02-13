<script lang="ts">
  let { data } = $props();
  let {
    content,
    image,
    meta: { title, date }
  } = data;
</script>

<article class="mx-auto flex max-w-6xl flex-col justify-start py-12 md:py-16">
  <header class="mb-8 flex flex-col gap-6 animate-fade-in">
    <a
      href="/#writing"
      class="inline-flex items-center gap-1 font-mono text-sm tracking-wide text-base-content/30 transition-colors duration-200 hover:text-primary"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64"/></svg>
      back to writing
    </a>
    <h1 class="font-display text-3xl text-base-content md:text-4xl">{title}</h1>
    <span class="font-mono text-xs text-base-content/30">
      {new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}
    </span>
  </header>
  <hr class="mb-8" />
  <div class="prose prose-warm max-w-none animate-fade-in-up">
    {#if image}
      <img src={image} alt={title} class="rounded-lg" />
    {/if}
    {@render content()}
  </div>
</article>
