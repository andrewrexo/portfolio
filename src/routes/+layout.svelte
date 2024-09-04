<script lang="ts">
	import '$styles/app.css';
	import Footer from '$components/Footer.svelte';
	import DotPattern from '$components/DotPattern.svelte';

	let { children } = $props();
	let mounted = $state(false);

	$effect(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div class="min-h-screen flex flex-col overflow-hidden">
		<DotPattern fillColor="rgb(163 163 163 / 0.15)">
			<main
				class="flex-grow mx-auto px-4 md:px-12 md:py-12 py-8 container max-w-6xl flex flex-col gap-8 md:gap-18"
			>
				{@render children()}
			</main>
		</DotPattern>

		<Footer />
	</div>
{/if}
