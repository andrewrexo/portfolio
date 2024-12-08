<script lang="ts">
  import Discover from '$components/home/Discover.svelte';
  import Hey from '$components/home/Hey.svelte';
  import Recent from '$components/home/Recent.svelte';
  import type { Post } from '$lib/post';

  type PageData = {
    posts: Post[];
  };

  let { data }: { data: PageData } = $props();
</script>

<div class="flex min-h-[calc(100svh-65px)] flex-col gap-y-10 px-4 pb-8 md:gap-y-14 md:px-12">
  <Hey />
  {#await data.posts}
    <Recent posts={[]} />
  {:then posts}
    <Recent {posts} />
    <Discover />
  {:catch error}
    <div class="card rounded-lg shadow-md">
      <p class="text-sm text-base-content/90">Error loading posts. Please try again.</p>
      <span class="text-xs text-error">{error.message}</span>
    </div>
  {/await}
</div>
