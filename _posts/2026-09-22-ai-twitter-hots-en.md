---
layout: post
title: AI Twitter Highlights · 2026-09-22
categories: AI
description: High-signal AI coding / model / product discussions from X in the past day
keywords: AI, Twitter, Grok 4.7, Devin, Cursor, MiMo, Jev, Cline, Copilot, Capy, Factory, IntelliJ
lang: en
translation_key: ai-twitter-hots-2026-09-22
permalink: /2026/09/22/ai-twitter-hots-en
---

# AI Twitter/X Highlights Digest · 2026-09-22 (Tue)


## Key Takeaways

1. **Grok 4.7** ships: clear lift over 4.6 at the same price/speed; **Build harness** is the recommended path, with Cursor / Cline / Devin / Droid / VS lighting up the same day.  
2. **Devin** adds Cloud in Terminal and `devin ssh`, and plugs in Grok 4.7 across Cloud / Desktop / CLI.  
3. A missed **Cursor Compile** talk becomes a long post: @poteto on landing ~2,500 PRs in a month.  
4. Xiaomi open-sources **MiMo-V2.6**; **Jev** moves from “what is it” to cost-cutting harnesses; **Capy** gets named next to Claude Code / Codex.

---

## 1. Grok 4.7: third seat in agentic coding, tied to Build harness

**Summary**: @SpaceXAI launched **Grok 4.7**, calling it a notable upgrade over 4.6 at the same price and speed. @elonmusk put SpaceXAI third for agentic coding after Anthropic and OpenAI, and repeatedly said to use the **Build harness** for best results. @ericzakariasson shared the model card (jumps on Terminal-Bench, SWE-Marathon, etc.); @aksheyd said they spent heavy cycles on the harness for **Grok Build / Cursor**. Artificial Analysis placed it in the top four with Coding Agent Index gains.

**Why it matters**: The story is not only a new SKU—it is model + first-party harness + IDE/agent surfaces, with Cursor, Cline, Devin, Factory Droid, and Visual Studio following the same day.

- Launch: https://x.com/SpaceXAI/status/2102069815225586149  
- Agentic coding rank: https://x.com/elonmusk/status/2102082011233931762  
- Build harness: https://x.com/elonmusk/status/2102102621037236699  
- Cursor / Build: https://x.com/aksheyd/status/2102070351786283181  
- Model card: https://x.com/ericzakariasson/status/2102092784727679127  
- AA index: https://x.com/ArtificialAnlys/status/2102074898327932987

![Grok 4.7](/images/twitter-hots/2026-09-22/01-grok47.jpg)

---

## 2. Devin: Cloud in the terminal + `devin ssh`, plus Grok 4.7

**Summary**: @cognition shipped **Devin Cloud in Terminal** (`/cloud` to create/steer cloud sessions) and **`devin ssh`** (SSH into the Devin VM for edits, processes, port forwards). The same day, **Grok 4.7** landed in Devin with FrontierCode-style notes; @devindesktop confirmed Desktop / CLI.

**Why it matters**: Cloud agents move from “watch the web UI” to CLI/SSH workflows, while the multi-model menu keeps expanding.

- Cloud + SSH: https://x.com/cognition/status/2102104259219406886  
- Grok 4.7 in Devin: https://x.com/cognition/status/2102147831519666639  
- Desktop/CLI: https://x.com/devindesktop/status/2102148086231339103

![Devin Cloud Terminal](/images/twitter-hots/2026-09-22/02-devin.jpg)

---

## 3. Cursor Compile: ~2,500 production PRs in a month

**Summary**: @poteto published what was meant for **Cursor Compile London**—how they landed about **2,500** PRs to production last month. It is a long video workflow post, not a product changelog.

**Why it matters**: While Grok folks push “try it in Cursor,” practitioners are talking about how to actually raise PR throughput with agents.

- Link: https://x.com/poteto/status/2102050467505430555

![Cursor Compile / 2500 PRs](/images/twitter-hots/2026-09-22/03-cursor-prs.jpg)

---

## 4. Xiaomi MiMo-V2.6: open omnimodal weights near the top of OSS boards

**Summary**: @XiaomiMiMo released **MiMo-V2.6 Pro / Flash**—sparse MoE, ~1M context, MIT, native text/image/video/audio. @ArtificialAnlys put Pro at **46** on the Intelligence Index among open weights with a very low $/intelligence; @_LuoFuli wrote about an unusually large open-source RL run. vLLM announced day-0 support for both sizes.

**Why it matters**: Another open coding/multimodal stack that is local-friendly, servable, and scored—with an honest RL cost story.

- Launch: https://x.com/XiaomiMiMo/status/2102138559952290106  
- AA board: https://x.com/ArtificialAnlys/status/2102128560962187701  
- RL write-up: https://x.com/_LuoFuli/status/2102162926802968749  
- vLLM: https://x.com/vllm_project/status/2102181397138128962

![MiMo-V2.6](/images/twitter-hots/2026-09-22/04-mimo.jpg)

---

## 5. Jev / Kev: from “what is it” to “cut ~90% cost”

**Summary**: @willdepue reflected on why Jev resonated—a zero-shot, frontier-ish classifier. @_aj said a new TypeSafe Jev harness cut repetitive-work cost by ~**90%** by sinking steps from LLM calls into code. @jaredpalmer refreshed **Kev** on Qwen3.5 (0.8B/4B/9B + Modal fine-tune script). @nhciao tried Jev + Rime IME and noted the missing Cursor-like tab completion.

**Why it matters**: Yesterday was about access; today is about what the bill looks like once classifiers sit inside a harness.

- Reflection: https://x.com/willdepue/status/2102070249453469823  
- Cost-cutting harness: https://x.com/_aj/status/2102061534956662818  
- Kev on Qwen3.5: https://x.com/jaredpalmer/status/2102048412841517495  
- IME experiment: https://x.com/nhciao/status/2101967227327267297

![Jev harness](/images/twitter-hots/2026-09-22/05-jev.jpg)

---

## 6. Cline: Grok 4.7 live, ~40% off for a week

**Summary**: @cline said **Grok 4.7** is live in Cline at about **40%** off through **Sep 27**—DeepSWE near GPT 5.6 Sol / Fable 5.1, high TPS, ~8× cheaper—and called out how snappy it feels in the new **Cline Desktop**.

**Why it matters**: Model launch day is also a distribution fight: discount + desktop UX bundled together.

- Link: https://x.com/cline/status/2102109776960463299

![Cline Grok 4.7](/images/twitter-hots/2026-09-22/06-cline.jpg)

---

## 7. GitHub Copilot: agent runtime to Rust + editable diffs

**Summary**: @github said one engineer plus a team of agents ported the **GitHub Copilot agent runtime** to Rust—about **800k** lines of production code with quality retained. @gimenete previewed **editable diffs** in the Copilot desktop app: when the agent gets you most of the way, finish the last tweaks in the diff.

**Why it matters**: Agents shipping large migrations on one side; humans reclaiming the last mile in the diff UI on the other.

- Runtime to Rust: https://x.com/github/status/2102103572867358977  
- Editable diffs: https://x.com/gimenete/status/2102063244491858051

![Copilot editable diffs](/images/twitter-hots/2026-09-22/07-copilot.jpg)

---

## 8. Capy: multi-step PR workflows vs Claude Code / Codex

**Summary**: @garrytan said @capydotai tracks multi-step workflows and large PRs faster than **Codex** or **Claude Code** alone. @0xluffy added DeepSWE notes: Capy better, faster, and cheaper than big harnesses (~half the cost and time).

**Why it matters**: Another live data point that the shell can matter as much as the model—same thread as yesterday’s Harness Tax talk.

- Garry: https://x.com/garrytan/status/2102095924893827501  
- DeepSWE compare: https://x.com/0xluffy/status/2102128216551165979

![Capy vs harnesses](/images/twitter-hots/2026-09-22/08-capy.jpg)

---

## 9. Factory Droid: Grok 4.7 on day one

**Summary**: @FactoryAI said **Grok 4.7** is live in **Droid**, with early notes that it is strong across engineering, debugging, data, and infra, and moves into concrete command discovery quickly.

**Why it matters**: Same launch-day pattern as Cline and Devin—harness vendors ship access plus a few usage notes.

- Link: https://x.com/FactoryAI/status/2102162709647430116

![Factory Droid](/images/twitter-hots/2026-09-22/09-factory.jpg)

---

## 10. IntelliJ: fast AI code is not enough—close the validation loop

**Summary**: @intellijidea argued the hard part is not writing code fast, but making sure AI got it right—generate in IDEA, then immediately validate with the debugger, test runner, and inspections before you ship.

**Why it matters**: On a day full of new models and harnesses, a classic IDE puts verification back at the center of the product story.

- Link: https://x.com/intellijidea/status/2102050318758359252

![IntelliJ AI validation](/images/twitter-hots/2026-09-22/10-intellij.jpg)
