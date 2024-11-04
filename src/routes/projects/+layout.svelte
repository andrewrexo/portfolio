<script lang="ts">
  let { children } = $props();
</script>

<div class="projects-container">
  {@render children()}
</div>

<style>
  .projects-container {
    view-transition-name: projects;
  }
</style>
