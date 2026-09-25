---
layout: post
title: AI Twitter Highlights · 2026-09-26
categories: AI
description: High-signal AI coding / model / product discussions from X in the past day
keywords: AI, Twitter, Copilot, OpenClaw, Claude Code, Opus 5.5, Codex, Cognition, Devin, Cline, DeepSeek Harness, Zed, Linear
lang: en
translation_key: ai-twitter-hots-2026-09-26
permalink: /2026/09/26/ai-twitter-hots-en
---

# AI Twitter/X Highlights Digest · 2026-09-26 (Sat)


## Key Takeaways

1. **Microsoft Copilot** calls this its biggest update yet (Autopilot / Code / Home / Office) and ships a product on top of **OpenClaw**.  
2. **Claude Code** adds Slack **Tag**, a graceful 5-hour limit stop, and **/checkup prompt-audit**; **Opus 5.5** keeps landing long-horizon port demos.  
3. **Codex** briefly goes down; **Cognition** says **Devin** crossed **$1B** ARR run rate; plus **Cline Desktop SSH**, **DeepSeek Harness** plugins, **Zed Delta**, and **Linear** env secrets.

---

## 1. Microsoft Copilot’s big update, built with OpenClaw

**Summary**: @satyanadella announced what he called Copilot’s biggest update to date, bundling four pieces: **Autopilot** (a proactive, long-running enterprise agent), **Code** (build apps with Copilot hosted in the company tenant), **Home** (Chat + Cowork), and **Office** fully embedded with Copilot (and vice versa)—plus Teams invocation and **Today**, a proactive M365 surface. The same day, @steipete said Microsoft shipped a compelling product on top of **OpenClaw**; they have partnered since March to harden the codebase for large-scale deployments and called Microsoft a strong partner and open-source contributor.

**Why it matters**: The “work OS” story is now explicitly stacking an open-source agent runtime, not just another chat pane.

- Copilot update: https://x.com/satyanadella/status/2103455884366188544  
- OpenClaw partnership: https://x.com/steipete/status/2103491173927272531

![Microsoft Copilot OpenClaw](/images/twitter-hots/2026-09-26/01-copilot-openclaw.jpg)

---

## 2. Claude Code: Tag, graceful limits, /checkup

**Summary**: @bcherny described Slack **Tag**: it writes more than half of his PRs daily, does nearly all data analysis, and fixes most product feedback and bugs—proactive, programmable, with memory and connectors, now with Opus 5.5 / Fable 5.1. @lydiahallie highlighted a long-requested change: when you hit the **5-hour limit** mid-task, Claude Code tries to find a graceful stopping point instead of cutting off mid-edit. Separately, **/claude-api prompt-audit** is also **/checkup prompt-audit**, auditing CLAUDE.md, skills, and agents for instructions the model no longer needs.

**Why it matters**: Coding-agent UX is expanding from raw smarts into always-on workspace agents, quota edges, and config hygiene.

- Tag: https://x.com/bcherny/status/2103538666597691552  
- Graceful 5-hour stop: https://x.com/lydiahallie/status/2103562429636673635  
- /checkup prompt-audit: https://x.com/lydiahallie/status/2103617988918485226

![Claude Code Tag checkup](/images/twitter-hots/2026-09-26/02-claude-code.jpg)

---

## 3. Opus 5.5: official roundup, ts→Rust, Rust→asm

**Summary**: @claudeai posted favorite early Opus 5.5 explorations. @theo said a months-long **ts-rust** port reached ~**35%** tests with GPT‑5.6 Sol and ~**85%** with GPT‑6 Astra before both stalled; Opus 5.5 finished the port in about **10 hours** on a “/goal finish the port and make it faster” and kept grinding performance. @dhh reported a one-shot Opus 5.5 port of Omarchy’s screensaver engine (ttfx) from Rust to **x86-64 assembler**, up to about **17×** faster.

**Why it matters**: Long-horizon ports and “drill toward the metal” demos say more about real engineering feel than a single leaderboard tick.

- Official roundup: https://x.com/claudeai/status/2103515655760982273  
- theo ts-rust: https://x.com/theo/status/2103558185487577476  
- dhh Rust→asm: https://x.com/dhh/status/2103595410921279635

![Opus 5.5 coding](/images/twitter-hots/2026-09-26/03-opus-55.jpg)

---

## 4. Codex outage

**Summary**: OpenAI’s @thsottiaux confirmed **Codex** was down and that the team was working to restore service. @theo quote-tweeted that it was down—and that he hadn’t noticed.

**Why it matters**: When cloud coding agents become defaults, availability itself becomes part of the product conversation.

- Official: https://x.com/thsottiaux/status/2103620061156290622  
- Reaction: https://x.com/theo/status/2103621399294493034

![Codex outage](/images/twitter-hots/2026-09-26/04-codex-outage.jpg)

---

## 5. Cognition: Devin crosses $1B ARR run rate

**Summary**: @cognition said it crossed **$1B** in annualized revenue run rate and shared how customers build with **Devin**. Co-founder @walden_yan framed it as zero-to-one in a little under three years.

**Why it matters**: An independent coding-agent company is marking a commercial milestone, not just another demo week.

- Official: https://x.com/cognition/status/2103500168951955718  
- Founder: https://x.com/walden_yan/status/2103530710057549915

![Cognition Devin ARR](/images/twitter-hots/2026-09-26/05-cognition-devin.jpg)

---

## 6. Switching back to Claude Code from the Codex app

**Summary**: @theo asked people who moved back to Claude Code after time on the ChatGPT/Codex app how the switch feels and what they miss—continuing the recent flip-flopping around subscription feel and workflow friction.

**Why it matters**: Default tools still move on friction and habit more than on any single benchmark.

- Link: https://x.com/theo/status/2103387109537275983

![Claude Code vs Codex feelings](/images/twitter-hots/2026-09-26/06-claude-vs-codex.jpg)

---

## 7. Cline Desktop: SSH support

**Summary**: @cline announced **SSH** in **Cline Desktop**: the app stays on the laptop while Cline works on a dev server, Raspberry Pi, Docker container, or anything else reachable over SSH, with docs and getting-started videos.

**Why it matters**: Local desktop agents are productizing the remote half of the loop—the mirror image of ssh’ing into a cloud agent VM.

- Link: https://x.com/cline/status/2103537395773911330

![Cline Desktop SSH](/images/twitter-hots/2026-09-26/07-cline-ssh.jpg)

---

## 8. DeepSeek Harness: ~60% of users run third-party plugins

**Summary**: @tianyi said DeepSeek’s official API stats show about **60%** of **DeepSeek Harness** users run at least one third-party plugin; the team will keep supporting the plugin ecosystem, stabilize the plugin API, and avoid breaking changes where possible, while personally recommending strong plugins over the coming days.

**Why it matters**: A domestic harness is treating plugins as core UX, not a side niche.

- Link: https://x.com/tianyi/status/2103534313463783831

![DeepSeek Harness plugins](/images/twitter-hots/2026-09-26/08-deepseek-harness.jpg)

---

## 9. Zed Delta vs Codex / Claude Code on Terminal-Bench

**Summary**: @zeddotdev said **Delta** matched or beat **Codex** and **Claude Code** on accuracy for every frontier model they ran through **Terminal-Bench**, at about **0.80–1.12×** the cost per pass—then stressed they are not done yet and linked follow-up context.

**Why it matters**: Editor-native agents are starting to publish the same terminal-bench comparisons as the leading CLI/app harnesses.

- Link: https://x.com/zeddotdev/status/2103512459814305939

![Zed Delta Terminal-Bench](/images/twitter-hots/2026-09-26/09-zed-delta.jpg)

---

## 10. Linear: env secrets during coding-agent install

**Summary**: @linear added secure setup for its coding agent: sessions can access **environment secrets** during **install** to fetch private dependencies and other environment config safely.

**Why it matters**: Issue-tracker-native agents are filling in the “can install real private deps” layer, not only editing public code in empty sandboxes.

- Link: https://x.com/linear/status/2103501540652966098

![Linear env secrets](/images/twitter-hots/2026-09-26/10-linear-secrets.jpg)
