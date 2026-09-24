---
layout: post
title: AI Twitter Highlights · 2026-09-25
categories: AI
description: High-signal AI coding / model / product discussions from X in the past day
keywords: AI, Twitter, OpenClaw, Claude Code, Codex, Muse, OpenCode, Jev, CLM, Browser Use, Devin, Cursor, Linear, harness
lang: en
translation_key: ai-twitter-hots-2026-09-25
permalink: /2026/09/25/ai-twitter-hots-en
---

# AI Twitter/X Highlights Digest · 2026-09-25 (Fri)


## Key Takeaways

1. **OpenClaw** cuts ~**400k** lines of its own tests with little coverage change via a test-audit skill, and ships **2026.9.6** (Opus 5.5 / GPT‑6 / Grok 4.7 + Jev).  
2. **Claude Code** vs **Codex** subscription feel flips again; **Muse** adds Mac computer use; **OpenCode Desktop** claims ~**2M** weekly actives.  
3. **System One** expands from Jev to **CLM**; **Browser Use** runs Luna→Jev poker; **Devin ssh**, **Cursor Projects + pstack**, **Linear** adaptive routing, and a Google **harness distillation** paper land the same day.

---

## 1. OpenClaw: ~400k LOC of tests deleted, plus 2026.9.6

**Summary**: @steipete said OpenClaw deleted about **400k LOC** of its own tests with little change in coverage—modern models love writing tests for every tiny change even when they are not useful—and pointed to a **test-audit** skill (linked to the repo skill doc). Official @openclaw shipped **2026.9.6**: Opus 5.5, GPT‑6 Sol/Luna, Grok 4.7, managed updates, restart recovery, 30-day usage, GitHub reader, remote Files/Memory/Skills, live meeting notes, and **Jev + decision models**.

**Why it matters**: Agent products are both absorbing new models and starting to claw back the “test tax” those models invent.

- Test-deletion thread: https://x.com/steipete/status/2103147927313199260  
- 2026.9.6: https://x.com/openclaw/status/2102955928693989413

![OpenClaw test-audit](/images/twitter-hots/2026-09-25/01-openclaw.jpg)

---

## 2. Claude Code vs Codex: the $200 plan feel flips again

**Summary**: @theo said the **$200 Claude Code** plan feels wildly better than **Codex** right now—weeks ago it was the other way around—and he is watching how OpenAI responds. Separately, @badlogicgames shared a habit from Claude Code Anonymous: skip bespoke review tools and inspect PRs in VS Code with real code nav/debugging.

**Why it matters**: Subscription tier + product harness “feel” still moves default tools more than a single leaderboard score.

- Claude Code vs Codex: https://x.com/theo/status/2103258221700067769  
- VS Code review habit: https://x.com/badlogicgames/status/2103193213930496446

![Claude Code vs Codex](/images/twitter-hots/2026-09-25/02-claude-codex.jpg)

---

## 3. Muse: computer use on Mac, queue jobs and walk away

**Summary**: @alexandr_wang announced **Muse for Mac** now has **computer use**—queue jobs, walk away, and it keeps going. @garrytan amplified glowing coverage, calling Muse very impressive. Personal-agent narratives keep moving from chat boxes to “take the laptop.”

**Why it matters**: Computer use is shifting from a third benchmark axis into a default expectation for consumer agents.

- Mac computer use: https://x.com/alexandr_wang/status/2102916057006764370  
- Reaction: https://x.com/garrytan/status/2102974165800399274

![Muse computer use](/images/twitter-hots/2026-09-25/03-muse.jpg)

---

## 4. OpenCode: ~2M Desktop WAU, plus a free Space Bunny week

**Summary**: @thdxr said **OpenCode Desktop** has about **2M** weekly active users—roughly half of TUI users. @omarsar0 tried free-for-a-week **Space Bunny** (1M context + image input): wireframe→landing page, moka-pot 3D, playable Three.js levels, and self-checking via browser screenshots before declaring done. Another post showed the plugin surface (e.g. GPT‑Live voice into a session).

**Why it matters**: Open-source coding agents are competing on real usage and visual/prototype demos, not just “we support model X.”

- Desktop WAU: https://x.com/thdxr/status/2102918818662342686  
- Space Bunny: https://x.com/omarsar0/status/2103174241654837649  
- Plugins: https://x.com/thdxr/status/2102986362970587464

![OpenCode Space Bunny](/images/twitter-hots/2026-09-25/04-opencode.jpg)

---

## 5. System One: CLM after Jev, and Jev-as-a-Judge

**Summary**: @omarsar0 flagged a new wave for custom harness builders: after **Jev**, **Contrastive Language Model (CLM)**—claimed ~**9×** faster than Jev and a stronger verifier on long-horizon work. Jev is RLCD decision-shaped; CLM embeds situations and candidate actions contrastively. The same author pushed **Jev-as-a-Judge**: use a cheap judge when confident, escalate low-confidence calls to GPT‑6 / Opus 5.5.

**Why it matters**: Routing, gates, and evals are splitting off from “just another LLM call” into a dedicated System One layer.

- CLM vs Jev: https://x.com/omarsar0/status/2103139055013646646  
- Jev-as-a-Judge: https://x.com/omarsar0/status/2102934356108972278

![System One CLM](/images/twitter-hots/2026-09-25/05-system-one.jpg)

---

## 6. Browser Use: Luna plans, Jev acts, poker wins

**Summary**: @browser_use posted a demo of **Luna** as planner and **Jev** as actor playing poker—and winning. Fast/cheap decision models are landing inside the browser-automation loop, not only on paper.

**Why it matters**: Browser use is moving from “swap the frontier model” to planner × System One actor stacks.

- Link: https://x.com/browser_use/status/2102980499614658580

![Browser Use Luna Jev](/images/twitter-hots/2026-09-25/06-browser-use.jpg)

---

## 7. Devin: `devin ssh` makes the cloud VM your box

**Summary**: @dabit3 showed **`devin ssh`**: drop straight into the environment Devin is working in. Treat it like a server on macOS, Linux, or Windows; sharing the VM with Devin opens a larger design space.

**Why it matters**: Cloud coding agents are shipping shared, ssh-able machines—not only PRs.

- Link: https://x.com/dabit3/status/2103137532829687893

![Devin ssh](/images/twitter-hots/2026-09-25/07-devin.jpg)

---

## 8. Cursor: Projects + pstack as a 10-way parallel desk

**Summary**: @poteto said Cursor **Projects** with **pstack** routinely runs at least **10** parallel projects—perf, tech debt, Bend2/Rust experiments, user feedback, dashboards, even games—joking about feeling like a “1000x engineer.” After yesterday’s token-bill talk, the chat pivots to orchestration itself.

**Why it matters**: The next IDE-agent tier is multi-session / multi-repo parallelism, not only a smarter single thread.

- Link: https://x.com/poteto/status/2103252563999232092

![Cursor Projects pstack](/images/twitter-hots/2026-09-25/08-cursor-pstack.jpg)

---

## 9. Linear: adaptive model routing for the coding agent

**Summary**: @linear launched **Adaptive routing**: the coding agent can auto-pick a model per issue—faster models for simple work, the default reasoning model for harder tasks. Co-founder @karrisaarinen stressed Claude / Codex / open-source options and called it the “Switzerland of coding agents.”

**Why it matters**: Issue-tracker-native agents are productizing model choice instead of leaving users to hand-roll routers.

- Official: https://x.com/linear/status/2103157473691787665  
- Co-founder note: https://x.com/karrisaarinen/status/2103161440014393726

![Linear adaptive routing](/images/twitter-hots/2026-09-25/09-linear.jpg)

---

## 10. Harness distillation: Google et al. on Harness-Zero

**Summary**: @omarsar0 highlighted a Google-and-colleagues paper on whether you can **distill an agent harness**. With the specialized harness removed, macro-task success rose from **23.3%** to **44.3%**—above the **41.7%** base model + harness baseline. **Harness-Zero** uses the optimized harness only in training; when train/deploy action spaces differ, a harnessing agent corrects student outputs into the deploy space before those runs become demos. Across 28 harness-induced behaviors, about **82.3%** were recovered on average; agent-as-harness also beat code-as-harness for frontier models on the same evolved harness.

**Why it matters**: After warnings that self-improving harnesses can overfit, the community is asking whether the shell itself can be distilled into the model.

- Link: https://x.com/omarsar0/status/2103095360239636666

![Harness distillation](/images/twitter-hots/2026-09-25/10-harness-distill.jpg)
