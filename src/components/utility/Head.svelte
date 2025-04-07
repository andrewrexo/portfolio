<script lang="ts">
  import { page } from '$app/stores';

  export let title: string = $page.data.title;
  export let description: string = $page.data.description;
  export let image: string = 'https://rubes.dev/opengraph-image.jpg';
</script>

<svelte:head>
  <title>{title} | rubes.dev</title>
  <meta name="description" content={description} />
  <meta property="og_site_name" content="Andrew Rubenstein - Frontend Developer" />
  <meta property="og:url" content="https://rubes.dev{$page.url.pathname.toString()}" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <link rel="icon" href="https://rubes.dev/favicon-32x32.png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="rubes.dev" />
  <meta property="twitter:url" content="https://rubes.dev{$page.url.pathname.toString()}" />
  <meta property="twitter:image" content={image} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  {@html `  <script type="application/ld+json">{
     "@context": "https://schema.org",
     "@type": "Website",
     "name": "${title} | rubes.dev",
     "url": "https//rubes.dev${$page.url.pathname}",
     "logo": "https://rubes.dev/android-chrome-512x512.png"
     }</script>`}
</svelte:head>
