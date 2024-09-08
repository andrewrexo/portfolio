<script>
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>{$page.data.title} | rubes.dev</title>
  <meta name="description" content={$page.data.description} />
  <meta property="og_site_name" content="Andrew Rubenstein - Frontend Developer" />
  <meta property="og:url" content="https://www.rubes.dev{$page.url.pathname.toString()}" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={$page.data.title} />
  <meta property="og:description" content={$page.data.description} />
  <meta property="og:image" content="https://www.rubes.dev/android-chrome-512x512.png" />
  <link rel="icon" href={$page.data.icon.href} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="rubes.dev" />
  <meta property="twitter:url" content="https://www.rubes.dev{$page.url.pathname.toString()}" />
  <meta name="twitter:title" content={$page.data.title} />
  <meta name="twitter:description" content={$page.data.description} />
  {@html `  <script type="application/ld+json">{
     "@context": "https://schema.org",
     "@type": "Website",
     "name": "${$page.data.title} | rubes.dev",
     "url": "https//www.rubes.dev${$page.url.pathname}",
     "logo": "https://www.rubes.dev/android-chrome-512x512.png"
     }</script>`}
</svelte:head>
