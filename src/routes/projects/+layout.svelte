<script lang="ts">
  let { children } = $props();
</script>

<div class="projects-container flex min-h-full items-center justify-center">
  {@render children()}
</div>

<style>
  .projects-container {
    view-transition-name: projects;
    display: flex;
    min-height: calc(100vh - 100px);
    align-items: center;
    justify-content: center;
  }
</style>
