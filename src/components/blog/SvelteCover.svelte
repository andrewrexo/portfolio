<div
  class="svelte-cover"
  role="img"
  aria-label="Svelte logo centered on a background matching the current site theme"
>
  <svg viewBox="0 0 1536 864" aria-hidden="true">
    <defs>
      <radialGradient id="svelte-cover-glow" cx="50%" cy="48%" r="48%">
        <stop offset="0" class="glow-start" />
        <stop offset="0.58" class="glow-middle" />
        <stop offset="1" class="glow-end" />
      </radialGradient>
      <pattern id="svelte-cover-grid" width="64" height="64" patternUnits="userSpaceOnUse">
        <path d="M64 0H0V64" class="grid-line" />
      </pattern>
      <filter id="svelte-cover-shadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="24" stdDeviation="24" class="logo-shadow" />
      </filter>
    </defs>

    <rect width="1536" height="864" class="background" />
    <rect width="1536" height="864" fill="url(#svelte-cover-glow)" />
    <rect width="1536" height="864" fill="url(#svelte-cover-grid)" />

    <circle cx="768" cy="432" r="210" class="logo-disc" />

    <g transform="translate(608 240) scale(3)" filter="url(#svelte-cover-shadow)">
      <path
        d="M94.1566,22.8189c-10.4-14.8851-30.94-19.2971-45.7914-9.8348L22.2825,29.6078A29.9234,29.9234,0,0,0,8.7639,49.6506a31.5136,31.5136,0,0,0,3.1076,20.2318A30.0061,30.0061,0,0,0,7.3953,81.0653a31.8886,31.8886,0,0,0,5.4473,24.1157c10.4022,14.8865,30.9423,19.2966,45.7914,9.8348L84.7167,98.3921A29.9177,29.9177,0,0,0,98.2353,78.3493,31.5263,31.5263,0,0,0,95.13,58.117a30,30,0,0,0,4.4743-11.1824,31.88,31.88,0,0,0-5.4473-24.1157"
        fill="#ff3e00"
      />
      <path
        d="M45.8171,106.5815A20.7182,20.7182,0,0,1,23.58,98.3389a19.1739,19.1739,0,0,1-3.2766-14.5025,18.1886,18.1886,0,0,1,.6233-2.4357l.4912-1.4978,1.3363.9815a33.6443,33.6443,0,0,0,10.203,5.0978l.9694.2941-.0893.9675a5.8474,5.8474,0,0,0,1.052,3.8781,6.2389,6.2389,0,0,0,6.6952,2.485,5.7449,5.7449,0,0,0,1.6021-.7041L69.27,76.281a5.4306,5.4306,0,0,0,2.4506-3.631,5.7948,5.7948,0,0,0-.9875-4.3712,6.2436,6.2436,0,0,0-6.6978-2.4864,5.7427,5.7427,0,0,0-1.6.7036l-9.9532,6.3449a19.0329,19.0329,0,0,1-5.2965,2.3259,20.7181,20.7181,0,0,1-22.2368-8.2427,19.1725,19.1725,0,0,1-3.2766-14.5024,17.9885,17.9885,0,0,1,8.13-12.0513L55.8833,23.7472a19.0038,19.0038,0,0,1,5.3-2.3287A20.7182,20.7182,0,0,1,83.42,29.6611a19.1739,19.1739,0,0,1,3.2766,14.5025,18.4,18.4,0,0,1-.6233,2.4357l-.4912,1.4978-1.3356-.98a33.6175,33.6175,0,0,0-10.2037-5.1l-.9694-.2942.0893-.9675a5.8588,5.8588,0,0,0-1.052-3.878,6.2389,6.2389,0,0,0-6.6952-2.485,5.7449,5.7449,0,0,0-1.6021.7041L37.73,51.719a5.4218,5.4218,0,0,0-2.4487,3.63,5.7862,5.7862,0,0,0,.9856,4.3717,6.2437,6.2437,0,0,0,6.6978,2.4864,5.7652,5.7652,0,0,0,1.602-.7041l9.9519-6.3425a18.978,18.978,0,0,1,5.2959-2.3278,20.7181,20.7181,0,0,1,22.2368,8.2427,19.1725,19.1725,0,0,1,3.2766,14.5024,17.9977,17.9977,0,0,1-8.13,12.0532L51.1167,104.2528a19.0038,19.0038,0,0,1-5.3,2.3287"
        class="logo-inner"
      />
    </g>
  </svg>
</div>

<style>
  .svelte-cover {
    --cover-background: #f4f1ea;
    --cover-disc: #ebe7de;
    --cover-border: #d8d3c9;
    --cover-grid: #191815;
    --cover-grid-opacity: 0.055;
    --cover-glow: #b95f2b;
    --cover-shadow: #7a3519;
    --cover-logo-inner: #fffefa;
    aspect-ratio: 16 / 9;
    width: 100%;
  }

  :global(html[data-theme='studio-dark']) .svelte-cover {
    --cover-background: #11141a;
    --cover-disc: #171a21;
    --cover-border: #2b303a;
    --cover-grid: #edece8;
    --cover-grid-opacity: 0.035;
    --cover-glow: #d17a45;
    --cover-shadow: #000000;
    --cover-logo-inner: #edece8;
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  .background {
    fill: var(--cover-background);
  }

  .glow-start {
    stop-color: var(--cover-glow);
    stop-opacity: 0.2;
  }

  .glow-middle {
    stop-color: var(--cover-glow);
    stop-opacity: 0.06;
  }

  .glow-end {
    stop-color: var(--cover-glow);
    stop-opacity: 0;
  }

  .grid-line {
    fill: none;
    stroke: var(--cover-grid);
    stroke-opacity: var(--cover-grid-opacity);
  }

  .logo-disc {
    fill: var(--cover-disc);
    stroke: var(--cover-border);
    stroke-width: 2;
  }

  .logo-shadow {
    flood-color: var(--cover-shadow);
    flood-opacity: 0.28;
  }

  .logo-inner {
    fill: var(--cover-logo-inner);
  }
</style>
