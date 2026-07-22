<script lang="ts">
  import type { Project } from '$lib/project';

  let { projects, past = false }: { projects: Project[]; past?: boolean } = $props();

  const featuredSlugs = [
    'aeven',
    'milkshake',
    'diffusioncanvas',
    'merklemines',
    'opentxpacker',
    'eoproxyts'
  ];

  const featured = $derived(
    featuredSlugs
      .map((slug) => projects.find((project) => project.slug === slug))
      .filter((project): project is Project => project !== undefined)
  );
</script>

<section class="border-neutral flex flex-col gap-2 border-t pt-6 md:border-0 md:pt-0">
  <header
    data-home-chapter="work"
    class="chapter-header bg-base-200 md:before:bg-base-200 -mx-2 flex items-end justify-between gap-4 px-2 py-2 md:sticky md:top-[6.1875rem] md:z-20 md:min-h-20 md:py-4 md:before:absolute md:before:inset-x-0 md:before:bottom-full md:before:h-8 md:before:content-['']"
    class:chapter-past={past}
  >
    <h2
      class="font-body text-base-content text-2xl leading-none font-semibold tracking-[-0.045em] lowercase md:text-[clamp(2.1rem,3.4vw,3rem)] md:tracking-[-0.055em]"
    >
      selected work
      <span class="text-primary">.</span>
    </h2>
    <a
      href="/projects"
      class="group text-base-content/55 hover:text-primary mb-0.5 inline-flex shrink-0 items-center gap-2 text-xs transition-colors duration-200"
    >
      <span class="hidden sm:inline">view all work</span>
      <span
        class="border-neutral group-hover:border-primary/40 inline-flex size-7 items-center justify-center rounded-full border transition-transform duration-200 group-hover:translate-x-0.5"
        aria-hidden="true"
      >
        &rarr;
      </span>
    </a>
  </header>

  <div class="flex flex-col">
    {#each featured as project, i}
      <a
        href={`/projects/${project.slug}?from=home`}
        class="group grid gap-4 py-5 md:grid-cols-[minmax(190px,0.8fr)_minmax(0,1.2fr)] md:items-start md:gap-5 md:py-6"
        style="animation: fadeInUp 0.5s ease-out {0.08 + i * 0.08}s both"
      >
        <div
          class="border-neutral bg-base-100 group-hover:border-primary/35 overflow-hidden rounded-lg border transition-colors duration-300"
        >
          {#if project.image}
            <img
              src={project.image}
              alt={project.title}
              class="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
              loading="eager"
            />
          {:else}
            <div class="bg-neutral aspect-[16/10] w-full"></div>
          {/if}
        </div>

        <div class="flex min-w-0 flex-col gap-2">
          <h3
            class="font-display text-base-content group-hover:text-primary text-xl font-medium tracking-tight transition-colors duration-200 md:text-2xl"
          >
            {project.title}
          </h3>
          <p class="text-base-content/60 text-[15px] leading-6 md:text-sm md:leading-relaxed">
            {project.description}
          </p>
        </div>
      </a>
    {/each}
  </div>
</section>

<style>
  @media (min-width: 48rem) {
    .chapter-header {
      transition:
        opacity 280ms ease,
        transform 360ms cubic-bezier(0.22, 1, 0.36, 1),
        filter 280ms ease;
    }

    .chapter-header.chapter-past {
      pointer-events: none;
      opacity: 0;
      filter: blur(3px);
      transform: translateY(-0.5rem);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .chapter-header {
      transition: none;
    }
  }
</style>
