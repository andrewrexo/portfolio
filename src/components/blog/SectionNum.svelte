<script>
  let { num = '01', label = '' } = $props();
</script>

<div class="section-header">
  <span class="section-num">{num} — {label}</span>
</div>

<style>
  .section-header {
    margin-bottom: 0.75rem;
  }
  .section-num {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 0.8rem;
    font-weight: 600;
    color: oklch(0.75 0.15 85);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
</style>
