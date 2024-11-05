<script lang="ts">
  import { scale, fade } from 'svelte/transition';

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
    class="mt-8 max-w-none px-8 pb-8"
  >
    <h1 class="pb-4 text-4xl font-bold md:pb-4">{title}</h1>
    <h3 class="text-md pb-8 font-light text-neutral-content">{description}</h3>
    <div class="prose-md prose prose-invert max-w-none prose-img:mx-auto">
      {@render content()}
    </div>
  </div>
</article>
