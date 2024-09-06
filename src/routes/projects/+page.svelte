<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { afterNavigate, goto } from '$app/navigation';
	import { AnimatePresence } from 'svelte-motion';
	import BlurFade from '$components/BlurFade.svelte';
	import { onMount, tick } from 'svelte';
	import BoxReveal from '$components/ui/BoxReveal.svelte';

	let projects = [
		{
			id: 1,
			title: 'swap.sh',
			description: 'A frontend for the exodus exchange API',
			image: '/swapsh.webp',
			tags: ['API', 'Frontend', 'Exchange']
		},
		{
			id: 2,
			title: 'milkshake',
			description: 'Embeddable widget for cross-chain swaps',
			image: '/milkshake.png',
			tags: ['Widget', 'Cross-chain', 'DeFi']
		},
		{
			id: 3,
			title: 'svelte-tezos',
			description: 'FOSS lib connecting Tezos dapps to Svelte',
			image: '/svelte-tezos.webp',
			tags: ['Svelte', 'Tezos', 'Library']
		},
		{
			id: 4,
			title: 'tezos vanity',
			description: 'A vanity address generator for Tezos',
			image: '/tezos-vanity.webp',
			tags: ['Tezos', 'Crypto', 'Tool']
		}
	];

	let isLoaded = $state(false);
	let transitioning = $state(false);
	let isHeaderFixed = $state(false);
	let scrollY = $state(0);

	$effect(() => {
		setTimeout(() => {
			isLoaded = true;
		}, 500);
	});

	const handleNavigation = (path: string) => {
		scrollY = window.scrollY;
		transitioning = true;
		goto(path);
	};

	const handleScroll = () => {
		isHeaderFixed = window.scrollY > 40; // Adjust this value as needed
		scrollY = window.scrollY;
	};

	$effect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	afterNavigate(() => {
		scrollTo(0, scrollY);
	});
</script>

<div class="projects-page" out:fade={{ duration: 400, delay: 100 }}>
	<AnimatePresence show={isLoaded && !transitioning}>
		<header
			in:fly={{ duration: 400, y: -50 }}
			out:fade={{ duration: 400, delay: 100 }}
			class="fixed-header {isHeaderFixed || transitioning ? 'is-fixed' : ''}"
		>
			<BlurFade>
				<div
					class="flex items-center py-4 px-4 md:px-8 gap-2 fixed-content"
					in:fly={{ duration: 400, y: -50 }}
					out:fly={{ duration: 400, y: -50, delay: 100 }}
				>
					<button
						on:click={() => handleNavigation('/')}
						class="mr-4 hover:text-secondary transition-colors"
					>
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
							class="feather feather-arrow-left hover:text-primary transition-all duration-500 hover:scale-105 hover:translate-x-2"
						>
							<line x1="19" y1="12" x2="5" y2="12"></line>
							<polyline points="12 19 5 12 12 5"></polyline>
						</svg>
					</button>
					<h1 class="text-2xl font-bold">Recent projects</h1>
				</div>
			</BlurFade>
		</header>
		<main class="projects-content pt-8">
			<main class="projects-content">
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{#each projects as project, index (project.id)}
						<BoxReveal>
							<div class="project-card" in:fly={{ y: 50, duration: 500, delay: index * 100 }}>
								<div class="overflow-hidden rounded-lg shadow-lg duration-300 bg-base-200 h-full">
									<img
										src={project.image}
										alt={project.title}
										class="w-full h-48 object-cover object-center"
									/>
									<div class="p-6">
										<h2 class="text-2xl font-bold mb-2 text-primary">{project.title}</h2>
										<p class="text-base-content/80 mb-4">{project.description}</p>
										<div class="flex flex-wrap gap-2">
											{#each project.tags as tag}
												<span class="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm">
													{tag}
												</span>
											{/each}
										</div>
									</div>
									<div
										class="absolute top-0 left-0 w-full h-full rounded-lg bg-base-300/80 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
									>
										<button
											class="px-4 py-2 bg-primary text-primary-content rounded-full hover:bg-primary-focus transition-colors duration-300"
										>
											View Project
										</button>
									</div>
								</div>
							</div>
						</BoxReveal>
					{/each}
				</div>
			</main>
		</main>
	</AnimatePresence>
</div>

<style lang="postcss">
	.projects-page {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		padding-top: 48px; /* Adjust this value to match your header height */
	}

	.fixed-header {
		position: fixed;
		display: flex;
		top: 0;
		left: 0;
		right: 0;
		z-index: 10;
		transition: all 0.3s ease-in-out;
		background-color: transparent;
	}

	.fixed-header.is-fixed {
		@apply bg-base-100/80 backdrop-blur-sm shadow-md lg:px-[5%] md:px-[1%];
	}

	.fixed-header.is-fixed .fixed-content {
		@apply flex justify-center w-full;
	}

	.fixed-header .fixed-content {
		@apply transition-all duration-300;
	}

	.projects-content {
		flex-grow: 1;
	}

	.project-card {
		@apply transform transition-transform duration-300 hover:-translate-y-2;
	}
</style>
