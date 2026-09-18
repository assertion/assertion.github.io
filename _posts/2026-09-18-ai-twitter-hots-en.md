---
layout: post
title: AI Twitter Highlights · 2026-09-18
categories: AI
description: High-signal AI coding / model / product discussions from X in the past day
keywords: AI, Twitter, Claude Code, Projects, Devin, Factory, Raindrop, Exa, Karpathy, ProgramAsWeights, terminal-browser
lang: en
translation_key: ai-twitter-hots-2026-09-18
permalink: /2026/09/18/ai-twitter-hots-en
---

# AI Twitter/X Highlights Digest · 2026-09-18 (Fri)


## Key Takeaways

1. **Claude Code** dominates: Projects folds parallel agents into one project; same window also adds a terminal-browser plugin.  
2. **Devin**: Fusion model-routing debate on one side; a “give it a Ramp card and make money” experiment on the other.  
3. **Factory** brings coding into Slack; **Raindrop** moves agent safety earlier with Simulations.  
4. Culture: high-engagement **Karpathy Sensei** talk about “code as assembly.”  
5. Tool-side supplements: **Exa Snapshot**, **Program-as-Weights**, plus local Bonsai / Jev routing chatter.

---

## 1. Claude Code: Projects orchestration, plus a terminal-browser plugin

**Summary**: @claudeai announced **Projects**: start from one conversation; Claude directs parallel threads in Claude Code that keep working after you close the laptop. In beta today for select Pro and Max users in cloud sessions, with a broader rollout promised. Anthropic’s @trq212 (Thariq) says this brings Claude Tag’s architecture to Claude Code: one agent per project owns memory and spins subagents for tasks, and you can ask it to be proactive or run on a schedule. Core engineer @bcherny (Boris) posted that he stopped managing sessions—he sends thoughts as they come, Claude splits threads, and the project remembers how he works; a lot of his coding now happens there. @_catwu stresses cross-task context, on-demand aggregated status, and long-lived memory that evolves with use. In the same window, @RobKnight__ shipped a **terminal-browser** plugin so Claude Code can open a terminal browser and wire real browsing into the toolchain.

**Why it matters**: The product unit moves from “a session” to “a remembered project orchestrator,” while the tool boundary keeps expanding toward “can see and click the web.” Official launch, architecture notes, core-user practice, and plugin ecosystem lined up in one window.

- Official: https://x.com/claudeai/status/2100632677904744716  
- Thariq on architecture: https://x.com/trq212/status/2100638355872706571  
- Boris workflow: https://x.com/bcherny/status/2100669598995816511  
- Boris rollout: https://x.com/bcherny/status/2100639991244427490  
- Cat’s experience: https://x.com/_catwu/status/2100641163120423057  
- terminal-browser: https://x.com/RobKnight__/status/2100622380439683541  

---

## 2. Devin: Fusion routing debate, and a “make money” experiment

**Summary**: @jeffwang argues many teams underestimate **Devin Fusion**: handing work to a weaker agent often fails because that agent cannot tell good work from bad. With Astra + Fable and SWE-2, frontier models need to monitor cheaper sidekicks in parallel (main + sidekick) to keep quality high and improve cache hits for cost. In the same window, @cognition shared an experiment: give Devin a Ramp card and tell it to make money—it ran cold outreach, built payment portals, iterated a business plan, and eventually made about \$75.

**Why it matters**: The Fusion post drags “routing” back from a pure cost slogan to an agent QA problem; the Ramp experiment is the viral autonomy narrative. Together they show what Devin discussion actually centered on today.

- Fusion: https://x.com/jeffwang/status/2100620237045661800  
- Money experiment: https://x.com/cognition/status/2100638797851513215  

---

## 3. Factory: Code beta inside Slack

**Summary**: @FactoryAI announced **Factory for Slack Code** in beta for select users: drop a software task into the channel, collaborate with the team, Factory gets to work, and the result returns where the conversation started.

**Why it matters**: Another path for coding agents into the collaboration surface—the entry point is not the IDE, but where the team already talks.

- Author: @FactoryAI  
- Link: https://x.com/FactoryAI/status/2100731368825295227  

---

## 4. Raindrop: from production monitoring to Simulations

**Summary**: @ycombinator covered Raindrop as a safety layer for AI agents: catching failed tool calls, hallucinations, and failures teams did not know to look for in production. **Raindrop Simulations** moves the same approach earlier, before agents reach production. The post names customers including Vercel, Clay, Framer, and Speak, and a Series A bringing total funding to about \$50M.

**Why it matters**: As agents run longer in production and collaboration surfaces, the conversation shifts from “can it write code” to “can you reproduce how it fails before ship.”

- Link: https://x.com/ycombinator/status/2100638413699653886  

---

## 5. Culture: Karpathy Sensei and “code as assembly”

**Summary**: @saranormous highlighted a high-engagement Sensei / @karpathy-adjacent discussion: someone compared reading code to looking at assembly—“like a compiled artifact”—set against an earlier line about barely using autocomplete-style AI coding tools, pointing toward a more fully agentic stance roughly 18 months later.

**Why it matters**: Engagement is high, but the signal is not gossip. It hardens the question of whether source code remains the primary human interface—the same arc as Projects and Slack-resident agents in this window.

- Link: https://x.com/saranormous/status/2100700797143261324  

---

## 6. Exa Snapshot: “git for the web” for agents

**Summary**: Exa launched **Snapshot**: an index of over 400 billion historical webpage snapshots so you can search as if it were the past. @jeffzwang summed it up as “we made git for the web.”

**Why it matters**: Coding and research agents get burned by live-page drift; reproducible historical web context is a tooling fix, not another search box.

- Comment: https://x.com/jeffzwang/status/2100639972747575702  

---

## 7. Program-as-Weights: compile natural language into local neural programs

**Summary**: @yuntiandeng shared Program-as-Weights / a neural compiler: train on (English function description, input, output) examples to produce small neural programs that run locally on CPU, with detail on how training data was generated. Related code, weights, and datasets are already public (org and SDK predate this window—this is not a “just open-sourced yesterday” story).

**Why it matters**: It pushes against “call a large model on every invocation”—compile once, run locally many times—which matters for agent preprocessing and fuzzy classification at the edge.

- Link: https://x.com/yuntiandeng/status/2100634525470761274  
- Org: https://github.com/programasweights  

---

## 8. Chinese-side routing talk: where does Jev sit

**Summary**: @sofish asked whether “a smart model + a less-smart Jev = fast, precise, safe returns” implies we ultimately need a cheap front-door model; a follow-up said they would try it on a project, with a diagram splitting logic, decision, and dialogue layers.

**Why it matters**: Low engagement, but it maps onto the same cost/quality line as Devin Fusion’s “frontier monitors sidekick” thread—a rare isomorphic discussion on the Chinese timeline.

- Question: https://x.com/sofish/status/2100627749765251331  
- Try-it follow-up: https://x.com/sofish/status/2100701009337061433  

---

## 9. Local-inference aside: Bonsai 2 27B on a 3060

**Summary**: A quoted post claimed PrismML **Bonsai 2 27B** runs on a single RTX 3060 (12GB): ~220K context, ~35 tok/s decode, ~550 tok/s prefill. @nopainkiller replied on the hardware feasibility.

**Why it matters**: Low heat, but a side signal that long-context local coding/agent workloads keep creeping toward consumer GPUs.

- Link: https://x.com/nopainkiller/status/2100732384098336840  