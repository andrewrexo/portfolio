<script lang="ts">
  import { onNavigate } from '$app/navigation';
  import Head from '$components/utility/Head.svelte';
  import '$styles/app.css';
  import Footer from '$components/home/Footer.svelte';
  import { page } from '$app/stores';

  let { children } = $props();

  let mounted = $state(false);
  let hasViewTransitions = $state(false);
  let isDark = $state(true);
  let mobileMenuOpen = $state(false);

  const toTitleCase = (str: string) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  $effect(() => {
    if (mounted) return;
    mounted = true;
    hasViewTransitions = 'startViewTransition' in document;
    isDark = document.documentElement.getAttribute('data-theme') !== 'studio-light';
  });

  function toggleTheme() {
    isDark = !isDark;
    const theme = isDark ? 'studio-dark' : 'studio-light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  onNavigate((navigation) => {
    mobileMenuOpen = false;

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

<Head
  title={toTitleCase($page.data.meta?.title || $page.data.title)}
  description={$page.data.meta?.description || $page.data.description}
  image={$page.data.meta?.image || 'https://rubes.dev/opengraph-image.jpg'}
/>

<!-- Nav bar -->
<nav class="sticky top-0 z-50 w-full border-b border-neutral/30 bg-base-300/80 backdrop-blur-md">
  <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-12">
    <div class="flex items-center gap-3">
      <a href="/" class="wave-hand text-xl" aria-label="Home">
        👋
      </a>
      <a
        href="mailto:andrew@rubes.dev"
        class="font-mono text-[11px] tracking-wide text-base-content/50 transition-colors duration-200 hover:text-base-content"
      >
        available for hire
      </a>
    </div>

    <!-- Desktop nav -->
    <div class="hidden items-center gap-8 md:flex">
      <a
        href="/projects"
        class="font-mono text-xs tracking-wide text-base-content/50 transition-colors duration-200 hover:text-base-content"
      >
        Work
      </a>
      <a
        href="/#experience"
        class="font-mono text-xs tracking-wide text-base-content/50 transition-colors duration-200 hover:text-base-content"
      >
        Experience
      </a>
      <a
        href="/#writing"
        class="font-mono text-xs tracking-wide text-base-content/50 transition-colors duration-200 hover:text-base-content"
      >
        Writing
      </a>
      <a
        href="mailto:andrew@rubes.dev"
        class="font-mono text-xs tracking-wide text-base-content/50 transition-colors duration-200 hover:text-base-content"
      >
        Contact
      </a>
      <button
        onclick={toggleTheme}
        aria-label="Toggle theme"
        class="text-base-content/40 transition-colors duration-200 hover:text-base-content"
      >
        {#if isDark}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        {/if}
      </button>
    </div>

    <!-- Mobile menu button -->
    <div class="flex items-center gap-4 md:hidden">
      <button
        onclick={toggleTheme}
        aria-label="Toggle theme"
        class="text-base-content/40 transition-colors duration-200 hover:text-base-content"
      >
        {#if isDark}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        {/if}
      </button>
      <button
        onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
        aria-label="Toggle menu"
        class="text-base-content/50 transition-colors duration-200 hover:text-base-content"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          {#if mobileMenuOpen}
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          {:else}
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          {/if}
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile menu dropdown -->
  {#if mobileMenuOpen}
    <div class="border-t border-neutral/20 px-4 py-4 md:hidden">
      <div class="flex flex-col gap-4">
        <a
          href="/projects"
          class="font-mono text-xs tracking-wide text-base-content/50 transition-colors duration-200 hover:text-base-content"
        >
          Work
        </a>
        <a
          href="/#experience"
          class="font-mono text-xs tracking-wide text-base-content/50 transition-colors duration-200 hover:text-base-content"
        >
          Experience
        </a>
        <a
          href="/#writing"
          class="font-mono text-xs tracking-wide text-base-content/50 transition-colors duration-200 hover:text-base-content"
        >
          Writing
        </a>
        <a
          href="mailto:andrew@rubes.dev"
          class="font-mono text-xs tracking-wide text-base-content/50 transition-colors duration-200 hover:text-base-content"
        >
          Contact
        </a>
      </div>
    </div>
  {/if}
</nav>

<main class="flex min-h-dvh flex-col">
  <div class="mx-auto w-full max-w-6xl flex-1 px-4 md:px-12">
    {@render children()}
  </div>
  <Footer />
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

  @keyframes wave {
    0% { transform: rotate(0deg); }
    15% { transform: rotate(14deg); }
    30% { transform: rotate(-8deg); }
    45% { transform: rotate(14deg); }
    60% { transform: rotate(-4deg); }
    75% { transform: rotate(10deg); }
    100% { transform: rotate(0deg); }
  }

  .wave-hand {
    display: inline-block;
    transform-origin: 70% 70%;
    animation: wave 1.5s ease-in-out 0.5s 1;
    text-decoration: none;
  }

  .wave-hand:hover {
    animation: wave 1s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    :global(::view-transition-group(*)),
    :global(::view-transition-old(*)),
    :global(::view-transition-new(*)) {
      animation: none !important;
    }
  }
</style>
