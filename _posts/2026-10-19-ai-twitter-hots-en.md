---
layout: post
title: AI Twitter Highlights · 2026-10-19
categories: AI
description: High-signal AI coding / model / product discussions from X in the past day
keywords: AI, Twitter, OpenCode, thdxr, Daybreak Blue, Anthropic, Claude, Grok Bot, Elon Musk, OpenAI, Codex, dots, DeepSeek, DeepSeek-V4.1-Flash-1017, Browser Use, Arena, T3 Code, ADEMark, poteto, pstack, aurora-alpha, vLLM, Qwen3.8, Vercel, AI Gateway
lang: en
translation_key: ai-twitter-hots-2026-10-19
permalink: /2026/10/19/ai-twitter-hots-en
issue: 38
item_count: 10
headline: "OpenCode fends off a 48-hour attack, Anthropic commits 5% of its shares to a public benefit fund, DeepSeek's new Flash matches Opus 5.5"
highlights:
  - label: "OpenCode under attack for 48 hours"
    text: "@thdxr says the attacks haven't let up; the frontier models used for defense started refusing mid-incident until OpenCode got access to OpenAI's Daybreak Blue. @paulg: \"This is how things will be for the foreseeable future.\""
  - label: "Anthropic Public Benefit Fund starts with 5% of shares"
    text: "Up to 2% more for every 50% rise in value over a baseline; with founder and employee pledges, roughly 20% of shares go to the public good. Elon Musk replied that the shares should go directly to the public."
  - label: "DeepSeek's new Flash, third-party results: 19x cheaper"
    text: "V4.1-Flash-1017 scores 75/100 on the Browser Use benchmark, tying Opus 5.5 at 19x lower cost per task, and is now the #1 open model on Code Arena WebDev."
products: [OpenCode, Daybreak Blue, Anthropic Public Benefit Fund, Claude, Grok Bot, Codex, dot, ChatGPT Sites, DeepSeek-V4.1-Flash-1017, T3 Code, ADEMark, pstack, aurora-alpha, vLLM, Qwen3.8, Vercel AI Gateway]
stats:
  - value: "48 hours"
    caption: "How long OpenCode has been under continuous attack (per @thdxr)"
  - value: "5%"
    caption: "Share of Anthropic stock initially committed to the Public Benefit Fund"
  - value: "19x"
    caption: "How much cheaper DeepSeek's new Flash is than Opus 5.5 on the Browser Use benchmark"
stat:
  value: "48 hours"
  caption: "How long OpenCode has been under continuous attack (per @thdxr)"
---

# AI Twitter/X Highlights Digest · 2026-10-19 (Mon)


## Today's Highlights

1. **OpenCode under attack for 48 hours**: After its key-leak incident, @thdxr says attackers have been hitting OpenCode "non stop" for the **past 48 hours**; the frontier models used for defense started refusing mid-investigation, and things only improved after OpenCode got access to OpenAI's **Daybreak Blue** defender program. @paulg quoted it: "This is how things will be for the foreseeable future."  
2. **Anthropic commits 5% of its shares to a public benefit fund**: The Anthropic Public Benefit Fund starts with **5%** of shares, with up to 2% more for every 50% rise in value over a baseline; together with founder and employee pledges, roughly **20%** of shares are committed to the public good. @elonmusk replied that the shares should go "directly to the public".  
3. **Third-party results for DeepSeek's new Flash**: @browser_use measured V4.1-Flash-1017 tying Opus 5.5 on long-horizon browser tasks at **19x lower cost**; @arena says it is now the **#1 open model** on Code Arena WebDev.

---

## 1. OpenCode: 48 hours of continuous attacks, and defense models that refused mid-incident

**Key points**: Yesterday OpenCode disclosed its key-leak incident (see the 10-18 issue); today brought the follow-up. @thdxr says "they've been non stop trying to attack our systems for the past **48 hours**". A side effect is that everything is getting hardened, "but damn we basically need agents going 24/7, because that's what they have". The post drew 7.8k likes, nearly 1,000 bookmarks and over 1M views. @paulg quoted it: "This is how things will be for the foreseeable future." When @RhysSullivan asked whether frontier models' cyber safeguards had blocked him, @thdxr said it was frustrating mid-incident: the models "did quite a bit and then started refusing", but they now have access to **Daybreak Blue**, "so it's better". (Verified: Daybreak Blue is OpenAI's "Trusted Access for Cyber" program for defenders, which lowers refusals on security work after approval; it is not a new model.) @AndrewCurran_ pointed out that Hugging Face hit the same problem earlier: analyzing an attack during defense tripped the models' safety guardrails (3.8k likes); @ai_for_success called it "an absolute shame". The same night @thdxr shared the "fun news" the incident had delayed: OpenCode ran its first test on a new GPU rack with its own DeepSeek inference setup, and the price/perf is "better than every single vendor that we've found", with more optimization still to come (3.2k likes).

**Why it matters**: Attackers run agents around the clock while defenders' models can stall on guardrails mid-incident, so "green-lighting defenders" is becoming a product problem model vendors have to solve. OpenCode's in-house inference also shows how open weights give tool companies a way around API vendors.

- thdxr: 48 hours of nonstop attacks: https://x.com/thdxr/status/2111790511409258796  
- paulg: "This is how things will be for the foreseeable future": https://x.com/paulg/status/2111823339953991832  
- thdxr: models refused mid-incident, Daybreak Blue helps: https://x.com/thdxr/status/2111831348336091179  
- AndrewCurran_: the same problem Hugging Face hit: https://x.com/AndrewCurran_/status/2111837963214794940  
- ai_for_success: guardrails blocking defenders: https://x.com/ai_for_success/status/2111844853256761438  
- thdxr: in-house DeepSeek inference rack: https://x.com/thdxr/status/2111849415204065611

![thdxr's replies on the sustained attack and Daybreak Blue](/images/twitter-hots/2026-10-19/01-opencode-attack.jpg)

---

## 2. Anthropic: 5% of its shares go to a public benefit fund, and Claude's finance feature leaks again

**Key points**: @AnthropicAI announced the **Anthropic Public Benefit Fund**, a wholly owned LLC. Subject to stockholder approval, **5%** of Anthropic's shares are committed now, and for every 50% increase in the company's value over a set baseline the board can add up to another 2%. Combined with the co-founders' pledge to donate 80% of their equity and an equity-matching program that about half of employees take part in, roughly **20%** of Anthropic's shares are committed to the public good. The post drew more than 10k likes and nearly 2M views. The official blog post (October 18) says the fund might make large donations to traditional nonprofits or "direct distributions to specific populations", citing AI's impact on the labor market as one example (Anthropic has already committed $200 million there); none of the fund's Anthropic equity will be used for lobbying or political giving. @AndrewCurran_ reads "direct distributions" as something like a self-directed global UBI (his own interpretation). @elonmusk replied: "I recommend giving the shares directly to the public" (15k likes). On the product side, @testingcatalog again spotted Claude preparing a **Personal Finance** feature that connects bank data through Plaid and builds dashboards on top of it; it was called "Claude Money" during development and has not been announced. @emollick noted that for all the acceleration Anthropic reports in coding, you still can't change your email in Claude, and the official advice is to delete your account.

**Why it matters**: The share committed to public benefit grows as the valuation rises; Anthropic says it will share the fund's governance and valuation milestones in the coming months. If the finance feature ships, Claude will be handling users' bank data directly.

- AnthropicAI: Public Benefit Fund: https://x.com/AnthropicAI/status/2111881963657412903  
- elonmusk: "giving the shares directly to the public": https://x.com/elonmusk/status/2111914396490604547  
- AndrewCurran_: "direct distributions" sound like UBI: https://x.com/AndrewCurran_/status/2111889465438601604  
- testingcatalog: Claude Personal Finance: https://x.com/testingcatalog/status/2111944960652034447  
- AndrewCurran_: "Claude Monet": https://x.com/AndrewCurran_/status/2111951546657493349  
- emollick: changing your email means deleting your account: https://x.com/emollick/status/2111925398548193574

![The "direct distributions" passage in Anthropic's blog post](/images/twitter-hots/2026-10-19/02-anthropic-fund.jpg)

---

## 3. Grok Bot: a string of Musk posts, and a bot that phones restaurants for you

**Key points**: On the morning of October 18, @elonmusk posted several times: quoting @mark_k ("Grok Bot has improved so much lately"), he said the team makes "around **20 improvements** per day" to Grok Bot (15k likes); to someone suggesting a Grok Bot class for new users he replied "Sure" (18k likes, 6.8M views); and he quoted @melvindvivas's upgrade list with a single word, "Upgrades". That list (3x faster computer tasks, replies in less than half the time, faster voice with better memory, X Chat access, new connectors such as Robinhood / Coinbase / Trello) covers the speed-up that shipped on October 17 (covered in the 10-17 issue); this is Musk boosting it again. The new use case comes from @BrianRoemmele, who built a Grok Bot whose only job is to book restaurant tables by phone. Give it the restaurant, party size and time, and it finds the number itself, asks how flexible you are on time, whose name to book under and what callback number to give, reads everything back and waits for your OK before dialing; afterwards it reports in plain English, quotes what the restaurant said, and can add the booking to your calendar. He uses a third-party calling service, ClawCall, with guardrails: no credit cards, no unprompted calls, one call at a time. Musk quoted it: "Grok Bot can call restaurants by phone and book you a table" (7k likes). In the Chinese community, @fankaishuoai says he wants to upgrade to the $200 plan: Bot handles small jobs itself, hands big ones to Cursor cloud agents and reviews the results, all from his phone. He also open-sourced a set of scripts that install a local agent (Pi, Codex, Claude Code or OpenCode) on the Bot's cloud computer for heavy work, number and track each task, and wake the Bot via webhook to check and report when a task finishes, saving plan quota. In another post his personal advice is to turn off "run on this computer" and "route traffic through this computer" right after installing the desktop app. @theo had his Grok Bot go through community T3 Code PRs, and @blueemi99 says an always-on assistant like this is the one thing Anthropic is missing.

**Why it matters**: Personal agents are moving from working inside a chat box to real-world tasks like phone calls and dispatching other agents; guardrails and isolating local permissions have become lessons users are writing up for each other.

- elonmusk: about 20 improvements a day: https://x.com/elonmusk/status/2111642151138546118  
- elonmusk: "Sure" to a Grok Bot class: https://x.com/elonmusk/status/2111642226774417627  
- elonmusk: "Upgrades": https://x.com/elonmusk/status/2111642949071364231  
- elonmusk: booking restaurants by phone: https://x.com/elonmusk/status/2111867437238853726  
- BrianRoemmele: a restaurant-booking Grok Bot: https://x.com/BrianRoemmele/status/2111812467500458135  
- fankaishuoai: big jobs go to Cursor cloud agents: https://x.com/fankaishuoai/status/2111848026100670569  
- fankaishuoai: local agent + webhook wake-ups: https://x.com/fankaishuoai/status/2111737569277104150  
- fankaishuoai: two security settings: https://x.com/fankaishuoai/status/2111740064409756037  
- theo: Grok Bot triages PRs: https://x.com/theo/status/2111647825201422742  
- blueemi99: Anthropic needs an always-on assistant: https://x.com/blueemi99/status/2111852373844934847

![Image from BrianRoemmele's restaurant-booking Grok Bot post](/images/twitter-hots/2026-10-19/03-grok-bot.jpg)

---

## 4. Codex: limit resets become a street meme, dots hold off on the EU

**Key points**: @thsottiaux: "People have escaped the TL and are asking me for resets on the street now. I'll make little cards to hand out" (6.5k likes). His midnight "What's cooking today" drew **2,281** replies. @Similarweb published its September ranking of X account pages by traffic share, with @thsottiaux at #1, ahead of @FabrizioRomano and @elonmusk; @testingcatalog credits resets, especially "banked resets", plus DevDay comms, adding that "free resets are equal to free tokens". Separately, @argofowl noticed his dot had disappeared from the Codex desktop app, and @thsottiaux explained it's the EU: if you created a dot elsewhere and find yourself in the EU it will keep working, and dots are coming to the EU in the future. Among Chinese users, @turingou briefly saw "Too many requests" across Codex mobile, cloud computer and desktop (a single report); @chijianqiang joked that the reset may have been due to a usage-accounting issue; @HiTw93 described a cycle: Codex resets right after you burn through it, and when one Claude account runs low another is back at 100%. On the usage side, @shao__meng built a typing game with a single Codex Goal in **20 minutes** and deployed it to ChatGPT Sites, replacing a ¥128 app; @turingou had Codex design a scanner stand and drive his Bambu Lab 3D printer to produce it.

**Why it matters**: Limit resets have become one of OpenAI's most effective growth levers and are making "tokens are money" visible to a wider public; the EU restriction on dots shows compliance is starting to shape when personal agents can launch.

- thsottiaux: asked for resets on the street: https://x.com/thsottiaux/status/2111918768733753664  
- thsottiaux: "What's cooking today": https://x.com/thsottiaux/status/2111849858374177222  
- Similarweb: September X account traffic ranking: https://x.com/Similarweb/status/2111782638830653489  
- testingcatalog: the attention resets bring: https://x.com/testingcatalog/status/2111791554310328816  
- argofowl: my dot disappeared: https://x.com/argofowl/status/2111772162314944637  
- thsottiaux: dots and the EU: https://x.com/thsottiaux/status/2111832959842161136  
- turingou: "Too many requests": https://x.com/turingou/status/2111713563870195756  
- chijianqiang: reset possibly due to usage accounting: https://x.com/chijianqiang/status/2111649326443450626  
- HiTw93: the quota cycle: https://x.com/HiTw93/status/2111650123944165796  
- shao__meng: a typing game in 20 minutes: https://x.com/shao__meng/status/2111759325379121593  
- turingou: Codex drives a 3D printer: https://x.com/turingou/status/2111674144043745389

![Similarweb: X account pages by traffic share, September](/images/twitter-hots/2026-10-19/04-openai-codex.jpg)

---

## 5. DeepSeek-V4.1-Flash-1017 follow-up: ties Opus 5.5 on browser tasks, #1 open model on WebDev

**Key points**: The model itself shipped on October 17 and was covered in yesterday's issue; today brought third-party evaluations. On its own Browser Use Benchmark v2.1 (180 long-horizon tasks), @browser_use measured V4.1 Flash 1017 at **75/100**, the same as Opus 5.5, at $0.22 vs $2.35 per task, **19x cheaper**; the top score on the chart still belongs to GPT-6.1 Sol (79.6). @arena says it is now the **#1 open model** on Code Arena: WebDev, ahead of Kimi K3 (Max), #12 overall with 1670 points, 52 points above the previous 0910 version, priced at $0.3 / $1.2 per million input / output tokens. @DesignArena has added it too. Reactions aren't uniformly positive: @oran_ge used DeepSeek Harness with the new Flash to make a video and got "garbage after 50 minutes". OpenCode's in-house DeepSeek inference setup is covered in item 1.

**Why it matters**: Beyond DeepSeek's own numbers, third-party leaderboards are sending a consistent signal: on browser-agent and WebDev tasks, open-weights models are closing in on closed flagships at an order-of-magnitude lower price, though real-world results still vary by task.

- browser_use: ties Opus 5.5, 19x cheaper: https://x.com/browser_use/status/2111696102106038319  
- arena: #1 open model on Code Arena WebDev: https://x.com/arena/status/2111894091168682086  
- DesignArena: now on Design Arena: https://x.com/DesignArena/status/2111707218441556057  
- oran_ge: disappointing video result: https://x.com/oran_ge/status/2111608203431776465

![Browser Use benchmark: cost vs. score](/images/twitter-hots/2026-10-19/05-deepseek-flash-followup.jpg)

---

## 6. T3 Code: an agent merges almost 400 perf PRs in 30 hours, and ADEMark sparks a "paid benchmark" dispute

**Key points**: @jullerino says his agent merged **almost 400** PRs focused on web performance over the past 30 hours: 86% fewer renders when another thread streams, up to 35% less JS CPU, a ~10% smaller heap, with mobile next; @theo says the latest nightly is so fast it "almost feels fake, like the data is hard coded". Yesterday's ADE tier list (see the 10-18 issue) also has a sequel: @zqkrq announced **ADEMark**, billed as the first real ADE benchmark: 16 ADEs, same tasks, same machine, tested with every frontier model, measuring tokens, speed and resource usage, with T3 Code, bb, Capy, Paseo, Cursor and more, first results "soon". Then @DavidOndrej1 accused theo of paying the author to run v2 and telling him to hide Cloudroom from it (140k views). @theo denied it: he only asked why T3 Code scored low, learned the test used a 3+ month old version, and the author re-ran with the current version and adjusted on his own; when the author said he wanted to build a real benchmark, theo offered to fund it. "I have no idea what Cloudroom is." @zqkrq also said theo never told him to hide anything and in fact asked him to be 100% transparent; Cloudroom is still in early access and putting it next to long-established tools didn't feel fair, but it will be in the benchmark under the same tests.

**Why it matters**: Letting an agent batch-submit and merge PRs can visibly change a product's performance in 30 hours. ADEMark is funded by the author of one of the products it tests, so whether its methods and data are published will decide how credible it is.

- jullerino: almost 400 PRs merged in 30 hours: https://x.com/jullerino/status/2111698488753078321  
- theo: the nightly almost feels fake: https://x.com/theo/status/2111960247980159232  
- zqkrq: ADEMark preview: https://x.com/zqkrq/status/2111834690340495565  
- DavidOndrej1: accuses theo of having Cloudroom hidden: https://x.com/DavidOndrej1/status/2111884469468893524  
- theo: denial and why he's funding it: https://x.com/theo/status/2111903235166679341  
- zqkrq: theo never told me to hide anything: https://x.com/zqkrq/status/2111887756066738578

![Posts from jullerino, zqkrq and theo](/images/twitter-hots/2026-10-19/06-t3-code-ademark.jpg)

---

## 7. pstack adds a formal-verification skill, and poteto reads the "is chat final?" poll

**Key points**: @poteto shipped **pstack v0.15.27** with a new `/create-formal-verification-skill` (beta). Like the earlier `/create-verification-skill`, it's a meta-skill: based on the properties you want to verify, it creates a new skill and a formal verification suite, for example modeling state machines and concurrent systems in TLA+, or using kani in Rust to check for undefined behavior; newer approaches like Bend need no separate modeling language, with proofs expressed in the type system. She notes formal verification never went mainstream because modeling and writing proofs is hard, but being able to prove code does what you intended "gives your agents superpowers in writing correct software"; TLA+ models created with the skill have already found several bugs in her own code. The post drew 1.2k likes and 801 bookmarks. Yesterday she only teased a new verification skill (see item 7 of the 10-18 issue); this is the actual release. In another post she read the results of her "is chat the final agent UI?" poll, where about 70% said no. She sees two camps: one treats agents as an extension of their own mind, like a cyborg, possibly with brain-computer interfaces eventually removing the input box altogether; the other sees agents as independent beings, in which case talking to them the way we talk to colleagues and family is all you need.

**Why it matters**: "Let the agent prove it's right" is moving beyond tests to mathematical proof; bookmarks at about two-thirds of likes suggest many people plan to actually use it.

- poteto: pstack v0.15.27 formal-verification skill: https://x.com/poteto/status/2111926622278521253  
- poteto: reading the poll results: https://x.com/poteto/status/2111911178503082422

![poteto announces /create-formal-verification-skill](/images/twitter-hots/2026-10-19/07-pstack-formal-verification.jpg)

---

## 8. OpenAI: aurora-*-alpha briefly appears in the API, and turns out to be image models on Arena

**Key points**: On the morning of October 18, @scaling01 and then @AndrewCurran_ spotted three new model IDs in the OpenAI API: **aurora-red-alpha, aurora-green-alpha and aurora-blue-alpha** (AndrewCurran_'s post drew 2.4k likes). scaling01 first guessed they could be specialized Codex models or high-speed versions of GPT-6, since an OpenRouter model called aurora-alpha earlier this year was likely GPT-5.3-Codex-Spark; that afternoon he posted "and they are gone again", and @testingcatalog called it a mistaken rollout. Then @Angaisb_ found three **image models** with the same names on Arena, said pixel art finally looks right, and guessed GPT-Image-3; after testing, @testingcatalog rated green above red, with noticeably better color than gpt-image-2.5-flare; @kimmonismus also concluded they're image models and expects a new GPT Image soon. OpenAI hasn't announced anything; all of this is speculation.

**Why it matters**: The early "new Codex model" guess was corrected by hands-on Arena testing into image models; leaks like this are best left unjudged until someone actually tests them.

- AndrewCurran_: three new models in the API: https://x.com/AndrewCurran_/status/2111656899338973391  
- scaling01: the first guess: https://x.com/scaling01/status/2111653358322729401  
- scaling01: "and they are gone again": https://x.com/scaling01/status/2111741499826450665  
- testingcatalog: likely a mistaken rollout: https://x.com/testingcatalog/status/2111724606927028578  
- Angaisb_: image models on Arena: https://x.com/Angaisb_/status/2111765824449167620  
- testingcatalog: green beats red: https://x.com/testingcatalog/status/2111894437877916032  
- kimmonismus: a new GPT Image may be coming: https://x.com/kimmonismus/status/2111860713035550945

![aurora-green-alpha vs. gpt-image-2.5-flare on Arena](/images/twitter-hots/2026-10-19/08-openai-aurora.jpg)

---

## 9. Local inference: one 3090 runs Qwen3.8 27B up to 4.6x faster, and vLLM v0.32.0 ships

**Key points**: @wccftech reports that a r/LocalLLaMA user got up to **4.6x** faster token generation from a 2020 RTX 3090 running a 27B model, through inference optimizations alone. @superalesha filled in the details: starting at 82 tok/s, he tuned MTP, added a DFlash2 drafter and a lookup drafter, and pushed verification to 16 tokens per step, reaching 382 tok/s on a task that quotes a 25K-token document; in normal chat it's about 133 tok/s, or 1.6x, with context raised to 138K. His argument is that "local AI performance is a software problem, not a hardware problem", and that this kind of tuning only works because the weights are open. (Qwen3.8 27B is an older model released in August; the news is the community's inference tuning.) @vllm_project released **v0.32.0**: 814 commits from 363 contributors (121 first-timers), a new `/v1/systemone` structured-decision endpoint, low-precision KV everywhere (NVFP4 on SM8x/90/12x, FP8 KV by default for GLM-5.x, 4-bit KV on ROCm), a GPU n-gram speculator in Model Runner V2, now default on ROCm, +43–85% req/s with multi-API workers, and 3 security fixes.

**Why it matters**: Software work like speculative decoding and low-precision KV keeps pushing old GPUs and existing clusters further; for teams running open-weights models, upgrading the inference stack is often a better deal than buying new hardware.

- wccftech: 3090 up to 4.6x faster: https://x.com/wccftech/status/2111854820503998917  
- superalesha: the details, and "a software problem": https://x.com/superalesha/status/2111885825218838905  
- vllm_project: v0.32.0 release: https://x.com/vllm_project/status/2111814711956168760

![Image from the RTX 3090 inference speed-up report](/images/twitter-hots/2026-10-19/09-local-inference.jpg)

---

## 10. Usage economics: smarter models no longer win proportionally more usage, and Vercel itemizes agent sessions

**Key points**: @theinformation reports that OpenAI, Anthropic and other leading labs face a growing challenge: better models aren't necessarily attracting more usage. A 10-point intelligence advantage now earns just **20%** more developer traffic, down from nearly 69% in late 2025 (paywalled story; figures as stated in the post). @emollick argues developers will be a small part of total token usage over time, as internal usage stats at both OpenAI and Anthropic show, while for long-running, high-value tasks where verification is harder, higher-"intelligence" models still pay off a lot. @rakyll says that in harness engineering, open source means free distribution: there's almost no way to defend such software unless it contributes to model quality, in which case the model eats it so quickly you end up deleting it all. @Yuchenj_UW joked about software engineering in 2026: Engineer 1 has AI open a PR and asks Engineer 2 for review, Engineer 2 has AI review it and replies "LGTM", and both used the exact same model (534 likes). On the tooling side, @vercel_dev launched a **Sessions** view in AI Gateway logs that groups requests by conversation, showing cost, cache hit rate and the agent that ran it (Vercel's changelog cites Claude Code, Codex and Cursor as examples), with session affinity keeping each turn on the provider holding its prompt cache (changelog dated October 18); @rauchg says the key is owning the *meta*data needed to understand ROI.

**Why it matters**: When leading on benchmarks no longer automatically translates into usage, price, caching and observability become the battleground; per-session accounting is the first step for a team to judge whether an agent is worth it.

- theinformation: a 10-point lead now earns just 20% more traffic: https://x.com/theinformation/status/2111857344296390929  
- emollick: developers will be a small share of token usage: https://x.com/emollick/status/2111884340955062274  
- rakyll: open-source harnesses mean free distribution: https://x.com/rakyll/status/2111842823989539153  
- Yuchenj_UW: two engineers reviewing each other with the same model: https://x.com/Yuchenj_UW/status/2111865993228406978  
- vercel_dev: AI Gateway sessions view: https://x.com/vercel_dev/status/2111865122813784173  
- rauchg: metadata is what lets you understand ROI: https://x.com/rauchg/status/2111871697842495810

![The Sessions view in Vercel AI Gateway](/images/twitter-hots/2026-10-19/10-ai-gateway-sessions.jpg)

---
