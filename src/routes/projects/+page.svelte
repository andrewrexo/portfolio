<script lang="ts">
  import { page } from '$app/stores';
  import BackArrow from '$components/icons/BackArrow.svelte';
  import { fade, scale } from 'svelte/transition';

  const projects = $page.data.projects;

  function onImageLoad(event: Event) {
    const img = event.target as HTMLImageElement;
    img.classList.remove('opacity-0');
    const skeleton = img.previousElementSibling;
    if (skeleton) {
      console.log(skeleton);
      skeleton.remove();
    }
  }
</script>

<div class="flex flex-col px-4 py-8 md:px-8">
  <section class="flex items-center gap-4">
    <button
      onclick={() => history.back()}
      class="transition duration-300 hover:rotate-6 hover:text-primary"
    >
      <BackArrow class="mt-2 size-7" />
    </button>
    <h1 class="text-3xl font-extrabold">work & projects</h1>
  </section>

  <div
    in:fade={{ duration: 200 }}
    class="grid grid-cols-1 gap-8 overflow-hidden pt-8 md:grid-cols-2 lg:grid-cols-3"
  >
    {#each projects as project}
      <a
        href={`/projects/${project.slug}`}
        class="group relative rounded-xl bg-base-200 transition-all hover:bg-base-100 hover:shadow-lg"
        in:scale={{ duration: 300, delay: 150, start: 0.95 }}
      >
        <div class="relative aspect-video w-full">
          <div
            class="absolute inset-0 animate-pulse rounded-t-xl bg-gradient-to-r from-base-300 to-base-200 transition-opacity duration-300"
          ></div>
          <img
            src={project.image}
            alt={project.title}
            class="h-full w-full rounded-t-xl object-cover opacity-0 transition-all duration-300 group-hover:scale-95"
            onload={onImageLoad}
          />
        </div>
        <div class="mb-4 px-4 py-2">
          <h2 class="mb-2 text-2xl font-bold lowercase text-primary group-hover:text-primary/80">
            {project.title}
          </h2>
          <p class="text-muted-foreground line-clamp-2 lowercase">{project.description}</p>
        </div>
        <div
          class="absolute inset-0 flex items-center justify-center
                 rounded-xl bg-black/30 opacity-0
                 transition-opacity duration-300 group-hover:opacity-100"
        >
          <span class="rounded-full bg-primary px-6 py-2 font-semibold text-white">
            View Project
          </span>
        </div>
      </a>
    {/each}
  </div>
</div>
