---
layout: post
title: AI Twitter 热点 · 2026-09-21
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, Jev, Kev, DocJev, Claude Code, Devin, Fusion, Cline, Codex, OpenCode, Muse, Pi, Harness Tax
lang: zh
translation_key: ai-twitter-hots-2026-09-21
---

# AI Twitter/X 热点 Digest · 2026-09-21（周一）


## 今日要点

1. **Jev** 取消 waitlist 全面开放；同窗开源 **Kev** 小模型家族与 **DocJev** 文档分类库，生态一天三连。  
2. **Claude Code** 官方「省 token」工作坊被日语圈疯狂转发；**Devin** 侧 SWE-2 云端限时免费 + Fusion 多模型被点名。  
3. **Cline Desktop** 上线一周已占全站任务约 6%；**Codex** 订阅性价比吐槽与 Cloudflare **security-audit-skill** 热度并行。  
4. UC Berkeley 等团队谈 **Harness Tax**：换 harness 成功率差不多，费用最多差 5 倍——**Pi** 反而最省。

---

## 1. Jev：取消 waitlist，全面开放

**要点**：@typesafeai 宣布 **Jev 对所有人开放、不再排队**。同日生态继续加码：@omarsar0 放出自动更新的 Awesome Jev Collection，以及交互式 **Jev Primer & Playground**，用 Jev 自己做策展与入门。

**为何值得看**：分类器从「限量尝鲜」变成默认可调用的 agent 决策原语——讨论重心从能不能拿到额度，转到怎么嵌进 harness。

- 全面开放：https://x.com/typesafeai/status/2101786156572823624  
- Awesome Collection：https://x.com/omarsar0/status/2101696753749655863  
- Primer & Playground：https://x.com/omarsar0/status/2101775584661573692

![Jev open](/images/twitter-hots/2026-09-21/01-jev-open.jpg)

---

## 2. Kev：可自训自跑的开源 Jev 族小模型

**要点**：@jaredpalmer 更新 **Kev-0.6B / 4B / 8B**：基于 Qwen3 的开源 Jev 风格决策模型（Apache 2.0）。域外评测 Kev-8B 约 79.6% vs Jev 85.7%；Kev-4B 可在 32GB Mac 上 bf16 跑五问约 300ms；换 `base_url` 即可对接 TypeSafe System One SDK。

**为何值得看**：Jev 刚开闸，立刻有人把「同类决策头」做成可本地训练的权重——决策层也开始出现开源替代。

- 链接：https://x.com/jaredpalmer/status/2101715352258232539

![Kev models](/images/twitter-hots/2026-09-21/02-kev.jpg)

---

## 3. DocJev：用 Jev 做文档分类与切分

**要点**：LlamaIndex 的 @jerryjliu0 发布开源 **DocJev**：给文档 + 自然语言类别规则，用 Jev 做分类或子文档边界切分；称速度约是 gpt-5.6-luna 的 6 倍且精度相当。OCR 可选 liteparse（快）或 LlamaParse（复杂版式）。

**为何值得看**：把「决策模型」接到文档预处理管线——不只是聊天路由，而是 ingestion 里的结构化判断。

- 链接：https://x.com/jerryjliu0/status/2101738281046294552

![DocJev](/images/twitter-hots/2026-09-21/03-docjev.jpg)

---

## 4. Claude Code：官方「降 token」工作坊 + 日语圈技能分享

**要点**：@ClaudeCode_love 转发 Anthropic 官方约 26 分钟的 Claude Code 省 token 工作坊：长会话做多件事记得 `/clear`、按任务换 Haiku/Sonnet/Opus/Fable、闲置 MCP 用 `/mcp` 关掉、重活丢给下打工再只回收报告，以及打开 telemetry 看缓存命中与人均成本。同窗 @minorun365 公开了用 Claude Code 做登坛资料的 Skill。

**为何值得看**：官方亲自教「别把额度烧在上下文里」——对个人开发者比再发一个模型档位更实用。

- 工作坊转发：https://x.com/ClaudeCode_love/status/2101538091668484599  
- 登坛资料 Skill：https://x.com/minorun365/status/2101672853443957238

![Claude Code tokens](/images/twitter-hots/2026-09-21/04-claude-code.jpg)

---

## 5. Devin：SWE-2 云端免费延续 + Fusion + 云端 Mac 拆解

**要点**：@dabit3 强调 **SWE-2** 在 Devin Cloud Agents / CLI / Desktop 对所有付费计划限时免费到 **10 月 8 日**，并称多模型 **Fusion** harness 才是未来。@b_shulha 实测 Fusion（Fable + SWE-2）称是少数真正有 WOW 感的 auto mode。中文圈 @LinearUncle 力荐 Cognition 工程师 Jon 的长文《Bringing macOS to Devin》：从 EC2 Mac、Virtualization.framework 到无障碍树 CLI，拆云端 Mac 与 computer use。

**为何值得看**：一边是「免费旗舰模型窗口」，一边是多模型编排与云端 Mac 工程细节同时被摊开。

- SWE-2 免费：https://x.com/dabit3/status/2101684714318778414  
- Fusion 未来：https://x.com/dabit3/status/2101714747733254512  
- Fusion 体验：https://x.com/b_shulha/status/2101653743007629778  
- 云端 Mac 拆解：https://x.com/LinearUncle/status/2101582102588502096

![Devin SWE-2](/images/twitter-hots/2026-09-21/05-devin.jpg)

---

## 6. Cline Desktop：上线一周，任务占比约 6%

**要点**：@cline 称 **Cline Desktop** 发布一周后已承载全站超过 **6%** 的任务，其中约一半来自新用户；应用内 **Kimi K3** 仍有限时免费。

**为何值得看**：从扩展/CLI 走到桌面端后，用真实任务占比说话，而不是又一份 changelog。

- 链接：https://x.com/cline/status/2101754721677840702

![Cline Desktop](/images/twitter-hots/2026-09-21/06-cline-desktop.jpg)

---

## 7. Codex：订阅吐槽 + Cloudflare security-audit-skill 刷榜

**要点**：@haydendevs 称准备取消 **$200** Codex 订阅，改押开源模型——「一个月只能认真用几次」。另一边 @huhuhang 推荐把多余 Codex 额度砸向 GitHub Trending 第一的 **cloudflare/security-audit-skill**（多阶段安全审计 skill）。仓库 **2026-06** 已创建，今日是热度回流而非「刚开源」。

**为何值得看**：同一条产品线两边同时吵：贵不贵、额度往哪花。

- 订阅吐槽：https://x.com/haydendevs/status/2101718661945823336  
- security-audit-skill：https://x.com/huhuhang/status/2101502764484624813

![Codex & audit skill](/images/twitter-hots/2026-09-21/07-codex.jpg)

---

## 8. Harness Tax：换壳成功率差不多，费用最多差 5 倍

**要点**：@iwashi86 摘要 UC Berkeley 等团队研究：在 **Claude Code、Codex CLI、极简 OSS Pi** 与 7 个模型交叉评测中，换 harness 任务成功率平均只差约 ±2–5%，但同模型 token 费用最多差约 **5 倍**——他们称之为 **Harness Tax**。工具集最小的 Pi 费用效率最好；Claude Code 首轮上下文可到 Pi 的 10 倍以上。多组对比里，厂商「亲儿子」harness 并不总是最优（例如某些 Sonnet 在 Codex CLI 上更成、某些 GPT 在 Pi 上更成且更便宜）。

**为何值得看**：把「换模型」之外的另一半账算清了——壳子本身就是成本项。

- 链接：https://x.com/iwashi86/status/2101808623643197789

![Harness Tax](/images/twitter-hots/2026-09-21/08-harness-tax.jpg)

---

## 9. OpenCode V2 与 Muse Spark 1.3

**要点**：@Fei2411 称 **OpenCode V2** 手感明显好于 v1，**Gemini 3.8 Flash** 与 **Step 5** 在该 harness 下比 Antigravity / DeepSeek Harness / Codex 更稳。@alexandr_wang 则安利在 **OpenCode** 或 Muse Code 里试用 **Muse Spark 1.3**。

**为何值得看**：开源 harness 与模型厂自家 coding 模型互相背书——选型不再只看榜单分数。

- OpenCode V2：https://x.com/Fei2411/status/2101699077096567214  
- Muse Spark 1.3：https://x.com/alexandr_wang/status/2101567604204908900

![OpenCode & Muse](/images/twitter-hots/2026-09-21/09-opencode-muse.jpg)

---

## 10. Pi：维也纳周日冥想——agentic SE 的共同挫败感

**要点**：@pidotdev 从维也纳放出周日对谈：@mitsuhiko 聊 agentic 软件工程里那些「看起来简单、做起来很难」的共同挫败，并安慰听众：你不是一个人。这和今日 Harness Tax 的结论形成有趣对照——最轻的壳子，也在认真谈体验与成本。

**为何值得看**：不是发版公告，而是 harness 作者在谈「为什么用 agent 写软件仍然别扭」。

- 链接：https://x.com/pidotdev/status/2101672600237646305

![Pi Vienna](/images/twitter-hots/2026-09-21/10-pi-vienna.jpg)
