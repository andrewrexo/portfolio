<script lang="ts">
  let wiggled = $state(false);

  $effect(() => {
    if (wiggled) return;

    const wiggleTimer = setTimeout(() => {
      wiggled = true;
    }, 500);

    return () => clearTimeout(wiggleTimer);
  });
</script>

<section class="grid w-full grid-cols-1 gap-4 pt-8 text-5xl md:text-6xl">
  <div class="flex items-center gap-4 font-bold">
    <span class="flex items-center">hey</span>
    <span class="wave-hand" class:waving={wiggled}>👋</span>
  </div>
  <a
    class="text-4xl font-bold text-primary underline decoration-wavy decoration-1 underline-offset-8"
    href="mailto:andrew@rubes.dev"
  >
    i'm andrew.
  </a>
  <div class="pt-4">
    <p class="max-w-prose text-lg">
      from pixels to performance, i strive to make the web more wonderful. looking for a
      collaborator on your next project? drop me a line at
      <a
        href="mailto:andrew@rubes.dev"
        class="inline-block text-primary underline decoration-wavy decoration-1 underline-offset-4"
      >
        andrew@rubes.dev
      </a>
    </p>
  </div>
</section>

<style lang="postcss">
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    /* First wave - gentle start */
    10% {
      transform: rotate(20deg);
    }
    20% {
      transform: rotate(-10deg);
    }
    30% {
      transform: rotate(18deg);
    }
    40% {
      transform: rotate(-8deg);
    }

    /* Second wave - slightly smaller */
    55% {
      transform: rotate(0deg);
    }
  }

  .wave-hand {
    display: inline-block;
    transform-origin: 65% 70%;
    will-change: transform;
  }

  .waving {
    animation: wave 2.3s ease-in-out 1;
  }
</style>
