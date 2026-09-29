---
layout: post
title: AI Twitter Highlights · 2026-09-30
categories: AI
description: High-signal AI coding / model / product discussions from X in the past day
keywords: AI, Twitter, OpenAI DevDay, Dots, GPT-6.1 Sol, Ultrafast, Codex, Cursor, Devin, OpenClaw, Raven, pi, ChatGPT Sign-in
lang: en
translation_key: ai-twitter-hots-2026-09-30
permalink: /2026/09/30/ai-twitter-hots-en
---

# AI Twitter/X Highlights Digest · 2026-09-30 (Wed)


## Key Takeaways

1. **OpenAI DevDay** ships always-on **Dots** (GPT-6 Astra), near-Astra **GPT-6.1 Sol** at about a fifth the price, **Ultrafast** / **Pro 500** (up to ~300 tok/s), and reopens Pro $200 with usage math that nets ~half the old plan’s API-dollar value.  
2. **Sign in with ChatGPT** lets subscription quota run in 16+ partners (Devin / OpenCode / Notion…); **Codex Cloud** and **Security Cloud** get major upgrades.  
3. On the tools side: Cursor’s in-chat **`/visualize`**, **OpenClaw Enterprise** open-source control plane announcement, **Raven 0.2** “harness of harnesses”, Sol-vs-Opus community benchmarking, and **pi** showing up in the DevDay stage narrative.

---

## 1. Dots: always-on agents powered by GPT-6 Astra

**Summary**: @OpenAI launched **dots** — always-on agents powered by **GPT-6 Astra**, with their own cloud computer, app connections, and long-running work. @theo’s DevDay overview bins them with personal assistants (GrokBot / Muse–like). @polynoamial said a weekend trial found ~**$500/yr** in recurring charges to cancel and even handled customer service.

**Why it matters**: Beyond another model drop, OpenAI is productizing “persistent agent + cloud environment” on the same axis as coding agents and computer use.

- Launch: https://x.com/OpenAI/status/2104984504133918973  
- Theo overview: https://x.com/theo/status/2104995863689142546  
- Trial note: https://x.com/polynoamial/status/2104990938145890462

![OpenAI Dots launch](/images/twitter-hots/2026-09-30/01-dots.jpg)

---

## 2. GPT-6.1 Sol: near-Astra intelligence at about 1/5 the price

**Summary**: @OpenAI pitched **GPT-6.1 Sol** as near-Astra intelligence for a fifth of the price — for everyday heavy use. It landed in ChatGPT Work / Codex the same day, with day-one availability in **GitHub Copilot**, **Devin**, **JetBrains**, and more. @cognition reported **60.4%** on FrontierCode 1.1 (near GPT-6 Sol’s 60.7%) at about **$0.31/task** on medium — ~**81%** cheaper than GPT-6 Sol at max. @thsottiaux called it good and “unbelievably efficient,” included in paid plans and the API.

**Why it matters**: The DevDay story isn’t only “another flagship” — it’s stuffing capability into a mid-tier price point and lighting up IDEs/agents on day one.

- Launch: https://x.com/OpenAI/status/2104986129686741046  
- Tibo: https://x.com/thsottiaux/status/2105007628460109953  
- Devin: https://x.com/cognition/status/2104988938817413583  
- Copilot: https://x.com/github/status/2104988341729202521  
- JetBrains: https://x.com/jetbrains/status/2104987776550633684

![GPT-6.1 Sol launch](/images/twitter-hots/2026-09-30/02-sol.jpg)

---

## 3. Ultrafast / Pro 500, and Pro $200 reopen with new usage math

**Summary**: @OpenAI introduced **Ultrafast** — up to ~**300 tokens/s** in Codex (up to ~8×) and ~6× in the API — plus **Pro 500** (about 25× Plus limits + Ultrafast). Pro **200** also reopened with Astra / Sol access. The day before, @thsottiaux previewed the reopen alongside a usage-calculation change that nets about **half** the API-dollar value of the old Pro $200, while committing not to bring back the 5-hour hard limit and to keep improving work-done-per-dollar via cheaper/better models. @theo respected the transparency and still called the cut painful.

**Why it matters**: Speed tiers and subscription accounting moved together — heavy coding/agent users will reprice which plan is “enough.”

- Ultrafast: https://x.com/OpenAI/status/2104993966043320759  
- Pro 500 notes: https://x.com/OpenAI/status/2104993967985381673  
- Pro 200 reopen: https://x.com/OpenAI/status/2104993969486930015  
- Tibo preview: https://x.com/thsottiaux/status/2104823812042940713  
- Theo reaction: https://x.com/theo/status/2104825448597479886

![OpenAI Ultrafast](/images/twitter-hots/2026-09-30/03-ultrafast.jpg)

---

## 4. Sign in with ChatGPT: burn subscription quota in Devin / OpenCode / …

**Summary**: @thsottiaux said ChatGPT subscriptions can now be used directly in **16+** partner products with “no little rules,” naming **Devin, OpenCode, Notion**, and more. @cognition followed: Devin Cloud / Desktop / CLI can sign in with Plus/Pro and draw OpenAI model usage from the ChatGPT quota. @walden_yan noted Pro x10 / x20 quotas apply too.

**Why it matters**: Subscriptions stop being trapped in one UI — third-party harnesses get distribution and a clearer “bring your own ChatGPT plan” path.

- Tibo: https://x.com/thsottiaux/status/2105006253986738615  
- Devin: https://x.com/cognition/status/2104996240190792029  
- Quota note: https://x.com/walden_yan/status/2104996892505481650

![ChatGPT sign-in in Devin](/images/twitter-hots/2026-09-30/04-signin-chatgpt.jpg)

---

## 5. Codex Cloud / Security Cloud: configurable envs + default security scanning

**Summary**: @thsottiaux launched a much-improved **Codex Cloud** with configurable cloud environments (“hard to go back to your laptop”). The **Agents API** that powers cloud agents including dots is in preview with computer use. @OpenAI also upgraded **Codex Security Cloud**: cyber-capable **Daybreak Blue** by default, whole-repo scans, continuous commit review, deduped investigation, and prepared fixes — as a desktop/web plugin.

**Why it matters**: DevDay isn’t only models — reproducible cloud envs and security scanning are being bolted into the Codex spine that always-on agents share.

- Codex Cloud / Agents API: https://x.com/thsottiaux/status/2104987594719461796  
- Security Cloud: https://x.com/OpenAI/status/2104987422308335828

![Codex Security Cloud](/images/twitter-hots/2026-09-30/05-codex-cloud.jpg)

---

## 6. Cursor: `/visualize` charts and diagrams in chat

**Summary**: @cursor_ai shipped **`/visualize`** in the Agents Window — build charts and diagrams inline while analyzing data. @milichab and others nudged people to try it the same day.

**Why it matters**: On a model-dominated DevDay, Cursor still lands a concrete IDE workflow win: answers that aren’t only text.

- Launch: https://x.com/cursor_ai/status/2105012114200887434  
- Try it: https://x.com/milichab/status/2105014706184626443

![Cursor visualize](/images/twitter-hots/2026-09-30/06-cursor-visualize.jpg)

---

## 7. OpenClaw Enterprise: enterprise control plane announced as open source

**Summary**: @openclaw announced **OpenClaw Enterprise** with Red Hat / Nvidia / OpenAI — an open-source enterprise control plane for persistent agents, self-hosted, free for an organization to use. The GitHub repo `openclaw/openclaw-enterprise` was **created 2026-08-29**; today is the formal announcement / active push day — treat it as “announced open today,” not “repo minted today.”

**Why it matters**: Getting agents into enterprises keeps shifting from raw model skill to control planes, self-hosting, and licensing boundaries.

- Announcement: https://x.com/openclaw/status/2105023990607786313

![OpenClaw Enterprise](/images/twitter-hots/2026-09-30/07-openclaw.jpg)

---

## 8. Raven 0.2: harness of harnesses, built for RSI

**Summary**: @LongTermMemoryE shipped **Raven 0.2.0**, pitched as a “Harness of Harnesses”: specialist Research / Code / Design / Oncall harnesses plus orchestration of Claude Code, Codex, and more. The whole stack (prompts, policies, playbooks, even orchestration) is meant to be AI-rewritable for RSI. They cite ~**0.963** Node F1 on a Multi-Agent Orchestration Benchmark (self-reported, not an independent leaderboard).

**Why it matters**: Opposite bet from “one coding harness rules them all” — compose specialist harnesses and let the orchestration layer rewrite itself.

- Release: https://x.com/LongTermMemoryE/status/2104745468119146913

![Raven 0.2 harness](/images/twitter-hots/2026-09-30/08-raven.jpg)

---

## 9. Community benchmarks: Sol 6.1 vs Opus 5.5 — cheap enough to default?

**Summary**: @theo called Sol 6.1 an incredible value but still defaults to **Opus 5.5** for coding; Sol wins for reviews, architecture analysis, computer use, and other daily work. After Artificial Analysis numbers landed, he put Sol around Opus 5.5 Medium for under a third the price — then found Sol much stronger in the **Codex** harness than in AA’s mini-swe. @haider1 highlighted AutomationBench (Sol beating Opus 5.5 at medium ~1/3 cost) and DeepSWE (near Astra ~1/5 cost). These are third-party/community runs, not official rankings.

**Why it matters**: The live question after DevDay is defaults: keep Opus for code, and move everything else to Sol?

- Value take: https://x.com/theo/status/2104992534749647118  
- AA numbers: https://x.com/theo/status/2105005625726099473  
- Still default Opus: https://x.com/theo/status/2105001138953327067  
- Stronger in Codex: https://x.com/theo/status/2105063015712465094  
- AutomationBench: https://x.com/haider1/status/2104989468587614589  
- DeepSWE: https://x.com/haider1/status/2104984871068467297

![Sol vs Opus benchmarks](/images/twitter-hots/2026-09-30/09-sol-bench.jpg)

---

## 10. pi shows up in the DevDay stage narrative

**Summary**: @badlogicgames posted **pi on stage**; @mitsuhiko kept shipping Pi details the same day (terminal-color–inspired default theme; MCP / codemode as toggleable extensions). Pi stays in the conversation as a highly customizable coding-agent CLI even when OpenAI owns the main stage.

**Why it matters**: Independent harnesses still earn mindshare with stage presence and sharp engineering details on big-lab launch days.

- Stage: https://x.com/badlogicgames/status/2105004950350667795  
- Theme: https://x.com/mitsuhiko/status/2105010490246377506  
- MCP/codemode: https://x.com/mitsuhiko/status/2105005860673954272

![pi on stage](/images/twitter-hots/2026-09-30/10-pi-stage.jpg)
