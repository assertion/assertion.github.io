---
layout: post
title: AI Twitter Highlights · 2026-10-22
categories: AI
description: High-signal AI coding / model / product discussions from X in the past day
keywords: AI, Twitter, Claude Duet, Anthropic, Opus 5.5, PHP2Shell, PHP, OpenAI, Patch the Planet, Codex, LiteLLM, Railway, GitLab, Node.js, Google Cloud, Dots, GPT-Rosalind, Grok Bot, Pages, Recursive, Flint, GitHub Next, PDD Kit, Chopin, VS Code, Copilot, Gemini 4 Argon, T3 Code, Vercel, Pi, DeepSeek-V4.1-Flash, Token Pass, OpenCode, Muse Wonder
lang: en
translation_key: ai-twitter-hots-2026-10-22
permalink: /2026/10/22/ai-twitter-hots-en
issue: 41
item_count: 10
headline: "Anthropic launches Claude Duet, a proactive agent; AI uncovers a PHP flaw hitting ~70% of websites; OpenAI models and Codex come to Google Cloud"
highlights:
  - label: "Claude Duet: Anthropic's proactive agent"
    text: "A standalone app built around Opus 5.5 that comes to you first, keeps working when you step away, and asks before acting on your behalf; waitlist for US Pro/Max users, sharing existing plan limits."
  - label: "PHP2Shell: AI finds a flaw affecting ~70% of websites"
    text: "Researchers using OpenAI models, and Wiz independently, found two remote-code-execution bugs in the PHP engine affecting every version since 5.4; the same day brought a poisoned LiteLLM release and a Railway environment-variable breach."
  - label: "OpenAI models and Codex on Google Cloud"
    text: "Frontier models and Codex agentic workflows are coming to Google Cloud Model Garden, payable from GCP spend commitments, and later to Antigravity and the Gemini Agent."
products: [Claude Duet, Opus 5.5, PHP, Codex, LiteLLM, Railway, GitLab, Node.js, Google Cloud, Model Garden, Antigravity, Dots, GPT-Rosalind, Grok Bot, Pages, Flint, Pi, OpenCode, PDD Kit, Chopin, VS Code, GitHub Copilot, Gemini 4 Argon, T3 Code, Vercel Token Pass, DeepSeek-V4.1-Flash, Muse Wonder]
stats:
  - value: "70%"
    caption: "Estimated share of websites running on PHP; PHP2Shell affects every version since PHP 5.4"
  - value: "6,000+"
    caption: "Claude Marketplace connectors and plugins available to Claude Duet"
  - value: "2.5B"
    caption: "Active parameters per token in Recursive Flint (39.8B total)"
stat:
  value: "70%"
  caption: "Estimated share of websites running on PHP; PHP2Shell affects every version since PHP 5.4"
---

# AI Twitter/X Highlights Digest · 2026-10-22 (Thu)


## Today's Highlights

1. **Anthropic launches Claude Duet, a proactive agent**: A standalone app built around Opus 5.5 that tells you what needs your attention, keeps working when you step away, and checks with you before sending messages or making payments; US Pro/Max users can join the waitlist now.  
2. **AI digs up a PHP flaw affecting ~70% of websites**: The two PHP2Shell CVEs cover every PHP version since 5.4, and OpenAI shipped a Codex skill to check your site; the same day LiteLLM was poisoned and Railway said environment variables may have been stolen, leaving developers asking "what is going on".  
3. **OpenAI models and Codex come to Google Cloud**: Enterprises can buy OpenAI models in Model Garden and draw down GCP commitments; Antigravity and the Gemini Agent come next.

---

## 1. Claude Duet: Anthropic's proactive personal agent

**Key points**: @claudeai opened a research preview of **Claude Duet**, a new app where Claude works as a proactive agent: it brings you what needs your attention, completes tasks you ask for, keeps working when you step away, and checks with you before acting on your behalf (33k likes, 10k bookmarks). Anthropic says it was designed around **Opus 5.5** and carries over the memory, skills and connected apps from your Claude account, with access to **6,000+** connectors and plugins in the Claude Marketplace (Gmail, Slack, Shopify and more). According to Anthropic's announcement article, Duet has a virtual machine with its own browser, so it keeps going when your phone and laptop are off; it checks your connected accounts every few hours (checking nonstop would burn through plan limits much faster, Anthropic says); and before it sends a message, makes a payment, signs a document or deletes anything, it shows exactly what it's about to do and waits for approval. Trading securities and moving money between accounts are off-limits even with approval. Access is by waitlist for US Pro and Max users, it shares plan usage limits with the rest of Claude, and Team/Enterprise plans aren't eligible yet. @mikeyk says he's used it for a few weeks: it drafted questions for a fireside chat, watched Slack over the weekend so he could log off, and told him about the new Neal Stephenson book, then ordered it from his local bookstore once he asked. @stripe announced that Duet can make purchases with Link and issue refunds and read business trends through the Stripe MCP. @danshipper, after two weeks of testing, called it the first personal agent he'd call a "pro tool"; he went from mostly ChatGPT to roughly 50/50 between ChatGPT and Claude. His caveats: it can see the Claude sessions on his computers but can't direct them, its email drafts are worse than dot's, and voice is transcription only. @petergyang had early access and posted a video review.

**Why it matters**: After Grok Bot, Muse and Dots, Anthropic has formally entered the always-on personal agent race. Duet's design centers on being "proactive, but ask before important actions", with periodic check-ins to keep usage under control.

- claudeai: Claude Duet research preview: https://x.com/claudeai/status/2112984664256241837  
- claudeai: designed around Opus 5.5: https://x.com/claudeai/status/2112984666437546104  
- mikeyk: a few weeks of using it: https://x.com/mikeyk/status/2112986418503110772  
- stripe: Link purchases and the Stripe MCP in Duet: https://x.com/stripe/status/2112995753824301406  
- danshipper: verdict after two weeks: https://x.com/danshipper/status/2112997559463506059  
- petergyang: early-access video review: https://x.com/petergyang/status/2112995494612082931

![Claude Duet launch video cover](/images/twitter-hots/2026-10-22/01-claude-duet.jpg)

---

## 2. PHP2Shell: AI helps uncover a PHP flaw affecting ~70% of websites

**Key points**: @OpenAI said researchers working in its **Patch the Planet** initiative used OpenAI models to discover critical security flaws in PHP, which runs an estimated **70%** of websites. Over the past two months it led a coalition of maintainers, researchers and security vendors to prepare fixes; the work took that long because the fix required a major change to the PHP engine. OpenAI called it "one of the most impactful vulnerabilities in recent memory" and a sign of a new phase in which AI can find security bugs with internet-scale impact (13k likes). It then released a Codex skill (GitHub repo openai/php2shell-checker) that guides Codex through checking whether your site is affected (7.3k likes). Per advisories from Wiz, Google Cloud and CISA: the bugs are CVE-2026-109618 and CVE-2026-109619, enabling unauthenticated remote code execution and memory disclosure; **PHP 5.4 through 8.5.11** are affected; fixed versions are 8.5.12, 8.4.27, 8.3.36 and 8.2.35; and end-of-life PHP 8.1 and earlier will not get patches. Google Cloud lists the CVSS score as 9.2. According to The Verge, citing OpenAI, the security firm Calif found the flaw using GPT-5.6 Sol, and Wiz independently discovered and reported the vulnerabilities using AI. @levelsio doesn't think this is the end of PHP: AI-assisted exploits will increasingly hit any language, framework and server software, and "a new era of cybersecurity has begun". @mitsuhiko, after reading the patch, suspects there may be more like this and suggests running PHP via Fil-C for the foreseeable future if you can afford it.

**Why it matters**: This is a large, real-world case of AI helping find a bug and the whole industry coordinating a fix ahead of disclosure. It also shows that old bugs once considered "theoretical but too hard to exploit" are getting easier to weaponize with AI.

- OpenAI: Patch the Planet finds PHP flaws: https://x.com/OpenAI/status/2112907856018309586  
- OpenAI: a Codex skill to check your site: https://x.com/OpenAI/status/2112945805686604033  
- levelsio: a new era of cybersecurity: https://x.com/levelsio/status/2113024336097591766  
- mitsuhiko: there may be more like this: https://x.com/mitsuhiko/status/2112969696069005567

![OpenAI's posts on the PHP flaw and the Codex checker skill](/images/twitter-hots/2026-10-22/02-php2shell.jpg)

---

## 3. A security storm: LiteLLM poisoned, Railway env vars exposed, a perfect-10 GitLab flaw

**Key points**: The same day brought a string of incidents. **LiteLLM**: @JFrogSecurity was first to report malicious code in the LiteLLM 1.107.0 PyPI release (1.2k likes); LiteLLM then confirmed that 1.107.0 on PyPI, Docker Hub and GHCR was poisoned and has been pulled. According to LiteLLM's incident write-up, the malicious PyPI package was live for about **2 hours**. The attacker used stolen GitHub CLI credentials from three engineers (one belonging to a GitHub organization owner) to disable branch protections and point the release workflow at a lookalike repository (Berri-AI/litellm), which signed and published the poisoned artifacts. The payload runs automatically at Python startup, steals cloud, developer, AI-tool and browser credentials, and includes a backdoor that fetches remote code every hour; the latest safe version is 1.106.2. **Railway**: the company posted an urgent notice saying an unauthorized third party may have accessed encrypted customer environment variables and obtained the decrypted contents of some of them. It believes this is part of a series of attacks targeting platform companies with the aim of compromising AI inference providers, recommends that all users roll every environment variable, and has paused all deployments meanwhile (2.4k likes). @theo said his apps Lakebed, Postplan and Shoo will stay down until he can redeploy with rolled keys: "Blocking deploys so we can roll keys without downtime is unacceptable." @gregisenberg's take: the attackers were after the AI keys stored on Railway, because "an API key is basically a credit card for compute now"; rotate every key tonight, set hard monthly spend limits, and give every agent its own key. On top of that, The Hacker News reported a CVSS **10.0** GitLab flaw (CVE-2026-110264) affecting 12 years of releases and allowing unauthenticated remote code execution on self-managed servers (7.6k likes); @theo quoted it with just "What the fuck is going on". @vercel_dev flagged a high-severity RCE in Node.js's Brotli decoder affecting Node 22, 24 and 26, with Vercel WAF rules already live.

**Why it matters**: The more agents there are, the more AI keys sit on platforms, making supply chains and hosting providers the most profitable targets. "One key per agent, spend limits, and the ability to rotate any time" is becoming table stakes.

- JFrogSecurity: LiteLLM 1.107.0 poisoned: https://x.com/JFrogSecurity/status/2112882176156909646  
- LiteLLM: official incident notice: https://x.com/LiteLLM/status/2112945728565993864  
- Railway: urgent security notice: https://x.com/Railway/status/2113025284148715845  
- theo: services down because redeploys are blocked: https://x.com/theo/status/2113047601058873564  
- gregisenberg: attackers were after AI keys: https://x.com/gregisenberg/status/2113044829957459984  
- TheHackersNews: CVSS 10.0 GitLab flaw: https://x.com/TheHackersNews/status/2112981939984671090  
- theo: "What is going on": https://x.com/theo/status/2113040382607192218  
- vercel_dev: Node.js Brotli RCE protections: https://x.com/vercel_dev/status/2113048861526852004

![The Hacker News graphic on the poisoned LiteLLM 1.107.0 release](/images/twitter-hots/2026-10-22/03-security-storm.jpg)

---

## 4. OpenAI: models and Codex come to Google Cloud, Dots answers Duet

**Key points**: @OpenAI announced it is bringing its frontier models and Codex agentic workflows to **Google Cloud Model Garden** (2.6k likes). Per OpenAI's blog, Google Cloud customers can buy them through the Google Cloud Marketplace, and enterprises with Google Cloud spend commitments can draw those down for the purchases; OpenAI models will also come to Google Antigravity and the Gemini Agent, with general availability planned in the coming weeks. The post also notes that "Microsoft remains OpenAI's primary cloud partner." @Kalshi, citing Reuters, framed it as OpenAI selling frontier models including GPT-6 Astra, and Codex, through Google Cloud. On the personal agent front, Codex lead @thsottiaux replied under the Claude Duet launch post: "Dot, meet Duet. Duet, meet Dot. Be nice to each other." (4k likes). Later he posted "Dot, Dotter, Dottest", adding that Dots are "fully included in the Pro plan, doesn't draw on your weekly usage"; the replies filled up with Plus users asking when they'd get access. Separately, @OpenAI described a new drug-discovery lead from GPT-Rosalind: working with @perturbai_tx and Scripps Research, thousands of GPT-Rosalind agents worked in parallel to connect gene-expression results from millions of mouse brain cells with the scientific literature in 32 minutes. The data showed that disrupting DCTN1, a gene linked to the rare neurodegenerative disorder Perry syndrome, increased expression of cholesterol-synthesis genes; GPT-Rosalind suggested cholesterol may not be reaching where neurons need it, giving scientists a testable question: could restoring cholesterol transport protect neurons (5.3k likes)?

**Why it matters**: OpenAI models landing in Google's own cloud and coding tools shows that enterprise distribution matters more than alliances. And by stressing that Dots aren't metered within Pro, OpenAI is competing with Duet head-on through usage policy.

- OpenAI: models and Codex on Google Cloud: https://x.com/OpenAI/status/2112988118471295323  
- Kalshi: Reuters report: https://x.com/Kalshi/status/2112967155537039459  
- thsottiaux: "Dot, meet Duet": https://x.com/thsottiaux/status/2112992042465009736  
- thsottiaux: Dot, Dotter, Dottest: https://x.com/thsottiaux/status/2113029655095836957  
- thsottiaux: doesn't draw on weekly usage in Pro: https://x.com/thsottiaux/status/2113029854417600834  
- OpenAI: GPT-Rosalind's drug-discovery lead: https://x.com/OpenAI/status/2112899854569762936

![OpenAI's Google Cloud post and thsottiaux's posts on Dots](/images/twitter-hots/2026-10-22/04-openai-google-cloud.jpg)

---

## 5. Grok Bot: Pages for reports, memos and dashboards

**Key points**: @bot announced that Grok Bot can now build reports, memos and dashboards: ask Bot for a page, then edit it together or have Bot keep it up to date (5.2k likes, 1.9k bookmarks). @poteto shared it with "grok bot can now build Pages for you!" (1.4k likes). @ericzakariasson listed the pages he's been finding useful: launch burn-down lists, design docs he iterates on with the bot, morning briefs, and "what did I get done this week"; he also built a landing page for Grok Bot itself with Pages, and even got Doom running in one. @Scobleizer says that now that Grok Bot can read X lists, he gave it his "best in AI" list, and every hour it reads the list and builds him a new news page; doing something similar on his own, his X API bill alone was $6,000 last month. @elonmusk quoted his post: "Try Grok @Bot, you will love it!" (10k likes). @petergyang updated his comparison of four personal agents: Grok Bot's pros are that a team of bots is the easiest to understand, free X access is great for research, and voice mode and the new Pages are great, while its email feature "doesn't really work" yet; Duet is the most proactive out of the box; Dots are much better than at launch but still buggy.

**Why it matters**: A personal agent's output is shifting from "a reply" to "a page that keeps itself updated", giving you a shareable, maintainable deliverable beyond the chat.

- bot: Grok Bot Pages: https://x.com/bot/status/2112992872857252082  
- poteto: Pages are live: https://x.com/poteto/status/2112995138717016529  
- ericzakariasson: useful kinds of pages: https://x.com/ericzakariasson/status/2112995956090454238  
- ericzakariasson: a landing page built with Pages: https://x.com/ericzakariasson/status/2113018506392551732  
- Scobleizer: an hourly news page from an X list: https://x.com/Scobleizer/status/2112950764348014878  
- elonmusk: "Try Grok @Bot": https://x.com/elonmusk/status/2113010364178964616  
- petergyang: comparing four personal agents: https://x.com/petergyang/status/2113042717270049028

![Grok Bot Pages demo video cover](/images/twitter-hots/2026-10-22/05-grok-bot-pages.jpg)

---

## 6. Recursive Flint: a from-scratch local coding model with open weights

**Key points**: @RichardSocher introduced **Flint**, Recursive's first model: a fast local coding model built with the help of its automated research system, the "Eureka Machine". It runs at 125+ tokens/sec on a MacBook Pro and 150+ on an RTX Spark, up to 2x faster than comparable models, and was built from scratch in under 4 months; open weights are on Hugging Face, and you can try it for free in OpenCode or Pi (4.6k likes, 4.3k bookmarks). @tydsh added the self-reported scores: **54.9%** on Terminal-Bench 2.1, 89.7% on SWE-bench Pro v2 and 74.2% on SWE-bench Verified, with everything trained in-house from the tokenizer through pretraining, midtraining, SFT and RL. The RecursiveSI/flint repo on Hugging Face was created on October 21 under Apache-2.0. Its model card lists 39.8B total parameters and about **2.5B** active per token (6 of 256 routed experts plus one shared expert), with a 262,144-token context. The BF16 checkpoint is meant to be served on one B300 or H200; laptop speeds come from separately prepared quantized builds for NVIDIA and Apple Silicon. @pidotdev says Recursive did extensive RL training on the Pi harness, so it works well out of the box, and it's available for free in Pi via Radius.

**Why it matters**: This really is a new open-weights release, aimed squarely at "coding agent models that run fast locally". The benchmarks are vendor-reported, so community re-runs will tell how it actually performs.

- RichardSocher: Flint launch: https://x.com/RichardSocher/status/2112944385415426249  
- tydsh: benchmarks and training pipeline: https://x.com/tydsh/status/2112952791480357331  
- pidotdev: RL on the Pi harness: https://x.com/pidotdev/status/2112978311252979761

![Cover of Richard Socher's Flint launch video](/images/twitter-hots/2026-10-22/06-recursive-flint.jpg)

---

## 7. GitHub: proving agent code correct, and VS Code defaults to the Copilot harness

**Key points**: @GitHubNext introduced Microsoft Research's **Proof Driven Development Kit (PDD Kit)**. It turns your plan into a formal spec (in Verus, a proof language for Rust) and then automatically proves that the agent's code meets that spec for every input; where proof isn't possible, it falls back to empirical verification with tests and computer-use agents. It works on Rust today, is integrated with GitHub Next's **Chopin**, and aims at a "verified software factory" where engineers review specifications instead of code (721 likes, 913 bookmarks). @github framed it as letting teams ship AI-generated code to production without reviewing it line by line, with stronger assurance than code review and testing alone; it's in research preview. The same day @github said that, as traffic grew exponentially, it moved 99.99999% of its Git repos to Azure. And @code's latest VS Code release makes the Copilot SDK-based harness the default for new sessions, adds model comparisons, and brings a file list to multi-file diffs.

**Why it matters**: AI now writes code faster than humans can review it. Proving that code meets a spec is one way around line-by-line review, even if it only covers Rust for now.

- GitHubNext: PDD Kit launch: https://x.com/GitHubNext/status/2112936525457740139  
- github: Chopin + PDD Kit: https://x.com/github/status/2112938664959562081  
- github: Git repos moved to Azure: https://x.com/github/status/2112979782652813783  
- code: VS Code defaults to the Copilot SDK harness: https://x.com/code/status/2113005484298883281

![GitHub Next's post on PDD Kit](/images/twitter-hots/2026-10-22/07-github-pdd-kit.jpg)

---

## 8. Gemini 4 Argon: 25 trillion tokens in 72 hours, Pichai on the compute crunch

**Key points**: @OfficialLoganK said that in the first 72 hours after Gemini 4 Argon launched, Google processed about **25 trillion** tokens: "the demand for intelligence is incredible and still under appreciated" (5.2k likes). @theo quickly posted a screenshot: T3 Code users processed about 36.5 trillion tokens in the same window, 1.5x all Argon demand globally (1.6k likes). @sundarpichai shared his interview with Alex Heath, which covers Argon's early reception, how "even Google can't get enough compute", the recent leadership changes at Google DeepMind, Google's personal agent plans, and Google turning free cash flow negative and the risks of the AI infrastructure buildout. @GoogleDeepMind showed Argon combining three open-source datasets into an interactive 3D human anatomy model where you can toggle layers, isolate muscles, or zoom inside a beating heart (1.3k likes).

**Why it matters**: Token volume has become the new post-launch scoreboard, and a single coding agent client's usage can now rival a frontier model's global demand.

- OfficialLoganK: ~25 trillion tokens in 72 hours: https://x.com/OfficialLoganK/status/2112767157746688480  
- theo: T3 Code at ~36.5 trillion tokens in the same window: https://x.com/theo/status/2112891770338209933  
- sundarpichai: interview with Alex Heath: https://x.com/sundarpichai/status/2112945705757315307  
- GoogleDeepMind: 3D anatomy demo: https://x.com/GoogleDeepMind/status/2112974723659247896

![theo's screenshot of T3 Code token usage over 72 hours](/images/twitter-hots/2026-10-22/08-gemini-argon.jpg)

---

## 9. Vercel: Rauch backs Pi, DeepSeek V4.1 Flash joins Token Pass

**Key points**: After Vercel launched its open-source durable-harness the day before, @pidotdev said it has "huge respect for the engineering at Vercel" and is excited they are building with Pi-Durable (745 likes). @rauchg quoted it, calling Pi "one of the coolest projects in the AI world today" and saying "I'm on their team", because it gives developers and companies choice of model and control over the runtime, data, skills and plugins (834 likes). @vercel_dev announced that DeepSeek V4.1 Flash 1017 is now included in Vercel Token Pass: new weights from DeepSeek, a 1M context window, no config change, and $80 of tokens for $30 a month. @rauchg called it "fast, mind-bogglingly cheap" and served with zero data retention (ZDR), a phenomenal model for subagents that execute plans conceived by larger models: "You can port TypeScript to Rust 10 times and not run out of credits."

**Why it matters**: "Big models plan, cheap models execute as subagents" is becoming the usage pattern platforms recommend by default, with open harnesses (Pi) plus cheap open-weights models as the foundation.

- pidotdev: Vercel building with Pi-Durable: https://x.com/pidotdev/status/2112910333744431146  
- rauchg: "I'm on their team": https://x.com/rauchg/status/2112934299288912085  
- vercel_dev: DeepSeek V4.1 Flash 1017 in Token Pass: https://x.com/vercel_dev/status/2113005104911757598  
- rauchg: a great subagent model: https://x.com/rauchg/status/2113010010766913815

![rauchg's posts on Pi and DeepSeek V4.1 Flash](/images/twitter-hots/2026-10-22/09-vercel-pi-deepseek.jpg)

---

## 10. OpenCode: Muse Wonder arrives, and hundreds of phishing attempts a day

**Key points**: @opencode announced that Meta's **Muse Wonder** is now available in OpenCode (2.8k likes). Following its API key leak incident earlier this month, @thdxr showed the kind of attacks the team faces: an email posing as a PlanetScale database migration notice whose link is a PlanetScale OAuth flow set to send credentials to an attacker. "We're seeing hundreds of completely different attempts every day" (830 likes). He also said "forcing you to upgrade to enterprise for SSO seems exceptionally bad now; this just needs to be on for everyone" (837 likes). On a lighter note, he found you can take a screenshot on your phone and send it straight into an OpenCode session: he dropped in a screenshot of an X DM about scheduling a call and just said "schedule this".

**Why it matters**: Coding agent teams hold large numbers of user and model credentials, making them prime phishing targets, and whether basic security features like SSO should cost extra is being questioned again.

- opencode: Muse Wonder is live: https://x.com/opencode/status/2112948459745763530  
- thdxr: hundreds of phishing attempts a day: https://x.com/thdxr/status/2112770045629882853  
- thdxr: SSO should be on for everyone: https://x.com/thdxr/status/2112925271213187369  
- thdxr: screenshots straight into an OpenCode session: https://x.com/thdxr/status/2112729479730864132

![The phishing email posing as a PlanetScale notice, shared by thdxr](/images/twitter-hots/2026-10-22/10-opencode.jpg)

---
