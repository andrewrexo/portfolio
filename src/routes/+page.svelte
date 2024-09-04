<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import { spring } from 'svelte/motion';
	import BlurFade from '$components/BlurFade.svelte';
	import LetterPullUp from '$components/LetterPullUp.svelte';
	import Confetti from '$components/ui/Confetti.svelte';
	import { goto } from '$app/navigation';
	import { beforeNavigate } from '$app/navigation';

	let mounted = $state(false);
	let textFinished = $state(false);
	let headerRendered = $state(false);
	let isNavigating = $state(false);

	const wiggle = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.1,
			damping: 0.15
		}
	);

	$effect(() => {
		setTimeout(() => {
			mounted = true;
			startWiggle();
		}, 500);
	});

	const startWiggle = () => {
		let t = 0;
		function loop() {
			t += 0.15;
			wiggle.set({
				x: Math.sin(t) * 5,
				y: Math.sin(t * 2) / 2
			});
			if (t < 6) {
				requestAnimationFrame(loop);
			} else {
				wiggle.set({ x: 0, y: 0 });
			}
		}
		loop();
	};

	const onHeaderRendered = () => {
		headerRendered = true;
	};

	const onanimend = () => {
		textFinished = true;
	};

	const handleEmailClick = () => {
		window.location.href = 'mailto:andrew@rubes.dev';
	};

	const handleNavigation = (path: string) => {
		goto(path);
	};
</script>

<svelte:head>
	<title>Andrew's Portfolio - Frontend Developer</title>
</svelte:head>

<section
	class="flex flex-col gap-4 w-full max-w-none"
	in:fade={{ duration: 400, delay: 100 }}
	out:fade={{ duration: 300 }}
	onintroendcapture={onHeaderRendered}
>
	{#if mounted}
		<BlurFade duration={0.5} class="">
			<h1 class="font-bold text-4xl md:text-6xl pb-8 flex gap-3 py-8">
				<span>
					👋&nbsp; hey! i'm
					<a
						class="text-primary underline decoration-wavy decoration-1 underline-offset-8"
						href="mailto:andrew@rubes.dev"
					>
						andrew.
					</a>
				</span>
			</h1>
		</BlurFade>
	{/if}
	{#if mounted}
		<div class="flex flex-col gap-4 max-w-none" in:fade={{ duration: 600, delay: 500 }}>
			<p in:fly={{ y: -50, duration: 400, delay: 700 }}>
				i'm actually a website. buuut, you're checking out <i>his</i> website. cool!
			</p>
			<p in:fly={{ y: -50, duration: 400, delay: 1000, easing: quintOut }}>
				i know what you're thinking. oh, great! another portfolio site.
			</p>
			<p
				in:fly={{ y: -50, duration: 400, delay: 1300, easing: quintOut }}
				onintroendcapture={onanimend}
			>
				and yeah, it sort of is... <span
					in:fly={{ y: 100, duration: 700, delay: 3000, easing: quintOut }}
				>
					but you're already here, so go on and click around for a bit!
				</span>
			</p>
		</div>
	{/if}
</section>

<section
	class="flex-grow flex flex-col w-full max-w-none gap-8 h-full justify-center"
	out:fly={{ y: 50, duration: 500, easing: quintOut }}
>
	{#if textFinished}
		<BlurFade class="flex flex-col gap-2" duration={0.5}>
			<div class="flex gap-2 text-2xl md:text-4xl items-center" out:fade={{ duration: 300 }}>
				🔮
				{#if headerRendered}
					<LetterPullUp words="discover" delay={0.1} class="text-2xl text-left" />
				{/if}
			</div>
			<div
				class="flex flex-col gap-4 md:py-4 py-2"
				out:fly={{ y: 50, duration: 300, easing: quintOut }}
			>
				<Confetti options={{ particleCount: 25 }}>
					<button
						class="btn btn-secondary btn-block btn-lg"
						in:fly={{ y: 50, duration: 750, delay: 300, easing: quintOut }}
						out:fly={{ y: -50, duration: 300, easing: quintOut }}
						disabled={isNavigating}
					>
						show me something cool
					</button>
				</Confetti>
				<button
					class="btn btn-primary btn-block btn-lg"
					onclick={() => handleNavigation('/projects')}
					in:fly={{ y: 50, duration: 750, delay: 300, easing: quintOut }}
					out:fly={{ y: -50, duration: 300, easing: quintOut }}
					disabled={isNavigating}
				>
					check out my work
				</button>
			</div>
		</BlurFade>
	{/if}
</section>

<div out:fly={{ y: 50, duration: 500 }}>
	{#if textFinished}
		<section
			class="flex flex-col w-full max-w-none gap-8 mt-auto py-8"
			out:fade={{ duration: 300 }}
		>
			<span in:fade={{ duration: 500, delay: 500, easing: quintOut }}>
				<BlurFade duration={0.75} delay={1.5}>
					i'd love to hear from you. love the site? any questions? <a
						class="text-primary underline decoration-wavy decoration-1 underline-offset-4"
						href="mailto:andrew@rubes.dev">reach out!</a
					>
				</BlurFade>
			</span>
		</section>
	{/if}
</div>

<style lang="postcss">
	@keyframes wiggle {
		0% {
			transform: rotate(0deg);
		}
		20% {
			transform: rotate(-15deg);
		}
		40% {
			transform: rotate(15deg);
		}
		60% {
			transform: rotate(-7deg);
		}
		80% {
			transform: rotate(7deg);
		}
		90% {
			transform: rotate(-3deg);
		}
		95% {
			transform: rotate(2deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
