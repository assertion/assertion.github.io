---
layout: post
title: AI Twitter Highlights · 2026-10-04
categories: AI
description: High-signal AI coding / model / product discussions from X in the past day
keywords: AI, Twitter, Codex, OpenClaw, Antigravity, Pi Durable, OpenCode, T3 Code, AutoCompact, Cline, Claude Code, GitHub Copilot
lang: en
translation_key: ai-twitter-hots-2026-10-04
permalink: /2026/10/04/ai-twitter-hots-en
issue: 23
item_count: 10
headline: "Codex crowdsources pain points, Opus 5.5 enters IDEs, agents start running on phones"
highlights:
  - label: "Codex crowdsources"
    text: "Tibo publicly asks 'what's Codex missing'; OpenCode 2 runs a parallel pain-point survey."
  - label: "OpenClaw Android stuck in review"
    text: "Over a week in Google review; Pi Durable runs multi-user agents on phones."
  - label: "Models enter IDEs"
    text: "Antigravity adds Opus 5.5 / Sonnet 5.5; Cline ships free Ling 3.1 Flash."
products: [Codex, OpenCode, OpenClaw, Cline, Pi Durable]
stat:
  value: "1 wk+"
  caption: "OpenClaw Android stuck in review"
---

# AI Twitter/X Highlights Digest · 2026-10-04 (Sun)


## Key Takeaways

1. **Codex / OpenCode** both crowd-source pain points in public: OpenAI’s Tibo asks what’s missing in Codex, while OpenCode 2 asks for biggest issues—product iteration happens on the timeline.  
2. **On-device and distribution**: OpenClaw’s Android app stays stuck in Google review for over a week while **v2026.9.8** adds GPT-6.1 Sol; Pi Durable demos a phone-native, live-editable, multiplayer agent.  
3. **Models into IDEs / harnesses**: Antigravity ships Opus 5.5 / Sonnet 5.5 for paid users; Cline offers Ling 3.1 Flash free for a limited time; AutoCompact-style work trains compaction into the model; Claude Code 2.1.289 and Copilot’s side-by-side review target agent workflows.

---

## 1. Codex: official public wishlist

**Takeaway**: @thsottiaux (OpenAI) asks, “What’s one thing that’s missing in codex that you wish we had?”—and the replies flood in. Separately, community posts still push GPT-6.1 Sol at high effort as a stable daily driver with less model-switching.

**Why it matters**: A flagship coding agent runs requirements gathering in public, which surfaces real friction faster than a changelog.

- Tibo’s ask: https://x.com/thsottiaux/status/2106439068557144179  
- Sol usage notes: https://x.com/haider1/status/2106408936329154943

![Codex wishlist](/images/twitter-hots/2026-10-04/01-codex-wishlist.jpg)

---

## 2. OpenClaw: Android review limbo + v2026.9.8 with GPT-6.1 Sol

**Takeaway**: @steipete says OpenClaw’s Android app has been stuck in Google review for over a week and asks for help. The same day, @openclaw ships **v2026.9.8**: **GPT-6.1 Sol** support, agent replies routed back correctly, lower memory use, plus update and Windows startup fixes (43 PRs / 8 contributors).

**Why it matters**: Store-gate distribution friction sits next to a desktop/CLI release that already tracks frontier models—“can we ship the app” becomes part of the product story.

- Review limbo: https://x.com/steipete/status/2106446147791597774  
- v2026.9.8: https://x.com/openclaw/status/2106247624634531889

![OpenClaw Android and release](/images/twitter-hots/2026-10-04/02-openclaw.jpg)

---

## 3. Antigravity: Opus 5.5 / Sonnet 5.5 for paid users

**Takeaway**: @_mohansolo confirms **Antigravity** added **Claude Opus 5.5** and **Sonnet 5.5** for all paid users, framing it as access to the best frontier models, with a broader **Gemini 4 Argon** rollout teased.

**Why it matters**: An independent coding product packs the newest Claude generation into its paid tier, competing with single-lab IDE narratives.

- Antigravity model update: https://x.com/_mohansolo/status/2106432039817998463

![Antigravity Opus Sonnet 5.5](/images/twitter-hots/2026-10-04/03-antigravity.jpg)

---

## 4. Pi Durable: on-phone multiplayer agents

**Takeaway**: @badlogicgames spends the weekend building a personal **Pi Durable** project on Android: fully on-device (no cloud VM), live-editable, multiplayer, any provider/model, plus artifacts—claiming it works better than Claude for Android or ChatGPT for Android. Follow-ups show ngrok-exposed multiplayer, hot-reload self-modification (“building pim with pim”), and a January belief that agents should run on phones, not cloud sandboxes. Explicitly not an official Earendil product—just a Durable stress test.

**Why it matters**: Pushing a Durable runtime onto a pocket device challenges the default that agents must live in cloud sandboxes.

- On-device Claude for Android replacement: https://x.com/badlogicgames/status/2106286641551675411  
- No moat / artifacts: https://x.com/badlogicgames/status/2106452296087302173  
- Phone multiplayer: https://x.com/badlogicgames/status/2106383122183196709  
- Self-modifying software: https://x.com/badlogicgames/status/2106461615793004817

![Pi Durable on phone](/images/twitter-hots/2026-10-04/04-pi-durable.jpg)

---

## 5. OpenCode 2: founder asks for the biggest issues

**Takeaway**: @thdxr posts, “what are your biggest issues with OpenCode 2?” and gets a high-volume reply thread. It mirrors the same-day Codex wishlist—both products converging requirements in public.

**Why it matters**: The next major open coding-agent release ties its feedback loop directly to the timeline.

- OpenCode 2 ask: https://x.com/thdxr/status/2106380410577981703

![OpenCode 2 issues](/images/twitter-hots/2026-10-04/05-opencode.jpg)

---

## 6. T3 Code: a usage view that shows where spend goes

**Takeaway**: @theo ships more improvements to the **T3 Code** usage view—clearer spend attribution and how models behave on your own data—and notes it measures **all Claude Code and Codex usage on your machines**, not only usage inside T3 Code.

**Why it matters**: Once multi-harness / multi-model is normal, spend and quota visualization becomes a core coding-UI feature.

- Usage view: https://x.com/theo/status/2106473854113894520

![T3 Code usage view](/images/twitter-hots/2026-10-04/06-t3-code.jpg)

---

## 7. AutoCompact: training models to decide when to compact

**Takeaway**: @omarsar0 connects **AutoHarness → AutoContext → AutoCompact**: models increasingly absorb work that used to live only in the harness. AutoCompact trains agents to choose when to compact, what working state to keep, and how to resume; after judge-corrected trajectories plus SFT/RL, pass rates rise +9.2 on SWE-bench Verified and +5.0 on SWE-PolyBench Verified—even with a 256K window that never overflows. A same-day CMU harness-learning paper trains an RL proposer to edit harness code while freezing the solver weights.

**Why it matters**: The next coding-agent leap is model–harness co-design—“when to compact / which harness edit”—not only bigger context windows.

- AutoCompact: https://x.com/omarsar0/status/2106416745686995025  
- CMU harness learning: https://x.com/omarsar0/status/2106529236068819394

![AutoCompact paper](/images/twitter-hots/2026-10-04/07-autocompact.jpg)

---

## 8. Cline: Ling 3.1 Flash free until October 13

**Takeaway**: @cline announces **Ling 3.1 Flash** inside Cline, **free until October 13**. The MoE is 560B total / 25B active and is positioned alongside frontier open weights like Kimi K3 and DeepSeek V4 Pro.

**Why it matters**: Coding IDEs keep using time-boxed free frontier open weights to lower trial cost and drive model switching.

- Ling 3.1 Flash: https://x.com/cline/status/2106470199415456151

![Cline Ling 3.1 Flash](/images/twitter-hots/2026-10-04/08-cline-ling.jpg)

---

## 9. Claude Code 2.1.289: teammates can spawn shared agents

**Takeaway**: @ClaudeCodeLog notes **Claude Code 2.1.289** is live (~27 CLI changes). Highlights: teammates can spawn shared agents via `agent.spawn`; agent IDs are unified with clearer idle/waiting states; Read deny rules now cover `@`-mentioned files so mentions can’t bypass read restrictions; plus plugin/MCP sign-in and terminal freeze fixes.

**Why it matters**: Multi-agent collaboration moves from “open more sessions by hand” toward programmatic shared agents—with tighter permission rules alongside.

- 2.1.289 available: https://x.com/ClaudeCodeLog/status/2106525277618635228  
- CLI changelog: https://x.com/ClaudeCodeLog/status/2106525288255402339

![Claude Code 2.1.289](/images/twitter-hots/2026-10-04/09-claude-code.jpg)

---

## 10. GitHub Copilot: side-by-side review for agent code

**Takeaway**: @github highlights the Copilot app’s side-by-side review: instead of tab-hopping while reviewing agent-written code, keep the **diff, terminal, and browser** together to check, run, and preview.

**Why it matters**: As agent output volume rises, the bottleneck shifts from writing code to verifying it in one surface—IDEs/review UIs are being rebuilt for agent workflows.

- Copilot side-by-side: https://x.com/github/status/2106445557535220101

![GitHub Copilot side-by-side](/images/twitter-hots/2026-10-04/10-copilot.jpg)

---
