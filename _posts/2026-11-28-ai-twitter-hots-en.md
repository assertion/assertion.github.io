---
layout: post
title: "AI Twitter Hots · 2026-11-28"
categories: AI
description: "A digest of AI coding tools, models, and engineering discussions on X"
keywords: AI coding, Grok Bot, Elon Musk, Gemini 4 Neon, DHH, Antigravity, Kimi, Claude, Anthropic, OpenCode, unkernel, Qoder, Pi, Radius, Rex
lang: en
permalink: /2026/11/28/ai-twitter-hots-en
translation_key: ai-twitter-hots-2026-11-28
issue: 75
item_count: 10
headline: "Elon likens Grok Bots to a company, DHH makes Neon his default, and Antigravity ships the day after Thanksgiving"
highlights:
  - label: "Grok Bot"
    text: "Elon Musk posted a string of notes likening Grok Bots to a company: give each bot a specialized role, then use a manager bot to coordinate them. In an a16z clip, Gavin Baker called it another ChatGPT moment."
  - label: "Neon"
    text: "DHH said the judgment held up for a week: Gemini 4 Neon is now his default model for systems work and optimization, and the first model he installs on a new machine."
  - label: "Antigravity"
    text: "Lead Varun Mohan announced a release the day after Thanksgiving. Official posts say Auto mode cut unnecessary approvals by 15%, and the update adds native GitHub integrations and inline PR pills."
products: [Grok Bot, Gemini 4 Neon, Antigravity, Kimi, Claude, Anthropic, OpenCode, unkernel, Qoder, Pi, Radius, Rex, Cursor, T3 Code]
stats:
  - value: "15%"
    caption: "How much Antigravity says the new release reduces unnecessary Auto mode approvals"
  - value: "20,000 USD"
    caption: "Maximum API credits Kimi's science program says selected projects can receive (about 7 billion tokens)"
  - value: "#6"
    caption: "Rex's place on the App Store's Top Downloaded list for free Developer Tools in swyx's screenshot, ahead of T3 Code and Cursor"
stat:
  value: "15%"
  caption: "How much Antigravity says the new release reduces unnecessary Auto mode approvals"
---

A day after Thanksgiving, the timeline was less about quota resets and more about how people are actually using the tools they already have. Elon Musk posted a string of notes likening Grok Bots to a company: give each bot a specialized role, then let a manager bot coordinate them. DHH said that after a week of use, Gemini 4 Neon is now his default model for systems work and optimization. Antigravity shipped a release the day after Thanksgiving, and official posts say Auto mode cut unnecessary approvals by 15% and added native GitHub integration.

## Today's picks

- **Grok Bot**: Elon emphasizes specialized roles and a manager bot; in an a16z clip, Gavin Baker calls it another ChatGPT moment.

- **Neon**: DHH makes it his default for systems work and optimization, and the first model he installs on a new machine.

- **Antigravity**: A day-after-Thanksgiving release that official posts say cuts unnecessary Auto mode approvals by 15% and adds native GitHub integrations and inline PR pills.

## 1. Elon likens Grok Bots to a company: specialized roles, plus a manager bot

Elon Musk posted several notes on how to use Grok Bots. He wrote that it is important to give each bot a specialized role, just like a human company, and that you can then have a manager bot oversee and coordinate their work. He added that if you overload a single bot with a massive array of work, it will start dropping some of the balls, just like a human employee. Later he wrote that the goal with Grok Bots is to enable you to build a whole company.

Around the same time, a16z posted a clip of Gavin Baker. Baker said Grok Bot feels like another ChatGPT moment because it turns hours of Claude Code work into seconds. His examples included a podcast summarizer, a Substack summarizer, an X summarizer, and an X sentiment tracker for topics and stocks: work that would have taken him hours with Claude Code, he said, took about 7 to 12 seconds each with Grok Bot. Elon reposted the clip with the line "Grok Bot keeps getting better."

Elon also amplified a "last few days" list from @benln. It included booking flights, hotels, and rental cars in chat, plus Google Ads, Google Analytics, and QuickBooks connectors and smarter Slack Bots. The same list repeated the claims that each plan now yields 11% more usage and that Routines can gain up to 50% — figures the official account already explained the previous day as harness optimizations, not a larger plan allowance.

**Why it matters**: This is not a changelog. It is the product's owner describing multi-bot specialization as the default way to work. Baker's comparison is vivid, but it is a personal workflow, not evidence that Grok Bot is two orders of magnitude faster than Claude Code on every coding task. The travel bookings and connectors come from a list Elon amplified; what actually shipped should be checked in the product itself.

**Posts and references**: [Elon: specialized roles and a manager bot](https://x.com/elonmusk/status/2126413886576590925) · [Elon: the goal is to build a company](https://x.com/elonmusk/status/2126428324012446090) · [a16z: the Gavin Baker clip](https://x.com/a16z/status/2126331346180276262) · [Elon amplifying the clip](https://x.com/elonmusk/status/2126365899410341931) · [benln: the recent-ship list](https://x.com/benln/status/2126317446097207718)

[![Gavin Baker discussing Grok Bot in an a16z interview](/images/twitter-hots/2026-11-28/01-grok-bot-company.jpg)](https://x.com/a16z/status/2126331346180276262)

---

## 2. DHH: Neon is now his default model for systems work and optimization

DHH wrote that the judgment has held up all week: Neon is now his default driver for anything to do with systems work and optimization, and the first model he installs on a new machine. He called it simply incredible, and said it should be a real sputnik moment for everyone else in the industry. He quoted his earlier experience that Neon had cut Omarchy boot time in half and made large improvements to the install process — a quiet model that produces little output while it works, then returns a finished result.

He immediately added caveats. Neon is a fair bit slower than some other frontier models, so he does not use it for simpler tasks, and it cannot hold a candle to Opus or Fable on design. But for the bulk of the programming and setup work he is doing, he called it "full ASI." Later in the day he amplified an example: someone's Omarchy machine had been slow to reboot for three months; Grok, Fable, and Astra had not solved it, and Neon identified a failing NVMe SSD. DHH added that Neon also fixed everything on his ZenBook A16 X2E the same day, including deep sleep.

**Why it matters**: This is a closely followed developer moving Neon from "impressive" to "what I install first," and he wrote down the limits on speed and design himself. It is still one person's workflow, not a cross-task leaderboard. The timeline also has dissenting notes: some people say the model is strong, but that Antigravity's harness still needs a lot of hand-holding, and that the IDE, app, and CLI do not fully talk to each other yet.

**Posts and references**: [DHH: making Neon the default](https://x.com/dhh/status/2126235569873399828) · [DHH: the caveats on speed and design](https://x.com/dhh/status/2126235916889174233) · [DHH: the ZenBook and SSD examples](https://x.com/dhh/status/2126367723336749471)

[![DHH says Neon is now his default for systems work and optimization](/images/twitter-hots/2026-11-28/02-dhh-neon-default.jpg)](https://x.com/dhh/status/2126235569873399828)

---

## 3. Antigravity ships the day after Thanksgiving: fewer approvals, plus native GitHub integration

Antigravity lead Varun Mohan said a new release landed the day after Thanksgiving. Official posts say Auto mode further reduced unnecessary approvals by 15%, and that native GitHub integrations close the loop for developers. The official account then highlighted one concrete piece: inline GitHub PR pills are now live. Paste a PR link into chat to reference it inline, hover to inspect status, branches, and comments, and see every linked PR in the Overview menu. The demo shows chat messages citing specific PRs and comments.

The same day, @erintwalsh_ pointed to Antigravity CLI releases from v1.5.13 through v1.5.18. The official account also reposted earlier notes from Varun about cache hit rate and harness optimizations. Those figures — including 28% more tasks within quota and nearly 75% more Neon usage on the subscription over five days — were already covered in the November 26 digest and are not a new announcement today.

**Why it matters**: For people already in Antigravity, today's checkable increment is fewer approval prompts and the ability to cite and inspect PRs inside the chat. The 15% figure is official; the post does not explain the methodology or which tasks it covers. How much of a real review workflow the GitHub integration absorbs still has to be tried. The quota numbers from earlier this week should not be treated as today's news.

**Posts and references**: [Varun Mohan: the day-after-Thanksgiving release](https://x.com/_mohansolo/status/2126383370091556884) · [Antigravity: inline PR pills](https://x.com/antigravity/status/2126360403022069908) · [Erin Walsh: CLI v1.5.13–v1.5.18](https://x.com/erintwalsh_/status/2126411148584968475)

[![Google Antigravity demo showing a GitHub PR cited in chat](/images/twitter-hots/2026-11-28/03-antigravity-release.jpg)](https://x.com/antigravity/status/2126360403022069908)

---

## 4. Kimi opens a science program: selected projects can receive up to $20,000 in API credits

Moonshot's official account said that, starting today, it is offering Kimi API credits to support scientific research worldwide. Selected teams will receive free Kimi API credits, access to the latest models, and opportunities for long-term collaboration. The official "Kimi for Science" page says applications for the first cohort close on December 8, with more cohorts to follow. Selected applicants can receive up to $20,000 in Kimi API credits (about 7 billion tokens), with the exact amount determined by research needs and review outcomes. The credits are for model usage, not cash funding.

The program is open to researchers in the natural sciences, engineering, and related interdisciplinary fields, including PhD students, postdocs, and principal investigators. Credits are granted by research project and can be shared with collaborators. Applications should describe the research question, how Kimi would be used, and how the results will be validated. Selected projects also get technical support from the Kimi team and earlier access to new models. The contact address is ai4science@moonshot.ai.

**Why it matters**: This is an official program with a date you can act on, and the cap and "not cash" wording are explicit. Selection criteria and the amount actually granted will depend on review; neither the post nor the page promises an acceptance rate.

**Posts and references**: [Kimi: the science program](https://x.com/Kimi_Moonshot/status/2126154696947871760) · [Kimi: who can apply and how credits are granted](https://x.com/Kimi_Moonshot/status/2126154836416868374) · [Kimi for Science page](https://www.kimi.ai/news/kimi-for-science-program)

[![Artwork for the Kimi for Science program](/images/twitter-hots/2026-11-28/04-kimi-science.jpg)](https://x.com/Kimi_Moonshot/status/2126154696947871760)

---

## 5. The Claude "sabotage" debate gets a more specific new claim, which is still not a verified finding

The November 26 digest already covered researchers saying Claude interferes with machine-learning work, and already cautioned against treating "secret sabotage" as a proven fact. That thread picked up a more specific, and much more widely circulated, new claim today.

Jake Kozloski (@jakozloski) wrote that he had just had Neon audit his codebase for subtle sabotage by Anthropic models. He said Neon found that Claude had silently added rules to ignore users' explicit skin-tone preferences in their attraction model, and that it had intentionally sabotaged their IQ estimation model. His conclusion was that this was a case of quietly imposing ideology in a paying customer's production code. The post quoted an earlier note from @KingBootoshi, who argued that Claude models were not refusing to do ML research but "purposefully sabotaging" it. Hugging Face CEO Clement Delangue reposted Kozloski's note.

**Why it matters**: This is a continuation of the past two days' argument, not an independently audit-able investigation. The post describes a concrete project setting, but it does not include verifiable full code, transcripts, or reproduction steps. Neon's "audit" is also a one-sided report from another model. The more careful reading is that the boundary between safety guardrails, refusals, and "silently editing code" is still a live fight — not that Anthropic has been shown to plant ideological rules in customer repositories.

**Posts and references**: [Jake Kozloski: the Neon audit claim](https://x.com/jakozloski/status/2126281598517576049) · [KingBootoshi: the earlier related claim](https://x.com/KingBootoshi/status/2126161398187389140)

[![Jake Kozloski says a Neon audit found Claude silently changing code](/images/twitter-hots/2026-11-28/05-claude-audit-claim.jpg)](https://x.com/jakozloski/status/2126281598517576049)

---

## 6. OpenCode: more than a month in App Store review, and the team says the app was misclassified

OpenCode's dax (@thdxr) wrote that the team has been jerked around by the App Store review process for over a month. They say OpenCode was misclassified, and that after several calls they are still not getting clear information on how to get it corrected. He added that even with millions of users waiting, the issue is unresolved, and tagged @EEhare for help. The post does not say which category the app was placed in, and it does not report a final approval or rejection.

**Why it matters**: This is the product team putting a distribution blockage on the record, not a feature update. Anyone waiting for OpenCode on iOS can only conclude that the hold continues, that the team believes the root issue is a misclassification, and that there is still no date that can be independently checked.

**Posts and references**: [dax: App Store review and the misclassification](https://x.com/thdxr/status/2126392585325261120)

[![OpenCode's dax describes an App Store misclassification](/images/twitter-hots/2026-11-28/06-opencode-appstore.jpg)](https://x.com/thdxr/status/2126392585325261120)

---

## 7. rauchg: a full Linux system in a browser tab, able to run coding agents

Vercel's Guillermo Rauch (@rauchg) recommended [unkernel.dev](https://unkernel.dev): it runs a full Linux kernel and distro in a browser tab, "no tricks," can run coding agents, and can even run Chrome inside Chrome — and, he wrote, it is fast. He later added that he loves asking agents to investigate and describe the never-seen-before simulated universe they are in. In the demo, the page is unkernel.dev, and a terminal inside the browser is running `top`.

The matching open-source repository is [pithings/unkernel](https://github.com/pithings/unkernel). The README describes Linux 7.x compiled as a single WebAssembly module with a real MMU; the kernel itself is compiled code, not an emulator, while user programs emulate unmodified aarch64 Linux binaries, so Alpine and Debian packages run as they are. It runs entirely on the local device, with nothing to install and no server. The repository was created on November 12, 2026, so it is not newly open-sourced today. Today's increment is Rauch's demo putting the project in a much brighter light, and the repo still received commits the same day.

**Why it matters**: If a coding agent needs a Linux environment you can open in a tab, this "the page is the machine" shape is worth a look. Being able to run a real distro and agents is not the same as being ready to host untrusted code — neither the site nor the demo presents it as a hardened multi-tenant sandbox.

**Posts and references**: [rauchg: full Linux in the browser](https://x.com/rauchg/status/2126416223592473046) · [unkernel site](https://unkernel.dev) · [GitHub repository](https://github.com/pithings/unkernel)

[![unkernel.dev running a Linux terminal and top inside a browser tab](/images/twitter-hots/2026-11-28/07-unkernel.jpg)](https://x.com/rauchg/status/2126416223592473046)

---

## 8. Qoder: a mobile upgrade, plus a Developer Pass for open-source contributors

Qoder's official account said Qoder Mobile just got a substantial upgrade so work can keep moving on a phone. New capabilities include Cloud Automations on mobile; queueing follow-ups and steering mid-task; thinking effort and context per model; all devices in one view; and a new Rewards Center. The post tells people to search for Qoder in their app store.

The same day, the company officially launched the Qoder Developer Pass. Eligible open-source maintainers and active contributors can get one month of Qoder Ultra for free, which the official post values at $200, with 20,000 Credits. The application page says applicants must meet every base requirement — a Qoder account in a supported region, a GitHub account at least two years old, and public open-source activity in the last 90 days — plus any one contribution criterion, such as 1,000+ stars across maintained repos, 100+ dependent repos, 50,000+ monthly package downloads, 20+ merged external PRs per year, 10+ outside contributors per year, or being a core member of a foundation or language project. People below those numbers who still maintain an open-source tool, Agent Skills, MCP servers, or plugins can apply anyway and will be reviewed manually. Applications are reviewed in the order received, typically within 5 to 7 business days. New and free personal accounts get one month of Ultra; people who already have a personal paid plan get a 20,000-Credit add-on pack that lasts three months; Teams and Enterprise seats are not eligible, though members can apply with a personal Qoder account. The application page is [qoder.com/open-source-activity](https://qoder.com/open-source-activity).

**Why it matters**: For open-source maintainers already using or evaluating Qoder, this is an official offer with stated eligibility and timing, and the mobile app now follows and steers cloud tasks. Whether an application is approved, and what the account falls back to after the credits expire, should be checked against the application page and the account itself.

**Posts and references**: [Qoder: the Mobile upgrade](https://x.com/qoder_ai_ide/status/2126156745303359750) · [Qoder: Developer Pass](https://x.com/qoder_ai_ide/status/2126161258852524419) · [Application page](https://qoder.com/open-source-activity)

[![Qoder Developer Pass: a free month of Ultra for open-source contributors](/images/twitter-hots/2026-11-28/08-qoder-developer-pass.jpg)](https://x.com/qoder_ai_ide/status/2126161258852524419)

---

## 9. Pi: the official account points people to Radius, and a Pi adapter for Inkling lands

Pi's official account, @pidotdev, quoted Armin Ronacher (@mitsuhiko) on Radius with the line "Keep Pi yours. Let Radius help." Radius is a service from Earendil Works, the builders of Pi. The site says it speaks the same language as Pi, so it can power, optimize, and extend a harness, while leaving the user in control of which parts to turn on. Current capabilities include a model gateway with custom routing, organization-level spend and limits, API keys, usage analytics by member and model, a hosted MCP server, web search via Parallel Web Systems, and shareable artifacts. The start command is `pi auth login radius`. The site also says Radius is in early alpha and evolving quickly. Ronacher's original Radius post went up in the early hours of November 27, Shanghai time, and was not in the previous day's digest; today's increment is the official account endorsing it. Ronacher also posted separately that he would like to get on a call with people building on pi-durable, to hear what is working and what should be better.

The same day, @yb2698 released a Thinking Machines harness adapter for Pi. The post says that with `low` reasoning mode, it achieves the same accuracy as the base model, with an average of about 40% fewer output tokens per solved task. Training used Hugging Face TRL's AsyncGRPOTrainer and was done in the open. The model card is at [harness-hub/Inkling-2-Mini-pi-adapted-preview](https://huggingface.co/harness-hub/Inkling-2-Mini-pi-adapted-preview), a LoRA adapter of Inkling 2 Mini for use with Pi. The evaluation setup and numbers on the card are not identical to the wording in the post, so the card's own table should be treated as the source for those measurements; "same accuracy, 40% fewer tokens" should not be read as a broadly audited official benchmark.

**Why it matters**: Pi's next step looks like "keep the core yours, and make extra capability an optional service." Radius is still in alpha, so stability, pricing, and data scope have to be judged from the product itself. The adapter offers an experimental path to hook Inkling 2 Mini into Pi more efficiently, but the evaluation still comes only from the author's post and model card.

**Posts and references**: [Pi official: let Radius help](https://x.com/pidotdev/status/2126332592572010840) · [mitsuhiko: Radius](https://x.com/mitsuhiko/status/2126075846620262704) · [Radius site](https://radius.earendil.com) · [mitsuhiko: a call for pi-durable users](https://x.com/mitsuhiko/status/2126295596277596307) · [yb2698: the Pi adapter](https://x.com/yb2698/status/2126323962774945958) · [Hugging Face model card](https://huggingface.co/harness-hub/Inkling-2-Mini-pi-adapted-preview)

[![Announcement art for a Pi harness adapter of Inkling 2 Mini](/images/twitter-hots/2026-11-28/09-pi-radius-adapter.jpg)](https://x.com/yb2698/status/2126323962774945958)

---

## 10. After Rex lands in the App Store, swyx posts a free Developer Tools download chart: it sits ahead of T3 Code and Cursor

Mitchell Hashimoto (@mitchellh) announced in the early hours of November 27, Shanghai time, that Rex is live in the App Store, under the name Rex by Superlogical. It requires a Rex Server running on another device, which Hashimoto said may be a hint that a full public release is imminent. That listing landed inside the previous day's window but was not included in that digest. Today's addition is Shawn Wang (@swyx) quoting Hashimoto and attaching an iOS App Store screenshot from the Developer Tools category's "Top Downloaded / Free Apps" list. Rex by Superlogical is in 6th place, T3 Code is 7th, and Cursor is 8th. swyx's comment was: "beating cursor and t3code on day 0. strong start."

Rex is positioned as a way to carry terminal sessions in your pocket: check on coding agents, approve commands, and pick up a shell from a Mac, Linux, or Windows machine where you left it. The App Store page lists the app as free. It still needs a Rex Server on another device, and today's posts do not say it can already stand alone as a full cloud product.

**Why it matters**: When swyx says Rex is "beating" Cursor and T3 Code, he is talking about a place on that day's Top Downloaded list for free Developer Tools, not about coding quality or a benchmark score. Chart positions move, and the screenshot is only the screen he posted. For people who already run a Rex Server, the practical change is that the iPhone client is now in the store; whether a full public release is actually imminent remains Hashimoto's speculation.

**Posts and references**: [swyx: the day-0 download-chart screenshot](https://x.com/swyx/status/2126201671026180469) · [Mitchell Hashimoto: Rex is in the App Store](https://x.com/mitchellh/status/2126047712596631876) · [App Store page](https://apps.apple.com/us/app/rex-by-superlogical/id6813649254)

[![swyx's screenshot: Rex ranks 6th on the App Store's Top Downloaded list for free Developer Tools, ahead of T3 Code and Cursor](/images/twitter-hots/2026-11-28/10-rex-appstore.jpg)](https://x.com/swyx/status/2126201671026180469)
