<script lang="ts">
	import { spring } from 'svelte/motion';

	let { color = 'currentColor', size = 24, className = '' } = $props();

	const y = spring(0, {
		stiffness: 0.1,
		damping: 0.15
	});

	let mounted = $state(false);

	$effect(() => {
		mounted = true;
		setInterval(() => {
			y.set(10, { hard: false });
			setTimeout(() => y.set(0, { hard: false }), 200);
		}, 3000);
	});
</script>

{#if mounted}
	<div style:transform="translateY({$y}px)" class={`duration-200 ${className}`}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<line x1="12" y1="5" x2="12" y2="19" />
			<polyline points="19 12 12 19 5 12" />
		</svg>
	</div>
{/if}
