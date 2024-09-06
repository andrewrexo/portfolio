<script lang="ts">
	import { inview } from 'svelte-inview';
	import { Motion, useAnimation } from 'svelte-motion';
	import { fade } from 'svelte/transition';

	interface BoxProps {
		duration?: number;
		boxColor?: string;
		width?: string;
		children?: any;
	}

	let { duration = 0.5, boxColor = '#5046e6', width, children }: BoxProps = $props();

	//   Animation Controls
	let mainControls = useAnimation();
	let sideControls = useAnimation();

	let viewEnter = () => {
		// console.log("view entered");
		mainControls.start('visible');
		sideControls.start('visible');
	};
	let viewLeave = () => {
		console.log('view exited');
		mainControls.start('hidden');
		sideControls.start('hidden');
	};
</script>

<div
	class="relative h-full p-0 m-0 block"
	style="width:{width}"
	use:inview
	on:inview_enter={viewEnter}
	on:inview_leave={viewLeave}
>
	<Motion
		let:motion
		variants={{
			hidden: { opacity: 0, y: -50 },
			visible: { opacity: 1, y: 0 }
		}}
		initial="hidden"
		exit="hidden"
		animate={mainControls}
		transition={{ duration: 0.5, ease: 'easeInOut', type: 'spring', stiffness: 75 }}
	>
		<div use:motion class="rounded-lg hover:border-primary border-base-content/50">
			{@render children()}
		</div>
	</Motion>
</div>
