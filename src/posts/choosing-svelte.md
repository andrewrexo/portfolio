---
title: Choosing Svelte
description: Why Svelte is always my first choice when building web apps
date: '2024-11-04'
categories:
  - sveltekit
  - svelte
published: true
---

If you've been developing web apps for a while, you've likely heard the shpiel about how _x_ is the best framework for building web apps. I don't want to rehash that here; I think that every major framework is a valid choice in 2024. They're all pretty damn good at what they do.

Instead, I want to share why Svelte is always my _first_ choice when building any new web app, regardless of size, scope, or complexity.

## Why Svelte?

Let's start with a concrete example. [This website](https://rubes.dev) is (as you now might be able to tell) was built with Svelte & SvelteKit. The requirements are fairly simple, but I wanted it to be performant, easy to maintain, and render fast enough to be impressive. It a few interactive projects, a blog, and a few tools. Building this required a framework that could handle both static content and dynamic canvas-based applications. Svelte 5's unique architecture made it the perfect choice for several key reasons.

Let's dive into a few of the key features that made Svelte the best choice for my portfolio website.

### Performance and Bundle Size

My portfolio includes several Phaser 3 games and tools like OpenTXPacker and the Isometric Map Editor. Svelte's compile-time approach means there's no runtime overhead, resulting in significantly smaller bundle sizes compared to React or Vue. This was crucial since my canvas applications already had substantial JavaScript footprints.

## Runes Syntax and State Management

Svelte 5's runes syntax simplified state management across complex applications:

```svelte
let $activeLayer = 0;
let $tilesetData = [];

function updateLayer(index) {
  $activeLayer = index;
  scene.refreshTilemap($tilesetData[$activeLayer]);
}
```

This reactive approach eliminated the need for external state management libraries, making the code more maintainable and performant.

## Canvas Integration

Integrating Phaser 3 with Svelte was seamless. The framework's lightweight nature meant I could easily manage canvas lifecycles without fighting the framework:

```svelte
let game;

onMount(() => {
  game = new Phaser.Game(config);
  return () => game.destroy(true);
});
```

## View Transitions

The portfolio features smooth transitions between projects, which was trivial to implement using Svelte's built-in transitions and view transition API support:

```svelte
<img style="view-transition-name: image-{project.id}" src={project.image} transition:fade />
```

Choosing Svelte meant I could focus on building features rather than fighting framework limitations. Its perfect balance of performance, developer experience, and modern features made it the ideal choice for a portfolio that needed to handle everything from markdown blog posts to complex canvas applications.
