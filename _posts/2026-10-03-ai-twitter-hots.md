---
layout: post
title: AI Twitter 热点 · 2026-10-03
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, GPT-6.1 Sol, Claude Mods, Claude Code, DeepSeek Harness, Pi Durable, Cloudflare, Hugging Face, T3 Code, Muse Gadgets, Linear, Jev, Perplexity, Cline
lang: zh
translation_key: ai-twitter-hots-2026-10-03
---

# AI Twitter/X 热点 Digest · 2026-10-03（周六）


## 今日要点

1. **GPT-6.1 Sol** 过载缓解：OpenAI 宣布付费 ChatGPT 全局 reset，并称速度已回到预期；社区继续用 FrontierMath 等成绩讨论「底座智力」。  
2. **Claude Mods** 进入可演示阶段：官方插件「You should Know」、middleware 走查视频，以及多 Claude / Codex 订阅工作流；同场 **DeepSeek** 官号推桌面版 Harness、**Pi Durable** 接入 Cloudflare Agents SDK。  
3. harness / 产品面：**Hugging Face** 多 harness RL（同权重 62% vs 33%）、**T3 Code** 40 万用户与 Pi/MCP 大 PR、**Muse Gadgets** 今日开源、**Linear** 云端 coding workspace、**decision model** 生态与 **Cline Desktop Connectors**。

---

## 1. GPT-6.1 Sol：容量回稳与全局 reset

**要点**：@thsottiaux 称 **GPT-6.1 Sol** 前两日负载尖峰后已回到预期速度，并为所有付费 ChatGPT 账户安排全球 usage reset（约次日 10am PST）；随后确认「Reset all propagated」。@haider1 补充主观体验：Sol 的 base intelligence「终于又好了」；另有社区截图讨论 Sol 在 FrontierMath Tier 4 上的饱和表现（第三方解读，非官方榜单声明）。

**为何值得看**：DevDay 后的新旗舰从「抢不到」进入「能稳定用」阶段，reset 与容量叙事直接决定 coding / ChatGPT 日常体感。

- Tibo 容量与 reset：https://x.com/thsottiaux/status/2105843926221660585  
- Reset 已传播：https://x.com/thsottiaux/status/2106131810921136451  
- FrontierMath 讨论：https://x.com/haider1/status/2106129595959251214

![GPT-6.1 Sol reset](/images/twitter-hots/2026-10-03/01-gpt61-sol-reset.jpg)

---

## 2. Claude Mods：演示、官方插件与多订阅工作流

**要点**：继昨日宣布后，@lydiahallie 放出 Mods 走查视频：Mods ≈ 带特殊钩子的插件，可在 Claude Code 内像 **middleware** 一样跑你的代码（也可让 Claude 代写）。@trq212 转发官方新插件 **「You should Know」**——扫描 Claude 输出里容易漏掉的重要信息，用 `/plugin enable` 启用。@theo 另发「如何同时用 6 个 Claude + 3 个 Codex 订阅」长视频，讨论额度编排。@ClaudeCodeLog 记入 **Claude Code 2.1.288**（含 bash 工具、委托多步 agent 等 CLI 变更）。

**为何值得看**：Mods 从概念变成可看的 walkthrough + 一等公民插件；多订阅编排说明「额度」本身也成了 coding agent 产品问题。

- Mods 走查：https://x.com/lydiahallie/status/2106127556491821499  
- You should Know：https://x.com/trq212/status/2106119299484221762  
- 多订阅视频：https://x.com/theo/status/2106119810509881791  
- 2.1.288：https://x.com/ClaudeCodeLog/status/2106119715764531420

![Claude Mods walkthrough](/images/twitter-hots/2026-10-03/02-claude-mods.jpg)

---

## 3. DeepSeek Harness：官方账号推桌面安装包

**要点**：@deepseek_ai 正式转发 **@DeepSeekHarness**，称已提供 **macOS / Windows** 打包桌面版，Linux 可通过 npm 包 `deepseek-ai/dsh` 获取。GitHub 仓库 `deepseek-ai/deepseek-harness` 创建于 **2026-08**，今日热点是官号背书与桌面分发，而非「刚刚开源」。中文圈继续用 FrontierHarness 题目对比 Pi / DSH / Codex 的 token 与完成率（社区自测）。

**为何值得看**：开源 harness 补齐「官号 + 桌面安装器」之后，分发与可信度叙事追上 Claude Mods / Pi 同场。

- deepseek_ai：https://x.com/deepseek_ai/status/2105915715241062644  
- Pi vs DSH 社区测：https://x.com/fankaishuoai/status/2105912535925010761

![DeepSeek Harness desktop](/images/twitter-hots/2026-10-03/03-deepseek-harness.jpg)

---

## 4. Pi Durable × Cloudflare Agents SDK

**要点**：@badlogicgames 宣布 **Cloudflare** 已把 **Pi Durable** 接入 Agents SDK，「just works」，并致谢 @mattzcarey 等。同日继续强调 code mode 对长任务的 token 节省；中文侧 @fankaishuoai 用 FrontierHarness 子集对比：**同用 GPT-6.1 Sol** 时 Pi 完成率接近 Codex，但约 **省 62% tokens、快 23%**（社区自测口径）。另有「为何不 fork OpenClaw 跑在 Pi Durable 上」的玩梗讨论。

**为何值得看**：Pi 从「极简 CLI agent」扩到云端 Durable 运行时，并直接嵌进 Cloudflare 开发者栈。

- Cloudflare 集成：https://x.com/badlogicgames/status/2106093146296008857  
- Pi vs Codex tokens：https://x.com/fankaishuoai/status/2105911292980793500  
- code mode 阅读：https://x.com/badlogicgames/status/2105957444287430989

![Pi Durable Cloudflare](/images/twitter-hots/2026-10-03/04-pi-durable-cf.jpg)

---

## 5. Hugging Face：同权重在不同 harness 差到 62% vs 33%

**要点**：@huggingface 指出同一模型、同一权重，在不同 agent harness 上可差到 **62% vs 33%**。团队放出 multi-harness RL 指南：不改 Claude Code / Codex / OpenCode 一行，而是用代理捕获四家 API 格式下的 token ids / logprobs 再训。结果示例：跨 4 个 harness 训 LiquidAI LFM2.5-2.6B 从 42%→54%；仅在 OpenCode 上训可从 34%→58%，但多 harness 模型迁移更好。纯模仿大模型成功轨迹的 SFT 平台到约 47.5%。代码、代理、任务与七个训好的模型均开源。

**为何值得看**：把「换 harness 像换天」量化成可训练问题——和 Mods / Durable / DSH 的可扩展浪潮同一条主线。

- HF 帖：https://x.com/huggingface/status/2106034221005312448  
- 自定义 harness 综述：https://x.com/omarsar0/status/2106029828302373354

![HF multi-harness RL](/images/twitter-hots/2026-10-03/05-hf-multi-harness.jpg)

---

## 6. T3 Code：40 万用户与 Pi / MCP / 委托大 PR

**要点**：@theo 称 **T3 Code** 用户已超 **400,000**；并预告 Nightly 将大改工作方式。随后列出进行中的 PR：**Pi 支持**、额度 reset 后自动 resume、**T3 Code MCP**（创建 / 启动 / 发消息 / 等待 / 读取 / 搜索 / 中断线程）、`delegate_task` 可向任意 provider/model 启子 agent，以及 **ACP Registry**（可挂 Devin / Cline / Kimi / Droid 等注册 agent）。另有「Hide threads while working」等 UX beta。

**为何值得看**：独立 coding UI 一边冲用户量，一边把多 harness / 多 agent 编排做成一等能力。

- 40 万用户：https://x.com/theo/status/2105921113603952853  
- Pi / MCP PR：https://x.com/theo/status/2106123856759120317  
- Nightly 预告：https://x.com/theo/status/2106106626377977889

![T3 Code PR](/images/twitter-hots/2026-10-03/06-t3-code.jpg)

---

## 7. Muse Gadgets：今日开源的 ESP32 / Linux SDK

**要点**：@natfriedman 与 @alexandr_wang 宣布 **Muse Gadgets**：开源 ESP32 固件与 Linux SDK，可用 coding agent 对着仓库做外设；并推出 **Muse Home Link** 等自家 gadget，让 Muse 连接电视 / 音箱等。GitHub `facebookincubator/muse-gadget-sdk` **创建于 2026-10-02**（Apache-2.0），确为过去一天新开源；随后已有社区 fork / 移植（如 StackChan 端口）。叙事强调「把 API token 交给你喜欢的 coding agent」。

**为何值得看**：硬件 SDK 主动把 coding agent 写成默认构建方式——agent 从改软件扩到改身边的 gadget。

- Nat：https://x.com/natfriedman/status/2106099383037309211  
- Alexandr：https://x.com/alexandr_wang/status/2106113742266089526  
- 为何开源：https://x.com/alexandr_wang/status/2106116686654931161

![Muse Gadgets](/images/twitter-hots/2026-10-03/07-muse-gadgets.jpg)

---

## 8. Linear：产品内嵌的云端 coding workspace

**要点**：@karrisaarinen 称 Linear 正做成产品团队的 **cloud coding workspace**：可接 OpenAI / Anthropic / 开源 harness，带自动模型路由，并直接连产品、团队、客户上下文与 AI code review。**Loops** 可在触发器或定时下跑修 bug、写文档、清代码等工厂流；在 Linear 指派或在 Slack 说 `@linear please fix this` 即可。强调无单独平台费、不赚 token 差价，只付公开 API 价 + sandbox 分钟（ChatGPT 登录即将支持）。

**为何值得看**：issue tracker 把头一等 coding agent 会话嵌进协作面，和「再买一个 AI engineer 平台」抢同一预算。

- 云端 coding workspace：https://x.com/karrisaarinen/status/2106041873106371025  
- Loops：https://x.com/karrisaarinen/status/2105818323162472903

![Linear coding workspace](/images/twitter-hots/2026-10-03/08-linear-coding.jpg)

---

## 9. Decision models：Perplexity decider 与 Jev 生态

**要点**：@AravSrinivas 列举 Perplexity 近期开源：多模态决策模型 **pplx-decider-v1-27b**（称 11 项基准均值 85.7%、领先 Jev）、上下文嵌入、Apple silicon 本地引擎 Lily、端侧 PII 分类等。@hwchase17 把它放进 harness 里的「小调用」角色：路由 / 审批 / 评判用便宜 typed 答案，大模型做其余。同日 @rauchg / @vercel 谈 **Jev 进入 AI SDK for Python**；@mitsuhiko 征集 Jev + codemode 案例；@starbuxman 转发 Spring AI 的 Jev modular RAG；@huggingface 称 llama.cpp 已有 `/v1/systemone` 做本地 Jev 风格推理。

**为何值得看**：decision model 正从单点发布变成「SDK / RAG / 本地推理」全家桶，专门吃 harness 里的短决策。

- Perplexity OSS：https://x.com/AravSrinivas/status/2106119404433908149  
- LangChain 视角：https://x.com/hwchase17/status/2105806366405484628  
- Jev × Python：https://x.com/rauchg/status/2106139305131569178  
- Jev + codemode：https://x.com/mitsuhiko/status/2106092733957906474

![Decision models](/images/twitter-hots/2026-10-03/09-decision-models.jpg)

---

## 10. Cline Desktop：Connectors（beta）一键接邮箱与协作工具

**要点**：@cline 宣布 **Cline Desktop Connectors（beta）**：一键连接 Gmail、Slack、Google Calendar、Linear、Sentry、Notion 等，让 Cline 取上下文并代为操作（需审批的回复示例：汇总昨夜邮件 / Slack 并起草紧急回复）。可与 ClinePass 及免费模型（如 DeepSeek-V4.1-Flash 等）一起用；入口在 Customize → Connectors。

**为何值得看**：coding agent 桌面端从「改仓库」扩到「读你的收件箱与 issue」，和 Linear Loops / Mods 一样在抢工作流入口。

- Connectors 宣布：https://x.com/cline/status/2106088611116675213

![Cline Desktop Connectors](/images/twitter-hots/2026-10-03/10-cline-connectors.jpg)

---
