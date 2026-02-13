<script lang="ts">
  import type { Project } from '$lib/project';

  let { projects }: { projects: Project[] } = $props();

  const featured = projects.slice(0, 4);
</script>

<section class="flex flex-col gap-8">
  <span class="font-mono text-sm tracking-wider text-base-content/40">01 — selected work</span>

  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
    {#each featured as project, i}
      <a
        href={`/projects/${project.slug}?from=home`}
        class="group flex flex-col gap-4"
        style="animation: fadeInUp 0.6s ease-out {0.1 + i * 0.1}s both"
      >
        <div class="overflow-hidden rounded-lg bg-base-100">
          {#if project.image}
            <img
              src={project.image}
              alt={project.title}
              class="aspect-video w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              loading="eager"
            />
          {:else}
            <div class="aspect-video w-full bg-neutral"></div>
          {/if}
        </div>
        <div class="flex flex-col gap-1">
          <h3
            class="font-display text-xl text-base-content transition-colors duration-200 group-hover:text-primary"
          >
            {project.title}
          </h3>
          <p class="line-clamp-2 text-sm font-light text-base-content/50">
            {project.description}
          </p>
        </div>
      </a>
    {/each}
  </div>

  <a
    href="/projects"
    class="self-start text-sm text-base-content/40 transition-colors duration-200 hover:text-primary"
  >
    view all work &rarr;
  </a>
</section>
