---
title: Aeven
description: A persistent isometric MMORPG with an authoritative Rust server, cross-platform clients, data-driven gameplay, live-ops tooling, and a purpose-built world editor.
image: /aeven.webp
github: https://github.com/andrewrexo/isometric-game
demo: https://aeven.xyz
priority: 2
published: true
---

<img style="view-transition-name: image-aeven" src="/aeven.webp" width="700" alt="Aeven gameplay showing an isometric town, character equipment, minimap, and action bar" />

## Overview

Aeven is a persistent isometric MMORPG built around an authoritative Rust simulation. The server owns movement, combat, inventory, progression, trading, and world state, while a shared Macroquad client targets desktop, the browser through WebAssembly, and Android.

The project spans far more than the game client: persistent accounts and characters, a chunk-streamed overworld, instanced interiors, Lua-scripted quests, public world statistics, operational control pages, a self-updating launcher, and a custom React studio for building and deploying maps and content. It is an end-to-end exploration of what it takes to operate a live multiplayer world as a solo developer.

## Features

- Persistent SQLite-backed accounts and characters in a chunk-streamed overworld with public and private interiors
- Server-authoritative movement, collision, combat, inventory, trading, shops, drops, progression, rewards, and access control
- Melee, ranged, and magic combat with equipment, prayers, spells, status effects, bosses, PvP arenas, and King of the Hill
- Gathering and production skills including farming, fishing, mining, woodcutting, cooking, smithing, fletching, leatherworking, and alchemy
- Lua-scripted quests with dialogue, objectives, rewards, and persisted state, backed by data-driven TOML and JSON content
- Banking, equipment, chests, collection logs, waystones, player stalls, contracts, crafting orders, titles, and world-map discovery
- Native desktop, browser/WASM, and Android clients built from the same Rust codebase
- Public world statistics and authenticated live-operations pages for administering the running game
- Purpose-built React map and content studio with validation, scoped users, asset importing, atomic writes, and explicit deployment controls
- Self-updating desktop launcher with versioned release manifests and SHA-256 artifact verification

## Tech Stack

- **Authoritative server:** Rust, Tokio, Axum
- **Persistence:** SQLite in WAL mode, SQLx migrations
- **Game client:** Rust, Macroquad
- **Realtime protocol:** Versioned MessagePack over WebSocket with a shared Rust wire-contract crate
- **Content:** Lua 5.4 quests, TOML gameplay data, versioned JSON maps
- **Map and content studio:** React, TypeScript, Zustand, Express
- **Public site and control UI:** SvelteKit, Svelte
- **Launcher:** Rust, eframe/egui
- **Delivery:** GitHub Actions, Python packaging tools, Cloudflare R2

## Engineering Highlights

- Server startup validates the complete content graph, including map dimensions, packed collision data, duplicate IDs, loot ranges, and cross-references between items, entities, quests, chests, and interiors
- CI gates native and WASM builds, formatting, Clippy, Rust tests, frontend checks, npm audits, and a release-mode capacity test before production deployment
- A synthetic 128-player full-tick benchmark runs at a 16.08 ms p95 and 17.44 ms p99 against the server's 50 ms tick budget
