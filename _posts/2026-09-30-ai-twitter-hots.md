---
layout: post
title: AI Twitter 热点 · 2026-09-30
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, OpenAI DevDay, Dots, GPT-6.1 Sol, Ultrafast, Codex, Cursor, Devin, OpenClaw, Raven, pi, ChatGPT Sign-in
lang: zh
translation_key: ai-twitter-hots-2026-09-30
issue: 19
item_count: 10
headline: "OpenAI DevDay 推 Dots / GPT-6.1 Sol / 300 tok/s，Sign in with ChatGPT 直通 16+ 产品"
highlights:
  - label: "DevDay 三连发"
    text: "always-on 个人代理 Dots、GPT-6.1 Sol（约 1/5 Astra 价）、最高约 300 tok/s Ultrafast。"
  - label: "订阅直通第三方"
    text: "Sign in with ChatGPT 可把额度用到 Devin / OpenCode / Notion 等 16+ 产品。"
  - label: "工具侧"
    text: "Cursor 聊天内 /visualize；OpenClaw Enterprise 开源企业控制平面。"
products: [Dots, GPT-6.1 Sol, Codex, Cursor, OpenClaw]
stat:
  value: "300 tok/s"
  caption: "Ultrafast / Pro 500 最高速度"
---

# AI Twitter/X 热点 Digest · 2026-09-30（周三）


## 今日要点

1. **OpenAI DevDay**：推出 always-on 个人代理 **Dots**（GPT-6 Astra）、近 Astra 能力约 1/5 价的 **GPT-6.1 Sol**、最高约 **300 tok/s** 的 **Ultrafast** / **Pro 500**，并重开 Pro $200（用量折算约相当于旧档一半 API 花费）。  
2. **订阅直通第三方**：**Sign in with ChatGPT** 可把额度用到 Devin / OpenCode / Notion 等 16+ 产品；**Codex Cloud** 与 **Security Cloud** 同步升级。  
3. 工具侧：**Cursor** 聊天内 `/visualize`；**OpenClaw Enterprise** 宣布开源企业控制平面；**Raven 0.2** 讲「harness of harnesses」；社区把 Sol 与 Opus 5.5 对标，**pi** 也出现在 DevDay 舞台叙事里。

---

## 1. Dots：GPT-6 Astra 驱动的 always-on 代理

**要点**：@OpenAI 在 DevDay 推出 **dots**——由 **GPT-6 Astra** 驱动的 always-on agents，号称自带云电脑、连应用、可长任务。@theo 的速览把它归到「个人助手」一类（类比 GrokBot / Muse）。@polynoamial 称周末试用时帮他省下约 **$500/年** 订阅费，并接通客服处理取消。

**为何值得看**：模型发布日之外，OpenAI 把「常驻代理 + 云环境」正式放进面向用户的产品线——和 coding agent / computer-use 同一条产品轴。

- 官宣：https://x.com/OpenAI/status/2104984504133918973  
- Theo 速览：https://x.com/theo/status/2104995863689142546  
- 试用：https://x.com/polynoamial/status/2104990938145890462

![OpenAI Dots launch](/images/twitter-hots/2026-09-30/01-dots.jpg)

---

## 2. GPT-6.1 Sol：近 Astra 智能，约五分之一价格

**要点**：@OpenAI 称 **GPT-6.1 Sol**「near-Astra intelligence for a fifth of the price」，面向日常高频使用；当日进入 ChatGPT Work / Codex，并同步上架 **GitHub Copilot**、**Devin**、**JetBrains** 等。@cognition 报 FrontierCode 1.1 上 Sol **60.4%**（与 GPT-6 Sol 的 60.7% 接近），medium 档约 **$0.31/task**，比 GPT-6 Sol max 约便宜 **81%**。@thsottiaux 强调「好且极省」，已含在付费套餐与 API。

**为何值得看**：DevDay 的主叙事从「再推一档旗舰」变成「用中档模型去抢性价比甜点」——分发速度几乎同步打穿 IDE / agent 客户端。

- 官宣：https://x.com/OpenAI/status/2104986129686741046  
- Tibo：https://x.com/thsottiaux/status/2105007628460109953  
- Devin：https://x.com/cognition/status/2104988938817413583  
- Copilot：https://x.com/github/status/2104988341729202521  
- JetBrains：https://x.com/jetbrains/status/2104987776550633684

![GPT-6.1 Sol launch](/images/twitter-hots/2026-09-30/02-sol.jpg)

---

## 3. Ultrafast / Pro 500，以及 Pro $200 重开与用量折算

**要点**：@OpenAI 发布速度档 **Ultrafast**：Codex 最高约 **300 tokens/s**（称可达约 8×），API 约 6×；配套新档 **Pro 500**（约 25× Plus 用量 + Ultrafast）。同日重开 **Pro 200**，并继续提供 Astra / Sol。此前一天 @thsottiaux 已预告：重开订阅同时改用量算法，折算下来约等于旧 Pro $200 一半的 API 花费；承诺不恢复 5 小时硬限制，并靠模型降价/提效让「同样订阅办更多事」。@theo 对「一半」表示尊重透明，同时承认「很痛」。

**为何值得看**：速度档与订阅会计一起改——重度 coding / agent 用户的单位美元产出与「该买哪一档」都会重排。

- Ultrafast：https://x.com/OpenAI/status/2104993966043320759  
- Pro 500 / Ultrafast 说明：https://x.com/OpenAI/status/2104993967985381673  
- Pro 200 重开：https://x.com/OpenAI/status/2104993969486930015  
- Tibo 预告：https://x.com/thsottiaux/status/2104823812042940713  
- Theo 反应：https://x.com/theo/status/2104825448597479886

![OpenAI Ultrafast](/images/twitter-hots/2026-09-30/03-ultrafast.jpg)

---

## 4. Sign in with ChatGPT：订阅额度直通 Devin / OpenCode 等

**要点**：@thsottiaux 宣布可用 ChatGPT 订阅直接在 **16+** 合作产品里消耗包含用量，「没有一堆小规矩」；点名 **Devin、OpenCode、Notion** 等。@cognition 跟进：Devin Cloud / Desktop / CLI 支持用 Plus/Pro 登录，OpenAI 模型用量从 ChatGPT 配额扣。@walden_yan 称也可吃到 Pro x10 / x20 等额度。

**为何值得看**：订阅从「只在自家 UI 里烧」变成跨 harness / IDE 的通用额度——对 OpenCode、Devin 这类第三方是分发与获客杠杆。

- Tibo：https://x.com/thsottiaux/status/2105006253986738615  
- Devin：https://x.com/cognition/status/2104996240190792029  
- 配额说明：https://x.com/walden_yan/status/2104996892505481650

![ChatGPT sign-in in Devin](/images/twitter-hots/2026-09-30/04-signin-chatgpt.jpg)

---

## 5. Codex Cloud / Security Cloud：可配置云环境 + 默认安全扫描

**要点**：@thsottiaux 称新版 **Codex Cloud** 支持可配置云环境，配好后很难再回到纯本机；驱动 dots 等云代理的 **Agents API** 进入预览并支持 computer use。@OpenAI 同步升级 **Codex Security Cloud**：默认接入 cyber-capable **Daybreak Blue**，可扫整仓、持续审 commit、去重调查并准备修复，桌面/网页插件可用。

**为何值得看**：DevDay 不只推模型，还把「云端可复现环境 + 安全扫描」绑进 Codex 主线——和 always-on agents 共用同一套 Agents API。

- Codex Cloud / Agents API：https://x.com/thsottiaux/status/2104987594719461796  
- Security Cloud：https://x.com/OpenAI/status/2104987422308335828

![Codex Security Cloud](/images/twitter-hots/2026-09-30/05-codex-cloud.jpg)

---

## 6. Cursor：聊天里 `/visualize` 出图与图表

**要点**：@cursor_ai 宣布 Agent 窗口支持 **`/visualize`**，可在对话里直接生成图表与示意图分析数据；@milichab 等同步安利试用。

**为何值得看**：在模型大战刷屏的 DevDay，Cursor 仍用小而具体的 IDE 工作流能力刷存在感——「答案不止是字」。

- 官宣：https://x.com/cursor_ai/status/2105012114200887434  
- 试用：https://x.com/milichab/status/2105014706184626443

![Cursor visualize](/images/twitter-hots/2026-09-30/06-cursor-visualize.jpg)

---

## 7. OpenClaw Enterprise：企业控制平面宣布开源

**要点**：@openclaw 宣布 **OpenClaw Enterprise**，与 Red Hat / Nvidia / OpenAI 合作，开源面向持久代理的企业控制平面；强调可自托管、组织可免费使用。GitHub 仓库 `openclaw/openclaw-enterprise` 早在 **2026-08-29** 已创建，今日是正式官宣与推送活跃日——按「今日宣布开源/企业版」理解，不宜写成「仓库今天才新建」。

**为何值得看**：agent 进企业的讨论从模型能力，继续落到控制平面、自托管与许可边界。

- 官宣：https://x.com/openclaw/status/2105023990607786313

![OpenClaw Enterprise](/images/twitter-hots/2026-09-30/07-openclaw.jpg)

---

## 8. Raven 0.2：Harness of Harnesses，面向 RSI

**要点**：@LongTermMemoryE 发布 **Raven 0.2.0**，自称「Harness of Harnesses」：自带 Research / Code / Design / Oncall 等专长 harness，并编排 Claude Code、Codex 等外部 agent；整层 harness（提示、策略、playbook、编排本身）可被 AI 改写以做 RSI。宣称 Multi-Agent Orchestration Benchmark 上 Node F1 约 **0.963**（社区自报，非第三方定论）。

**为何值得看**：和「单一 coding harness 通吃」相反的路线——承认不同 harness 各有所长，拼成可自我改写的编排层。

- 发布：https://x.com/LongTermMemoryE/status/2104745468119146913

![Raven 0.2 harness](/images/twitter-hots/2026-09-30/08-raven.jpg)

---

## 9. 社区对标：Sol 6.1 vs Opus 5.5，以及「更便宜是否够用」

**要点**：@theo 自测后称 Sol 6.1 性价比极强，但编码仍默认 **Opus 5.5**；Sol 更适合 code review、架构分析、computer use 等。Artificial Analysis 数字出炉后，他称 Sol 大约摸到 Opus 5.5 Medium，价格不到三分之一；后又发现 Sol 在 **Codex** harness 上远好于 AA 用的 mini-swe。@haider1 汇总：AutomationBench 上 medium 档 Sol 可压过 Opus 5.5 且约 1/3 价格；DeepSWE 上接近 Astra、约 1/5 成本——均为第三方/社区评测，不是官方定论。

**为何值得看**：DevDay 当晚的真实问题不是「有没有新模型」，而是「默认写代码还跟不跟 Opus，其它活能不能整批切到 Sol」。

- Theo 价值感：https://x.com/theo/status/2104992534749647118  
- AA 数字：https://x.com/theo/status/2105005625726099473  
- 仍默认 Opus：https://x.com/theo/status/2105001138953327067  
- Codex 上更强：https://x.com/theo/status/2105063015712465094  
- AutomationBench：https://x.com/haider1/status/2104989468587614589  
- DeepSWE：https://x.com/haider1/status/2104984871068467297

![Sol vs Opus benchmarks](/images/twitter-hots/2026-09-30/09-sol-bench.jpg)

---

## 10. pi 也上了 DevDay 舞台叙事

**要点**：@badlogicgames 晒出 **pi on stage** 现场图；同日 @mitsuhiko 继续推 Pi 的终端主题自适应、以及 MCP / codemode 可作为可关扩展。圈内把 Pi 当作可高度定制的 coding agent CLI——DevDay 主场仍是 OpenAI，但开源 harness 没有缺席讨论。

**为何值得看**：大厂发布日的时间线里，独立 harness 仍靠现场与工程细节刷存在感。

- 舞台：https://x.com/badlogicgames/status/2105004950350667795  
- 主题：https://x.com/mitsuhiko/status/2105010490246377506  
- MCP/codemode：https://x.com/mitsuhiko/status/2105005860673954272

![pi on stage](/images/twitter-hots/2026-09-30/10-pi-stage.jpg)
