---
title: Swappage
description: A cross-chain swap platform built with Next.js, Radix UI, Redux, and Supabase. Supports all EVM-compatible networks and Solana.
image: /swappage.webp
github: https://github.com/andrewrexo/swappage
demo: https://swappage.vercel.app/
priority: 3
published: true
---

<img style="view-transition-name: image-swappage" src="/swappage.webp" width="700" alt="Swappage" />

## Overview

Swappage is a cross-chain swap platform designed to feel simple in a space full of overwhelming UIs. The entire app and API is built with Next.js, and everything from the wallet connection flow to the order confirmation screen was designed to be clean and intuitive.

It supports simultaneous wallet connections from both EVM-compatible networks and Solana, so users aren't locked into one ecosystem. Swap between chains, track your orders, and get real-time pricing without the usual crypto app friction.

## Features

- **Cross-chain swapping** between Solana and Ethereum assets, bridging two of the biggest ecosystems in one interface
- **Multi-wallet support** across EVM and Solana. Connect both at the same time and switch between them seamlessly
- **Real-time rate fetching** with live pricing data from CoinMarketCap so users always see accurate conversion rates
- **Order persistence** via Supabase. Every swap is recorded with full transaction details, status tracking, and deposit/receive addresses
- **Accessible component system** built on Radix UI primitives with full keyboard navigation and screen reader support
- **Clean, focused UI** that prioritizes clarity. No token walls, no information overload. Just pick your assets and swap

## Tech Stack

- **Framework:** Next.js, TypeScript
- **UI:** Radix UI, custom components
- **State:** Redux with async thunks
- **Database:** Supabase (Postgres)
- **Web3:** wagmi, viem, Solana Web3 wallet adapter
- **Pricing:** CoinMarketCap API
