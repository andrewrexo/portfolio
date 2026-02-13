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

## Features

- WebSocket-based real-time networking with server-authoritative gameplay at 20 Hz tick rate
- Click-to-target melee and ranged combat with hit calculations and damage visualization
- RuneScape-style skill leveling across Hitpoints, Combat, and more
- Lua-scripted quest system with dialogue, objectives, and rewards
- NPC-driven shops and recipe-based crafting
- Chunk-based world streaming with Tiled map editor integration
- NPC state machines handling idle, wandering, combat, and pathing
- Deployable as native desktop or WebAssembly builds

## Tech Stack

- **Server:** Rust, Axum, Tokio, SQLite
- **Client:** Rust, Macroquad
- **Protocol:** MessagePack over WebSocket
- **Quest Scripting:** Lua
- **Game Data:** TOML configs
- **Map Editor:** React + TypeScript (Tiled-compatible)
