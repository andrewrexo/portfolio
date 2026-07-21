---
title: winui
description: Windows 98, XP, and Vista themed UI components for Svelte 5 and React. Three published packages for building nostalgic retro desktop interfaces on the web.
github: https://github.com/andrewrexo/winui
image: /winui.webp
priority: 6
published: true
---

<img style="view-transition-name: image-winui" src="/winui.webp" width="700" alt="winui — Windows XP theme" />

## Overview

Windows-themed UI components for building retro desktop interfaces in the browser — draggable windows, a taskbar, a start menu, and a window manager, styled after Windows 98, XP, and Vista.

## Packages

- **@drewrube/winui-svelte** — 14 Svelte 5 components (Desktop, Window, Taskbar, StartMenu, and more) with a runes-based window manager
- **@drewrube/winui-react** — the same components ported to React 18/19 with `useWindowManager` and `useTheme` hooks
- **@drewrube/winui-themes** — shared CSS themes for Win98, XP, and Vista, switchable at runtime via a `data-theme` attribute

## Themes

One `data-theme` attribute swaps the whole desktop between eras — same components, same window state.

<img src="/winui-win98.webp" width="700" alt="winui — Windows 98 theme" />
<img src="/winui-vista.webp" width="700" alt="winui — Windows Vista theme" />

## Usage

```svelte
<script>
  import { Desktop, Window, Taskbar, StartMenu } from '@drewrube/winui-svelte';
  import { theme } from '@drewrube/winui-svelte';
  import '@drewrube/winui-themes/winxp.css';
</script>

<div data-theme={theme.version}>
  <Desktop>
    <Window id="my-window" title="Hello">
      <p>window content goes here</p>
    </Window>
    <Taskbar />
  </Desktop>
</div>
```

## Tech Stack

- **Frameworks:** Svelte 5 (runes), React 18/19
- **Tooling:** TypeScript, pnpm workspaces
