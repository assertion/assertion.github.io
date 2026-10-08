---
layout: post
title: AI Twitter Highlights · 2026-09-28
categories: AI
description: High-signal AI coding / model / product discussions from X in the past day
keywords: AI, Twitter, Opus 5.5, Claude Code, OpenClaw, GPT-6 Astra, Codex, UFO, Cline, Ember-1, Copilot, DeepSeek Harness, Jev, OpenCode
lang: en
translation_key: ai-twitter-hots-2026-09-28
permalink: /2026/09/28/ai-twitter-hots-en
issue: 17
item_count: 10
headline: "Opus 5.5 from magic to maxed quotas, Cline ships Ember-1, UFO multi-agent OS launches"
highlights:
  - label: "Opus 5.5 maxes quotas"
    text: "From 'magic' impressions to burning through Max quotas; ~4-6x limit usage vs Fable 5.1."
  - label: "Cline ships Ember-1"
    text: "Based on Kimi K3 with ~40% fewer tokens; Copilot highlights parallel agents."
  - label: "UFO multi-agent OS"
    text: "Multi-agent harness OS launches; plus Jev-as-a-Judge."
products: [Opus 5.5, Cline, Copilot, UFO, Jev]
stat:
  value: "4–6×"
  caption: "Opus 5.5 quota usage vs Fable 5.1"
---

# AI Twitter/X Highlights Digest · 2026-09-28 (Mon)


## Key Takeaways

1. **Opus 5.5** keeps dominating the timeline — from “magic” praise to burning through Max quotas, plus ~4–6× limit headroom vs **Fable 5.1**; some runners say **OpenClaw + Opus** completes tasks better than **GPT-6 Astra**.  
2. **antirez** argues Astra needs a new skillset; **Codex** is being asked to thin CI; **UFO** launches as a multiplayer agent harness OS.  
3. **Cline** ships **Ember-1** (Kimi K3 post-train, ~40% fewer tokens); **GitHub Copilot** pushes parallel agents; plus **DeepSeek Harness** plugins, **Jev-as-a-Judge**, and a Chinese-timeline pivot to **OpenCode + DeepSeek** after a Claude ban.

---

## 1. Opus 5.5: from “magic” to maxing Max

**Summary**: @dhh wrote that Anthropic “did magic with Opus 5.5.” @theo said he burned through roughly **3.5** $200 Claude Code accounts in five days — Opus 5.5 is incredible and the Max sub is a steal. He also broke down the quota feel: Opus is gentler on cost, Fable is capped at 50% of the sub, so moving Fable 5.1 High → Opus 5.5 High is about a **4.3×** limit bump (and ~**6.6×** from Fable xhigh). @AravSrinivas migrated 50–100 workflows from Fable 5.1 to Opus with minimal differences, but still feels FOMO about not using the “smarter” model.

**Why it matters**: The debate has shifted from raw IQ to how far a quota goes and whether orchestration stacks survive a model swap.

- dhh: https://x.com/dhh/status/2104273594217812283  
- Theo burning Max: https://x.com/theo/status/2104079585956761814  
- Limit math: https://x.com/theo/status/2104339496942948401  
- Workflow compare: https://x.com/AravSrinivas/status/2104270322757509315

![Opus vs Fable limits](/images/twitter-hots/2026-09-28/01-opus-limits.jpg)

---

## 2. Opus 5.5 × OpenClaw: finishing work better than Astra?

**Summary**: @garrytan said Opus 5.5 with **OpenClaw** feels “strangely smarter” and better at completing tasks than GPT-6 Astra — and that the gap was surprising. Model × harness combos are back on center stage.

**Why it matters**: The same day people praise Opus quota efficiency, others put it inside a concrete agent runtime and compare completion rates — default stacks may swap model and shell together.

- Link: https://x.com/garrytan/status/2104224426091016247

![Opus with OpenClaw](/images/twitter-hots/2026-09-28/02-opus-openclaw.jpg)

---

## 3. antirez: struggling with GPT-6 Astra may mean outdated skills

**Summary**: @antirez notes that “good programmers” say they use GPT-6 Astra without good results. His explanation is blunt: yesterday’s good programming and today’s required skillset overlap but are no longer the same.

**Why it matters**: Reframes “the model is bad” as a human–AI collaboration skill migration — complementary to quota and harness talk.

- Link: https://x.com/antirez/status/2104130171305680972

![antirez on Astra skillset](/images/twitter-hots/2026-09-28/03-antirez-astra.jpg)

---

## 4. Codex: let the model decide which CI tests to run

**Summary**: In a thread about CI becoming every team’s top bottleneck, @steipete praised sponsor @useblacksmith but said load still needs spreading; his plan is to let **Codex** decide which tests actually need to run, slash CI, and run tests hourly. Separately, Chinese timeline notes from Codex app lead @ajambrosino: whenever a new model drops, ask it to rewrite the Codex app in **GPUI + Rust**.

**Why it matters**: Coding agents are expanding from “write code” to “decide what to test” — CI spend is becoming part of the agent product surface.

- steipete: https://x.com/steipete/status/2104305554760114488  
- GPUI/Rust note: https://x.com/huacnlee/status/2104157032546983946

![Codex for CI](/images/twitter-hots/2026-09-28/04-codex-ci.jpg)

---

## 5. UFO: multiplayer agent orchestrator / memory system is live

**Summary**: GitHub Copilot co-creator @alexgraveley announced **UFO** — a scalable multiplayer agent orchestrator and memory system built for agent-first business pain points. The product account calls it a multiplayer agent harness OS you can run a company on, hosted or open source, good at code and work ([ufo.ai](https://ufo.ai)). This is a product-go-live narrative, not a claim that it was “just open-sourced for the first time today.”

**Why it matters**: Another independent harness grown out of big-lab agent experience, pitched as a company OS rather than an IDE plugin.

- Announce: https://x.com/alexgraveley/status/2104298441195282700

![UFO harness](/images/twitter-hots/2026-09-28/05-ufo-harness.jpg)

---

## 6. Cline: Ember-1 (Kimi K3 post-train, ~40% fewer tokens)

**Summary**: @cline highlighted Fireworks Research’s **Ember-1**: built on **Kimi K3**, using roughly **40%** fewer tokens at matched benchmark performance by post-training the model to think less repetitively. In a live coding A/B test it used ~71% fewer reasoning tokens and ~39% fewer total tokens at the same success rate. Available in Cline (including Desktop); @omarsar0 frames it as a meaningful push on the token Pareto frontier.

**Why it matters**: In agent loops, “thinking too much” is a bill — specialized post-training is now aimed directly at that cost.

- Cline: https://x.com/cline/status/2104329978146115998  
- Desktop: https://x.com/cline/status/2104329981191209235  
- Commentary: https://x.com/omarsar0/status/2104341259540123718

![Cline Ember-1](/images/twitter-hots/2026-09-28/06-cline-ember.jpg)

---

## 7. GitHub Copilot: run agents in parallel in the app

**Summary**: @github reminded users you can run agents in parallel in the GitHub Copilot app — each session gets its own Git worktree and context so you can build, review, and test at the same time.

**Why it matters**: The default big-vendor client is making multi-worktree parallelism a first-class feature, matching the multi-session story of indie harnesses.

- Link: https://x.com/github/status/2104298872029741366

![Copilot parallel agents](/images/twitter-hots/2026-09-28/07-copilot-parallel.jpg)

---

## 8. DeepSeek Harness: dsh-better-sidebar as a base plugin

**Summary**: @tianyi continued the DSH plugin series with **dsh-better-sidebar**: sidebars, bottom bars, split panes, and floating panels for DeepSeek Harness, positioned as a base capability other plugins can build on. After official basic sidebar support landed, the plugin reuses those component APIs and extends them. It continues the earlier narrative that ~60% of users install at least one third-party plugin.

**Why it matters**: Domestic harnesses are treating plugin composability as product differentiation, not just a model shell.

- Link: https://x.com/tianyi/status/2104125200048746899

![DeepSeek Harness sidebar](/images/twitter-hots/2026-09-28/08-dsh-sidebar.jpg)

---

## 9. Jev-as-a-Judge: catch alignment failures with a classifier

**Summary**: @omarsar0 covered using **Jev** as a cheap alignment/failure detector: ask one generic yes/no about a model response and use the probability as a score. With no extra training, median AUROC is about **0.886**; across 19 benchmarks a Jev pass cost about **$0.30** vs about **$18.96** for the LLM judges those benches use. A follow-up argues harness builders should deliberately mix System One (classification) and System Two (generation) models.

**Why it matters**: After Jev Router, Jev is moving into the judge/gate layer — cheap calibrated decision models are becoming standard harness parts.

- Paper write-up: https://x.com/omarsar0/status/2104295014117589053  
- Classifier resurgence: https://x.com/omarsar0/status/2104235323970523543

![Jev as a Judge](/images/twitter-hots/2026-09-28/09-jev-judge.jpg)

---

## 10. After a Claude ban: OpenCode + DeepSeek as a fallback stack

**Summary**: @imwsl90 said getting banned on Claude clarified things — most of the real work already ran on the DeepSeek API. No appeal planned; the path forward is **herdr + OpenCode + DeepSeek**, much cheaper than Claude, with an Omarchy switch from Claude to OpenCode done in a few sentences. A live Chinese-timeline sample of “default harness is replaceable.”

**Why it matters**: When a subscription account is a single point of failure, portable open harnesses plus open/domestic models matter more than any one SOTA checkpoint.

- Link: https://x.com/imwsl90/status/2104086947652325455

![OpenCode DeepSeek](/images/twitter-hots/2026-09-28/10-opencode-deepseek.jpg)
