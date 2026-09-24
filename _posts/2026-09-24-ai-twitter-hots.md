---
layout: post
title: AI Twitter 热点 · 2026-09-24
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, Cursor, Claude Code, Claude Marketplace, Browser Use, OpenCode, Devin, Qoder, harness, Jev, Cline
lang: zh
translation_key: ai-twitter-hots-2026-09-24
---

# AI Twitter/X 热点 Digest · 2026-09-24（周四）


## 今日要点

1. **Cursor** 称 agent token 成本再降约 **7%**，并公开一长段「改造 harness」提示词；同日 **Claude Code** 社区热传 `/claude-api prompt-audit` 与 Opus 5.5 用法清单。  
2. **Browser Use Bench** 被 GPT-6 Sol / Luna 与 Opus 5.5 重画帕累托；**OpenCode**、**Devin**、**Qoder**、**Cline** 各有产品向更新。  
3. 讨论继续从「换模」转向 **harness**：rauchg 的 Brain/Hands/Files、Google 自改进 harness 论文，以及 **Jev** 作为 System One 决策模型的用例拆解。

---

## 1. Cursor：token 再砍 7%，并开源「改 harness」心法

**要点**：@cursor_ai 宣布 Cursor agent 在质量不变的前提下，整体 token 成本约降 **7%**，手段包括收紧 prompt、按需加载工具、更好缓存，以及压缩文件读取。同日 @ericzakariasson 放出一长段可复用提示词，教人按「按任务计费、按缓存分层」去审计自己的 harness，并点名这一轮改动来自 Cursor 生产环境经验。官方另链了一篇 harness 改进说明。

**为何值得看**：新模型大战的第二天，IDE 侧把镜头对准「同样智能、更少账单」——这比再刷一榜更贴近日常账单。

- 成本公告：https://x.com/cursor_ai/status/2102786814633464159  
- harness 提示词：https://x.com/ericzakariasson/status/2102853511637774551  
- 改进说明：https://x.com/cursor_ai/status/2102786816340562200

![Cursor token cost](/images/twitter-hots/2026-09-24/01-cursor.jpg)

---

## 2. Claude Code：prompt-audit 与 Opus 5.5「一天 24 条」用法

**要点**：@RLanceMartin 建议在 Claude Code 里跑 **`/claude-api prompt-audit`**，扫描 skills、agent.md、Claude.md 与各类 prompt，删掉会拖累前沿模型的反模式。中文侧 @chenchengpro 用一天整理出 **24 条** Opus 5.5 tips（任务边界、少写「think carefully」、长跑中途汇报等）。@minchoi 则汇总了社区里十个「停不下来」的 Opus 5.5 作品向例子。

**为何值得看**：模型默认切换之后，真正差开账单与质量的，往往是 prompt / skill 卫生，而不是再换一个名字。

- prompt-audit：https://x.com/RLanceMartin/status/2102575471502528989  
- 24 tips：https://x.com/chenchengpro/status/2102782934189252662  
- 十个例子：https://x.com/minchoi/status/2102601488606372243

![Claude Code prompt-audit](/images/twitter-hots/2026-09-24/02-prompt-audit.jpg)

---

## 3. Claude Marketplace：工具、Agent 与专家伙伴上架

**要点**：@claudeai 宣布可以在 **Claude Marketplace** 里发现工具、agents 与专家伙伴——加 Slack / Notion 一类连接器与插件，也可购买第三方 agents / 产品，并找到专家合作。叙事从「模型本身」扩到「可安装的生态货架」。

**为何值得看**：coding agent 的分发层开始长得像应用商店；默认模型之后，下一个战场是默认插件与默认伙伴。

- 链接：https://x.com/claudeai/status/2102840851538080172

![Claude Marketplace](/images/twitter-hots/2026-09-24/03-marketplace.jpg)

---

## 4. Browser Use Bench：帕累托被 Sol / Luna / Opus 5.5 重画

**要点**：@browser_use 更新 **Browser Use Bench v2**：Claude Opus 5.5 约 **59.4**；GPT‑6 Sol medium 约 **66.9**（约 3.5× 更便宜）；GPT‑6 Luna xhigh 约 **57.6**（相对 Opus 约 22× 更便宜）。浏览器自动化这条线上，分数与 $/task 同时被新模型砸开。

**为何值得看**：computer / browser use 已经变成「换模次日必刷」的第三条轴，而不只是 SWE-bench。

- 链接：https://x.com/browser_use/status/2102558423506469010

![Browser Use Bench](/images/twitter-hots/2026-09-24/04-browser-use.jpg)

---

## 5. OpenCode：值机页捉虫，以及 server protocol 当底座

**要点**：@thdxr 演示让 **opencode** 自己下载值机页源码，找出隐藏必填表单字段导致按钮失效。另一帖强调 **opencode server protocol** 是一切的核心，支撑 OpenChamber 这类富前端，并预期会有更多自定义 UI。产品叙事仍是「可热插拔的开源 harness」，而不是只换模型。

**为何值得看**：开源 coding agent 用真实网页故障当 demo，比再发一篇「我们支持某某模型」更有说服力。

- 值机捉虫：https://x.com/thdxr/status/2102567186028274058  
- server protocol：https://x.com/thdxr/status/2102882938815992183

![OpenCode](/images/twitter-hots/2026-09-24/05-opencode.jpg)

---

## 6. Devin：Teams 原生 + Microsoft 商店第一方应用

**要点**：@cognition 宣布面向 Microsoft 用户的两项更新——**Teams 原生支持**，以及 **Microsoft Store** 第一方应用，让 Devin 不只在「自己的云 PC」上干活，也能更好地落在你本机 / 工作流里。

**为何值得看**：云端 coding agent 继续往企业协作入口嵌；分发渠道本身变成产品功能。

- 链接：https://x.com/cognition/status/2102823962380259443

![Devin Microsoft](/images/twitter-hots/2026-09-24/06-devin.jpg)

---

## 7. Qoder：审美被夸到国内 Top，Qwen3.8-Flash 限时免费用

**要点**：@chunxiangai 称阿里 **Qoder** 从官网到 Desktop 的设计与审美已到国内第一档（Cursor 风味 + 抹茶田园，启动 onboarding 有 Dia 感）。官方 @qoder_ai_ide 则宣布 **Qwen3.8-Flash** 在 Qoder 里免费用到 **9 月 30 日**（含免费账号，无需领 Credits）。

**为何值得看**：国产 IDE agent 一边卷体验质感，一边用免费快模型拉日活——和全球「更强更便宜」同一周拍。

- 审美讨论：https://x.com/chunxiangai/status/2102597678475673892  
- 免费 Flash：https://x.com/qoder_ai_ide/status/2102786576774566079

![Qoder](/images/twitter-hots/2026-09-24/07-qoder.jpg)

---

## 8. Harness 三件套 vs 自改进过拟合：Brain / Hands / Files

**要点**：@rauchg 把 Muse、OpenClaw、Claude Code 等成功 agents 拆成 **Brain（模型+harness）/ Hands（工具·电脑·浏览器）/ Files（记忆·skills·仓库）**，并借 Vercel Sandbox **Drives** 讲如何把存储从整机状态里拆出来。@omarsar0 则推荐 Google 关于 **self-improving agent harnesses** 的论文：自动进化 prompt/控制流可能把训练任务刷高、真实任务变差；**RRSI** 用正则化让 OOD 基准更稳，并在 Terminal-Bench / SWE-bench 上有迁移增益。

**为何值得看**：一天之内，产品叙事与论文同时警告——「壳」既能省钱，也会过拟合。

- Brain/Hands/Files：https://x.com/rauchg/status/2102820148629614685  
- Google harness 论文：https://x.com/omarsar0/status/2102853768266256738

![Harness / RRSI](/images/twitter-hots/2026-09-24/08-harness.jpg)

---

## 9. Jev：System One 决策模型的九用例与中文深读

**要点**：@alexxubyte 介绍 **Jev** 为 TypeSafe 的首个 System One 模型，称比前沿 LLM 快且便宜约 **100×**，并列了九类「以前因贵/慢被跳过」的用例。@sagacity 推荐长文，批评普通 LLM 把「生成出来的 90% 置信」当成可执行概率，而 Jev 主张直接从内部表示读决策分布。@omarsar0 另开系列，谈用 **Jev + Pi** 做带 gates / routing / verifiers 的自定义 harness。

**为何值得看**：在「大模型写代码」之外，社区开始认真讨论「该不该每次都用生成式 LLM 做路由与门禁」。

- 九用例：https://x.com/alexxubyte/status/2102787342553719219  
- 中文深读推荐：https://x.com/sagacity/status/2102557258689450389  
- Jev + Pi harness：https://x.com/omarsar0/status/2102763652101161232

![Jev System One](/images/twitter-hots/2026-09-24/09-jev.jpg)

---

## 10. Cline：Stealth Bunny 免费用 + Desktop worktrees 并行

**要点**：@cline 宣布 **Stealth Bunny Alpha** 在 Cline 免费用——强调快推理、强 coding、多模态与 **1M** 上下文。Desktop **v0.0.34** 则加入 **worktrees**（每任务独立分支）、GitHub PR 状态，以及会话内并行 subagents。

**为何值得看**：开源/本地向 coding agent 继续用「免费 stealth 模型 + 并行仓库工作流」追 IDE 与云端选手。

- Stealth Bunny：https://x.com/cline/status/2102857687491129485  
- Desktop worktrees：https://x.com/cline/status/2102836411099676782

![Cline Desktop](/images/twitter-hots/2026-09-24/10-cline.jpg)
