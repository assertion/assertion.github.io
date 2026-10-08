---
layout: post
title: AI Twitter 热点 · 2026-10-02
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, Claude Mods, Claude Code, GPT-6.1 Sol, Gemini 4 Argon, DeepSeek Harness, Pi Durable, Cursor, GLM 5.3, Cloudflare clef, Factory, Grok Bot, Anthropic
lang: zh
translation_key: ai-twitter-hots-2026-10-02
issue: 21
item_count: 10
headline: "Claude Mods 上线可分享插件，GPT-6.1 Sol 爆棚加容量，Pi 1.0 / Durable 并行"
highlights:
  - label: "Claude Mods 上线"
    text: "用 TypeScript 改行为 / UI / 功能，插件可分享；design / deck / doc 享 50% 优惠。"
  - label: "GPT-6.1 Sol 爆棚"
    text: "需求爆棚、OpenAI 紧急加容量；浏览器任务分更高、缓存令牌更低。"
  - label: "Pi 1.0 / Durable"
    text: "Pi 1.0 与 Pi Durable 并行；Cursor 接入 GLM 5.3；Factory Automations GA。"
products: [Claude Mods, GPT-6.1 Sol, Pi, Cursor, Factory]
stat:
  value: "50%"
  caption: "Claude App design/deck/doc 用量优惠"
---

# AI Twitter/X 热点 Digest · 2026-10-02（周五）


## 今日要点

1. **Claude Mods** 上线：用 TypeScript（或让 Claude 代写）改行为 / UI / 功能，插件可分享；同日 Claude App 对 design / deck / doc 两周 **50%** 用量优惠。  
2. **GPT-6.1 Sol** 需求爆棚、OpenAI 紧急加容量；Browser Use 基准称其浏览器任务分更高、缓存令牌成本显著更低。  
3. harness 侧：**DeepSeek Harness** 官号与桌面版讨论、**Pi 1.0 / Durable**、**Cursor** 接入 **GLM 5.3**、**Factory** Automations GA；决策模型赛道出现 Cloudflare **clef** 等开源权重。

---

## 1. Claude Mods：把 Claude Code 变成可改装 middleware

**要点**：@ClaudeDevs 宣布可 **mod Claude Code**——改行为、定制 UI、换入自有功能；几行 TypeScript 或让 Claude 代写，Mods 随插件分发。@bcherny 称「每人工作方式不同，不该共用同一套 Claude」；@trq212 强调软件正变得可塑，Mods 是一等公民；@lydiahallie 把它概括成 Claude Code 的 **middleware**：拦截 tool / prompt / model / render 事件并改写结果。@ClaudeCodeLog 记入 **Claude Code 2.1.287**。同日 @claudeai：两周内在 Claude App 里开 design / deck / doc，后续对话用量 **减半**（Pro / Max / Team，至 10 月 15 日）。

**为何值得看**：coding agent 从「能改代码」走向「能改自己」——插件深度终于碰到内部事件流。

- ClaudeDevs：https://x.com/ClaudeDevs/status/2105721434807083061  
- bcherny：https://x.com/bcherny/status/2105756563302723721  
- trq212：https://x.com/trq212/status/2105734197801562264  
- lydiahallie：https://x.com/lydiahallie/status/2105737466254598362  
- ClaudeCodeLog：https://x.com/ClaudeCodeLog/status/2105721911036481778  
- Claude App 用量：https://x.com/claudeai/status/2105721630051692804

![Claude Mods](/images/twitter-hots/2026-10-02/01-claude-mods.jpg)

---

## 2. GPT-6.1 Sol：最吃紧的需求与浏览器基准

**要点**：@thsottiaux 称 **GPT-6.1 Sol** 是 API 与订阅两侧「几乎有史以来最吃香」的模型；ChatGPT / Codex 曾严重过载，已加容量，速度有望较前一日接近翻倍。@browser_use 晒 Browser Use Bench 2.1：Sol 分高于 Astra，估算成本约 **7.8×** 更低，且约 **95%** prompt tokens 命中缓存（缓存价约 Astra 的 1/10）；同榜 Opus 5.5、Grok 4.7 分更低且更贵——均为第三方基准。

**为何值得看**：DevDay 后的「新旗舰」叙事，正在被真实负载与 agent 浏览器任务成本同时检验。

- Tibo 容量：https://x.com/thsottiaux/status/2105464274747527543  
- Browser Use：https://x.com/browser_use/status/2105786452902891987

![GPT-6.1 Sol browser bench](/images/twitter-hots/2026-10-02/02-gpt61-sol.jpg)

---

## 3. Gemini 4 Argon：1M 输出与性价比余波

**要点**：继昨日官宣后，时间线继续消化 **Gemini 4 Argon**。@minchoi 强调卖点是约 **1M OUTPUT**（非仅 context），对比多家 frontier 常见 128K 输出上限。@_mohansolo 指其在 AA Coding Agent Index（Antigravity harness）表现不错；@demishassabis 转发 Artificial Analysis：Argon 在 Intelligence Index 上与 GPT-6 Astra 持平，任务成本约 **60%**（含折扣价口径）。@haider1 讨论「每周都在变强」与 RSI 叙事——均为社区解读。

**为何值得看**：发布次日，焦点从「有没有」转到「输出上限 / coding agent 榜 / 单位任务成本」。

- 1M 输出讨论：https://x.com/minchoi/status/2105482573728088504  
- AA Coding：https://x.com/_mohansolo/status/2105459113992040684  
- Demis / 成本：https://x.com/demishassabis/status/2105803651864285301  
- RSI 讨论：https://x.com/haider1/status/2105565918256329127

![Gemini 4 Argon follow-up](/images/twitter-hots/2026-10-02/03-gemini-argon.jpg)

---

## 4. DeepSeek Harness：官方 X 账号 + 桌面版讨论

**要点**：@tianyi 宣布官方账号 **@DeepSeekHarness** 上线，并引用其桌面版已支持 **macOS / Windows** 的说明；中文圈（如 @fankaishuoai）把它和国内桌面 harness 竞争联系起来。GitHub 上 `deepseek-ai/deepseek-harness` 仓库创建于 **2026-08**，今日热点是官号与桌面分发，而非「刚刚开源」。

**为何值得看**：开源 harness 开始补齐「有官号、有桌面安装器」的产品包装，和 Claude Mods / Pi 的可扩展叙事同场。

- tianyi：https://x.com/tianyi/status/2105462807705895061  
- 中文讨论：https://x.com/fankaishuoai/status/2105492981210096063

![DeepSeek Harness official account](/images/twitter-hots/2026-10-02/04-deepseek-harness.jpg)

---

## 5. Pi 1.0 + Pi Durable：可持久的 agent 运行时

**要点**：@pidotdev 宣布 **Pi 1.0** 与 **Pi Durable**；@badlogicgames 写了带代码示例的说明，并吐槽 @mitsuhiko 塞进的彩蛋。@hwchase17 评论：每个 agent harness 都需要 durable runtime——「pi :: pi-durable」「deepagents :: langgraph」。另有讨论把 Pi 接到 Cloudflare Durable Objects（Agents SDK main，即将发版）。

**为何值得看**：开源 coding agent 的竞争，正从「会不会改文件」升级到「异步、可恢复、可监督的 durable 执行」。

- pidotdev：https://x.com/pidotdev/status/2105738462712209603  
- badlogic 说明：https://x.com/badlogicgames/status/2105739632168054992  
- mitsuhiko：https://x.com/mitsuhiko/status/2105740333237809648  
- hwchase17：https://x.com/hwchase17/status/2105791360796397954

![Pi 1.0 Durable](/images/twitter-hots/2026-10-02/05-pi-durable.jpg)

---

## 6. Cursor：GLM 5.3 / Flash 上架，Max 领跑 CursorBench

**要点**：@cursor_ai 宣布 **GLM 5.3** 与 **GLM 5.3 Flash** 已在 Cursor 可用；称 **GLM 5.3 Max** 是 CursorBench 4.0 上得分最高的开源权重模型。

**为何值得看**：IDE 分发仍是开源权重模型的关键入口——榜单叙事直接绑在日常写码工具里。

- 官宣：https://x.com/cursor_ai/status/2105787358557999585

![Cursor GLM 5.3](/images/twitter-hots/2026-10-02/06-cursor-glm.jpg)

---

## 7. 决策模型季：Cloudflare clef 开源，Jev 替代扎堆

**要点**：@ritakozlov（Cloudflare）称「decision model season」，开源 **clef / clef-flash**，并上架 Workers AI；@hwchase17 提醒 harness 应能像换主模型一样换决策模型。@huggingface / 社区同时刷到 Cloudflare、Perplexity 等在 HF 上的 Jev 向替代（Apache 等许可口径以仓库为准）。@garrytan 称 **GBrain** 已支持 Jev，检索不变、记忆 / dream cycle 更好。

**为何值得看**：继昨日 Ollama Nimble 之后，「系统一 / 路由小模型」一天内多路开源与产品接入——agent 栈的廉价决策层在商品化。

- ritakozlov：https://x.com/ritakozlov/status/2105683951595725177  
- hwchase17：https://x.com/hwchase17/status/2105713773084569666  
- HF 转发：https://x.com/huggingface/status/2105725998641864930  
- GBrain：https://x.com/garrytan/status/2105701930714685695

![Decision models clef](/images/twitter-hots/2026-10-02/07-decision-models.jpg)

---

## 8. Factory：Custom Automations 正式 GA

**要点**：@FactoryAI 宣布 **Custom Automations** 对所有用户 GA：描述循环工作流，选定时或事件触发，由 **Droid** 跑到目标结果；可按自动化选择模型、机器与 Connectors。

**为何值得看**：在顾问风波余波中，Factory 仍在推「可调度的 coding agent 产线」——产品节奏没有停。

- 官宣：https://x.com/FactoryAI/status/2105713248507138483

![Factory Custom Automations](/images/twitter-hots/2026-10-02/08-factory-automations.jpg)

---

## 9. Grok Bot：开始「主动建议」能帮你干什么

**要点**：@bot 宣布主 Bot 会发现可代劳的工作并主动提议，建议不计入用量，未来几小时滚动放出。@elonmusk 呼吁试用最新 Grok Bot，并引用 @poteto 把 bot + Slack + Cloud Agents 当团队工程师的用法。昨日「handoff 给 Cursor」仍在被转发，但今日产品新点是 **proactive suggestions**。

**为何值得看**：助手从「等你下指令」变成「先递活」——和 Cursor / Cloud Agents 的分工叙事继续咬合。

- Bot 主动建议：https://x.com/bot/status/2105713240701538538  
- Elon：https://x.com/elonmusk/status/2105543992637100269

![Grok Bot proactive](/images/twitter-hots/2026-10-02/09-grok-bot.jpg)

---

## 10. Anthropic：IPO 材料披露与 Broadcom 最高约 $420 亿融资安排

**要点**：@Reuters 称 Anthropic IPO 材料显示 **Broadcom** 同意提供最高约 **$420 亿** 借贷额度，关系覆盖算力供给、设备租赁与融资；另有独家报道其 IPO pitch 同时拥抱 AI 的承诺与风险。@business 称公司计划约 **10 月 14 日** 会见潜在投资者。均为媒体报道口径。

**为何值得看**：模型榜之外，资本市场与芯片供应链互锁，会反过来影响 API 定价与 coding 工具的供给预期。

- Reuters Broadcom：https://x.com/Reuters/status/2105760916474048819  
- Reuters IPO pitch：https://x.com/Reuters/status/2105492908690297149  
- Bloomberg：https://x.com/business/status/2105798705412559118

![Anthropic IPO Broadcom](/images/twitter-hots/2026-10-02/10-anthropic-ipo.jpg)
