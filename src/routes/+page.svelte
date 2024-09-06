<script lang="ts">
  import { quintOut } from 'svelte/easing';
  import { fade, fly } from 'svelte/transition';
  import { spring } from 'svelte/motion';
  import BlurFade from '$components/BlurFade.svelte';
  import LetterPullUp from '$components/LetterPullUp.svelte';
  import Confetti from '$components/ui/Confetti.svelte';
  import { goto } from '$app/navigation';
  import { AnimatePresence, Motion } from 'svelte-motion';

  let mounted = $state(false);
  let textFinished = $state(false);
  let headerRendered = $state(false);
  let isNavigating = $state(false);

  const wiggle = spring(
    { x: 0, y: 0 },
    {
      stiffness: 0.1,
      damping: 0.15
    }
  );

  $effect(() => {
    setTimeout(() => {
      mounted = true;
      startWiggle();
    }, 500);
  });

  const startWiggle = () => {
    let t = 0;
    function loop() {
      t += 0.15;
      wiggle.set({
        x: Math.sin(t) * 5,
        y: Math.sin(t * 2) / 2
      });
      if (t < 6) {
        requestAnimationFrame(loop);
      } else {
        wiggle.set({ x: 0, y: 0 });
      }
    }
    loop();
  };

  const onHeaderRendered = () => {
    headerRendered = true;
  };

  const onanimend = () => {
    textFinished = true;
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:andrew@rubes.dev';
  };

  const handleNavigation = (path: string) => {
    isNavigating = true;
    goto(path);
  };
</script>

<svelte:head>
  <title>Andrew's Portfolio - Frontend Developer</title>
</svelte:head>

<section
  class="flex w-full gap-4 py-8 text-5xl font-bold md:text-6xl"
  in:fade={{ duration: 400, delay: 100 }}
  out:fade={{ duration: 300, delay: 100 }}
>
  <AnimatePresence show={!isNavigating && mounted} exitBeforeEnter>
    <Motion
      let:motion
      initial={{ opacity: 0, translateY: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 500, easing: 'easeInOut' }
      }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut'
      }}
    >
      <span use:motion class="flex items-center">hey</span>
    </Motion>
    <Motion
      let:motion
      initial={{ opacity: 0, rotate: 60, translateY: 20 }}
      animate={{ opacity: 1, rotate: 0, translateY: 0 }}
      exit={{
        opacity: 0
      }}
      transition={{
        delay: 0.5,
        type: 'spring',
        stiffness: 500,
        damping: 50
      }}
    >
      <span use:motion class="">👋</span>
    </Motion>
  </AnimatePresence>
</section>

<AnimatePresence show={!isNavigating && mounted}>
  <Motion
    let:motion
    initial={{ opacity: 0, translateY: 50 }}
    animate={{ opacity: 1, translateY: 0 }}
    transition={{
      duration: 0.5,
      ease: 'easeInOut'
    }}
    exit={{
      opacity: 0
    }}
    onAnimationComplete={onHeaderRendered}
  >
    <a
      use:motion
      class="text-4xl font-bold text-primary underline decoration-wavy decoration-1 underline-offset-8"
      href="mailto:andrew@rubes.dev"
    >
      i'm andrew.
    </a>
  </Motion>
</AnimatePresence>

<AnimatePresence show={!isNavigating && headerRendered}>
  <Motion
    let:motion
    initial={{ opacity: 0, translateY: 50 }}
    animate={{ opacity: 1, translateY: 0 }}
    exit={{
      opacity: 0
    }}
    transition={{
      duration: 0.3,
      ease: 'easeInOut',
      type: 'spring',
      stiffness: 100,
      damping: 10
    }}
  >
    <div class="flex flex-col gap-4 py-12" use:motion>
      <p in:fly={{ y: -50, duration: 400, delay: 700 }}>
        well, i'm actually a website. buuut, you're checking out <i>his</i>
        website. cool!
      </p>
      <p
        in:fly={{ y: -50, duration: 400, delay: 500, easing: quintOut }}
        onintroendcapture={onanimend}
      >
        thanks for stopping by. i hope you enjoy your stay!
      </p>
    </div>
  </Motion>
</AnimatePresence>

<section
  class="flex h-full w-full flex-grow flex-col justify-center gap-8"
  out:fade={{ duration: 300 }}
>
  <Motion
    let:motion
    initial={{ opacity: 0, translateY: 50 }}
    animate={{ opacity: 1, translateY: 0 }}
    transition={{
      duration: 0.5,
      ease: 'easeInOut',
      delay: 1
    }}
    exit={{
      opacity: 0,
      scale: 1,
      transition: { duration: 500, easing: 'easeInOut' }
    }}
    onAnimationComplete={onanimend}
  >
    <AnimatePresence show={headerRendered && !isNavigating}>
      <div
        use:motion
        class="flex items-center gap-2 text-4xl md:text-6xl"
        out:fade={{ duration: 300 }}
      >
        🔮
        <LetterPullUp words="discover" delay={0.1} class="text-left text-4xl md:text-6xl" />
      </div>
    </AnimatePresence>
    <AnimatePresence show={headerRendered && !isNavigating}>
      <div use:motion class="flex flex-col gap-4 py-2 md:py-4">
        <Confetti options={{ particleCount: 25 }}>
          <button
            class="btn btn-secondary btn-lg btn-block animate-none"
            in:fly={{ y: 50, duration: 750, delay: 300, easing: quintOut }}
            out:fly={{ y: -50, duration: 300, easing: quintOut }}
            disabled={isNavigating}
          >
            show me something cool
          </button>
        </Confetti>
        <button
          class="btn btn-primary btn-lg btn-block animate-none"
          onclick={() => handleNavigation('/projects')}
          in:fly={{ y: 50, duration: 750, delay: 300, easing: quintOut }}
          out:fly={{ y: -50, duration: 300, easing: quintOut }}
          disabled={isNavigating}
        >
          check out my work
        </button>
      </div>
    </AnimatePresence>
  </Motion>
</section>

<style lang="postcss">
  @keyframes wiggle {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(-15deg);
    }
    40% {
      transform: rotate(15deg);
    }
    60% {
      transform: rotate(-7deg);
    }
    80% {
      transform: rotate(7deg);
    }
    90% {
      transform: rotate(-3deg);
    }
    95% {
      transform: rotate(2deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
</style>
