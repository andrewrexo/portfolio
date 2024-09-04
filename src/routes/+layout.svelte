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

{#if mounted}
	<div class="flex flex-col min-h-screen overflow-hidden">
		<DotPattern fillColor="rgb(163 163 163 / 0.15)" class="flex-grow flex flex-col">
			<main
				class="flex-grow flex flex-col mx-auto py-8 px-4 md:px-12 md:pt-12 container max-w-6xl gap-8 md:gap-8"
			>
				{@render children()}
			</main>
			<Footer />
		</DotPattern>
	</div>
{/if}

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	:root::view-transition-old(root) {
		animation:
			90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation:
			210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	}
</style>
