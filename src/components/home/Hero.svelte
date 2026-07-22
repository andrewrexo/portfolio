<script lang="ts">
  import { Mail } from 'lucide-svelte';
</script>

<section class="flex h-full flex-col gap-5 md:gap-6">
  <div class="flex flex-col gap-5">
    <h1
      class="font-body text-base-content text-[2.75rem] leading-[0.95] font-semibold tracking-[-0.06em] md:text-6xl xl:text-7xl"
      style="animation: fadeIn 0.7s ease-out both"
    >
      andrew
      <br />
      rubenstein
    </h1>

    <p
      class="text-base-content/70 max-w-lg text-[15px] leading-6 md:text-base md:leading-relaxed"
      style="animation: fadeIn 0.7s ease-out 0.08s both"
    >
      Design-minded engineer. I care about performance, polish, and the small decisions that
      separate good software from great. I've been building across crypto and fintech, exchange
      platforms, trading terminals, and tools that handle real money at scale.
    </p>
  </div>

  <div
    class="border-neutral flex items-center justify-between gap-4 pt-4 md:border-t md:pt-5"
    style="animation: fadeIn 0.7s ease-out 0.16s both"
  >
    <a
      href="mailto:andrew@rubes.dev"
      class="text-primary hover:text-primary/75 inline-flex min-w-0 items-center gap-2 text-sm font-medium transition-colors duration-200"
    >
      <Mail class="shrink-0" size={16} strokeWidth={1.75} />
      <span class="truncate">andrew@rubes.dev</span>
    </a>
    <div class="flex shrink-0 items-center gap-2">
      <a
        href="https://github.com/andrewrexo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        title="GitHub"
        class="border-neutral text-base-content/60 hover:border-primary/50 hover:bg-primary/10 hover:text-primary inline-flex size-9 items-center justify-center rounded-full border transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          />
        </svg>
      </a>
      <a
        href="https://linkedin.com/in/andrew-rubenstein-702807261"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
        class="border-neutral text-base-content/60 hover:border-primary/50 hover:bg-primary/10 hover:text-primary inline-flex size-9 items-center justify-center rounded-full border transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          />
        </svg>
      </a>
    </div>
  </div>
</section>
