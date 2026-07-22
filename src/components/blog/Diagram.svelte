<script>
  let { label = '', children } = $props();
</script>

<figure class="diagram-wrap">
  {#if label}
    <figcaption class="diagram-label">{label}</figcaption>
  {/if}
  <div class="diagram-body">
    {@render children()}
  </div>
</figure>

<style>
  .diagram-wrap {
    margin: 2.5rem 0;
    background: oklch(0.17 0.01 260);
    border: 1px solid oklch(0.25 0.01 260);
    border-radius: 0.625rem;
    overflow: hidden;
  }
  .diagram-label {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 0.75rem;
    font-weight: 600;
    color: oklch(0.55 0.01 260);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.875rem 1.25rem;
    border-bottom: 1px solid oklch(0.25 0.01 260);
    margin: 0;
  }
  .diagram-body {
    padding: 0;
  }
  .diagram-body :global(svg) {
    display: block;
    width: 100%;
    height: auto;
  }
</style>
