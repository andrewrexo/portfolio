<script lang="ts">
  import Hero from '$components/home/Hero.svelte';
  import SelectedWork from '$components/home/SelectedWork.svelte';
  import Experience from '$components/home/Experience.svelte';
  import Writing from '$components/home/Writing.svelte';
  import type { Post } from '$lib/post';
  import type { Project } from '$lib/project';

  type PageData = {
    posts: Post[];
    projects: Project[];
  };

  let { data }: { data: PageData } = $props();
</script>

<div class="flex flex-col gap-y-20 pb-16 md:gap-y-28">
  <Hero />

  <SelectedWork projects={data.projects} />

  <Experience />

  <section id="writing">
    <Writing posts={data.posts} />
  </section>
</div>
