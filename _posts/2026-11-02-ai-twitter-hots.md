---
layout: post
title: AI Twitter 热点 · 2026-11-02
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, HackerTube, karpathy, Grok Bot, Cursor, DeepSeek Harness, dsh-superagent, Antigravity, OpenCode, Hex, TokenEconomizer, Coincide, Claude Code, Codex
lang: zh
translation_key: ai-twitter-hots-2026-11-02
issue: 52
item_count: 10
headline: "karpathy 用 Claude 两小时做出 HackerTube，Elon 连推 Grok Bot，DeepSeek Harness 开源 dsh-superagent 原型讨论升温"
highlights:
  - label: "HackerTube"
    text: "karpathy 周末用 Claude Opus 5.5 约两小时，把二十年 HN 评论筛成 6454 条视频推荐，做出 hackertube.org。"
  - label: "Grok Bot"
    text: "Elon 连发试用号召与送礼演示；poteto Day 28 用 Grok Bot + Cursor 做出可在 X 内游玩的 tibo.dog。"
  - label: "dsh-superagent"
    text: "DeepSeek Harness 团队开源面向单仓库的主动 coding agent 原型；X 长文与 badlogicgames 等推荐同日热传。"
products: [HackerTube, Claude, Grok Bot, Cursor, DeepSeek Harness, dsh-superagent, Antigravity, OpenCode, Hex, TokenEconomizer, Coincide, Claude Code, Codex, T3 Code]
stats:
  - value: "22381"
    caption: "karpathy HackerTube 帖收藏数（点赞约 25769）"
  - value: "8529"
    caption: "DeepSeekHarness 长文帖收藏数（点赞约 8321）"
  - value: "5289"
    caption: "poteto Day 28 / tibo.dog 帖点赞（收藏约 961）"
stat:
  value: "22381"
  caption: "karpathy HackerTube 帖收藏数（点赞约 25769）"
---

# AI Twitter/X 热点 Digest · 2026-11-02（周一）


## 今日要点

1. **个人策展成为 coding agent 的周末 demo**：karpathy 用 Claude 把 HN 二十年评论压成 HackerTube；同日 Elon 强推 Grok Bot，poteto 用 Bot + Cursor 交了 Day 28 小游戏。  
2. **Harness 层继续开源与对打**：DeepSeek Harness 的 dsh-superagent 原型在 X 上爆传，Google Antigravity 则晒 DeepMind 用它扫蛋白质并写湿实验计划。  
3. **成本与包装成新摩擦点**：Microsoft/伯克利 TokenEconomizer 讨论再起，第三方 harness 上 Claude 订阅「加价计费」投诉，Coincide 试图把多 agent 塞进一个原生 Mac 窗口。

---

## 1. karpathy：HackerTube——用 Claude 两小时重写 YouTube 推荐

**要点**：@karpathy 发帖介绍周末 hack **HackerTube**（hackertube.org）：嫌 YouTube 推荐太吵，便让 **Claude**（自称约两小时、用到 **Opus 5.5**）从约 **20 年 HN 评论里约 4300 万条**中筛出持续被推荐的 **6454** 条视频，观感「显著更好」。跟帖里有人把它概括成「Claude 帮你对抗短视频与推荐系统吸引子」。

**为何值得看**：这不是又一个 chat demo，而是把 agent 当成**个人策展流水线**——输入是公开语料，输出是可分享的产品界面；也侧面说明「周末能成」的门槛仍高度依赖顶尖模型与清晰意图。

- karpathy：HackerTube：https://x.com/karpathy/status/2116957135661945283  
- _sholtodouglas：跟帖解读：https://x.com/_sholtodouglas/status/2116963764612563415

![HackerTube](/images/twitter-hots/2026-11-02/01-hackertube.jpg)

---

## 2. Grok Bot：Elon 连推试用，poteto Day 28 用 Bot + Cursor 交作业

**要点**：@elonmusk 连发多帖催试用 **Grok @Bot**，称几乎每天都在落地数十项修复与功能，并引用用户用 Bot 从 X Money 额度里「挑礼物下单」的演示。同日 @poteto **Day 28** 上线 **tibo.dog**：自称花 **$5.99** 买域名，用 **Grok Bot + Cursor** 做出可在 X 内游玩的小游戏，帖子互动极高。

**为何值得看**：一边是平台主亲自下场拉新，一边是「日历打卡」把 Bot 当完整制作链路——Grok Bot 的叙事正从「有独立电脑的同事」扩到「能交可玩产物」。

- elonmusk：Try Grok Bot：https://x.com/elonmusk/status/2117033967782113327  
- elonmusk：送礼演示：https://x.com/elonmusk/status/2116989604104392969  
- poteto：Day 28 / tibo.dog：https://x.com/poteto/status/2117004709198475365

![Grok Bot Day 28](/images/twitter-hots/2026-11-02/02-grok-bot.jpg)

---

## 3. DeepSeek Harness：dsh-superagent 原型与「长跑 harness」长文

**要点**：@DeepSeekHarness 发布 X Article（互动破八千赞、八千收藏量级），社区同步讨论仓库 **deepseek-ai/dsh-superagent-prototype**（**MIT**，GitHub **created_at 约 2026-10-31**）：面向**单个 GitHub 仓库**的主动 coding agent 研究原型，路由 + worker、可听 GitHub（可选飞书）请求并开 work item / PR。@badlogicgames 引用该文，称 DSH 是 harness 空间少有的创新团队之一，并与 earendil「单一、长跑会话」方向共鸣。另有帖提到把设计类插件接到 DSH / Claude 侧的玩法，属社区二次包装，需与官方原型分开看。

**为何值得看**：开源方在讲「更主动的仓库同事」，资深 harness 作者在对齐「长会话 + 专业化 subagent」——这两条线比单次榜单分数更能影响明年的默认架构。

- DeepSeekHarness：长文：https://x.com/DeepSeekHarness/status/2116857257245987236  
- badlogicgames：推荐阅读：https://x.com/badlogicgames/status/2116997870213906524

![dsh-superagent](/images/twitter-hots/2026-11-02/03-dsh-superagent.jpg)

---

## 4. Google Antigravity：DeepMind 用它扫百万级蛋白质并写湿实验计划

**要点**：@antigravity 官方帖展示 @GoogleDeepMind 研究者用 **Antigravity** 在海量未表征蛋白质中导航、验证一条新型抗菌肽，并在数分钟内生成湿实验计划；同时用 Antigravity UI **sidecars** 在 agent 旁检查结构。

**为何值得看**：coding agent 叙事正在穿出纯软件仓——当「导航百万实体 + 产出可执行实验步骤」成为官方 demo，科学工作流会成为下一轮评测场。

- antigravity：DeepMind 蛋白质 demo：https://x.com/antigravity/status/2116952756342677919

![Antigravity DeepMind](/images/twitter-hots/2026-11-02/04-antigravity.jpg)

---

## 5. OpenCode：Hex 新引导被旗标挡住，GitHub triage 靠长跑会话养出 subagent

**要点**：@thdxr 自嘲 **Hex** 新 onboarding 被留在 feature flag 后，导致大家仍看到旧版，下一版修复。同日展示团队 **GitHub triage** 跑在**长跑 OpenCode 会话**上：可把活派给曾经做过类似事的 subagent，于是「linux fuckery」一类专业化子代理会自然出现。另帖希望 GitHub / Slack 提供「自上次轮询以来发生了什么」的 **log 风格 API**，方便 agent 拉取元数据。

**为何值得看**：Hex 刚稳就被自己旗标绊倒是产品细节；更值得抄的是「长会话 + 可委托历史 worker」——这和 DSH / pi 讨论的 harness 哲学同一条河。

- thdxr：Hex onboarding 旗标：https://x.com/thdxr/status/2116977984531837183  
- thdxr：GitHub triage 长会话：https://x.com/thdxr/status/2116979661188321541  
- thdxr：log style APIs：https://x.com/thdxr/status/2116963930446729498

![OpenCode triage](/images/twitter-hots/2026-11-02/05-opencode-triage.jpg)

---

## 6. TokenEconomizer：微软 + 伯克利的黑盒降本插件再被刷屏

**要点**：@marfinxx、@undefinedKi 等热帖讨论 **TokenEconomizer**（微软研究院 + UC Berkeley 等）：在不改 agent 权重的前提下，用 micro-skills、工具剪枝、失败环干预给 coding agent 降 token；论文宣称 SWE-Bench 上多组合平均成本约降 **18.4%–30.9%**。GitHub `microsoft/TokenEconomizer` 首个 release 约在 **2026-10-26**，仓库更早，**不是今天刚开源**——过去一天是插件安装与论文结论在 X 上的二次传播。官方说明支持 Claude Code / Codex / Copilot CLI / Pi 等，Cursor / OpenCode 为实验支持。

**为何值得看**：当「token 账单 ≈ 工资」成为一线公司口头禅，黑盒成本控制器会变成和模型选型同级的基础设施话题。

- marfinxx：论文解读：https://x.com/marfinxx/status/2116866698091331877  
- undefinedKi：插件介绍：https://x.com/undefinedKi/status/2116940191952691262

![TokenEconomizer](/images/twitter-hots/2026-11-02/06-tokeneconomizer.jpg)

---

## 7. Coincide v0.1.0：原生 Mac 窗口并排跑多家 agent harness

**要点**：@apoorvdarshan 发布 **Coincide v0.1.0**：免费开源的原生 Swift / AppKit Mac 应用，在同一窗口并排跑 **Claude Code、Codex、Cursor、Grok Build、OpenCode、Antigravity**，并可中途切换 agent；自称是 **T3 Code** 的原生移植。仓库 `apoorvdarshan/coincide` **2026-10-27** 建仓，本日为 v0.1.0 公开船运。

**为何值得看**：控制面战争从「网页遥控台」延到「原生桌面多 harness」——谁先把切换成本降到零，谁就更像默认 IDE 壳。

- apoorvdarshan：Coincide v0.1.0：https://x.com/apoorvdarshan/status/2116927672274305244

![Coincide](/images/twitter-hots/2026-11-02/07-coincide.jpg)

---

## 8. Claude Agent SDK「加价」争议：第三方 harness 上的 5 小时额度

**要点**：@thegenioo 提醒：在 Claude Code 本体之外，经 **Agent SDK** 走 Claude 模型的客户端（举例 T3 Code、Synara、Monocode、OpenCode 等）时，有人观察到 **5 小时额度被按约 1.6×–2.3× 计**（周限额说法一并被提到），并称相关 issue 仍开着，因此暂时不建议这么用。帖子引用 OpenCode「可用 Claude 订阅」语境；具体倍率与是否覆盖所有路径，仍以官方 issue / 账单为准。

**为何值得看**：订阅互通是生态扩张的卖点，也是计费边界最容易扯皮的地方——harness 越繁荣，这类「同一订阅、不同乘数」问题会越常上热搜。

- thegenioo：加价提醒：https://x.com/thegenioo/status/2116821966586044633

![Claude overcharge](/images/twitter-hots/2026-11-02/08-claude-overcharge.jpg)

---

## 9. mitsuhiko：Opus Induced AI Psychosis，以及用合成测试「洗」readline

**要点**：@mitsuhiko 开 Spaces 谈 **「Opus Induced AI Psychosis」**；同日另帖展示把 readline 对着 agent **先为原版生成的合成测试**重写了一遍，自嘲像 **GPL → MIT 洗衣店**（仓库 mitsuhiko/lineread）。结合他关于「测试由 agent 生成再驱动重写」的讨论，焦点是：模型越强，越容易在错误自信里把整条工具链洗成「看起来能测过」。

**为何值得看**：这是对 vibe coding 最刺耳的一线警告之一——问题不只是幻觉代码，而是**幻觉测试**会给幻觉代码发通行证。

- mitsuhiko：Opus Induced AI Psychosis：https://x.com/mitsuhiko/status/2116998255829504492  
- mitsuhiko：lineread / 合成测试：https://x.com/mitsuhiko/status/2117029133418983576

![mitsuhiko Opus](/images/twitter-hots/2026-11-02/09-mitsuhiko-opus.jpg)

---

## 10. Grok Bot 当经理、Claude Code / Cursor 干活：编排层成新界面

**要点**：@shao__meng 转述 @robshocks 基于 @poteto、@theo 实践的视频主张：**编排 bot** 负责「第一公里」（意图）和「最后一公里」（追进度、验收），真正写代码交给 Claude Code / Cursor / Codex 等「自带机器」的 coding agent。同日也有帖子在罗列「把 Grok Bot 扩成整家 AI 公司」的 GitHub 项目清单（编排、记忆、浏览器自动化等），质量参差，适合当索引而非背书。

**为何值得看**：单兵 agent 之后，胜负手变成「谁编排谁」——Grok Bot 的云端常驻电脑，正在被放进经理席，而不是唯一打字席。

- shao__meng：编排层主张：https://x.com/shao__meng/status/2116888552411746697  
- s4yonnara：21 个 GitHub 项目清单：https://x.com/s4yonnara/status/2116992286764790064

![Grok Bot orchestration](/images/twitter-hots/2026-11-02/10-grok-orchestrator.jpg)

---
