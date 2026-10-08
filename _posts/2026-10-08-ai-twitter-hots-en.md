---
layout: post
title: AI Twitter Highlights · 2026-10-08
categories: AI
description: High-signal AI coding / model / product discussions from X in the past day
keywords: AI, Twitter, Claude Haiku 5.5, Claude Code, GPT-6, Intelligent UI, ChatGPT, Codex, Grok Bot, Windows, MAI-Code, GitHub Copilot, tsc-rs, TypeScript, Cursor, Photocraft, DHH, Pi, OSC 7501, OpenCode, opentunnel
lang: en
translation_key: ai-twitter-hots-2026-10-08
permalink: /2026/10/08/ai-twitter-hots-en
issue: 27
item_count: 11
headline: "Haiku 5.5 costs 10x less, GPT-6 enters ChatGPT, agent costs get itemized"
highlights:
  - label: "Small models and cheap compute set the agenda"
    text: "Haiku 5.5 (33K likes) costs a tenth of Haiku 4.5 under 100K tokens; Sonnet 5.5 cache reads halved; Max / Team get monthly API credits. Microsoft brings 137B MAI-Code to local PCs."
  - label: "The front door gets rebuilt"
    text: "GPT-6 with Intelligent UI comes to ChatGPT — answers can be interactive interfaces; Codex + ChatGPT Work hits 40M active users; Grok Bot now picks the best back-end model per task (95K likes)."
  - label: "Agent costs get itemized"
    text: "Theo's tsc-rs burned ~$400K of Codex tokens with no result, then ~$20K of Opus finished it in two weeks; Cursor heavy usage extrapolated to $132M/yr, Theo rebuts point by point."
products: [Haiku 5.5, GPT-6, Codex, Grok Bot, Cursor]
stats:
  - value: "1/10"
    caption: "Haiku 5.5 price under 100K tokens (vs Haiku 4.5)"
  - value: "40M"
    caption: "Codex + ChatGPT Work active users, new high"
  - value: "$400K → $20K"
    caption: "tsc-rs: Codex tokens failed, Opus finished in 2 weeks"
stat:
  value: "1/10"
  caption: "Haiku 5.5 price under 100K tokens (vs Haiku 4.5)"
---

# AI Twitter/X Highlights Digest · 2026-10-08 (Thu)


## Today's Highlights

1. **Small models and cheap compute set the agenda**: Anthropic released Claude Haiku 5.5 (33K likes), priced at a tenth of Haiku 4.5 for prompts under 100K tokens; it also halved Sonnet 5.5 cache-read prices and now gives Max / Team plans monthly API credits. Microsoft brought the 137B MAI-Code-1.1 Flash to local PCs, and GitHub Copilot will automatically route tasks to local models.  
2. **OpenAI and Grok Bot are both rebuilding the front door**: GPT-6 came to the ChatGPT Chat tab with Intelligent UI, so an answer can be an interactive interface. Day 3 of Codex's "28 days" announced a new high of 40M active users across Codex and ChatGPT Work, plus another usage reset. Elon Musk said Grok Bot will now use whichever back-end model is best for the task, including Claude Opus 5.5 (95K likes).  
3. **The cost of "agents writing code" got itemized**: Theo released tsc-rs, saying ~$400K of Codex tokens got nowhere while ~$20K of Opus finished it in two weeks. Someone extrapolated a heavy Cursor user's 1.5T tokens to $132M a year, and Theo rebutted it point by point. Meanwhile, debate over an AI clean-room rewrite of Photoshop led Naval to declare that "models are the last moat in software."

---

## 1. Anthropic: Claude Haiku 5.5 launches, Sonnet cache reads halved, subscriptions get API credits

**Key points**: @claudeai released **Claude Haiku 5.5**, calling it the cheapest, fastest and most capable small model it has ever shipped, at about 75% lower average running cost than Haiku 4.5. The post drew 33K likes and 3,800 bookmarks. Pricing is tiered: $0.10 / $0.50 per million input / output tokens for prompts up to 100K tokens, rising to $0.50 / $2.50 above that; @trq212 stressed that it is 10x cheaper than Haiku 4.5 under 100K tokens. In the official results table, Terminal-Bench 4.0 jumps from Haiku 4.5's 0% to 39.2% (GPT-6 Luna: 16.4%), and OSWorld 2.1 reaches 72.4%. Artificial Analysis gave it 43 on its Intelligence Index, 26 points above the previous Haiku, and noted it is the first Haiku with effort settings and adaptive thinking; @haider1, however, pointed out that at max effort it burns more tokens than Opus 5.5 max. Anthropic announced three more things alongside it: **Sonnet 5.5 cache reads are halved** to $0.10 per million, making long-running work about 20% cheaper; **Max / Team plans now include monthly Claude Platform API credits** (Max 5x: $100, Max 20x: $200, Team: up to $500 pooled), usable in your own code or third-party harnesses; and the Python / TypeScript SDKs now have **built-in computer use and browser use toolsets**, with the SDK running the loop and sending actions to drivers. browser-use announced support the same day. On the Claude Code side, @lydiahallie showed that you can now ask Claude to run subagents at a specific effort level (v2.1.292+, 2,800 likes), and 2.1.293 switches the default Haiku to Haiku 5.5 with 1M context. Cursor, GitHub Copilot, OpenCode and Devin all added it the same day (see items 5, 7 and 11).

**Why it matters**: Haiku 5.5's pricing fits subagent and computer-use work closely, and with API credits bundled into subscriptions, Anthropic is making the "Opus as lead, Haiku for the grunt work" multi-model pattern much cheaper. @theo said it sits "so far to the left" on the cost/intelligence charts for an Anthropic model, making it the best-received model release of the day.

- Haiku 5.5 launch: https://x.com/claudeai/status/2107894039626277339  
- Benchmark comparison: https://x.com/claudeai/status/2107894042235166750  
- Sonnet 5.5 cache reads halved: https://x.com/claudeai/status/2107894060229034197  
- Monthly API credits for Max / Team: https://x.com/ClaudeDevs/status/2107895957933408429  
- Computer use built into the SDKs: https://x.com/ClaudeDevs/status/2107925762720326090  
- trq212: 10x cheaper under 100K tokens: https://x.com/trq212/status/2107898493234982968  
- Artificial Analysis results and token-usage debate: https://x.com/haider1/status/2107915358309126397  
- Claude Code subagent effort: https://x.com/lydiahallie/status/2107625236430798909  
- Now in Devin: https://x.com/devindevelopers/status/2107943421461635481  
- Theo's take: https://x.com/theo/status/2107915920714944999

![Claude Haiku 5.5 results table](/images/twitter-hots/2026-10-08/01-claude-haiku-5-5.jpg)

---

## 2. OpenAI: GPT-6 and Intelligent UI come to ChatGPT

**Key points**: @OpenAI announced that **GPT-6 and Intelligent UI are rolling out in ChatGPT for everyone**: answers are no longer just text, and the model can produce visuals and interactive tools on the spot. The post drew 14.6K likes and 4,000 bookmarks. Plus / Pro / Business / Enterprise get it today, powered by GPT-6 Sol; Free and Go users start tomorrow, powered by GPT-6 Luna. The update only applies to ChatGPT's Chat tab, and **the models behind Work and Codex are not changing**. @sama summed it up as "ChatGPT can now generate a custom UI for you" (5,000 likes, 1,300 bookmarks). @michpokrass explained that Intelligent UI is "a bet on model intelligence," and that the team built dedicated tools so GPT-6 can produce interfaces that are token-efficient, stream in instantly and match ChatGPT's design language. @thsottiaux noted the many model and infra improvements needed to scale it to 1.2B users.

**Why it matters**: It is the same direction as T3 Code rendering visualizations in threads (covered yesterday), except OpenAI pushed it straight into a chat app with a billion-plus users. For teams building agent clients, "the answer is an interactive interface" is becoming the default expectation.

- Launch post: https://x.com/OpenAI/status/2107894997538525580  
- Tiers and models: https://x.com/OpenAI/status/2107895006350791071  
- Sam Altman: https://x.com/sama/status/2107924408597950702  
- Greg Brockman: https://x.com/gdb/status/2107899150247616531  
- Design thinking: https://x.com/michpokrass/status/2107939609380331811  
- Tibo: scaling to 1.2B users: https://x.com/thsottiaux/status/2107912709715132482

![GPT-6 with Intelligent UI](/images/twitter-hots/2026-10-08/02-gpt-6-intelligent-ui.jpg)

---

## 3. Codex "28 days," Day 3: 40M active users and another usage reset

**Key points**: After Day 2, @thsottiaux let the community vote between the four new features and a usage reset. The reset won. He said he had calibrated it and the game "seems" rigged in the reset's favor, but rules are rules, so he processed a reset on the spot. That post got 15.6K likes and more than 2,200 replies. On **Day 3**, he said the headline was GPT-6 in ChatGPT, but it was also a small celebration: **a new high of 40M active users across Codex and ChatGPT Work**, marked by loading a "banked reset" into every paid account (13.8K likes). Not everyone was cheering: @theo posted a video arguing that **the $200 Codex plan "got nerfed pretty hard"** and asking whether it still makes sense to keep it.

**Why it matters**: Two usage resets in two days, plus the 40M figure, show that Codex's growth and its usage pressure are rising together. Theo's complaint is a reminder that heavy users mostly care about how much usage a plan actually includes.

- Reset after the vote: https://x.com/thsottiaux/status/2107676072871600470  
- Day 3: 40M active users: https://x.com/thsottiaux/status/2107913674593644711  
- Theo: the $200 plan got nerfed: https://x.com/theo/status/2107935187825008691

![Codex Day 3](/images/twitter-hots/2026-10-08/03-codex-day-3.jpg)

---

## 4. Grok Bot: "whichever model is best" on the back end, and now it can watch X

**Key points**: @elonmusk posted an "important note regarding Grok Bot": going forward, **@SpaceX will use the best back-end model for any given task, including Claude Opus 5.5, Midjourney, Suno and other leading APIs**, whatever is most likely to give users the best outcome. It drew 95K likes and 8,800 bookmarks, the most-engaged AI post of the day. He then added that simple questions will route to small, fast models and complex ones to large models, and that most requests will eventually be handled by a "lightning-fast" version of **Grok 4.8** (not yet released). On the product side, @ericzakariasson shipped **Grok Bot 0.68.1**: Bots can build slide decks with you and deliver them as PowerPoint or Google Slides, send formatted emails straight from a draft card, and run faster computer use on a 1920×1200 screen. Later, @bot announced that **Grok Bot can now search, read and monitor X** (4,500 likes). @poteto's suggested use: have your bot monitor X for feedback on your products, send feature requests to your issue tracker and bug reports to a Cursor cloud agent or Project to triage and fix. "The loop is complete." Separately, Grok 4.7 is now live on Microsoft Foundry.

**Why it matters**: A model company's assistant openly saying its back end will use rival models is rare, even amid today's model-routing debate. X monitoring also means the whole "user feedback → fix" chain can, for the first time, be handed to a bot.

- Elon: best back-end model per task: https://x.com/elonmusk/status/2107724314451878104  
- Simple questions go to small models: https://x.com/elonmusk/status/2107849623364895151  
- Most requests to a fast Grok 4.8: https://x.com/elonmusk/status/2107894231922876510  
- Grok Bot 0.68.1: https://x.com/ericzakariasson/status/2107887770937283028  
- Search, read and monitor X: https://x.com/bot/status/2107949161878606089  
- poteto: closing the feedback loop: https://x.com/poteto/status/2107963437154435182  
- Grok 4.7 on Microsoft Foundry: https://x.com/SpaceXAI/status/2107623124909060174

![Grok Bot 0.68.1](/images/twitter-hots/2026-10-08/04-grok-bot.jpg)

---

## 5. Microsoft: MAI-Code-1.1 Flash runs locally, and Copilot learns to hand work to local models

**Key points**: @satyanadella called it "a new chapter for Windows," bringing "unmetered intelligence" to every PC and making every PC a place where agents can work securely on your behalf (4,300 likes, 1,300 bookmarks). Highlights: **MAI-Code-1.1 Flash**, a 137B-parameter coding model with a 256K context window, now optimized to run on your PC; **GitHub Copilot can hand off work to local models**, cutting project costs; Hybrid Intelligence lets Copilot take actions directly on the PC and keep sensitive work on-device; "Code in Copilot" builds software on your desktop with no cloud token spend; Windows and Agent 365 come together, including MXC, a local sandbox for agent execution; and new devices such as the Surface Laptop Ultra powered by NVIDIA RTX Spark. @github announced in parallel that Copilot will **soon route tasks to a local model automatically** when that is most suitable (the next step in Project HydraFusion), saving AI credits. **Local sandboxing for Copilot is now generally available** in Copilot CLI, the Copilot app and VS Code: commands run in isolation with controlled access to files, network and credentials, and enterprises can manage policies centrally. Claude Haiku 5.5 is also GA in Copilot; GitHub says early testing showed it matching Claude Sonnet 5 on many coding tasks with significantly fewer tokens and steps.

**Why it matters**: While cloud models compete on price, Microsoft is using local models plus a local sandbox to push the cost toward zero. If Copilot's automatic local routing works well, it will reset developers' expectations of pay-per-token tools.

- Satya's roundup: https://x.com/satyanadella/status/2107898018112647313  
- Copilot local model routing: https://x.com/github/status/2107896916595884177  
- Copilot local sandboxing GA: https://x.com/github/status/2107915368358404147  
- Haiku 5.5 GA in Copilot: https://x.com/github/status/2107934117581189271

![Windows and Copilot](/images/twitter-hots/2026-10-08/05-windows-copilot.jpg)

---

## 6. Theo releases tsc-rs: agents port the TypeScript compiler to Rust

**Key points**: @theo announced **tsc-rs (aka ts-rust)**, a complete rewrite of the TypeScript compiler, type checker and LSP in Rust, pitched as an open-source drop-in replacement for tsc that is available now. He says agents worked on it for 5 months: **~$400K of Codex tokens got nowhere, while ~$20K of Opus got there in two weeks**, and he "has not read a single line of the code." The post drew 5,000 likes and 1,400 bookmarks. The matching repo, pingdotgg/ts-rust, was created on October 7, and its README describes it as "an experimental Rust port of the TypeScript 7 compiler." The follow-ups are telling: Opus took "porting" literally and ported most of Go's standard library into Rust too (TypeScript 7 itself is written in Go); the usage was roughly 10 weeks of the $200 Claude plan; of the first 5 issues filed, 4 were actually upstream TypeScript behavior, a port "so faithful" that it reproduces real quirks; and he has no intention of maintaining it himself, because "Claude's on it." The community has already run it inside a Cloudflare Worker.

**Why it matters**: This was the day's most-discussed large agent-engineering case, and a rare head-to-head of Codex and Opus on the same job (the author's own account, not a rigorous eval). Pulling off a compiler-scale port without reading the code, the verification approach (matching upstream behavior, testing against real issues) is more worth copying than the choice of model.

- Announcement: https://x.com/theo/status/2107789940482621795  
- Ported Go's standard library too: https://x.com/theo/status/2107803180109267440  
- About 10 weeks of Claude plan usage: https://x.com/theo/status/2107792358540730661  
- 4 of 5 issues are upstream behavior: https://x.com/theo/status/2107937004424138770  
- "Claude's on it": https://x.com/theo/status/2107934938398081519

![tsc-rs porting cost](/images/twitter-hots/2026-10-08/06-tsc-rs.jpg)

---

## 7. Cursor: drive local agents from your phone, plus a "what are 1.5T tokens worth" fight

**Key points**: @cursor_ai announced that **you can now control the agents on your computer from your phone**: check in, reply or start new tasks from the Cursor iOS app, with Enterprise admins needing to enable it (2,200 likes). The same day, **Claude Haiku 5.5 arrived in Cursor**, costing 10x less than Haiku 4.5 on shorter requests, with a CursorBench comparison available. The other hot thread was about cost: @peterpme noticed that @poteto's public Cursor profile shows **1.5T tokens in the last 30 days**, and at $8 per million extrapolated that to $132M a year (2,700 likes, 800 bookmarks). @theo replied with a long rebuttal: the 1.5T includes cached tokens, and his own 33.5B tokens worked out to just $0.56 per million; real API cost is probably $100K–$500K a month; and per Artificial Analysis, the cost of a given intelligence level has fallen 30x in 5 months, so reproducing the same work a year from now could cost about $1,200 a year. poteto herself replied that she strives to be a power user of both Grok Bot and Cursor so she can give genuinely useful feedback.

**Why it matters**: Remote control means a Cursor agent running on your machine no longer ties you to your desk. The cost fight shows that, when judging whether heavy agent use is worth it, cache hit rates and how fast models get cheaper matter more than raw token counts.

- Control local agents from your phone: https://x.com/cursor_ai/status/2107618653701296162  
- Haiku 5.5 in Cursor: https://x.com/cursor_ai/status/2107897245282799864  
- The 1.5T-token extrapolation: https://x.com/peterpme/status/2107847615463219252  
- Theo's rebuttal: https://x.com/theo/status/2107924138094703084  
- poteto's reply: https://x.com/poteto/status/2107933215348637841

![Cursor mobile remote control](/images/twitter-hots/2026-10-08/07-cursor-remote.jpg)

---

## 8. "Closed source is dead?" An AI clean-room Photoshop sparks a moat debate

**Key points**: The trigger is **Photocraft**, an open-source clean-room reimplementation of Adobe Photoshop in Rust (Apache-2.0). Note that it is not new today: the repo was created on September 30, and it kept spreading over the past day after being widely shared on October 6. @dhh asked how many pencils, how many humans and how many hours it would have taken to recreate the Adobe suite by hand (7,200 likes, 3,200 bookmarks). @naval's verdict: **"Models are the last moat in software."** AI can train on essays and rewrite them, decompile software and recode it, ingest art and recreate it, but AI itself doesn't want to be "distilled," so expect more software to retreat to the server and resist distillation (5,100 likes, 2,500 bookmarks). @leerob put it as "every game is being decompiled, every math problem is being solved, everything is happening all at once." That the project decompiled Photoshop and then generated Rust is only speculation by some commenters; the project itself has not said so.

**Why it matters**: If clean-room rewrites of mature commercial software with agents become cheap, the moat around closed-source clients gets repriced, which is why Naval expects software to retreat to the server. It is the other side of the same trend as tsc-rs in item 6.

- DHH: https://x.com/dhh/status/2107727330252874103  
- Naval: models are the last moat: https://x.com/naval/status/2107648710918410670  
- Lee Robinson: https://x.com/leerob/status/2107645527407931441

![Naval: models are the last moat](/images/twitter-hots/2026-10-08/08-closed-source-debate.jpg)

---

## 9. Agent workflows: DHH's cross-model review, Theo's PR-babysitting audit

**Key points**: Asked about his setup, @dhh said it is **any harness, multiple agents running concurrently, barely any skills, and adversarial reviews**. There's no magic sauce; the models are great out of the box (4,600 likes, 1,400 bookmarks, quoting thdxr's "models improve faster than the tinkerers" post from the day before). He then shared his adversarial code-review technique: when driving from Codex, say "Review this with claude"; when in Claude, say "Review this with codex." The models know how to kick off a review via the CLI, take turns and settle an argument (2,300 likes, 700 bookmarks). @theo admitted his agents wrote more than 200 bad "watch PR" scripts over the past few months, and shared a prompt that has an agent audit your Claude Code, Codex and other agent history on the machine: how many times the babysitting logic was reinvented, how many versions had flaws, and how many tokens and dollars were wasted (800+ bookmarks, more than its likes). He also repeated his advice not to run agents on a Mac unless you have to, since moving to Linux makes a big difference to file-system performance.

**Why it matters**: Both approaches point to the same conclusion. Rather than piling on ever more complex custom workflows, let models from two different vendors review each other, and periodically audit the wheels your agents keep reinventing.

- DHH's setup: https://x.com/dhh/status/2107823432205484040  
- Cross-model review technique: https://x.com/dhh/status/2107882896195199116  
- Theo's PR-babysitting audit prompt: https://x.com/theo/status/2107765823637168287  
- Don't run agents on a Mac: https://x.com/theo/status/2107661512504701094

![DHH's cross-model review](/images/twitter-hots/2026-10-08/09-adversarial-review.jpg)

---

## 10. OSC 7501 gets broad uptake in a day, and Pi's subagent extension goes public

**Key points**: @mitchellh, who published the OSC 7501 terminal program-status spec the day before, posted an update: **within 24 hours it is integrated in Amp, Factory, TUIOS and libghostty, with verbal support or in-progress PRs from Claude Code, cmux, Codex, Herdr, OpenCode and Pi**. Pi author @badlogicgames then announced that the next Pi release supports OSC 7501 and demoed it. He also made public the **pi subagent extension** he keeps getting asked about (badlogic/pi-subagent), noting that it is not an Earendil product, that issues and PRs are disabled, and that "you'll figure out how to use it." He recommended two more things: a long post that combines the best parts of Claude, Codex and pi-subagents (its author says Opus 5.5 turned same-session subagents from overkill into something useful; 400 bookmarks), and an interview in which Armin and Mario discuss building Pi and its roadmap.

**Why it matters**: A terminal spec winning commitments from the major coding agents within a day shows that "which agent is waiting on me" during parallel work is a real, widespread pain point. Pi's subagent extension offers a lightweight approach that doesn't need an orchestrator.

- OSC 7501 after 24 hours: https://x.com/mitchellh/status/2107894687587795079  
- Pi supports OSC 7501: https://x.com/badlogicgames/status/2107921299297177833  
- pi subagent extension made public: https://x.com/badlogicgames/status/2107908930253054442  
- Recommended reading: https://x.com/badlogicgames/status/2107900336543584321  
- Armin and Mario interview: https://x.com/badlogicgames/status/2107843610045755850

![Pi supports OSC 7501](/images/twitter-hots/2026-10-08/10-pi-osc-7501.jpg)

---

## 11. OpenCode: trading console credits for GB300 capacity, opentunnel coming soon

**Key points**: OpenCode's @thdxr said they just completed a "cashless transaction," **buying GB300 capacity in exchange for opencode console credits**: "tokens are money" (1,200 likes). He also announced **opentunnel**, which gives public URLs to anything running on your machine. It is end-to-end encrypted so the relay can't see the traffic, ships an SDK for embedding it in apps, and **will be integrated into opencode tomorrow** (nearly 200 bookmarks). On mobile, he said the opencode phone app is heading to TestFlight, and that nobody on the team has looked at its repo or can even run it locally: everyone prompts in Slack, gets screenshots and videos back, and iterates with barely any talking. Claude Haiku 5.5 is also now available in OpenCode and the OpenCode Go subscription, which thdxr noted is the first Claude model in Go.

**Why it matters**: Swapping credits for compute is a genuinely new kind of business deal, and opentunnel solves the most annoying networking problem in using a local agent remotely or from a phone.

- Credits for GB300: https://x.com/thdxr/status/2107893146856432026  
- opentunnel: https://x.com/thdxr/status/2107956848318177622  
- How the mobile app is built: https://x.com/thdxr/status/2107690704956760393  
- First Claude model in Go: https://x.com/thdxr/status/2107930841804636295

![opentunnel](/images/twitter-hots/2026-10-08/11-opentunnel.jpg)
