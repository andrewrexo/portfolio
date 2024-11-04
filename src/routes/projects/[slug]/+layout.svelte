<script>
  let { children } = $props();

  let mounted = $state(false);

  $effect(() => {
    mounted = true;
  });
</script>

{#if mounted}
  {@render children()}
{/if}
