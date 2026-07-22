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
    color: color-mix(in srgb, var(--color-base-content) 75%, transparent);
    background: color-mix(in srgb, var(--color-base-content) 4%, var(--color-base-100));
    border: 1px solid var(--color-neutral);
    border-radius: 0.375rem;
    padding: 1.5rem 1.75rem;
    margin: 2rem 0;
    font-size: 0.9rem;
  }
  .callout strong {
    color: var(--color-primary);
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
