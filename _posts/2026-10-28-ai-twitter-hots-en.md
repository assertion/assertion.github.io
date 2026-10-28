---
layout: post
title: AI Twitter Hots · 2026-10-28
categories: AI
description: A high-signal digest of AI coding / models / products discussed on X in the past day
keywords: AI, Twitter, Cursor, Annotate, FrontierCode, Anthropic, Grok Bot, tibot, Claude Code, DeltaDB, Liquid AI, LFM3, LangChain, OpenAI, DeepSeek
lang: en
permalink: /2026/10/28/ai-twitter-hots-en
translation_key: ai-twitter-hots-2026-10-28
issue: 47
item_count: 10
headline: "Cursor ships Design Mode Annotate, Cognition launches FrontierCode 2.0, Anthropic engineer kills coding interviews"
highlights:
  - label: "Cursor Annotate"
    text: "Design Mode adds Annotate: circle elements, draw on the page, review across screen sizes — visual prompts for coding agents."
  - label: "FrontierCode 2.0"
    text: "Cognition's new bench asks not just 'does it meet the spec' but 'would you merge the PR'; Opus 5.5 / GPT-6 Astra lead."
  - label: "Coding interview dead"
    text: "Anthropic engineer @felixrieseberg removed coding interviews from his team's loops; bookmarks nearly match likes."
products: [Cursor, Annotate, FrontierCode, Cognition, Anthropic, Claude, Grok Bot, tibot, Claude Code, DeltaDB, Zed, Liquid AI, LFM3, LangChain, DeepSeek, OpenRouter]
stats:
  - value: "4784"
    caption: "Likes on Anthropic's drug-discovery partnerships post (~1423 bookmarks)"
  - value: "2317"
    caption: "Likes on Cursor Design Mode Annotate (~592 bookmarks)"
  - value: "2021"
    caption: "Bookmarks on 'coding interview is dead' (~2027 likes)"
stat:
  value: "4784"
  caption: "Likes on Anthropic's drug-discovery partnerships post (~1423 bookmarks)"
---

# AI Twitter/X Hots Digest · 2026-10-28 (Wednesday)


## Today's highlights

1. **Cursor turns design into agent input**: Design Mode adds Annotate — circle elements, sketch on the page, review at different screen sizes — so visual prompts enter the coding-agent loop directly.  
2. **Evals move from “meets spec” to “would you merge?”**: Cognition ships FrontierCode 2.0; the same day Zed makes Claude Code multiplayer via `/delta share`.  
3. **Human vs agent division of labor keeps rewriting**: an Anthropic engineer drops coding interviews; Grok Bot posts both an agent-friendly shipping culture and tibot for mention digests.

---

## 1. Cursor Design Mode: Annotate feeds visual prompts to agents

**Takeaways**: @cursor_ai announces **Annotate** in Design Mode — give agents visual prompts: edit page elements, draw on the page, and review designs at different screen sizes. Companion shortcut Cmd+Shift+D opens it from the browser. Follow-ups call the “design mode glowup” worth studying.

**Why it matters**: Coding-agent input is no longer only natural language and diffs — circled annotations on a mock become first-class prompts, and IDE competition expands into whether design and implementation share one session.

- cursor_ai: Annotate launch: https://x.com/cursor_ai/status/2115159585548021814  
- cursor_ai: Cmd+Shift+D entry: https://x.com/cursor_ai/status/2115159597489225937  
- johnbai: design mode glowup: https://x.com/johnbai/status/2115185447601312013

![Cursor Design Mode Annotate](/images/twitter-hots/2026-10-28/01-cursor-annotate.jpg)

---

## 2. Cognition FrontierCode 2.0: would you actually merge the PR?

**Takeaways**: @cognition launches **FrontierCode 2.0** — most coding evals check whether code meets a spec; FrontierCode asks whether you would merge the PR. Tasks are built by maintainers of the underlying OSS repos (40+ hours each); ~80% of audits yield a reference solution better than the upstream PR. On price/performance: Opus 5.5 and GPT-6 Astra lead the intelligence tier; GPT-6.1 Sol hits cost efficiency at about \$1.03/task; rankings diverge from DeepSWE and the prior FrontierCode release.

**Why it matters**: Once models can land a green patch, the next bar is maintainability and review taste — benchmarks start simulating real merge decisions, not only unit-test greens.

- cognition: FrontierCode 2.0 launch: https://x.com/cognition/status/2115132488775524793  
- cognition: price vs performance clusters: https://x.com/cognition/status/2115132491107651933  
- cognition: ranking differences vs 1.1 / DeepSWE: https://x.com/cognition/status/2115132493259321443

![Cognition FrontierCode 2.0](/images/twitter-hots/2026-10-28/02-frontiercode-2.jpg)

---

## 3. Anthropic engineer: coding interviews are dead on his team

**Takeaways**: @felixrieseberg (Anthropic) writes that the **coding interview is dead** for his team — it no longer provides signal, and he removed it from loops this month — plus a spicy optimistic take that junior engineers may gain new openings (linked essay). Bookmarks nearly match likes: a “save this hiring note” style spread.

**Why it matters**: When a frontier lab publicly drops live algorithm drills, the mismatch between “human solves LeetCode” and “human steers agents to ship systems” is now written into hiring process.

- felixrieseberg: coding interview is dead: https://x.com/felixrieseberg/status/2115200995546566910

![Coding interview dead at Anthropic](/images/twitter-hots/2026-10-28/03-coding-interview.jpg)

---

## 4. Grok Bot: tibot watches mentions; the codebase is made agent-friendly

**Takeaways**: @poteto shares **tibot** — a Grok Bot that manages an X account: finds posts about you or keywords (tagged or not), daily/hourly digests, spam filter, translation, optional auto-block, and **never posts for you**. A second post says the Grok Bot team makes the easy thing the right thing so engineers, designers, and PMs land hundreds of PRs a day; token spend largely goes to quality/maintenance, not only new features. Together: a personal intel agent on the product side, and an agent-friendly repo culture on the engineering side.

**Why it matters**: Personal agents expand from “write my code” to “read my social noise,” and “refactor the repo for agents” becomes a public engineering flex, not only an internal toolchain rumor.

- poteto: sharing tibot: https://x.com/poteto/status/2115205951649423585  
- poteto: agent-friendly shipping: https://x.com/poteto/status/2115133011352240581

![Grok Bot tibot / agent-friendly shipping](/images/twitter-hots/2026-10-28/04-tibot-grokbot.jpg)

---

## 5. Claude Code goes multiplayer: `/delta share` shares thread and uncommitted work

**Takeaways**: @zeddotdev announces **Claude Code is now multiplayer**: run `/delta share` in Claude Code and a teammate joins in their own session with full context and uncommitted work on the same thread, backed by **DeltaDB**. A follow-up ships Delta CLI for plugging DeltaDB into other tools; next up: DeltaDB in Zed and Pi.

**Why it matters**: Coding agents move from solo terminal sessions to shareable work threads — the collaboration unit becomes context + working tree, not only a Git branch name.

- zeddotdev: Claude Code multiplayer: https://x.com/zeddotdev/status/2115135016233509239  
- zeddotdev: Delta CLI: https://x.com/zeddotdev/status/2115135017512755710

![Claude Code multiplayer /delta share](/images/twitter-hots/2026-10-28/05-claude-multiplayer.jpg)

---

## 6. Anthropic: Claude enters drug discovery and life sciences

**Takeaways**: @AnthropicAI says scientists spent months in deep research partnerships with six organizations developing new medicines, and began drug-discovery efforts of their own; a blog shares early results and how Claude can support stages of drug development. One of the day's highest-engagement official posts.

**Why it matters**: Vertical “model in the loop” narratives expand from coding and support into regulated life sciences — reliability and auditability requirements will push back on general-purpose agent products.

- AnthropicAI: drug-discovery partnerships: https://x.com/AnthropicAI/status/2115178675050307942

![Anthropic Claude drug discovery](/images/twitter-hots/2026-10-28/06-anthropic-drug.jpg)

---

## 7. trq212: OSS needs a distribution model agents can modify with upstream merges

**Takeaways**: @trq212 argues for a new way to distribute open-source software so people can modify via agents while still getting upstream merges automatically; coding agents can do this in theory but will not do it automatically. Strong bookmark/discussion energy, rhyming with the day's “agents edit repos / multiplayer sessions” thread.

**Why it matters**: As the marginal cost of editing code falls, fork-vs-upstream friction becomes a product gap — closer to infrastructure than yet another agent IDE.

- trq212: agent-modifiable OSS: https://x.com/trq212/status/2115188992861970693

![OSS distribution for agents](/images/twitter-hots/2026-10-28/07-oss-agents.jpg)

---

## 8. thdxr: DeepSeek traffic fits on one rack — what's missing is demand-creating apps

**Takeaways**: @thdxr puts demand in context: OpenRouter, the most successful model router, can almost serve 100% of its DeepSeek traffic on a single GB300 rack (~\$6–7M of compute); even 10× hidden demand stays under ~\$100M. Companion posts ask where neocloud → inference → router capacity goes without products that create demand — **someone's gotta make the apps**.

**Why it matters**: Open-weight hype and GPU buildouts collide with “who builds the apps” — for coding-agent / harness builders, this is a demand-side bell, not a supply-side one.

- thdxr: OpenRouter / DeepSeek demand scale: https://x.com/thdxr/status/2115165365630026178  
- thdxr: someone's gotta make the apps: https://x.com/thdxr/status/2115085009220780377  
- thdxr: hidden DeepSeek demand?: https://x.com/thdxr/status/2115149884890198356

![thdxr OSS inference demand](/images/twitter-hots/2026-10-28/08-thdxr-demand.jpg)

---

## 9. Liquid AI LFM3: ~2B open weights trained for agent harnesses

**Takeaways**: @omarsar0 highlights **Liquid AI LFM3** — a ~2B open-weight family for text, vision, audio, omni, and decision tasks on one backbone. LFM3-1.7B is trained for harnesses like Hermes Agent and Pi with 256K context; Liquid's eval shows 38.4 on WebArena-Verified vs 28.9 for Qwen3.5-9B; fine-tunable on a single GPU — aimed at always-on local agents.

**Why it matters**: Small-model stories shift from “can chat” to “fits a resident harness” — local agents compete on tool use and long context, not parameter-count ads.

- omarsar0: LFM3 write-up: https://x.com/omarsar0/status/2115134865733828918

![Liquid AI LFM3](/images/twitter-hots/2026-10-28/09-lfm3.jpg)

---

## 10. LangChain: open-sourcing an internal design agent (Content Studio)

**Takeaways**: @hwchase17 shares how the team built a design agent (with OSS code) for slides, GIFs, images — used multiple times a week; related discussion points to **Content Studio**, an on-brand Slack design agent. Bookmarks exceed likes: a “take this home” engineering post.

**Why it matters**: A design agent lands the same day as Cursor Annotate — IDEs absorb design input while growth/brand teams agentify design production; both ends productize together.

- hwchase17: design agent deepdive: https://x.com/hwchase17/status/2115130348187349104

![LangChain design agent](/images/twitter-hots/2026-10-28/10-langchain-design.jpg)

---
