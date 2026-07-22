<script>
  let { title = 'Note', children } = $props();
</script>

<aside class="callout">
  <strong>{title}</strong>
  <div class="callout-body">
    {@render children()}
  </div>
</aside>

<style>
  .callout {
    background: oklch(0.17 0.01 260);
    border: 1px solid oklch(0.25 0.01 260);
    border-radius: 0.375rem;
    padding: 1.5rem 1.75rem;
    margin: 2rem 0;
    font-size: 0.9rem;
  }
  .callout strong {
    color: oklch(0.75 0.15 85);
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 0.8rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    display: block;
    margin-bottom: 0.5rem;
  }
  .callout-body :global(p) {
    margin: 0;
  }
</style>
