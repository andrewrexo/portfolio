---
title: Game development in the age of AI
description: What building Aeven with Claude Code taught me about speed, taste, architecture, and ownership.
date: '2026-02-12'
categories:
  - rust
  - ai
published: true
image: /claude_code.png
---

I've built multiplayer games before. More than once, actually. I think every gamer secretly _wants_ to create their own dream game. One thing that I've learned about game development is that delivering your dream game can very easily grow to be too large for one person. Every attempt at achieving this dream taught me something new, then eventually collapsed under its own ambition.

[Aeven](https://aeven.xyz) started with the same dangerous amount of ambition. The difference this time was how I worked and approached dividing my time throughout the development process. I used [Claude Code](https://docs.anthropic.com/en/docs/claude-code) as my primary development partner and tried to find out how far AI-assisted development could take a solo developer building an actual MMORPG.

I was not interested in making a small demo and wiping my hands clean of the work. Aeven needed robust combat, skill progression with depth, competent NPC AI, a quest engine, player economy, a deeply interactive world... the list goes on.

The obvious question was whether AI could help me build all of that. The answer is complicated; it's not just yes or no. Assets, map development, progression scaling, are some areas where I'd say AI is not as useful. Though, the more interesting question came later: what happens when writing code is no longer the slowest part of making a game?

---

## The speed is real

Claude Code is very good at work that is necessary, well understood, and slightly miserable to type. Initial project structure, server architecture, packet handlers and definitions, ECS wiring. I know what those pieces need to do, but normally I would spend days moving between documentation, compiler errors, and boilerplate. This time much of that work happened in hours.

It was also useful when I could describe a system clearly. A RuneScape-style skill system with XP thresholds and level-up events is a good example. The rules are known, the boundaries are visible, and the output is easy to test. In that situation, Claude Code could turn a fairly precise description into a solid first implementation very quickly. But it was hard getting it to _feel_ good. A lot of human thought and player testing feedback was needed to be enjoyable.

Networking bugs were another good use. Multiplayer state desync can waste an afternoon because the visible symptom is often nowhere near the actual mistake. Explaining what I was seeing and getting back a list of plausible paths to inspect saved me a lot of time. It did not magically solve every bug, but it made the search less lonely and less random.

The Lua layer for quests and NPC dialogue came together the same way. The bridge between Rust and Lua, the quest state machine, and the dialogue tree format were all established kinds of problems. There was still integration work, but far less blank-page work.

Aeven reached a level of scope that would have taken me much longer on my own. For a side project, speed is not a minor convenience. It can be the difference between having a playable game and having another abandoned repository with an impressive to-do list.

---

## Speed moves the bottleneck

Producing code faster did not remove the hard parts. It moved the bottleneck to deciding what should exist, checking whether the implementation belongs in the larger system, and noticing when a locally reasonable decision creates trouble somewhere else. I ran into this early in Aeven. Claude Code could suggest an architecture that solved the task in front of it while missing how it connects or collides with other existing gameplay systems or planned future content.

The awkward suggestions were rarely obvious disasters. They compiled and sometimes worked for quite a while. The problem appeared later, once several individually sensible systems needed to agree with each other.

An MMO is particularly unforgiving here. A change to one system quietly becomes a design constraint for three others. AI can follow those relationships when I provide enough context, but knowing which context matters is still my job.

There is another risk that I did not think about enough at the beginning: the codebase can grow faster than my mental model of it. Typing code is slow, but that slowness forces familiarity. When a large implementation arrives in seconds, I can either spend the saved time understanding it or accept it because the tests pass and move on. The second option is tempting. It is also how I end up maintaining a project I technically own but no longer fully know.

I do not want to become a project manager for my own codebase. If I cannot explain how a system works, I do not consider it finished, even if Claude wrote something that appears to work.

---

## The parts you have to feel

AI does best when success can be described before the work begins. Games contain plenty of problems like that. They also contain a lot of problems where the specification is basically "make this feel better."

Combat timing is the easiest example. An agent can change a hit delay from 200ms to 150ms. It cannot make the taste call for me. I have to play both versions, pay attention to the animation, the sound, and the weight of the response, then decide which one belongs in Aeven.

Movement has the same problem. So do animation timing, hit feedback, interface rhythm, and the small pauses that make an interaction feel deliberate instead of laggy. None of these decisions is especially difficult to implement. They are difficult because there is no correct answer waiting in the documentation.

Pixel art and visual coherence make the limit even clearer. Generating an isolated asset is one problem. Making it look like it belongs beside every other tile, character, prop, and animation is another. A game develops a visual grammar over time, and one technically competent asset can still be completely wrong for it.

This has made my role feel less like "the person who writes every line" and more like the person responsible for coherence. The code, art, rules, and pacing all need to feel as if they came from the same game. Faster implementation does not make that easier. Sometimes it creates more material to reject.

---

## Is it still mine?

Claude Code has written a meaningful amount of code for Aeven. I do not find that embarrassing, and I also do not think it means Claude built the game for me. It did not decide what Aeven should be. It does not play a combat encounter and feel that the timing is off. It does not carry the consequences of an architectural shortcut six months later.

Still, pretending nothing changed would be dishonest. The distance between an idea and an implementation is much shorter now. Some of the satisfaction that used to come from carefully assembling a system has been replaced by reviewing, correcting, and steering one into place. That can feel great when the work was tedious. It can feel oddly hollow when I realize I skipped past a part I would have enjoyed understanding in detail.

I have had to become more deliberate about where I want the help. Serialization code is not where I need to prove anything to myself. Architecture, game rules, and the systems that define how Aeven feels deserve more of my attention. I still use AI there, but I am much less willing to accept the first plausible answer.

For me, authorship is not a count of who produced which keystrokes. It is the accumulation of decisions and the responsibility for the result. AI can contribute a lot of implementation, but I still have to know why the implementation exists, whether it fits, and what I am willing to change when it does not.

---

## What this project changed for me

Claude Code did not remove the need to know what I am doing. If anything, it made that knowledge more important.

Clear specifications produce better results because I have already done the design work. Debugging help is useful because I can judge whether a hypothesis makes sense. Architecture suggestions only help when I understand the tradeoffs well enough to reject the convenient ones. When my own understanding is vague, the generated implementation tends to be vague in exactly the places that matter later.

Faster implementation also makes it easy to generate more code than I can properly evaluate. I can confuse movement with progress or let the project expand because one part has become cheap, then discover that design, testing, art, and maintenance did not get any cheaper at all.

So I am still figuring out the boundary. Some days AI feels like the reason Aeven can exist at this scope. Other days it feels like one more complicated system I have to supervise. Both experiences are part of building the game now.

[Aeven was open source](https://github.com/andrewrexo/isometric-game), though it's been temporarily made private. It will be made available soon. Once it's back public, you can see that the commit history is probably the most honest record of the experiment.
