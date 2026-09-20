---
layout: post
title: AI Twitter 热点 · 2026-09-20
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, Pi, Claude Code, Jev, Laya, AutoJev, Devin, Meta Muse, ZCode, Trae, Qoder, AI-MEMORY
lang: zh
translation_key: ai-twitter-hots-2026-09-20
---

# AI Twitter/X 热点 Digest · 2026-09-20（周日）


## 今日要点

1. **Pi 0.86.0** 大版本：对话中改 system / 动态 tools 且尽量保 KV cache，外加 Anthropic cache warming 与 `/bug`。  
2. **Claude Code** 两条线并行：AGENTS.md「为什么慢了 16 个月」的反思，以及 **Projects**「好用但全在云端」的体感。  
3. **Jev** 继续占屏：进 Claude Code 的 Model Router、开源伴生 **Laya**、免费 **classifier.dev** 叫板，外加 **AutoJev** 决策层。  
4. **Devin** Pro + 限时免费 SWE-2 被重度用户点名；国产工具 **隐私上传** 与跨 harness 的 **AI-MEMORY** 也进了时间线。

---

## 1. Pi 0.86.0：对话中改指令与动态 tools

**要点**：@pidotdev 发布 **Pi 0.86.0**：支持 mid-conversation system messages、在支持的模型上动态改 tools 且尽量不丢 KV cache、Anthropic 侧 cache warming、更快的 `-r`/`-c` 恢复，以及 `/bug` 报障。创作者 @mitsuhiko 跟帖提醒：对话中途改 system 可能带来回归，请从 main 跑的人反馈问题。

**为何值得看**：coding agent 的「会话中途改规则 / 换工具」一旦要保住 prompt cache，就是真·产品难点，而不只是 changelog 一行字。

- 发布：https://x.com/pidotdev/status/2101452506203066631  
- 风险提醒：https://x.com/mitsuhiko/status/2101452864618926406

![Pi 0.86.0](/images/twitter-hots/2026-09-20/01-pi.jpg)

---

## 2. Claude Code：AGENTS.md 迟到批评 + Projects 云端取舍

**要点**：@GergelyOrosz 引用昨日 @trq212 的 AGENTS.md 公告，吐槽「最好的模型 + harness」也未必更快——Claude Code 比 OpenCode / Codex 晚了约 **16 个月**才支持 AGENTS.md，比 Cursor 也晚约一年。同窗 @rileybrown 则连续两帖谈 **Projects**：觉得编排很强，但 orchestrator **没法在本地拉起 Claude Code 线程**，每个 session 都在云端——iOS 方便，本地写 app 别扭；项目还可挂各自的 routines（cron）。

**为何值得看**：一边是开放约定的「迟到税」，一边是产品把多会话收成 Project 后立刻暴露的本地 / 云边界。

- AGENTS.md 迟到：https://x.com/GergelyOrosz/status/2101296362503414130  
- Projects 好用：https://x.com/rileybrown/status/2101390525890691558  
- 云端限制：https://x.com/rileybrown/status/2101453842319618291

![Claude Code](/images/twitter-hots/2026-09-20/02-claude-code.jpg)

---

## 3. Jev：进 Claude Code 的 Model Router

**要点**：@dani_avila7 放出 **Jev Model Router**（Claude Code Mod）：经 Typesafe API 或 Vercel AI Gateway，用 Jev 给每次请求分类——选 subagent 模型、会话开始时的主模型（避开打断 cache）和 effort。一键：`npx claude-code-templates@latest --mod productivity/jev-model-router`。@BenjDicken 同期长文讲清 Jev 不是聊天补全，而是对状态 + 问题集做并行、结构化回答（noul / choice / score）；@willcb 称 Astra「过早停手」一类问题可被 Jev 类能力兜住。

**为何值得看**：Jev 从「Gateway 上的新模型」落到「嵌进 Claude Code 请求路由」——分类器开始进主循环。

- Model Router：https://x.com/dani_avila7/status/2101176629745561686  
- 机制解说：https://x.com/BenjDicken/status/2101419750597566684  
- Astra 停手：https://x.com/willcb/status/2101178888441516117

![Jev Model Router](/images/twitter-hots/2026-09-20/03-jev-router.jpg)

---

## 4. Jev 挑战者：classifier.dev 与开源 Laya

**要点**：@michael_chomsky 贴出 **classifier.dev**，称在其测试上超过 Jev 且免费，配 benchmark 图，互动极高。@0xCVYH 则推开源 **Laya**（Hugging Face：`convaiinnovations/laya`），称速度已压过 Jev；HF 模型页显示约 9 月 18 日上线、随后仍在更新。

**为何值得看**：Jev 刚热完一天，分类器赛道立刻出现「免费可玩」与「开源更快」两条反击线——生态在比谁更适合当 agent 的决策原语。

- classifier.dev：https://x.com/michael_chomsky/status/2101210102393102497  
- Laya：https://x.com/0xCVYH/status/2101171688683585622

![Jev challengers](/images/twitter-hots/2026-09-20/04-jev-challengers.jpg)

---

## 5. AutoJev：给 agent 加一层结构化决策

**要点**：@idoubicc 发布 **AutoJev**：在路由任务、选模型、调用高风险工具或收尾前，先向 AutoJev 要结构化决策；支持 MCP、REST 与 Agent Skills，站点 autojev.ai。

**为何值得看**：把「Jev 式判断」产品化成可插拔决策层——和「主模型写代码」拆开，专门挡危险动作。

- 链接：https://x.com/idoubicc/status/2101138540449132676

![AutoJev](/images/twitter-hots/2026-09-20/05-autojev.jpg)

---

## 6. Devin：Pro + 限时免费 SWE-2 的重度用法

**要点**：@Fanfulladev 长文推荐 **$20 Pro**：Cognition 旗舰 **SWE-2** 对 Pro / Max / Teams（含 Devin Cloud）限时免费到 **10 月 8 日**。他更看重工作流：先在本地 CLI 里用 SWE-2 探仓、纠偏，再用 `/handoff` 把同一会话丢到 Cloud 的专用 VM 跑满。

**为何值得看**：不是又一条发版，而是「免费旗舰模型 + 本地→云 handoff」怎么改变订阅值不值。

- 链接：https://x.com/Fanfulladev/status/2101248358253793649

![Devin Pro](/images/twitter-hots/2026-09-20/06-devin.jpg)

---

## 7. Meta：browser use / Muse Spark 的人在谈能力

**要点**：@shuyanzh36（Shuyan Zhou）更新近况：离开学界加入 Meta 做 personal superintelligence，日常主攻让模型更擅长 **browser use**；帖中引用 Muse Spark 端到端 computer-use 能力。时间线里也有人跟帖体验 Muse for Mac（官方 Mac 客户端更早宣布，这里是使用反馈）。

**为何值得看**：coding agent 邻居赛道——「浏览器 / 电脑操控」——仍在用人名与产品能力互相背书。

- 链接：https://x.com/shuyanzh36/status/2101120532372758667

![Meta browser use](/images/twitter-hots/2026-09-20/07-meta-browser.jpg)

---

## 8. 国产 AI 编程工具：隐私与整仓上传争议

**要点**：@NFT_Chen 汇总四家核查：智谱 **ZCode** 被指登录即打包工作区与 `.git` 历史上传（官方已就 Repo Wiki / 索引相关上传道歉并补偿额度）；字节 **Trae**、阿里 **Qoder** 被指整库/整文件上传；腾讯 **WorkBuddy** 相对克制、偏代码 diff。@RookieRicardoR 跟帖对照 Cursor 的「上传—分析—建索引」先例，认为不能只用 Repo Wiki 一句话打发。

**为何值得看**：功能开关、默认开启与密钥不在用户手中——国内 coding agent 的信任成本被当场摊开。

- 汇总：https://x.com/NFT_Chen/status/2101228639845232830  
- 对照 Cursor：https://x.com/RookieRicardoR/status/2101186107786559508

![CN privacy](/images/twitter-hots/2026-09-20/08-cn-privacy.jpg)

---

## 9. AI-MEMORY：Claude Code 中断后切 Codex 接着干

**要点**：@AkitaOnRails 推 **AI-MEMORY**：在同一目录中断 Claude Code、切到 Codex，无需重讲架构、失败路径与未决问题；强调本地/自托管、开源、多用户共享记忆。仓库 `akitaonrails/ai-memory` **2026-05** 已创建，昨日仍有推送与 README 更新——是持续产品，不是今天新开源的壳子。

**为何值得看**：AGENTS.md 解决「说明文件互通」，AI-MEMORY 想解决「会话记忆互通」——多 harness 并存时的下一层摩擦。

- 链接：https://x.com/AkitaOnRails/status/2101451863145238819

![AI-MEMORY](/images/twitter-hots/2026-09-20/09-ai-memory.jpg)
