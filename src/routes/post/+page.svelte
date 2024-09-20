<script>
  import { goto } from '$app/navigation';
  import { fade } from 'svelte/transition';

  let countdown = $state(3);

  $effect(() => {
    const timer = setInterval(() => {
      countdown--;
      if (countdown === 0) {
        clearInterval(timer);
        goto('/posts');
      }
    }, 1000);

    return () => clearInterval(timer);
  });
</script>

<div
  class="mx-auto max-w-5xl px-4 py-8 text-xl sm:px-6 lg:px-8"
  transition:fade={{ duration: 500 }}
>
  hey, I think you're looking for /posts/. I'll redirect you there {countdown === 0
    ? 'now'
    : `in ${countdown} second${countdown !== 1 ? 's' : ''}`}.
</div>
