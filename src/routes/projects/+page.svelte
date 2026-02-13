<script lang="ts">
  import { page } from '$app/stores';
  import type { Project } from '$lib/project';

  const projects = $page.data.projects;
</script>

<div class="flex flex-col py-12 md:py-16">
  <section class="mb-12 flex flex-col gap-6">
    <a
      href="/"
      class="font-mono text-sm tracking-wide text-base-content/30 transition-colors duration-200 hover:text-primary"
    >
      &larr; back to home
    </a>
    <h1 class="font-display text-3xl text-base-content md:text-4xl">work & projects</h1>
  </section>

  <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {#each projects as project, i}
      <a
        href={`/projects/${project.slug}`}
        class="group flex flex-col gap-4"
        style="animation: fadeInUp 0.5s ease-out {i * 0.08}s both"
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
          <h2
            class="font-display text-xl text-base-content transition-colors duration-200 group-hover:text-primary"
          >
            {project.title}
          </h2>
          <p class="line-clamp-2 text-sm font-light text-base-content/50">
            {project.description}
          </p>
        </div>
      </a>
    {/each}
  </div>
</div>
