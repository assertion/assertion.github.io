---
layout: post
title: AI Twitter Hots · 2026-10-31
categories: AI
description: A high-signal digest of AI coding / models / products discussed on X in the past day
keywords: AI, Twitter, Claude, Ultra, Cursor, Claude Code, OpenCode, DeepSeek, Suncatcher, Anthropic, Messages API, Rust, pi-durable, Grok Bot, Rex, Gemini, Antigravity, Skydive
lang: en
permalink: /2026/10/31/ai-twitter-hots-en
translation_key: ai-twitter-hots-2026-10-31
issue: 50
item_count: 10
headline: "Claude renames Max to Ultra and drops the 5-hour cap for verified accounts, Cursor marketplace ships a malicious Claude Code extension, OpenCode restores Claude subs and Cheepseek hundred-dollar DeepSeek"
highlights:
  - label: "Claude Ultra"
    text: "Max 5x→Max, Max 20x→Ultra; prices unchanged. Verified Ultra loses the 5-hour window; weekly limits stay."
  - label: "Cursor marketplace"
    text: "A tampered Claude Code VS Code extension reached at most ~5,000 users via Cursor's marketplace; Anthropic clarifies its own systems were not compromised."
  - label: "OpenCode triple"
    text: "Claude subscriptions work in OpenCode again; Cheepseek Phase 4 grants $100 of DeepSeek V4.1 Flash; 2.2.3 adds an image-gen tool."
products: [Claude, Ultra, Max, Cursor, Claude Code, OpenCode, DeepSeek, Project Suncatcher, Anthropic, Messages API, pi-durable, Grok Bot, Rex, Gemini, Antigravity, Skydive]
stats:
  - value: "23100"
    caption: "Likes on Claude's Max→Ultra + drop-5-hour-limit post (~2756 bookmarks)"
  - value: "16750"
    caption: "Likes on Sundar's Project Suncatcher hello-world post (~1616 bookmarks)"
  - value: "6454"
    caption: "Likes on OpenCode's Cheepseek Phase 4 $100 DeepSeek post (~692 bookmarks)"
stat:
  value: "23100"
  caption: "Likes on Claude's Max→Ultra + drop-5-hour-limit post (~2756 bookmarks)"
---

# AI Twitter/X Hots Digest · 2026-10-31 (Saturday)


## Today's highlights

1. **Subscriptions reshuffle again**: Claude renames Max 5x / 20x to Max / Ultra and drops the 5-hour window for verified Ultra; OpenCode restores Claude subscriptions the same day and stacks Cheepseek's hundred-dollar DeepSeek plus an image-gen tool.  
2. **Security and infrastructure**: A malicious Claude Code extension on Cursor's marketplace hit at most ~5,000 users — Anthropic staff say Anthropic systems were not breached; Messages API gets a Claude-authored Rust rewrite with ~40–50% lower CPU.  
3. **Space compute and desktop agents**: Sundar shows an orbital TPU's first haiku; Gemini Mac can jump into Antigravity; Grok Bot can see your phone screen; Rex floating panes and Skydive's 3D office visualize the agent workplace.

---

## 1. Claude: Max becomes Ultra; verified accounts lose the 5-hour limit

**Takeaways**: @claudeai renames plans: **Max 5x → Max** (still $100/mo), **Max 20x → Ultra** (still $200/mo), with existing subs auto-migrated. The bigger change: **verified Ultra accounts lose the 5-hour window**, starting today for most existing subscribers; newer accounts keep a temporary limit until verified to curb fraud. **Weekly limits are unchanged**. @dotey posts a long CN read (including how to self-check verification). @thsottiaux replies: "Better announce 28 days of reset."

**Why it matters**: This answers the pain of heavy Claude Code users stuck on a rolling 5-hour window while weekly quota remains — the old "20x" label loses window semantics, and the story shifts from multiplier branding to verifiable sustained throughput.

- claudeai: rename + limits: https://x.com/claudeai/status/2116220869479428500  
- dotey: CN deep dive: https://x.com/dotey/status/2116233564823974005  
- thsottiaux: jab reply: https://x.com/thsottiaux/status/2116256600436641887

![Claude Ultra rename](/images/twitter-hots/2026-10-31/01-claude-ultra.jpg)

---

## 2. Cursor marketplace: malicious Claude Code extension, ≤~5,000 users

**Takeaways**: @cursor_ai discloses a security incident: a **tampered Claude Code VS Code extension** distributed via the Cursor IDE extension marketplace affected at most about **5,000** users; it was **not built by Anthropic**. Response: take the marketplace down, neutralize the malware with partners, reinstate after confirming no further risk, and ask users to update to **Claude Code for VS Code 2.1.314**. Anthropic's @felixrieseberg clarifies: not a compromise of Anthropic systems or employee laptops — a malicious actor used Cursor marketplace access to publish a tampered copy; official Anthropic channels are unaffected.

**Why it matters**: This puts the third-party marketplace trust boundary on the coding-agent stage — how model vendors and IDE marketplaces share blame will reshape install habits more than another feature drop.

- cursor_ai: security notice: https://x.com/cursor_ai/status/2116074289053175808  
- felixrieseberg: Anthropic clarification: https://x.com/felixrieseberg/status/2116170451466543578

![Cursor marketplace security](/images/twitter-hots/2026-10-31/02-cursor-security.jpg)

---

## 3. OpenCode triple: Claude subs back, Cheepseek $100 DeepSeek, image gen

**Takeaways**: @opencode ships three posts in a day: (1) **Claude subscriptions work in OpenCode** again (demo video; community calls it "back"); (2) **Operation Cheepseek Phase 4** grants **$100** of DeepSeek V4.1 Flash usage; (3) **2.2.3** adds an image-generation tool supporting OpenAI / Gemini / Grok and more for concept UI and game reference art. Combined likes clear five figures.

**Why it matters**: OpenCode keeps differentiating on subscription interoperability, cheap inference credits, and multimodal tools — not another CLI skin, but a single door for model procurement and agent workflow.

- opencode: Claude subs: https://x.com/opencode/status/2116198602523513081  
- opencode: Cheepseek Phase 4: https://x.com/opencode/status/2116209960673800474  
- opencode: image gen tool: https://x.com/opencode/status/2116203934033354866  
- DanielSmolsky: subs-back demo: https://x.com/DanielSmolsky/status/2116193957675769917

![OpenCode image gen and Cheepseek](/images/twitter-hots/2026-10-31/03-opencode-imagegen.jpg)

---

## 4. Project Suncatcher: orbital TPU returns its first haiku

**Takeaways**: @sundarpichai posts a **hello world** for Project Suncatcher: weeks after launching a prototype satellite, they sent a command to orbit, booted the TPU, ran a prompt, and received a complete response on Earth — a haiku. Demo video attached; likes clear 16k.

**Why it matters**: Moves "space compute" from concept reel to a closed loop (uplink → inference → downlink). For the AI coding crowd the point is not the poem — it is that the supply narrative for models and agents now has an orbital chapter.

- sundarpichai: hello world: https://x.com/sundarpichai/status/2116214866444943853

![Project Suncatcher haiku](/images/twitter-hots/2026-10-31/04-suncatcher.jpg)

---

## 5. Anthropic Messages API: zero Rust engineers; Claude rewrote it; ~40–50% less CPU

**Takeaways**: @somi_ai summarizes a Latent Space interview beat: Anthropic **rewrote its Messages API in Rust** with **zero Rust developers** on the team — Claude wrote the code; humans wrote the plan and checked old vs new on real traffic; **CPU dropped ~40–50%**. Punch line: "never do the big rewrite" may be dead advice.

**Why it matters**: A public case of a model writing production infrastructure — under every Claude API call — closer to rewriting ops defaults than another vibe-coding demo.

- somi_ai: summary + podcast cite: https://x.com/somi_ai/status/2116050219989373170

![Anthropic Messages API Rust rewrite](/images/twitter-hots/2026-10-31/05-anthropic-rust.jpg)

---

## 6. pi-durable: performance pass on a one-commit-per-step recoverable runtime

**Takeaways**: @badlogicgames (Mario) shares a performance round on **pi-durable**: every agent step is saved to a DB before the agent continues — **1 save = 1 commit** — so a crash resumes from the last commit; ~12 commits per typical run. Chart compares before/after.

**Why it matters**: While mid-run agent crashes are still normal, making durability a default primitive matters more than stacking more tool calls for whether you dare leave an agent overnight.

- badlogicgames: pi-durable write-up: https://x.com/badlogicgames/status/2116078693827428383

![pi-durable performance](/images/twitter-hots/2026-10-31/06-pi-durable.jpg)

---

## 7. Grok Bot: sees your phone screen; Elon frames it as a colleague

**Takeaways**: @everestchris6 demos holding the Action button so **Grok Bot can see the phone screen** — ask about the video you are watching, turn a Reel into a business prototype, break down the article you are reading — and says it ships as a free open-source iPhone Shortcut. Separately, @elonmusk frames Grok Bot as a **work colleague** (quoting a "less fluff, more coworker" vibe).

**Why it matters**: Visual context shifts from "paste a screenshot" to "hold and ask the screen" — another drop in mobile agent entry cost — while the colleague metaphor sets product personality.

- everestchris6: screen-vision demo: https://x.com/everestchris6/status/2116183923747422477  
- elonmusk: Think of Grok Bot as a work colleague: https://x.com/elonmusk/status/2116305829381263528

![Grok Bot phone screen](/images/twitter-hots/2026-10-31/07-grok-phone.jpg)

---

## 8. Rex: floating panes demo (scriptable / API-driven)

**Takeaways**: @mitchellh demos **floating panes** in Rex — how they look and fit a daily workflow — and stresses they are **fully scriptable and API-driven**. Long video; community places it on the Ghostty / terminal-workspace successor line.

**Why it matters**: The UX race for terminal and local agent workplaces keeps escalating — "beautiful and scriptable" together is what it takes to become the default host layer.

- mitchellh: floating panes demo: https://x.com/mitchellh/status/2116296333506359646

![Rex floating panes](/images/twitter-hots/2026-10-31/08-rex-panes.jpg)

---

## 9. Gemini Drops: Argon, Skills, and Antigravity inside Gemini for Mac

**Takeaways**: @GeminiApp ships a **Gemini Drops** thread: **Gemini 4 Argon** for complex projects; custom **Skills** to reuse prompts; **switch between chat and Google Antigravity coding** in the Gemini Mac app (local build, debug, prototypes); Windows desktop app via shortcut. Followers call chat→agent-build without tool-switching the headline feature.

**Why it matters**: After Jules folded into Antigravity, Google embeds the coding agent **inside the everyday Gemini client** — distribution expands from a standalone IDE to the chat window people already have open.

- GeminiApp: Drops overview: https://x.com/GeminiApp/status/2116304609383710988  
- GeminiApp: Mac ↔ Antigravity: https://x.com/GeminiApp/status/2116305158602936827

![Gemini Drops Antigravity](/images/twitter-hots/2026-10-31/09-gemini-drops.jpg)

---

## 10. Skydive: a 3D office for AI coworkers

**Takeaways**: @getskydive opens to everyone: build an agent team, watch them work in a **3D office**, and assign tasks over Slack / email / iMessage / the web; claim a company domain to put the office on the map; free this week. Strong video; bookmarks nearly match likes.

**Why it matters**: Pulls multi-agent collaboration out of lists and logs into a visitable spatial metaphor — whether the product lasts, it tests whether people want to watch agents go to work.

- getskydive: open + demo: https://x.com/getskydive/status/2116222751895855452

![Skydive AI office](/images/twitter-hots/2026-10-31/10-skydive.jpg)

---
