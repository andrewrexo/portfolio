<script lang="ts">
  import { quintOut } from 'svelte/easing';
  import { fly } from 'svelte/transition';
  import LetterPullUp from '../LetterPullUp.svelte';
  import Confetti from '../ui/Confetti.svelte';
  import { goto } from '$app/navigation';
  import { PersonStanding } from 'lucide-svelte';

  const handleNavigation = (path: string) => {
    goto(path);
  };
</script>

<section class="flex h-full w-full flex-col justify-center gap-6">
  <div class="flex items-center gap-2 text-4xl">
    <span in:fly={{ y: -100, duration: 300, easing: quintOut }}>
      <PersonStanding class="-ml-1 mr-1 h-10 w-10 text-primary" />
    </span>
    <LetterPullUp words="more from me" delay={40} className="text-left text-3xl" />
  </div>
  <div class="flex flex-col gap-4">
    <Confetti options={{ particleCount: 30 }}>
      <button
        class="btn-override btn btn-outline btn-primary btn-lg btn-block"
        in:fly={{ y: 150, duration: 500, easing: quintOut }}
      >
        show me something cool
      </button>
    </Confetti>
    <button
      class="btn btn-primary btn-lg btn-block"
      onclick={() => handleNavigation('/projects')}
      in:fly={{ y: 225, duration: 500, delay: 300, easing: quintOut }}
    >
      check out my work
    </button>
  </div>
</section>

<style>
  button {
    animation: none;
  }

  button:hover {
    transform: scale(0.98);
  }

  .btn-override:hover {
    background-color: oklch(var(--pc) / 0.3);
    color: oklch(var(--p));
  }
</style>
