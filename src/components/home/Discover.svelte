<script lang="ts">
  import { quintOut } from 'svelte/easing';
  import { fly } from 'svelte/transition';
  import LetterPullUp from '../LetterPullUp.svelte';
  import Confetti from '../ui/Confetti.svelte';
  import { goto } from '$app/navigation';
  import { PersonStanding } from 'lucide-svelte';

  let mounted = $state(false);

  $effect(() => {
    if (mounted) return;
    mounted = true;
  });

  const handleNavigation = (path: string) => {
    goto(path);
  };
</script>

<section class="flex h-full w-full flex-col justify-center gap-6">
  <div class="flex items-center gap-2 text-4xl">
    {#if mounted}
      <span transition:fly={{ y: -100, duration: 500, delay: 300, easing: quintOut }}>
        <PersonStanding class="-ml-1 mr-1 h-10 w-10 text-primary" />
      </span>
    {/if}
    <LetterPullUp words="more from me" delay={50} className="text-left text-3xl" />
  </div>
  <div class="flex min-h-[200px] flex-col gap-4">
    {#if mounted}
      <Confetti options={{ particleCount: 30 }}>
        <button
          class="btn btn-info btn-lg btn-block animate-none"
          in:fly={{ y: 50, duration: 750, delay: 300, easing: quintOut }}
        >
          show me something cool
        </button>
      </Confetti>
      <button
        class="btn btn-primary btn-lg btn-block animate-none"
        onclick={() => handleNavigation('/projects')}
        in:fly={{ y: 100, duration: 750, delay: 300, easing: quintOut }}
      >
        check out my work
      </button>
    {/if}
  </div>
</section>
