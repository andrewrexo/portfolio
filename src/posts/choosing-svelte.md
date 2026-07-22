---
title: Svelte is the best frontend framework
description: Why I keep coming back to Svelte, and why Svelte 5 made the choice even easier.
date: '2024-11-04'
categories:
  - sveltekit
  - svelte
published: true
image: /svelte-cover.svg
---

I've been around the frontend block more times than I'd like to admit. I've built with React, Vue, and Solid, along with the occasional project in Alpine or Lit. Some of them were good experiences. A few made me question my career choices. No matter what I try, though, I keep coming back to Svelte.

That became an even easier decision with Svelte 5.

React still dominates frontend development, so it is the comparison I end up making most often. React relies heavily on the virtual DOM and hooks. Those tools work, but a simple interaction can quickly turn into a small pile of `useEffect`, `useMemo`, `useCallback`, and dependency arrays. I know how to write that code. I would simply rather not when the problem itself is straightforward.

Svelte approaches the browser differently. Components are compiled at build time into small pieces of JavaScript, without a virtual DOM sitting between the component and the page. In practice, I spend less time translating what I want into framework-specific machinery.

Svelte 5's runes make that mental model more explicit. State is state. Derived values are derived values. Effects are there when I genuinely need to react to something outside that flow. I do not have to keep a second model of hook lifecycles and dependency arrays in my head while reading the code.

---

## Runes make the magic easier to follow

I liked Svelte's old `$:` syntax, but it could get strange once the logic grew or needed to move outside a component. The magic was pleasant right up until I had to work out exactly where it stopped.

Runes replace that ambiguity with `$state`, `$derived`, and `$effect`. The reactive pieces are visible in the code, which makes them easier to compose and easier to find later.

Here is a small Svelte 5 component using runes:

```svelte
<script>
  import { $state, $derived } from 'svelte';

  // Reactive state
  const count = $state(0);
  const step = $state(1);

  // Derived state
  const doubled = $derived(() => count * 2);
  const label = $derived(() => \`Current count is \${count}, doubled is \${doubled}\`);

  function increment() {
    count += step;
  }

  function decrement() {
    count -= step;
  }

  function setStep(event) {
    step = parseInt(event.target.value) || 1;
  }
</script>

<div>
  <h1>{$label}</h1>
  <div style="margin-bottom: 1rem;">
    <button onclick={decrement}>-</button>
    <button onclick={increment}>+</button>
  </div>
  <label>
    Step size:
    <input type="number" value={step} oninput={setStep} />
  </label>
</div>
```

What I like here is how little ceremony sits around the actual behavior. There is a count, a step size, two derived values, and a few event handlers. The reactive parts announce themselves without taking over the component. If I return to it a year later, I can follow what changes and why without reconstructing a lifecycle first.

---

## SvelteKit covers the rest

Svelte is the component layer. [SvelteKit](https://kit.svelte.dev/) is what makes it practical for me to use on a full application.

It handles the things I expect from a modern web framework: file-based routing, server functions, API endpoints, server-side rendering, code splitting, preloading, page transitions, and hot module replacement. Its adapters also let me deploy to platforms such as Vercel and Netlify without rebuilding the application around the host.

Next.js covers much of the same ground. The difference, for me, is how much framework knowledge I need to carry while using it. SvelteKit generally lets me move from a route to its data and server logic without digging through several overlapping conventions. I still need to understand what the framework is doing, but I spend less time negotiating with it.

That matters on real projects. Build tooling is useful, but I do not want it to become the project.

---

## Why I keep choosing it

Svelte is my default when I want to ship quickly without filling the codebase with boilerplate. The components stay readable, the bundles stay small, and I can build a larger application without reaching for an enormous framework setup on day one.

More importantly, I enjoy writing it. That sounds like a soft reason until you spend months maintaining a frontend. A framework shapes every ordinary task in the project, so small amounts of friction get repeated hundreds of times.

Svelte removes a lot of the friction I notice elsewhere. There is no virtual DOM to reason about, I rarely need elaborate state-management patterns, and the configuration tends to stay out of the way. The code usually resembles the interaction I had in mind when I started.

I do not feel as if I am fighting the framework. That is probably the simplest explanation for why I keep returning to it.

---

## Where Svelte still gets awkward

Svelte has tradeoffs, and pretending otherwise would make this a fairly useless recommendation.

Its ecosystem is smaller than React's and was still catching up with Svelte 5. A niche package may not exist, or the package you find may not support runes yet. In those cases, I sometimes have to write the integration myself.

That can produce cleaner code because I only build the part I need, but it is still work. React's enormous ecosystem means there is usually an existing package, example, or Stack Overflow answer for whatever strange integration has landed on my desk. Svelte does not always give me that escape hatch.

I am willing to accept more integration code because the result is usually clear enough that I can understand it when I come back later. For the kinds of applications I build, that trade feels better than paying React's complexity cost throughout the entire codebase.

---

## Final thoughts

Svelte changed what I expect from frontend development. State management and reactivity do not need to dominate the component, and a capable application framework does not need to make every decision feel like framework archaeology.

Calling anything the "best" framework is obviously subjective. Svelte is the best one for how I like to work: direct code, little ceremony, and fewer layers between an interaction and its implementation. Svelte 5 did not invent those qualities, but runes made them more consistent.

If you want to try it, the [official Svelte docs](https://svelte.dev/docs) and [SvelteKit docs](https://kit.svelte.dev/docs) are the best places to start. There is also an active community on [Discord](https://svelte.dev/chat) and [GitHub Discussions](https://github.com/sveltejs/svelte/discussions).

If you want to compare frontend framework scars, my email is `andrew@rubes.dev`.
