---
title: svelte is the best frontend framework
description: svelte is great - now with svelte 5 it's even better.
date: '2024-11-04'
categories:
  - sveltekit
  - svelte
published: true
image: /svelte-is-the-best-framework.avif
---

I’ve been around the frontend block more times than I’d like to admit. React, Vue, Solid, even the occasional fling with Alpine or Lit. But no matter what I try, I keep coming back to Svelte—and with Svelte 5 on the scene, that return feels less like a choice and more like fate.

While React still dominates the frontend landscape, Svelte—and especially **Svelte 5**—takes a radically different approach. React leans heavily on the virtual DOM and hooks, which often leads to overengineering simple interactions with `useEffect`, `useMemo`, and `useCallback`. Svelte throws all of that out. There's no virtual DOM. Components compile down to minimal, framework-less JavaScript at build time.

With **runes** in Svelte 5, the reactivity model becomes explicit, composable, and predictable—no more mysterious dependency arrays or stale closures. You don’t have to teach your brain to juggle the React lifecycle; you just write logic that updates when data changes. It’s not just a different syntax—it’s a fundamentally different mental model that lets you build apps like you’re writing plain JavaScript, with superpowers.

---

## 🔮 Runes: Reactivity, Rewritten

Svelte’s old `$:` syntax was cool, but let’s be real—it got weird fast. Magic is fun until you try to scale or abstract it. That’s where **runes** come in.

Now, reactivity is based on **$state**, **$derived**, and **$effect**. They’re simple functions that bring reactive values to life without hiding logic.

Here’s a simple example of what a Svelte 5 component looks like with runes:

```svelte
<script>
  import { $state, $derived, $effect } from 'svelte';

  // Reactive state
  const count = $state(0);
  const step = $state(1);

  // Derived state
  const doubled = $derived(() => count * 2);
  const label = $derived(() => \`Current count is \${count}, doubled is \${doubled}\`);

  // Reactive side effect
  $effect(() => {
    console.log('[Effect] Count changed:', count);
  });

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

That’s not just clean—it’s readable, debuggable, and scalable. There’s no guessing what’s reactive or when something runs. You can pick this code up a year later and _understand it instantly_.

---

## ⚡️ SvelteKit Makes It Even Better

And yeah, Svelte 5 doesn't live in a vacuum. With [SvelteKit](https://kit.svelte.dev/) evolving alongside it, you get the modern app stack right out of the box:

- File-based routing that feels natural and intuitive
- Server functions and API endpoints with zero configuration
- Lightning-fast page transitions with built-in animations
- Automatic code-splitting and preloading
- SEO-friendly by default with server-side rendering
- Hot module replacement that actually works reliably
- Deployment to any platform with adapters for Vercel, Netlify, and more

It's like Next.js but without the mental gymnastics and configuration soup. SvelteKit gives you everything you need to build production-ready apps without the framework fatigue.

The best part? It all just works together seamlessly, letting you focus on building your app instead of wrangling with build tools and configurations.

---

## 💬 So Why Do I Use Svelte for New Projects?

Let me tell you why Svelte has become my go-to framework—and it's not just because it's the cool new kid on the block. In fact, it's refreshingly _not_ the latest React clone. I reach for Svelte when:

- I need to **ship fast** without drowning in boilerplate or configuration hell
- I want code that reads like poetry, not like a legal document
- I'm building something that needs to scale gracefully, but I don't want to start with a nuclear-powered framework
- I care about delivering lightning-fast experiences with tiny bundle sizes
- I want to actually enjoy writing frontend code again

The magic of Svelte isn't just in what it does—it's in what it _doesn't_ do. No virtual DOM, no complex state management patterns, no endless configuration files. Just clean, intuitive code that does exactly what you expect.

Every time I fire up a new Svelte project, it's like taking a deep breath of fresh air. I'm not fighting the framework—I'm working _with_ it. And that's not just a productivity boost—it's a complete mindset shift.

---

## ⚠️ The Gotchas (Because No Framework is Perfect)

Let's be real—every framework has its quirks, and Svelte's no exception. But here's the thing: these aren't dealbreakers. The frontend ecosystem is growing fast, and Svelte is quickly establishing itself as a serious contender, with a rapidly expanding ecosystem and an enthusiastic community that's pushing the boundaries of what's possible.

That said, let's talk about somne of the downsides of choosing Svelte in 2025.

- The ecosystem is still maturing, particularly around Svelte 5's innovative features. While you might miss some niche npm packages, this often forces you to write cleaner, more focused code.
- Third-party libraries are gradually adopting the runes paradigm. This transition period gives you the perfect opportunity to craft elegant, purpose-built solutions rather than adapting complex third-party code.
- You'll find yourself writing more integration code compared to React, but the difference is night and day—it's clear, self-documenting, and actually makes sense when you come back to it later.

And here's the real truth: I'd take these minor inconveniences over React's complexity tax any day. The trade-off? Clean syntax that reads like poetry, and a mental model that actually makes sense. That's not just a win—it's a game-changer.

---

## 🏁 Final thoughts

Svelte represents a fundamental shift in how we think about frontend development. The framework's approach to reactivity and state management is refreshingly straightforward, making it easier to write and maintain complex applications.

If you haven't experienced Svelte yet, I encourage you to create a SvelteKit project and see for yourself. The combination of simplicity and power might just change how you think about web development.

Anyways, thanks for reading! If you're curious about Svelte 5 and want to dive deeper, I highly recommend checking out the [official Svelte documentation](https://svelte.dev/docs) and the [SvelteKit docs](https://kit.svelte.dev/docs). The community is also super welcoming and helpful on [Discord](https://svelte.dev/chat) and [GitHub Discussions](https://github.com/sveltejs/svelte/discussions).

Feel free to reach out if you have any questions or want to chat about Svelte! My email is `andrew@rubes.dev`

Happy coding! 🚀
