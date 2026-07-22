<script lang="ts">
  import Hero from '$components/home/Hero.svelte';
  import SelectedWork from '$components/home/SelectedWork.svelte';
  import Experience from '$components/home/Experience.svelte';
  import Writing from '$components/home/Writing.svelte';
  import type { Post } from '$lib/post';
  import type { Project } from '$lib/project';
  import { onMount } from 'svelte';

  type PageData = {
    posts: Post[];
    projects: Project[];
  };

  let { data }: { data: PageData } = $props();
  let activeChapterIndex = $state(0);

  onMount(() => {
    const chapters = Array.from(document.querySelectorAll<HTMLElement>('[data-home-chapter]'));
    let animationFrame: number | undefined;

    const updateActiveChapter = () => {
      animationFrame = undefined;
      let nextChapterIndex = 0;

      chapters.forEach((chapter, index) => {
        if (chapter.getBoundingClientRect().top <= 180) {
          nextChapterIndex = index;
        }
      });

      activeChapterIndex = nextChapterIndex;
    };

    const scheduleUpdate = () => {
      if (animationFrame !== undefined) return;
      animationFrame = requestAnimationFrame(updateActiveChapter);
    };

    updateActiveChapter();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (animationFrame !== undefined) cancelAnimationFrame(animationFrame);
    };
  });
</script>

<div
  class="grid gap-6 py-10 pb-16 md:gap-20 md:py-16 lg:grid-cols-[minmax(300px,0.8fr)_minmax(0,1.2fr)] lg:gap-20 lg:pt-6 lg:pb-20 xl:grid-cols-[minmax(340px,0.75fr)_minmax(0,1.25fr)] xl:gap-28"
>
  <aside class="profile-column lg:self-start">
    <div class="flex flex-col gap-6 md:gap-10">
      <Hero />
      <Writing posts={data.posts} />
    </div>
  </aside>

  <div class="flex min-w-0 flex-col gap-y-6 md:gap-y-24 lg:col-start-2 lg:pt-2">
    <section id="experience" class="border-neutral scroll-mt-28 border-t pt-6 md:border-0 md:pt-0">
      <Experience past={activeChapterIndex > 0} />
    </section>

    <SelectedWork projects={data.projects} past={activeChapterIndex > 1} />
  </div>
</div>

<style>
  @media (min-width: 64rem) {
    .profile-column {
      position: fixed;
      top: 6rem;
      left: max(2.5rem, calc((100vw - 90rem) / 2 + 2.5rem));
      width: calc((min(100vw, 90rem) - 10rem) * 0.4);
      max-height: calc(100svh - 7rem);
    }
  }

  @media (min-width: 80rem) {
    .profile-column {
      width: calc((min(100vw, 90rem) - 12rem) * 0.375);
    }
  }
</style>
