<script lang="ts">
	import '$styles/app.css';
	import Footer from '$components/Footer.svelte';
	import DotPattern from '$components/DotPattern.svelte';
	import { onNavigate } from '$app/navigation';

	let { children } = $props();
	let mounted = $state(false);

	$effect(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#333333" />
	<meta name="msapplication-TileColor" content="#7480ff" />
	<meta name="theme-color" content="#333333" />
</svelte:head>

<div class="flex flex-col min-h-screen overflow-hidden">
	<DotPattern fillColor="rgb(163 163 163 / 0.15)" class="flex-grow flex flex-col">
		{#if mounted}
			<main class="flex-grow flex flex-col mx-auto px-4 md:px-12 container max-w-6xl">
				{@render children()}
			</main>
			<Footer />
		{/if}
	</DotPattern>
</div>
