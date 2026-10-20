---
layout: post
title: AI Twitter Highlights · 2026-10-20
categories: AI
description: High-signal AI coding / model / product discussions from X in the past day
keywords: AI, Twitter, MiniMax, MiniMax M3.1 Flash, Space Bunny, Qoder, Cline, Vercel, AI Gateway, DeepSeek, DHS, OpenAI, Codex, MultiLangBench, COBOL, Daybreak Blue, Grok Bot, Devin Fusion, Cognition, Claude Code, Anthropic, T3 Code, Cua Spaces, libfx, Notion AI, Exa 3.0, Gemini 4 Argon, Wabi
lang: en
translation_key: ai-twitter-hots-2026-10-20
permalink: /2026/10/20/ai-twitter-hots-en
issue: 39
item_count: 10
headline: "Space Bunny unmasked as MiniMax M3.1 Flash, DHS orders federal civilian agencies to remove DeepSeek, OpenAI's new models take on COBOL"
highlights:
  - label: "Space Bunny was MiniMax M3.1 Flash"
    text: "The anonymous model that processed 200T+ tokens is revealed: API at $0.15 input / $0.60 output per 1M tokens, weights on Oct 23; Qoder, Cline and Vercel AI Gateway ship day-0 support, the latter two free for a limited time."
  - label: "DHS: federal civilian agencies must remove DeepSeek"
    text: "Under a 2018 supply-chain security law, DHS ordered civilian agencies to stop buying and remove DeepSeek products, including third-party products developed using DeepSeek implementations."
  - label: "OpenAI: big gains in low-resource languages"
    text: "On MultiLangBench, GPT-6 Astra averages an 87.4% test pass rate across 20 languages (GPT-5.6 Sol: 26.8%); on COBOL migration, GPT-6.1 Sol hits 86.6% at low reasoning effort."
products: [MiniMax M3.1 Flash, Qoder, Cline, Vercel AI Gateway, DeepSeek-V4.1-Flash-1017, Codex, GPT-6 Astra, GPT-6.1 Sol, MultiLangBench, Daybreak Blue, Grok Bot, Devin Fusion, Devin Coach, Claude Code, LiteLLM, T3 Code, Cua Spaces, libfx, fx0, Tessl Verifiers, Notion AI, Exa 3.0, Gemini 4 Argon, Wabi 2.0]
stats:
  - value: "$0.15"
    caption: "MiniMax M3.1 Flash API price per 1M input tokens"
  - value: "87.4%"
    caption: "GPT-6 Astra's average test pass rate across 20 languages on MultiLangBench"
  - value: "68"
    caption: "Devin Fusion's score on the Artificial Analysis Coding Agent Index (per Cognition)"
stat:
  value: "$0.15"
  caption: "MiniMax M3.1 Flash API price per 1M input tokens"
---

# AI Twitter/X Highlights Digest · 2026-10-20 (Tue)


## Today's Highlights

1. **Space Bunny unmasked: MiniMax M3.1 Flash**: The anonymous model that racked up **200T+** tokens on usage leaderboards was an early version of M3.1 Flash. API pricing is **$0.15** input / $0.60 output per 1M tokens, weights arrive Oct 23, and Qoder, Cline and Vercel AI Gateway shipped day-0 support.  
2. **DHS orders DeepSeek removed**: The Department of Homeland Security told federal civilian agencies to stop buying DeepSeek products and remove them from their IT systems, including "third-party products and services developed using DeepSeek implementations".  
3. **OpenAI's new models take on COBOL**: GPT-6 Astra averages an **87.4%** pass rate across 20 languages on MultiLangBench, and GPT-6.1 Sol reaches 97.9% on COBOL migration at high reasoning effort. OpenAI also refunded credits drained from OpenCode users during the attack.

---

## 1. MiniMax M3.1 Flash: Space Bunny revealed, three tools add it on day 0

**What happened**: @MiniMax_AI released **M3.1 Flash** and confirmed that Space Bunny, the stealth model that topped global usage leaderboards with **200T+** tokens, was an earlier version of it. Self-reported results: Automation-Bench 62%, ALE 30%, DeepSWE 74%, BabyVision 91%, at 1/3 the cost of M3 and 3x the speed. Flat API pricing is **$0.15** input / $0.60 output per 1M tokens, with cache reads at $0.015; weights arrive on **Oct 23**. The post has 6.4k likes and nearly 890k views. Tools followed the same day: @qoder_ai_ide added it on day 0, calling it "nearly 3x faster, 70% cheaper"; @cline says it goes toe-to-toe with Opus and GPT on coding at ~25x lower cost (Cline's claim) and made it free in Cline; @vercel_dev put it on AI Gateway, free through Oct 22 when served by MiniMax, which @rauchg quoted as "More free AI".

**Why it matters**: Building real usage anonymously before revealing the name is becoming a standard launch playbook, and $0.15 per 1M input tokens plus open weights will keep pushing down token costs for agent workloads.

- MiniMax_AI: M3.1 Flash launch, Space Bunny revealed: https://x.com/MiniMax_AI/status/2112150867868541221  
- qoder_ai_ide: day-0 support: https://x.com/qoder_ai_ide/status/2112188948202344646  
- qoder_ai_ide: available across Qoder: https://x.com/qoder_ai_ide/status/2112210708259840091  
- cline: free in Cline: https://x.com/cline/status/2112220504258224605  
- vercel_dev: free on AI Gateway through Oct 22: https://x.com/vercel_dev/status/2112181432307294550  
- rauchg: "More free AI": https://x.com/rauchg/status/2112194000639967590

![MiniMax M3.1 Flash launch image](/images/twitter-hots/2026-10-20/01-minimax-m31-flash.jpg)

---

## 2. DeepSeek follow-up: DHS orders removal from federal civilian agencies, free in Qoder

**What happened**: The new angle is regulatory. @AndrewCurran_ reports that the Department of Homeland Security is requiring all civilian federal agencies to remove DeepSeek products and "any third-party services developed using DeepSeek implementations", and to stop buying them (1.5k likes). We checked the Federal Register public-inspection document (FR Doc. 2026-21447, filed Oct 19, published Oct 20): under the Federal Acquisition Supply Chain Security Act of 2018 (FASCSA), the order (1) excludes IT products and services from Hangzhou DeepSeek and its affiliates from federal civilian procurement and (2) removes all DeepSeek and affiliate products, plus third-party products and services developed using DeepSeek implementations, from civilian agency IT. @nopainkiller called it DeepSeek's "Huawei moment". Separately, @qoder_ai_ide made V4.1-Flash-1017 free in Qoder through **Oct 24** (0.0x credits for free and paid users; 580k+ views). In the Chinese community, @guansi recast the "wish-based programming" idea from DeepSeek's new Flash as "what you think is what you get", and @geniusvczh quipped that it's a term he has been using all along.

**Why it matters**: Because the order reaches "third-party products developed using DeepSeek", US government vendors now have a compliance question to answer: whether DeepSeek weights or implementations are anywhere in their stack.

- AndrewCurran_: DHS requires removal of DeepSeek: https://x.com/AndrewCurran_/status/2112250754358788437  
- nopainkiller: "Huawei moment" with the Federal Register filing: https://x.com/nopainkiller/status/2112180182744461713  
- qoder_ai_ide: free in Qoder through Oct 24: https://x.com/qoder_ai_ide/status/2112211366954344459  
- guansi: "what you think is what you get": https://x.com/guansi/status/2112146893166018614  
- geniusvczh: "isn't that my term?": https://x.com/geniusvczh/status/2112165044561891332

![AndrewCurran_'s image of the DHS order](/images/twitter-hots/2026-10-20/02-deepseek-dhs.jpg)

---

## 3. OpenAI / Codex: low-resource languages, editable messages, refunds for OpenCode users

**What happened**: @OpenAI published results on low-resource languages such as COBOL, Fortran and Visual Basic. The post describes two evals. **MultiLangBench** asks a model to build a SQLite-compatible database engine from scratch in a given language: GPT-6 Astra averages an **87.4%** test pass rate across 20 languages versus 26.8% for GPT-5.6 Sol, with COBOL rising from 10.9% to 72.1%; GPT-6 Luna averages 40.3% at about $0.77 per sample in API cost (Sol: $3.48). The COBOL migration eval requires byte-for-byte output parity: GPT-6.1 Sol scores 86.6% at low reasoning effort (GPT-5.6 Sol: 5.4%) and 97.9% at higher effort; the eval is open-sourced on GitHub. @thsottiaux's daily ship streak reached days 14 and 15: Day 14 lets you **edit previous messages** in a thread in the Codex desktop app (8.2k likes; "took way too long"), and Day 15 was "We're cooked", quoting @OpenAIDevs' "what we're cooking with Codex" livestream. On OpenCode, @thsottiaux says OpenAI worked with OpenCode to get affected users who are OpenAI API customers back in business and **refunded** credits drawn during the attack, and urged defenders to request Daybreak Blue before an incident. From users: @turingou found that Magpie can use Remote Magpie to call a local model on another machine (his RTX 5090 gaming PC) and pick it directly in Codex; @Cydiar404 found Codex's intent completion is multimodal and flagged a bug he hadn't noticed. Also, @FT reports US prosecutors allege Saudi royal links in an OpenAI bugging case (paywalled; headline only).

**Why it matters**: Migrating legacy bank and government systems is one of the hardest and most valuable enterprise coding jobs; with the evals open-sourced, it becomes a new axis of model competition.

- OpenAI: low-resource programming languages: https://x.com/OpenAI/status/2112310345863930168  
- thsottiaux: Day 14, edit previous messages: https://x.com/thsottiaux/status/2111990254408434095  
- thsottiaux: Day 15 "We're cooked": https://x.com/thsottiaux/status/2112268918681485431  
- OpenAIDevs: Codex livestream: https://x.com/OpenAIDevs/status/2112242739198959913  
- thsottiaux: OpenCode users restored and refunded: https://x.com/thsottiaux/status/2112034063934742720  
- turingou: Remote Magpie with a local model: https://x.com/turingou/status/2112204748774670665  
- Cydiar404: multimodal intent completion: https://x.com/Cydiar404/status/2112204180672958807  
- FT: OpenAI bugging case: https://x.com/FT/status/2112219403857039418

![OpenAI low-resource languages and Codex Day 14](/images/twitter-hots/2026-10-20/03-openai-codex.jpg)

---

## 4. Grok Bot: one-press voice on the iPhone Action Button, new bots in 1.16

**What happened**: @bot announced that Grok Bot can be set as the iPhone **Action Button**, so one press starts a voice chat with Bot (10k likes, 680k views). @MaiYangAI posted the steps: on an iPhone 15 Pro or later, update Grok Bot to **1.16**, then go to Settings → Action Button, swipe to Shortcut, and choose Grok Bot → Start Voice Chat. Designer @jennywen shipped another polish item the same day: more bots to customize, with cleaned-up animation states (955 likes). From users, @turingou says Grok Bot pulled together local agency websites and Instagram messages for remote-island house hunting and coordinated with other bots, and predicts people will stop using human agents to find homes within a few years (his view); @fankaishuoai shared a DIY "cloud + local" workflow: an Engineer bot on Grok Bot writes the plan, a Pi Agent + DeepSeek on the cloud box writes code and tests, and a model on his local Mac Studio reviews it, to save plan credits. He also praised the one-press chat as tasteful.

**Why it matters**: Moving the entry point from an app to a hardware button is a race for the shortest path to an agent on the phone; users building their own cloud/local splits show that credit costs already shape how people use agents.

- bot: iPhone Action Button: https://x.com/bot/status/2112252507762368684  
- MaiYangAI: 1.16 setup steps: https://x.com/MaiYangAI/status/2112308502773518667  
- jennywen: more bots: https://x.com/jennywen/status/2112202752118182192  
- turingou: house hunting with Grok Bot: https://x.com/turingou/status/2112176072234037279  
- fankaishuoai: DIY cloud + local workflow: https://x.com/fankaishuoai/status/2112211923626500585  
- fankaishuoai: one-press chat is tasteful: https://x.com/fankaishuoai/status/2112322349882323217

![Grok Bot Action Button and new bots](/images/twitter-hots/2026-10-20/04-grok-bot.jpg)

---

## 5. Cognition: Devin Fusion tops the Coding Agent Index, budgets follow efficiency

**What happened**: @cognition says **Devin Fusion** (Opus 5.5 lead, GPT-6 Luna sidekick) took the top score of **68** on @ArtificialAnlys' Coding Agent Index, beating Claude Code with Opus 5.5 on both performance and price at 31% lower cost per task (Cognition's figures). The same day Cognition rolled out new cost controls: each engineer gets an efficiency score from their sessions, and productive engineers are auto-approved for more usage instead of hitting blanket caps; in Cognition's words, "blanket usage caps are a hiring freeze in disguise". @jeffwang adds that **Devin Coach** will teach users to be more efficient before a session; auto-approvals are Enterprise-only.

**Why it matters**: Multi-model "lead + sidekick" setups are starting to beat single-model harnesses on third-party leaderboards, and efficiency-based budgets make AI spend part of performance management, with incentive effects managers should watch.

- cognition: Devin Fusion scores 68: https://x.com/cognition/status/2112290148205436979  
- cognition: efficiency-based auto-approvals: https://x.com/cognition/status/2112223929414607228  
- jeffwang: cost controls and Devin Coach: https://x.com/jeffwang/status/2112229685543497745

![Devin Fusion on the Coding Agent Index](/images/twitter-hots/2026-10-20/05-devin-fusion.jpg)

---

## 6. Claude Code / Anthropic: slow down instead of multi-tasking, 60% of Codex users also use Claude Code

**What happened**: @trq212 from the Claude Code team: "I think most people multi-tasking with agents could benefit from slowing down. Most of the stuff you're doing won't really matter: what's your P0? What would it look like if you gave it your full attention?" (4.5k likes, 210k views). @theo shared T3 Code data: over the last two weeks, more than **60%** of T3 Code users who used Codex also used Claude Code, so "the majority of Codex users are Claude Code users". @LiteLLM pitched LiteLLM for running Claude Code with any model. @lennysan summarized eight takeaways from his interview with Anthropic interpretability researcher @mlpowered, including: when writing poetry, a model picks the rhyme word for line two as soon as line one is done; models can report only a small slice of their internal representations (the "J space"), and swapping "Spanish" for "French" there makes the model say a passage is French while it keeps writing Spanish; and "the more you look inside, the less certain you are about how they work."

**Why it matters**: While tools compete on how many agents you can run at once, people building them point to attention as the real bottleneck; the high overlap across tools shows users aren't loyal to one harness.

- trq212: slow down: https://x.com/trq212/status/2112219173288120531  
- theo: 60% of Codex users also use Claude Code: https://x.com/theo/status/2112035326625730981  
- LiteLLM: Claude Code with any model: https://x.com/LiteLLM/status/2112162598603067428  
- lennysan: 8 interpretability takeaways: https://x.com/lennysan/status/2112165116921659588

![Posts by trq212 and theo](/images/twitter-hots/2026-10-20/06-claude-code.jpg)

---

## 7. Agents across machines: Cua Spaces SDK, remote threads in T3 Code

**What happened**: @trycua launched the **Cua Spaces SDK**: every big lab now ships a bot with its own computer (Grok Bot, Muse, dots), but none let you bring your own; Cua Spaces puts Claude Code, Codex or any agent on compute you choose and runs jobs across all your computers at once (895 likes, 886 bookmarks). Demoing T3 Code, @theo noted that most threads he clicked were running on other machines (VPSs and local Linux boxes), and he quoted a user who expected "slop" but found "a better version of the Codex desktop", citing phone pairing by QR code, the sub-agent view, the PR flow, and visible costs and usage limits.

**Why it matters**: Agents are moving from "running on your laptop" to "running across your machines", and scheduling, compute and remote control are the next layer of tooling competition.

- trycua: Cua Spaces SDK: https://x.com/trycua/status/2112228154651881479  
- theo: T3 Code threads on other machines: https://x.com/theo/status/2111975231518867705  
- theo: "a better version of the Codex desktop": https://x.com/theo/status/2112297940052275469

![Cua Spaces SDK and a T3 Code user review](/images/twitter-hots/2026-10-20/07-t3-code-cua.jpg)

---

## 8. Developer infrastructure: Vercel open-sources libfx and fx0, Tessl Verifiers GA

**What happened**: @rauchg announced Vercel open-sourced **fx0**, a "really fast" HTML artifact builder powered by **libfx**, which makes agents durable; building the plumbing for v0 to survive server crashes, flaky LLMs and function limits was "a huge pain", and now it's free and OSS (1.1k likes, 1.1k bookmarks). @vercel_dev describes it as a "mini v0" on libfx: prototypes in seconds, 200+ models from AI Gateway, pure HTML output, forkable. @tessl_io made **Tessl Verifiers** generally available: plain-text rules in your repo, judged pass or fail on every agent change, "lint for the rules a linter can't check". @evanyou posed a question: compiling TS to native is cool, but what if plain TS can be as fast as native?

**Why it matters**: To put agent apps into production, the "boring plumbing" of durable execution and rule checks is being open-sourced and productized, so teams don't have to build it from scratch.

- rauchg: open-sourcing fx0 / libfx: https://x.com/rauchg/status/2112247046082363821  
- vercel_dev: a mini v0 on libfx: https://x.com/vercel_dev/status/2112245199808434614  
- tessl_io: Tessl Verifiers GA: https://x.com/tessl_io/status/2112174430004900280  
- evanyou: can plain TS be as fast as native: https://x.com/evanyou/status/2112303772513017960

![Vercel fx0 demo](/images/twitter-hots/2026-10-20/08-vercel-libfx.jpg)

---

## 9. Notion AI: Auto routing ~90% cheaper, bring your own AI, a new credit system

**What happened**: @NotionHQ announced a set of Notion AI upgrades. Per the official blog: the upgraded **Auto** router picks a model per task and delivers results similar to Opus 5.5 and Astra across 20+ common use cases at about **90%** lower average cost; Notion Agent and Custom Agents run on new infrastructure for longer tasks; "bring your own AI" covers connecting ChatGPT plans to Notion Agent (available now), bring-your-own model keys on Enterprise (private alpha, OpenAI, Anthropic or xAI), and an improved Notion MCP; the AI Command Center gives admins usage dashboards, spending limits and agent governance (coming soon). Under the new credit system, Business and Enterprise seats include **1,500** Standard credits per month (Notion picks the model) and 500 Select credits (you pick the model or run Custom Agents); it applies to new workspaces from Oct 19 and to existing ones from Nov 2.

**Why it matters**: Routing, bring-your-own keys and tiered credits are becoming the standard pricing shape for knowledge-work AI, so users no longer pay directly for a single frontier model.

- NotionHQ: Notion AI upgrades: https://x.com/NotionHQ/status/2112269722075242887

![Notion AI upgrade list](/images/twitter-hots/2026-10-20/09-notion-ai.jpg)

---

## 10. The agent app layer: Exa 3.0, a Gemini 4 Argon 3D track, Wabi 2.0 multiplayer agent

**What happened**: @ExaAILabs released **Exa 3.0**, claiming #1 on every benchmark it tested (self-reported). Exa's blog credits a larger embedding model, generally available Dynamic Highlights (95% fewer tokens than full page text) and an expanded index, and adds an Exa Lite tier at **$4** per 1,000 requests (Exa Auto: $7) (1.5k likes). @Google showed **Gemini 4 Argon** turning a photo of a real desk into a playable 3D track by orchestrating subagents, Blender MCP and Nano Banana (340k+ views). @ekuyda launched **Wabi 2.0**, "an agent you use together": family and friends join the same thread to update calendars, buy tickets and plan trips; @tobi quoted it: "extremely well crafted. You have to try it out".

**Why it matters**: Search, multimodal generation and group collaboration are all being packaged as agent building blocks, and token efficiency and price tiers now sell alongside quality.

- ExaAILabs: Exa 3.0: https://x.com/ExaAILabs/status/2112218730952601719  
- Google: Gemini 4 Argon builds a 3D track: https://x.com/Google/status/2112199261899411579  
- ekuyda: Wabi 2.0: https://x.com/ekuyda/status/2112212804979880239  
- tobi: "extremely well crafted": https://x.com/tobi/status/2112263294031385028

![Exa 3.0 launch image](/images/twitter-hots/2026-10-20/10-exa-agent-apps.jpg)

---
