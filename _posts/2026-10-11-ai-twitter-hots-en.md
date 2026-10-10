---
layout: post
title: AI Twitter Highlights · 2026-10-11
categories: AI
description: High-signal AI coding / model / product discussions from X in the past day
keywords: AI, Twitter, Devin, ChatGPT, Codex, Dots, Grok Bot, Cursor Projects, OpenCode, Browser Use, Vercel, Claude Code, DeepSeek Bot
lang: en
translation_key: ai-twitter-hots-2026-10-11
permalink: /2026/10/11/ai-twitter-hots-en
issue: 30
item_count: 10
headline: "ChatGPT plans power Devin, Dots can drive Codex, Grok Bot orders with a card photo"
highlights:
  - label: "Subscriptions start crossing agent boundaries"
    text: "Cognition lets any personal ChatGPT plan connect to Devin (GPT usage draws from your quota). ChatGPT Dots can start and follow Codex work and edit ChatGPT Work scheduled tasks."
  - label: "Codex Day 6 is a global usage reset"
    text: "Day 6 of Tibo's 28-day run ships no new feature—just a promised end-of-day global ChatGPT / Codex usage reset that the community treated as the week's best 'feature'."
  - label: "Parallel projects and open tooling keep pushing"
    text: "Someone is running 16 Cursor Projects at once. OpenCode moved OpenTunnel to 10 Fly regions. Browser Use claims a 100× cost drop in a year. An unofficial DeepSeek Bot plugin gets a formal intro."
products: [Devin, Codex, Grok Bot, Cursor, OpenCode]
stats:
  - value: "16"
    caption: "Cursor Projects one power user said they were running in parallel"
  - value: "60%+"
    caption: "Share of Vercel deployments that are now agentic (≈3% in Jan 2026)"
  - value: "100×"
    caption: "Cost drop Browser Use claims over the past year"
stat:
  value: "60%+"
  caption: "Share of Vercel deployments that are now agentic (≈3% in Jan 2026)"
---

# AI Twitter/X Highlights Digest · 2026-10-11 (Sun)


## Today's Highlights

1. **Subscriptions start crossing agent boundaries**: @cognition said any personal ChatGPT plan (Go / Plus / Pro) can connect to Devin, with GPT usage drawing down from your own quota — Tibo summed it up as “Your ChatGPT subscription is now also a Devin subscription.” The same day, ChatGPT said **Dots can start and follow work in Codex** and edit Scheduled Tasks in ChatGPT Work.  
2. **Codex “28 days” Day 6 is a global usage reset**: Tibo posted only “Day 6/ Reset,” then “Global reset by EOD.” The community read it as a worldwide ChatGPT / Codex quota refresh by end of day — **no new product feature**, but “getting tokens back” became the story.  
3. **Parallel projects, infra, and CN open tooling keep moving**: Someone is running **16 Cursor Projects** at once; OpenCode rewrote OpenTunnel in Rust across **10 Fly regions**; Vercel says **60%+ of deployments are agentic**; an unofficial **DeepSeek Bot** plugin got a formal introduction for DSH users.

---

## 1. Devin × ChatGPT: personal plans now fuel Devin

**Key points**: @cognition announced that any personal ChatGPT plan (Go, Plus, or Pro) can connect to Devin — once linked, all GPT model usage draws down from your plan’s quota. Tibo (@thsottiaux) quote-tweeted with one line: **“Your ChatGPT subscription is now also a Devin subscription,”** which cleared 4K+ likes and 1.4K bookmarks. The same day @devindevelopers highlighted on-demand macOS / Linux / Windows / Android cloud environments, so the machine on your desk no longer dictates what you can ship.

**Why it matters**: “Paying for Devin” and “paying for ChatGPT” used to be separate ledgers. Personal ChatGPT quota becomes Devin’s fuel tank, which lowers the friction to try a cloud coding agent — especially alongside cross-OS environments.

- Cognition: connect ChatGPT plans to Devin: https://x.com/cognition/status/2108692010056188048  
- Tibo: subscription = Devin: https://x.com/thsottiaux/status/2108777962053292398  
- Devin multi-OS cloud environments: https://x.com/devindevelopers/status/2108734316322984412

![Devin connects ChatGPT subscription](/images/twitter-hots/2026-10-11/01-devin-chatgpt.jpg)

---

## 2. ChatGPT Dots: delegate Codex work to your dot

**Key points**: @ChatGPT shipped **“Delegate work in Codex to your dot.”** A Dot can now start work in Codex and follow existing threads, drawing on ChatGPT conversations, Codex threads, and automations to decide whether to continue or start fresh; it can also review and edit Scheduled Tasks in ChatGPT Work. Tibo called it a “pretty big upgrade.” On the practice side, @turingou argued Dot’s path through a Codex cloud machine back to a home Mac is too roundabout versus talking to a Codex session directly.

**Why it matters**: After Day 5’s “Composer predicts your next line,” Day-of traffic is “Dot watches Codex for you.” ChatGPT’s personal agent is stepping into coding workflows, not only chat and calendar.

- ChatGPT: Delegate work in Codex to your dot: https://x.com/ChatGPT/status/2108636748217770180  
- Tibo: Dots upgrade: https://x.com/thsottiaux/status/2108773703064657936  
- turingou: Dots vs Codex voice path: https://x.com/turingou/status/2108789937265066433

![ChatGPT Dots delegate to Codex](/images/twitter-hots/2026-10-11/02-dots-codex.jpg)

---

## 3. Codex “28 days” Day 6: global usage reset

**Key points**: Day 6 was two words from Tibo — **“Day 6/ Reset”** — plus a reply: “Global reset by EOD. May the tokens do good things for you.” The main post cleared 6K+ likes. Community consensus: a global ChatGPT / Codex usage reset (5-hour window and weekly limits style) by end of day, **with no new feature**. Some joked that resets are the best feature of the week; JP “reset forecast” accounts aimed at early evening Beijing time.

**Why it matters**: The first clear “water day” in the 28-day series — a lifeline for people who burned quota, and a reminder that shipping cadence here mixes product changes with quota ops.

- Tibo Day 6 / Reset: https://x.com/thsottiaux/status/2109045220411351517  
- Global reset by EOD: https://x.com/thsottiaux/status/2109045392684032299

![Codex Day 6 global reset](/images/twitter-hots/2026-10-11/03-codex-day6-reset.jpg)

---

## 4. Grok Bot: order with a card photo; run chores and multi-machine coding

**Key points**: @elonmusk said that to buy something you can **photograph a credit card, drop it in chat**, and Grok @Bot will scour the internet for the best deal and order it (23K+ likes). In Chinese Twitter, @turingou made “sofa coding” concrete: coordinate Grokbot with Codex on multiple machines from the living room; home-LAN tasks go through a homemade tailmsg bridge to local Codex; product work gets handed to Codex / Claude Code on a Tokyo workstation; even empty cat food triggers an Amazon reorder. He also let Grokbot draft DMs — 141 replies to 127 people in a couple of days.

**Why it matters**: Consumer “photo a card and buy” and personal “Grokbot orchestrates many Codex / Claude Code boxes” are the same story at different altitudes — bots leaving the chat pane for real workflows.

- Elon: photo a card, let Grok Bot order: https://x.com/elonmusk/status/2109027407185277123  
- turingou: sofa coordination with Grokbot + Codex: https://x.com/turingou/status/2108875675792994703  
- turingou: chores + multi-machine development: https://x.com/turingou/status/2108816621376827731  
- turingou: Grokbot drafts DMs: https://x.com/turingou/status/2108807799614640365

![Grok Bot sofa multi-agent setup](/images/twitter-hots/2026-10-11/04-grok-bot-sofa.jpg)

---

## 5. Cursor Projects: 16 running in parallel

**Key points**: @poteto said they have so many Cursor Projects in parallel (**16 right now**) that their most-used prompt became: `/bro catch me up on everything since my last message, and if there are any action items for me give me enough context (exec summary) to make a call` (~1.8K likes, ~800 bookmarks). That’s the user-side consequence of yesterday’s Projects waitlist opening — once parallel is easy, **catching yourself up** becomes the scarce skill.

**Why it matters**: The bottleneck moved from “can I open a Project?” to “how do I make decisions across a dozen threads?” That prompt is a ready-made template for every heavy Projects user.

- poteto: 16 parallel Cursor Projects: https://x.com/poteto/status/2109024196760305861

![Cursor Projects parallel catch-up prompt](/images/twitter-hots/2026-10-11/05-cursor-projects.jpg)

---

## 6. OpenCode: rewrite from one iOS prompt; OpenTunnel across 10 Fly regions

**Key points**: @thdxr posted two high-signal practice notes: Ryan **rewrote the opencode2 server and TUI from a single prompt sent from their iOS app** (follow-up: Opus 5.5 orchestrating subagents, about $500); and OpenCode **rewrote the OpenTunnel backend in Rust** and moved it off Cloudflare onto **10 Fly regions worldwide**, with tunnels reconnecting cleanly during the cutover — “beautiful.”

**Why it matters**: Not launch-day polish — a team using its own coding agent on its own infra, with cost and migration feel attached. That’s more useful than another benchmark slide for judging whether OpenCode holds up in production.

- thdxr: one iOS prompt rewrites opencode2: https://x.com/thdxr/status/2108734228561096824  
- ~$500, Opus 5.5 + subagents: https://x.com/thdxr/status/2108734637589852266  
- OpenTunnel → 10 Fly regions: https://x.com/thdxr/status/2108784465514496436

![OpenCode OpenTunnel migration](/images/twitter-hots/2026-10-11/06-opencode-fly.jpg)

---

## 7. Browser Use: ~100× cheaper in a year

**Key points**: @gregpr07 said **Browser Use got 100× cheaper this year**; the official @browser_use account quote-tweeted “Literally cheaper than scraping APIs” (1.2K+ likes, ~500 bookmarks). The debate is shifting from “can a browser agent click?” to **whether unit cost already undercuts classic scraping / structured APIs**.

**Why it matters**: When driving a real browser is cheaper than calling scrape APIs, default agent I/O keeps tilting toward “just open the page” instead of waiting for every vendor endpoint.

- gregpr07: 100× cheaper: https://x.com/gregpr07/status/2108785323316830518  
- Browser Use official quote: https://x.com/browser_use/status/2108790563181113770

![Browser Use 100x cheaper](/images/twitter-hots/2026-10-11/07-browser-use.jpg)

---

## 8. Vercel: 60%+ of deployments are agentic; docs traffic is mostly agents

**Key points**: @rauchg shared machine/agent traffic stats: **58.18%** of Vercel network traffic was bot-originated in the last 30 days (32% in Jan 2024); **60%+ of deployments on Vercel are now agentic** (up from ~3% in Jan 2026); up to **83%** of pageviews on Vercel’s own docs sites come from agents, and the share rises as content is optimized for them. His bet: direct human internet traffic becomes a rounding error; the web thrives, but it is built for and by agents.

**Why it matters**: Hard platform percentages, not vibes. For docs, SDKs, and deploy UX, “readable by agents” is no longer a nice-to-have — it is the main path.

- rauchg: Vercel agent traffic stats: https://x.com/rauchg/status/2108733051283050964

![Vercel agentic traffic stats](/images/twitter-hots/2026-10-11/08-vercel-agents.jpg)

---

## 9. Claude Code CLI: lead agent splits work; subagents commit early

**Key points**: @chunxiangai wrote up what they consider **best current Claude Code CLI practice**: you are the lead agent — decompose work and assign subagents; subagents **don’t build, don’t test, don’t typecheck** — commit early and return; the lead owns task management, conflict resolution, testing, and integration; split by investigation coverage first, and clean up subagent worktrees / intermediate artifacts promptly. The post drew 300+ bookmarks, a sign that this “engineering-management” multi-agent discipline is being copied in earnest.

**Why it matters**: Same arc as Anthropic’s Managed Agents / Projects flood the day before — once tools make parallelism cheap, the gap is **how you manage**, not how many panes you open.

- Claude Code CLI lead/subagent rules: https://x.com/chunxiangai/status/2108783952429207729

![Claude Code CLI multi-agent practice](/images/twitter-hots/2026-10-11/09-claude-code-cli.jpg)

---

## 10. DeepSeek Bot: open-source persistent bots on DSH

**Key points**: @Fei2411 formally introduced the open-source **DeepSeek Bot (ds bot, unofficial)** — a DeepSeek Harness (dsh) plugin for a set of long-lived bots using your own API key, with plans to plug in other models and eventually local agents / existing subscriptions. Install by typing `ds-bot` on the dsh desktop plugin page. The repo [FeiZhuLulu/DeepSeek-Bot](https://github.com/FeiZhuLulu/DeepSeek-Bot) was **created 2026-10-07**; today’s post is the formal intro and distribution spike. @fankaishuoai recommended “DeepSeek desktop + this Bot” for users who can’t reach overseas services. Separately, @Trae_ai said TraeCode and TraeWork are now one unified platform — a useful CN IDE counterpart.

**Why it matters**: The missing piece for many CN users isn’t another chat window — it’s persistent bots + bring-your-own key + a path to local agents. Caveat: the repo is not brand-new today; today is the launch-style introduction.

- Fei2411: DeepSeek Bot intro: https://x.com/Fei2411/status/2108955789117558827  
- fankaishuoai: recommended CN combo: https://x.com/fankaishuoai/status/2108995908688118139  
- TRAE: TraeCode + TraeWork unified: https://x.com/Trae_ai/status/2108822915550699747

![DeepSeek Bot open-source plugin](/images/twitter-hots/2026-10-11/10-deepseek-bot.jpg)

---
