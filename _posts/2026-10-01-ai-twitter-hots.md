---
layout: post
title: AI Twitter 热点 · 2026-10-01
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, Gemini 4 Argon, Factory, Cognition, Devin, Grok Bot, Cursor, Ollama, Dots, Figma MCP, OpenCode, OpenClaw, Manus, Copilot, Tiller
lang: zh
translation_key: ai-twitter-hots-2026-10-01
---

# AI Twitter/X 热点 Digest · 2026-10-01（周四）


## 今日要点

1. **Gemini 4 Argon**：Google / DeepMind 新 frontier，主打长程软件工程、知识工作与网络安全，宣称约 **1M token** 输出上限；社区热议基准与激进定价。  
2. **Factory ↔ Cognition**：Factory 解聘顾问 Chris Degnan 并指控利益冲突；Cognition 同日宣布其任 **CRO**，CEO 公开反驳。  
3. **Grok Bot** 可把编码任务交给 **Cursor** 并管理 PR；**Dots** 定价继续被官方澄清（基础常驻含在套餐内）。  
4. 工具侧：**Ollama** 本地决策模型、**Figma MCP** 与开源客户端拉锯、**OpenClaw** / **Manus Flex** / **Copilot HydraFusion**，以及浏览器内 coding agent **Tiller** 今日开源。

---

## 1. Gemini 4 Argon：面向复杂工作流的新 frontier

**要点**：@GoogleDeepMind / @Google 发布 **Gemini 4 Argon**，强调 coding、企业知识工作与网络安全防御；宣称业界领先约 **1M token** 输出上限，并通过 Fairwind Program 先向可信测试者与网络防御方放量。@demishassabis 同步官宣。@theo 一句「Wait what」、@dhh 感慨竞争烈度；@haider1 晒社区基准称 Argon 大幅压过 Opus 5.5 / Fable 5 / GPT-6 Astra，并指定价约 **$2/$10**（约为 Opus 一半、Astra 五分之一）——均为第三方解读，非官方定论。

**为何值得看**：DevDay 余波未平，Google 立刻用「长程软件工程 + 激进定价叙事」抢回时间线。

- DeepMind：https://x.com/GoogleDeepMind/status/2105388084154056939  
- Google：https://x.com/Google/status/2105388143902175529  
- Demis：https://x.com/demishassabis/status/2105417239432200636  
- Theo：https://x.com/theo/status/2105394507089154278  
- 社区基准：https://x.com/haider1/status/2105389040476536845  
- 社区定价：https://x.com/haider1/status/2105392152717197547

![Gemini 4 Argon launch](/images/twitter-hots/2026-10-01/01-gemini-argon.jpg)

---

## 2. Factory vs Cognition：顾问解聘与 CRO 入职对撞

**要点**：@matanSF（Factory）称因涉及 Cognition 的不道德行为，立即终止 Chris Degnan 的 Board Observer / Advisor 身份，并指控更大竞争对手「假面试套信息」与「挖有权限的人」。同日 @cognition 宣布 Degnan 出任 **CRO**（Snowflake 传奇销售背景）；CEO @ScottWu46 发长文否认泄密与不正当竞争，称 Degnan 周一已告知会辞去顾问。

**为何值得看**：coding agent 赛道从模型排行榜，直接打到治理、顾问伦理与 GTM 人才争夺。

- Factory：https://x.com/matanSF/status/2105335179502064038  
- Scott Wu：https://x.com/ScottWu46/status/2105360290993115469  
- Cognition CRO：https://x.com/cognition/status/2105348951079571871

![Factory vs Cognition](/images/twitter-hots/2026-10-01/02-factory-cognition.jpg)

---

## 3. Grok Bot：把编码任务交给 Cursor，并管 PR

**要点**：@bot 宣布 Grok Bot 更擅长构建软件：可把 coding 任务 **handoff 给 Cursor**，用 GitHub / Origin 插件管理 PR，并分享构建视频演示。@poteto（Cursor）展示团队工程师 bot + Slack + Cloud Agents：bot 当「经理」，具体写码交给各有独立电脑的 cloud agents，可用 Cursor 上任意模型。@elonmusk 另提 Grok 4.7 在 AA cyber index 排第一。

**为何值得看**：助手层与 IDE / cloud agent 层在拆分——「聊天里派活」正在变成默认工作流。

- Grok Bot：https://x.com/bot/status/2105373767568621895  
- poteto 用法：https://x.com/poteto/status/2105377066942349794  
- Grok 4.7 cyber：https://x.com/elonmusk/status/2105088792139014331

![Grok Bot coding handoff](/images/twitter-hots/2026-10-01/03-grok-bot.jpg)

---

## 4. Ollama：本地跑 Jev 风格决策模型（Nimble）

**要点**：@ollama 宣布支持类 **Jev** 的本地决策模型，示例 **Nimble**，用于工单分流、模型路由、内容审核等；`ollama pull nimble`，并演示通过新本地 `/v1/systemone` API 实时决策。

**为何值得看**：把「系统一 / 快决策」模型从云端小模型，拉进可本地复现的 agent 路由层。

- 官宣：https://x.com/ollama/status/2105152056382345544

![Ollama Nimble local decisions](/images/twitter-hots/2026-10-01/04-ollama-nimble.jpg)

---

## 5. Dots 定价澄清：基础常驻免费，Codex 任务仍计用量

**要点**：@thsottiaux 回应社区笔记：主 Dot 含在套餐内且 **24/7**；若让 Dot 创建 Codex 任务，该任务仍按用量计费，但 Dot **直接干活**不占用套餐额度。@embirico 补充：Pro / Business Premium 含 Dot、不会因额度用尽而停答；更深工作有 allowance；未来可加 Dot / 加速，那部分可能付费——并称这与 Codex 计价逻辑不同。

**为何值得看**：DevDay 次日，always-on 代理的「到底烧不烧额度」仍是用户最关心的产品细节。

- Tibo：https://x.com/thsottiaux/status/2105102312167575701  
- embirico：https://x.com/embirico/status/2105103892933673132

![Dots pricing clarified](/images/twitter-hots/2026-10-01/05-dots-pricing.jpg)

---

## 6. Figma MCP：开源客户端 vs「只给白名单」

**要点**：@thdxr 称与 Figma 邮件扯了约 8 个月，才刚为 **OpenCode** 解封，预计约一周内上线；吐槽对方很在意 labs 竞争。@mitsuhiko 批评 Figma 不懂开放协议；@badlogicgames（pi）列出两难：要么伪装成已批准客户端，要么走官方表单却发现个人开发者根本申请不了。

**为何值得看**：MCP「开放」遇上商业白名单——直接影响 OpenCode / pi 等第三方 harness 能否正经接设计工具。

- OpenCode：https://x.com/thdxr/status/2105391685408858446  
- mitsuhiko：https://x.com/mitsuhiko/status/2105320100823789698  
- pi / badlogic：https://x.com/badlogicgames/status/2105320307766731221

![Figma MCP access debate](/images/twitter-hots/2026-10-01/06-figma-mcp.jpg)

---

## 7. OpenClaw v2026.9.7：Agents API + ChatGPT 登录（Beta）

**要点**：@openclaw 发布 **v2026.9.7**：负载下更跟手、长对话更顺；更新备份/回滚；接入 **OpenAI Agents API** 与 **ChatGPT sign-in（Beta）**；改进 Apple 聊天与重启恢复。称累计 2,818 PRs / 344 contributors。

**为何值得看**：开源 harness 迅速跟上「订阅额度可外带」——和前一天 DevDay 的 Sign in with ChatGPT 叙事连成一条线。

- 发布：https://x.com/openclaw/status/2105356656846786748

![OpenClaw v2026.9.7](/images/twitter-hots/2026-10-01/07-openclaw.jpg)

---

## 8. Manus Flex：自带 API Key，用 Manus harness

**要点**：@ManusAI 推出 **Manus Flex**：BYOK，用支持的模型提供商，搭配 Manus 的 agent harness、工具与执行环境。

**为何值得看**：通用 agent 产品继续把「模型可换、环境与工具自研」拆开卖——和 coding agent 的 harness 商品化同向。

- 官宣：https://x.com/ManusAI/status/2105085387391533430

![Manus Flex BYOK](/images/twitter-hots/2026-10-01/08-manus-flex.jpg)

---

## 9. GitHub Copilot HydraFusion：多模型路由成一条结果

**要点**：@github 宣布 **Project HydraFusion** 已在 Copilot app 与 VS Code 可选：像选模型一样选用，背后会跨多模型起草、批评、修订或升级，再给你一条结果。

**为何值得看**：IDE 侧开始产品化「多模型陪审团」，而不只是单模型下拉框。

- 官宣：https://x.com/github/status/2105352994875232629

![GitHub Copilot HydraFusion](/images/twitter-hots/2026-10-01/09-hydra-fusion.jpg)

---

## 10. Tiller：浏览器内嵌 coding agent，今日开源

**要点**：@chenchengpro 开源 **Tiller**——Chromium + Swift 壳，侧边栏跑 coding agent 操作网页；理念是让 agent **坐在浏览器里**用原生能力（开 tab / 读页 / 点击 / 输入），并经 MCP 与 CLI 对外。作者称约 1.3 万行 Rust+Swift、37 个 Claude Code session；GitHub 仓库 `sorrycc/tiller` 创建于 **2026-09-30**（与「今日开源」一致；作者称首 commit 为 9/28）。

**为何值得看**：和「外面遥控浏览器」相反的一条 agent × browser 产品线，且是当天新出现的可点开源仓库。

- 开源说明：https://x.com/chenchengpro/status/2105140866243600533

![Tiller browser coding agent](/images/twitter-hots/2026-10-01/10-tiller.jpg)
