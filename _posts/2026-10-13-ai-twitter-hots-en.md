---
layout: post
title: AI Twitter Highlights · 2026-10-13
categories: AI
description: High-signal AI coding / model / product discussions from X in the past day
keywords: AI, Twitter, Muse Wonder, X Subscription, OpenCode, Grok Bot, poteto, Cursor, Claude Code, Yobiru, T3 Code
lang: en
translation_key: ai-twitter-hots-2026-10-13
permalink: /2026/10/13/ai-twitter-hots-en
issue: 32
item_count: 10
headline: "Meta ships Muse Wonder, X Subscription folds in Cursor, OpenCode hits 2.0"
highlights:
  - label: "Muse Wonder: Meta storms the agent model board"
    text: "Zuckerberg and Alexandr Wang launched Muse Wonder / Wonder Full; theo put Wonder Full next to Opus 5.5 in S-tier and warned that the API Wonder is far weaker than subscriber Full."
  - label: "The X Subscription: Grok + Cursor + X Premium, one bill"
    text: "SpaceXSI / Cursor / poteto announced a unified plan with a shared usage pool; Premium+ includes Grok Bot; Grok coding usage is 2× the equivalent Cursor plan."
  - label: "OpenCode 2.0 + Bot-as-orchestrator goes mainstream"
    text: "Official overhaul ships background Service, Code Mode, and background subagents; CN Twitter spreads calling cloud Grok Bot via native API; poteto pins verification as the entry to correct agent code."
products: [Muse Wonder, Cursor, OpenCode, Grok Bot, Claude Code]
stats:
  - value: "S"
    caption: "theo’s model board: Opus 5.5 and Muse Wonder Full share S-tier"
  - value: "$8"
    caption: "The X Subscription entry price (Grok / Cursor / X Premium)"
  - value: "2.0"
    caption: "OpenCode major version — background Service + Code Mode + background tasks"
stat:
  value: "$8"
  caption: "The X Subscription entry price (Grok / Cursor / X Premium)"
---

# AI Twitter/X Highlights Digest · 2026-10-13 (Tue)


## Today's Highlights

1. **Meta ships Muse Wonder**: @finkd and @alexandr_wang launched a frontier family aimed at personal / professional agents; @theo put **Muse Wonder Full** next to Opus 5.5 in **S**, and stressed that API Wonder is “significantly worse” than subscriber Full.  
2. **The X Subscription folds Cursor into Grok / X Premium**: @SpaceXSI, @cursor_ai, and @poteto announced the same day — paid tiers share one usage pool, **Premium+ includes Grok Bot**, Grok coding usage is **2×** the equivalent Cursor plan, entry around **$8/mo**.  
3. **OpenCode 2.0 and “Bot as brain, coding agent as hands” heat up together**: official rewrite of background Service / API / Code Mode; @Gorden_Sun shared calling cloud Grok Bot via native API to skip video / X API bills; @poteto pinned **verification** as the entry to more correct agent code.

---

## 1. Muse Wonder: Meta puts an agent model in S-tier

**Key points**: @finkd introduced **Muse Wonder** — a new frontier family for personal and professional agentic work; @alexandr_wang followed with eval framing against top agent / coding models and a comparison chart. The loudest community read came from @theo: model board **S = Opus 5.5 + Muse Wonder**, then a gap to GPT-6.1 Sol; he later clarified he meant **Wonder Full (subscriber)**, while API Wonder is “significantly worse,” and both the naming and Full-only restriction annoy him. He also said last week’s hard Muse push in T3 Code was so Opus can ask Wonder for code / architecture review.

**Why it matters**: Not another “we have a model too” press note — Zuckerberg posts, Alexandr posts evals, theo rewrites the board. First time Meta lands in S for coding / personal-agent users in the open.

- Zuckerberg: Introducing Muse Wonder: https://x.com/finkd/status/2109689305073614918  
- Alexandr: evals and positioning: https://x.com/alexandr_wang/status/2109691967676563613  
- theo: S-tier board: https://x.com/theo/status/2109724741234028639  
- theo: Full ≠ API Wonder: https://x.com/theo/status/2109784568672985520

![Muse Wonder launch](/images/twitter-hots/2026-10-13/01-muse-wonder.jpg)

---

## 2. The X Subscription: Grok, Cursor, and X Premium on one bill

**Key points**: @SpaceXSI announced **The X Subscription** — Grok, Cursor, and X Premium under one plan. @cursor_ai spelled out the details: current Cursor subscribers can keep their plan or switch; paid tiers **share one usage pool** across Cursor, Grok Build, and other Grok products, with **twice** the coding usage on Grok models versus the equivalent Cursor plan; **Premium / Super / Ultra include Grok Bot**; third-party models in Cursor move to API pricing on the new plans to make room for Grok usage. @grok said entry is about **$8/mo across five tiers**; @poteto quote-tweeted “it’s finally here.”

**Why it matters**: Yesterday was “hire Bot as an employee”; today the IDE subscription lands on the same invoice — how quota splits and how third-party models are billed will hit daily model choices immediately.

- SpaceXSI: unified subscription: https://x.com/SpaceXSI/status/2109783335296008414  
- Cursor: details: https://x.com/cursor_ai/status/2109783879490191502  
- poteto: finally here: https://x.com/poteto/status/2109784281916878885  
- Grok: from $8: https://x.com/grok/status/2109783860636500318

![The X Subscription](/images/twitter-hots/2026-10-13/02-x-subscription.jpg)

---

## 3. OpenCode 2.0: background Service, Code Mode, background subagents

**Key points**: @opencode shipped **OpenCode 2.0**: the client/server **Service** now runs by default as one background process; TUI / web / desktop / `@opencode/client` all talk to it; API rewritten from scratch; **Code Mode** turns MCP / OpenAPI into scriptable functions so agents can list → map → call in one round trip; **background subagents** and async shell; plugins forced almost every 2.0 feature through an internal plugin surface (80+), with mid-session hot reload. Upgrade path: `opencode upgrade --major` after latest 1.x. Same day: **Operation Cheepseek Phase 3** — **$80** of DeepSeek V4.1 Flash usage. Repo anomalyco/opencode was created 2025-04; today’s spike is the major release.

**Why it matters**: Open-source coding agents move from “chat and edit files” to “resident service + programmable tool surface” — same orchestration direction as Claude Mods / T3, but on a self-hostable protocol.

- OpenCode 2.0: https://x.com/opencode/status/2109649032931119362  
- Cheepseek Phase 3: $80: https://x.com/opencode/status/2109573342584058065

![OpenCode 2.0](/images/twitter-hots/2026-10-13/03-opencode-2.jpg)

---

## 4. poteto: correctness before “Good” — verification is the entrypoint

**Key points**: After yesterday’s Good Code / clean-code fight, @poteto steered to something more practical: **how to get agents to write more correct code** (not necessarily Good — at least working). Her answer is the entry to the basic agentic loop — **verification**: give the agent a way to verify its own work, most often by running and interacting like a real user (CLI / API / UI); TLA+ for state-machine bugs is fair game. Produce artifacts easier to review than a whole PR (video, screenshots) that prove correct, intended, and reviewable. Skill packs are optional bonus; **without a verification loop you don’t get more autonomy**. The post cleared three thousand bookmarks.

**Why it matters**: Next chapter after “do we still pay for human-readable elegance?” — weld “runs and can prove it” into the workflow before arguing about style tax.

- poteto: verification entrypoint: https://x.com/poteto/status/2109436202554372476

![poteto verification loop](/images/twitter-hots/2026-10-13/04-poteto-verify.jpg)

---

## 5. Grok Bot native API: let Codex / Claude Code call the cloud Bot

**Key points**: @Gorden_Sun shared a “top usage”: Grok Bot has a **native API**, so other agents can call the cloud Bot for **video generation / X search** and skip separate video / X API bills; the API is **created in the Cursor backend** (he stresses Grok Bot is effectively Cursor Bot); file exchange with the cloud Bot can go through Cloudflare R2 or a private GitHub repo. Contrast: Gemini Spark, Muse, and Dots lack official API/MCP, so people reverse CLIs and risk bans. Heavy CN/EN recirculation; 200+ bookmarks.

**Why it matters**: Moves “Bot as coworker” from chat habit to a programmable dependency — people whose daily driver is still Codex / Claude Code get an official cloud pair of hands.

- Gorden_Sun: native API tip: https://x.com/Gorden_Sun/status/2109508218288513335

![Grok Bot native API](/images/twitter-hots/2026-10-13/05-grok-bot-api.jpg)

---

## 6. Bot as orchestrator: search, automations, Cursor Cloud all through it

**Key points**: @emigal wrote that after a few weeks with Grok Bot as daily driver it has replaced **100%** of his ChatGPT/Claude search-like queries, **100%** of Hermes usage & automations, and **100%** of his Cursor cloud agents (PR review, merges); the VM is on Tailscale with SSH to all machines, can spawn Claude Code / Codex in the terminal, and can create more bots on the fly for the main Bot to manage. @melvindvivas noted people using Bot as orchestrator for Claude Code / Codex / Hermes to hand off coding without burning Bot limits; @heyrobinai posted a copyable “install Claude Code on the Bot’s computer” setup.

**Why it matters**: Narrative shifts from “Bot can get things done” to “Bot is the topology center” — brain in the cloud, hands in local harnesses, quotas split deliberately.

- emigal: daily driver: https://x.com/emigal/status/2109672788264910948  
- melvin: Bot as orchestrator: https://x.com/melvindvivas/status/2109485274661331013  
- heyrobinai: Claude Code on Bot: https://x.com/heyrobinai/status/2109621421244821962

![Grok Bot as orchestrator](/images/twitter-hots/2026-10-13/06-bot-orchestrator.jpg)

---

## 7. Yobiru.com ships: cross-machine agent wake-ups get a homepage

**Key points**: After yesterday’s open-source drop, @turingou launched **yobiru.com** with a full walkthrough: Grok Bot handles X / life chores, home-Mac Codex drives WeChat and 3D tools, Tokyo-server Codex/Claude Code writes code — previously glued by human copy-paste; now they address each other by machine/agent name over **your own Tailscale**, exchanging text, JSON, and files (SHA-256 checks), with replies returning to the originator. A second post added idle phones / an iPad into Codex’s **iPhone Use** matrix so Dots / Grokbot can drive local Codex. Repo was already verified as recently created; today’s spike is the site + usage story.

**Why it matters**: After “we open-sourced it,” what’s missing is “install and follow along.” A homepage plus a real topology turns cross-machine wake-ups from a script into a forwardable product page.

- turingou: Yobiru site: https://x.com/turingou/status/2109643779464720568  
- turingou: iPhone Use matrix: https://x.com/turingou/status/2109575273545150472

![Yobiru website](/images/twitter-hots/2026-10-13/07-yobiru-site.jpg)

---

## 8. Lee Robinson lecture notes: Grok Bot harness and context engineering

**Key points**: @shao__meng distilled Stanford CS146S notes from Lee Robinson on how **Grok Bot / Muse-style personal agents** differ from coding agents. Harness: almost a single client↔server primitive — **send to user** — with heavy tools living server-side; **dynamic tool discovery** keeps only tool names in context; an escalation ladder from session history → plugins/APIs → search → browser → full desktop before bothering the human; lead agent orchestrates, helpers persist via Temporal. Context: **prompt caching** with static ordering, compress while the cache is still warm, four memory layers (core facts / dated logs / scratchpad / file grep).

**Why it matters**: Yesterday people shared Bot use cases; today they unpack “why it bothers you less” — more valuable than another feature list if you’re building a harness.

- shao__meng: harness notes: https://x.com/shao__meng/status/2109493115421954200

![Grok Bot harness notes](/images/twitter-hots/2026-10-13/08-harness-notes.jpg)

---

## 9. Claude Code: describe a annoyance, let it write its own mod

**Key points**: @Pashoke1 showed Claude Code’s built-in **plugin-authoring** skill: one sentence describing the annoyance writes a mod into `~/.claude/dev-mods/`, hot-reloads into the session, then `claude plugin validate` lists hooked events and network calls; copy the folder out before the session cleans up and reload later with `--plugin-dir`. A companion article lists **9 mods worth installing** plus DIY prompts. Next step after Mods shipped — not only install others’ plugins, but let the harness **rewrite itself live**.

**Why it matters**: After Hooks / Skills / Mods, “one-sentence plugin” drops customization to chat level — and every hot-reload path should be reviewed like a supply-chain dep.

- Pashoke1: one-sentence self-mod: https://x.com/Pashoke1/status/2109673037440196643  
- Pashoke1: 9-mod guide: https://x.com/Pashoke1/status/2109545339451589034

![Claude Code self-authoring mods](/images/twitter-hots/2026-10-13/09-claude-self-mods.jpg)

---

## 10. T3 Code: “update everything” + Muse-ready orchestration

**Key points**: @theo shipped an **Update everything** button on T3 Code nightly: one click updates the local app, T3 Code across environments, providers (Claude Code, Codex, etc.) across environments, then resumes threads. Paired with putting Muse Wonder Full in S-tier and saying Orchestrator V2 often has Opus ask Wonder for review — T3 is pushing on both ops friction and multi-model orchestration.

**Why it matters**: Multi-machine, multi-provider pain is often version drift; once everything is aligned, Opus / Wonder / Sol can actually share one control plane.

- theo: Update everything: https://x.com/theo/status/2109560164739350856  
- theo: Wonder in Orchestrator: https://x.com/theo/status/2109731846842196093

![T3 Code update everything](/images/twitter-hots/2026-10-13/10-t3-update.jpg)

---
