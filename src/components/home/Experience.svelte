<script lang="ts">
  const roles = [
    {
      company: 'Dexcelerate',
      url: null,
      title: 'Frontend Engineer',
      period: 'May 2025 — Jul 2025',
      description:
        'Led a full platform rewrite from a legacy Create React App codebase to a modern stack with TanStack Start and Zedux for state management — optimizing for low latency and high performance across an all-in-one crypto trading terminal.'
    },
    {
      company: 'N.exchange',
      url: 'https://n.exchange',
      title: 'Frontend Engineer',
      period: 'Dec 2024 — Mar 2025',
      description:
        'Fixed bugs, shipped new features, and improved page load speeds and SEO observability. Architected system protection measures to mitigate DDoS attacks and significantly cut infrastructure costs.'
    },
    {
      company: 'Exodus',
      url: 'https://exodus.com',
      title: 'Support Lead → Project Manager',
      period: 'Feb 2021 — Jul 2024',
      description:
        'Grew from front-line support into managing the team, then into project management over three years. As PM, shipped key revenue projects for exchange and fiat services. Led partner policy overhauls that significantly reduced transaction fees.'
    }
  ];
</script>

<section class="flex flex-col gap-8">
  <span class="font-mono text-sm tracking-wider text-base-content/40">03 — experience</span>

  <div class="flex flex-col">
    {#each roles as role, i}
      <div
        class="group grid gap-1 border-b border-neutral/30 py-6 first:border-t md:grid-cols-[200px_1fr] md:gap-8"
        style="animation: fadeIn 0.5s ease-out {0.1 + i * 0.08}s both"
      >
        <div class="flex flex-col gap-1">
          {#if role.url}
            <a
              href={role.url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-medium text-base-content transition-colors duration-200 hover:text-primary"
            >
              {role.company}
            </a>
          {:else}
            <span class="text-sm font-medium text-base-content">{role.company}</span>
          {/if}
          <span class="font-mono text-xs text-base-content/30">{role.period}</span>
        </div>
        <div class="flex flex-col gap-2 pt-1 md:pt-0">
          <h3 class="text-base text-base-content/80">{role.title}</h3>
          <p class="text-sm leading-relaxed text-base-content/40">{role.description}</p>
        </div>
      </div>
    {/each}
  </div>
</section>
