<script lang="ts">
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let projects = $state([
		{
			id: 1,
			title: 'Project A',
			description: 'A brief description of Project A',
			image: '/path/to/imageA.jpg'
		},
		{
			id: 2,
			title: 'Project B',
			description: 'A brief description of Project B',
			image: '/path/to/imageB.jpg'
		},
		{
			id: 3,
			title: 'Project C',
			description: 'A brief description of Project C',
			image: '/path/to/imageC.jpg'
		},
		{
			id: 4,
			title: 'Project D',
			description: 'A brief description of Project D',
			image: '/path/to/imageD.jpg'
		}
	]);

	let isLoaded = $state(false);
	let transitioning = $state(false);

	onMount(() => {
		setTimeout(() => {
			isLoaded = true;
		}, 500);
	});

	function handleNavigation(path: string) {
		transitioning = true;

		setTimeout(() => {
			goto(path);
		}, 500);
	}
</script>

{#if isLoaded && !transitioning}
	<section
		class="flex flex-col gap-4 w-full max-w-none"
		in:fade={{ duration: 500, delay: 0 }}
		out:fade={{ duration: 500, delay: 0 }}
	>
		<div class="flex items-center mb-6">
			<button onclick={() => handleNavigation('/')} class="mr-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
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
			<h1 class="text-2xl font-bold">Work / Projects</h1>
		</div>

		<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
			{#each projects as project (project.id)}
				<div
					class="bg-gray-100 p-4 rounded-lg shadow-md overflow-hidden"
					in:fade={{ duration: 300, delay: 300 + project.id * 100 }}
				>
					<img
						src={project.image}
						alt={project.title}
						class="w-full h-40 object-cover mb-4 rounded"
					/>
					<h2 class="text-xl font-semibold mb-2">{project.title}</h2>
					<p class="text-gray-600">{project.description}</p>
				</div>
			{/each}
		</div>
	</section>
{/if}
