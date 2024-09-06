<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount, type Snippet } from 'svelte';

	let scrollContainer: HTMLElement;
	let observer: IntersectionObserver;

	type ScrollAreaProps = {
		classname?: string;
		children: Snippet;
	};

	let { classname = '', children }: ScrollAreaProps = $props();

	function handleIntersection(entries: IntersectionObserverEntry[]) {
		console.log('Intersection callback triggered');
		entries.forEach((entry) => {
			console.log('Entry:', entry.target, 'Intersecting:', entry.isIntersecting);
			if (entry.isIntersecting && !entry.target.classList.contains('scrolled-into-view')) {
				console.log('Scrolling into view:', entry.target);
				entry.target.classList.add('scrolled-into-view');
				entry.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
			}
		});
	}

	function setupObserver() {
		console.log('Setting up observer');
		if (scrollContainer) {
			console.log('Scroll container found');
			observer = new IntersectionObserver(handleIntersection, {
				root: scrollContainer,
				threshold: 0.5
			});

			const projectCards = scrollContainer.getElementsByClassName('project-card');
			console.log('Found project cards:', projectCards.length);
			Array.from(projectCards).forEach((card) => {
				console.log('Observing card:', card);
				observer.observe(card);
			});
		} else {
			console.log('Scroll container not found');
		}
	}

	$effect(() => {
		if (scrollContainer) {
			console.log('Scroll container updated');
			setupObserver();
		}
	});
</script>

<div
	bind:this={scrollContainer}
	on:scroll
	class={cn('max-h-[calc(100vh-12rem)] overflow-auto rounded-md', classname)}
>
	{@render children()}
</div>
