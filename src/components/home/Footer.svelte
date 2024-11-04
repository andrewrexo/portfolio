<script lang="ts">
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  type Position = 'sticky' | 'fixed';

  let { position = 'fixed' }: { position?: Position } = $props();

  const githubUrl = 'https://github.com/andrewrexo';
  const linkedinUrl = 'https://linkedin.com/in/andrew-rubenstein-702807261';
</script>

<footer
  class="{position} bottom-0 max-h-16 bg-base-100/80 py-2 text-base-content shadow-md backdrop-blur-sm sm:min-h-10"
  in:fly={{ duration: 200, y: 25, easing: quintOut }}
  out:fly={{ duration: 200, y: 25, easing: quintOut }}
>
  <div class="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 md:gap-8 md:px-12">
    <span class="text-xs text-base-content/50 sm:text-sm md:min-w-[200px]">
      find me on <a class="text-base-content/80" href={githubUrl}>github</a>
      and
      <a class="text-base-content/80" href={linkedinUrl}>linkedin</a>
    </span>
    <div class="arrow-container my-4 flex w-full items-center gap-0 overflow-hidden">
      <svg class="h-4 w-[calc(100%-1rem)]" viewBox="0 0 1200 24" preserveAspectRatio="none">
        <defs>
          <path
            id="wavePath"
            d="M0 12 Q 50 5, 100 12 T 200 12 T 300 12 T 400 12 T 500 12 T 600 12 T 700 12 T 800 12 T 900 12 T 1000 12 T 1100 12 T 1200 12"
          />
        </defs>

        <use
          href="#wavePath"
          class="animate-flow"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          fill="none"
        />
        <use
          href="#wavePath"
          class="animate-flow"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          fill="none"
          x="1200"
        />
      </svg>
    </div>
    <div class="flex">
      <a
        aria-label="github"
        href="https://github.com/andrewrexo"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-square btn-ghost"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current"
        >
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          />
        </svg>
      </a>
      <a
        aria-label="linkedin"
        href="https://linkedin.com/in/andrew-rubenstein-702807261"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-square btn-ghost"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current"
        >
          <path
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          />
        </svg>
      </a>
    </div>
  </div>
</footer>

<style>
  .arrow-container {
    margin-right: -1rem;
  }

  :global(.animate-flow) {
    animation: flow 8s linear infinite;
  }

  @keyframes flow {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-1200px);
    }
  }

  .arrow-container svg {
    overflow: hidden;
  }
</style>
