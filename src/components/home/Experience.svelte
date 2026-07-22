<script lang="ts">
  let { past = false }: { past?: boolean } = $props();

  const roles = [
    {
      company: 'Dexcelerate',
      url: null,
      logo: '/experience/dexcelerate.png',
      logoBackground: '#11141a',
      title: 'Frontend Engineer',
      period: 'Apr 2025 — Aug 2025',
      description:
        'Rebuilt a legacy Create React App trading terminal with TanStack Start and Zedux. The rewrite replaced its routing, data fetching, and state management while keeping the interface fast enough for live trading.'
    },
    {
      company: 'N.exchange',
      url: 'https://n.exchange',
      logo: '/experience/nexchange.png',
      logoBackground: '#ffffff',
      title: 'Frontend Engineer',
      period: 'Dec 2024 — Mar 2025',
      description:
        'Worked across the frontend, analytics, and infrastructure of a live crypto exchange. I fixed production bugs, improved page speed and SEO observability, then added Cloudflare WAF rules and server-side rate limiting that cut Vercel costs by about 95%.'
    },
    {
      company: 'Exodus',
      url: 'https://exodus.com',
      logo: '/experience/exodus.svg',
      logoBackground: '#ffffff',
      title: 'Support Engineer → Team Lead → Project Manager',
      period: 'Feb 2021 — Jul 2024',
      description:
        'I started in customer support, moved into leading a 10-person senior support team, and later managed seven developers across two product teams. The work covered exchange and fiat products, where I used SQL, Grafana, APIs, logs, and provider dashboards to investigate transaction issues. I also built React/TypeScript tools for the support team and kept our first-response SLA under 10 minutes.'
    }
  ];
</script>

<section class="flex flex-col gap-2">
  <header
    data-home-chapter="experience"
    class="chapter-header bg-base-200 md:before:bg-base-200 -mx-2 flex items-end px-2 py-2 md:sticky md:top-[6.1875rem] md:z-20 md:min-h-20 md:py-4 md:before:absolute md:before:inset-x-0 md:before:bottom-full md:before:h-8 md:before:content-['']"
    class:chapter-past={past}
  >
    <h2
      class="font-body text-base-content text-2xl leading-none font-semibold tracking-[-0.045em] lowercase md:text-[clamp(2.1rem,3.4vw,3rem)] md:tracking-[-0.055em]"
    >
      experience
      <span class="text-primary">.</span>
    </h2>
  </header>

  <div class="flex flex-col">
    {#each roles as role, i}
      <div
        class="grid items-start gap-3 py-5 sm:grid-cols-[minmax(150px,0.65fr)_minmax(0,1.35fr)] sm:gap-8 md:py-7"
        style="animation: fadeIn 0.5s ease-out {0.08 + i * 0.08}s both"
      >
        <div class="flex items-center gap-3">
          <div
            class="border-neutral flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border p-1.5 shadow-sm md:size-12"
            style:background-color={role.logoBackground}
          >
            <img src={role.logo} alt="" class="size-full object-contain" />
          </div>

          <div class="flex min-w-0 flex-col gap-1">
            {#if role.url}
              <a
                href={role.url}
                target="_blank"
                rel="noopener noreferrer"
                class="font-display text-base-content hover:text-primary text-base font-medium tracking-tight transition-colors duration-200 md:text-lg"
              >
                {role.company}
              </a>
            {:else}
              <span
                class="font-display text-base-content text-base font-medium tracking-tight md:text-lg"
              >
                {role.company}
              </span>
            {/if}
            <span
              class="text-base-content/45 font-mono text-[10px] leading-4 tracking-[0.06em] uppercase"
            >
              {role.period}
            </span>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="text-base-content text-base font-medium">{role.title}</h3>
          <p class="text-base-content/65 text-[15px] leading-6 md:text-sm md:leading-relaxed">
            {role.description}
          </p>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  @media (min-width: 48rem) {
    .chapter-header {
      transition:
        opacity 280ms ease,
        transform 360ms cubic-bezier(0.22, 1, 0.36, 1),
        filter 280ms ease;
    }

    .chapter-header.chapter-past {
      pointer-events: none;
      opacity: 0;
      filter: blur(3px);
      transform: translateY(-0.5rem);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .chapter-header {
      transition: none;
    }
  }
</style>
