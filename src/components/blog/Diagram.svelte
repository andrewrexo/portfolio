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
    background: color-mix(in srgb, var(--color-base-content) 4%, var(--color-base-100));
    border: 1px solid var(--color-neutral);
    border-radius: 0.625rem;
    overflow: hidden;
  }
  .diagram-label {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 0.75rem;
    font-weight: 600;
    color: color-mix(in srgb, var(--color-base-content) 55%, transparent);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.875rem 1.25rem;
    border-bottom: 1px solid var(--color-neutral);
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
