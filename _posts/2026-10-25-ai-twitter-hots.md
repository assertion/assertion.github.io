---
layout: post
title: AI Twitter 热点 · 2026-10-25
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, Claude Code, Anthropic, Thariq, amorriscode, HarnessRouter, Grok Bot, leerob, personal agents, Claire Vo, Opus 5.5, Update-pls, LiteLLM, OpenCode, T3 Code, Linear, MCP, vLLM, DeepSeek-V4.1-Flash, AgentX
lang: zh
translation_key: ai-twitter-hots-2026-10-25
issue: 44
item_count: 10
headline: "Claude Code 两核心同日离职，HarnessRouter 接上 Grok Bot 多 harness，leerob 开 100 美元反馈赏金"
highlights:
  - label: "Claude Code 两核心同日离职"
    text: "Thariq Shihipar（Claude Code 一年+）与 Anthony Morris（Claude Code Desktop 作者）同一天宣布离开 Anthropic；社区简报把两人并列为「巅峰后离开」。"
  - label: "HarnessRouter × Grok Bot"
    text: "开源层把 Grok Bot 接到 Codex / Hermes / Claude Code / DeepSeek 等原生 runtime；仓库 2026-08 已建，今日是社区热议而非刚开源。"
  - label: "leerob 100 美元反馈赏金"
    text: "在帖下交最佳 bug / 功能建议，挑 5 条次日经 X Money 各发 100 美元。"
products: [Claude Code, Anthropic, HarnessRouter, Grok Bot, Opus 5.5, Update-pls, LiteLLM, OpenCode, T3 Code, Linear, MCP, vLLM, DeepSeek-V4.1-Flash, AgentX, Codex]
stats:
  - value: "2.7万+"
    caption: "Thariq 离职帖点赞（同日 Anthony Desktop 离职帖约 7300 赞）"
  - value: "1958"
    caption: "HarnessRouter 介绍帖收藏数（赞约 851）"
  - value: "400%"
    caption: "Linear 称经人与 MCP 创建的 issue 同比增幅"
stat:
  value: "2.7万+"
  caption: "Thariq 离职帖点赞（同日 Anthony Desktop 离职帖约 7300 赞）"
---

# AI Twitter/X 热点 Digest · 2026-10-25（周日）


## 今日要点

1. **Claude Code 两核心同日离职**：@trq212 在 Claude Code 干了一年多后宣布离开 Anthropic 先休息；同日 @amorriscode（Claude Code Desktop 作者）发帖「昨天是最后一天」。社区把两人并进同一条简报。  
2. **HarnessRouter 把 Grok Bot 接到多 harness**：@_avichawla 展示开源层，让 Bot 走 Codex / Hermes / Claude Code / DeepSeek 等原生 runtime；仓库约 2026-08 创建，今日是高收藏热议，不是「刚开源」。  
3. **个人 agent 话语权升温**：leerob 开 **$100** 反馈赏金；Riley Brown 评 Grok Bot UI / 多 bot；Claire Vo 称个人编码约 **80%** 已迁到 Claude Code + Opus 5.5。

---

## 1. Claude Code：Thariq 与 Anthony 同日宣布离开 Anthropic

**要点**：@trq212（Thariq Shihipar）发长帖：在 Claude Code 干了一年多、看着产品规模远超预期后离开 Anthropic，先休息再出发；仍相信 mission 与 “race to the top”，并点名推荐 @addyosmani、@lydiahallie、@_catwu、@ClaudeDevs、@bcherny（约 **2.7 万** 赞、**5400+** 收藏）。同日 @amorriscode（Anthony Morris）发帖：昨天是在 Anthropic 的最后一天——他创建了 Claude Code Desktop，感谢社区每一个 feature / bug，称离开朋友、产品和使命是职业生涯最难的事，接下来「有空打 GTA VI」，很快会分享下一步（约 **7300** 赞、**900+** 收藏）。中文圈 @NFT_Chen、英文简报 @iCleanAI 把两人并列为「一天走掉两位 Claude Code 核心」。

**为何值得看**：Claude Code 从 CLI 打到 Desktop 的两个高可见贡献者同日告别，社区情绪与「团队还稳不稳」的讨论同时升温——比单条 changelog 更能说明产品阶段感。

- trq212：离开 Anthropic / Claude Code：https://x.com/trq212/status/2113844051938054167  
- amorriscode：Claude Code Desktop 作者最后一天：https://x.com/amorriscode/status/2113972174524674247  
- NFT_Chen：中文简报两人同日离开：https://x.com/NFT_Chen/status/2113988885604859997  
- iCleanAI：英文简报两人同日离开：https://x.com/iCleanAI/status/2114081625013387725

![Claude Code 两核心同日离职](/images/twitter-hots/2026-10-25/01-claude-code-exits.jpg)

---

## 2. HarnessRouter：给 Grok Bot 接上 Codex / Claude Code 等原生 harness

**要点**：@_avichawla 发帖称「Insane Grok @bot upgrade」：开源 **HarnessRouter** 作为基础设施层，把 Grok Bot 接到不同 agent harness，任务走对方原生 runtime（演示覆盖 Codex、Hermes、Claude Code、DeepSeek 等），帖文约 **851** 赞、**1958** 收藏。GitHub 上 `HarnessRouter/harnessrouter` 仓库创建于 **2026-08-09**（当前约 3.4k★）——今天是社区高信号转发，**不是刚开源**。

**为何值得看**：个人 bot 从「单 runtime」走向「可插拔 harness」；收藏远高于点赞，说明开发者在存「怎么接」而不是只围观口号。

- _avichawla：HarnessRouter × Grok Bot：https://x.com/_avichawla/status/2113954302901256597

![HarnessRouter 接 Grok Bot](/images/twitter-hots/2026-10-25/02-harnessrouter.jpg)

---

## 3. leerob：给 Grok Bot 开 100 美元反馈赏金

**要点**：@leerob 发帖：帮我们改进 Grok Bot，我给你 **$100**——在本帖回复最佳 bug 报告或功能建议，他会挑 **5** 条，次日经 **X Money** 打款（约 **4167** 赞、**957** 收藏）。

**为何值得看**：产品反馈直接绑现金与公开线程，比传统表单更能把「真痛点」挤到同一条对话树里。

- leerob：$100 bug / feature 赏金：https://x.com/leerob/status/2113792409448714468

![leerob Grok Bot 反馈赏金](/images/twitter-hots/2026-10-25/03-leerob-bounty.jpg)

---

## 4. Riley Brown：个人 agent 盘点——Grok Bot UI 与多 bot 协作

**要点**：@rileybrown 发「unfiltered thoughts on personal agents」：认为 **Grokbot** UI 最好、整体也强，桌面端手感与 **multi-bot**（可设 team lead、任务下发）领先；对比 OpenAI **dots**（糙但接 Codex 有力）、Meta **Muse**（玩具感）、Anthropic **Claude Duet**（跑在 Opus 5.5，更像 Slack 频道而不是再堆 bot）（约 **1521** 赞、**1184** 收藏）。

**为何值得看**：把几家 always-on / 个人 agent 放进同一套产品语言里比较——UI、编排模型、频道 vs bot 的取舍比「谁模型更强」更接近真实选型。

- rileybrown：个人 agent 盘点：https://x.com/rileybrown/status/2113773696863064377

![Riley Brown 个人 agent 盘点](/images/twitter-hots/2026-10-25/04-personal-agents.jpg)

---

## 5. Claire Vo：个人编码约 80% 迁到 Claude Code + Opus 5.5

**要点**：@clairevo 称 plot twist——个人 coding 约 **80%** 已迁到 **Claude Code + Opus 5.5**：夸 cc projects、「再也懒得按 Codex 的 steer」、代码质量与前端 slop 更少；并说 Opus 5.5 的创意能力是把编码工作「抢回来」的 gateway drug（约 **582** 赞）。

**为何值得看**：一线产品人公开改默认栈，比官宣评测更能说明 Opus 5.5 + Claude Code 在「个人主力」场景的口碑位移。

- clairevo：80% 个人编码迁到 CC + Opus 5.5：https://x.com/clairevo/status/2114012293105430813

![Claire Vo 迁到 Claude Code](/images/twitter-hots/2026-10-25/05-clairevo-opus.jpg)

---

## 6. Update-pls v0.5：一键更新 / 回滚整机 AI coding 工具链

**要点**：@rohit3a 发布 **Update-pls v0.5**：一键更新 Mac 与服务器上的 AI coding 工具，支持回滚；Mac 安装包校验 hash / 签名 / notarization；可按 SSH config 推到远端且远端无需预装；按 npm / Homebrew / 自带 updater / apt 等原安装方式更新，并自动退出再打开 App。宣称覆盖 **17** 个 CLI 与 **8** 个桌面应用（含 Claude Code、Codex、Cursor、Gemini CLI、Copilot CLI、OpenCode、Antigravity、Factory Droid、T3Code），免费开源。互动仍浅，但是明确的产品日更新帖。

**为何值得看**：agent 工具链碎片化后，「更新与回滚」本身变成基础设施；和 HarnessRouter / LiteLLM 同一天，像是在补齐「装得上、换得动、回得去」。

- rohit3a：Update-pls v0.5：https://x.com/rohit3a/status/2114078544381014191

![Update-pls v0.5](/images/twitter-hots/2026-10-25/06-update-pls.jpg)

---

## 7. LiteLLM：正式支持 OpenCode Go 订阅路由

**要点**：@LiteLLM 宣布 **OpenCode Go（@opencode）** 已正式接入：可把 Go 订阅模型接到现有 LiteLLM 网关；由 LiteLLM 选上游 API、保持会话，并把估算用量记在 OpenCode Go 名下（文档链到 docs.litellm.ai）。

**为何值得看**：订阅制 coding agent 与统一网关继续对拍——团队想「一个 LiteLLM 管多套订阅」时，OpenCode Go 不再是特例。

- LiteLLM：OpenCode Go 官方支持：https://x.com/LiteLLM/status/2114099964045582622

![LiteLLM × OpenCode Go](/images/twitter-hots/2026-10-25/07-litellm-opencode.jpg)

---

## 8. Theo / T3：14 条工作线程，界面上一条都不挡眼

**要点**：@theo 晒 T3 Code 体验：同时跑 **14** 条 threads，界面上 **zero visible**——「为什么要让正在干活的线程挡住你真正该看的东西？」（约 **339** 赞）。跟帖还调侃自己 snooze 了 36 条。

**为何值得看**：多 agent / 多线程产品的胜负手越来越像「注意力管理」：跑得再多，若 UI 全摊开就等于没跑。

- theo：14 threads、界面为零可见：https://x.com/theo/status/2114131018575962496

![T3 Code 14 threads UI](/images/twitter-hots/2026-10-25/08-t3-threads.jpg)

---

## 9. Linear：人 + MCP 创建的 issue 同比 +400%，内部 agent 当共享层

**要点**：Linear 联合创始人 @karrisaarinen 称：经人和 **MCP** 在 Linear 创建的 issue 今年上升 **400%**；另一趋势是客户自建 internal agents，把 Linear 当人与 agent 之间的工作流 / 沟通 / 上下文共享层，并举例 QBR 前让 agent 汇总客户诉求、落成 project / issue、再生成交付报告（约 **112** 赞）。

**为何值得看**：issue tracker 正在被写成「人机共用状态机」——MCP 让 agent 真正写得进同一张工作台。

- karrisaarinen：Linear MCP issue +400%：https://x.com/karrisaarinen/status/2114105314610196847

![Linear MCP issue +400%](/images/twitter-hots/2026-10-25/09-linear-mcp.jpg)

---

## 10. vLLM：AgentX 上 DeepSeek-V4.1-Flash 打出迄今最佳成绩

**要点**：@vllm_project 称在匹配 DeepInfer 表现之外，用真实 agent 负载在 @SemiAnalysis_ **AgentX** 上测 vLLM：按 DeepSeek 非高峰价，vLLM 做到约 **$38.96/GPU-hour** 营收、每 GPU 约 **954K tokens/s** 总吞吐（cached+input+output）、P90 约 **196 tokens/s/user**，称这是 DeepSeek-V4.1-Flash 在 AgentX 上的最佳结果，并指向工程博客复现（约 **30** 赞，官方源帖）。

**为何值得看**：开源推理栈把「能跑 Flash」推进到「agent 负载下可复现的 $/GPU-hour」——和编码 agent 繁荣同一周，底层吞吐叙事没有掉队。

- vllm_project：AgentX × DeepSeek-V4.1-Flash：https://x.com/vllm_project/status/2114135647040778667

![vLLM AgentX DeepSeek-V4.1-Flash](/images/twitter-hots/2026-10-25/10-vllm-agentx.jpg)

---
