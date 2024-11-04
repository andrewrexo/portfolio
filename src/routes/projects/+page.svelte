<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { blur } from 'svelte/transition';

  let currentIndex = $state(0);
  let isTransitioning = $state(false);
  let mounted = $state(false);

  let lastScrollTime = $state(0);
  let scrollAccumulator = $state(0);

  let touchStartY = $state(0);

  const projects = $page.data.projects;
  const SCROLL_THRESHOLD = 100; // Amount of scroll needed to trigger a change
  const SCROLL_COOLDOWN = 750;

  function handleScroll(e: WheelEvent) {
    if (isTransitioning) return;

    const now = Date.now();
    if (now - lastScrollTime < SCROLL_COOLDOWN) {
      // Still in cooldown, accumulate scroll
      scrollAccumulator += e.deltaY;
      return;
    }

    // Add current scroll to accumulator
    scrollAccumulator += e.deltaY;

    // Check if we've scrolled enough to trigger a change
    if (Math.abs(scrollAccumulator) >= SCROLL_THRESHOLD) {
      const direction = scrollAccumulator > 0 ? 1 : -1;
      const newIndex = currentIndex + direction;

      if (newIndex >= 0 && newIndex < projects.length) {
        isTransitioning = true;
        lastScrollTime = now;
        currentIndex = newIndex;

        setTimeout(() => {
          isTransitioning = false;
        }, 500);
      }

      // Reset accumulator after handling the scroll
      scrollAccumulator = 0;
    }
  }

  function handleTouchStart(e: TouchEvent) {
    if (isTransitioning) return;
    touchStartY = e.touches[0].clientY;
  }

  function handleTouchMove(e: TouchEvent) {
    if (isTransitioning) return;

    const touchEndY = e.touches[0].clientY;
    const deltaY = touchStartY - touchEndY;

    const now = Date.now();
    if (now - lastScrollTime < SCROLL_COOLDOWN) {
      scrollAccumulator += deltaY;
      return;
    }

    scrollAccumulator += deltaY;

    if (Math.abs(scrollAccumulator) >= SCROLL_THRESHOLD) {
      const direction = scrollAccumulator > 0 ? 1 : -1;
      const newIndex = currentIndex + direction;

      if (newIndex >= 0 && newIndex < projects.length) {
        isTransitioning = true;
        lastScrollTime = now;
        currentIndex = newIndex;

        setTimeout(() => {
          isTransitioning = false;
        }, 500);
      }

      scrollAccumulator = 0;
      touchStartY = touchEndY;
    }
  }

  $effect(() => {
    if (mounted) return;

    mounted = true;
  });
</script>

{#if mounted}
  <div
    onwheel={handleScroll}
    ontouchstart={handleTouchStart}
    ontouchmove={handleTouchMove}
    class="bg-background h-screen w-screen overflow-hidden"
  >
    {#if projects.length > 0}
      <div
        class="relative h-full w-full"
        style="transform: translateY(-{currentIndex * 100}vh);
             transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
      >
        {#each projects as project, i}
          <div
            class="absolute left-0 top-0 h-screen w-full"
            style="transform: translateY({i * 100}vh)"
          >
            <div
              class="relative flex h-full w-full items-center justify-center"
              in:blur={{ duration: 300 }}
            >
              <div class="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  class="h-full w-full object-cover opacity-20"
                />
                <div
                  class="from-background/80 to-background/95 absolute inset-0 bg-gradient-to-b"
                ></div>
              </div>

              <div class="relative z-10 mx-auto max-w-3xl px-8 text-center">
                <h1 class="mb-6 text-4xl font-bold text-primary md:text-6xl">
                  {project.title}
                </h1>
                <p class="text-muted-foreground mb-8 text-lg md:text-xl">
                  {project.description}
                </p>
                <a href={`/projects/${project.slug}`} class="btn btn-primary btn-lg">
                  View Project
                </a>
              </div>
            </div>
          </div>
        {/each}
      </div>

      <div class="fixed right-8 flex -translate-y-24 flex-col gap-2 md:top-1/2 md:-translate-y-1/2">
        {#each projects as _, i}
          <button
            aria-label={`View project ${i + 1}`}
            class="h-3 w-3 rounded-full transition-colors"
            class:bg-primary={i === currentIndex}
            class:bg-gray-500={i !== currentIndex}
            onclick={() => (currentIndex = i)}
          ></button>
        {/each}
      </div>
    {/if}
  </div>
{/if}
