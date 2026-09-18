---
layout: post
title: AI Twitter 热点 · 2026-09-18
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, Claude Code, Projects, Devin, Factory, Raindrop, Exa, Karpathy, ProgramAsWeights, terminal-browser
lang: zh
translation_key: ai-twitter-hots-2026-09-18
---

# AI Twitter/X 热点 Digest · 2026-09-18（周五）


## 今日要点

1. **Claude Code Projects** 成主线：官方把多会话并行 agent 收到一个 Project；Thariq / Boris / Cat 从架构与日常体感两边交叉验证。  
2. **terminal-browser** 插件把真实浏览器嵌进 Claude Code；工具边界继续往「能看网页、能点」扩展。  
3. **Devin**：一边是 Fusion 的主从模型路由争论，一边是「给 Ramp 卡让它自己赚钱」的实验叙事。  
4. **Factory** 进 Slack 写代码；**Raindrop** 把 agent 安全从生产监测前移到仿真。  
5. 文化侧 **Karpathy Sensei** 高赞讨论「代码像汇编」；工具侧还有 **Exa Snapshot**、**Program-as-Weights** 等补充信号。

---

## 1. Claude Code：Projects——从管 session 到管项目

**要点**：@claudeai 宣布 **Projects**：从一个对话启动，Claude 在 Claude Code 里调度并行线程，关电脑后仍可继续跑；目前对部分 Pro / Max 用户在 cloud sessions 上 beta，并称将逐步放开。Anthropic 侧 @trq212（Thariq）说这把 Claude Tag 的架构带到了 Claude Code：每个项目一个主 agent 管 memory，并按任务拆出 subagents，还能按你的要求更主动、甚至按日程做事。核心开发者 @bcherny（Boris）连续发帖：自己已经不怎么管 session，想到什么就丢给项目，Claude 拆线程并记住自己的工作方式——「大量代码是在 Project 里写的」。@_catwu 则强调跨任务 context、随时可要的汇总状态，以及会随使用演进的长期记忆。

**为何值得看**：这不是又一个面板改版，而是 coding agent 的产品单元从「会话」迁到「带记忆的项目编排」；官方发布 + 架构解读 + 核心用户体感在同一窗对齐，讨论密度明显高于常规 changelog。

- 官方：https://x.com/claudeai/status/2100632677904744716  
- Thariq 架构：https://x.com/trq212/status/2100638355872706571  
- Boris 工作流：https://x.com/bcherny/status/2100669598995816511  
- Boris 上线：https://x.com/bcherny/status/2100639991244427490  
- Cat 体感：https://x.com/_catwu/status/2100641163120423057  

---

## 2. Claude Code：terminal-browser 插件

**要点**：@RobKnight__ 推出 **terminal-browser** Claude Code 插件，可在 Claude Code 内直接打开终端浏览器，把真实浏览能力接到 coding agent 工具链上。

**为何值得看**：和 Projects 同一窗出现时，一边是「怎么编排任务」，一边是「agent 还能碰什么环境」——浏览器是后者里最硬的一块。

- 作者：@RobKnight__  
- 链接：https://x.com/RobKnight__/status/2100622380439683541  

---

## 3. Devin：Fusion 路由争论，以及「自己赚钱」实验

**要点**：@jeffwang 认为很多公司低估 **Devin Fusion**：把任务丢给更弱 agent 往往失败，因为弱模型不知道自己做得够不够好；用 Astra + Fable 与 SWE-2 组合时，需要前沿模型并行监控更便宜的 sidekick（main + sidekick），既保质量也利于 cache hit 控成本。同窗 @cognition 则放出实验：给 Devin 一张 Ramp 卡并要求「赚钱」——它做冷启动触达、搭支付页、改商业计划，最终赚到约 \$75。

**为何值得看**：Fusion 帖把「路由」从省钱口号拉回 agent 质检问题；Ramp 实验则是 agent 自主闭环的传播素材——两条线合在一起，才像 Devin 本窗真正在吵什么。

- Fusion：https://x.com/jeffwang/status/2100620237045661800  
- 赚钱实验：https://x.com/cognition/status/2100638797851513215  

---

## 4. Factory：Slack 里的 Code beta

**要点**：@FactoryAI 宣布 **Factory for Slack Code** 对部分用户开放 beta：在频道里丢软件任务、和团队协作，Factory 开工，结果回到对话起点。

**为何值得看**：又一条「coding agent 进协作面」的产品路径——任务入口不在 IDE，而在团队已经开会的地方。

- 作者：@FactoryAI  
- 链接：https://x.com/FactoryAI/status/2100731368825295227  

---

## 5. Raindrop：从生产监测到 Simulations

**要点**：@ycombinator 介绍 Raindrop 做 AI agent 安全层：在生产里抓失败 tool call、幻觉，以及团队事先想不到的问题；现推出 **Raindrop Simulations**，把同一套思路前移到上线前。文中称客户包括 Vercel、Clay、Framer、Speak，并完成 Series A，累计融资约 \$50M。

**为何值得看**：当 agent 开始长期跑在生产与协作面，讨论从「能不能写代码」转向「怎么在发版前复现它搞砸的样子」。

- 链接：https://x.com/ycombinator/status/2100638413699653886  

---

## 6. 文化讨论：Karpathy Sensei 与「代码像汇编」

**要点**：@saranormous 引用 Sensei / @karpathy 语境下的高赞讨论：有人把读代码比作看汇编、像编译产物；并对照约 18 个月前「我不怎么用 autocomplete 类 AI 写码工具」的表态，指向更彻底的 agentic 姿态。

**为何值得看**：互动量高，但价值不在八卦，而在「人机界面还是不是源码」这个正在变硬的问题——和本窗 Projects、Slack agent 落在同一条叙事上。

- 链接：https://x.com/saranormous/status/2100700797143261324  

---

## 7. Exa Snapshot：给 agent 的「网页 git」

**要点**：Exa 推出 **Snapshot**：索引超过 4000 亿条历史网页快照，可按「过去某一刻」检索；@jeffzwang 把它概括成「we made git for the web」。

**为何值得看**：coding / research agent 经常被活网页漂移坑；可复现的历史 web context 是工具层补丁，不是又一个搜索框。

- 评论：https://x.com/jeffzwang/status/2100639972747575702  

---

## 8. Program-as-Weights：自然语言编成本地 neural program

**要点**：@yuntiandeng 推介 Program-as-Weights / neural compiler：用（英文函数描述、输入、输出）样例训练，产出可在 CPU 本地跑的小型 neural program；并说明训练数据怎么生成。相关代码、权重与数据集已在公开仓库可取（组织与 SDK 早于本窗，不是「昨天刚开源」）。

**为何值得看**：和「每次调用都打大模型」对着干——编译一次、本地反复跑，对 agent 预处理、模糊分类这类边缘能力有直接含义。

- 链接：https://x.com/yuntiandeng/status/2100634525470761274  
- 组织：https://github.com/programasweights  

---

## 9. 模型路由的中文侧讨论：Jev 放哪一层

**要点**：@sofish 追问「聪明模型 + 不太聪明的 Jev = 又快又准又安全？」是否意味着最终需要一个便宜的前置模型；随后跟帖说要找项目试，并配图把架构拆成底层逻辑、中间决策、顶层对话三层。

**为何值得看**：互动量不大，但和同窗 Devin Fusion 的「主模型监督 sidekick」落在同一条成本/质量线上，是国内时间线里少见的同构讨论。

- 追问：https://x.com/sofish/status/2100627749765251331  
- 试项目：https://x.com/sofish/status/2100701009337061433  

---

## 10. 本地推理边角：Bonsai 2 27B 上 3060

**要点**：引用帖称 PrismML **Bonsai 2 27B** 可在单张 RTX 3060（12GB）上跑：约 220K context、decode ~35 tok/s、prefill ~550 tok/s；@nopainkiller 跟帖感叹硬件可行性。

**为何值得看**：热度不高，但是「长上下文本地 coding / agent」硬件门槛在往消费级卡挪的一条旁证。

- 链接：https://x.com/nopainkiller/status/2100732384098336840  