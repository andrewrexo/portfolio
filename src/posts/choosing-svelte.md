---
title: Svelte is the best frontend framework
description: svelte is great - now with svelte 5 it's even better.
date: '2024-11-04'
categories:
  - sveltekit
  - svelte
published: true
image: /svelte-is-the-best-framework.avif
---

I've been around the frontend block more times than I'd like to admit. React, Vue, Solid, even the occasional fling with Alpine or Lit. But no matter what I try, I keep coming back to Svelte. And with Svelte 5 on the scene, that return feels less like a choice and more like fate.

React still dominates the frontend landscape, but Svelte 5 takes a radically different approach. React leans heavily on the virtual DOM and hooks, which often leads to overengineering simple interactions with `useEffect`, `useMemo`, and `useCallback`. Svelte throws all of that out. There's no virtual DOM. Components compile down to minimal, framework-less JavaScript at build time.

With runes in Svelte 5, the reactivity model becomes explicit, composable, and predictable. No more mysterious dependency arrays or stale closures. You don't have to teach your brain to juggle the React lifecycle. You just write logic that updates when data changes. It's a fundamentally different mental model that lets you build apps like you're writing plain JavaScript, with superpowers.

---

## Runes: Reactivity, Rewritten

Svelte's old `$:` syntax was cool, but let's be real, it got weird fast. Magic is fun until you try to scale or abstract it. That's where runes come in.

Reactivity is now based on `$state`, `$derived`, and `$effect`. Simple functions that bring reactive values to life without hiding logic.

Here's what a Svelte 5 component looks like with runes:

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

That's clean, readable, and scalable. There's no guessing what's reactive or when something runs. You can pick this code up a year later and _understand it instantly_.

---

## SvelteKit Makes It Even Better

Svelte 5 doesn't live in a vacuum. With [SvelteKit](https://kit.svelte.dev/) evolving alongside it, you get the modern app stack right out of the box:

- File-based routing that feels natural
- Server functions and API endpoints with zero configuration
- Fast page transitions with built-in animations
- Automatic code-splitting and preloading
- SEO-friendly by default with server-side rendering
- Hot module replacement that actually works
- Deployment to any platform with adapters for Vercel, Netlify, and more

It's like Next.js but without the mental gymnastics. SvelteKit gives you everything you need to build production-ready apps without the framework fatigue.

The best part? It all just works together, letting you focus on building your app instead of fighting build tools.

---

## So Why Do I Use Svelte?

Svelte has become my go-to. It's not the cool new kid on the block. It's refreshingly _not_ the latest React clone. I reach for Svelte when:

- I need to ship fast without drowning in boilerplate
- I want code that's easy to read, not a legal document
- I'm building something that needs to scale but I don't need a nuclear-powered framework to get there
- I care about small bundle sizes and fast load times
- I want to actually enjoy writing frontend code again

The magic of Svelte isn't just in what it does, it's in what it _doesn't_ do. No virtual DOM, no complex state management patterns, no endless configuration files. Just clean code that does what you expect.

Every time I start a new Svelte project, I'm not fighting the framework. I'm working _with_ it.

---

## The Gotchas

Let's be real, every framework has quirks. Svelte's no exception. But these aren't dealbreakers. The ecosystem is growing fast and Svelte is establishing itself as a serious contender.

That said, here are some of the downsides of choosing Svelte in 2025:

- The ecosystem is still maturing, especially around Svelte 5. You might miss some niche npm packages, but honestly that often pushes you to write cleaner code anyway.
- Third-party libraries are still catching up to runes. Sometimes you end up writing your own solution, which isn't always a bad thing.
- You'll write more integration code compared to React, but it's clear, it makes sense, and you can actually understand it when you come back to it later.

I'd take these tradeoffs over React's complexity tax any day. Clean syntax, a mental model that makes sense. That's the deal.

---

## Final thoughts

Svelte changed how I think about frontend development. The approach to reactivity and state management is just straightforward. It makes writing and maintaining complex applications feel way less painful.

If you haven't tried it yet, spin up a SvelteKit project and see for yourself. It might change how you think about building for the web.

If you're curious about Svelte 5, check out the [official docs](https://svelte.dev/docs) and the [SvelteKit docs](https://kit.svelte.dev/docs). The community is super welcoming on [Discord](https://svelte.dev/chat) and [GitHub Discussions](https://github.com/sveltejs/svelte/discussions).

Feel free to reach out if you want to chat about Svelte. My email is `andrew@rubes.dev`
