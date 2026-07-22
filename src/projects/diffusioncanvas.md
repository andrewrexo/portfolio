---
title: Diffusion Canvas
description: A browser-based canvas for making AI pixel art. It combines node-based Retro Diffusion generation with a pixel editor, palette tools, and animation support.
github: https://github.com/andrewrexo/diffusion-canvas
image: /diffusioncanvas.webp
priority: 1
published: true
---

<img style="view-transition-name: image-diffusioncanvas" src="/diffusioncanvas.webp" width="700" alt="Diffusion Canvas" />

## Overview

An infinite canvas for making pixel art with [Retro Diffusion](https://retrodiffusion.ai). Drop in reference images, wire them into generator nodes, and iterate on the results with a built-in pixel editor — img2img, palette constraints, and hand editing in one place instead of bouncing between a prompt box and an image editor.

## Features

- Node-based generation — each generator card holds a prompt, style, output size, and seed, with results linked back on the canvas
- img2img and palette-constrained generation by dragging edges between image and generator ports
- Full pixel editor: pencil, eraser, flood fill, line, rectangle, eyedropper, brush sizes, and per-session undo
- Color quantization with median-cut or presets (Sweetie 16, PICO-8, Game Boy) plus Floyd–Steinberg and ordered dithering
- Animation support: spritesheet generation, a frame timeline with onion skinning, and looping GIF export via a dependency-free GIF89a encoder
- Projects autosave to the browser — no backend to run

## Tech Stack

- **Frontend:** TypeScript, Vite
- **Testing:** Vitest for the drawing algorithms, quantization, and GIF encoder; Playwright for full UI round-trips against a mocked API
- **CI:** lint, both test suites, and a production build on every push
