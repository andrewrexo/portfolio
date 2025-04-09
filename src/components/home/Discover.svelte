<script lang="ts">
  import { quintOut } from 'svelte/easing';
  import { fly } from 'svelte/transition';
  import LetterPullUp from '../LetterPullUp.svelte';
  import { goto } from '$app/navigation';
  import { PersonStanding, FolderGit2, MailPlus } from 'lucide-svelte';

  const handleNavigation = (path: string) => {
    goto(path);
  };

  const contactUrl = 'https://linkedin.com/in/andrew-rubenstein-702807261';
</script>

<section class="flex h-full w-full flex-col justify-center gap-6">
  <div class="flex items-center gap-2 text-4xl">
    <span in:fly={{ y: -100, duration: 300, easing: quintOut }}>
      <PersonStanding class="text-primary mr-1 -ml-1 h-10 w-10" />
    </span>
    <LetterPullUp words="more from me" delay={2} className="text-left text-3xl" />
  </div>
  <div class="flex flex-col gap-4">
    <button
      class="btn btn-soft btn-info btn-block btn-xl"
      onclick={() => handleNavigation('/projects')}
      in:fly={{ y: 225, duration: 500, delay: 300, easing: quintOut }}
    >
      check out my work <FolderGit2 class="mt-0.5 ml-1 size-6" />
    </button>
    <button
      class="btn btn-accent btn-soft btn-block btn-xl"
      in:fly={{ y: 225, duration: 500, delay: 500, easing: quintOut }}
      onclick={() => window.open(contactUrl, '_blank')}
    >
      contact me <MailPlus class="mt-0.5 ml-1 size-6" />
    </button>
  </div>
</section>
