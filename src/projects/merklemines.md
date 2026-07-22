---
title: Merkle Mines
description: A Bitcoin mines game with provably fair rounds, a double-entry ledger, Web3 authentication, and Lightning Network support. Every round can be verified cryptographically.
github: https://github.com/andrewrexo/satoshi-mines
demo: https://merklemines.com
image: /merklemines.webp
priority: 1
published: true
---

<img style="view-transition-name: image-merklemines" src="/merklemines.webp" width="700" alt="Merkle Mines" />

## Overview

A minesweeper-style betting game where every round is cryptographically provable. Built from scratch with a focus on financial integrity and operational rigor.

## Features

- Provably-fair board generation using SHA256 HMAC + Fisher-Yates shuffle
- Double-entry bookkeeping ledger — all transactions in integer satoshis, no floating point
- Web3 wallet auth (EVM + Bitcoin LNURL) with HttpOnly cookie sessions
- Pluggable Bitcoin gateway: mock, bitcoin-core, LND, or hybrid onchain + Lightning
- Merkle proof verification with exportable proof packages
- Operator control panel with emergency stops, risk limits, and telemetry
- Configurable grid dimensions, mine count, and difficulty presets

## Tech Stack

- **Backend:** TypeScript, Node.js, PostgreSQL
- **Frontend:** Vanilla JS, Vite
- **Crypto:** ethers.js, @noble/secp256k1, bech32
- **Infrastructure:** Docker Compose, pluggable storage backends (memory / JSONL / Postgres)
