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
