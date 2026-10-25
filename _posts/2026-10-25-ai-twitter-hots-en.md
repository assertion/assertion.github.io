---
layout: post
title: AI Twitter Hots · 2026-10-25
categories: AI
description: A high-signal digest of AI coding / models / products discussed on X in the past day
keywords: AI, Twitter, Claude Code, Anthropic, Thariq, amorriscode, HarnessRouter, Grok Bot, leerob, personal agents, Claire Vo, Opus 5.5, Update-pls, LiteLLM, OpenCode, T3 Code, Linear, MCP, vLLM, DeepSeek-V4.1-Flash, AgentX
lang: en
permalink: /2026/10/25/ai-twitter-hots-en
translation_key: ai-twitter-hots-2026-10-25
issue: 44
item_count: 10
headline: "Two Claude Code leads leave Anthropic the same day, HarnessRouter wires Grok Bot to multi-harness runtimes, leerob posts a $100 feedback bounty"
highlights:
  - label: "Two Claude Code leads leave the same day"
    text: "Thariq Shihipar (1+ year on Claude Code) and Anthony Morris (Claude Code Desktop) both announced leaving Anthropic; community roundups paired them as core exits after the peak."
  - label: "HarnessRouter × Grok Bot"
    text: "An open-source layer routes Grok Bot into Codex / Hermes / Claude Code / DeepSeek native runtimes; the repo dates to 2026-08 — today's spike is discussion, not a brand-new launch."
  - label: "leerob's $100 feedback bounty"
    text: "Reply with the best bug or feature idea; five picks get $100 each via X Money the next day."
products: [Claude Code, Anthropic, HarnessRouter, Grok Bot, Opus 5.5, Update-pls, LiteLLM, OpenCode, T3 Code, Linear, MCP, vLLM, DeepSeek-V4.1-Flash, AgentX, Codex]
stats:
  - value: "27k+"
    caption: "Likes on Thariq's exit post (Anthony's Desktop farewell ~7.3k the same day)"
  - value: "1958"
    caption: "Bookmarks on the HarnessRouter / Grok Bot post (~851 likes)"
  - value: "400%"
    caption: "YoY rise in Linear issues created by people and via MCP"
stat:
  value: "27k+"
  caption: "Likes on Thariq's exit post (Anthony's Desktop farewell ~7.3k the same day)"
---

# AI Twitter/X Hots Digest · 2026-10-25 (Sunday)


## Today's highlights

1. **Two Claude Code leads leave the same day**: @trq212 leaves Anthropic after 1+ year on Claude Code for a break; the same day @amorriscode (Claude Code Desktop) posts that yesterday was his last day. Roundups pair both exits.  
2. **HarnessRouter wires Grok Bot to multi-harness runtimes**: @_avichawla demos an open-source layer so Bot tasks run through Codex / Hermes / Claude Code / DeepSeek native runtimes; the repo was created around **2026-08-09** — today's spike is discussion, not “just open-sourced.”  
3. **Personal-agent discourse heats up**: leerob posts a **$100** feedback bounty; Riley Brown ranks Grok Bot UI / multi-bot; Claire Vo says ~**80%** of personal coding moved to Claude Code + Opus 5.5.

---

## 1. Claude Code: Thariq and Anthony announce leaving Anthropic the same day

**Key points**: @trq212 (Thariq Shihipar) posts a long farewell: after more than a year on Claude Code and watching it scale beyond what he imagined, he is leaving Anthropic for a break before something new; he still believes in the mission and a “race to the top,” and points people to @addyosmani, @lydiahallie, @_catwu, @ClaudeDevs, and @bcherny (~**27.5k** likes, **5.4k** bookmarks). The same day @amorriscode (Anthony Morris) writes that yesterday was his last day at Anthropic — he created Claude Code on desktop, thanks the community for every feature request and bug report, calls walking away from friends, product, and mission the hardest career move, and jokes he finally has time for GTA VI before sharing what's next (~**7.3k** likes, **900+** bookmarks). @NFT_Chen (ZH) and @iCleanAI (EN) roundups frame both as core Claude Code builders leaving within a day.

**Why it matters**: Two highly visible contributors behind Claude Code's CLI-to-desktop arc exit on the same calendar day — the community conversation is about product maturity and team continuity, not a changelog bullet.

- trq212: leaving Anthropic / Claude Code: https://x.com/trq212/status/2113844051938054167  
- amorriscode: Claude Code Desktop author's last day: https://x.com/amorriscode/status/2113972174524674247  
- NFT_Chen: ZH roundup of both exits: https://x.com/NFT_Chen/status/2113988885604859997  
- iCleanAI: EN roundup of both exits: https://x.com/iCleanAI/status/2114081625013387725

![Two Claude Code leads leave](/images/twitter-hots/2026-10-25/01-claude-code-exits.jpg)

---

## 2. HarnessRouter: plug Grok Bot into Codex / Claude Code native harnesses

**Key points**: @_avichawla calls it an “Insane Grok @bot upgrade”: open-source **HarnessRouter** is the infra layer that connects Grok Bot to different agent harnesses so tasks run in their native runtimes (demo covers Codex, Hermes, Claude Code, DeepSeek, and more) — ~**851** likes and **1958** bookmarks. On GitHub, `HarnessRouter/harnessrouter` was created **2026-08-09** (~3.4k★ today). This is a high-signal community spike, **not a brand-new open-source drop**.

**Why it matters**: Personal bots are moving from single-runtime chat to pluggable harnesses; bookmarks >> likes usually means builders are saving the “how to wire it” post.

- _avichawla: HarnessRouter × Grok Bot: https://x.com/_avichawla/status/2113954302901256597

![HarnessRouter for Grok Bot](/images/twitter-hots/2026-10-25/02-harnessrouter.jpg)

---

## 3. leerob: $100 bounty for Grok Bot bugs and feature ideas

**Key points**: @leerob posts: help improve Grok Bot and he'll send **$100** — reply on the thread with your best bug report or feature suggestion; he'll pick **5** replies and pay via **X Money** the next day (~**4167** likes, **957** bookmarks).

**Why it matters**: Cash + a public reply tree beats a buried feedback form for surfacing real pain points in one place.

- leerob: $100 bug / feature bounty: https://x.com/leerob/status/2113792409448714468

![leerob Grok Bot feedback bounty](/images/twitter-hots/2026-10-25/03-leerob-bounty.jpg)

---

## 4. Riley Brown: unfiltered personal-agent rankings — Grok Bot UI and multi-bot

**Key points**: @rileybrown shares “unfiltered thoughts on personal agents”: **Grokbot** has the best UI and is arguably best overall — desktop feel and **multi-bot** coordination (team lead handing work to other bots) look ahead; OpenAI **dots** is rough but strong with Codex; Meta **Muse** feels like a toy; Anthropic **Claude Duet** runs on Opus 5.5 and feels more like Slack channels than more bots (~**1521** likes, **1184** bookmarks).

**Why it matters**: Puts always-on / personal agents into one product vocabulary — UI, orchestration, and channels-vs-bots matter as much as raw model strength for real picks.

- rileybrown: personal agents roundup: https://x.com/rileybrown/status/2113773696863064377

![Riley Brown on personal agents](/images/twitter-hots/2026-10-25/04-personal-agents.jpg)

---

## 5. Claire Vo: ~80% of personal coding moved to Claude Code + Opus 5.5

**Key points**: @clairevo's plot twist — about **80%** of personal coding now runs on **Claude Code + Opus 5.5**: cc projects are “goated,” she “can't press steer anymore” in Codex, code quality is up with less front-end slop; Opus 5.5's creative abilities were the gateway drug to taking coding work back (~**582** likes).

**Why it matters**: A well-known product builder publicly changing her default stack is stronger signal than a lab bench score for “daily driver” status of Opus 5.5 + Claude Code.

- clairevo: 80% personal coding on CC + Opus 5.5: https://x.com/clairevo/status/2114012293105430813

![Claire Vo moves to Claude Code](/images/twitter-hots/2026-10-25/05-clairevo-opus.jpg)

---

## 6. Update-pls v0.5: one-click update / rollback for the AI coding toolchain

**Key points**: @rohit3a ships **Update-pls v0.5**: update every AI coding tool on your Mac and servers in one click, with rollback; Mac downloads checked for hash / signature / notarization; push across SSH config hosts with nothing preinstalled remotely; updates via npm / Homebrew / native updater / apt, quitting and reopening apps with live progress. Claims **17** CLIs and **8** desktop apps (Claude Code, Codex, Cursor, Gemini CLI, Copilot CLI, OpenCode, Antigravity, Factory Droid, T3Code), free and open source. Engagement is still light, but it is a clear product-day primary.

**Why it matters**: After harness and gateway fragmentation, “update and roll back” becomes infrastructure — same day as HarnessRouter / LiteLLM chatter.

- rohit3a: Update-pls v0.5: https://x.com/rohit3a/status/2114078544381014191

![Update-pls v0.5](/images/twitter-hots/2026-10-25/06-update-pls.jpg)

---

## 7. LiteLLM: official support for OpenCode Go subscription routing

**Key points**: @LiteLLM announces **OpenCode Go (@opencode)** is officially supported: route Go subscription models through an existing LiteLLM setup; LiteLLM picks the upstream API, keeps the conversation session, and records estimated usage under OpenCode Go (docs on docs.litellm.ai).

**Why it matters**: Subscription coding agents keep lining up behind one gateway — teams that already standardize on LiteLLM can treat OpenCode Go like any other upstream.

- LiteLLM: OpenCode Go support: https://x.com/LiteLLM/status/2114099964045582622

![LiteLLM × OpenCode Go](/images/twitter-hots/2026-10-25/07-litellm-opencode.jpg)

---

## 8. Theo / T3: 14 working threads, zero visible in the UI

**Key points**: @theo shows T3 Code with **14** threads running and **zero** visible — “why let working threads get in the way of things that need your attention?” (~**339** likes). A follow-up jokes about 36 snoozed threads.

**Why it matters**: Multi-agent products increasingly win on attention management: more parallel work is worthless if the UI dumps it all on screen.

- theo: 14 threads, zero visible: https://x.com/theo/status/2114131018575962496

![T3 Code 14 threads UI](/images/twitter-hots/2026-10-25/08-t3-threads.jpg)

---

## 9. Linear: issues via people + MCP up 400%; internal agents as the shared layer

**Key points**: Linear co-founder @karrisaarinen says issues created in Linear by people and via **MCP** are up **400%** this year; another trend is customers building internal agents and using Linear as the shared layer for workflows, communication, and context between people and agents — with a QBR-style example of briefs → decisions → projects/issues → agent work → customer report (~**112** likes).

**Why it matters**: Issue trackers are being rewritten as a shared human–agent state machine; MCP is what lets agents write into the same workbench.

- karrisaarinen: Linear MCP issues +400%: https://x.com/karrisaarinen/status/2114105314610196847

![Linear MCP issues +400%](/images/twitter-hots/2026-10-25/09-linear-mcp.jpg)

---

## 10. vLLM: best DeepSeek-V4.1-Flash result yet on AgentX

**Key points**: @vllm_project says that beyond matching DeepInfer, they ran vLLM on @SemiAnalysis_ **AgentX** with real agentic workloads: at DeepSeek off-peak pricing, ~**$38.96/GPU-hour** revenue, ~**954K tokens/s/GPU** total throughput (cached+input+output), ~**196 tokens/s** P90 per user — called the best DeepSeek-V4.1-Flash AgentX result so far, with a blog for reproduction (~**30** likes on the official post).

**Why it matters**: Open inference stacks are pushing Flash models from “it runs” to reproducible $/GPU-hour under agent load — the infra narrative keeps pace with the coding-agent boom.

- vllm_project: AgentX × DeepSeek-V4.1-Flash: https://x.com/vllm_project/status/2114135647040778667

![vLLM AgentX DeepSeek-V4.1-Flash](/images/twitter-hots/2026-10-25/10-vllm-agentx.jpg)

---
