<script lang="ts">
  import Discover from '$components/home/Discover.svelte';
  import Hey from '$components/home/Hey.svelte';
  import Recent from '$components/home/Recent.svelte';
  import { page } from '$app/stores';

  let mounted = $state(false);

  $effect(() => {
    mounted = true;
  });
</script>

<div class="flex min-h-[calc(100svh-65px)] flex-col gap-y-10 px-4 pb-8 md:gap-y-14 md:px-12">
  <Hey />
  {#if mounted}
    <Recent posts={$page.data.posts} />
    <Discover />
  {/if}
</div>
