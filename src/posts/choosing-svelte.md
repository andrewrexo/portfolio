---
title: Why I Keep Coming Back to Svelte
description: Svelte is great - now with Svelte 5 it's even better.
date: '2024-11-04'
categories:
  - sveltekit
  - svelte
published: true
---

I’ve been around the frontend block more times than I’d like to admit. React, Vue, Solid, even the occasional fling with Alpine or Lit. But no matter what I try, I keep coming back to Svelte—and with Svelte 5 on the scene, that return feels less like a choice and more like fate.

Let me break down why Svelte is the cleanest frontend experience I’ve had in years.

---

## 🤜 Svelte 5 vs React: A Different Mental Model

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

And yeah, Svelte 5 doesn’t live in a vacuum. With [SvelteKit](https://kit.svelte.dev/) evolving alongside it, you get the modern app stack right out of the box:

- File-based routing
- Server functions and API endpoints
- Built-in form actions
- TypeScript support that actually feels native

It’s like Next.js but without the mental gymnastics and configuration soup.

---

## 💬 So Why Do I Use Svelte for New Projects?

It’s not because it’s trendy. In fact, it’s _less_ trendy than React, which is exactly why I like it. I use Svelte when:

- I want to move fast without sacrificing code clarity
- I need to build something that _might_ scale, but don’t want to over-engineer it
- I care about bundle size, performance, and just… **vibes**

Every time I reach for Svelte, I feel like I’m writing less but getting more done. That’s not productivity hype—that’s actual mental bandwidth freed up.

---

## ⚠️ The Gotchas (Because No Framework is Perfect)

Let’s keep it honest:

- The ecosystem’s smaller—especially for bleeding-edge Svelte 5
- Some libraries haven't caught up to runes yet
- You’ll probably write more glue code than in React-land

But I’ll trade those for clean syntax and complete mental clarity any day.

---

## 🏁 Final thoughts

Svelte 5 didn’t just improve Svelte—it leveled it up. The rune system gives you the best parts of functional reactivity _without_ the boilerplate. It feels like frontend, evolved.

If you haven’t tried it yet, spin up a SvelteKit project, start fresh, and feel the difference. You might not go back.

Anyways, thanks for reading! If you're curious about Svelte 5 and want to dive deeper, I highly recommend checking out the [official Svelte documentation](https://svelte.dev/docs) and the [SvelteKit docs](https://kit.svelte.dev/docs). The community is also super welcoming and helpful on [Discord](https://svelte.dev/chat) and [GitHub Discussions](https://github.com/sveltejs/svelte/discussions).

Feel free to reach out if you have any questions or want to chat about Svelte! My email is `andrew@rubes.dev`

Happy coding! 🚀
