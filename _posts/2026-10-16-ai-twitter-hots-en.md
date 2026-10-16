---
layout: post
title: AI Twitter Highlights · 2026-10-16
categories: AI
description: High-signal AI coding / model / product discussions from X in the past day
keywords: AI, Twitter, Muse Spark Open, Meta, Cursor, Gemini 4 Argon, Antigravity, Grok Bot, Anthropic, OpenCode, Devin, ChatGPT, Codex, Magnitude, T3 Code, pi-durable
lang: en
translation_key: ai-twitter-hots-2026-10-16
permalink: /2026/10/16/ai-twitter-hots-en
issue: 35
item_count: 10
headline: "Meta ships the 816B open-weight Muse Spark Open, Argon lands in Antigravity, Anthropic says it's profitable"
highlights:
  - label: "Muse Spark Open: Meta's 816B open-weight coding model"
    text: "816B total / 42B active, 1M context, natively multimodal, built for long-horizon tasks and hard software engineering; Ollama had it on cloud the same day, wired into Claude Code; Muse Wonder also landed in Cursor at 46.1% on CursorBench."
  - label: "Gemini 4 Argon arrives in Antigravity with a separate weekly Pro quota"
    text: "Argon opens to paid Google AI Pro, with a quota separate from 3.8 Flash; but some developers report it codes worse than Opus and hallucinates a lot."
  - label: "Anthropic tells investors it's profitable; Fable 5.5 rumors return"
    text: "FT reports Anthropic told investors it is profitable as it rallies support for an IPO; the same day it opened STEM and Conceptual Reasoning Fellowships; theo's “if they drop Fable 5.5 today it's over” got 6k+ likes."
products: [Muse Spark Open, Muse Wonder, Cursor, Gemini 4 Argon, Antigravity, Grok Bot, Anthropic, OpenCode, Devin, ChatGPT, Codex, Magnitude, T3 Code, Mayoi, pi-durable]
stats:
  - value: "816B"
    caption: "Muse Spark Open total parameters (42B active)"
  - value: "46.1%"
    caption: "Muse Wonder on CursorBench (default effort)"
  - value: "2M"
    caption: "thdxr: daily active users OpenCode is about to hit after 2.0"
stat:
  value: "816B"
  caption: "Muse Spark Open total parameters (42B active)"
---

# AI Twitter/X Highlights Digest · 2026-10-16 (Fri)


## Today's Highlights

1. **Meta releases the open-weight Muse Spark Open**: @AIatMeta calls it “the most capable US open-weight model to date” — **816B total / 42B active**, **1M** context, natively multimodal, built for coding and long-horizon agent work; @ollama shipped a cloud version the same day with Claude Code support; @cursor_ai added Muse Wonder at **46.1%** on CursorBench.  
2. **Gemini 4 Argon lands in Antigravity**: @antigravity opened Argon to paid Google AI Pro users with a separate weekly quota that doesn't eat into 3.8 Flash; reception is mixed — @signulll says it codes “worse than Opus, even worse than Sonnet in many cases.”  
3. **Anthropic tells investors it's profitable**: @FT reports Anthropic told investors the company is profitable as it rallies support for an IPO, though growth has been slower than some backers expected; @theo's “if Anthropic drops Fable 5.5 today it might be all over” got 6k+ likes.

---

## 1. Muse Spark Open: Meta's 816B open-weight coding model

**Key points**: @AIatMeta released **Muse Spark Open**, calling it “the most capable US open-weight model to date”: **816B total / 42B active parameters**, a **1M-token** context window, native multimodality across text, image, video and audio, and a focus on long-horizon tasks, complex software engineering and multi-step reasoning. @alexandr_wang's thread repeated the specs. @ollama shipped `muse-spark-open:cloud` the same day, and `ollama launch claude muse-spark-open:cloud` plugs it straight into Claude Code (Max / Teams first, Pro soon). Also that day, @cursor_ai added the closed **Muse Wonder**: **46.1%** on CursorBench at default effort, the highest of any Muse model, priced at **$4 / $20** per million input / output tokens.

**Why it matters**: A top open-weight model aimed squarely at agentic coding, plus same-day Claude Code support through Ollama, makes it easier still to bring open-weight models into coding workflows. Note that “most capable” is Meta's own claim.

- AIatMeta: Muse Spark Open launch: https://x.com/AIatMeta/status/2110779754274292212  
- alexandr_wang: specs and positioning: https://x.com/alexandr_wang/status/2110778736434184611  
- ollama: on cloud, works with Claude Code: https://x.com/ollama/status/2110833609829695718  
- cursor_ai: Muse Wonder in Cursor, 46.1% CursorBench: https://x.com/cursor_ai/status/2110867556693430293

![Muse Spark Open launch graphic](/images/twitter-hots/2026-10-16/01-muse-spark-open.jpg)

---

## 2. Gemini 4 Argon in Antigravity: a separate weekly quota for Pro

**Key points**: @antigravity is rolling out **Gemini 4 Argon** to paid **Google AI Pro** subscribers, saying demand has been “incredible” and that it scaled capacity deliberately to get here; Pro gets an extra **weekly-only** Argon quota on top of the existing 3.8 Flash bucket (confirmed by @_mohansolo). @Google also posted a thread on how teams across Google used Argon on their hardest engineering problems. The counterpoint came from @signulll: in his coding tests Argon struggled even on tiny codebases, hallucinated a lot, and was “doing worse than something like Sonnet in many cases.”

**Why it matters**: Last week Argon's story was the launch and benchmarks; now it is actually in a coding IDE with a quota. The gap between hands-on reports and official messaging is worth watching.

- antigravity: Argon for Pro: https://x.com/antigravity/status/2110866531932316011  
- _mohansolo: separate weekly quota: https://x.com/_mohansolo/status/2110866446020710657  
- Google: internal engineering thread: https://x.com/Google/status/2110746360047603834  
- signulll: falls short of Opus for coding: https://x.com/signulll/status/2110906507776667709

![Gemini 4 Argon at Google engineering teams](/images/twitter-hots/2026-10-16/02-gemini-argon-antigravity.jpg)

---

## 3. Grok Bot: a purchase guarantee, growth with no free tier, plugin submissions

**Key points**: Quoting a user who booked a flight with Grok Bot, @elonmusk said that if Grok Bot **makes a mistake with a purchase or leaks your card** (“never happened yet”), **SpaceX will make you whole**; in another post he said he has “never seen anything grow as fast,” and that with **no free tier**, people are getting real value for what they pay. @poteto pointed out that Grok Bot (and Grok, Cursor) plugins can be submitted; @grok described the free **Spam-Call Scrubber** skill, which finds your number on people-search sites and data brokers, submits opt-outs, handles confirmations, and rechecks on a schedule you set.

**Why it matters**: Trust is the hardest part of letting an agent spend your money. A vendor guarantee plus an open plugin ecosystem show personal agents moving from “usable” to “trustworthy enough.”

- elonmusk: SpaceX covers purchase mistakes: https://x.com/elonmusk/status/2110610960474079445  
- elonmusk: fastest growth, no free tier: https://x.com/elonmusk/status/2110866513955868924  
- poteto: plugin submissions: https://x.com/poteto/status/2110840796954202186  
- grok: Spam-Call Scrubber skill: https://x.com/grok/status/2110852882907934743

![Grok Bot purchase guarantee](/images/twitter-hots/2026-10-16/03-grok-bot.jpg)

---

## 4. Anthropic: tells investors it's profitable, new Fellowships, Fable 5.5 rumors

**Key points**: @FT reports that Anthropic **has told investors the company is profitable** as it rallies support for a blockbuster IPO, though its growth has been slower than some backers anticipated amid concern about the AI trade (revenue was reported yesterday; “profitable” is the new part). @AnthropicAI opened two new Fellowships — **STEM Fellows** and **Conceptual Reasoning Fellows** (philosophy, cognitive science, economics, policy, law) — four months at Anthropic starting January 2027, deadline **October 28**. In the community, @theo's “If Anthropic actually drops Fable 5.5 today it might be all over” got 6k+ likes, and he later said he wants to make a new model tier list but fears Fable 5.5 will drop the moment he does; @evanyou joked about Anthropic's new post on defending against distillation attacks and Bun.

**Why it matters**: “Profitable” carries a lot of weight in an IPO narrative; Fable 5.5 is community speculation only, with no official word.

- FT: Anthropic says it's profitable: https://x.com/FT/status/2110709513552601571  
- AnthropicAI: two new Fellowships: https://x.com/AnthropicAI/status/2110720940665372825  
- theo: Fable 5.5 speculation: https://x.com/theo/status/2110673598533050814 | https://x.com/theo/status/2110827068347027508  
- evanyou: anti-distillation vs Bun: https://x.com/evanyou/status/2110722301536915553

![FT: Anthropic says it is profitable](/images/twitter-hots/2026-10-16/04-anthropic-profitable.jpg)

---

## 5. OpenCode: heading for 2M DAU after 2.0, DeepSeek V4.1 Flash free

**Key points**: @thdxr says OpenCode's numbers are “going crazy again” since the 2.0 release and are **about to hit 2M daily active users**; he also showed a workflow of walking outside with the OpenCode phone app, controlling the OpenCode server on his office computer, while it works in a Slack thread with his team and the OpenCode slackbot. @opencode announced **DeepSeek V4.1 Flash is now free in OpenCode** — a post with 22k likes.

**Why it matters**: The open-source coding agent keeps winning users with free models and more surfaces; driving a local server from a phone and into Slack blurs the line between terminal agents and team collaboration tools.

- thdxr: approaching 2M DAU: https://x.com/thdxr/status/2110544790764794231  
- thdxr: phone → server → Slack: https://x.com/thdxr/status/2110793318959632615  
- opencode: DeepSeek V4.1 Flash free: https://x.com/opencode/status/2110635747648909472

![OpenCode daily actives](/images/twitter-hots/2026-10-16/05-opencode.jpg)

---

## 6. Devin Oncall: Devin as your SRE

**Key points**: @cognition launched **Devin Oncall**: Devin automatically investigates alerts and bugs, helping teams diagnose and resolve production incidents, and it says it already **handles thousands of alerts every day** for some of the world's largest companies. @walden_yan says usage was “explosive” even in private beta, so engineers lose less sleep on call.

**Why it matters**: Coding agents are stretching from writing new code to on-call debugging — one of the most painful parts of engineering time, and one of the easiest to measure.

- cognition: Devin Oncall launch: https://x.com/cognition/status/2110790097369010292  
- walden_yan: private-beta usage: https://x.com/walden_yan/status/2110795331709632768

![Devin Oncall](/images/twitter-hots/2026-10-16/06-devin-oncall.jpg)

---

## 7. OpenAI: GPT-Live-1.1 comes to Codex voice, ChatGPT can drive Chrome tabs

**Key points**: @OpenAI released **GPT-Live-1.1**, with new voices, better accents and less “checking...”, across Voice in ChatGPT, **Codex** and dots, adding voices in French, German, Hindi, Mexican Spanish, Korean and Japanese; rolling out to all users today, API coming soon. The same day @ChatGPT brought computer use to Chrome users: in Chat it can look across your open tabs, and **in Work it can control your Chrome tabs** to get things done (sending messages, filling out forms, and so on). @nickbaumann_ called it a “subtle but huge release.”

**Why it matters**: Voice in Codex plus browser control in the main ChatGPT product show OpenAI pushing agent capabilities into everyday entry points.

- OpenAI: GPT-Live-1.1: https://x.com/OpenAI/status/2110797830361436604  
- ChatGPT: Chrome tabs and Work mode: https://x.com/ChatGPT/status/2110823738531037651  
- nickbaumann_: “subtle but huge”: https://x.com/nickbaumann_/status/2110849181829185833

![GPT-Live-1.1](/images/twitter-hots/2026-10-16/07-openai-voice-chrome.jpg)

---

## 8. Magnitude: an open-source local inference engine claiming 2× over Ollama

**Key points**: @tomgreenwald released **Magnitude**, an open-source inference engine that spends up to about a minute tuning kernels on your actual chip when you download a model, keeping the fastest combination that doesn't change output, and pairs each model with the best speculative-decoding drafter. Official numbers, averaged over 11 popular local models: on an M4 Pro vs Ollama (MLX), 1.32× faster prefill and **2.19×** faster decode; on DGX Spark vs Ollama (llama.cpp), 2.17× faster decode. It runs on Apple Silicon, NVIDIA, AMD or just a CPU, connects in one click to agents like Pi, OpenCode, Hermes and Codex, roughly halves per-agent memory with a quantized KV cache, and lets agents share prefix caches. The post has 1.7k bookmarks, more than its likes.

**Why it matters**: Speed and memory are what limit local-model agents; per-machine automatic kernel tuning is a way forward that needs no new hardware. Numbers are the team's own benchmarks.

- tomgreenwald: Magnitude launch: https://x.com/tomgreenwald/status/2110718297255670071

![Magnitude vs Ollama](/images/twitter-hots/2026-10-16/08-magnitude.jpg)

---

## 9. Editors for the agent era: T3 Code leaves alpha, Mayoi, IntelliJ comes to Cursor

**Key points**: @jullerino announced that T3 Code's **Orchestrator V2** is on the stable channel and that the Alpha branding is gone, with this release called **0.1.0 Beta**; mobile builds 2.0.0 are on the App Store and Play Store. @theo quoted it: “T3 Code is finally out of alpha.” @chenchengpro open-sourced the editor **Mayoi**, built for reviewing diffs, reviewing agent code and launching the next agent: written in Go with a GPU-drawn native UI and no Electron, a **24 MB** app (vs. 970 MB for Cursor by his count), about 180 MB of memory, a Ghostty-based terminal, MIT-licensed. @intellijidea announced that **Java and Kotlin by IntelliJ IDEA**, built with @cursor_ai, has reached 1.0 — an LSP-based extension that takes JVM tooling beyond the IDE.

**Why it matters**: As people hand-edit less code, the editor's center of gravity is shifting from writing to reviewing and orchestrating agents.

- jullerino: Orchestrator V2 / 0.1.0 Beta: https://x.com/jullerino/status/2110874152186040662  
- theo: T3 Code out of alpha: https://x.com/theo/status/2110907433656938681  
- chenchengpro: Mayoi open-sourced: https://x.com/chenchengpro/status/2110699165051453771  
- intellijidea: Java/Kotlin extension 1.0: https://x.com/intellijidea/status/2110737206767665224

![T3 Code Orchestrator V2](/images/twitter-hots/2026-10-16/09-t3-code-beta.jpg)

---

## 10. pi-durable: from a Python IDE on iOS to an in-browser programming teacher

**Key points**: The **pi-durable** agent from the pi ecosystem showed up in several projects over the past day. @mitsuhiko said that with the new models, in an afternoon (mostly passive) plus one flight, he built a Python IDE for iOS that runs Pyodide, has a debugger, linter and formatter, embeds a pi-durable-powered coding agent, and supports iCloud Drive; he also recorded the game he builds with his kids, which embeds a pi-durable agent right in the browser as a programming teacher. @badlogicgames also shared kitze's personal-agent build on it.

**Why it matters**: Embedding a small, durable agent runtime straight into an app, or even the browser, is lighter than building another big IDE, and it's a concrete example of agents as components.

- mitsuhiko: iOS Python IDE: https://x.com/mitsuhiko/status/2110680120843444589  
- mitsuhiko: agent teacher in a game: https://x.com/mitsuhiko/status/2110726538622636420  
- badlogicgames: kitze picks up pi-durable: https://x.com/badlogicgames/status/2110741895374647367

![mitsuhiko's iOS Python IDE](/images/twitter-hots/2026-10-16/10-pi-durable.jpg)

---
