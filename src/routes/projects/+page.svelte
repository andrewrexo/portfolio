<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import BoxReveal from '$components/ui/BoxReveal.svelte';
	import { AnimatePresence } from 'svelte-motion';

	import BlurFade from '$components/BlurFade.svelte';

	let projects = [
		{
			id: 1,
			title: 'swap.sh',
			description: 'a frontend for the exodus exchange API',
			image: '/swapsh.webp'
		},
		{
			id: 2,
			title: 'milkshake',
			description: 'embeddable widget for xchain swaps',
			image: '/milkshake.webp'
		},
		{
			id: 3,
			title: 'svelte-tezos',
			description: 'FOSS lib connecting tezos dapps to svelte',
			image: '/svelte-tezos.webp'
		},
		{
			id: 4,
			title: 'tezos vanity',
			description: 'a vanity address generator for tezos',
			image: '/tezos-vanity.webp'
		}
	];

	let isLoaded = $state(false);
	let transitioning = $state(false);

	$effect(() => {
		setTimeout(() => {
			isLoaded = true;
		}, 500);
	});

	function handleNavigation(path: string) {
		transitioning = true;

		goto(path);
	}
</script>

<section out:fly={{ duration: 400, y: -25, delay: 100 }}>
	<BlurFade>
		{#if isLoaded && !transitioning}
			<div
				class="flex items-center pt-8 pb-8 md:pt-8 md:pb-8"
				in:fly={{ duration: 400, y: -50 }}
				out:fly={{ duration: 400, y: -50, delay: 100 }}
			>
				<button onclick={() => handleNavigation('/')} class="mr-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-arrow-left"
					>
						<line x1="19" y1="12" x2="5" y2="12"></line>
						<polyline points="12 19 5 12 12 5"></polyline>
					</svg>
				</button>
				<h1 class="text-2xl md:text-2xl font-bold">Work / Projects</h1>
			</div>
		{/if}
	</BlurFade>
</section>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4" out:fade={{ duration: 400, delay: 0 }}>
	<AnimatePresence show={isLoaded && !transitioning}>
		{#each projects as project (project.id)}
			{@const revealTime = 0.25 + project.id * 0.1}
			<BoxReveal duration={revealTime} boxColor="oklch(var(--p))" width="100%">
				<div class="p-4 rounded-lg text-left shadow-md bg-base-200 overflow-hidden">
					<img
						src={project.image}
						alt={project.title}
						class="w-full h-40 object-cover mb-4 rounded"
					/>
					<h2 class="text-xl font-semibold mb-2">{project.title}</h2>
					<p class="text-base-content/50">{project.description}</p>
				</div>
			</BoxReveal>
		{/each}
	</AnimatePresence>
</div>
