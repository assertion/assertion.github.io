---
layout: post
title: AI Twitter 热点 · 2026-10-08
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, Claude Haiku 5.5, Claude Code, GPT-6, Intelligent UI, ChatGPT, Codex, Grok Bot, Windows, MAI-Code, GitHub Copilot, tsc-rs, TypeScript, Cursor, Photocraft, DHH, Pi, OSC 7501, OpenCode, opentunnel
lang: zh
translation_key: ai-twitter-hots-2026-10-08
---

# AI Twitter/X 热点 Digest · 2026-10-08（周四）


## 今日要点

1. **小模型和「便宜算力」成了主线**：Anthropic 发布 Claude Haiku 5.5（3.3 万赞），100k token 以内价格只有 Haiku 4.5 的十分之一，同时把 Sonnet 5.5 缓存读取价格减半，并给 Max / Team 套餐每月送 API credits；微软则把 137B 的 MAI-Code-1.1 Flash 搬到本地 PC，GitHub Copilot 将自动把任务路由到本地模型。  
2. **OpenAI 和 Grok Bot 都在重做「入口」**：GPT-6 带着 Intelligent UI 进入 ChatGPT 聊天页，回答可以直接是可交互界面；Codex「28 天」Day 3 宣布 Codex 与 ChatGPT Work 活跃用户创下 4000 万新高，并再发一次额度重置；Elon Musk 宣布 Grok Bot 今后按任务调用最合适的后端模型，包括 Claude Opus 5.5（9.5 万赞）。  
3. **「agent 写代码」的成本账被摊开算**：Theo 发布 tsc-rs，称烧了约 40 万美元 Codex token 没做成、换 Opus 花约 2 万美元两周搞定；有人按 1.5T token 推算 Cursor 重度用户一年要 1.32 亿美元，Theo 逐条反驳；AI 净室重写 Photoshop 的讨论则让 Naval 喊出「模型是软件最后的护城河」。

---

## 1. Anthropic：Claude Haiku 5.5 发布，Sonnet 缓存减半，订阅送 API 额度

**要点**：@claudeai 发布 **Claude Haiku 5.5**，称它是「最便宜、最快、能力最强」的小模型，平均运行成本比 Haiku 4.5 低约 75%。这条拿下 3.3 万赞、3800 收藏。定价分档：输入 10 万 token 以内为每百万 $0.10 / $0.50（输入 / 输出），超过 10 万 token 涨到 $0.50 / $2.50；@trq212 强调 10 万 token 以内比 Haiku 4.5 便宜 10 倍。官方成绩表里，Terminal-Bench 4.0 从 Haiku 4.5 的 0% 提到 39.2%（GPT-6 Luna 为 16.4%），OSWorld 2.1 为 72.4%。Artificial Analysis 给出 43 分的智能指数，比上一代 Haiku 高 26 分，这也是第一个支持 effort 设置和自适应思考的 Haiku；但 @haider1 指出它在最高 effort 下比 Opus 5.5 max 还费 token。同时公布的还有三件事：**Sonnet 5.5 缓存读取价格减半**至每百万 $0.10，长任务整体便宜约 20%；**Max / Team 套餐每月附送 Claude Platform API credits**（Max 5x 送 $100、Max 20x 送 $200、Team 最多 $500 共享），可以在自己的代码或第三方 harness 里用；Python / TypeScript SDK **内置 computer use 和 browser use 工具集**，SDK 负责跑循环并把动作发给驱动，browser-use 当天就宣布适配。Claude Code 方面，@lydiahallie 介绍可以让 Claude 以指定 effort 级别运行 subagent（需 v2.1.292+，2800 赞），2.1.293 把默认 Haiku 换成 1M 上下文的 Haiku 5.5。Cursor、GitHub Copilot、OpenCode、Devin 都在当天接入（见第 5、7、11 条）。

**为何值得看**：Haiku 5.5 的价格和 subagent、computer use 场景高度匹配，配合「订阅送 API 额度」，Anthropic 正在把「用 Opus 做 lead、用 Haiku 跑杂活」的多模型用法变得更便宜。@theo 评价它在成本 / 智能图上「罕见地靠左」，算是今天最受好评的模型发布。

- Haiku 5.5 发布：https://x.com/claudeai/status/2107894039626277339  
- 成绩对比：https://x.com/claudeai/status/2107894042235166750  
- Sonnet 5.5 缓存减半：https://x.com/claudeai/status/2107894060229034197  
- Max / Team 每月 API credits：https://x.com/ClaudeDevs/status/2107895957933408429  
- SDK 内置 computer use：https://x.com/ClaudeDevs/status/2107925762720326090  
- trq212：10 万 token 内便宜 10 倍：https://x.com/trq212/status/2107898493234982968  
- Artificial Analysis 评测与 token 消耗争议：https://x.com/haider1/status/2107915358309126397  
- Claude Code subagent effort：https://x.com/lydiahallie/status/2107625236430798909  
- Devin 接入：https://x.com/devindevelopers/status/2107943421461635481  
- Theo 评价：https://x.com/theo/status/2107915920714944999

![Claude Haiku 5.5 成绩表](/images/twitter-hots/2026-10-08/01-claude-haiku-5-5.jpg)

---

## 2. OpenAI：GPT-6 和 Intelligent UI 进入 ChatGPT

**要点**：@OpenAI 宣布 **GPT-6 与 Intelligent UI 面向所有人上线 ChatGPT**：回答不再只是文字，模型可以当场生成可视化内容和可交互的小工具。这条 1.46 万赞、4000 收藏。分档方面，Plus / Pro / Business / Enterprise 今天上线，由 GPT-6 Sol 驱动；Free 和 Go 用户明天开始，由 GPT-6 Luna 驱动。这次只改 ChatGPT 的 Chat 页，**Work 和 Codex 背后的模型不变**。@sama 的总结是「ChatGPT 现在能为你生成定制 UI」（5000 赞、1300 收藏）；@michpokrass 解释说，Intelligent UI 是「押注模型智能」，团队专门给 GPT-6 做了一套工具，让生成的界面省 token、即时流式呈现、符合设计语言；@thsottiaux 提到为此做了大量模型和基础设施改进，要支撑 12 亿用户。

**为何值得看**：这和昨天日报里 T3 Code 在线程里渲染可视化是同一个方向，只是 OpenAI 直接推到了十亿级用户的聊天入口。对做 agent 客户端的团队来说，「回答 = 可交互界面」正在成为默认预期。

- 发布帖：https://x.com/OpenAI/status/2107894997538525580  
- 分档与模型说明：https://x.com/OpenAI/status/2107895006350791071  
- Sam Altman：https://x.com/sama/status/2107924408597950702  
- Greg Brockman：https://x.com/gdb/status/2107899150247616531  
- 设计思路：https://x.com/michpokrass/status/2107939609380331811  
- Tibo：支撑 12 亿用户：https://x.com/thsottiaux/status/2107912709715132482

![GPT-6 with Intelligent UI](/images/twitter-hots/2026-10-08/02-gpt-6-intelligent-ui.jpg)

---

## 3. Codex「28 天」Day 3：活跃用户 4000 万，又一次额度重置

**要点**：Day 2 结束后，@thsottiaux 让社区在「四项新功能」和「额度重置」之间投票，结果重置胜出，他说自己校准过，「这个游戏似乎天生偏向重置」，但规则就是规则，于是当场给大家重置了额度。这条 1.56 万赞、2200 多条回复。到了 **Day 3**，他表示今天主角是 ChatGPT 里的 GPT-6，同时 **Codex 和 ChatGPT Work 的活跃用户创下 4000 万新高**，为了庆祝，又给所有付费账户加载了一次「储备重置」（1.38 万赞）。也有不同声音：@theo 发视频说 **200 美元的 Codex 套餐「被削得很厉害」**，问还值不值得继续用。

**为何值得看**：连续两天发额度重置，加上 4000 万这个数字，说明 Codex 的增长和用量压力同时在上升；Theo 的抱怨则提醒，重度用户最关心的仍是套餐里实际能用多少。

- 投票后重置额度：https://x.com/thsottiaux/status/2107676072871600470  
- Day 3：4000 万活跃用户：https://x.com/thsottiaux/status/2107913674593644711  
- Theo：200 美元套餐被削：https://x.com/theo/status/2107935187825008691

![Codex Day 3](/images/twitter-hots/2026-10-08/03-codex-day-3.jpg)

---

## 4. Grok Bot：后端改为「哪个模型最好用哪个」，还能盯 X 了

**要点**：@elonmusk 发布「关于 Grok Bot 的重要说明」：今后 **@SpaceX 会按任务选用最合适的后端模型，包括 Claude Opus 5.5、Midjourney、Suno 等主流 API**，目标是给用户最好的结果。这条拿下 9.5 万赞、8800 收藏，是今天互动最高的 AI 帖。他随后补充：简单问题路由到小而快的模型，复杂问题路由到大模型；大部分请求将来会交给「闪电版」的 **Grok 4.8**（尚未发布）。产品侧，@ericzakariasson 发布 **Grok Bot 0.68.1**：Bot 可以和你一起做幻灯片并导出为 PowerPoint 或 Google Slides，可以从草稿卡片直接发带格式的邮件，computer use 更快、屏幕升到 1920×1200。晚些时候 @bot 宣布 **Grok Bot 现在可以搜索、阅读并监控 X**（4500 赞），@poteto 给出的用法是：让 bot 盯着 X 上对你产品的反馈，功能请求送进 issue tracker，bug 交给 Cursor cloud agent 或 Project 去分诊修复，「闭环了」。另外 Grok 4.7 已上线 Microsoft Foundry。

**为何值得看**：一个模型公司的助手产品公开说「后端会用竞争对手的模型」，在今天的模型路由讨论里很少见；X 监控能力则让「用户反馈 → 修复」这条链第一次可以完全交给 bot。

- Elon：按任务选后端模型：https://x.com/elonmusk/status/2107724314451878104  
- 简单问题走小模型：https://x.com/elonmusk/status/2107849623364895151  
- 大部分请求交给 Grok 4.8 快速版：https://x.com/elonmusk/status/2107894231922876510  
- Grok Bot 0.68.1：https://x.com/ericzakariasson/status/2107887770937283028  
- 搜索、阅读、监控 X：https://x.com/bot/status/2107949161878606089  
- poteto：反馈闭环：https://x.com/poteto/status/2107963437154435182  
- Grok 4.7 上线 Microsoft Foundry：https://x.com/SpaceXAI/status/2107623124909060174

![Grok Bot 0.68.1](/images/twitter-hots/2026-10-08/04-grok-bot.jpg)

---

## 5. 微软：MAI-Code-1.1 Flash 跑在本地，Copilot 学会把活交给本地模型

**要点**：@satyanadella 称今天是 Windows 的「新篇章」，要把「不计量的智能」带到每台 PC，让 PC 成为 agent 可以安全工作的地方（4300 赞、1300 收藏）。要点包括：**MAI-Code-1.1 Flash**，一个 137B 参数、256K 上下文的编程模型，已针对 PC 本地运行优化；**GitHub Copilot 可以把工作转交给本地模型**，降低项目成本；Hybrid Intelligence 让 Copilot 直接在 PC 上执行操作、敏感工作留在本机；「Code in Copilot」可以在桌面上直接构建软件、不花云端 token；Windows 与 Agent 365 打通，提供本地 agent 执行沙箱 MXC；新硬件如搭载 NVIDIA RTX Spark 的 Surface Laptop Ultra。@github 同步宣布 Copilot **即将支持智能本地模型路由**（Project HydraFusion 的下一步），合适时自动把任务交给本地模型、节省 AI credits；**Copilot 本地沙箱正式 GA**，可在 Copilot CLI、Copilot app 和 VS Code 中隔离命令执行、控制文件 / 网络 / 凭据访问，企业可统一管理策略；Claude Haiku 5.5 也在 Copilot 中 GA，GitHub 称早期测试里它在许多编码任务上追平 Sonnet 5，且步数和 token 更少。

**为何值得看**：当云端模型在拼价格时，微软选择用「本地模型 + 本地沙箱」把成本压到接近零；如果 Copilot 的自动本地路由效果好，会直接影响开发者对按 token 付费工具的预期。

- Satya 发布汇总：https://x.com/satyanadella/status/2107898018112647313  
- Copilot 本地模型路由：https://x.com/github/status/2107896916595884177  
- Copilot 本地沙箱 GA：https://x.com/github/status/2107915368358404147  
- Haiku 5.5 在 Copilot GA：https://x.com/github/status/2107934117581189271

![Windows 与 Copilot](/images/twitter-hots/2026-10-08/05-windows-copilot.jpg)

---

## 6. Theo 发布 tsc-rs：用 agent 把 TypeScript 编译器移植到 Rust

**要点**：@theo 发布 **tsc-rs（又名 ts-rust）**：用 Rust 完整重写 TypeScript 编译器、类型检查器和 LSP，号称可以直接替换 tsc，开源可用。他说这个项目让 agent 跑了 5 个月：**烧了约 40 万美元 Codex token 毫无进展，换成 Opus 花约 2 万美元、两周做成**，而且他「一行代码都没读过」。这条 5000 赞、1400 收藏。对应仓库 pingdotgg/ts-rust 在 10 月 7 日新建，README 的定位是「TypeScript 7 编译器的实验性 Rust 移植」。后续几帖也很有意思：Opus 把「移植」理解得很彻底，把 Go 标准库的大部分也搬进了 Rust（TypeScript 7 本身是 Go 写的）；这些用量大约相当于 Claude 200 美元套餐 10 周的额度；首批 5 个 issue 里有 4 个其实是上游 TypeScript 自己的行为，「移植忠实到 bug 也照搬」；他本人不打算维护，「Claude 会维护」。社区已经有人把它跑进了 Cloudflare Worker。

**为何值得看**：这是今天讨论最多的「大型 agent 工程」案例，也是一次少见的 Codex 与 Opus 同题对比（作者自述，非严格评测）。在「不读代码」的前提下完成编译器级移植，验证手段（对齐上游行为、拿真实 issue 检验）比模型本身更值得借鉴。

- 发布帖：https://x.com/theo/status/2107789940482621795  
- 连 Go 标准库也一起移植：https://x.com/theo/status/2107803180109267440  
- 约等于 10 周 Claude 套餐用量：https://x.com/theo/status/2107792358540730661  
- 5 个 issue 里 4 个是上游行为：https://x.com/theo/status/2107937004424138770  
- 「Claude 会维护」：https://x.com/theo/status/2107934938398081519

![tsc-rs 移植成本](/images/twitter-hots/2026-10-08/06-tsc-rs.jpg)

---

## 7. Cursor：手机遥控本机 agent，以及一场「1.5T token 值多少钱」的争论

**要点**：@cursor_ai 宣布 **可以用手机控制电脑上的 agent**：在 Cursor iOS app 里查看进度、回复或发起新任务，企业版需管理员开启（2200 赞）。同一天 **Claude Haiku 5.5 上线 Cursor**，短请求成本比 Haiku 4.5 低 10 倍，可以在 CursorBench 上对比。另一个热点是成本争论：@peterpme 发现 @poteto 的 Cursor 主页公开显示 **30 天用了 1.5T token**，按每百万 $8 推算一年要 1.32 亿美元（2700 赞、800 收藏）。@theo 长文反驳：1.5T 里包含缓存 token，他自己 335 亿 token 的实际均价只有每百万 $0.56；真实 API 成本大概在每月 10 万到 50 万美元；而且按 Artificial Analysis 的数据，同等智能的成本 5 个月降了 30 倍，一年后复现同样的工作可能只要每年 1200 美元。poteto 本人回应，她努力同时做 Grok Bot 和 Cursor 的重度用户，是为了给出真正有用的反馈。

**为何值得看**：远程控制让本机上的 Cursor agent 不再被绑在电脑前；token 成本之争则说明，「重度 agent 用户值不值」这件事，缓存命中率和模型降价速度比账面 token 数更关键。

- 手机控制本机 agent：https://x.com/cursor_ai/status/2107618653701296162  
- Haiku 5.5 上线 Cursor：https://x.com/cursor_ai/status/2107897245282799864  
- 1.5T token 推算：https://x.com/peterpme/status/2107847615463219252  
- Theo 反驳：https://x.com/theo/status/2107924138094703084  
- poteto 回应：https://x.com/poteto/status/2107933215348637841

![Cursor 移动端远程控制](/images/twitter-hots/2026-10-08/07-cursor-remote.jpg)

---

## 8. 「闭源已死？」AI 净室重写 Photoshop 引发的护城河讨论

**要点**：引子是开源项目 **Photocraft**，一个用 Rust 净室重写 Adobe Photoshop 的项目（Apache-2.0）。注意它并不是今天才出现：仓库 9 月 30 日就已创建，10 月 6 日被大量转发后才在过去一天继续发酵。@dhh 问「要复刻整套 Adobe，靠手工得花多少铅笔、多少人、多少小时？」（7200 赞、3200 收藏）。@naval 的判断是 **「模型是软件最后的护城河」**：AI 可以学文章再改写、反编译软件再重写、学习艺术再复刻，但 AI 本身不愿被「蒸馏」，所以会有更多软件退回服务端来抵抗蒸馏（5100 赞、2500 收藏）。@leerob 的说法是「每个游戏都在被反编译，每道数学题都在被解决，一切同时发生」。不过，「先反编译再生成 Rust」只是部分评论者的猜测，项目方并没有这样说。

**为何值得看**：如果「用 agent 净室重写成熟商业软件」变得便宜，闭源客户端的护城河会被重新定价，这也是 Naval 说「软件会退回服务端」的原因；它和第 6 条 tsc-rs 是同一个趋势的两面。

- DHH：https://x.com/dhh/status/2107727330252874103  
- Naval：模型是最后的护城河：https://x.com/naval/status/2107648710918410670  
- Lee Robinson：https://x.com/leerob/status/2107645527407931441

![Naval：模型是最后的护城河](/images/twitter-hots/2026-10-08/08-closed-source-debate.jpg)

---

## 9. Agent 工作流：DHH 的「交叉审查」，Theo 的 PR 盯梢审计

**要点**：@dhh 回应「大家的 setup 都是什么」：**随便哪个 harness、多个 agent 并行、几乎不用 skills、再加对抗式审查**，没有秘方，模型开箱就很好（4600 赞、1400 收藏，引用的是 thdxr 前一天的「模型进步快过折腾者」）。他随后公开了自己的对抗式 code review 技巧：在 Codex 里就说「Review this with claude」，在 Claude 里就说「Review this with codex」，模型自己知道怎么用 CLI 发起审查、怎么轮流发言、怎么把争论收尾（2300 赞、700 收藏）。@theo 则承认自己的 agent 几个月里写了 200 多个糟糕的「watch PR」脚本，给出一段 prompt 让 agent 审计本机 Claude Code、Codex 等的历史：「盯 PR」逻辑被重新发明了多少次、有多少有缺陷、浪费了多少 token 和美元（收藏 800 多，超过点赞）。他还再次提醒：除非必须，别在 Mac 上跑 agent，换到 Linux 文件系统性能差别很大。

**为何值得看**：两种做法指向同一个结论：与其堆积越来越复杂的自定义工作流，不如让两个不同厂商的模型互相审查，再定期审计 agent 自己反复造的「轮子」。

- DHH 的 setup：https://x.com/dhh/status/2107823432205484040  
- 交叉审查技巧：https://x.com/dhh/status/2107882896195199116  
- Theo 的 PR 盯梢审计 prompt：https://x.com/theo/status/2107765823637168287  
- 别在 Mac 上跑 agent：https://x.com/theo/status/2107661512504701094

![DHH 的交叉审查](/images/twitter-hots/2026-10-08/09-adversarial-review.jpg)

---

## 10. OSC 7501 一天内获多家跟进，Pi 公开 subagent 扩展

**要点**：前一天发布终端程序状态规范 OSC 7501 的 @mitchellh 更新了进展：**24 小时内，Amp、Factory、TUIOS、libghostty 已集成；Claude Code、cmux、Codex、Herdr、OpenCode、Pi 表态支持或已有 PR 在进行中**。Pi 作者 @badlogicgames 随即宣布 Pi 下个版本支持 OSC 7501，并演示了效果。他还把自己一直被追问的 **pi subagent 扩展**公开了（badlogic/pi-subagent），并说明这不是 Earendil 的正式产品、issue 和 PR 都关闭，「自己摸索怎么用」。另外他推荐了两份内容：一篇把 Claude、Codex 和 pi-subagents 的优点整合起来的长文（作者说 Opus 5.5 让同会话 subagent 从「过度设计」变得有用，收藏 400），以及一期 Armin 和 Mario 讲 Pi 设计与路线图的访谈。

**为何值得看**：一个终端规范一天内拿到主流 coding agent 的表态，说明「多 agent 并行时谁在等我」确实是普遍痛点；Pi 的 subagent 扩展则提供了一个不依赖编排器的轻量方案。

- OSC 7501 24 小时进展：https://x.com/mitchellh/status/2107894687587795079  
- Pi 支持 OSC 7501：https://x.com/badlogicgames/status/2107921299297177833  
- pi subagent 扩展公开：https://x.com/badlogicgames/status/2107908930253054442  
- 推荐阅读：https://x.com/badlogicgames/status/2107900336543584321  
- Armin 与 Mario 访谈：https://x.com/badlogicgames/status/2107843610045755850

![Pi 支持 OSC 7501](/images/twitter-hots/2026-10-08/10-pi-osc-7501.jpg)

---

## 11. OpenCode：用 console 额度换 GB300 算力，opentunnel 即将集成

**要点**：OpenCode 作者 @thdxr 说他们刚完成一笔「无现金交易」：**用 opencode console 额度换来了 GB300 算力**，「token 就是钱」（1200 赞）。他还发布了 **opentunnel**：给本机运行的任何服务生成公网 URL，端到端加密、中继看不到内容，并提供可嵌入应用的 SDK，**将在明天集成进 opencode**（收藏近 200）。移动端方面，他说 opencode 手机 app 将上 TestFlight，团队里没人看过这个仓库、甚至没人能在本地跑起来，所有人都在 Slack 里 prompt、拿回截图和视频来迭代，彼此几乎不用说话。另外 Claude Haiku 5.5 已上线 OpenCode 和 OpenCode Go 订阅，thdxr 特别提到这是 Go 里的第一个 Claude 模型。

**为何值得看**：「额度换算力」是一种很新的商业交换方式；opentunnel 则补上了远程 / 移动端使用本地 agent 时最麻烦的网络暴露问题。

- 额度换 GB300：https://x.com/thdxr/status/2107893146856432026  
- opentunnel：https://x.com/thdxr/status/2107956848318177622  
- 移动 app 的开发方式：https://x.com/thdxr/status/2107690704956760393  
- Go 里的第一个 Claude 模型：https://x.com/thdxr/status/2107930841804636295

![opentunnel](/images/twitter-hots/2026-10-08/11-opentunnel.jpg)
