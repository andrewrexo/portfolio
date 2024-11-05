<script lang="ts">
  import { cn } from '$lib/utils';
  import type { Snippet } from 'svelte';
  import { elasticOut } from 'svelte/easing';

  let {
    words,
    delay = 50,
    className,
    children
  }: { words: string; delay?: number; className: string; children?: Snippet } = $props();

  let letters = words.split('');
  let visible = $state(false);

  $effect(() => {
    if (visible) return;
    visible = true;
  });

  const slideSpringFly = (_: HTMLElement, { y = 100, delay = 50, duration = 400 } = {}) => {
    return {
      delay,
      duration,
      css: (t: number) => {
        const eased = elasticOut(t);
        return `
					transform: translateY(${y - y * eased}px);
          opacity: ${t};
        `;
        // maybe use in future: filter: brightness(${eased * t}) for highlight effect
      }
    };
  };
</script>

<div class="flex flex-wrap md:flex-nowrap">
  {#if visible}
    <div
      class="mt-1 flex items-center text-xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-4xl"
      transition:slideSpringFly={{
        y: -80,
        delay: delay
      }}
    >
      {#if children}
        {@render children()}
      {/if}
    </div>
  {/if}

  {#each letters as letter, i (i)}
    {#if visible}
      <h1
        class={cn('text-xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-4xl', className)}
        transition:slideSpringFly={{
          y: -100,
          delay: i * delay * 1.5 + 150
        }}
      >
        {#if letter === ' '}
          <span>&nbsp;</span>
        {:else}
          {letter}
        {/if}
      </h1>
    {/if}
  {/each}
</div>
