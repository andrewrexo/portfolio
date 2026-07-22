<script lang="ts">
  import { page } from '$app/stores';

  const projects = $page.data.projects;
</script>

<div
  class="grid gap-12 py-10 pb-20 md:py-16 lg:grid-cols-[minmax(260px,0.55fr)_minmax(0,1.45fr)] lg:gap-12 lg:pt-12 xl:grid-cols-[minmax(280px,0.55fr)_minmax(0,1.45fr)] xl:gap-16"
>
  <aside class="lg:sticky lg:top-[7.25rem] lg:self-start">
    <div class="flex flex-col gap-8">
      <a
        href="/"
        class="text-base-content/45 hover:text-primary inline-flex items-center gap-2 self-start font-mono text-[10px] tracking-[0.14em] uppercase transition-colors duration-200"
      >
        <span aria-hidden="true">&larr;</span>
        back to home
      </a>

      <h1
        class="font-body text-base-content max-w-md text-5xl leading-[0.94] font-semibold tracking-[-0.06em] lowercase md:text-6xl lg:text-[clamp(3.4rem,5vw,4.8rem)]"
      >
        work & projects<span class="text-primary">.</span>
      </h1>
    </div>
  </aside>

  <section class="flex min-w-0 flex-col gap-10 md:gap-12" aria-label="Projects">
    {#each projects as project, i}
      <a
        href={`/projects/${project.slug}`}
        class="group grid gap-4 md:grid-cols-[minmax(220px,0.9fr)_minmax(0,1.1fr)] md:items-start md:gap-7"
        style="animation: fadeInUp 0.5s ease-out {i * 0.07}s both"
      >
        <div
          class="border-neutral bg-base-100 group-hover:border-primary/35 overflow-hidden rounded-lg border transition-colors duration-300"
        >
          {#if project.image}
            <img
              src={project.image}
              alt={project.title}
              class="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
              loading={i < 2 ? 'eager' : 'lazy'}
            />
          {:else}
            <div class="bg-neutral aspect-[16/10] w-full"></div>
          {/if}
        </div>

        <div class="flex min-w-0 flex-col gap-3 pt-1">
          <div class="flex items-start justify-between gap-4">
            <h2
              class="font-display text-base-content group-hover:text-primary text-2xl font-medium tracking-tight transition-colors duration-200 md:text-[1.7rem]"
            >
              {project.title}
            </h2>
            <span
              class="border-neutral text-base-content/45 group-hover:border-primary/40 group-hover:text-primary mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full border text-xs transition-all duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              &rarr;
            </span>
          </div>
          <p class="text-base-content/60 text-[15px] leading-6 md:text-sm md:leading-relaxed">
            {project.description}
          </p>
        </div>
      </a>
    {/each}
  </section>
</div>
