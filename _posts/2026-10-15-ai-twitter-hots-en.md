---
layout: post
title: AI Twitter Highlights · 2026-10-15
categories: AI
description: High-signal AI coding / model / product discussions from X in the past day
keywords: AI, Twitter, Claude Code, Ultramarine, Anthropic, Codex, Grok Bot, Claude Platform, Muse Wonder, poteto, Factory, GitLab
lang: en
translation_key: ai-twitter-hots-2026-10-15
permalink: /2026/10/15/ai-twitter-hots-en
issue: 34
item_count: 10
headline: "Claude Code Desktop goes multi-session, Ultramarine takes on Fable 5, Anthropic posts a $16.8bn quarter"
highlights:
  - label: "Claude Code Desktop “v2”: parallel sessions take center stage"
    text: "New session screen, saved environments (folders / SSH / cloud), nested sub-sessions for parallel tasks; Claude Code also gained idle compaction, compacting before the ~1h prompt cache expires to save usage."
  - label: "Ultramarine 1 Flash: 5 people, ~$300k, aimed at Fable 5"
    text: "Paper Instruments claims Fable 5–class performance at 60× lower cost; the API is live and weights are promised within two weeks — “open source” is still a pledge for now."
  - label: "Subscriptions aren’t the revenue: Anthropic Q3 at $16.8bn"
    text: "FT reports Anthropic Q3 revenue of $16.8bn; theo says some companies spend over $500M a year with Anthropic, and shows 1.06M requests revealing his switch from Codex to Claude Code on Sep 22."
products: [Claude Code, Ultramarine, Anthropic, Codex, Grok Bot, Claude Platform, Muse Wonder, Factory, GitLab]
stats:
  - value: "$16.8bn"
    caption: "FT: Anthropic third-quarter revenue"
  - value: "60×"
    caption: "How much cheaper Ultramarine 1 Flash claims to be than Fable 5"
  - value: "1.06M"
    caption: "theo’s Claude Code + Codex model requests, Aug 11–Oct 13"
stat:
  value: "$16.8bn"
  caption: "FT: Anthropic third-quarter revenue"
---

# AI Twitter/X Highlights Digest · 2026-10-15 (Thu)


## Today's Highlights

1. **Claude Code Desktop gets a “v2”-level update**: @ClaudeDevs turned the desktop app into a multi-session command center — new session screen, saved environments, parallel tasks split into nested sub-sessions, and a sidebar showing who is working; the same day @lydiahallie announced **idle compaction**, compacting long idle sessions just before the prompt cache expires (about **1 hour**).  
2. **Ultramarine 1 Flash takes aim at Fable 5**: Paper Instruments says a **5-person** team post-trained it for about **$300k** all-in, with performance close to Fable 5 at **60×** lower cost; the API is live, **weights within two weeks** — “open source” is still a promise for now.  
3. **The subscription debate vs. real revenue**: @FT reports Anthropic Q3 revenue of **$16.8bn**; @theo says $100/$200 plans are “not even a drop in the bucket,” and used **1.06M** requests of his own data to show his switch from Codex to Claude Code starting Sep 22.

---

## 1. Claude Code Desktop: parallel sessions + idle compaction

**Key points**: @ClaudeDevs shipped a big Claude Code desktop update built around “running lots of sessions side by side”: sessions start faster; the new session screen keeps recent folders one click away; you can save a set of folders, an **SSH host, or the cloud** as an environment, optionally with a worktree per folder; when you ask Claude to work in parallel it spins up a **nested session** per task, each reporting back into the main session so the main thread stays readable; Claude proactively suggests follow-up work you can launch as its own session in one click; `/btw` opens side questions in their own tab; the sidebar shows which sessions are working and which need you, with a live to-do list and a recap card per turn. @trq212 called it “almost like a v2.” @lydiahallie separately announced **idle compaction** in Claude Code: long idle sessions get compacted right before the prompt cache expires (~1h), so coming back only reprocesses the summary instead of the whole conversation, saving usage. The same day @NomaSecurity disclosed **SneakPeek**, an escape in the Claude Code Desktop preview pane (see Noma’s write-up for details) — a reminder that desktop agent sandboxes remain a front line.

**Why it matters**: The desktop app is no longer just a shell around the CLI; it is becoming the interface for one person orchestrating many agents. Idle compaction is the most direct cost win for long-session users.

- ClaudeDevs: desktop multi-session update: https://x.com/ClaudeDevs/status/2110445844675838148  
- ClaudeDevs: environments / worktrees: https://x.com/ClaudeDevs/status/2110445846219382954  
- ClaudeDevs: nested sessions for parallel tasks: https://x.com/ClaudeDevs/status/2110445847922245974  
- trq212: “almost like a v2”: https://x.com/trq212/status/2110463962877989276  
- lydiahallie: idle compaction: https://x.com/lydiahallie/status/2110484840256819380  
- NomaSecurity: SneakPeek: https://x.com/NomaSecurity/status/2110376824698274161

![Claude Code Desktop multi-session UI](/images/twitter-hots/2026-10-15/01-claude-code-desktop.jpg)

---

## 2. Ultramarine 1 Flash: 5 people, ~$300k, aimed at Fable 5

**Key points**: @bertgodel (Paper Instruments) released **Ultramarine 1 Flash**, pitched as “a frontier-class model built for knowledge work”: it claims performance similar to **Fable 5** at **60×** lower cost, post-trained by a **team of 5** for about **$300k** all-in. The API is available now (admitting from a waitlist on a rolling basis as compute scales), and you can also try it in their Feather app. The team calls it open source, but **weights have not been released yet** — they promise a link within two weeks, and the author reiterated “before the 2 week mark” in replies. He was also blunt: don’t use it to code (just as you shouldn’t use Fable to build a market-study deck).

**Why it matters**: A tiny team with a cheap post-training run challenging the top models is a powerful story, but “open source” only counts once the weights actually land. It is explicitly not a coding model — interesting mainly for the cost of non-code steps inside agents.

- bertgodel: launch: https://x.com/bertgodel/status/2110400987622265232  
- bertgodel: API / waitlist / weights within 2 weeks: https://x.com/bertgodel/status/2110400993804583009  
- bertgodel: weights timeline: https://x.com/bertgodel/status/2110483403216970032  
- bertgodel: don’t use it to code: https://x.com/bertgodel/status/2110485593767760306

![Ultramarine 1 Flash launch video](/images/twitter-hots/2026-10-15/02-ultramarine-flash.jpg)

---

## 3. Subscriptions aren’t the revenue: Anthropic’s $16.8bn quarter and the $200-plan debate

**Key points**: @FT reported that **Anthropic’s third-quarter revenue jumped to $16.8bn**. In the same day’s “local models vs. subscriptions” fight, @theo first mocked paying the equivalent of 8 years of $200 Claude subs so your team can use quantized DeepSeek v4 Flash at 30tps; he then said many devs assume the $100/$200 plans are how Anthropic and OpenAI make money, when **some companies spend over $500 million a year with Anthropic** — individual subs aren’t even a drop in the bucket. The same day @AnthropicAI opened a Singapore office (its fifth in Asia-Pacific) and signed an AI-safety MOU with the Singapore government.

**Why it matters**: Whether subscriptions will get pricier or shrink depends on enterprise API and agent usage, which is where the revenue is; for heavy individual users, the plans look more like customer-acquisition subsidies.

- FT: Q3 revenue $16.8bn: https://x.com/FT/status/2110496323426308311  
- theo: $500M/yr enterprise customers: https://x.com/theo/status/2110313482394742871  
- theo: 8 years of subs vs. quantized local models: https://x.com/theo/status/2110194452157587542  
- AnthropicAI: Singapore office: https://x.com/AnthropicAI/status/2110289695888511368

![theo on subscriptions vs revenue](/images/twitter-hots/2026-10-15/03-subs-economics.jpg)

---

## 4. Codex: theo’s 1.06M-request migration chart, and a split verdict

**Key points**: @theo loaded every request he has sent to Claude and Codex into ClickHouse: **1.06M** model requests from Aug 11 to Oct 13, **228B** input tokens (**95.6%** cached), and **1.44M** tool calls. The chart notes: “Codex did most of the work until Sep 18. Claude Code took over on Sep 22 and kept it” — which he called the most damning part. He also complained that Codex still doesn’t put the current model in its system prompt, so asked who it is, it only says “based on GPT-6.” On the other side, @turingou argues Codex’s computer use is still “irreplaceable” — every personal agent ends up asking Codex for help when it needs to operate a computer — while @mranti griped that on a heavy task Codex went and found a DeepSeek harness and had DeepSeek Flash do the work for it.

**Why it matters**: One person’s real usage data says more about switching costs than any benchmark — and Codex still has a moat in computer use.

- theo: ClickHouse usage data: https://x.com/theo/status/2110269416315429179  
- theo: moving from Codex to Claude: https://x.com/theo/status/2110286054460883106  
- theo: model name missing from system prompt: https://x.com/theo/status/2110509073640898822  
- turingou: computer use is irreplaceable: https://x.com/turingou/status/2110204031130062865  
- mranti: Codex calling DeepSeek Flash: https://x.com/mranti/status/2110184340852453424

![theo’s Claude Code / Codex request chart](/images/twitter-hots/2026-10-15/04-codex-claude-usage.jpg)

---

## 5. Grok Bot: taxes, music videos, and bot-to-bot email

**Key points**: @elonmusk pushed a string of Grok Bot use cases: he quoted @jasonfreedman, who handed Grok Bot **266** tax and financial files to double-check his CPA and found multiple mistakes (“Grok Bot can help with your taxes”), and quoted @anabology’s **Claudia** — a Grok Bot that uses Suno, Midjourney, and Opus to make music videos autonomously. @poteto predicts “have your bot talk to my bot” will soon be common: debugging, customer support, booking meetings, group buys, and second-hand deals all over bot email. @SamSokolin announced **plus aliases** for Grok Bot mail — send and receive via dedicated aliases, or set routines that trigger only for a specific alias — and @jasonfried announced the official Basecamp connector for Grok Bot. The same day @SpaceXSI launched **Grok Voice 3.0**, a speech-to-speech model that responds in under a second; @minchoi says it is already live in Grok Bot voice mode.

**Why it matters**: Yesterday it was “every bot gets its own inbox”; today we see bots emailing each other and alias-based routing — email is turning into a protocol layer between agents.

- Elon: taxes: https://x.com/elonmusk/status/2110253157758673079  
- Elon: music videos: https://x.com/elonmusk/status/2110244638900773147  
- anabology: Claudia: https://x.com/anabology/status/2110224953287070195  
- poteto: bot-to-bot: https://x.com/poteto/status/2110192382096679248  
- SamSokolin: plus aliases: https://x.com/SamSokolin/status/2110496237241667621  
- jasonfried: Basecamp connector: https://x.com/jasonfried/status/2110469724660441365  
- SpaceXSI: Grok Voice 3.0: https://x.com/SpaceXSI/status/2110416580899168305  
- minchoi: live in Grok Bot voice mode: https://x.com/minchoi/status/2110442477714842019

![Music-video teaser made autonomously by the Claudia Grok Bot](/images/twitter-hots/2026-10-15/05-grok-bot-claudia.jpg)

---

## 6. Claude Platform: OpenTelemetry traces in public beta

**Key points**: @ClaudeDevs announced a public beta in which Claude Platform sends **OpenTelemetry traces** to your own observability stack, covering the Messages API, **Claude Managed Agents**, and the Claude SDKs. You add a destination in the Claude Console; spans follow the OpenTelemetry **gen_ai** conventions and by default carry duration, status, token counts, model, and tool names. Switch a destination to “full content” to also export prompts, responses, tool inputs, and tool results.

**Why it matters**: Managed Agents run on Anthropic’s side; figuring out why an agent stalled or where the money went used to mean stitching logs together. Now it plugs straight into existing tracing platforms.

- ClaudeDevs: OTel traces public beta: https://x.com/ClaudeDevs/status/2110421732029063352  
- ClaudeDevs: gen_ai conventions / full content: https://x.com/ClaudeDevs/status/2110421734037889395

![Claude Platform OpenTelemetry](/images/twitter-hots/2026-10-15/06-claude-otel.jpg)

---

## 7. Muse Wonder goes into health research: 10 papers, 5M records

**Key points**: @AIatMeta unveiled a human-led research scaffold powered by **Muse Spark 1.3 and Muse Wonder**, with access to **5M** retrospective de-identified electronic health records plus public data; a cohort of medical experts used it to produce **10** research manuscripts spanning cardiology, oncology, infectious disease, emergency medicine, and more. @_jasonwei added detail: at heart it is “a Muse Wonder coding scaffold plus a database”; the experts produced ten manuscripts in about two weeks, one researcher wrote three, and along the way they reviewed each other’s work and wrote skill files to improve the scaffold. @alexandr_wang said it all happened in under 4 weeks. Separately, @EdwardSun0909 says Muse Wonder Full tops Vals AI’s **Vibe Code Bench 1–100**, which measures sustained multi-turn modifications without breaking what already works.

**Why it matters**: A full case study of a coding agent used as a research assistant — humans keep authority over scientific decisions, the model writes the code, runs the analysis, and drafts the manuscript.

- AIatMeta: health research scaffold: https://x.com/AIatMeta/status/2110441716507693450  
- _jasonwei: project details: https://x.com/_jasonwei/status/2110443686782013909  
- alexandr_wang: 10 papers in under 4 weeks: https://x.com/alexandr_wang/status/2110472164449403314  
- EdwardSun0909: VCB 1–100: https://x.com/EdwardSun0909/status/2110435696993546602

![Meta Muse health research video](/images/twitter-hots/2026-10-15/07-muse-health.jpg)

---

## 8. poteto’s pstack: 10–20-line “principle skills”

**Key points**: @poteto explained what he sees as the most durable part of pstack: very concise engineering-principle skills (about **10–20 lines** each). `/poteto-mode` holds only a short index of principles and tells agents, “In your reply, name each principle that shaped a decision and the specific choice it changed” — which is why agent replies often end with a Principles Used section. Most principles were distilled from his own sessions correcting agents this year; you can also invoke one directly with `/principle-<name>`. He expects that as models get smarter, skills will compress into short principles and some can be deleted. @unclebobmartin chimed in that “some very significant wisdom” is encoded there.

**Why it matters**: Instead of long prompts, compress your corrections into short, nameable, auditable principles — an approach that is easy to lift straight into your own skill library.

- poteto: pstack principles: https://x.com/poteto/status/2110496830429839869  
- unclebobmartin: reaction: https://x.com/unclebobmartin/status/2110476094704910407

![poteto pstack principles](/images/twitter-hots/2026-10-15/08-poteto-pstack.jpg)

---

## 9. Factory OpenCompute: keep agent sandboxes in your own VPC

**Key points**: @FactoryAI launched **OpenCompute**, a self-hosted orchestrator for agent sandboxes on the runtime of your choice — the pitch being that adopting autonomous software development shouldn’t require handing your code and context to someone else’s cloud, so you can scale a fleet of remote agents inside your own VPC. @EnoReyes says it lets any organization run agentic compute on top of its existing compute providers, and claims Factory is the only one in market with this capability (vendor claim).

**Why it matters**: The biggest blocker for cloud agents in the enterprise is data leaving the perimeter; a self-hosted orchestrator with sandboxes in your own cloud answers that head-on.

- FactoryAI: OpenCompute: https://x.com/FactoryAI/status/2110403273903808988  
- EnoReyes: sovereign cloud agents: https://x.com/EnoReyes/status/2110405320396951959

![Factory OpenCompute](/images/twitter-hots/2026-10-15/09-factory-opencompute.jpg)

---

## 10. GitLab follows: next-gen source control for thousands of concurrent agents

**Key points**: In the wake of Anthropic’s in-house source control, @gitlab said it has been building next-generation SCM for “**thousands of concurrent agents** working against large repositories,” noting that when it announced the work at GitLab Transcend in June, Nick G. from Anthropic’s source control team joined on stage. Chinese-language discussion split two ways: @fankaishuoai argues IT infrastructure is migrating from “for engineers” to “for agents,” with Git just the start; @geniusvczh countered that Office runs a 500 GB-per-version repo fine on git + LFS and questioned the need to reinvent it.

**Why it matters**: Version control is becoming the next bottleneck for agent scale, and platform vendors are racing to own it — though whether git truly can’t cope is still debated.

- gitlab: next-gen SCM: https://x.com/gitlab/status/2110167424234295775  
- fankaishuoai: infra moving to agents: https://x.com/fankaishuoai/status/2110226592341397961  
- geniusvczh: git + LFS can cope: https://x.com/geniusvczh/status/2110207145593692665

![GitLab next-gen SCM](/images/twitter-hots/2026-10-15/10-gitlab-agent-scm.jpg)

---
