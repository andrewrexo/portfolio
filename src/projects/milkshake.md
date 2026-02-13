---
title: Milkshake
description: An embeddable crypto-to-crypto cross-chain swap widget built with React. Allows for custom themes, configurable networks / assets, and supports multi-network wallet connections.
image: /milkshake.webp
github: https://github.com/andrewrexo/milkshake
demo: https://milkshake-co1.pages.dev/
priority: 0
published: true
---

<img style="view-transition-name: image-milkshake" src="/milkshake.webp" width="400" alt="Milkshake" />

## Overview

Milkshake is a drop-in swap widget that lets any dApp or website offer cross-chain token swaps without building the infrastructure themselves. Think of it like Stripe Checkout, but for crypto swaps. Embed it with a few lines of code, style it to match your brand, and you're live.

The goal was to make cross-chain swaps feel effortless for end users while giving developers full control over theming, supported networks, and asset configuration.

## Features

- **Cross-chain bridging** via the Hop Protocol API, supporting token transfers across EVM-compatible networks
- **Multi-wallet support** for both Solana and EVM chains. Users can connect wallets from different ecosystems simultaneously and get prompted contextually based on the selected network
- **Real-time token balances and pricing**, pulled on connection and refreshed automatically. USD conversion displayed inline so users always know what they're working with
- **Fully themeable** with a dynamic styling system. Third-party integrators can match the widget to their existing design system with minimal effort
- **Accessible by default**. Built with proper ARIA attributes, keyboard navigation, and focus management. Every component was hand-crafted with accessibility best practices in mind
- **Lightweight and embeddable**. Designed to drop into any React app with minimal bundle overhead

## Tech Stack

- **Framework:** React, TypeScript
- **Web3:** wagmi, viem, Solana Web3 wallet adapter
- **Bridging:** Hop Protocol API
- **Styling:** Custom theming engine with CSS variables
- **Build:** Vite, published as an npm-ready package
