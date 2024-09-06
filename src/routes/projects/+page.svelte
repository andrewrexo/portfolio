<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { afterNavigate, goto } from '$app/navigation';
  import { AnimatePresence } from 'svelte-motion';
  import BlurFade from '$components/BlurFade.svelte';
  import { onMount, tick } from 'svelte';
  import BoxReveal from '$components/ui/BoxReveal.svelte';

  let projects = [
    {
      id: 1,
      title: 'swap.sh',
      description: 'A frontend for the exodus exchange API',
      image: '/swapsh.webp',
      tags: ['API', 'Frontend', 'Exchange']
    },
    {
      id: 2,
      title: 'milkshake',
      description: 'Embeddable widget for cross-chain swaps',
      image: '/milkshake.webp',
      tags: ['Widget', 'Cross-chain', 'DeFi']
    },
    {
      id: 3,
      title: 'svelte-tezos',
      description: 'FOSS lib connecting Tezos dapps to Svelte',
      image: '/svelte-tezos.webp',
      tags: ['Svelte', 'Tezos', 'Library']
    },
    {
      id: 4,
      title: 'tezos vanity',
      description: 'A vanity address generator for Tezos',
      image: '/tezos-vanity.webp',
      tags: ['Tezos', 'Crypto', 'Tool']
    }
  ];

  let isLoaded = $state(false);
  let transitioning = $state(false);
  let isHeaderFixed = $state(false);
  let scrollY = $state(0);

  let imagesLoaded = $state(0);
  let totalImages = projects.length;

  $effect(() => {
    if (imagesLoaded === totalImages) {
      setTimeout(() => {
        isLoaded = true;
      }, 500);
    }
  });

  function imageLoaded() {
    imagesLoaded++;
  }

  const handleNavigation = (path: string) => {
    scrollY = window.scrollY;
    transitioning = true;
    goto(path);
  };

  const handleScroll = () => {
    isHeaderFixed = window.scrollY > 40; // Adjust this value as needed
    scrollY = window.scrollY;
  };

  $effect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  onMount(() => {
    projects.forEach((project) => {
      const img = new Image();
      img.src = project.image;
      img.onload = imageLoaded;
    });
    console.log(imagesLoaded, totalImages);
  });

  afterNavigate(() => {
    scrollTo(0, scrollY);
  });
</script>

<svelte:head>
  {#each projects as project}
    <link rel="preload" href={project.image} as="image" />
  {/each}
</svelte:head>

<div class="projects-page" out:fade={{ duration: 400, delay: 100 }}>
  <AnimatePresence show={isLoaded && !transitioning}>
    <header
      in:fly={{ duration: 400, y: -50 }}
      out:fade={{ duration: 400, delay: 100 }}
      class="fixed-header {isHeaderFixed || transitioning ? 'is-fixed' : ''}"
    >
      <BlurFade>
        <div
          class="fixed-content flex items-center gap-2 px-4 py-4 md:px-8"
          in:fly={{ duration: 400, y: -50 }}
          out:fly={{ duration: 400, y: -50, delay: 100 }}
        >
          <button
            onclick={() => handleNavigation('/')}
            class="mr-4 transition-colors hover:text-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-arrow-left transition-all duration-500 hover:translate-x-2 hover:scale-105 hover:text-primary"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <h1 class="text-2xl font-bold">Recent projects</h1>
        </div>
      </BlurFade>
    </header>
    <main class="projects-content py-8">
      <main class="projects-content">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {#each projects as project, index (project.id)}
            <BoxReveal>
              <div class="project-card" in:fly={{ y: 50, duration: 500, delay: index * 100 }}>
                <div
                  class="h-full min-h-[300px] overflow-hidden rounded-lg bg-base-200 shadow-lg duration-300"
                >
                  <picture class="h-60 w-full">
                    <source media="(min-width:465px)" srcset={project.image} />
                    <img
                      src={project.image}
                      alt={project.title}
                      class="h-60 w-full object-cover object-center opacity-0 transition-opacity duration-300"
                      onload={(e) => {
                        imageLoaded();
                        (e.target as HTMLImageElement).style.opacity = '1';
                      }}
                    />
                  </picture>
                  <div class="p-6">
                    <h2 class="mb-2 text-2xl font-bold text-primary">{project.title}</h2>
                    <p class="mb-4 text-base-content/80">{project.description}</p>
                    <div class="flex flex-wrap gap-2">
                      {#each project.tags as tag}
                        <span class="rounded-full bg-primary/10 px-2 py-1 text-sm text-primary">
                          {tag}
                        </span>
                      {/each}
                    </div>
                  </div>
                  <div
                    class="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-lg bg-base-300/80 opacity-0 transition-opacity duration-300 hover:opacity-100"
                  >
                    <button
                      class="hover:bg-primary-focus rounded-full bg-primary px-4 py-2 text-primary-content transition-colors duration-300"
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </BoxReveal>
          {/each}
        </div>
      </main>
    </main>
  </AnimatePresence>
</div>

<style lang="postcss">
  .projects-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 48px; /* Adjust this value to match your header height */
  }

  .fixed-header {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    transition: all 0.3s ease-in-out;
    background-color: transparent;
  }

  .fixed-header.is-fixed {
    @apply bg-base-100/80 shadow-md backdrop-blur-sm md:px-[1%] lg:px-[5%];
  }

  .fixed-header.is-fixed .fixed-content {
    @apply flex w-full justify-center;
  }

  .fixed-header .fixed-content {
    @apply transition-all duration-300;
  }

  .projects-content {
    flex-grow: 1;
  }

  .project-card {
    @apply transform transition-transform duration-300 hover:-translate-y-2;
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
</style>
