<script lang="ts">
  import BackArrow from '$components/icons/BackArrow.svelte';
  import { scale, fly } from 'svelte/transition';

  let { data } = $props();
  const { title, description, slug, content } = data;

  const hasViewTransitions = 'startViewTransition' in document;
</script>

<article
  class="mx-auto w-full max-w-5xl"
  in:scale={{
    duration: hasViewTransitions ? 0 : 300,
    delay: hasViewTransitions ? 0 : 150,
    start: 0.95
  }}
>
  <div
    style={hasViewTransitions ? `view-transition-name: content-${slug}` : ''}
    class="mt-8 max-w-none px-4 pb-8"
  >
    <section class="flex items-center gap-4">
      <button
        onclick={() => history.back()}
        in:fly={{ x: -20, duration: 300 }}
        class="transition duration-300 hover:rotate-6 hover:text-primary"
      >
        <BackArrow class="mt-1 size-7" />
      </button>
      <h1 class="text-3xl font-extrabold lowercase">{title}</h1>
    </section>
    <h3 class="text-md my-2 pb-8 font-light text-neutral-content">{description}</h3>
    <div class="prose-md prose prose-invert max-w-none prose-img:mx-auto">
      {@render content()}
    </div>
  </div>
</article>
