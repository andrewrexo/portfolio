---
title: Aeven
description: An isometric pixel-art MMORPG built entirely in Rust. Features real-time multiplayer combat, skill progression, Lua-scripted quests, and cross-platform support via native and WebAssembly builds.
image: /aeven.webp
github: https://github.com/andrewrexo/isometric-game
demo: https://aeven.xyz
priority: 2
published: true
---

<img style="view-transition-name: image-aeven" src="/aeven.webp" width="700" alt="Aeven" />

## Overview

Aeven is a fully playable isometric MMORPG built from the ground up in Rust. No engine, no framework, just raw Rust on both the client and server. The entire game runs in the browser via WebAssembly or as a native desktop app, with the same codebase powering both.

This is the kind of project that touches every part of the stack. Networking, rendering, game logic, scripting, persistence, world building. It's been my playground for exploring what it takes to ship a real multiplayer game as a solo developer.

## Features

- **Server-authoritative multiplayer** running at a 20 Hz tick rate over WebSockets. The server owns all game state, so cheating is off the table. Clients send inputs, the server resolves everything
- **Real-time combat** with click-to-target melee and ranged attacks, hit calculations, damage numbers, and death/respawn handling. Combat that actually feels responsive over the network
- **RuneScape-style skill progression** with XP curves, level-up events, and skills spanning Hitpoints, Combat, and more. The kind of system that keeps players grinding
- **Lua-scripted quests** with full dialogue trees, objectives, and reward payouts. Content creators can write new quests without touching Rust
- **NPC AI state machines** handling idle behavior, wandering, aggro, combat, pathing, and shop interactions. NPCs feel alive, not like props
- **Chunk-based world streaming** so the map can scale without loading the entire world into memory. Seamless transitions as players explore
- **Recipe-based crafting and NPC shops** for a real in-game economy
- **Cross-platform builds** from a single codebase. Play it in Chrome via WASM or download the native client

## Tech Stack

- **Server:** Rust, Axum, Tokio, SQLite
- **Client:** Rust, Macroquad
- **Protocol:** MessagePack over WebSocket
- **Quest Scripting:** Lua
- **Game Data:** TOML configs
- **Map Editor:** React + TypeScript (Tiled-compatible)
