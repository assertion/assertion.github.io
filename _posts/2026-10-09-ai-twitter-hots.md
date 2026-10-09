---
layout: post
title: AI Twitter 热点 · 2026-10-09
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, Claude, Claude Dashboards, Claude Motion, Claude Code, Managed Agents, Codex, GPT-6.1 Sol, Ultrafast, Gemini, Google Cloud, Grok Bot, Shopify, Omarchy, Anthropic Cyber Mission, OSS Scanner, OpenCode, Voyager, Pi Durable, Qwen3.8, Saluki, Step 5, Cline, Devin, Augment, Harness
lang: zh
translation_key: ai-twitter-hots-2026-10-09
issue: 28
item_count: 11
headline: "Claude 会做看板，Codex 提速 8 倍，Google 发布了「Gemini」"
highlights:
  - label: "Claude 往办公软件深处走"
    text: "Claude Dashboards 与 Motion 公测（3.27 万赞、近 2 万收藏），Docs / Slides / Design 对所有套餐开放；Anthropic 同日推出 Cyber Mission，给开源项目免费做漏洞扫描。"
  - label: "速度和入口同时开打"
    text: "Codex Day 4 上线即时 steering 和 GPT-6.1 Sol Ultrafast（最高快 8 倍）；Google 发布通用工作 agent「Gemini」；Grok Bot 借 Claude Code / Codex 接入别家订阅，并接上 Shopify。"
  - label: "开发者在争论「量」"
    text: "一天合并几百个 PR 到底有没有意义；OpenCode 月活接近 2000 万；Qwen3.8-27B 成了开源压缩、本地推理和 RL 实验的共同底座。"
products: [Claude, Codex, Gemini, Grok Bot, OpenCode]
stats:
  - value: "8 倍"
    caption: "GPT-6.1 Sol Ultrafast 相比 Standard 的最高提速"
  - value: "2000 万"
    caption: "OpenCode 月活接近的数字"
  - value: "21 倍"
    caption: "Claude Startups 48 小时申请量，对比此前 5 个月总和"
stat:
  value: "8 倍"
  caption: "GPT-6.1 Sol Ultrafast 相比 Standard 的最高提速"
---

# AI Twitter/X 热点 Digest · 2026-10-09（周五）


## 今日要点

1. **Claude 往办公软件深处走，也往安全上投钱**：@claudeai 发布 Claude Dashboards 和 Claude Motion 公测（3.27 万赞、近 2 万收藏，今天互动最高的 AI 产品帖），Claude 可以把数据做成实时看板、把想法做成动画讲解；Docs、Slides、Design 结束 beta，对包括 Free 在内的所有套餐开放。同一天 Anthropic 推出 Anthropic Cyber Mission 和免费的 OSS Scanner，并向 Genesis Mission 投入 1.5 亿美元。  
2. **速度和入口同时开打**：Codex「28 天」Day 4 上线即时 steering，同时发布 GPT-6.1 Sol Ultrafast，官方称比 Sol Standard 最高快 8 倍；Google Cloud 在 Gemini at Work 上发布名字就叫「Gemini」的通用工作 agent，Theo 和 Tibo 当场玩梗；Grok Bot 用户则让 bot 自己装上 Claude Code 和 Codex 来调用已有订阅，Grok Bot 也接上了 Shopify。  
3. **开发者在争论「量」**：「一天合并几百个 PR 有什么意义」引出 @poteto 的长文「volume does matter」；OpenCode 月活接近 2000 万，iOS 版开始 TestFlight；Qwen3.8-27B 成了开源压缩（Saluki 27B）、本地推理（lithos-metal）和 RL 实验的共同底座。

---

## 1. Claude：Dashboards 和 Motion 公测，Docs / Slides / Design 全面开放

**要点**：@claudeai 宣布 **Claude Dashboards** 和 **Claude Motion** 进入 beta：让 Claude 把数据变成实时看板，把想法变成动画讲解。这条拿下 3.27 万赞、1.99 万收藏、300 多万浏览。根据官方文章，Dashboards 可以直连 BigQuery、Databricks、Snowflake 等数据平台或 Salesforce 这类 CRM，用自然语言提问后生成会自动刷新的看板，每个数字都能点开看背后的查询，面向付费套餐；Motion 面向 Team 和 Enterprise，Claude 写的是驱动文字、图表和图片的动画代码，不调用视频生成模型，可以逐字修改并导出 MP4。同一串帖子里，**Claude Docs、Slides 和 Design 结束 beta，对包括 Free 在内的所有套餐开放**，团队成员可以和 Claude 一起编辑同一份文档、幻灯片或设计稿。另一条相关动态：Claude Startups 负责人 @sarahzorah 说，计划扩容后 48 小时内收到的申请量是此前 5 个月总和的 21 倍，且混进了大量非初创公司，因此暂停发放 Team 套餐和 API credits 福利，未领取的申请将重新审核（已领取的不受影响）。

**为何值得看**：这两天 OpenAI 把 GPT-6 带进 ChatGPT 聊天页，Anthropic 则把 Claude 往看板、动画、文档协作这些「办公交付物」上推。近 2 万收藏说明大家想的是直接拿来用。Claude Startups 被挤爆，也说明 Claude 套餐和 API 额度的吸引力很大。

- Dashboards 与 Motion 公测：https://x.com/claudeai/status/2108271552991252810  
- Docs / Slides / Design 全面开放：https://x.com/claudeai/status/2108271559928389679  
- minchoi 演示汇总：https://x.com/minchoi/status/2108274713458077711  
- Claude Startups 申请量 21 倍、暂停部分福利：https://x.com/sarahzorah/status/2108401845563806150

![Claude Dashboards 与 Claude Motion](/images/twitter-hots/2026-10-09/01-claude-dashboards-motion.jpg)

---

## 2. Codex「28 天」Day 4：即时 steering + GPT-6.1 Sol Ultrafast

**要点**：@thsottiaux 公布 **Day 4**：Codex 的 steering 变成「即时」的，模型对你中途的调整反应快得多，可以实时纠偏、不浪费算力；同时发布 **GPT-6.1 Sol Ultrafast**，他说两者搭配效果很好（8100 赞、1500 条回复）。@OpenAIDevs 的官方帖（4500 赞）称 Ultrafast 在 API、Codex 和 ChatGPT Work 中逐步上线，智能接近 Astra，速度最高是 Sol Standard 的 8 倍。按 OpenAI 开发者社区公告和模型文档，Ultrafast 的 API 价格是 Standard 的 6 倍（短上下文每百万 token 输入 $12、输出 $60）；在 Codex 和 ChatGPT Work 里目前只对 Pro $500、符合条件的按量计费 Enterprise 和 credit 制 Edu 开放。10 月 8 日下午（北京时间）还有一条「Day 3 返场」：Tibo 说他们**悄悄重新上线了 Codex cloud**，「现在挺好用了」（6800 赞、700 多收藏），引用的是 Tailscale 宣布 Codex Cloud 可以安全访问 tailnet 内部资源。@haider1 补了一句：Codex 6 周多了 1500 万活跃用户。国内方面，@Trae_ai 宣布 TRAE 已接入 GPT-6.1-Sol。

**为何值得看**：「快」正在成为 coding agent 的新卖点。即时 steering 让人可以边看边改方向，Ultrafast 又把等待时间压短，两个功能一起上就是为了让人一直盯着 agent 实时协作。不过 Ultrafast 价格是 Standard 的 6 倍，套餐限制也严，短期内主要是重度用户在用。

- Day 4：即时 steering + Ultrafast：https://x.com/thsottiaux/status/2108275041276420573  
- OpenAIDevs：Ultrafast 上线：https://x.com/OpenAIDevs/status/2108262812489531498  
- Day 3 返场：Codex cloud 重新上线：https://x.com/thsottiaux/status/2108084615349170480  
- Day 3 重置已全部到账：https://x.com/thsottiaux/status/2108040921044639779  
- haider1：6 周新增 1500 万活跃用户：https://x.com/haider1/status/2108086238280368272  
- TRAE 接入 GPT-6.1-Sol：https://x.com/Trae_ai/status/2108128522359464343

![Codex 即时 steering](/images/twitter-hots/2026-10-09/02-codex-day-4.jpg)

---

## 3. Google Cloud 发布通用工作 agent，名字就叫「Gemini」

**要点**：在 Gemini at Work 2026 上，Google Cloud CEO @ThomasOrTK 宣布 **Gemini**：一个「单一、通用的工作 agent」，掌握企业的业务上下文，在一个输入框里完成问答、知识工作、内容创作和写代码（2600 赞、1000 多收藏）。几条设计原则包括：网页端、任何设备可用，也能嵌进第三方应用甚至无界面运行；跑在云端、记忆和个性化图谱跨设备共享；可以拆出 sub-agent 处理多步骤任务，也可以作为有独立身份的「同事 agent」；在多个模型之间编排以平衡质量和成本。@sundarpichai 在现场有 700 多家客户。The Verge 和 VentureBeat 报道，它目前只对部分企业客户开放 private preview，同事 agent 会有自己的 @agents 邮箱；Gemini Enterprise 可用的地方不额外收费。X 上讨论最多的是名字：@theo 引用发布帖说「今天，Google 发布了 Gemini。没错，你没看错」（4300 赞），还补刀「以后他们下线这个产品时，我们就能说 Google killed Gemini」；@thsottiaux 随后发了一句「今天，我们发布 ChatGPT」（1.76 万赞）。

**为何值得看**：Google 这次把「通用 agent + 子 agent + 多模型路由 + 独立身份」直接放进 Workspace 体系，和 Grok Bot、ChatGPT Work、Claude 的办公产品正面竞争。目前只是 private preview，真实体验还要等更多客户上手。

- Thomas Kurian 发布帖：https://x.com/ThomasOrTK/status/2108245829530325307  
- Sundar Pichai：https://x.com/sundarpichai/status/2108257472553386059  
- TechCrunch：子 agent、多模型、独立邮箱：https://x.com/TechCrunch/status/2108260918350008526  
- Theo：「Google 发布了 Gemini」：https://x.com/theo/status/2108333105862087093  
- Theo：「Google killed Gemini」：https://x.com/theo/status/2108333157582078456  
- Tibo：「我们发布 ChatGPT」：https://x.com/thsottiaux/status/2108349826727588000

![Gemini at Work](/images/twitter-hots/2026-10-09/03-gemini-agent.jpg)

---

## 4. Grok Bot：自己装 Claude Code / Codex 接别家订阅，接上 Shopify，给 Omarchy 送 150 万美元 token

**要点**：昨天 Elon Musk 说 Grok Bot 会按任务选用包括 Claude Opus 在内的后端模型，今天用户已经自己动手了。@AndrewWarner 的教程被 Elon 转发（「True」，2900 赞），方法是对 Grok Bot 说一句「用 Claude Code 和 Codex 连接我的 Claude 和 ChatGPT 订阅」，bot 会在自己的电脑上开终端、装好两个 CLI、让你登录一次，之后就能把活分派给别家模型，不需要 API key、也不用新订阅；他的答疑帖拿下 1400 收藏。@chribjel 说「Grok Bot + Cursor cloud agents 是巨大的效率提升」，Elon 回了一个「Yes」（3600 赞）。产品侧，**@bot 宣布可以帮你打理 Shopify 店铺**：查订单、追库存、更新商品，@Shopify 同时上线 @grok 和 @bot 两个连接器；Elon 还提醒 Grok Bot 手机 app 可在 iOS 和 Android 下载（6100 赞）。@benln 列了团队最近几天的更新：主动型主 bot、免 API key 的 X 搜索与监控、更快回复、聊天里做幻灯片、在 X 上 @bot 下指令、按任务选模型。另一条大新闻：@dhh 宣布 **@SpaceXAI 成为 Omacom 基金会的创始企业赞助方，捐出价值 150 万美元的 Grok token**，用于 Omarchy 的维护和开发（1.09 万赞）。也有疲劳感：@GergelyOrosz 吐槽 Grok Bot 和 Codex / Dots 两边团队天天隔空互呛，「开始有点烦了」。

**为何值得看**：让 bot 通过官方 CLI 去调用你已付费的其他家订阅，等于把 Grok Bot 变成了多家模型之上的调度层。Shopify 连接器则把它接进了电商后台。用 token 而不是现金赞助开源项目，这种做法也值得关注。

- AndrewWarner：用 CLI 接入 Claude / ChatGPT 订阅：https://x.com/AndrewWarner/status/2107930509284126970  
- Elon 转发「True」：https://x.com/elonmusk/status/2108048212233785664  
- 五个常见问题：https://x.com/AndrewWarner/status/2108236955188068385  
- Grok Bot + Cursor cloud agents：https://x.com/elonmusk/status/2108050093916164568  
- Grok Bot 接入 Shopify：https://x.com/bot/status/2108228871938359347  
- Shopify 新连接器：https://x.com/Shopify/status/2108226178146263268  
- 手机 app：https://x.com/elonmusk/status/2108272088582676627  
- 团队近期更新清单：https://x.com/benln/status/2108194230938247627  
- DHH：SpaceXAI 赞助 Omarchy 150 万美元 Grok token：https://x.com/dhh/status/2108127662120014285  
- SpaceXAI 方面说明：https://x.com/mattyp/status/2108212924666040343  
- Gergely：互呛有点烦了：https://x.com/GergelyOrosz/status/2108138915823755642

![Grok Bot 接入 Shopify](/images/twitter-hots/2026-10-09/04-grok-bot-shopify.jpg)

---

## 5. Anthropic Cyber Mission：免费给开源项目扫漏洞，另向 Genesis Mission 投入 1.5 亿美元

**要点**：@AnthropicAI 宣布 **Anthropic Cyber Mission**，目标是保护关键基础设施和开源软件（1600 赞、近 400 收藏）。第一个落地项目是 **OSS Scanner**：用 Anthropic 最强的模型定期扫描主动报名的开源项目，免费提供漏洞报告，包括概念验证、原理说明和修复建议。官方说明里强调报告完全由模型生成、没有人工复核，所以更快，但可能有误报或严重级别不准，预期真阳性率在 90% 以上；报名方式是核心维护者向官方 GitHub 仓库提交 PR，资格参照 OSS-Fuzz，面向「对基础设施和用户安全有关键影响」的项目。同一天 Anthropic 还宣布向美国能源部牵头的 **Genesis Mission 投入 1.5 亿美元**，并向 15 个以上联邦机构提供 Claude 和技术支持（2600 赞）。科研方面，Anthropic 介绍了一位天体物理学家用 Claude Science 拼出第一张完整的紫外全天图：原本要几周的工作几天完成（3000 赞）。

**为何值得看**：AI 找漏洞的能力已经强到会让维护者被报告淹没，OSS Scanner 让项目自己选择「要不要未经人工复核的快速通道」，算是对这个问题的一种回答。对维护关键开源库的团队来说，可以评估一下是否报名。

- Anthropic Cyber Mission：https://x.com/AnthropicAI/status/2108302539498414208  
- OSS Scanner：https://x.com/AnthropicAI/status/2108302543977906649  
- 长期投入说明：https://x.com/AnthropicAI/status/2108302545953157156  
- Genesis Mission 1.5 亿美元：https://x.com/AnthropicAI/status/2108226292235809081  
- Claude Science 紫外全天图：https://x.com/AnthropicAI/status/2108290395599667700

![OSS Scanner](/images/twitter-hots/2026-10-09/05-anthropic-oss-scanner.jpg)

---

## 6. Claude Code 2.1.295 支持 OSC 7501，Managed Agents 出自动化指南

**要点**：@ClaudeCodeLog 记录了一天两个版本：**2.1.294** 修复了「指令式」prompt / agent hooks 没能拦住目标命令的问题；**2.1.295** 有 143 项 CLI 改动，重点包括命令和 HTTP hooks 新增 `onFailure: "block"`（hook 启动失败、超时或异常退出时直接阻止动作），Claude apps gateway 的上游可以限定模型列表、设置首字节超时，以及**支持 OSC 7501（Program Status Protocol）**，让终端显示 Claude Code 是在工作、在等你还是已完成。这个协议是 Ghostty 作者 @mitchellh 本周提出的，他感叹 Anthropic 跟进速度「不可思议」（1400 赞）。@ClaudeDevs 发布 **用 Claude Managed Agents 构建自动化的指南**：部署一个按计划读取 Slack / GitHub 并发布更新的 agent，带凭据和记忆，可以用一条 Claude Code 命令搭好，并使用 Max / Team 新附送的 API credits（近 2000 赞、2100 收藏）；@RLanceMartin 补充了凭据保险库、护栏和记忆等部署要点。@trq212 演示自己用这些 credits 做的「每日 AI 主页」，每次运行用 Sonnet 5.5 约 $0.75（1200 收藏）。另外，一则「用 Claude Code 在 NASA TESS 数据里找到候选行星」的 r/ClaudeAI 帖子在 X 上传开：作者写了 1000 多个脚本筛查七年的数据，@MTSlive 称 NASA 已同意进一步验证，@trq212 配图写了一句「我们应该更有野心」（6600 赞）。

**为何值得看**：hooks 失败即阻止、gateway 模型白名单，都是在团队和企业里放心使用 Claude Code 所需的「护栏」能力；Managed Agents + 套餐内 API credits 则让个人也能低成本跑定时 agent。行星发现目前仍是「候选」，结论以后续验证为准。

- Claude Code 2.1.294：https://x.com/ClaudeCodeLog/status/2108249134062792958  
- Claude Code 2.1.295：https://x.com/ClaudeCodeLog/status/2108287382084608410  
- 2.1.295 changelog 详情：https://x.com/ClaudeCodeLog/status/2108287396739527090  
- mitchellh：Claude Code 支持 OSC 7501：https://x.com/mitchellh/status/2108296550405619967  
- Managed Agents 自动化指南：https://x.com/ClaudeDevs/status/2108320296323477683  
- RLanceMartin：部署要点：https://x.com/RLanceMartin/status/2108327973078315274  
- trq212：每日 AI 主页：https://x.com/trq212/status/2108301668828004396  
- 每次运行约 $0.75：https://x.com/trq212/status/2108301670451163390  
- 候选行星：https://x.com/MTSlive/status/2108215293793476754  
- trq212：「我们应该更有野心」：https://x.com/trq212/status/2108246323707383961

![用 Claude Code 找候选行星](/images/twitter-hots/2026-10-09/06-claude-code-planet.jpg)

---

## 7. OpenCode：月活接近 2000 万，iOS 版开放 TestFlight

**要点**：有人发帖说「Twitter 是泡沫，普通人并没有在 vibe coding」，@thdxr 回应：**OpenCode 月活用户接近 2000 万**，而全世界大概只有 5000 万到 1 亿开发者，「所以要么五分之一的开发者在用 OpenCode，要么……」（2000 赞）。随后他放出 **OpenCode iOS app 的 TestFlight**，限 1000 人，配对前需要升级到 OpenCode v2.0.26，他说「还需要打磨，但已经很有用」。团队成员 @ryanvogel 说有 OpenAI key 的话，iOS app 的语音模式「好用到离谱」，他每天在车上用；@LukeParkerDev 则在夸 OpenCode 桌面版内置浏览器。thdxr 前一天还有一条被大量转发的观点：vibe coding 是可以练的，水平差距「大概和编程第 1 天与第 10000 天之间一样大」（2800 赞）。另有一段花絮：thdxr 与 @trq212、@poteto 在 X 上互相调侃，poteto 称「第二季开始了」。

**为何值得看**：2000 万月活是一个开源 coding agent 罕见的自报规模（尚无第三方数据）；移动端加语音，意味着 OpenCode 也加入了 Cursor、Claude Code 已在做的「离开电脑也能指挥 agent」的方向。

- 接近 2000 万月活：https://x.com/thdxr/status/2108263779335287027  
- iOS TestFlight：https://x.com/thdxr/status/2108284341923049578  
- iOS 语音模式：https://x.com/ryanvogel/status/2108304752618488138  
- 桌面版内置浏览器：https://x.com/LukeParkerDev/status/2108372939662045359  
- vibe coding 可以练：https://x.com/thdxr/status/2107993286996594889  
- 「第二季开始了」：https://x.com/poteto/status/2108266322216075460

![OpenCode iOS 语音模式](/images/twitter-hots/2026-10-09/07-opencode-ios.jpg)

---

## 8. 「一天几百个 PR 有什么意义？」poteto：volume does matter

**要点**：设计工程师 @emilkowalski 发问：「谁能帮我理解一天发几百个 PR 有什么意义？为什么需要这么多 PR？也许我还不够 AI-pilled」（1700 赞、200 多条回复）。起因之一是 @vinvan 晒出「今天已合并 145 个 PR」，并推荐「poteto 打法」：拿到大量 token，为每条工作线建一个编排项目，只跟编排者对话，让它们派生 cloud agents，再用跨模型互审做验证。@poteto 先回复说他们有 **agentic code review，给每个 PR 评估风险，中低风险的不需要人工审查直接合并**，再加上 Bugbot；随后发长文 **「volume does matter」**（2400 赞、1500 收藏）：以前看 PR 数量没意义，是因为大家看的是影响力，数量只在分布两端（表现不佳者和「coding machine」）才有意义；有了 agent，每个人都可以成为 coding machine，如果你的 PR 数还和以前一样，就该想想为什么；扩大产出的前提是先建立对 agent 输出的信任；token 很贵，但要按「每单位智能的成本」算，而且会越来越便宜；工程师的工作正在从写软件，变成搭建写软件的「工厂」，她称之为「米其林厨房」。她随后又发了一句「你应该更有野心，有野心得多」（5500 赞）。另一个角度来自 @trq212：他见到最常见的失败，是人们在自己不熟悉的领域工作，不知道怎么把 prompt 和计划写精确，只能反复低效迭代（3200 赞、近 1000 收藏）。

**为何值得看**：这是继「1.5T token 值多少钱」之后，围绕「agent 重度用法」的又一轮讨论。真正可借鉴的是验证机制（风险分级、自动审查、跨模型互审），PR 数量本身说明不了太多问题。

- emilkowalski 的疑问：https://x.com/emilkowalski/status/2108270779200852148  
- vinvan：一天 145 个 PR：https://x.com/vinvan/status/2107995483981361243  
- poteto：agentic code review 分级合并：https://x.com/poteto/status/2108283057581195413  
- poteto 长文「volume does matter」：https://x.com/poteto/status/2108290818746528017  
- poteto：更有野心：https://x.com/poteto/status/2108299315764777171  
- trq212：最常见的失败模式：https://x.com/trq212/status/2108021247301062894

![poteto：volume does matter](/images/twitter-hots/2026-10-09/08-pr-volume.jpg)

---

## 9. Harness 不只写代码：Voyager 做创作，Pi Durable 被搬进 Swift 和 Obsidian

**要点**：YC Fall 2026 项目 **Voyager** 发布（@anvisha，2100 赞、2700 收藏），定位「创作领域的 Codex」：大多数 AI 工具为写代码而生，Voyager 则是为视频、图形和游戏调校的 harness，可以用 Opus、Astra、DeepSeek 等模型，自带免费的图形、音乐和视频剪辑工具，也能驱动 Blender、DaVinci Resolve、After Effects、Ableton 等 100 多款软件；发布串里的作品全部由它生成。需要注意，官网 FAQ 说 Voyager 应用本身是 Nullframe（Moda 团队）的闭源软件，「open」指的是可自选 agent、模型和软件，并能接入自己的 skills。@omarsar0 评价：「别小看领域专用 harness，创作需要自己的 harness。」同一思路也出现在 Pi 社区：@viticci 想要的「Apple Bots」不存在，于是把 @badlogicgames 的 **Pi Durable 大部分移植到了 Swift**，做出一个带苹果生态集成的精简 harness（360 收藏），badlogicgames 回应说这是对 JavaScriptCore 的巧妙用法；@rcarmo 把 pi-durable 跑进了 Obsidian；@rivet_dev 让 Pi Durable 跑在 Rivet Actors 上，每个 agent 约 1.3 MB、毫秒级启动、崩溃可恢复。

**为何值得看**：coding agent 的 harness 正在被复制到别的领域。Voyager 把这套模式搬到创作软件，Pi Durable 被嵌进笔记应用和原生 App，都说明「模型 + 工具循环 + 持久化」这套架构不只适合写代码。

- Voyager 发布：https://x.com/anvisha/status/2108252061209088159  
- omarsar0：领域专用 harness：https://x.com/omarsar0/status/2108268485860040876  
- viticci：Pi Durable 移植到 Swift：https://x.com/viticci/status/2108192119152140318  
- badlogicgames 回应：https://x.com/badlogicgames/status/2108193659023950005  
- pi-durable 跑在 Obsidian 里：https://x.com/rcarmo/status/2107819123724161205  
- Rivet 支持 Pi Durable：https://x.com/rivet_dev/status/2107840906141335935

![Voyager](/images/twitter-hots/2026-10-09/09-voyager.jpg)

---

## 10. 开源模型：Qwen3.8-27B 成公共底座，Step 5 Preview 在 Cline 免费

**要点**：今天好几条开源动态都建立在 **Qwen3.8-27B** 上。@underdogdotai 发布 **Saluki 27B**：基于 Qwen 3.8 27B 压缩，体积小近 7 倍（约 7.89GB），保留 96% 的基准表现，工具调用还超过原版，Apache 2.0 许可（3100 赞、3900 收藏，今天收藏最多的开源模型帖）；公开报道也提到它在数学和复杂推理上有所下降。@JiaZhihao 开源 **lithos-metal**：用 megakernel 和 DSpark 投机解码，在一台 M5 Max 上把 Qwen3.8-27B 跑到单用户峰值 200+ tokens/s，一条命令接入任意 coding agent。@AfterQuery 称只用 500 条 SWE agent 任务、15 步 GRPO，就把 Qwen3.8-27B-Medium 提升了 11.3 分；Hugging Face 上线 Open Env Arena，让 agent 设计 RL 环境、平台用 Qwen-3.8-27B 训练并上榜。另一边，**@cline 宣布阶跃星辰 Step 5 Preview 在 Cline 中限时免费**，称其在 DeepSWE 上超过 Kimi K3 和 GLM-5.3。不过 Step 5 Preview（600B 总参数 / 27B 激活的 MoE）官方计划 10 月 15 日才放出权重，目前还不是开源权重。最后提醒一句：@lmoroney 转述 ProjectDiscovery 的实验，花不到 50 美元给 Qwen2.5-7B 植入后门，接入 Codex CLI 后遇到触发词就外传凭据，而常规基准测不出来（2400 赞、1400 收藏）。

**为何值得看**：27B 级开源模型正在变成「本地 coding agent」的默认尺寸，压缩、推理加速和后训练都在围绕它展开；但在 agent 里跑来源不明的权重，等于把执行权交给陌生人，沙箱、隔离密钥和出网限制要配齐。

- Underdog Saluki 27B：https://x.com/underdogdotai/status/2108021482983133395  
- lithos-metal 开源：https://x.com/JiaZhihao/status/2108249739414147259  
- AfterQuery：500 条任务 +11.3 分：https://x.com/AfterQuery/status/2108314046365905073  
- Open Env Arena：https://x.com/ben_burtenshaw/status/2108200143069561151  
- Step 5 Preview 在 Cline 免费：https://x.com/cline/status/2108249633789263917  
- 开源模型后门实验：https://x.com/lmoroney/status/2108071329790370027

![Underdog Saluki 27B](/images/twitter-hots/2026-10-09/10-saluki-27b.jpg)

---

## 11. Devin 推 Security Swarm，Augment 把 Cosmos 和 Auggie CLI 卖给 Harness

**要点**：Cognition 发布 **Devin Security Swarm**：派出一群并行的 Devin 遍历代码库，建立威胁模型，寻找真实可利用的漏洞（包括跨文件串联的漏洞），在沙箱里证明，再以 PR 形式交付修复。Cognition 内部，@wlhunter25 介绍了他们「入职」的第一位市场运营经理，名字就叫 Devin（180 收藏）；ploy 的 @bryantchou 说 Devin 正在公司内部迅速取代 Codex 和 Claude Code，「90% 的开发工作在 Slack 里完成」。另一条行业新闻：**@augmentcode 宣布把 Cosmos、Auggie CLI、Code Context Engine 及相关技术出售给 @harnessio**，团队加入 Harness，继续为其「自主 SDLC 平台」做软件工厂能力。按 Harness 的公告，Cosmos 将变成 Harness Cosmos Software Factory Agent，负责从想法到可合并代码这一段，后续交付、测试、安全由 Harness 自家 agent 接手。

**为何值得看**：Anthropic 的 OSS Scanner 和 Devin 的 Security Swarm 同一天上线，安全审计正在成为 coding agent 的标配场景；Augment 出售核心产品线则说明，独立 AI 编程工具在大厂和开源工具的夹击下开始整合。

- Devin Security Swarm：https://x.com/devindevelopers/status/2108240907539804464  
- Cognition 的「市场运营 Devin」：https://x.com/wlhunter25/status/2108242698259894399  
- ploy：Devin 取代 Codex 和 Claude Code：https://x.com/bryantchou/status/2108327180141035989  
- Augment 出售 Cosmos 等给 Harness：https://x.com/augmentcode/status/2108212600651887095

![Devin Security Swarm](/images/twitter-hots/2026-10-09/11-devin-security-swarm.jpg)
