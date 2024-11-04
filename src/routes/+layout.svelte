<script lang="ts">
  import { onNavigate } from '$app/navigation';
  import { fade } from 'svelte/transition';
  import Head from '$components/utility/Head.svelte';
  import '$styles/app.css';
  import Footer from '$components/home/Footer.svelte';
  import DotPattern from '$components/DotPattern.svelte';
  import { page } from '$app/stores';

  let { children } = $props();

  let mounted = $state(false);
  let hasViewTransitions = $state(false);
  let isProject = $derived($page.url.pathname === '/projects');
  let showFooter = $derived(!isProject);

  $effect(() => {
    if (mounted) return;

    mounted = true;
    hasViewTransitions = 'startViewTransition' in document;
  });

  $effect(() => {
    if (isProject) {
      document.documentElement.style.cssText = 'overscroll-behavior-y: none;';
      document.body.style.cssText = 'overscroll-behavior-y: none;';
    } else {
      document.documentElement.style.cssText = '';
      document.body.style.cssText = '';
    }

    return () => {
      document.documentElement.style.cssText = '';
      document.body.style.cssText = '';
    };
  });

  onNavigate((navigation) => {
    if (!hasViewTransitions) return;

    return new Promise((resolve) => {
      const transition = document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });

      document.documentElement.classList.add('transition-active');

      transition.finished.finally(() => {
        document.documentElement.classList.remove('transition-active');
      });
    });
  });
</script>

<Head />

<main class="flex min-h-dvh flex-col overflow-hidden">
  <DotPattern fillColor="rgb(163 163 163 / 0.2)" class="flex min-h-full flex-col">
    <div
      class="container mx-auto min-h-full max-w-6xl {showFooter ? 'pb-14' : ''}"
      in:fade={{ duration: 200, delay: 150 }}
      out:fade={{ duration: 150 }}
    >
      {@render children()}
      {#if showFooter}
        <Footer />
      {/if}
    </div>
  </DotPattern>
</main>

<style>
  :global(.transition-active) {
    transition-duration: 300ms;
  }

  :global(::view-transition-old(root)),
  :global(::view-transition-new(root)) {
    animation: none;
    mix-blend-mode: normal;
  }

  :global(::view-transition-old(image-*)),
  :global(::view-transition-new(image-*)) {
    animation: none;
    mix-blend-mode: normal;
  }

  :global(::view-transition-group(image-*)) {
    animation-duration: 300ms;
  }

  :global(::view-transition-old(content-*)) {
    animation: fade-out 150ms ease-out forwards;
  }

  :global(::view-transition-new(content-*)) {
    animation: fade-in 150ms ease-out 150ms forwards;
  }

  @keyframes fade-out {
    to {
      opacity: 0;
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    :global(::view-transition-group(*)),
    :global(::view-transition-old(*)),
    :global(::view-transition-new(*)) {
      animation: none !important;
    }
  }
</style>
