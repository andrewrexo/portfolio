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
      class="font-mono text-sm tracking-wide text-base-content/30 transition-colors duration-200 hover:text-primary"
    >
      &larr; back to writing
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
  <div class="prose prose-lg prose-warm max-w-none animate-fade-in-up">
    {#if image}
      <img src={image} alt={title} class="rounded-lg" />
    {/if}
    {@render content()}
  </div>
</article>
