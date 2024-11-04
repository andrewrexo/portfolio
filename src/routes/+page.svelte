<script lang="ts">
  import Discover from '$components/home/Discover.svelte';
  import Footer from '$components/home/Footer.svelte';
  import Hey from '$components/home/Hey.svelte';
  import Recent from '$components/home/Recent.svelte';
  import { page } from '$app/stores';

  let showFooter = $state(false);
  let contentRef: HTMLElement;

  $effect(() => {
    const checkVisibility = () => {
      if (!contentRef) return;
      const contentHeight = contentRef.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const bottomOfViewport = scrollPosition + viewportHeight;
      const bottomOfContent = contentRef.offsetTop + contentHeight;

      console.log({ contentHeight, viewportHeight });
      console.log({ bottomOfViewport, bottomOfContent });

      // Show footer if content fits viewport OR if scrolled near bottom
      showFooter = bottomOfViewport == bottomOfContent || bottomOfViewport >= bottomOfContent + 60;
    };

    checkVisibility();
    window.addEventListener('resize', checkVisibility);
    window.addEventListener('scroll', checkVisibility);

    return () => {
      window.removeEventListener('resize', checkVisibility);
      window.removeEventListener('scroll', checkVisibility);
    };
  });
</script>

<div
  bind:this={contentRef}
  class="flex min-h-[calc(100svh-65px)] flex-col gap-y-10 px-4 pb-8 md:gap-y-14 md:px-12"
>
  <Hey />
  <Recent posts={$page.data.posts} />
  <Discover />
</div>
