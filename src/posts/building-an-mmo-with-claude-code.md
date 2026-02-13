---
title: Building an MMO with Claude Code
description: An experiment in seeing how far AI-assisted development can take a solo developer building a multiplayer game from scratch.
date: '2026-02-12'
categories:
  - rust
  - ai
published: true
image: /claude_code.png
---

I've built multiplayer games before. More than once, actually. It's one of those projects I keep coming back to. Networking, state management, rendering, game design, infrastructure. It touches everything. Every attempt teaches you something new, and every attempt eventually dies under the weight of its own ambition.

This time I wanted to try something different. Not a different engine or language, but a different way of working. I wanted to see how far I could get building an MMO with [Claude Code](https://docs.anthropic.com/en/docs/claude-code) as my primary development partner.

---

## The experiment

The premise was simple: build a real, playable multiplayer game and lean on AI-assisted development as heavily as possible. Not a tech demo. Not a prototype with placeholder everything. I wanted to understand where it genuinely speeds things up and where it falls short.

I went with Rust for the server and client, WebSockets for networking, and a 2D isometric pixel-art style. The project is [Aeven](https://aeven.xyz), an open-source MMORPG you can play in the browser via WebAssembly or as a native desktop client.

The game needed real systems. Combat, skill progression, NPC AI, quests, crafting, shops, chunk-based world streaming. Not a toy.

---

## What worked

**Boilerplate and scaffolding.** The initial project structure, the networking layer, message serialization. All the stuff that's necessary but not particularly creative. Claude Code was great here. Setting up Axum WebSocket handlers, defining MessagePack protocols, wiring up the ECS. Work that normally takes days of cross-referencing docs happened in hours.

**System implementation from spec.** When I could clearly describe what a system should do, like "implement a RuneScape-style skill leveling system with XP thresholds and level-up events," the results were solid. It excels when the problem is well-defined and the patterns are established.

**Debugging networking issues.** Multiplayer bugs are notoriously painful. Having Claude Code help trace through client-server state desync saved me a ton of time. Describing the symptoms and getting back plausible hypotheses to investigate was genuinely useful.

**Lua scripting integration.** Wiring up a Lua scripting layer for quests and NPC dialogue, including the bridge between Rust and Lua, the quest state machine, and the dialogue tree format. It came together way faster than any previous attempt.

---

## Where it struggled

**Game feel.** The subjective stuff. How combat *feels*, the timing of hit feedback, the weight of character movement. These are tuning problems that require playing the game and iterating on feel, not logic. AI can implement the systems, but it can't tell you if 200ms feels better than 150ms for a hit delay.

**Architecture at scale.** Early on, Claude Code would suggest patterns that worked for the immediate problem but didn't account for how systems interact down the line. Chunk streaming, entity visibility, and network relevancy needed careful thinking that comes from experience with these specific problems.

**Pixel art and visual polish.** No surprises here. Asset creation, animation tuning, and visual coherence still need a human eye and a lot of iteration.

---

## The takeaway

Claude Code didn't build the game for me. But it changed the pace and the experience of building it. The tedious parts, the serialization code, the boilerplate, the "I know exactly what this needs to do but typing it out is going to take an hour" work. That's where AI shines. It lets you stay in the interesting problems longer.

For a solo developer working on something ambitious, that matters. The gap between "I know how to build this" and "I actually have the time and energy to build this" is where most side projects die. AI-assisted development compresses that gap.

Is it a replacement for knowing what you're doing? No. Architecture, game design instincts, debugging intuition. Those still come from experience. But as a force multiplier for a developer who already has that foundation? It's real.

The experiment is ongoing. [Aeven](https://github.com/andrewrexo/isometric-game) is open source if you want to follow along or contribute. The commit history tells the story pretty clearly.
