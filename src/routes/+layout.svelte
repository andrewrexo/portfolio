<script lang="ts">
  import { onNavigate } from '$app/navigation';
  import Head from '$components/utility/Head.svelte';
  import '$styles/app.css';
  import Footer from '$components/home/Footer.svelte';
  import { page } from '$app/stores';
  import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-svelte';

  let { children } = $props();

  let mounted = $state(false);
  let hasViewTransitions = $state(false);
  let isDark = $state(false);
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

    const isRouteChange = navigation.from?.url.pathname !== navigation.to?.url.pathname;
    const isCrossRouteAnchor = Boolean(navigation.to?.url.hash) && isRouteChange;

    if (isRouteChange) {
      document.documentElement.classList.add('route-navigation');

      navigation.complete.finally(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.documentElement.classList.remove('route-navigation');
          });
        });
      });
    }

    if (isCrossRouteAnchor) return;

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
<nav class="border-neutral bg-base-200/90 sticky top-0 z-50 w-full border-b backdrop-blur-xl">
  <div
    class="mx-auto flex h-[66px] max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-10"
  >
    <a
      href="/"
      aria-label="Andrew Rubenstein, home"
      class="brand-link font-body text-base-content hover:text-primary inline-flex items-center gap-2 text-xl font-semibold tracking-[-0.05em] transition-colors duration-200 lg:ml-2"
    >
      <span class="inline-flex">
        <span>rubes</span>
        <span class="text-primary">.</span>
        <span>dev</span>
      </span>
      <span class="wave-hand" aria-hidden="true">👋</span>
    </a>

    <!-- Desktop nav -->
    <div class="hidden items-center gap-8 md:flex">
      <div class="flex items-center gap-6">
        <a
          href="/projects"
          class="font-body text-base-content/65 hover:text-base-content text-[13px] font-medium transition-colors duration-200"
        >
          work
        </a>
        <a
          href="/"
          class="font-body text-base-content/65 hover:text-base-content text-[13px] font-medium transition-colors duration-200"
        >
          experience
        </a>
      </div>

      <span class="bg-neutral h-4 w-px" aria-hidden="true"></span>

      <a
        href="mailto:andrew@rubes.dev"
        class="font-body text-base-content/60 hover:text-primary inline-flex items-center gap-1 text-[12px] font-medium transition-colors duration-200"
      >
        available for hire
        <ArrowUpRight size={14} strokeWidth={1.7} aria-hidden="true" />
      </a>

      <button
        onclick={toggleTheme}
        aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        class="font-body text-base-content/55 hover:text-primary inline-flex items-center gap-2 text-[12px] font-medium transition-colors duration-200"
      >
        {#if isDark}
          <Sun size={15} strokeWidth={1.6} aria-hidden="true" />
          <span>light</span>
        {:else}
          <Moon size={15} strokeWidth={1.6} aria-hidden="true" />
          <span>dark</span>
        {/if}
      </button>
    </div>

    <!-- Mobile controls -->
    <div class="flex items-center gap-5 md:hidden">
      <button
        onclick={toggleTheme}
        aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        class="text-base-content/60 hover:text-primary transition-colors duration-200"
      >
        {#if isDark}
          <Sun size={18} strokeWidth={1.5} aria-hidden="true" />
        {:else}
          <Moon size={18} strokeWidth={1.5} aria-hidden="true" />
        {/if}
      </button>
      <button
        onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileMenuOpen}
        class="text-base-content/60 hover:text-primary transition-colors duration-200"
      >
        {#if mobileMenuOpen}
          <X size={21} strokeWidth={1.5} aria-hidden="true" />
        {:else}
          <Menu size={21} strokeWidth={1.5} aria-hidden="true" />
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile menu dropdown -->
  {#if mobileMenuOpen}
    <div class="border-neutral bg-base-200/95 border-t px-5 py-7 backdrop-blur-xl md:hidden">
      <div class="grid grid-cols-2 gap-x-6 gap-y-6">
        <a
          href="/projects"
          class="font-body text-base-content hover:text-primary text-2xl font-semibold tracking-[-0.045em] transition-colors duration-200"
        >
          work
          <span class="text-primary">.</span>
        </a>
        <a
          href="/#experience"
          class="font-body text-base-content hover:text-primary text-2xl font-semibold tracking-[-0.045em] transition-colors duration-200"
        >
          experience
          <span class="text-primary">.</span>
        </a>
        <a
          href="mailto:andrew@rubes.dev"
          class="font-body text-base-content hover:text-primary text-2xl font-semibold tracking-[-0.045em] transition-colors duration-200"
        >
          contact
          <span class="text-primary">.</span>
        </a>
      </div>

      <a
        href="mailto:andrew@rubes.dev"
        class="border-neutral font-body text-base-content/60 hover:text-primary mt-7 flex items-center justify-between border-t pt-4 text-sm transition-colors duration-200"
      >
        <span>available for hire</span>
        <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
      </a>
    </div>
  {/if}
</nav>

<main class="flex min-h-dvh flex-col">
  <div class="mx-auto w-full max-w-[1440px] flex-1 px-5 md:px-8 lg:px-10">
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
    0%,
    100% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(16deg);
    }
    40% {
      transform: rotate(-9deg);
    }
    60% {
      transform: rotate(14deg);
    }
    80% {
      transform: rotate(-5deg);
    }
  }

  .wave-hand {
    display: inline-block;
    transform-origin: 70% 75%;
    animation: wave 1s ease-in-out 0.45s 1 both;
  }

  .brand-link:hover .wave-hand {
    animation: wave 0.9s ease-in-out 1;
  }

  @media (prefers-reduced-motion: reduce) {
    :global(::view-transition-group(*)),
    :global(::view-transition-old(*)),
    :global(::view-transition-new(*)) {
      animation: none !important;
    }

    .wave-hand,
    .brand-link:hover .wave-hand {
      animation: none;
    }
  }
</style>
