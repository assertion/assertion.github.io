---
layout: post
title: AI Twitter Highlights · 2026-10-17
categories: AI
description: High-signal AI coding / model / product discussions from X in the past day
keywords: AI, Twitter, Reflection, Beam, Grok Bot, OpenAI, ChatGPT, Codex, Claude Code, poteto, Cursor, Devin, Factory, Cline, Qoder, Gemini 4 Argon, Anthropic, pi, OpenCode
lang: en
translation_key: ai-twitter-hots-2026-10-17
permalink: /2026/10/17/ai-twitter-hots-en
issue: 36
item_count: 10
headline: "Reflection opens Beam's weights, Grok Bot gets 3× faster, ChatGPT Pro runs agents in parallel"
highlights:
  - label: "Reflection opens Beam: 501B / 23B active, formerly the stealth cat-jam"
    text: "Apache 2.0, 1M context, shipped together with Mirror CLI, the harness it was trained on; Vercel says it previously ran in stealth as cat-jam; free on Ollama for a limited time and wired straight into Claude Code, Codex and OpenCode."
  - label: "Grok Bot gets a speed-and-polish pass"
    text: "Computer tasks finish 3× sooner on average, other replies in under half the time, and chat cards are redesigned; new connectors like Robinhood and Coinbase, marketplace submissions open to teams; a roundup of official bot templates hit 3.2k bookmarks."
  - label: "OpenAI: GPT-6 Astra Pro runs multiple agents in parallel"
    text: "Astra Pro in ChatGPT is faster and better with plugins and tools, and can split one task across parallel agents; an OpenAI engineer triaged a 3am incident with his dot, then steered a Codex thread from his phone."
products: [Reflection Beam, Grok Bot, ChatGPT, GPT-6 Astra Pro, Codex, Claude Code, Claude Code Review, Cursor, Devin, Factory, Cline, Qoder, Gemini 4 Argon, Antigravity, Perplexity, Anthropic, Claude Mythos 5, pi, OpenCode, GLM 5.3 Flash]
stats:
  - value: "501B"
    caption: "Reflection Beam total parameters (23B active)"
  - value: "3×"
    caption: "Average speedup for Grok Bot computer tasks"
  - value: "27 hours"
    caption: "Time for four Gemini 4 Argon agents to beat Minecraft from scratch"
stat:
  value: "501B"
  caption: "Reflection Beam total parameters (23B active)"
---

# AI Twitter/X Highlights Digest · 2026-10-17 (Sat)


## Today's Highlights

1. **Reflection opens Beam's weights**: @reflection_ai released its first model, **Beam** (**501B total / 23B active**, **1M** context), under Apache 2.0, together with Mirror CLI, the open-source harness it was trained on; @vercel_dev says it previously ran in stealth as **cat-jam**; @ollama made it free for a limited time, wired straight into Claude Code, Codex and OpenCode.  
2. **Grok Bot gets a speed-and-polish pass**: @bot says computer tasks finish **3× sooner** on average and other replies arrive in under half the time, with redesigned chat cards; new connectors such as Robinhood and Coinbase, and teams can now submit connectors to the marketplace; @monokern's roundup of official bot templates drew **3.2k** bookmarks.  
3. **Parallel agents in ChatGPT Pro**: @OpenAI says GPT-6 Astra Pro is faster, better with plugins and tools, and can split a task across multiple agents working in parallel; @OpenAIDevs shows an engineer triaging a 3am incident with his dot, then steering a Codex fix from his phone.

---

## 1. Reflection Beam: 501B open weights, formerly the stealth cat-jam

**Key points**: @reflection_ai announced that its first model, **Beam**, is available as open weights under **Apache 2.0**, along with the tokenizer, a reference implementation, BF16 / FP8 / NVFP4 weights, a DFlash2 drafter, and **Mirror CLI**, the open-source harness Beam was built and trained on, with 40+ launch partners. @vllm_project had day-0 support and listed the specs: **501B total / 23B active**, a **1M**-token context window, and hybrid attention. @vercel_dev says that until launch day Beam ran on AI Gateway in stealth as `stealth/cat-jam`, the same name as the stealth Cat Jam model that went free in OpenCode on October 14; Vercel now offers it free for a limited time too. @ollama also made it free for a limited time, with commands like `ollama launch claude --model beam:cloud` to plug it straight into Claude Code, Codex or OpenCode. @ArtificialAnlys scored it **30** on its Intelligence Index, #2 among US open-weight models (Muse Spark Open has 39): strong on agentic workflows, but only 3.0% on Terminal-Bench 4.0 and a 47% hallucination rate.

**Why it matters**: A week after Muse Spark Open, the US open-weight camp gains another 500B-class model aimed squarely at coding agents. Open-sourcing the training harness alongside the weights is still rare. The Hugging Face repo was created on October 7; the open-weight release was announced on October 16.

- reflection_ai: Beam open weights: https://x.com/reflection_ai/status/2111079965529968798  
- vllm_project: day-0 support and specs: https://x.com/vllm_project/status/2111116589063872989  
- vercel_dev: previously stealth/cat-jam: https://x.com/vercel_dev/status/2111170419797692543  
- ollama: free for a limited time, Claude Code / Codex / OpenCode: https://x.com/ollama/status/2111087699574903061  
- ArtificialAnlys: Intelligence Index 30, #2 US open weights: https://x.com/ArtificialAnlys/status/2111087606759030831

![Reflection Beam's 40+ partners](/images/twitter-hots/2026-10-17/01-reflection-beam.jpg)

---

## 2. Grok Bot: 3× faster computer tasks, new cards, open connector submissions

**Key points**: @bot shipped a round of quality, polish and speed updates: **computer tasks finish 3× sooner on average**, and replies to everything else arrive in less than half the time; cards in chat got a cleaner new design. It also added connectors for **Robinhood, Coinbase, Trello, PostHog, beehiiv, eToro** and more, and teams can now submit their own connectors to the Grok Bot marketplace. @elonmusk reposted it as “much faster”; @mntruell said there's still a long road to a bot that “just works” (in the limit, it should handle things in the physical world). @monokern rounded up 10 of the SpaceXAI team's own bot templates now in the marketplace: dr eggbot that designs other bots, an Engineer Bot that supervises cloud coding agents and watches their PRs, Proto Bot that turns feature ideas into draft-PR prototypes, Haggle Bot that finds wasted SaaS spend and drafts vendor negotiations, and more; that post drew **3.2k** bookmarks. @XFreeze claims the internal Haggle Bot found over **$100,000** in savings in its first week (secondhand; no official figure seen).

**Why it matters**: Once capability is table stakes, personal agents compete on speed and feel; opening both templates and connectors to submissions hands the “how do I use this” question to the ecosystem.

- bot: quality, polish and speed update: https://x.com/bot/status/2111184270819803351  
- bot: computer tasks 3× faster: https://x.com/bot/status/2111184275374813362  
- bot: new connectors and marketplace submissions: https://x.com/bot/status/2111184284786802881  
- elonmusk: “much faster”: https://x.com/elonmusk/status/2111239586873745604  
- mntruell: a long road to “just works”: https://x.com/mntruell/status/2111218918362861958  
- monokern: 10 official bot templates: https://x.com/monokern/status/2111074067461611540  
- XFreeze: Haggle Bot's first-week savings: https://x.com/XFreeze/status/2111169776143986845

![Grok Bot's new card design](/images/twitter-hots/2026-10-17/02-grok-bot.jpg)

---

## 3. OpenAI: parallel agents in Astra Pro, a dot on call hands off to Codex

**Key points**: @OpenAI announced an upgrade to **GPT-6 Astra Pro** in ChatGPT: faster responses, better use of plugins and tools, and now **multiple agents can tackle different parts of a task in parallel**. You can follow each agent's progress and open completed tasks to review them; it's available to Pro users in the Chat tab. The post got 5k+ likes. @OpenAIDevs shared a story: Ali, an OpenAI engineer, used his dot to triage an on-call incident at 3am; the dot investigated and started a **Codex** thread, which he steered from the ChatGPT app on his phone. Another post showed how OpenAI engineers use Codex to dig through the codebase and chip away at the maintenance backlog. In the community, @jorilallo built a fully working iOS app with Codex overnight and concluded there's “absolutely no reason to use React Native anymore in 2026”; OpenAI's @thsottiaux posted just “Either we are out of ideas or we are cooking. Time will tell”, drawing 12k likes and 3,300+ replies.

**Why it matters**: Parallel agents move from coding tools into ChatGPT itself, and “dot triages → Codex fixes → review on your phone” is OpenAI's own template for on-call work.

- OpenAI: parallel agents in Astra Pro: https://x.com/OpenAI/status/2111192259073094035  
- OpenAIDevs: a dot on call hands off to Codex: https://x.com/OpenAIDevs/status/2111211411766399288  
- OpenAIDevs: clearing the maintenance backlog with Codex: https://x.com/OpenAIDevs/status/2111213093577691337  
- jorilallo: an iOS app with Codex overnight: https://x.com/jorilallo/status/2111121623294300237  
- thsottiaux: “we are cooking”: https://x.com/thsottiaux/status/2110971985417441512

![OpenAI's dot on-call story](/images/twitter-hots/2026-10-17/03-openai-codex.jpg)

---

## 4. Claude Code: Code Review as “secret sauce”, gzip for every turn

**Key points**: Claude Code Review just became generally available for Team and Enterprise (admins can pick Quick, Standard or Deep review per repo), and @bcherny said he “could not imagine being productive without” it: it runs on all of his PRs and catches almost every bug before it goes in, part of the secret sauce that lets the team move fast while raising the quality bar. That post drew 1.5k bookmarks. @ClaudeDevs announced performance work: Claude Code now **gzips the conversation it sends on every turn** so it reaches the model faster, and cloud sessions start up as soon as you start typing. In another post @bcherny recommended **Claude Slides**, saying it's how he makes slide decks now (1.4k bookmarks).

**Why it matters**: As agents write code faster, automated review becomes the key quality gate; small optimizations like gzip directly shape how long every turn feels.

- bcherny: can't work without Claude Code Review: https://x.com/bcherny/status/2111158313463525518  
- ClaudeDevs: gzipped turns, warm cloud sessions: https://x.com/ClaudeDevs/status/2111209208012210409  
- bcherny: Claude Slides: https://x.com/bcherny/status/2111158659971699136

![Claude Code performance improvements](/images/twitter-hots/2026-10-17/04-claude-code.jpg)

---

## 5. poteto: an “inverse pyramid” for trusting agents

**Key points**: @poteto posted a long thread on how to trust your agents' work more, suggesting you “copy this post and give it to your bot or agent.” Her ordering, from most effort to least: **① Codebase improvements**: better architecture, stronger types and invariants, clear boundaries. Agents love to copy what exists and take the shortest path, so “make the easy thing the right thing” and eliminate whole classes of problems in code. **② Static analysis**: lint rules, tests, CI, verification (e.g. TLA+), the most token-efficient way to catch issues early. **③ Prose**: comments, rules, AGENTS.md, skills, only for things that need agent judgment, and used minimally. **④ Human review**: the hardest to scale; at the rate agents land code you can't thoroughly review every PR, so spend that effort designing an environment where agents do the right thing by default. The post drew **6.6k** bookmarks, nearly twice its likes.

**Why it matters**: It ties together her recent posts on verification loops, deleting comments and principle-style skills, and gives a concrete priority order: put the deterministic tools at the top.

- poteto: the inverse pyramid of agent trust: https://x.com/poteto/status/2111133080526495985

![poteto's inverse pyramid](/images/twitter-hots/2026-10-17/05-poteto-trust.jpg)

---

## 6. Cloud agents take the work: Cursor canvases, Devin on foldables, Factory / Cline / Qoder

**Key points**: Several coding-agent products moved the same day toward “run in the cloud, deliver finished work.” @cursor_ai: cloud agents can now build **interactive canvases**, so you can ask for a dashboard or report while the agent works and share the finished canvas as a link. @dabit3: **Devin can now build and test iPhone Duo apps in macOS cloud VMs**, folding, unfolding and closing the phone, checking every screen, with video verification. @FactoryAI made **Delegations** generally available, so teams can hand work to Droid from the tools they already use. @cline: **Cline Desktop now runs in the cloud**, with parallel tasks each in its own secure sandbox, and it keeps working after you close your laptop. @qoder_ai_ide says Qoder Cloud Agents is the first cloud-hosted agent runtime on HarnessRouter, so a product can call one API and get finished work back.

**Why it matters**: The competition is shifting from “help you write in the IDE” to “finish the job in the cloud and deliver it with evidence”; verification artifacts (videos, canvases, PRs) are becoming standard.

- cursor_ai: interactive canvases in cloud agents: https://x.com/cursor_ai/status/2111193957527146711  
- dabit3: Devin tests iPhone Duo apps: https://x.com/dabit3/status/2111159738373226566  
- FactoryAI: Delegations GA: https://x.com/FactoryAI/status/2111131400057602525  
- cline: Cline Desktop in the cloud: https://x.com/cline/status/2111171077187707033  
- qoder_ai_ide: Qoder Cloud Agents on HarnessRouter: https://x.com/qoder_ai_ide/status/2110943383971860931

![Cursor: Canvas in Cloud](/images/twitter-hots/2026-10-17/06-cloud-agents.jpg)

---

## 7. Gemini 4 Argon, continued: four agents beat Minecraft in 27 hours

**Key points**: @GoogleDeepMind says **four Gemini 4 Argon agents beat Minecraft from scratch in 27 hours**: working in a sandbox with only code and text, they wrote **2,783 programs**, divided up jobs over chat, shared notes and debugged errors together, with no human help. @omarsar0 summarized the paper: 27 hours and 14 minutes, 605 deaths; nobody assigned roles, wrote game logic or scouted a seed; the team describes it as the first end-to-end autonomous completion of Minecraft by AI agents, and a useful case study for long-horizon multi-agent software work. On distribution, @perplexity_ai says Argon set a new record on the WANDR benchmark and is available to Pro and Max subscribers (@AravSrinivas says it works in both fast search and Computer mode); @_mohansolo announced that Antigravity is **resetting Argon and Gemini quotas for everyone**: “keep building through the weekend.”

**Why it matters**: Yesterday's debate was whether Argon can really code; today DeepMind showed a long-horizon case that held one plan together across thousands of dependent steps for more than a day. The quota reset also suggests demand in Antigravity is real.

- GoogleDeepMind: Minecraft in 27 hours: https://x.com/GoogleDeepMind/status/2111127991401247033  
- omarsar0: paper breakdown: https://x.com/omarsar0/status/2111093058024755365  
- perplexity_ai: WANDR record: https://x.com/perplexity_ai/status/2111110772747321460  
- AravSrinivas: available across Perplexity modes: https://x.com/AravSrinivas/status/2111111329536987234  
- _mohansolo: Antigravity quota reset: https://x.com/_mohansolo/status/2111220356178751860

![Gemini 4 Argon Minecraft paper](/images/twitter-hots/2026-10-17/07-gemini-argon-minecraft.jpg)

---

## 8. Anthropic: Mythos 5 designs quantum circuits, IPO valuation under pressure

**Key points**: @AnthropicAI shared a result from its STEM Fellows Program: given plain-language instructions, **Claude Mythos 5** designed quantum circuits that improve on the best published ones, sometimes by an order of magnitude or more. @dair_ai added detail from the paper (Anthropic, Harvard and colleagues): it searches over circuit-generating programs with OpenEvolve, with Mythos 5 proposing architectures and rewrites and an independent evaluator verifying correctness and scoring cost; the designs beat the best known on **seven of eight tasks**, with fewer Toffoli gates and fewer qubits. On the money side, @Reuters reports that some current and prospective investors are weighing a lower valuation for Anthropic's IPO after its latest financial disclosures; @business says Anthropic has opened a line of communication with NYC Comptroller Mark Levine, who wrote earlier this week asking it to delay the IPO. Separately, @claudeai's roundup of six recent community projects (such as a wildfire analysis prototype built with Opus 5.5) drew 13k likes and 6k bookmarks.

**Why it matters**: The model is posting hard results in research while the IPO valuation is being reargued; after yesterday's “profitable” headline, the market is still digesting slower growth.

- AnthropicAI: Mythos 5 designs quantum circuits: https://x.com/AnthropicAI/status/2111152183240511640  
- dair_ai: paper details: https://x.com/dair_ai/status/2111155277886316847  
- Reuters: investors weigh a lower valuation: https://x.com/Reuters/status/2110940070316294432  
- business: talks with the NYC Comptroller: https://x.com/business/status/2111109995412549848  
- claudeai: six community projects: https://x.com/claudeai/status/2111177834127601902

![Quantum circuits designed with Claude](/images/twitter-hots/2026-10-17/08-anthropic-quantum.jpg)

---

## 9. pi: Vitalik's “paranoid mode”, Pi Durable on Cloudflare

**Key points**: @VitalikButerin built a “paranoid mode” for his agent harness, **pi**: zkAPI, Tor, extra cover traffic and local LLM prompt rewriting wrapped into one OpenAI-compatible daemon. Each conversation gets its own Tor circuit, payments don't leak identity, and prompts are rewritten locally first (he uses qwen3.8-flash-next); the harness itself sits in a bwrap sandbox wrapped in torsocks. He admits latency goes up noticeably, and that Tor is weak against a provider colluding with the guard node. @pidotdev posted weekend reading: building a multiplayer chat agent with subagents on Cloudflare Durable Objects using **Pi Durable** (1.3k bookmarks). @badlogicgames says that for almost two weeks he's done all his work in a pi prototype that runs entirely on his phone except for the LLM calls, rewritten twice on the phone itself, and he's “never going back” (it's a design study he isn't publishing yet). @mitsuhiko recorded a new State of Agentic Coding episode with Geoffrey Huntley on code mode and self-modifying harnesses.

**Why it matters**: A small, composable harness like pi is becoming the base for experiments in privacy, durable cloud agents and phone-only setups.

- VitalikButerin: paranoid mode for pi: https://x.com/VitalikButerin/status/2111046730959433793  
- pidotdev: Pi Durable on Cloudflare: https://x.com/pidotdev/status/2111100406612861105  
- badlogicgames: a pi prototype on the phone: https://x.com/badlogicgames/status/2111189600685207559  
- mitsuhiko: new State of Agentic Coding episode: https://x.com/mitsuhiko/status/2111053302079410595

![Vitalik's local prompt rewrite](/images/twitter-hots/2026-10-17/09-pi-paranoid.jpg)

---

## 10. OpenCode: GLM 5.3 Flash goes free, two free Flash models in two days

**Key points**: @opencode announced that **GLM 5.3 Flash is now free in OpenCode**; the post drew 17k likes and 4k+ bookmarks. The day before, it made DeepSeek V4.1 Flash free, so that's two free Chinese Flash models in two days. @thdxr joked: “every day i wake up and i see a new free model and no one tells me about it i don't know what our inference team is doing” (3.4k likes).

**Why it matters**: Free models remain the main growth lever for open-source coding agents; users should make sure they pick the version marked free, not the paid one.

- opencode: GLM 5.3 Flash free: https://x.com/opencode/status/2110986357539754114  
- thdxr: “a new free model every day”: https://x.com/thdxr/status/2111066492947054660

![OpenCode: GLM 5.3 Flash free](/images/twitter-hots/2026-10-17/10-opencode-glm.jpg)

---
