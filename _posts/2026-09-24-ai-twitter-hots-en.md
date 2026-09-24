---
layout: post
title: AI Twitter Highlights · 2026-09-24
categories: AI
description: High-signal AI coding / model / product discussions from X in the past day
keywords: AI, Twitter, Cursor, Claude Code, Claude Marketplace, Browser Use, OpenCode, Devin, Qoder, harness, Jev, Cline
lang: en
translation_key: ai-twitter-hots-2026-09-24
permalink: /2026/09/24/ai-twitter-hots-en
---

# AI Twitter/X Highlights Digest · 2026-09-24 (Thu)


## Key Takeaways

1. **Cursor** says agent token cost fell ~**7%** with no quality drop and ships a long “fix your harness” prompt; **Claude Code** circles share `/claude-api prompt-audit` plus Opus 5.5 tip lists.  
2. **Browser Use Bench** gets redrawn by GPT-6 Sol / Luna and Opus 5.5; **OpenCode**, **Devin**, **Qoder**, and **Cline** each land product-facing updates.  
3. The chat keeps moving from “new model” to **harness**: rauchg’s Brain/Hands/Files split, a Google paper on self-improving harnesses, and **Jev** as a System One decision model.

---

## 1. Cursor: another 7% token cut, plus a public harness playbook

**Summary**: @cursor_ai said Cursor cut agent token cost by about **7%** with no drop in quality—tighter prompts, selective tool loading, better caching, and compressed file reads. The same day, @ericzakariasson posted a long reusable prompt for auditing an agent harness around per-task cost and cache tiers, citing Cursor production lessons. Cursor also linked a write-up of the harness changes.

**Why it matters**: Day two after the model dump, the IDE side is competing on “same intelligence, smaller bill.”

- Cost note: https://x.com/cursor_ai/status/2102786814633464159  
- Harness prompt: https://x.com/ericzakariasson/status/2102853511637774551  
- Write-up: https://x.com/cursor_ai/status/2102786816340562200

![Cursor token cost](/images/twitter-hots/2026-09-24/01-cursor.jpg)

---

## 2. Claude Code: prompt-audit and a 24-tip Opus 5.5 daybook

**Summary**: @RLanceMartin recommends running **`/claude-api prompt-audit`** inside Claude Code to scan skills, agent.md, Claude.md, and prompts for anti-patterns that hobble frontier models. @chenchengpro published **24** Opus 5.5 tips after a day of use (task boundaries, skip “think carefully,” mid-run check-ins, etc.). @minchoi rounded up ten wild Opus 5.5 build examples from the community.

**Why it matters**: After default-model flips, prompt/skill hygiene often moves quality and cost more than another rename.

- prompt-audit: https://x.com/RLanceMartin/status/2102575471502528989  
- 24 tips: https://x.com/chenchengpro/status/2102782934189252662  
- Ten examples: https://x.com/minchoi/status/2102601488606372243

![Claude Code prompt-audit](/images/twitter-hots/2026-09-24/02-prompt-audit.jpg)

---

## 3. Claude Marketplace: tools, agents, and expert partners

**Summary**: @claudeai launched discovery on **Claude Marketplace**—add connectors/plugins like Slack and Notion, buy agents and products, and find expert partners. The story expands from the model itself to an installable shelf.

**Why it matters**: Coding-agent distribution is starting to look like an app store; after default models comes default plugins.

- Link: https://x.com/claudeai/status/2102840851538080172

![Claude Marketplace](/images/twitter-hots/2026-09-24/03-marketplace.jpg)

---

## 4. Browser Use Bench: Pareto redrawn by Sol / Luna / Opus 5.5

**Summary**: @browser_use updated **Browser Use Bench v2**: Claude Opus 5.5 ~**59.4**; GPT‑6 Sol medium ~**66.9** (~3.5× cheaper); GPT‑6 Luna xhigh ~**57.6** (~22× cheaper than Opus). On browser automation, both score and $/task moved with the new models.

**Why it matters**: Computer/browser use is now a day-after axis alongside SWE-style coding benches.

- Link: https://x.com/browser_use/status/2102558423506469010

![Browser Use Bench](/images/twitter-hots/2026-09-24/04-browser-use.jpg)

---

## 5. OpenCode: check-in page bug hunt, and the server protocol as base

**Summary**: @thdxr showed **opencode** downloading a broken flight check-in page’s source and finding a hidden required form field. Another post stressed that the **opencode server protocol** underpins rich custom frontends like OpenChamber, with more UIs expected. The pitch remains a hot-swappable open harness, not just model swapping.

**Why it matters**: A real web bug as demo is more persuasive than another “we support model X” post.

- Check-in bug: https://x.com/thdxr/status/2102567186028274058  
- Server protocol: https://x.com/thdxr/status/2102882938815992183

![OpenCode](/images/twitter-hots/2026-09-24/05-opencode.jpg)

---

## 6. Devin: native Teams plus a first-party Microsoft Store app

**Summary**: @cognition announced two Microsoft-facing updates—**native Teams** support and a first-party **Microsoft Store** app—so Devin works better on your machine/workflows, not only on its own cloud PC.

**Why it matters**: Cloud coding agents keep embedding into enterprise collab surfaces; the channel is the feature.

- Link: https://x.com/cognition/status/2102823962380259443

![Devin Microsoft](/images/twitter-hots/2026-09-24/06-devin.jpg)

---

## 7. Qoder: design praise plus free Qwen3.8-Flash through Sept 30

**Summary**: @chunxiangai said Alibaba’s **Qoder** now hits top-tier domestic design from site to Desktop (Cursor-ish + matcha pastoral, Dia-like onboarding). Official @qoder_ai_ide made **Qwen3.8-Flash** free in Qoder through **Sept 30** (including free accounts, no Credits claim).

**Why it matters**: CN IDE agents are shipping polish and free fast models in the same week the global stack races on price.

- Design take: https://x.com/chunxiangai/status/2102597678475673892  
- Free Flash: https://x.com/qoder_ai_ide/status/2102786576774566079

![Qoder](/images/twitter-hots/2026-09-24/07-qoder.jpg)

---

## 8. Harness triad vs self-improve overfitting: Brain / Hands / Files

**Summary**: @rauchg split successful agents (Muse, OpenClaw, Claude Code, …) into **Brain (model+harness) / Hands (tools·computer·browser) / Files (memories·skills·repos)**, and used Vercel Sandbox **Drives** to argue storage should detach from a full stateful machine. @omarsar0 highlighted a Google paper on **self-improving agent harnesses**: auto-evolving prompts/control flow can raise training-task scores while hurting real work; **RRSI** regularizes the loop for better OOD transfer, including Terminal-Bench / SWE-bench gains.

**Why it matters**: Product narrative and research both warn that the “shell” can save money—or overfit.

- Brain/Hands/Files: https://x.com/rauchg/status/2102820148629614685  
- Google harness paper: https://x.com/omarsar0/status/2102853768266256738

![Harness / RRSI](/images/twitter-hots/2026-09-24/08-harness.jpg)

---

## 9. Jev: System One decision model—nine use cases and a CN deep dive

**Summary**: @alexxubyte presented **Jev** as TypeSafe’s first System One model—claimed ~**100×** faster/cheaper than frontier LLMs—with nine use cases people skip when big models are too slow or expensive. @sagacity recommended a long essay arguing ordinary LLMs emit “90% confidence” text that is not a calibrated action probability, while Jev reads decision distributions from internal state. @omarsar0 started a series on building custom harnesses with **Jev + Pi** (gates, routing, verifiers).

**Why it matters**: Beyond “LLM writes code,” people are asking when generative models should not be the router/gate.

- Nine use cases: https://x.com/alexxubyte/status/2102787342553719219  
- CN deep-dive pointer: https://x.com/sagacity/status/2102557258689450389  
- Jev + Pi harness: https://x.com/omarsar0/status/2102763652101161232

![Jev System One](/images/twitter-hots/2026-09-24/09-jev.jpg)

---

## 10. Cline: free Stealth Bunny Alpha + Desktop worktrees

**Summary**: @cline made **Stealth Bunny Alpha** free in Cline—fast inference, strong coding, multimodal input, **1M** context. Desktop **v0.0.34** adds **worktrees** (per-task branches), GitHub PR status, and parallel subagents in a session.

**Why it matters**: Open/local coding agents keep chasing IDEs and cloud agents with free stealth models plus parallel repo workflows.

- Stealth Bunny: https://x.com/cline/status/2102857687491129485  
- Desktop worktrees: https://x.com/cline/status/2102836411099676782

![Cline Desktop](/images/twitter-hots/2026-09-24/10-cline.jpg)
