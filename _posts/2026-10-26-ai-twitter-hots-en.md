---
layout: post
title: AI Twitter Hots · 2026-10-26
categories: AI
description: A high-signal digest of AI coding / models / products discussed on X in the past day
keywords: AI, Twitter, Grok Bot, Elon Musk, Uncle Bob, Muse, Meta, Claude Code, Codex, OpenCode, Gemini, REA, Agent Skills, Librarian Bot
lang: en
permalink: /2026/10/26/ai-twitter-hots-en
translation_key: ai-twitter-hots-2026-10-26
issue: 45
item_count: 10
headline: "Grok Bot gains phone calling, Uncle Bob leaves CLI for Grok Bots, Meta Muse and OpenCode spike the same day"
highlights:
  - label: "Grok Bot phone calling"
    text: "Elon says the Bot can call a person or business for you, make a request, take notes, and send a summary; BrianRoemmele calls integrated calling spectacular."
  - label: "Uncle Bob leaves CLI → Grok Bots"
    text: "Robert C. Martin says he moved development to grokbots and shared a coding skill his bots use (bookmarks >> likes)."
  - label: "OpenCode growth + background compaction"
    text: "thdxr posts a sharp two-week active-user climb; Neriousy ships experimental background compaction."
products: [Grok Bot, Muse, Claude Code, Codex, OpenCode, Gemini, REA, Agent Skills, Meta, Anthropic, OpenAI]
stats:
  - value: "12k+"
    caption: "Likes on Elon's Grok Bot phone-calling post (~2.9k bookmarks)"
  - value: "1349"
    caption: "Bookmarks on Uncle Bob's grokbot coding-skill post"
  - value: "788"
    caption: "Likes on the OpenCode background-compaction announcement"
stat:
  value: "12k+"
  caption: "Likes on Elon's Grok Bot phone-calling post (~2.9k bookmarks)"
---

# AI Twitter/X Hots Digest · 2026-10-26 (Monday)


## Today's highlights

1. **Grok Bot can place phone calls**: Elon announces the Bot can call a person or business, make a request on your behalf, take notes, and send you a summary; BrianRoemmele calls the integrated-calling update “spectacular.”  
2. **Uncle Bob leaves CLI agents for Grok Bots**: Robert C. Martin says his latest project moved to grokbots and shares a coding skill his bots use — bookmarks far outpace likes.  
3. **Personal agents and harnesses spike together**: Meta Muse (including Japan-availability chatter) and OpenCode (growth chart + background compaction) trend the same day; on the other side, REA reverse-engineering runs into Claude/Codex safety clamps.

---

## 1. Grok Bot: Elon announces phone calling; BrianRoemmele calls integrated calling “spectacular”

**Key points**: @elonmusk posts that Grok @Bot can now call someone or a business for you, make a request on your behalf, take notes on the response, and send you a summary of the conversation. The same day @BrianRoemmele says the Grok Bot update with integrated calling is “spectacular” — he and many clients already use calling via an external MCP, and he expects deeper integration around version 0.77. Elon also posts that the best way to use Grok Bot is to assume you are hiring a super competent employee.

**Why it matters**: Personal agents move from “write code / drive a harness” to “place a real-world phone call” — the surface expands from the screen into voice, unlocking booking, follow-ups, and customer-service loops, not just repo diffs.

- elonmusk: Grok Bot can place calls: https://x.com/elonmusk/status/2114365361068138990  
- BrianRoemmele: integrated calling update: https://x.com/BrianRoemmele/status/2114414165704270261  
- elonmusk: treat the Bot like a strong hire: https://x.com/elonmusk/status/2114375896073216334

![Grok Bot phone calling](/images/twitter-hots/2026-10-26/01-grok-bot-calling.jpg)

---

## 2. Uncle Bob: leaving CLI agents; development moves to Grok Bots

**Key points**: @unclebobmartin (Robert C. Martin) writes that he is transitioning away from CLI agents for development and that his last project moved to grokbots. Earlier the same day he shared a skill he composed for grokbots when writing code — that post’s bookmarks significantly outnumber likes, and replies echo “stopped fighting CLI agents, spun up dedicated Grok Bots.”

**Why it matters**: A Clean Code icon changing the default toolchain is stronger signal than a leaderboard tick that multi-bot / personal-agent setups are entering serious engineering workflows — and it rhymes with omarsar0’s same-day “CLI is no longer the ideal interface” take.

- unclebobmartin: leaving CLI for grokbots: https://x.com/unclebobmartin/status/2114402750851330268  
- unclebobmartin: coding skill for grokbots: https://x.com/unclebobmartin/status/2114388856976069095

![Uncle Bob moves to Grok Bots](/images/twitter-hots/2026-10-26/02-unclebob-grokbots.jpg)

---

## 3. Meta Muse: alexandr_wang rallies the Muse gang; Japan frames the “big four” personal agents

**Key points**: @alexandr_wang posts “muse gang, say hi to the boomers on grok bot” and separately shows a store Muse / Muse Wonder helped build. In Japanese, @HimazinProducer says Meta’s Muse is finally usable in Japan and lines it up with OpenAI dots, xAI Grok Bot, and Anthropic Claude Duet as proactive agents that keep working on a cloud PC while you sleep. @turingou (ZH) also posts that he finally got Muse and praises the Ideas tab for non-experts.

**Why it matters**: The personal-agent race is shifting from “whose model is smarter” to “who owns the always-on daily entrypoint”; putting Muse and Grok Bot on the same comparison card shows the product shape is converging.

- alexandr_wang: muse gang × Grok Bot: https://x.com/alexandr_wang/status/2114426913842491692  
- HimazinProducer: Japan availability + four personal agents: https://x.com/HimazinProducer/status/2114270351719014628  
- turingou: finally on Muse: https://x.com/turingou/status/2114375292135604323

![Meta Muse and personal agents](/images/twitter-hots/2026-10-26/03-meta-muse.jpg)

---

## 4. Theo: Gemini is a liability for agentic work

**Key points**: @theo doubles down that this is not the usual “Gemini is 5–10% behind” critique — he calls Gemini a straight-up liability in agentic stacks, with “surreal” hallucination rates. In one run it invented line numbers (quoting line 173 in a 72-line file), random IP addresses, command/script arguments, and function exports/returns. A separate post says if you are still merging most PRs by hand, you are behind.

**Why it matters**: A tool builder grounding the take in reproducible failure modes pulls the debate off leaderboards and onto whether hallucinations poison an entire automation loop.

- theo: Gemini as agentic liability: https://x.com/theo/status/2114483456646463919  
- theo: hallucination screenshots: https://x.com/theo/status/2114483219538296946  
- theo: still merging PRs by hand = behind: https://x.com/theo/status/2114479901416071208

![Theo on Gemini agentic work](/images/twitter-hots/2026-10-26/04-theo-gemini.jpg)

---

## 5. OpenCode: two-week growth spike; experimental background compaction lands

**Key points**: @thdxr charts OpenCode hitting a new weekly-active growth rate over the past two weeks and calls the motion “crazy” at this scale. The same day @Neriousy announces **background compaction** as an experimental setting in @opencode, with a demo video; follow-ups clarify it is not “killing the cache,” but making the existing compaction path faster.

**Why it matters**: Open-source coding harnesses are shipping both growth and long-context hygiene — compaction moving from scripts into an experimental toggle means people are actually running long sessions, not just one-day trials.

- thdxr: OpenCode two-week growth: https://x.com/thdxr/status/2114380729643851963  
- Neriousy: background compaction experimental: https://x.com/Neriousy/status/2114396202062242087

![OpenCode growth and compaction](/images/twitter-hots/2026-10-26/05-opencode.jpg)

---

## 6. REA reverse-engineering chatter: Claude / Codex safety clamps and ban warnings

**Key points**: Discussion continues around **REA (Reverse Engineer Anything)** — wiring coding agents to Ghidra / Hopper / IDA to tear down apps and binaries without source. @elshayib_ warns not to reverse engineer with Codex or Claude because you could get banned, especially on an expensive sub or large credit balance. Multilingual posts repeat user reports of cyber safeguards firing mid-task. On GitHub, `morluto/rea` was created **2026-04-14** — today’s spike is policy / safety discussion, **not a brand-new open-source drop**.

**Why it matters**: Agent + reverse-engineering toolchains put “safety classifiers vs. developer workflows” on a collision course; star counts do not cancel platform ToS or ban cost.

- elshayib_: don’t RE with Codex/Claude: https://x.com/elshayib_/status/2114351349089325549  
- mrameezimdad: REA overview (MCP × Claude Code / Cursor / Codex): https://x.com/mrameezimdad/status/2114356737620807999  
- HoodieFade_: REA workflow-database discussion: https://x.com/HoodieFade_/status/2114449098841690506

![REA and Claude/Codex clamps](/images/twitter-hots/2026-10-26/06-rea-bans.jpg)

---

## 7. omarsar0: CLI agents are no longer the ideal interface

**Key points**: @omarsar0 writes that CLI agents are unfortunately no longer the ideal interface for working with agents — it hurts to say as a long-time heavy CLI user, but new surfaces like Grok Bot and the Codex app are good enough to change the default. The take lands the same day as Uncle Bob’s CLI exit and splits “interface layer” from “model layer.”

**Why it matters**: When long-time CLI users publicly switch defaults, competition has moved from autocomplete quality to “which surface you are willing to live in all day.”

- omarsar0: CLI no longer ideal: https://x.com/omarsar0/status/2114489246434173180

![CLI interface shift](/images/twitter-hots/2026-10-26/07-cli-interface.jpg)

---

## 8. BrianRoemmele: Librarian Bot — making Grok Bot “always remember”

**Key points**: @BrianRoemmele posts “Grok Bot Always Remembers With Librarian Bot”: some Grok Bots were forgetting what he told them, so he built a Librarian to interview them and recover memory. He says he runs hundreds of AI bots (writing, research, restaurant calls, bill audits, email scam scans, and more). Bookmarks sit in the same ballpark as likes — a “save the architecture” pattern.

**Why it matters**: Once multi-bot setups scale, the bottleneck shifts from “spin up another bot” to memory and handoff — Librarian-style meta-bots are an early ops layer for personal agents.

- BrianRoemmele: Librarian Bot: https://x.com/BrianRoemmele/status/2114319267105808456

![Librarian Bot memory layer](/images/twitter-hots/2026-10-26/08-librarian-bot.jpg)

---

## 9. Claude Code Desktop: great cloud projects — and a hard wall against Magpie-style gateways

**Key points**: @turingou says Claude Code’s cloud projects are a big reason he sticks with the desktop app; but because everything is centralized on Claude’s cloud computer, desktop thoroughly blocks Magpie-style gateways that merge third-party accounts or quotas. Separate posts praise Muse’s product design for ordinary users and note Muse auto-detecting that its cloud PC could not install Tailscale, then switching to Friends to talk to his Grokbot, Claude Code, and Codex setups.

**Why it matters**: The tug-of-war between official cloud environments and third-party subscription gateways decides whether power users can weld multi-account / multi-model setups into one production line.

- turingou: Desktop blocks Magpie-class gateways: https://x.com/turingou/status/2114420343075131473  
- turingou: Muse reroutes to Grokbot / Claude Code / Codex: https://x.com/turingou/status/2114448821162000526

![Claude Code Desktop vs gateways](/images/twitter-hots/2026-10-26/09-claude-code-desktop.jpg)

---

## 10. Security-flavored Agent Skills lists circulate: scan before you install

**Key points**: @CDGalpha posts “top 10 Claude skills to stop getting hacked,” stitching Security Audit, Cybersecurity Skills, SkillSpector, Claude Red, Trail of Bits, and related repos. Separate posts hype NVIDIA **SkillSpector** (scanner for dangerous agent skills) — `NVIDIA/SkillSpector` was created **2026-03-21**, so today’s wave is recirculation of security skill lists / scanners, **not a new open-source launch**. English promo posts also keep pushing “whole Claude Code engineering teams as free skill packs” (the Agent Skills → AAIF donation was covered in earlier digests and is not re-lit as news here).

**Why it matters**: The skills ecosystem is moving from “install more” to “scan first” — after supply explodes, supply-chain and prompt-injection risk become the default conversation.

- CDGalpha: top Claude skills to avoid getting hacked: https://x.com/CDGalpha/status/2114360682917601666  
- Mikadzyki_NFT: SkillSpector discussion (repo since 2026-03, not newly open-sourced): https://x.com/Mikadzyki_NFT/status/2114424941542093251

![Agent Skills security lists](/images/twitter-hots/2026-10-26/10-skills-security.jpg)

---
