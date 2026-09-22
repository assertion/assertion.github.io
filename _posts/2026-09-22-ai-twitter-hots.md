---
layout: post
title: AI Twitter 热点 · 2026-09-22
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, Grok 4.7, Devin, Cursor, MiMo, Jev, Cline, Copilot, Capy, Factory, IntelliJ
lang: zh
translation_key: ai-twitter-hots-2026-09-22
---

# AI Twitter/X 热点 Digest · 2026-09-22（周二）


## 今日要点

1. **Grok 4.7** 发布：同价同速下明显强于 4.6；强调用 **Build harness**，并在 Cursor / Cline / Devin / Droid / VS 等处上线。  
2. **Devin** 推出 Cloud in Terminal 与 `devin ssh`；同日把 Grok 4.7 接进 Cloud / Desktop / CLI。  
3. **Cursor Compile** 缺席演讲变成长文：@poteto 复盘一个月合入约 2500 个 PR。  
4. 小米开源 **MiMo-V2.6**；**Jev** 继续从分类器故事走到降本 harness；**Capy** 被点名对比 Claude Code / Codex。

---

## 1. Grok 4.7：agentic coding 第三极，绑定 Build harness

**要点**：@SpaceXAI 发布 **Grok 4.7**，称同价同速下较 4.6 有实质提升。@elonmusk 称其在 agentic coding 上排在 Anthropic、OpenAI 之后的第三位，并反复强调「要配 **Build harness** 才出最好结果」。@ericzakariasson 放出模型卡（Terminal-Bench、SWE-Marathon 等跳升），@aksheyd 称在 **Grok Build / Cursor** 上迭代了大量 harness。Artificial Analysis 亦将其打入前四并点出 Coding Agent Index 进步。

**为何值得看**：新模型本身之外，叙事几乎统一成「模型 + 自家 harness + IDE/代理入口」——Cursor、Cline、Devin、Factory Droid、Visual Studio 同日跟进接入。

- 发布：https://x.com/SpaceXAI/status/2102069815225586149  
- agentic coding 定位：https://x.com/elonmusk/status/2102082011233931762  
- Build harness：https://x.com/elonmusk/status/2102102621037236699  
- Cursor / Build：https://x.com/aksheyd/status/2102070351786283181  
- 模型卡：https://x.com/ericzakariasson/status/2102092784727679127  
- AA 指数：https://x.com/ArtificialAnlys/status/2102074898327932987

![Grok 4.7](/images/twitter-hots/2026-09-22/01-grok47.jpg)

---

## 2. Devin：Cloud 进终端 + `devin ssh`，并接入 Grok 4.7

**要点**：@cognition 推出 **Devin Cloud in Terminal**（`/cloud` 创建与接管云端会话）与 **`devin ssh`**（SSH 进 Devin VM，可直接改代码、看进程、做端口转发）。同日宣布 **Grok 4.7** 已可在 Devin 使用，并给出 FrontierCode 等内部评测观感；@devindesktop 同步 Desktop / CLI 可用。

**为何值得看**：云端 agent 不再只是「网页里看进度」——CLI 与 SSH 把会话拉回本机工作流，同时多模型入口继续扩。

- Cloud + SSH：https://x.com/cognition/status/2102104259219406886  
- Grok 4.7 in Devin：https://x.com/cognition/status/2102147831519666639  
- Desktop/CLI：https://x.com/devindesktop/status/2102148086231339103

![Devin Cloud Terminal](/images/twitter-hots/2026-09-22/02-devin.jpg)

---

## 3. Cursor Compile：一个月合入约 2500 个 PR 的实操复盘

**要点**：@poteto 放出本该在 **Cursor Compile London** 演讲的内容：上个月如何把约 **2500** 个 PR 合进生产。帖内是长视频工作流复盘，而不是又一份产品 changelog。

**为何值得看**：同一天 Grok 团队在推「进 Cursor」，社区侧则在谈「人用 Cursor/代理怎么真的把吞吐拉满」。

- 链接：https://x.com/poteto/status/2102050467505430555

![Cursor Compile / 2500 PRs](/images/twitter-hots/2026-09-22/03-cursor-prs.jpg)

---

## 4. 小米 MiMo-V2.6：开源 omnimodal，冲开源榜前列

**要点**：@XiaomiMiMo 发布 **MiMo-V2.6 Pro / Flash**：稀疏 MoE、约 1M 上下文、MIT，原生文本/图像/视频/音频。@ArtificialAnlys 称 Pro 在 Intelligence Index 上以 **46** 登顶开源权重，并给出很低的单位智力成本；@_LuoFuli 长文谈这是开源侧罕见体量的单次 RL 扩训。vLLM 宣布双规格 day-0 支持。

**为何值得看**：开源 coding/多模态权重又多了一个「可本地、可服务、有榜」的选项，且同步讲清 RL 成本故事。

- 发布：https://x.com/XiaomiMiMo/status/2102138559952290106  
- AA 榜：https://x.com/ArtificialAnlys/status/2102128560962187701  
- RL 长文：https://x.com/_LuoFuli/status/2102162926802968749  
- vLLM：https://x.com/vllm_project/status/2102181397138128962

![MiMo-V2.6](/images/twitter-hots/2026-09-22/04-mimo.jpg)

---

## 5. Jev / Kev：从「是什么」走到「怎么省 90%」

**要点**：@willdepue 反思 Jev 热度——零样本、接近前沿智能的分类器为何突然有用。@_aj 称用 TypeSafe Jev 做的新 harness 把重复劳动成本砍约 **90%**（步骤从 LLM 调用沉到代码）。@jaredpalmer 更新 **Kev** 到 Qwen3.5 底座（0.8B/4B/9B + Modal 微调脚本）。中文圈 @nhciao 试了 Jev + 鼠须管/Rime 输入法，并吐槽还缺 Cursor 式 tab 补全。

**为何值得看**：昨天还在谈开放额度，今天讨论已切到「嵌进 harness 后账单怎么变」。

- 热度反思：https://x.com/willdepue/status/2102070249453469823  
- 降本 harness：https://x.com/_aj/status/2102061534956662818  
- Kev on Qwen3.5：https://x.com/jaredpalmer/status/2102048412841517495  
- 输入法实验：https://x.com/nhciao/status/2101967227327267297

![Jev harness](/images/twitter-hots/2026-09-22/05-jev.jpg)

---

## 6. Cline：Grok 4.7 上线，限时约 4 折

**要点**：@cline 宣布 **Grok 4.7** 已在 Cline 可用，至 **9/27** 约 **40%** off；称 DeepSWE 接近 GPT 5.6 Sol / Fable 5.1，高 TPS 且约便宜 8 倍，并点名在新 **Cline Desktop** 里手感很快。

**为何值得看**：新模型分发战打到「谁先把折扣和桌面端体验捆在一起」。

- 链接：https://x.com/cline/status/2102109776960463299

![Cline Grok 4.7](/images/twitter-hots/2026-09-22/06-cline.jpg)

---

## 7. GitHub Copilot：Agent runtime 迁 Rust + 可编辑 diff

**要点**：@github 称一名工程师带一组 agent，把 **GitHub Copilot agent runtime** 迁到 Rust，约 **80 万行**生产代码并保持质量。@gimenete 预告 Copilot 桌面端即将支持 **editable diffs**：代理改到八成时，可在 diff 里直接手改收尾。

**为何值得看**：一边是「agent 写大规模迁移」，一边是「人在 diff 里夺回最后一公里」——桌面代理产品形态继续收敛。

- Runtime 迁 Rust：https://x.com/github/status/2102103572867358977  
- Editable diffs：https://x.com/gimenete/status/2102063244491858051

![Copilot editable diffs](/images/twitter-hots/2026-09-22/07-copilot.jpg)

---

## 8. Capy：多步 PR 工作流，被拿来对比 Claude Code / Codex

**要点**：@garrytan 称 @capydotai 能跟住多步工作流、推大 PR，体感比单独的 **Codex** 或 **Claude Code** 更快。@0xluffy 补评测：在 DeepSWE 上 Capy 比「大厂 harness」更好、更快、更便宜（约一半成本与时间）。

**为何值得看**：又一个「壳比模型更关键」的现场证据——和昨日 Harness Tax 讨论同一条线上。

- Garry：https://x.com/garrytan/status/2102095924893827501  
- DeepSWE 对比：https://x.com/0xluffy/status/2102128216551165979

![Capy vs harnesses](/images/twitter-hots/2026-09-22/08-capy.jpg)

---

## 9. Factory Droid：同日接入 Grok 4.7

**要点**：@FactoryAI 宣布 **Grok 4.7** 已在 **Droid** 可用，早期观感：工程/调试/数据/基础设施都强，进入具体命令发现比模型默认路径更快。

**为何值得看**：和 Cline、Devin 一样，是「新模型日」里 harness 厂商的标准跟进动作，但带一点真实使用笔记。

- 链接：https://x.com/FactoryAI/status/2102162709647430116

![Factory Droid](/images/twitter-hots/2026-09-22/09-factory.jpg)

---

## 10. IntelliJ：AI 写得快不够，要用 IDE 闭环验对

**要点**：@intellijidea 强调难点不是「AI 写得快」，而是确认它写对了——在 IDEA 里生成后立刻用调试器、测试运行器、内置检查把关，再自信地 ship。

**为何值得看**：在满屏新模型与 harness 的日子里，传统 IDE 把「验证」重新放回产品叙事中心。

- 链接：https://x.com/intellijidea/status/2102050318758359252

![IntelliJ AI validation](/images/twitter-hots/2026-09-22/10-intellij.jpg)
