<script lang="ts">
  import Head from '$components/utility/Head.svelte';
  import '$styles/app.css';
  import Footer from '$components/Footer.svelte';
  import DotPattern from '$components/DotPattern.svelte';

  let { children } = $props();
  let mounted = $state(false);

  $effect(() => {
    mounted = true;
  });
</script>

<Head />

<div class="flex min-h-screen flex-col overflow-hidden">
  <DotPattern fillColor="rgb(163 163 163 / 0.2)" class="flex min-h-full flex-col">
    {#if mounted}

    <main class="container mx-auto flex flex-col px-4 md:px-12">
      {@render children()}
    </main>
      <Footer />
    {/if}
  </DotPattern>
</div>
