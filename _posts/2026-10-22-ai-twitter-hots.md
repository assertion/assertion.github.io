---
layout: post
title: AI Twitter 热点 · 2026-10-22
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, Claude Duet, Anthropic, Opus 5.5, PHP2Shell, PHP, OpenAI, Patch the Planet, Codex, LiteLLM, Railway, GitLab, Node.js, Google Cloud, Dots, GPT-Rosalind, Grok Bot, Pages, Recursive, Flint, GitHub Next, PDD Kit, Chopin, VS Code, Copilot, Gemini 4 Argon, T3 Code, Vercel, Pi, DeepSeek-V4.1-Flash, Token Pass, OpenCode, Muse Wonder
lang: zh
translation_key: ai-twitter-hots-2026-10-22
issue: 41
item_count: 10
headline: "Anthropic 推出主动型 agent Claude Duet，AI 挖出影响七成网站的 PHP 漏洞，OpenAI 模型和 Codex 上架 Google Cloud"
highlights:
  - label: "Claude Duet：Anthropic 的主动型 agent"
    text: "独立 app，基于 Opus 5.5，会主动找你、离开后继续干活、代你行动前先确认；先向美国 Pro/Max 用户开放 waitlist，和现有套餐共享额度。"
  - label: "PHP2Shell：AI 找出影响约 70% 网站的漏洞"
    text: "借助 OpenAI 模型的研究者和 Wiz 先后发现 PHP 引擎两个可远程执行代码的漏洞，PHP 5.4 起的版本都受影响；同一天还有 LiteLLM 投毒、Railway 环境变量泄露。"
  - label: "OpenAI 模型和 Codex 进 Google Cloud"
    text: "前沿模型和 Codex agent 工作流将进入 Google Cloud Model Garden，可用 GCP 承诺消费抵扣，之后还会进 Antigravity 和 Gemini Agent。"
products: [Claude Duet, Opus 5.5, PHP, Codex, LiteLLM, Railway, GitLab, Node.js, Google Cloud, Model Garden, Antigravity, Dots, GPT-Rosalind, Grok Bot, Pages, Flint, Pi, OpenCode, PDD Kit, Chopin, VS Code, GitHub Copilot, Gemini 4 Argon, T3 Code, Vercel Token Pass, DeepSeek-V4.1-Flash, Muse Wonder]
stats:
  - value: "70%"
    caption: "PHP 支撑的网站占比（估计），PHP2Shell 影响 PHP 5.4 以来的版本"
  - value: "6,000+"
    caption: "Claude Duet 可用的 Claude Marketplace 连接器与插件数"
  - value: "2.5B"
    caption: "Recursive Flint 每个 token 的激活参数（总参数 39.8B）"
stat:
  value: "70%"
  caption: "PHP 支撑的网站占比（估计），PHP2Shell 影响 PHP 5.4 以来的版本"
---

# AI Twitter/X 热点 Digest · 2026-10-22（周四）


## 今日要点

1. **Anthropic 推出主动型 agent Claude Duet**：独立 app，基于 Opus 5.5，会主动告诉你什么事需要处理、你离开后继续干活、代你发消息或付款前先确认；目前美国 Pro/Max 用户排队体验。  
2. **AI 挖出影响约 70% 网站的 PHP 漏洞**：PHP2Shell 两个 CVE 覆盖 PHP 5.4 以来的版本，OpenAI 同步放出检查用的 Codex skill；同一天 LiteLLM 被投毒、Railway 环境变量疑遭窃取，开发者直呼「到底怎么了」。  
3. **OpenAI 模型和 Codex 上架 Google Cloud**：企业可以在 Model Garden 里买 OpenAI 模型、用 GCP 承诺消费抵扣，之后还会进入 Antigravity 和 Gemini Agent。

---

## 1. Claude Duet：Anthropic 的主动型个人 agent

**要点**：@claudeai 开放 **Claude Duet** 的 research preview：一个独立 app，Claude 在里面作为主动型 agent 工作，会把需要你处理的事带到你面前、完成你交代的任务、你离开后继续干活，并在代你行动前先问你（3.3 万赞、1 万收藏）。官方说明它围绕 **Opus 5.5** 设计，沿用 Claude 账户里的记忆、skills 和已连接应用，可以用 Claude Marketplace 上 **6,000+** 个连接器和插件（Gmail、Slack、Shopify 等）。按 Anthropic 的介绍文章，Duet 有一台自带浏览器的虚拟机，手机电脑关了也能继续跑；它每隔几小时检查一次已连接的账户（官方说不间断检查会太快耗尽额度）；发消息、付款、签文件或删除任何东西之前都会展示具体动作并等你批准，证券交易、账户间转账即使你同意也不做。目前通过 waitlist 向美国 Pro/Max 用户开放，和其他 Claude 用量共享套餐额度，Team/Enterprise 暂不可用。@mikeyk 说自己用了几周：帮他起草炉边对话的问题、周末替他盯 Slack，还发现了 Neal Stephenson 的新书并在他同意后从本地书店下单。@stripe 宣布 Duet 可以用 Link 购物、通过 Stripe MCP 退款和看业务趋势。@danshipper 测了两周，称这是他第一个会叫作「pro tool」的个人 agent，自己的使用从以 ChatGPT 为主变成和 Claude 大约五五开；不足是还不能指挥电脑上的 Claude 会话、邮件草稿不如 dot、语音只能转写。@petergyang 拿到了早期访问，发了评测视频。

**为何值得看**：Grok Bot、Muse、Dots 之后，Anthropic 正式入场常驻个人 agent。Duet 的设计重点是「主动，但重要动作先问」，以及用定时巡检来控制额度消耗。

- claudeai：Claude Duet research preview：https://x.com/claudeai/status/2112984664256241837  
- claudeai：围绕 Opus 5.5 设计：https://x.com/claudeai/status/2112984666437546104  
- mikeyk：自己用了几周的体验：https://x.com/mikeyk/status/2112986418503110772  
- stripe：Duet 里用 Link 购物、Stripe MCP：https://x.com/stripe/status/2112995753824301406  
- danshipper：测了两周的评价：https://x.com/danshipper/status/2112997559463506059  
- petergyang：早期访问评测视频：https://x.com/petergyang/status/2112995494612082931

![Claude Duet 发布视频封面](/images/twitter-hots/2026-10-22/01-claude-duet.jpg)

---

## 2. PHP2Shell：AI 帮忙挖出影响约七成网站的 PHP 漏洞

**要点**：@OpenAI 表示，参与其 **Patch the Planet** 计划的研究者借助 OpenAI 模型发现了 PHP 的严重安全漏洞，PHP 估计支撑着约 **70%** 的网站；过去两个月它牵头维护者、研究者和安全厂商准备修复，因为修复需要改动 PHP 引擎，耗时较长。OpenAI 称这是「近年影响最大的漏洞之一」，也标志着 AI 能找到「互联网级」安全漏洞的新阶段（1.3 万赞）。随后它发布了一个 Codex skill（GitHub 仓库 openai/php2shell-checker），让 Codex 带你检查网站是否受影响（7.3k 赞）。按 Wiz、Google Cloud 和 CISA 的公告：两个漏洞编号为 CVE-2026-109618 和 CVE-2026-109619，可导致未认证远程代码执行和内存泄露，**PHP 5.4 到 8.5.11** 都受影响，修复版本为 8.5.12、8.4.27、8.3.36 和 8.2.35，已停止维护的 8.1 及更早版本不会有补丁；Google Cloud 给出的 CVSS 为 9.2。据 The Verge 引述 OpenAI，安全公司 Calif 用 GPT-5.6 Sol 发现了漏洞，Wiz 也借助 AI 独立发现并报告。@levelsio 不认为这是 PHP 的末日：AI 辅助的漏洞利用会出现在任何语言、框架和服务器软件上，「网络安全的新时代开始了」。@mitsuhiko 看完补丁觉得类似问题可能还有，建议条件允许的话近期用 Fil-C 跑 PHP。

**为何值得看**：这是 AI 参与发现、并协调全行业提前修复的一个大规模真实案例；反过来也说明，过去「理论上有、但很难利用」的老 bug，正在被 AI 降低利用门槛。

- OpenAI：Patch the Planet 发现 PHP 漏洞：https://x.com/OpenAI/status/2112907856018309586  
- OpenAI：检查网站的 Codex skill：https://x.com/OpenAI/status/2112945805686604033  
- levelsio：网络安全的新时代：https://x.com/levelsio/status/2113024336097591766  
- mitsuhiko：可能还有更多类似问题：https://x.com/mitsuhiko/status/2112969696069005567

![OpenAI 关于 PHP 漏洞与 Codex 检查 skill 的推文](/images/twitter-hots/2026-10-22/02-php2shell.jpg)

---

## 3. 安全风暴：LiteLLM 投毒、Railway 环境变量泄露、GitLab 满分漏洞

**要点**：同一天还有一串事故。**LiteLLM**：@JFrogSecurity 最先报告 LiteLLM 1.107.0 的 PyPI 包里有恶意代码（1.2k 赞），LiteLLM 随后确认 PyPI、Docker Hub 和 GHCR 上的 1.107.0 都被投毒，已下架。按 LiteLLM 的事故说明，恶意 PyPI 包在线约 **2 小时**；攻击者用三名工程师被盗的 GitHub CLI 凭据（其中一个属于 GitHub 组织所有者）关掉分支保护，让发布流程指向一个仿冒仓库（Berri-AI/litellm），签名发布了带毒产物；恶意文件在 Python 启动时自动运行、窃取云、开发者、AI 工具和浏览器等凭据，并带有每小时拉取远程代码的后门，安全版本为 1.106.2。**Railway**：官方发布紧急通告，称未授权第三方可能访问了加密的客户环境变量，并拿到了其中部分的明文；它认为这是一连串针对平台公司、意在攻破 AI 推理服务商的攻击之一，建议所有用户轮换全部环境变量，期间暂停所有部署（2.4k 赞）。@theo 说自己的 Lakebed、Postplan、Shoo 只能一直停着，因为不能部署就没法换上新 key，「阻止部署、让我们无法无停机换 key 是不可接受的」。@gregisenberg 的看法是：攻击者盯的是 Railway 上存的 AI key，「API key 现在基本就是算力的信用卡」，建议今晚就轮换所有 key、设月度消费上限、每个 agent 单独一把 key。此外，The Hacker News 报道 GitLab 一个 CVSS **10.0** 的漏洞（CVE-2026-110264）影响 12 年的版本，可在自托管服务器上未认证远程执行代码（7.6k 赞），@theo 转发时只说了一句「到底怎么回事」；@vercel_dev 称 Node.js Brotli 解码器有高危 RCE，影响 Node 22/24/26，Vercel 已上线 WAF 规则。

**为何值得看**：agent 越多，平台上躺着的 AI key 就越多，供应链和托管平台成了最划算的攻击入口；「一 agent 一 key + 消费上限 + 能随时轮换」正在变成基本功。

- JFrogSecurity：LiteLLM 1.107.0 被投毒：https://x.com/JFrogSecurity/status/2112882176156909646  
- LiteLLM：官方事故通告：https://x.com/LiteLLM/status/2112945728565993864  
- Railway：紧急安全通告：https://x.com/Railway/status/2113025284148715845  
- theo：服务因无法重新部署而停摆：https://x.com/theo/status/2113047601058873564  
- gregisenberg：攻击者盯的是 AI key：https://x.com/gregisenberg/status/2113044829957459984  
- TheHackersNews：GitLab CVSS 10.0 漏洞：https://x.com/TheHackersNews/status/2112981939984671090  
- theo：「到底怎么回事」：https://x.com/theo/status/2113040382607192218  
- vercel_dev：Node.js Brotli RCE 防护：https://x.com/vercel_dev/status/2113048861526852004

![The Hacker News 关于 LiteLLM 1.107.0 被投毒的配图](/images/twitter-hots/2026-10-22/03-security-storm.jpg)

---

## 4. OpenAI：模型和 Codex 上架 Google Cloud，Dots 回应 Duet

**要点**：@OpenAI 宣布把前沿模型和 Codex agent 工作流带到 **Google Cloud Model Garden**（2.6k 赞）。按 OpenAI 博客，Google Cloud 客户可以通过 Google Cloud Marketplace 购买，有 GCP 承诺消费的企业可以直接抵扣；OpenAI 模型之后还会进入 Google Antigravity 和 Gemini Agent，正式可用预计在未来几周；博客也写明「Microsoft 仍是 OpenAI 的主要云合作伙伴」。@Kalshi 援引路透社的说法是 OpenAI 将通过 Google Cloud 卖 GPT-6 Astra 等前沿模型和 Codex。个人 agent 这边，Codex 负责人 @thsottiaux 在 Claude Duet 发布帖下回复「Dot, meet Duet. Duet, meet Dot. Be nice to each other.」（4k 赞），晚些时候又发「Dot, Dotter, Dottest」，并补充 Dots「完全包含在 Pro 套餐里，不占每周用量」；评论区大量 Plus 用户追问什么时候能用。另外，@OpenAI 介绍 GPT-Rosalind 的一条药物研发新线索：与 @perturbai_tx 和 Scripps Research 合作，数千个 GPT-Rosalind agent 并行工作，32 分钟内把数百万个小鼠脑细胞的基因表达结果和文献关联起来；数据显示破坏与罕见神经退行性疾病 Perry 综合征相关的 DCTN1 基因，会提高胆固醇合成相关基因的表达，GPT-Rosalind 推测胆固醇可能没被送到神经元需要的地方，由此提出「恢复胆固醇转运能否保护神经元」这一可检验的方向（5.3k 赞）。

**为何值得看**：OpenAI 模型进入 Google 自家的云和 coding 工具，说明企业分发渠道比阵营更重要；而 Dots 强调「Pro 内不额外计量」，是在用额度政策和 Duet 正面竞争。

- OpenAI：模型和 Codex 进 Google Cloud：https://x.com/OpenAI/status/2112988118471295323  
- Kalshi：路透社报道：https://x.com/Kalshi/status/2112967155537039459  
- thsottiaux：「Dot, meet Duet」：https://x.com/thsottiaux/status/2112992042465009736  
- thsottiaux：Dot, Dotter, Dottest：https://x.com/thsottiaux/status/2113029655095836957  
- thsottiaux：Pro 套餐内不占每周用量：https://x.com/thsottiaux/status/2113029854417600834  
- OpenAI：GPT-Rosalind 的药物研发线索：https://x.com/OpenAI/status/2112899854569762936

![OpenAI 上架 Google Cloud 与 thsottiaux 关于 Dots 的推文](/images/twitter-hots/2026-10-22/04-openai-google-cloud.jpg)

---

## 5. Grok Bot：能做报告、备忘录和仪表盘的 Pages

**要点**：@bot 宣布 Grok Bot 现在能做报告、备忘录和仪表盘：让它做一个 page，可以一起编辑，也可以让它持续更新（5.2k 赞、1.9k 收藏）。@poteto 转发说「grok bot can now build Pages for you!」（1.4k 赞）。@ericzakariasson 分享了自己常用的几类 page：发布燃尽清单、和 bot 一起迭代的设计文档、晨间简报、「这周做完了什么」；他还用 Pages 给 Grok Bot 自己做了一个落地页，甚至在 page 里跑起了 Doom。@Scobleizer 说 Grok Bot 能读 X 列表后，他把自己的「best in AI」列表交给它，每小时读一遍并生成一个新闻页；他之前自己做类似的事，上个月光 X API 账单就有 6,000 美元。@elonmusk 转发他的帖子：「Try Grok @Bot, you will love it!」（1 万赞）。@petergyang 更新了四个个人 agent 的对比：Grok Bot 的优点是「一组 bot」最好理解、免费的 X 访问非常适合做调研、语音和新的 Pages 很好，缺点是邮件功能还不太好用；Duet 开箱最主动；Dots 比刚上线时好很多但仍有 bug。

**为何值得看**：个人 agent 的产出从「一条回复」变成「一个会持续更新的页面」，聊天之外多了一个可分享、可维护的交付物。

- bot：Grok Bot Pages：https://x.com/bot/status/2112992872857252082  
- poteto：Pages 上线：https://x.com/poteto/status/2112995138717016529  
- ericzakariasson：常用的几类 page：https://x.com/ericzakariasson/status/2112995956090454238  
- ericzakariasson：用 Pages 做的落地页：https://x.com/ericzakariasson/status/2113018506392551732  
- Scobleizer：用 X 列表生成每小时新闻页：https://x.com/Scobleizer/status/2112950764348014878  
- elonmusk：「Try Grok @Bot」：https://x.com/elonmusk/status/2113010364178964616  
- petergyang：四个个人 agent 对比：https://x.com/petergyang/status/2113042717270049028

![Grok Bot Pages 演示视频封面](/images/twitter-hots/2026-10-22/05-grok-bot-pages.jpg)

---

## 6. Recursive Flint：从零训练的本地 coding 模型，开放权重

**要点**：@RichardSocher 发布 Recursive 的第一个模型 **Flint**：一个快速的本地 coding 模型，由他们的自动化研究系统「Eureka Machine」参与打造，在 MacBook Pro 上 125+ tokens/秒、RTX Spark 上 150+，比同类模型快最多 2 倍，从零开始不到 4 个月建成；权重已在 Hugging Face 开放，也可以在 OpenCode 或 Pi 里免费试用（4.6k 赞、4.3k 收藏）。@tydsh 补充了自报成绩：Terminal-Bench 2.1 **54.9%**、SWE-bench Pro v2 89.7%、SWE-bench Verified 74.2%，从 tokenizer、预训练、中训练到 SFT 和 RL 全部自己做。Hugging Face 上的 RecursiveSI/flint 仓库于 10 月 21 日创建，Apache-2.0；模型卡写明总参数 39.8B、每 token 激活约 **2.5B**（256 个路由专家选 6 个，外加一个共享专家），上下文 262,144 tokens；BF16 版本按一张 B300 或 H200 部署，笔记本上跑的是另行准备的 NVIDIA / Apple Silicon 量化版本。@pidotdev 说 Recursive 在 Pi harness 上做了大量 RL 训练，所以开箱即用，并已在 Pi 里通过 Radius 免费提供。

**为何值得看**：确实是新发布的开放权重模型，而且瞄准「本地跑得快的 coding agent 模型」；基准为厂商自报，实际效果还要看社区复测。

- RichardSocher：Flint 发布：https://x.com/RichardSocher/status/2112944385415426249  
- tydsh：基准与训练流程：https://x.com/tydsh/status/2112952791480357331  
- pidotdev：在 Pi harness 上做 RL：https://x.com/pidotdev/status/2112978311252979761

![Richard Socher 发布 Flint 的视频封面](/images/twitter-hots/2026-10-22/06-recursive-flint.jpg)

---

## 7. GitHub：用形式化证明验 agent 代码，VS Code 默认 Copilot harness

**要点**：@GitHubNext 发布微软研究院的 **Proof Driven Development Kit（PDD Kit）**：把你的计划变成形式化规格（用 Rust 的证明语言 Verus），再自动证明 agent 写的代码对所有输入都满足规格；证明不了的部分退回到测试和 computer-use agent 做经验验证；目前只支持 Rust，已集成进 GitHub Next 的 **Chopin**，目标是「验证过的软件工厂」，让工程师审规格而不是审代码（721 赞、913 收藏）。@github 的说法是，这让团队不必逐行审阅就能把 AI 生成的代码上线，保证比代码审查加测试更强，目前为 research preview。同一天 @github 还透露，随着流量指数级增长，已把 99.99999% 的 Git 仓库迁到 Azure。@code 发布的新版 VS Code 把基于 Copilot SDK 的 harness 设为新会话默认，新增多模型对比，并给多文件 diff 加了文件列表。

**为何值得看**：AI 写代码的速度已经超过人审代码的速度，「证明代码满足规格」是一条绕开逐行审查的路，虽然目前只覆盖 Rust。

- GitHubNext：PDD Kit 发布：https://x.com/GitHubNext/status/2112936525457740139  
- github：Chopin + PDD Kit：https://x.com/github/status/2112938664959562081  
- github：Git 仓库迁到 Azure：https://x.com/github/status/2112979782652813783  
- code：VS Code 默认 Copilot SDK harness：https://x.com/code/status/2113005484298883281

![GitHub Next 关于 PDD Kit 的推文](/images/twitter-hots/2026-10-22/07-github-pdd-kit.jpg)

---

## 8. Gemini 4 Argon：72 小时 25 万亿 token，Pichai 谈算力紧张

**要点**：@OfficialLoganK 说 Gemini 4 Argon 发布后的前 72 小时处理了约 **25 万亿** token，「对智能的需求惊人，而且仍被低估」（5.2k 赞）。@theo 随即晒图：同一时间窗口里 T3 Code 用户处理了约 36.5 万亿 token，是 Argon 全球需求的 1.5 倍（1.6k 赞）。@sundarpichai 转发了自己和 Alex Heath 的访谈，内容包括 Argon 的早期反响、「连 Google 都拿不到足够的算力」、DeepMind 近期的领导层调整、Google 的个人 agent 计划，以及自由现金流转负和 AI 基建风险。@GoogleDeepMind 展示 Argon 把三个开源数据集拼成一个可交互的 3D 人体解剖模型，可以分层查看肌肉、放大看跳动的心脏（1.3k 赞）。

**为何值得看**：token 用量成了模型发布后新的「战报」，而单个 coding agent 客户端的用量已经能和一个前沿模型的全球需求相比。

- OfficialLoganK：72 小时约 25 万亿 token：https://x.com/OfficialLoganK/status/2112767157746688480  
- theo：T3 Code 同期约 36.5 万亿 token：https://x.com/theo/status/2112891770338209933  
- sundarpichai：与 Alex Heath 的访谈：https://x.com/sundarpichai/status/2112945705757315307  
- GoogleDeepMind：3D 人体解剖演示：https://x.com/GoogleDeepMind/status/2112974723659247896

![theo 晒出的 T3 Code 72 小时 token 用量](/images/twitter-hots/2026-10-22/08-gemini-argon.jpg)

---

## 9. Vercel：Rauch 站队 Pi，DeepSeek V4.1 Flash 进 Token Pass

**要点**：前一天 Vercel 推出开源的 durable-harness 后，@pidotdev 表示「非常尊重 Vercel 的工程能力，很高兴他们用 Pi-Durable 来构建」（745 赞）。@rauchg 转发说 Pi 是「如今 AI 世界里最酷的项目之一」，「I'm on their team」，理由是它让开发者和公司能自己选模型、掌控运行时、数据、skills 和插件（834 赞）。@vercel_dev 宣布 DeepSeek V4.1 Flash 1017 加入 Vercel Token Pass：新权重、100 万上下文、无需改配置，每月 30 美元拿 80 美元的 token。@rauchg 评价它「快、便宜得离谱」，且以零数据保留（ZDR）方式提供，很适合当子 agent 去执行大模型制定的计划，「把 TypeScript 移植到 Rust 十次都用不完额度」。

**为何值得看**：「大模型做计划、便宜模型当子 agent 干活」正在变成平台默认推荐的用法，开放 harness（Pi）加便宜开放权重模型是这套组合的底座。

- pidotdev：Vercel 用 Pi-Durable 构建：https://x.com/pidotdev/status/2112910333744431146  
- rauchg：「I'm on their team」：https://x.com/rauchg/status/2112934299288912085  
- vercel_dev：DeepSeek V4.1 Flash 1017 进 Token Pass：https://x.com/vercel_dev/status/2113005104911757598  
- rauchg：适合当子 agent：https://x.com/rauchg/status/2113010010766913815

![rauchg 关于 Pi 与 DeepSeek V4.1 Flash 的推文](/images/twitter-hots/2026-10-22/09-vercel-pi-deepseek.jpg)

---

## 10. OpenCode：接入 Muse Wonder，每天应付数百次钓鱼

**要点**：@opencode 宣布 Meta 的 **Muse Wonder** 已可在 OpenCode 里使用（2.8k 赞）。在本月早些时候的 API key 泄露事件之后，@thdxr 晒出团队面对的攻击样例：一封伪装成 PlanetScale 数据库迁移通知的邮件，链接是一个会把凭据发给攻击者的 OAuth 授权流程，「我们每天看到数百种完全不同的尝试」（830 赞）。他还说「现在还强制升级企业版才给 SSO 显得格外糟糕，这应该对所有人开放」（837 赞）。轻松一点的是，他发现手机截图后可以直接发进一个 OpenCode 会话：他把一条约电话的 X 私信截图丢进去，说一句「schedule this」就行。

**为何值得看**：coding agent 团队手里握着大量用户和模型凭据，正成为钓鱼的重点目标；SSO 这类基础安全能力是否该收费，开始被重新讨论。

- opencode：Muse Wonder 上线：https://x.com/opencode/status/2112948459745763530  
- thdxr：每天数百次钓鱼尝试：https://x.com/thdxr/status/2112770045629882853  
- thdxr：SSO 应该对所有人开放：https://x.com/thdxr/status/2112925271213187369  
- thdxr：截图直接发进 OpenCode 会话：https://x.com/thdxr/status/2112729479730864132

![thdxr 晒出的伪装成 PlanetScale 通知的钓鱼邮件](/images/twitter-hots/2026-10-22/10-opencode.jpg)

---
