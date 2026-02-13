<script lang="ts">
  import { goto } from '$app/navigation';
  import BackArrow from '$components/icons/BackArrow.svelte';

  let { data } = $props();
  let {
    content,
    meta: { title, date, image }
  } = data;
</script>

<article class="mx-auto flex max-w-3xl flex-col justify-start py-12 md:py-16">
  <header class="mb-8 flex flex-col gap-4 animate-fade-in">
    <div class="flex items-center gap-4">
      <button
        aria-label="Back to home"
        onclick={() => goto('/')}
        class="text-base-content/40 transition-colors duration-200 hover:text-primary"
      >
        <BackArrow class="size-5" />
      </button>
      <h1 class="font-display text-3xl text-base-content md:text-4xl">{title}</h1>
    </div>
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
