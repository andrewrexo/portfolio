<script lang="ts">
  import { page } from '$app/stores';
  import BackArrow from '$components/icons/BackArrow.svelte';
  import type { Project } from '$lib/project';
  import { fade, scale } from 'svelte/transition';

  const projects = $page.data.projects;

  function onImageLoad(event: Event) {
    const img = event.target as HTMLImageElement;
    img.classList.remove('opacity-0');
    const skeleton = img.previousElementSibling;
    if (skeleton) {
      skeleton.remove();
    }
  }

  // Preload images
  $effect(() => {
    projects.forEach((project: Project) => {
      if (project.image) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = project.image;
        document.head.appendChild(link);
      }
    });
  });
</script>

<div class="mx-auto flex max-w-5xl flex-col px-2 py-8">
  <section class="ml-2 flex items-center gap-4 md:ml-0">
    <button
      aria-label="Back to home"
      id="back-to-home"
      onclick={() => history.back()}
      class="hover:text-primary transition duration-300 hover:rotate-6"
    >
      <BackArrow class="mt-1 size-7" />
    </button>
    <h1 class="text-3xl font-extrabold">work & projects</h1>
  </section>

  <div
    in:fade={{ duration: 200 }}
    class="grid grid-cols-1 gap-8 overflow-hidden px-4 pt-6 md:grid-cols-2 lg:grid-cols-3"
  >
    {#each projects as project}
      <a
        href={`/projects/${project.slug}`}
        class="group bg-base-200 hover:bg-base-100 relative rounded-xl transition-all hover:shadow-lg"
        in:scale={{ duration: 300, delay: 150, start: 0.95 }}
      >
        <div class="relative aspect-video w-full">
          <div
            class="from-base-300 to-base-200 absolute inset-0 animate-pulse rounded-t-xl bg-linear-to-r transition-opacity duration-300"
          ></div>
          <img
            src={project.image}
            alt={project.title}
            class="h-full w-full rounded-t-xl object-cover opacity-0 transition-all duration-300 group-hover:scale-95"
            onload={onImageLoad}
            loading="eager"
            fetchpriority="high"
          />
        </div>
        <div class="mb-4 px-4 py-2">
          <h2 class="text-primary group-hover:text-primary/80 mb-2 text-2xl font-bold lowercase">
            {project.title}
          </h2>
          <p class="text-muted-foreground line-clamp-2 lowercase">{project.description}</p>
        </div>
        <div
          class="absolute inset-0 flex items-center justify-center rounded-xl
                 bg-black/30 opacity-0 transition-all
                 duration-300 group-hover:opacity-100"
        >
          <span
            class="btn btn-md btn-info btn-soft transition-all group-hover:mb-20 hover:cursor-default"
          >
            Open Project
          </span>
        </div>
      </a>
    {/each}
  </div>
</div>
