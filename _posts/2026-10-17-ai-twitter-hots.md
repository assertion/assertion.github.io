---
layout: post
title: AI Twitter 热点 · 2026-10-17
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, Reflection, Beam, Grok Bot, OpenAI, ChatGPT, Codex, Claude Code, poteto, Cursor, Devin, Factory, Cline, Qoder, Gemini 4 Argon, Anthropic, pi, OpenCode
lang: zh
translation_key: ai-twitter-hots-2026-10-17
issue: 36
item_count: 10
headline: "Reflection 放出开放权重 Beam，Grok Bot 提速 3 倍，ChatGPT Pro 上多 agent 并行"
highlights:
  - label: "Reflection 开放 Beam 权重：501B / 23B 激活，此前化名 cat-jam"
    text: "Apache 2.0、1M 上下文，连训练用的 harness Mirror CLI 一起开源；Vercel 透露它此前以 stealth 模型 cat-jam 身份上线；Ollama 限时免费，可直接接 Claude Code、Codex、OpenCode。"
  - label: "Grok Bot 一轮「提速 + 打磨」"
    text: "电脑任务平均快 3 倍、其他回复耗时不到一半，卡片重新设计；新增 Robinhood、Coinbase 等连接器，团队可向 marketplace 投稿；官方 bot 模板一帖收藏 3.2k。"
  - label: "OpenAI：GPT-6 Astra Pro 支持多 agent 并行"
    text: "ChatGPT 里的 Astra Pro 更快、更会用插件和工具，还能把一个任务拆给多个 agent 并行做；OpenAI 工程师凌晨 3 点用 dot 排障，再接一个 Codex 线程在手机上指挥修复。"
products: [Reflection Beam, Grok Bot, ChatGPT, GPT-6 Astra Pro, Codex, Claude Code, Claude Code Review, Cursor, Devin, Factory, Cline, Qoder, Gemini 4 Argon, Antigravity, Perplexity, Anthropic, Claude Mythos 5, pi, OpenCode, GLM 5.3 Flash]
stats:
  - value: "501B"
    caption: "Reflection Beam 总参数（23B 激活）"
  - value: "3 倍"
    caption: "Grok Bot 电脑任务平均提速"
  - value: "27 小时"
    caption: "4 个 Gemini 4 Argon agent 从零通关 Minecraft 用时"
stat:
  value: "501B"
  caption: "Reflection Beam 总参数（23B 激活）"
---

# AI Twitter/X 热点 Digest · 2026-10-17（周六）


## 今日要点

1. **Reflection 开放 Beam 权重**：@reflection_ai 以 Apache 2.0 放出首个模型 **Beam**（**501B 总参 / 23B 激活**，**1M** 上下文），连训练用的开源 harness Mirror CLI 一起放出；@vercel_dev 透露它此前以 stealth 模型 **cat-jam** 身份上线；@ollama 限时免费，并可直接接 Claude Code、Codex、OpenCode。  
2. **Grok Bot 一轮「提速 + 打磨」**：@bot 称电脑任务平均快 **3 倍**、其他回复耗时不到一半，聊天卡片重新设计；同时新增 Robinhood、Coinbase 等连接器，团队可向 marketplace 投稿；@monokern 整理的官方 bot 模板帖收藏 **3.2k**。  
3. **ChatGPT Pro 上多 agent 并行**：@OpenAI 宣布 GPT-6 Astra Pro 更快、更会用插件和工具，并能把一个任务拆给多个 agent 并行完成；@OpenAIDevs 演示工程师凌晨 3 点用 dot 排障、再开 Codex 线程在手机上指挥修复。

---

## 1. Reflection Beam：501B 开放权重，此前化名 cat-jam

**要点**：@reflection_ai 宣布首个模型 **Beam** 以 **Apache 2.0** 开放权重，同时放出 tokenizer、参考实现、BF16 / FP8 / NVFP4 三种权重和 DFlash2 drafter，以及训练 Beam 用的开源 harness **Mirror CLI**，合作方有 40 多家。@vllm_project 首日支持，并给出参数：**501B 总参 / 23B 激活**、**1M** token 上下文、混合注意力。@vercel_dev 说 Beam 在此之前一直以 stealth 模型 `stealth/cat-jam` 的身份跑在 AI Gateway 上，和 10 月 14 日在 OpenCode 免费上线的 stealth 模型 Cat Jam 同名；现在 Vercel 也限时免费。@ollama 同样限时免费，并给出 `ollama launch claude --model beam:cloud` 等命令，可直接接 Claude Code、Codex、OpenCode。@ArtificialAnlys 的评测：智能指数 **30**，在美国开放权重模型里排第二（Muse Spark Open 是 39）；agent 工作流强，但 Terminal-Bench 4.0 只有 3.0%，幻觉率 47%。

**为何值得看**：继 Muse Spark Open 之后，美国开放权重阵营一周内又多了一个 500B 级、直接对准 coding agent 的模型。连训练用的 harness 一起开源的做法不多见。Hugging Face 仓库 10 月 7 日创建，10 月 16 日官宣开放权重。

- reflection_ai：Beam 开放权重：https://x.com/reflection_ai/status/2111079965529968798  
- vllm_project：首日支持与参数：https://x.com/vllm_project/status/2111116589063872989  
- vercel_dev：此前的 stealth/cat-jam：https://x.com/vercel_dev/status/2111170419797692543  
- ollama：限时免费、接 Claude Code / Codex / OpenCode：https://x.com/ollama/status/2111087699574903061  
- ArtificialAnlys：智能指数 30、美国开放权重第二：https://x.com/ArtificialAnlys/status/2111087606759030831

![Reflection Beam 的 40+ 合作伙伴](/images/twitter-hots/2026-10-17/01-reflection-beam.jpg)

---

## 2. Grok Bot：电脑任务快 3 倍、新卡片、连接器开放投稿

**要点**：@bot 发布一轮质量、打磨和速度更新：**电脑任务平均快 3 倍**，其他回复的等待时间不到原来一半；聊天里的卡片换了更简洁的新设计。同时新增 **Robinhood、Coinbase、Trello、PostHog、beehiiv、eToro** 等连接器，团队也可以向 Grok Bot marketplace 投稿自己的连接器。@elonmusk 转发说「快多了」；@mntruell 说离「just works」的 bot 还有很长的路，最终它应该能处理物理世界里的事。@monokern 整理了 SpaceXAI 团队放进 marketplace 的 10 个自用 bot 模板：设计别的 bot 的 dr eggbot、盯云端 coding agent 和 PR 的 Engineer Bot、把需求做成 draft PR 原型的 Proto Bot、找浪费的 SaaS 开销并起草谈判的 Haggle Bot 等，这条收藏 **3.2k**。@XFreeze 称内部的 Haggle Bot 第一周就找出超过 **$100,000** 的可省开支（转述，未见官方数据）。

**为何值得看**：个人 agent 拼完能力，下一步就是速度和手感；模板和连接器同时开放投稿，等于把「怎么用」也交给生态。

- bot：质量、打磨与速度更新：https://x.com/bot/status/2111184270819803351  
- bot：电脑任务快 3 倍：https://x.com/bot/status/2111184275374813362  
- bot：新连接器与 marketplace 投稿：https://x.com/bot/status/2111184284786802881  
- elonmusk：「快多了」：https://x.com/elonmusk/status/2111239586873745604  
- mntruell：离 just works 还很远：https://x.com/mntruell/status/2111218918362861958  
- monokern：10 个官方 bot 模板：https://x.com/monokern/status/2111074067461611540  
- XFreeze：Haggle Bot 首周省钱：https://x.com/XFreeze/status/2111169776143986845

![Grok Bot 新卡片设计](/images/twitter-hots/2026-10-17/02-grok-bot.jpg)

---

## 3. OpenAI：Astra Pro 多 agent 并行，dot 值班接 Codex

**要点**：@OpenAI 宣布 ChatGPT 里的 **GPT-6 Astra Pro** 升级：响应更快、插件和工具用得更好，并且可以让**多个 agent 并行处理一个任务的不同部分**，每个 agent 的进度都能看到，完成后可以打开检查结果；Pro 用户在 Chat 标签页可用。这条帖子 5k+ 赞。@OpenAIDevs 讲了个案例：OpenAI 工程师 Ali 凌晨 3 点用 dot 处理值班告警，dot 查完问题后开了一个 **Codex** 线程，他直接在手机 ChatGPT app 里指挥修复；另一条讲 OpenAI 工程师怎么用 Codex 翻代码库、清维护积压。社区里，@jorilallo 说用 Codex 一晚做出完整可用的 iOS app，觉得 2026 年「没理由再用 React Native」；OpenAI 的 @thsottiaux 只发了一句「要么我们没点子了，要么在憋大招」，拿到 1.2 万赞、3,300 多条回复。

**为何值得看**：并行 agent 从 coding 工具进到 ChatGPT 主产品；「dot 排障 → Codex 修复 → 手机上 review」也是 OpenAI 自家给出的值班样板。

- OpenAI：Astra Pro 多 agent 并行：https://x.com/OpenAI/status/2111192259073094035  
- OpenAIDevs：dot 值班接 Codex：https://x.com/OpenAIDevs/status/2111211411766399288  
- OpenAIDevs：用 Codex 清维护积压：https://x.com/OpenAIDevs/status/2111213093577691337  
- jorilallo：Codex 一晚做出 iOS app：https://x.com/jorilallo/status/2111121623294300237  
- thsottiaux：「在憋大招」：https://x.com/thsottiaux/status/2110971985417441512

![OpenAI dot 值班案例](/images/twitter-hots/2026-10-17/03-openai-codex.jpg)

---

## 4. Claude Code：Code Review 成「秘密武器」，每轮对话 gzip 提速

**要点**：Claude Code Review 刚对 Team / Enterprise 正式开放（每个仓库可选 Quick / Standard / Deep 三档），@bcherny 随即说「没有它我没法想象怎么高效工作」：它跑在他所有 PR 上，几乎每个 bug 都能在合并前抓到，是团队又快又能提高质量的秘诀之一。这条帖子收藏 1.5k。@ClaudeDevs 公布性能改进：Claude Code 现在**每轮都把对话 gzip 压缩后再发**，更快到达模型；云端会话在你开始打字时就启动。@bcherny 另一帖推荐 **Claude Slides**，说自己现在都用它做幻灯片，收藏 1.4k。

**为何值得看**：agent 写代码的速度上来后，自动 review 成了把关质量的关键一环；gzip 这类「不起眼」的优化，直接决定每轮对话的等待时间。

- bcherny：离不开 Claude Code Review：https://x.com/bcherny/status/2111158313463525518  
- ClaudeDevs：gzip 对话、云会话预热：https://x.com/ClaudeDevs/status/2111209208012210409  
- bcherny：Claude Slides：https://x.com/bcherny/status/2111158659971699136

![Claude Code 性能改进](/images/twitter-hots/2026-10-17/04-claude-code.jpg)

---

## 5. poteto：信任 agent 的「倒金字塔」

**要点**：@poteto 发长帖讲怎么更放心地信任 agent 的产出，并建议「把这条直接丢给你的 bot 或 agent」。她的排序从多到少是：**① 代码库本身**：更好的架构、更强的类型和不变量、清晰的边界。agent 爱照抄现有写法、走最短路径，所以要「让容易的做法就是正确的做法」，用代码把一类问题彻底消灭。**② 静态分析**：lint、测试、CI、形式化验证（如 TLA+），是最省 token 的提前拦截方式。**③ 文字**：注释、规则、AGENTS.md、skills，只用于需要 agent 自己判断的地方，尽量少用。**④ 人工 review**：最难规模化，agent 提 PR 的速度下根本审不过来，所以精力应该花在设计「让 agent 默认做对」的环境上。这条帖子收藏 **6.6k**，几乎是点赞的两倍。

**为何值得看**：这是她这几天「验证环」「删注释」「原则型 skill」几条帖子的总纲，也给出了一个可执行的优先级：确定性的手段放在最上层。

- poteto：信任 agent 的倒金字塔：https://x.com/poteto/status/2111133080526495985

![poteto 的倒金字塔](/images/twitter-hots/2026-10-17/05-poteto-trust.jpg)

---

## 6. 云端 agent 接活：Cursor 画布、Devin 测折叠屏、Factory / Cline / Qoder

**要点**：几家 coding agent 同一天都在往「云端接活、交付成品」走。@cursor_ai：cloud agent 现在能做**交互式画布**，在 agent 干活时让它出一个 dashboard 或报告，做完用链接分享给团队。@dabit3：**Devin 能在 macOS 云端虚拟机里开发和测试 iPhone Duo 应用**，折叠、展开、合上，逐屏检查并附视频验证。@FactoryAI 的 **Delegations** 正式 GA，团队可以在日常用的工具里把活派给 Droid。@cline：**Cline Desktop 也能跑在云端了**，多任务并行，每个任务有独立沙箱，合上电脑也不停。@qoder_ai_ide 称 Qoder Cloud Agents 成为 HarnessRouter 上第一个云托管 agent 运行时，产品方调一个 API 就能拿到做完的结果。

**为何值得看**：竞争点正从「IDE 里帮你写」转向「云上自己跑完、带证据交付」，验证（视频、画布、PR）成了交付的标配。

- cursor_ai：cloud agent 交互式画布：https://x.com/cursor_ai/status/2111193957527146711  
- dabit3：Devin 测 iPhone Duo 应用：https://x.com/dabit3/status/2111159738373226566  
- FactoryAI：Delegations GA：https://x.com/FactoryAI/status/2111131400057602525  
- cline：Cline Desktop 上云：https://x.com/cline/status/2111171077187707033  
- qoder_ai_ide：Qoder Cloud Agents 接入 HarnessRouter：https://x.com/qoder_ai_ide/status/2110943383971860931

![Cursor：Canvas in Cloud](/images/twitter-hots/2026-10-17/06-cloud-agents.jpg)

---

## 7. Gemini 4 Argon 续：4 个 agent 27 小时通关 Minecraft

**要点**：@GoogleDeepMind 称 **4 个 Gemini 4 Argon agent 从零通关 Minecraft，用时 27 小时**：只靠代码和文字在沙盒里操作，共写了 **2,783 个程序**，在聊天里分工、共享笔记、一起 debug，全程没有人工介入。@omarsar0 解读论文：用时 27 小时 14 分，死了 605 次；没有人分配角色、写游戏逻辑或提前探种子；团队称这是 AI agent 首次端到端自主通关 Minecraft，适合当长程多 agent 软件任务的案例。分发端，@perplexity_ai 称 Argon 刷新 WANDR 基准纪录，向 Pro / Max 开放（@AravSrinivas 说快速搜索和 Computer 模式都能用）；@_mohansolo 宣布 Antigravity 给所有人**重置 Argon 和 Gemini 额度**，「周末接着干」。

**为何值得看**：昨天还在争 Argon 写代码到底行不行，今天 DeepMind 拿出了一个「一个计划坚持一天多、跨几千步」的长程案例；额度重置也说明 Antigravity 的需求确实很大。

- GoogleDeepMind：27 小时通关 Minecraft：https://x.com/GoogleDeepMind/status/2111127991401247033  
- omarsar0：论文解读：https://x.com/omarsar0/status/2111093058024755365  
- perplexity_ai：WANDR 纪录：https://x.com/perplexity_ai/status/2111110772747321460  
- AravSrinivas：Perplexity 各模式可用：https://x.com/AravSrinivas/status/2111111329536987234  
- _mohansolo：Antigravity 额度重置：https://x.com/_mohansolo/status/2111220356178751860

![Gemini 4 Argon 通关 Minecraft 论文](/images/twitter-hots/2026-10-17/07-gemini-argon-minecraft.jpg)

---

## 8. Anthropic：Mythos 5 设计量子电路，IPO 估值承压

**要点**：@AnthropicAI 公布 STEM Fellows 项目的成果：给出自然语言指令，**Claude Mythos 5** 设计的量子电路超过已发表的最佳方案，有时好上一个数量级以上。@dair_ai 补充论文细节：这是 Anthropic、哈佛等合作的工作，用 OpenEvolve 搜索生成电路的程序，由 Mythos 5 提出架构和改写，独立评估器验证正确性并打分；**8 个任务里 7 个**超过已知最佳设计，Toffoli 门和量子比特都更少。资本面上，@Reuters 报道部分现有和潜在投资人在看过最新财务披露后，正考虑给 Anthropic IPO 更低的估值；@business 称 Anthropic 已和此前致信要求推迟 IPO 的纽约市审计长 Mark Levine 建立沟通。另外 @claudeai 盘点近几周的六个社区项目（如用 Opus 5.5 做的山火分析原型），收获 1.3 万赞、6k 收藏。

**为何值得看**：一边是模型在科研上拿出硬结果，一边是 IPO 估值被重新讨论；昨天「已盈利」的消息之后，市场还在消化增速放缓。

- AnthropicAI：Mythos 5 设计量子电路：https://x.com/AnthropicAI/status/2111152183240511640  
- dair_ai：论文细节：https://x.com/dair_ai/status/2111155277886316847  
- Reuters：投资人考虑下调估值：https://x.com/Reuters/status/2110940070316294432  
- business：与纽约市审计长沟通：https://x.com/business/status/2111109995412549848  
- claudeai：六个社区项目：https://x.com/claudeai/status/2111177834127601902

![Claude 设计量子电路论文](/images/twitter-hots/2026-10-17/08-anthropic-quantum.jpg)

---

## 9. pi：Vitalik 的「偏执模式」，Pi Durable 上 Cloudflare

**要点**：@VitalikButerin 给自己的 agent harness **pi** 做了一个「paranoid mode」：把 zkAPI、Tor、额外的掩护流量和本地 LLM 改写提示词打包成一个 OpenAI 兼容的守护进程。每个对话走独立的 Tor 线路，付款不暴露身份，提示词先由本地模型（他用 qwen3.8-flash-next）改写再发出；harness 本身再套 bwrap 沙箱和 torsocks。他也承认延迟明显变高，而且 Tor 对「模型提供方和入口节点串通」的攻击防护有限。@pidotdev 发布周末读物：在 Cloudflare Durable Objects 上用 **Pi Durable** 搭一个带子 agent 的多人聊天 agent，收藏 1.3k。@badlogicgames 说他近两周所有工作都用一个「除了 LLM 调用，其余全跑在手机上」的 pi 原型，还在手机上重写了两次，「再也回不去了」（这是设计实验，暂不发布）。@mitsuhiko 和 Geoffrey Huntley 录了新一期 State of Agentic Coding，聊 code mode 和自我修改的 harness。

**为何值得看**：pi 这种小而可拆的 harness，正被拿去做隐私、云端持久化、纯手机端等各种方向的实验。

- VitalikButerin：pi 的 paranoid mode：https://x.com/VitalikButerin/status/2111046730959433793  
- pidotdev：Pi Durable on Cloudflare：https://x.com/pidotdev/status/2111100406612861105  
- badlogicgames：手机上跑的 pi 原型：https://x.com/badlogicgames/status/2111189600685207559  
- mitsuhiko：State of Agentic Coding 新一期：https://x.com/mitsuhiko/status/2111053302079410595

![Vitalik 的本地提示词改写](/images/twitter-hots/2026-10-17/09-pi-paranoid.jpg)

---

## 10. OpenCode：GLM 5.3 Flash 免费，两天两个免费 Flash 模型

**要点**：@opencode 宣布 **GLM 5.3 Flash 在 OpenCode 免费**，帖子拿到 1.7 万赞、4k+ 收藏。前一天它刚免费开放 DeepSeek V4.1 Flash，两天内放出两款免费的国产 Flash 模型。@thdxr 调侃：「每天醒来都看到一个新的免费模型，没人告诉我，我都不知道我们推理团队在干什么」，3.4k 赞。

**为何值得看**：免费模型继续是开源 coding agent 拉新的主要手段；对用户来说，选模型时要分清带 free 标的版本和付费版本。

- opencode：GLM 5.3 Flash 免费：https://x.com/opencode/status/2110986357539754114  
- thdxr：「又一个免费模型」：https://x.com/thdxr/status/2111066492947054660

![OpenCode：GLM 5.3 Flash 免费](/images/twitter-hots/2026-10-17/10-opencode-glm.jpg)

---
