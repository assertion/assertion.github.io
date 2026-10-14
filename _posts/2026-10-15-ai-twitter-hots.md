---
layout: post
title: AI Twitter 热点 · 2026-10-15
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, Claude Code, Ultramarine, Anthropic, Codex, Grok Bot, Claude Platform, Muse Wonder, poteto, Factory, GitLab
lang: zh
translation_key: ai-twitter-hots-2026-10-15
issue: 34
item_count: 10
headline: "Claude Code 桌面多会话，Ultramarine 叫板 Fable 5，Anthropic 季收 $16.8bn"
highlights:
  - label: "Claude Code 桌面端「v2」：多会话并行成主角"
    text: "新会话屏、可存环境（文件夹 / SSH / 云）、并行任务自动开嵌套子会话；同日 Claude Code 加上 idle compaction，闲置约 1 小时前先压缩，回来少烧额度。"
  - label: "Ultramarine 1 Flash：5 人、约 $300k，自称对标 Fable 5"
    text: "Paper Instruments 称性能与 Fable 5 相近、便宜 60×；API 已开，权重承诺两周内放出——「开源」目前仍是预告。"
  - label: "订阅不是营收大头：Anthropic Q3 $16.8bn"
    text: "FT 报 Anthropic 第三季度营收 $16.8bn；theo 直言有公司每年在 Anthropic 花超 $5 亿，并晒出 106 万次请求数据：9 月 22 日起几乎全面从 Codex 迁到 Claude Code。"
products: [Claude Code, Ultramarine, Anthropic, Codex, Grok Bot, Claude Platform, Muse Wonder, Factory, GitLab]
stats:
  - value: "$16.8bn"
    caption: "FT：Anthropic 第三季度营收"
  - value: "60×"
    caption: "Ultramarine 1 Flash 自称比 Fable 5 便宜的倍数"
  - value: "1.06M"
    caption: "theo 8/11–10/13 的 Claude Code + Codex 模型请求数"
stat:
  value: "$16.8bn"
  caption: "FT：Anthropic 第三季度营收"
---

# AI Twitter/X 热点 Digest · 2026-10-15（周四）


## 今日要点

1. **Claude Code 桌面端迎来「v2」级更新**：@ClaudeDevs 把桌面 app 做成多会话指挥台——新会话屏、可保存环境、并行任务自动拆成嵌套子会话、侧栏一眼看谁在干活；@lydiahallie 同日宣布 **idle compaction**，长会话闲置到 prompt cache 过期（约 **1 小时**）前先压缩。  
2. **Ultramarine 1 Flash 叫板 Fable 5**：Paper Instruments 称 **5 人**团队、约 **$300k** 全包后训练，性能接近 Fable 5、便宜 **60×**；API 已上线，**权重两周内**放出——「开源」暂时还是承诺。  
3. **订阅之争 vs 真实营收**：@FT 报 Anthropic Q3 营收 **$16.8bn**；@theo 说 $100/$200 订阅「连零头都不算」，并用 **1.06M** 次请求数据晒出自己 9 月 22 日起从 Codex 迁到 Claude Code。

---

## 1. Claude Code 桌面端：多会话并行 + idle compaction

**要点**：@ClaudeDevs 发布 Claude Code 桌面 app 大更新，主题是「同时跑很多会话」：启动新会话更快；新会话屏把最近文件夹放在一键可达处；可以把一组文件夹、一台 **SSH 主机或云端** 存成 environment，并可每个文件夹一个 worktree；让 Claude 并行做事时，它会为每个任务开**嵌套子会话**，完成后把结果汇报回主会话，主线保持可读；Claude 干活时会主动建议后续工作，一键另开会话；`/btw` 让旁支问题开在独立标签；侧栏显示哪些会话在跑、哪些在等你，会话内有实时 to-do 和回合 recap 卡。@trq212 称「几乎可以当作 v2」。@lydiahallie 另外宣布 Claude Code 加入 **idle compaction**：长会话闲置时，在 prompt cache 过期（约 1 小时）前先压缩，回来只需重处理摘要而不是整段对话，省额度。同一天 @NomaSecurity 披露名为 **SneakPeek** 的 Claude Code Desktop 预览窗格逃逸问题（细节以 Noma 报告为准），提醒桌面 agent 沙箱仍是攻防前线。

**为何值得看**：桌面 app 不再只是 CLI 的壳，而是「一个人调度多个 agent」的界面；idle compaction 则是对长会话用户最直接的成本优化。

- ClaudeDevs：桌面多会话更新：https://x.com/ClaudeDevs/status/2110445844675838148  
- ClaudeDevs：环境 / worktree：https://x.com/ClaudeDevs/status/2110445846219382954  
- ClaudeDevs：并行任务嵌套子会话：https://x.com/ClaudeDevs/status/2110445847922245974  
- trq212：「几乎是 v2」：https://x.com/trq212/status/2110463962877989276  
- lydiahallie：idle compaction：https://x.com/lydiahallie/status/2110484840256819380  
- NomaSecurity：SneakPeek：https://x.com/NomaSecurity/status/2110376824698274161

![Claude Code Desktop 多会话界面](/images/twitter-hots/2026-10-15/01-claude-code-desktop.jpg)

---

## 2. Ultramarine 1 Flash：5 人团队、约 $300k，叫板 Fable 5

**要点**：@bertgodel（Paper Instruments）发布 **Ultramarine 1 Flash**，定位「面向知识工作的 frontier 级模型」：自称性能与 **Fable 5** 相近、便宜 **60×**，由 **5 人**团队后训练、全包约 **$300k**。现已开放 API（按候补名单滚动放量），也可在自家 Feather app 里试；官方说「开源」，但**权重尚未放出**，承诺两周内发布链接——作者在回复里也说「争取两周内」。他还很直白：别拿它写代码（就像别拿 Fable 做市场研究 deck）。

**为何值得看**：小团队 + 低成本后训练挑战头部模型的叙事很有冲击力，但「开源」要等权重真正落地再算数；它也明确不是 coding 模型，适合关注 agent 里非代码环节的成本。

- bertgodel：发布：https://x.com/bertgodel/status/2110400987622265232  
- bertgodel：API / 候补 / 权重两周内：https://x.com/bertgodel/status/2110400993804583009  
- bertgodel：权重时间表：https://x.com/bertgodel/status/2110483403216970032  
- bertgodel：别用来写代码：https://x.com/bertgodel/status/2110485593767760306

![Ultramarine 1 Flash 发布视频](/images/twitter-hots/2026-10-15/02-ultramarine-flash.jpg)

---

## 3. 订阅不是营收大头：Anthropic Q3 $16.8bn 与 $200 档之争

**要点**：@FT 报道 **Anthropic 第三季度营收跃升至 $16.8bn**。同一天的「本地模型 vs 订阅」论战里，@theo 先嘲讽「花 8 年 $200 Claude 订阅的钱，换团队用 30tps 的量化 DeepSeek v4 Flash」；随后又说很多开发者以为 $100/$200 订阅是 Anthropic 和 OpenAI 的主要收入，但**有公司每年在 Anthropic 花超过 $5 亿**，个人订阅连零头都算不上。同日 @AnthropicAI 宣布开设新加坡办公室（亚太第五个），并与新加坡政府签署 AI 安全 MOU。

**为何值得看**：理解「订阅会不会涨价 / 缩水」，要看企业 API 和 agent 用量才是营收主体；对重度个人用户，订阅更像厂商的获客补贴。

- FT：Q3 营收 $16.8bn：https://x.com/FT/status/2110496323426308311  
- theo：$5 亿/年的企业客户：https://x.com/theo/status/2110313482394742871  
- theo：8 年订阅 vs 量化本地模型：https://x.com/theo/status/2110194452157587542  
- AnthropicAI：新加坡办公室：https://x.com/AnthropicAI/status/2110289695888511368

![theo 谈订阅与营收](/images/twitter-hots/2026-10-15/03-subs-economics.jpg)

---

## 4. Codex：theo 晒 106 万次请求迁移图，口碑两极

**要点**：@theo 把自己所有发给 Claude 和 Codex 的请求塞进 ClickHouse：8/11–10/13 共 **1.06M** 次模型请求、**228B** 输入 token（**95.6%** 命中缓存）、**1.44M** 次工具调用；图上标注「9 月 18 日前 Codex 干了大部分活，9 月 22 日起 Claude Code 接管并一直保持」——他自称「最扎心的部分」。他还吐槽 Codex 至今不在 system prompt 里写明当前模型，问它是谁只会说「基于 GPT-6」。另一面，@turingou 认为 Codex 的电脑操作能力仍「无可替代」，各种 personal agent 做电脑操作时都得找 Codex 帮忙；@mranti 则吐槽 Codex 在重活里自己找来 DeepSeek harness，让 DeepSeek Flash 替它干活。

**为何值得看**：一份真实的个人用量数据比跑分更能说明「切换成本」——以及 Codex 在 computer use 上仍有护城河。

- theo：ClickHouse 用量数据：https://x.com/theo/status/2110269416315429179  
- theo：从 Codex 迁到 Claude：https://x.com/theo/status/2110286054460883106  
- theo：system prompt 不写模型名：https://x.com/theo/status/2110509073640898822  
- turingou：电脑操作无可替代：https://x.com/turingou/status/2110204031130062865  
- mranti：Codex 调 DeepSeek Flash：https://x.com/mranti/status/2110184340852453424

![theo 的 Claude Code / Codex 请求量图](/images/twitter-hots/2026-10-15/04-codex-claude-usage.jpg)

---

## 5. Grok Bot：报税、做 MV、bot 对 bot 发邮件

**要点**：@elonmusk 连推 Grok Bot 用例：转发 @jasonfreedman 把 **266 个**报税和财务文件丢给 Grok Bot 复核会计师工作、找出多处错误的经历（「Grok Bot 能帮你报税」）；转发 @anabology 做的 **Claudia**——一个会调用 Suno、Midjourney 和 Opus 自主做音乐视频的 Grok Bot。@poteto 认为「让你的 bot 跟我的 bot 谈」很快会普及：调试、客服、约会议、团购、二手交易都能走 bot 邮件；@SamSokolin 宣布 Grok Bot 邮箱支持 **plus 别名**，可按别名收发或只对特定别名触发 routine；@jasonfried 宣布 Basecamp 官方 Grok Bot 连接器上线。同日 @SpaceXSI 发布 **Grok Voice 3.0** 语音到语音模型（称一秒内响应），@minchoi 称已在 Grok Bot 语音模式中可用。

**为何值得看**：昨天是「每个 bot 有自己的邮箱」，今天开始出现 bot 之间互发邮件、按别名路由的玩法——邮件正在变成 agent 间的协议层。

- Elon：报税：https://x.com/elonmusk/status/2110253157758673079  
- Elon：做 MV：https://x.com/elonmusk/status/2110244638900773147  
- anabology：Claudia：https://x.com/anabology/status/2110224953287070195  
- poteto：bot 对 bot：https://x.com/poteto/status/2110192382096679248  
- SamSokolin：plus 别名：https://x.com/SamSokolin/status/2110496237241667621  
- jasonfried：Basecamp 连接器：https://x.com/jasonfried/status/2110469724660441365  
- SpaceXSI：Grok Voice 3.0：https://x.com/SpaceXSI/status/2110416580899168305  
- minchoi：已进 Grok Bot 语音模式：https://x.com/minchoi/status/2110442477714842019

![Claudia Grok Bot 自主制作的 MV 预告](/images/twitter-hots/2026-10-15/05-grok-bot-claudia.jpg)

---

## 6. Claude Platform：OpenTelemetry traces 公测

**要点**：@ClaudeDevs 宣布 Claude Platform 公测把 **OpenTelemetry traces** 发到你自己的可观测性栈，覆盖 Messages API、**Claude Managed Agents** 和 Claude SDKs。在 Claude Console 里添加 destination 即可；span 遵循 OpenTelemetry **gen_ai** 约定，默认带耗时、状态、token 数、模型和工具名；把 destination 切到「full content」还能导出 prompt、回复、工具输入与结果。

**为何值得看**：Managed Agents 跑在 Anthropic 那边，排查 agent 为什么卡住、钱花在哪，过去只能靠日志拼；现在能直接接进现有 tracing 平台。

- ClaudeDevs：OTel traces 公测：https://x.com/ClaudeDevs/status/2110421732029063352  
- ClaudeDevs：gen_ai 约定 / full content：https://x.com/ClaudeDevs/status/2110421734037889395

![Claude Platform OpenTelemetry](/images/twitter-hots/2026-10-15/06-claude-otel.jpg)

---

## 7. Muse Wonder 进医疗研究：10 篇论文，500 万份病历

**要点**：@AIatMeta 公布一个由 **Muse Spark 1.3 与 Muse Wonder** 驱动、以人类为主导的研究脚手架，可访问 **500 万份**去标识化电子病历和公开数据；一组医学专家用它完成 **10 篇**研究稿，覆盖心脏、肿瘤、传染病、急诊等。@_jasonwei 补充细节：本质是「Muse Wonder coding 脚手架 + 数据库」，专家约两周产出十篇，其中一位研究者写了三篇，过程中他们还互相审稿、写 skill 文件改进脚手架；@alexandr_wang 称全部在 4 周内完成。另外 @EdwardSun0909 称 Muse Wonder Full 登顶 Vals AI 的 **Vibe Code Bench 1–100**（考察多轮持续修改不破坏已有功能）。

**为何值得看**：这是 coding agent 被当作「研究助理」的完整案例——人保留科学决策权，模型负责写代码跑分析、起草稿件。

- AIatMeta：健康研究脚手架：https://x.com/AIatMeta/status/2110441716507693450  
- _jasonwei：项目细节：https://x.com/_jasonwei/status/2110443686782013909  
- alexandr_wang：4 周 10 篇：https://x.com/alexandr_wang/status/2110472164449403314  
- EdwardSun0909：VCB 1–100：https://x.com/EdwardSun0909/status/2110435696993546602

![Meta Muse 健康研究视频](/images/twitter-hots/2026-10-15/07-muse-health.jpg)

---

## 8. poteto 的 pstack：10–20 行的「原则型 skill」

**要点**：@poteto 解释 pstack 最「耐久」的部分：极简的工程原则 skill（每条约 **10–20 行**）。`/poteto-mode` 只放一份原则索引，并要求 agent「在回复中点名影响决策的每条原则，以及它改变了哪个具体选择」——所以 agent 回复末尾常有 Principles Used 一节。这些原则多数是他今年纠正 agent 时提炼出来的，也可以用 `/principle-<name>` 单独调用；他预计模型越强，skill 越会压缩成短原则，甚至可以删掉一些。@unclebobmartin 转评说其中「编码了相当重要的智慧」。

**为何值得看**：与其写长 prompt，不如把纠错经验压成可点名、可审计的短原则——这套做法也很容易直接搬进自己的 skill 库。

- poteto：pstack 原则：https://x.com/poteto/status/2110496830429839869  
- unclebobmartin：评价：https://x.com/unclebobmartin/status/2110476094704910407

![poteto pstack 原则](/images/twitter-hots/2026-10-15/08-poteto-pstack.jpg)

---

## 9. Factory OpenCompute：agent 沙箱留在你自己的 VPC

**要点**：@FactoryAI 发布 **OpenCompute**：一个自托管的 agent 沙箱编排器，可跑在你选择的运行时上——理由是「采用自主软件开发，不该意味着把代码和上下文交给别人的云」，远程 agent 机群可以留在自家 VPC 里扩容。@EnoReyes 称这让任何组织都能在现有算力供应商之上运行 agentic compute，并自称是市场上唯一具备这种能力的产品（厂商说法）。

**为何值得看**：cloud agent 进企业的最大阻力是数据出域；「编排器自托管、沙箱跑在自家云」是对这个阻力的直接回应。

- FactoryAI：OpenCompute：https://x.com/FactoryAI/status/2110403273903808988  
- EnoReyes：主权云 agent：https://x.com/EnoReyes/status/2110405320396951959

![Factory OpenCompute](/images/twitter-hots/2026-10-15/09-factory-opencompute.jpg)

---

## 10. GitLab 跟进：为上千并发 agent 做下一代源控

**要点**：Anthropic 自建源控的余波里，@gitlab 表示一直在开发面向「**上千个并发 agent** 操作大型仓库」的下一代 SCM，并提到今年 6 月 GitLab Transcend 上发布这项工作时，Anthropic 源控团队的 Nick G. 曾同台。中文圈讨论也分两派：@fankaishuoai 认为 IT 基建正从 for 工程师迁到 for Agent，Git 只是开始；@geniusvczh 则指出 Office 一个版本 500G 都能用 git + LFS 跑顺，质疑重造轮子的必要。

**为何值得看**：版本控制正在成为 agent 规模化的新瓶颈，平台厂商开始抢这个位置——但「git 真的不够用吗」仍有争议。

- gitlab：下一代 SCM：https://x.com/gitlab/status/2110167424234295775  
- fankaishuoai：基建迁向 Agent：https://x.com/fankaishuoai/status/2110226592341397961  
- geniusvczh：git + LFS 也能扛：https://x.com/geniusvczh/status/2110207145593692665

![GitLab 下一代 SCM](/images/twitter-hots/2026-10-15/10-gitlab-agent-scm.jpg)

---
