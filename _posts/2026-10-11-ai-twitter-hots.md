---
layout: post
title: AI Twitter 热点 · 2026-10-11
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, Devin, ChatGPT, Codex, Dots, Grok Bot, Cursor Projects, OpenCode, Browser Use, Vercel, Claude Code, DeepSeek Bot
lang: zh
translation_key: ai-twitter-hots-2026-10-11
issue: 30
item_count: 10
headline: "ChatGPT 订阅直接喂 Devin，Dots 能派活给 Codex，Grok Bot 拍卡就能下单"
highlights:
  - label: "订阅与 agent 开始互通"
    text: "Cognition 宣布任意个人 ChatGPT 套餐可接到 Devin，GPT 用量走你自己的配额；ChatGPT Dot 也能在 Codex 里开活、跟帖，并改 ChatGPT Work 的定时任务。"
  - label: "Codex Day 6 是全球额度 Reset"
    text: "Tibo「28 天」第 6 天没有上新功能，而是预告当日结束前全球重置 ChatGPT / Codex 用量；社区把「额度回血」当成这周最好用的功能之一。"
  - label: "并行项目与开源侧继续卷"
    text: "有人同时跑 16 个 Cursor Projects；OpenCode 把 OpenTunnel 迁到 10 个 Fly 区域；Browser Use 自称一年便宜 100 倍；非官方 DeepSeek Bot 插件正式介绍。"
products: [Devin, Codex, Grok Bot, Cursor, OpenCode]
stats:
  - value: "16"
    caption: "有人同时并行跑着的 Cursor Projects 数量"
  - value: "60%+"
    caption: "Vercel 上现已由 agent 发起的部署占比（今年 1 月约 3%）"
  - value: "100×"
    caption: "Browser Use 自称过去一年成本下降的倍数"
stat:
  value: "60%+"
  caption: "Vercel 上现已由 agent 发起的部署占比（今年 1 月约 3%）"
---

# AI Twitter/X 热点 Digest · 2026-10-11（周日）


## 今日要点

1. **订阅开始在 agent 之间打通**：@cognition 宣布任意个人 ChatGPT 套餐（Go / Plus / Pro）都能接到 Devin，GPT 模型用量直接扣你自己的配额；Tibo 一句「Your ChatGPT subscription is now also a Devin subscription」把这件事推爆。同一天，ChatGPT 官方让 **Dot 可以在 Codex 里开活、跟帖**，还能改 ChatGPT Work 的 Scheduled Tasks。  
2. **Codex「28 天」Day 6 是全球额度 Reset**：Tibo 只发了「Day 6/ Reset」，并补充「Global reset by EOD」——社区普遍理解为当日结束前全球刷新 ChatGPT / Codex 用量；没有新功能，但「额度回血」本身成了话题。  
3. **并行项目、基础设施与国内开源齐动手**：有人同时跑 **16 个 Cursor Projects**；OpenCode 把 OpenTunnel 后端重写成 Rust 并迁到 10 个 Fly 区域；Vercel 称 **60%+ 部署已是 agentic**；非官方 **DeepSeek Bot** 插件正式介绍，面向国内 Harness 用户。

---

## 1. Devin × ChatGPT：个人订阅直接喂给 Devin

**要点**：@cognition 宣布：任意个人 ChatGPT 套餐（Go、Plus、Pro）都可以接到 Devin——连上之后，所有 GPT 模型用量都从你自己的套餐配额里扣。Tibo（@thsottiaux）转发时只写了一句：**「Your ChatGPT subscription is now also a Devin subscription」**，迅速冲到四千多赞、一千四百多收藏。同日 @devindevelopers 还强调 Devin 可按需开 macOS / Linux / Windows / Android 云环境，硬件不再决定你能给谁交付。

**为何值得看**：过去「用 Devin」和「用 ChatGPT 配额」是两本账；现在个人订阅直接变成 Devin 的算力油箱，降低了试云端 coding agent 的门槛。再叠上跨 OS 云环境，Windows 机写 iOS 这类故事会越来越常见。

- Cognition 官方：ChatGPT 套餐接通 Devin：https://x.com/cognition/status/2108692010056188048  
- Tibo：订阅即 Devin：https://x.com/thsottiaux/status/2108777962053292398  
- Devin 多系统云环境：https://x.com/devindevelopers/status/2108734316322984412

![Devin connects ChatGPT subscription](/images/twitter-hots/2026-10-11/01-devin-chatgpt.jpg)

---

## 2. ChatGPT Dots：可以把活派给 Codex

**要点**：@ChatGPT 官方更新：**把 Codex 里的工作委派给你的 Dot**。Dot 现在可以在 Codex 里开工、跟进已有线程，并综合你的 ChatGPT 对话、Codex 线程和自动化来判断该续帖还是开新帖；同时还能查看和修改 ChatGPT Work 里的 Scheduled Tasks。Tibo 概括为「Dots got a pretty big upgrade」。实践侧也有对比声：@turingou 觉得 Dot 经 Codex 云端电脑绕回家里 Mac 的链路偏长，不如直接用 Codex Session 语音。

**为何值得看**：昨天 Day 5 是「Composer 猜下一句」，今天是「Dot 替你盯 Codex」——ChatGPT 侧的个人 agent 开始正式踩进 coding 工作流，而不只是聊天与日程。

- ChatGPT：Delegate work in Codex to your dot：https://x.com/ChatGPT/status/2108636748217770180  
- Tibo：Dots 大升级：https://x.com/thsottiaux/status/2108773703064657936  
- turingou：Dots vs Codex 语音体验：https://x.com/turingou/status/2108789937265066433

![ChatGPT Dots delegate to Codex](/images/twitter-hots/2026-10-11/02-dots-codex.jpg)

---

## 3. Codex「28 天」Day 6：全球额度 Reset

**要点**：Tibo 第 6 天只发了两个词：**「Day 6/ Reset」**，自回补充「Global reset by EOD. May the tokens do good things for you.」主帖六千多赞。社区解读高度一致：当日结束前做一次全球 ChatGPT / Codex 用量重置（5 小时窗口 + 周限额一类），**没有新功能上线**。有人调侃「reset 才是这周最好用的功能」；日文圈的「リセット予報」也把窗口对准北京时间傍晚前后。

**为何值得看**：连载第六天第一次「放水日」——对正在刷额度的人是及时雨，也说明 28 天节奏里，产品改进和配额运营是绑在一起做的。

- Tibo Day 6 / Reset：https://x.com/thsottiaux/status/2109045220411351517  
- Global reset by EOD：https://x.com/thsottiaux/status/2109045392684032299

![Codex Day 6 global reset](/images/twitter-hots/2026-10-11/03-codex-day6-reset.jpg)

---

## 4. Grok Bot：拍信用卡就能下单，还能管家务与多机开发

**要点**：@elonmusk 说：想买东西时，**拍一张信用卡丢进聊天**，Grok @Bot 会全网找最优价并下单（两万三千多赞）。中文圈 @turingou 把「沙发办公」写实了：人在客厅跟 Grokbot 和各机器上的 Codex 协同；家里局域网的事走自研 tailmsg 唤起本地 Codex；新产品整理则派到东京工作站上的 Codex / Claude Code；连猫粮没了都会让 bot 去亚马逊补货。他还用 Grokbot 接管私信：两天多回了 141 条、覆盖 127 人。

**为何值得看**：一边是「拍卡下单」这种消费级 agent 动作，一边是「Grokbot 调度多台 Codex / Claude Code」的个人 Agent OS——两边一起说明 bot 正在从聊天窗长进真实事务流。

- Elon：拍信用卡让 Grok Bot 下单：https://x.com/elonmusk/status/2109027407185277123  
- turingou：沙发上协同 Grokbot + Codex：https://x.com/turingou/status/2108875675792994703  
- turingou：Grokbot 管家务与多机开发：https://x.com/turingou/status/2108816621376827731  
- turingou：私信由 Grokbot 起草：https://x.com/turingou/status/2108807799614640365

![Grok Bot sofa multi-agent setup](/images/twitter-hots/2026-10-11/04-grok-bot-sofa.jpg)

---

## 5. Cursor Projects：有人并行跑到 16 个

**要点**：@poteto 说自己同时开着 **16 个 Cursor Projects**，以至于最常用的提示词变成了：`/bro catch me up on everything since my last message, and if there are any action items for me give me enough context (exec summary) to make a call`（约 1800 赞、800 收藏）。这和前一天「Projects 等候名单放行」是同一条产品线上的用户侧后果——并行一多，**同步上下文**本身变成第一技能。

**为何值得看**：产品放量之后，瓶颈从「能不能开 Project」变成「人怎么在十几个并行线程里做决策」。这条提示词几乎是给所有重度用户的现成模板。

- poteto：16 个并行 Cursor Projects：https://x.com/poteto/status/2109024196760305861

![Cursor Projects parallel catch-up prompt](/images/twitter-hots/2026-10-11/05-cursor-projects.jpg)

---

## 6. OpenCode：一句话重写服务端，OpenTunnel 迁到 10 个 Fly 区域

**要点**：@thdxr 连续两条高信号实践：一是 Ryan **从 iOS App 里发了一条 prompt**，就重写了 opencode2 的 server 和 TUI（他补刀：就是 Opus 5.5 编排一堆子 agent，花了约 500 美元）；二是用 OpenCode 把 **OpenTunnel 后端重写成 Rust**，从 Cloudflare 迁到全球 **10 个 Fly 区域**，迁移过程中大家的 tunnel 自动重连，「beautiful」。

**为何值得看**：不是发布会粉饰，而是团队用自己的 coding agent 改自己的基础设施，还给出了成本和迁移体感——对评估 OpenCode 在真实工程里能不能扛事，比再多一张 Benchmark 有用。

- thdxr：iOS 一条 prompt 重写 opencode2：https://x.com/thdxr/status/2108734228561096824  
- 成本约 $500、Opus 5.5 编排子 agent：https://x.com/thdxr/status/2108734637589852266  
- OpenTunnel 迁 Fly 10 区域：https://x.com/thdxr/status/2108784465514496436

![OpenCode OpenTunnel migration](/images/twitter-hots/2026-10-11/06-opencode-fly.jpg)

---

## 7. Browser Use：一年便宜约 100 倍

**要点**：@gregpr07 说 **Browser Use 过去一年便宜了 100 倍**；官方账号 @browser_use 引用并加了一句「Literally cheaper than scraping APIs」（一千二百多赞、近五百收藏）。讨论焦点不再是「browser agent 能不能点」，而是**单位成本是否已经低于传统爬虫 / 结构化 API**。

**为何值得看**：当浏览器操控比爬 API 还便宜，agent 默认交互面会继续往「真开网页」偏，而不是事事等官方接口。

- gregpr07：100x cheaper：https://x.com/gregpr07/status/2108785323316830518  
- Browser Use 官方引用：https://x.com/browser_use/status/2108790563181113770

![Browser Use 100x cheaper](/images/twitter-hots/2026-10-11/07-browser-use.jpg)

---

## 8. Vercel：六成部署已是 agentic，文档站八成浏览来自 agent

**要点**：@rauchg 晒了一组机器与 agent 流量：全网过去 30 天 **58.18%** 流量来自 bot（2024 年 1 月是 32%）；Vercel 上 **60%+ 的部署已是 agentic**（2026 年 1 月约 3%）；自家文档站最高 **83%** 的 pageview 来自 agent，而且越为 agent 优化内容，这个比例越高。他的判断：未来「直接的人类流量」会变成四舍五入误差，网络仍会繁荣，但会为 agent 而建、由 agent 而建。

**为何值得看**：这是平台侧给出的硬比例，不是个人体感。对做文档、SDK 和部署体验的人来说，「给 agent 读」已经不是加分项，而是主路径。

- rauchg：Vercel agent 流量统计：https://x.com/rauchg/status/2108733051283050964

![Vercel agentic traffic stats](/images/twitter-hots/2026-10-11/08-vercel-agents.jpg)

---

## 9. Claude Code CLI：主 Agent 拆活，子 Agent 早提交早返回

**要点**：@chunxiangai 总结了一套他认的 **Claude Code CLI 目前最佳用法**：你是主 Agent，负责拆任务、分配子 Agent；子 Agent **不 build、不 test、不 typecheck**，早提交、早返回；主 Agent 管任务管理、冲突解决、测试和整合；拆分时先调查、按覆盖面切，并及时清理子 Agent 的 worktree 与中间产物。帖子拿下三百多收藏，说明这类「工程管理式」多 agent 纪律正在被认真抄作业。

**为何值得看**：和前一天 Anthropic 的 Managed Agents / Projects 放量同一条线上——工具给了并行能力之后，真正拉开差距的是**你怎么当老板**，而不是再多开几个窗口。

- Claude Code CLI 主/子 Agent 纪律：https://x.com/chunxiangai/status/2108783952429207729

![Claude Code CLI multi-agent practice](/images/twitter-hots/2026-10-11/09-claude-code-cli.jpg)

---

## 10. DeepSeek Bot：基于 DSH 的开源持久化 Bot 插件

**要点**：@Fei2411 正式介绍开源的 **DeepSeek Bot（ds bot，非官方）**：基于 DeepSeek Harness（dsh）的插件，可拥有一组持久化 Bot，用自己的 API Key 聊天与协作；也可接入其他模型，未来还计划接本地 agent / 已有订阅。安装方式：在 dsh desktop 插件页输入 `ds-bot`。仓库 [FeiZhuLulu/DeepSeek-Bot](https://github.com/FeiZhuLulu/DeepSeek-Bot) 创建于 **2026-10-07**，今日介绍帖带动讨论；@fankaishuoai 称对出不了海的用户，「DeepSeek 桌面版 + 这个 Bot」就够用。另有 @Trae_ai 宣布 TraeCode 与 TraeWork 合并为统一平台，可作为国内 IDE 侧对照。

**为何值得看**：国内用户缺的不是又一个聊天窗，而是「持久 Bot + 自有 Key + 可接本地 agent」的 Harness 插件形态。需要注意：仓库并非今日才创建，今日是正式介绍与传播高峰。

- Fei2411：正式介绍 DeepSeek Bot：https://x.com/Fei2411/status/2108955789117558827  
- fankaishuoai：国内用户组合建议：https://x.com/fankaishuoai/status/2108995908688118139  
- TRAE：TraeCode + TraeWork 合一：https://x.com/Trae_ai/status/2108822915550699747

![DeepSeek Bot open-source plugin](/images/twitter-hots/2026-10-11/10-deepseek-bot.jpg)

---
