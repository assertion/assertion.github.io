---
layout: post
title: AI Twitter Highlights · 2026-10-09
categories: AI
description: High-signal AI coding / model / product discussions from X in the past day
keywords: AI, Twitter, Claude, Claude Dashboards, Claude Motion, Claude Code, Managed Agents, Codex, GPT-6.1 Sol, Ultrafast, Gemini, Google Cloud, Grok Bot, Shopify, Omarchy, Anthropic Cyber Mission, OSS Scanner, OpenCode, Voyager, Pi Durable, Qwen3.8, Saluki, Step 5, Cline, Devin, Augment, Harness
lang: en
translation_key: ai-twitter-hots-2026-10-09
permalink: /2026/10/09/ai-twitter-hots-en
issue: 28
item_count: 11
headline: "Claude builds dashboards, Codex gets 8x faster, Google announces 'Gemini'"
highlights:
  - label: "Claude moves deeper into office work"
    text: "Claude Dashboards and Motion enter beta (32.7K likes, nearly 20K bookmarks); Docs / Slides / Design open to every plan. The same day, Anthropic launches its Cyber Mission with free vulnerability scans for open-source projects."
  - label: "Speed and the front door, at the same time"
    text: "Codex Day 4 ships instant steering and GPT-6.1 Sol Ultrafast (up to 8x faster); Google announces a universal work agent called 'Gemini'; Grok Bot taps other subscriptions via Claude Code / Codex and connects to Shopify."
  - label: "Developers argue about volume"
    text: "Do hundreds of merged PRs a day mean anything? OpenCode nears 20M monthly actives; Qwen3.8-27B becomes the shared base for open compression, local inference and RL experiments."
products: [Claude, Codex, Gemini, Grok Bot, OpenCode]
stats:
  - value: "8x"
    caption: "GPT-6.1 Sol Ultrafast's max speedup over Standard"
  - value: "20M"
    caption: "Monthly active users OpenCode is approaching"
  - value: "21x"
    caption: "Claude Startups applications in 48 hours vs. the previous 5 months combined"
stat:
  value: "8x"
  caption: "GPT-6.1 Sol Ultrafast's max speedup over Standard"
---

# AI Twitter/X Highlights Digest · 2026-10-09 (Fri)


## Today's Highlights

1. **Claude moves deeper into office work, and puts money into security**: @claudeai launched Claude Dashboards and Claude Motion in beta (32.7K likes, nearly 20K bookmarks, today's most-engaged AI product post). Claude can now turn data into live dashboards and ideas into animated explainers. Docs, Slides and Design left beta and are available on every plan, including Free. The same day, Anthropic launched the Anthropic Cyber Mission and the free OSS Scanner, and committed $150M to the Genesis Mission.  
2. **Speed and the front door, at the same time**: Day 4 of Codex's "28 days" shipped instant steering alongside GPT-6.1 Sol Ultrafast, which OpenAI says is up to 8x faster than Sol Standard. At Gemini at Work, Google Cloud announced a universal work agent named simply "Gemini", and Theo and Tibo immediately turned it into a meme. Grok Bot users are having the bot install Claude Code and Codex to use subscriptions they already pay for, and Grok Bot now connects to Shopify.  
3. **Developers argue about volume**: "What's the point of hundreds of PRs a day?" drew a long "volume does matter" post from @poteto. OpenCode is nearing 20M monthly actives and its iOS app is on TestFlight. Qwen3.8-27B has become the shared base for open compression (Saluki 27B), local inference (lithos-metal) and RL experiments.

---

## 1. Claude: Dashboards and Motion in beta, Docs / Slides / Design open to everyone

**Key points**: @claudeai announced **Claude Dashboards** and **Claude Motion** in beta: ask Claude to turn your data into live dashboards and your ideas into animated explainers. The post drew 32.7K likes, 19.9K bookmarks and over 3M views. According to the official article, Dashboards connects directly to data platforms such as BigQuery, Databricks and Snowflake, or a CRM like Salesforce; you ask in plain language and get an auto-refreshing dashboard where every number links to its underlying query. It's available on paid plans. Motion is for Team and Enterprise: Claude writes code that animates text, charts and images rather than using a video generation model, so every word can be edited, and the result exports as MP4. In the same thread, **Claude Docs, Slides and Design left beta and are available on every plan, including Free**; teammates and Claude can edit the same doc, deck or design together. A related update: Claude Startups lead @sarahzorah said that in the 48 hours after the program's expansion, applications were 21x the total of the previous 5 months, and many non-startups got in. They've paused the Team plan and API credit benefits and will re-verify unclaimed applications (benefits already claimed are unaffected).

**Why it matters**: While OpenAI brought GPT-6 to the ChatGPT chat tab this week, Anthropic is pushing Claude toward office deliverables: dashboards, animations and collaborative docs. Nearly 20K bookmarks suggest people plan to actually use these. Claude Startups getting swamped also shows how attractive Claude plans and API credits are.

- Dashboards and Motion beta: https://x.com/claudeai/status/2108271552991252810  
- Docs / Slides / Design open to all plans: https://x.com/claudeai/status/2108271559928389679  
- minchoi demo roundup: https://x.com/minchoi/status/2108274713458077711  
- Claude Startups: 21x applications, some benefits paused: https://x.com/sarahzorah/status/2108401845563806150

![Claude Dashboards and Claude Motion](/images/twitter-hots/2026-10-09/01-claude-dashboards-motion.jpg)

---

## 2. Codex "28 days" Day 4: instant steering + GPT-6.1 Sol Ultrafast

**Key points**: @thsottiaux announced **Day 4**: steering in Codex is now instant, so the model reacts much faster to mid-task adjustments and you can course-correct in real time without wasting effort. He also released **GPT-6.1 Sol Ultrafast**, saying the two work very well together (8.1K likes, 1.5K replies). The official @OpenAIDevs post (4.5K likes) said Ultrafast is rolling out in the API, Codex and ChatGPT Work, with near-Astra intelligence at up to 8x the speed of Sol Standard. Per OpenAI's developer community announcement and model docs, Ultrafast API pricing is 6x Standard ($12 input / $60 output per million tokens at short context), and in Codex and ChatGPT Work it's currently limited to Pro $500, eligible usage-based Enterprise, and credit-based Edu plans. On the afternoon of Oct 8 (Beijing time) there was also a "Day 3 encore": Tibo said they had **quietly re-shipped Codex cloud** and "it's pretty good now" (6.8K likes, 700+ bookmarks), quoting Tailscale's announcement that Codex Cloud can now securely reach resources on your tailnet. @haider1 added that Codex picked up 15M active users in barely 6 weeks. In China, @Trae_ai announced GPT-6.1-Sol is now available in TRAE.

**Why it matters**: Speed is becoming a selling point for coding agents. Instant steering lets you change direction while you watch, and Ultrafast shortens the wait, so together they're meant to keep you working with the agent in real time. But Ultrafast costs 6x Standard and plan access is tight, so for now it's mainly for heavy users.

- Day 4: instant steering + Ultrafast: https://x.com/thsottiaux/status/2108275041276420573  
- OpenAIDevs: Ultrafast rolling out: https://x.com/OpenAIDevs/status/2108262812489531498  
- Day 3 encore: Codex cloud re-shipped: https://x.com/thsottiaux/status/2108084615349170480  
- Day 3 reset landed on all accounts: https://x.com/thsottiaux/status/2108040921044639779  
- haider1: 15M new active users in 6 weeks: https://x.com/haider1/status/2108086238280368272  
- GPT-6.1-Sol in TRAE: https://x.com/Trae_ai/status/2108128522359464343

![Codex instant steering](/images/twitter-hots/2026-10-09/02-codex-day-4.jpg)

---

## 3. Google Cloud launches a universal work agent, and it's called "Gemini"

**Key points**: At Gemini at Work 2026, Google Cloud CEO @ThomasOrTK announced **Gemini**, "a new single universal agent for work" that has your business context and handles Q&A, knowledge work, content creation and coding from a single prompt box (2.6K likes, 1K+ bookmarks). Its design principles: web-based and usable from any device, embeddable in third-party apps or able to run without a UI; it runs in the cloud with one set of memories and one personalization graph across devices; it can spin up sub-agents for multi-step tasks or act as a "coworker agent" with its own identity; and it orchestrates across multiple models to balance quality and cost. @sundarpichai was there with 700+ customers. The Verge and VentureBeat report it's only in private preview for select enterprise customers, coworker agents get their own @agents email address, and it comes at no extra charge where Gemini Enterprise is available. On X, the name got most of the attention: @theo quoted the launch with "Today, Google announced Gemini. Yes you read that right." (4.3K likes) and added, "It's gonna be hilarious when they retire this and we can say 'Google killed Gemini'". @thsottiaux followed with "Today, we are announcing ChatGPT." (17.6K likes).

**Why it matters**: Google is putting "universal agent + sub-agents + multi-model routing + its own identity" straight into the Workspace stack, competing head-on with Grok Bot, ChatGPT Work and Claude's office products. It's private preview for now, so real-world impressions will take more customers.

- Thomas Kurian's announcement: https://x.com/ThomasOrTK/status/2108245829530325307  
- Sundar Pichai: https://x.com/sundarpichai/status/2108257472553386059  
- TechCrunch: sub-agents, multiple models, own email: https://x.com/TechCrunch/status/2108260918350008526  
- Theo: "Google announced Gemini": https://x.com/theo/status/2108333105862087093  
- Theo: "Google killed Gemini": https://x.com/theo/status/2108333157582078456  
- Tibo: "we are announcing ChatGPT": https://x.com/thsottiaux/status/2108349826727588000

![Gemini at Work](/images/twitter-hots/2026-10-09/03-gemini-agent.jpg)

---

## 4. Grok Bot: installs Claude Code / Codex to use other subscriptions, connects to Shopify, gives Omarchy $1.5M in tokens

**Key points**: Yesterday Elon Musk said Grok Bot would pick the best back-end model per task, including Claude Opus. Today users are already doing it themselves. @AndrewWarner's guide was quote-posted by Elon ("True", 2.9K likes): tell Grok Bot "Connect to my Claude and ChatGPT subscriptions using Claude Code and Codex", and it opens a terminal on its own computer, installs both CLIs and asks you to log in once. From then on it can hand work to the other models, with no API keys and no new subscriptions; his FAQ follow-up drew 1.4K bookmarks. @chribjel called "grok bot + cursor cloud agents" an insane productivity boost, and Elon replied "Yes" (3.6K likes). On the product side, **@bot announced it can now help run your Shopify store**: check orders, track inventory and keep listings up to date. @Shopify launched both @grok and @bot connectors, and Elon reminded people the Grok Bot phone app is on iOS and Android (6.1K likes). @benln listed what the team shipped in the past few days: a proactive primary bot, X search and monitoring with no API key, faster replies, slide decks in chat, tagging @bot on X with instructions, and best-model-per-task. Another big one: @dhh announced **@SpaceXAI as a Founding Corporate Patron of the Omacom Foundation, giving $1.5M in Grok tokens** for the maintenance and development of Omarchy (10.9K likes). Some fatigue too: @GergelyOrosz said the Grok Bot vs. Codex / Dots teams' constant sniping at each other is "starting to get tiring and borderline annoying".

**Why it matters**: Having the bot use official CLIs to reach subscriptions you already pay for turns Grok Bot into a dispatch layer over several labs' models. The Shopify connector plugs it into e-commerce back offices. Sponsoring an open-source project in tokens rather than cash is also worth watching.

- AndrewWarner: connect Claude / ChatGPT subscriptions via CLI: https://x.com/AndrewWarner/status/2107930509284126970  
- Elon quote-post, "True": https://x.com/elonmusk/status/2108048212233785664  
- Five common questions: https://x.com/AndrewWarner/status/2108236955188068385  
- Grok Bot + Cursor cloud agents: https://x.com/elonmusk/status/2108050093916164568  
- Grok Bot connects to Shopify: https://x.com/bot/status/2108228871938359347  
- Shopify's new connectors: https://x.com/Shopify/status/2108226178146263268  
- Phone app: https://x.com/elonmusk/status/2108272088582676627  
- Recent shipping list: https://x.com/benln/status/2108194230938247627  
- DHH: SpaceXAI gives Omarchy $1.5M in Grok tokens: https://x.com/dhh/status/2108127662120014285  
- SpaceXAI's note: https://x.com/mattyp/status/2108212924666040343  
- Gergely: the sniping is getting tiring: https://x.com/GergelyOrosz/status/2108138915823755642

![Grok Bot connects to Shopify](/images/twitter-hots/2026-10-09/04-grok-bot-shopify.jpg)

---

## 5. Anthropic Cyber Mission: free vulnerability scans for open source, plus $150M for the Genesis Mission

**Key points**: @AnthropicAI announced the **Anthropic Cyber Mission**, an effort to secure critical infrastructure and open-source software (1.6K likes, nearly 400 bookmarks). The first concrete piece is **OSS Scanner**: Anthropic's strongest models periodically scan opted-in open-source projects and send free vulnerability reports with a proof of concept, an explanation and a suggested fix. The official write-up stresses that reports are fully model-generated with no human review. That makes them faster, but some may be false positives or have wrong severity ratings; Anthropic expects a true-positive rate above 90%. Core maintainers enroll by opening a PR against the official GitHub repo, and eligibility follows OSS-Fuzz-like criteria for projects with "critical impact on infrastructure and user security". The same day, Anthropic committed **$150M to the Genesis Mission** led by the US Department of Energy and will make Claude and technical support available to more than 15 federal agencies (2.6K likes). On the science side, Anthropic described how an astrophysicist used Claude Science to build the first complete ultraviolet map of the sky, finishing in a few days work that would have taken weeks (3K likes).

**Why it matters**: AI bug-finding is now strong enough to bury maintainers in reports. OSS Scanner lets each project choose whether it wants a fast track of unreviewed findings, which is one answer to that problem. Teams maintaining critical open-source libraries may want to consider enrolling.

- Anthropic Cyber Mission: https://x.com/AnthropicAI/status/2108302539498414208  
- OSS Scanner: https://x.com/AnthropicAI/status/2108302543977906649  
- A long-term effort: https://x.com/AnthropicAI/status/2108302545953157156  
- $150M to the Genesis Mission: https://x.com/AnthropicAI/status/2108226292235809081  
- Claude Science ultraviolet sky map: https://x.com/AnthropicAI/status/2108290395599667700

![OSS Scanner](/images/twitter-hots/2026-10-09/05-anthropic-oss-scanner.jpg)

---

## 6. Claude Code 2.1.295 supports OSC 7501; Managed Agents gets an automation guide

**Key points**: @ClaudeCodeLog tracked two releases in one day. **2.1.294** fixed instruction-form prompt / agent hooks that failed to block targeted commands. **2.1.295** has 143 CLI changes, notably `onFailure: "block"` for command and HTTP hooks (a hook that can't start, times out or exits abnormally now blocks the action), an optional model list and a time-to-first-byte timeout for Claude apps gateway upstreams, and **support for OSC 7501 (Program Status Protocol)**, so terminals can show whether Claude Code is working, waiting on you, or done. The protocol was proposed this week by Ghostty author @mitchellh, who called Anthropic's speed "incredible" (1.4K likes). @ClaudeDevs published **a guide to building automations with Claude Managed Agents**: deploy an agent that reads Slack / GitHub on a schedule, with credentials and memory, and posts updates. You can set it up with one Claude Code command and pay for it with the API credits now included in Max / Team (nearly 2K likes, 2.1K bookmarks). @RLanceMartin added deployment notes on credential vaults, guardrails and memory. @trq212 showed the "daily AI homepage" he built with those credits, at about $0.75 per run on Sonnet 5.5 (1.2K bookmarks). Separately, an r/ClaudeAI post about "finding a candidate planet in NASA TESS data with Claude Code" spread on X: the author wrote 1,000+ scripts to sift seven years of data, and @MTSlive says NASA has approved further verification. @trq212 posted it with "we should be more ambitious" (6.6K likes).

**Why it matters**: Hooks that fail closed and gateway model allowlists are the guardrails teams and enterprises need before trusting Claude Code. Managed Agents plus plan-included API credits make scheduled agents cheap for individuals too. The planet is still a "candidate"; the result depends on follow-up verification.

- Claude Code 2.1.294: https://x.com/ClaudeCodeLog/status/2108249134062792958  
- Claude Code 2.1.295: https://x.com/ClaudeCodeLog/status/2108287382084608410  
- 2.1.295 changelog details: https://x.com/ClaudeCodeLog/status/2108287396739527090  
- mitchellh: Claude Code supports OSC 7501: https://x.com/mitchellh/status/2108296550405619967  
- Managed Agents automation guide: https://x.com/ClaudeDevs/status/2108320296323477683  
- RLanceMartin: deployment notes: https://x.com/RLanceMartin/status/2108327973078315274  
- trq212: daily AI homepage: https://x.com/trq212/status/2108301668828004396  
- ~$0.75 per run: https://x.com/trq212/status/2108301670451163390  
- Candidate planet: https://x.com/MTSlive/status/2108215293793476754  
- trq212: "we should be more ambitious": https://x.com/trq212/status/2108246323707383961

![Finding a candidate planet with Claude Code](/images/twitter-hots/2026-10-09/06-claude-code-planet.jpg)

---

## 7. OpenCode: nearing 20M monthly actives, iOS app on TestFlight

**Key points**: Replying to a post claiming "twitter is a bubble, normal people are not vibe coding", @thdxr said **OpenCode is approaching 20M monthly active users**, while there are maybe 50–100M developers in the world, "so either 1 in 5 of them use OpenCode or....." (2K likes). He then opened a **TestFlight for the OpenCode iOS app**, limited to 1,000 testers, and asked people to upgrade to OpenCode v2.0.26 before pairing: "it definitely needs polish but it's already so useful". Team member @ryanvogel said the iOS app's voice mode is "INSANELY GOOD" if you have an OpenAI key and that he uses it in the car every day, while @LukeParkerDev raved about the OpenCode desktop app's built-in browser. The day before, thdxr had a widely shared take: you can get a lot better at vibecoding, with "probably as much a range as between day 1 of programming to day 10,000" (2.8K likes). Plus a side show: thdxr, @trq212 and @poteto traded jabs on X, and poteto declared "season 2 begins".

**Why it matters**: 20M monthly actives is a rare self-reported scale for an open-source coding agent (no third-party data yet). Mobile plus voice puts OpenCode in the same direction Cursor and Claude Code are already taking: directing agents when you're away from your computer.

- Approaching 20M monthly actives: https://x.com/thdxr/status/2108263779335287027  
- iOS TestFlight: https://x.com/thdxr/status/2108284341923049578  
- iOS voice mode: https://x.com/ryanvogel/status/2108304752618488138  
- Desktop built-in browser: https://x.com/LukeParkerDev/status/2108372939662045359  
- You can get better at vibecoding: https://x.com/thdxr/status/2107993286996594889  
- "season 2 begins": https://x.com/poteto/status/2108266322216075460

![OpenCode iOS voice mode](/images/twitter-hots/2026-10-09/07-opencode-ios.jpg)

---

## 8. "What's the point of hundreds of PRs a day?" poteto: volume does matter

**Key points**: Design engineer @emilkowalski asked: "Can someone help me understand how shipping 100s PRs a day makes sense? Why do you need to ship so many PRs in the first place? I might just not be AI-pilled enough" (1.7K likes, 200+ replies). Part of the trigger was @vinvan posting "merged 145 prs so far today" and recommending the "poteto playbook": get a lot of tokens, create an orchestrator project for every workstream and only talk to those, have them spawn cloud agents, and verify with cross-model reviews. @poteto first replied that they have **agentic code review that assesses every PR for risk; low-to-medium-risk PRs don't need a human review and just get merged**, plus Bugbot. She then posted a long piece, **"volume does matter"** (2.4K likes, 1.5K bookmarks). Her argument: PR counts used to be meaningless because the focus was on impact, and volume only mattered at the tails of the distribution (people struggling to perform, and the "coding machine" archetype). With agents, everyone can be a coding machine, so if your PR count hasn't changed you should ask why. Scaling output starts with building trust in your agent's output. Tokens are expensive, but you should think in cost per unit of intelligence, which keeps falling. And the engineer's job is shifting from writing software to building the machine that writes software, a "software factory" she calls a "Michelin kitchen". She followed up with "you should be more ambitious, way more ambitious" (5.5K likes). Another angle came from @trq212: the most common failure he sees is people working outside their domain who can't make their prompts and plans precise, so they burn many turns iterating imprecisely (3.2K likes, nearly 1K bookmarks).

**Why it matters**: After the "what is 1.5T tokens worth" debate, this is another round about heavy agent usage. What's worth copying is the verification setup (risk tiers, automated review, cross-model checks); the PR count itself doesn't tell you much.

- emilkowalski's question: https://x.com/emilkowalski/status/2108270779200852148  
- vinvan: 145 PRs in a day: https://x.com/vinvan/status/2107995483981361243  
- poteto: risk-tiered agentic code review: https://x.com/poteto/status/2108283057581195413  
- poteto: "volume does matter": https://x.com/poteto/status/2108290818746528017  
- poteto: be more ambitious: https://x.com/poteto/status/2108299315764777171  
- trq212: the most common failure mode: https://x.com/trq212/status/2108021247301062894

![poteto: volume does matter](/images/twitter-hots/2026-10-09/08-pr-volume.jpg)

---

## 9. Harnesses beyond code: Voyager for creative work, Pi Durable ported to Swift and Obsidian

**Key points**: YC Fall 2026 company **Voyager** launched (@anvisha, 2.1K likes, 2.7K bookmarks), pitched as "the Codex for creative work". Most AI tools are built for coding; Voyager is a harness tuned for video, graphics and games. It works with models like Opus, Astra and DeepSeek, ships free graphics, music and video-editing tools, and can drive Blender, DaVinci Resolve, After Effects, Ableton and 100+ other apps. Everything in the launch thread was made with it. Note that its FAQ says the Voyager app itself is proprietary software from Nullframe (the team behind Moda); "open" means you choose the agent, models and apps and can plug in your own skills. @omarsar0's take: "Don't sleep on domain-specific harnesses... Creative work needs its own harness." The same idea shows up in the Pi community. @viticci's ideal "Apple Bots" product didn't exist, so he **ported most of @badlogicgames' Pi Durable to Swift** and ended up with a lean harness with Apple integrations (360+ bookmarks); badlogicgames called it a creative use of JavaScriptCore. @rcarmo got pi-durable running inside Obsidian, and @rivet_dev now runs Pi Durable on Rivet Actors at about 1.3 MB per agent, starting in milliseconds and surviving crashes.

**Why it matters**: The coding-agent harness is being copied into other domains. Voyager brings the pattern to creative software, and Pi Durable is being embedded into note apps and native apps. Both show that "model + tool loop + durability" isn't just for writing code.

- Voyager launch: https://x.com/anvisha/status/2108252061209088159  
- omarsar0: domain-specific harnesses: https://x.com/omarsar0/status/2108268485860040876  
- viticci: Pi Durable ported to Swift: https://x.com/viticci/status/2108192119152140318  
- badlogicgames' reply: https://x.com/badlogicgames/status/2108193659023950005  
- pi-durable inside Obsidian: https://x.com/rcarmo/status/2107819123724161205  
- Rivet supports Pi Durable: https://x.com/rivet_dev/status/2107840906141335935

![Voyager](/images/twitter-hots/2026-10-09/09-voyager.jpg)

---

## 10. Open models: Qwen3.8-27B becomes a shared base, Step 5 Preview free in Cline

**Key points**: Several open releases today are built on **Qwen3.8-27B**. @underdogdotai released **Saluki 27B**, compressed from Qwen 3.8 27B: almost 7x smaller (about 7.89GB) while keeping 96% of its benchmark performance and beating the original at tool calling, under Apache 2.0 (3.1K likes, 3.9K bookmarks, today's most-bookmarked open-model post). Public coverage also notes some drop in math and complex reasoning. @JiaZhihao open-sourced **lithos-metal**: megakernels plus DSpark speculative decoding run Qwen3.8-27B at a 200+ tokens/s/user peak on a single M5 Max, and it plugs into any coding agent with one command. @AfterQuery said 500 tasks from its SWE agent dataset and just 15 GRPO steps improved Qwen3.8-27B-Medium by 11.3 points, and Hugging Face launched the Open Env Arena, where agents design RL environments and the platform trains Qwen-3.8-27B on them for a leaderboard. Separately, **@cline announced StepFun's Step 5 Preview is free in Cline for a limited time**, saying it beats Kimi K3 and GLM-5.3 on DeepSWE. However, Step 5 Preview (a 600B-total / 27B-active MoE) is scheduled to release its weights on Oct 15, so it isn't open-weight yet. One last warning: @lmoroney summarized a ProjectDiscovery experiment that backdoored Qwen2.5-7B for under $50. Served to Codex CLI, the model exfiltrated credentials whenever a trigger phrase appeared, and standard benchmarks didn't catch it (2.4K likes, 1.4K bookmarks).

**Why it matters**: ~27B open models are becoming the default size for local coding agents, with compression, inference speedups and post-training all centered on them. But running weights of unknown origin inside an agent is like handing execution rights to a stranger: sandboxing, keeping secrets out of reach and limiting outbound network access are all essential.

- Underdog Saluki 27B: https://x.com/underdogdotai/status/2108021482983133395  
- lithos-metal open-sourced: https://x.com/JiaZhihao/status/2108249739414147259  
- AfterQuery: +11.3 points from 500 tasks: https://x.com/AfterQuery/status/2108314046365905073  
- Open Env Arena: https://x.com/ben_burtenshaw/status/2108200143069561151  
- Step 5 Preview free in Cline: https://x.com/cline/status/2108249633789263917  
- Open-model backdoor experiment: https://x.com/lmoroney/status/2108071329790370027

![Underdog Saluki 27B](/images/twitter-hots/2026-10-09/10-saluki-27b.jpg)

---

## 11. Devin launches Security Swarm; Augment sells Cosmos and Auggie CLI to Harness

**Key points**: Cognition launched **Devin Security Swarm**, which sends a swarm of parallel Devins through your codebase to build a threat model, hunt down real, exploitable vulnerabilities (including ones chained across files), prove them in a sandbox, and hand you the fix as a PR. Inside Cognition, @wlhunter25 described onboarding their first marketing ops manager, named Devin (180 bookmarks). At ploy, @bryantchou said Devin is rapidly taking over from Codex and Claude Code internally, with "90% of dev work out of slack". In other industry news, **@augmentcode agreed to sell Cosmos, the Auggie CLI, the Code Context Engine and related tech to @harnessio**; the team joins Harness to build software-factory capabilities into its Autonomous SDLC Platform. According to Harness's announcement, Cosmos becomes the Harness Cosmos Software Factory Agent, covering the path from idea to merge-ready code, after which Harness's own agents handle delivery, testing and security.

**Why it matters**: Anthropic's OSS Scanner and Devin's Security Swarm launched on the same day, so security auditing is becoming a standard coding-agent use case. Augment selling its core product line suggests independent AI coding tools, squeezed between big labs and open-source tools, are starting to consolidate.

- Devin Security Swarm: https://x.com/devindevelopers/status/2108240907539804464  
- Cognition's "marketing ops Devin": https://x.com/wlhunter25/status/2108242698259894399  
- ploy: Devin taking over Codex and Claude Code: https://x.com/bryantchou/status/2108327180141035989  
- Augment sells Cosmos and more to Harness: https://x.com/augmentcode/status/2108212600651887095

![Devin Security Swarm](/images/twitter-hots/2026-10-09/11-devin-security-swarm.jpg)
