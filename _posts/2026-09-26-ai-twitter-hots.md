---
layout: post
title: AI Twitter 热点 · 2026-09-26
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, Copilot, OpenClaw, Claude Code, Opus 5.5, Codex, Cognition, Devin, Cline, DeepSeek Harness, Zed, Linear
lang: zh
translation_key: ai-twitter-hots-2026-09-26
---

# AI Twitter/X 热点 Digest · 2026-09-26（周六）


## 今日要点

1. **Microsoft Copilot** 称史上最大更新（Autopilot / Code / Home / Office），并与 **OpenClaw** 合作落地企业部署。  
2. **Claude Code** 侧：Slack 里的 **Tag**、5 小时限额优雅收尾、**/checkup prompt-audit**；**Opus 5.5** 继续刷出长程移植与汇编加速 demo。  
3. **Codex** 短时宕机；**Cognition** 称 **Devin** 年化经常性收入跑过 **$1B**；另有 **Cline Desktop SSH**、**DeepSeek Harness** 插件占比、**Zed Delta** 与 **Linear** 环境密钥同日出现。

---

## 1. Microsoft Copilot 大更新，并搭上 OpenClaw

**要点**：@satyanadella 宣称这是迄今最大的 Copilot 更新，把四件事收在一起：**Autopilot**（面向企业的主动、长跑 agent）、**Code**（在公司租户内用 Copilot 建应用）、**Home**（Chat + Cowork）、**Office** 与 Copilot 双向嵌入；还可在 Teams 唤起，并推出主动汇总 M365 信息的 **Today**。同日 @steipete 表示微软在 **OpenClaw** 上线了颇有说服力的产品——双方自三月起合作，把代码库准备到可大规模部署，并称微软是很好的合作方与开源贡献者。

**为何值得看**：大厂「工作 OS」叙事开始明确叠开源 agent 运行时，而不只是换一个聊天框。

- Copilot 大更新：https://x.com/satyanadella/status/2103455884366188544  
- OpenClaw 合作：https://x.com/steipete/status/2103491173927272531

![Microsoft Copilot OpenClaw](/images/twitter-hots/2026-09-26/01-copilot-openclaw.jpg)

---

## 2. Claude Code：Tag、限额优雅停、/checkup

**要点**：@bcherny 介绍 Slack 里的 **Tag**：每天写超过一半 PR、几乎包办数据分析，并修掉大量产品反馈与 bug——可主动、可编程、有记忆、能接 connectors，配合 Opus 5.5 / Fable 5.1。@lydiahallie 转发并点赞一项高频需求：**5 小时限额**撞在半路上时，Claude Code 会尽量找优雅收尾点，而不是砍在半截编辑中间。另有小改：**/claude-api prompt-audit** 现也可写成 **/checkup prompt-audit**，会检查 CLAUDE.md、skills、agents 里模型已不再需要的指令。

**为何值得看**：coding agent 的体验增量，正从「再聪明一点」扩到工作区常驻、配额边界与配置卫生。

- Tag：https://x.com/bcherny/status/2103538666597691552  
- 5 小时限额优雅停：https://x.com/lydiahallie/status/2103562429636673635  
- /checkup prompt-audit：https://x.com/lydiahallie/status/2103617988918485226

![Claude Code Tag checkup](/images/twitter-hots/2026-09-26/02-claude-code.jpg)

---

## 3. Opus 5.5：官方精选 + ts→Rust + Rust→汇编

**要点**：@claudeai 汇总 Opus 5.5 上线几天来大家在玩的东西。@theo 称自己做了约四个月的 **ts-rust** 移植：GPT‑5.6 Sol 约 **35%** 测试通过、GPT‑6 Astra 约 **85%** 后都卡死打转；丢给 Opus 5.5 一个「/goal 做完移植并加速」后约 **10 小时**跑通，并继续啃性能。@dhh 则称用 Opus 5.5 **一次**把 Omarchy 屏保引擎（ttfx）从 Rust 搬到 **x86-64 汇编**，最高约 **17×** 加速。

**为何值得看**：长程端口与「往更低层钻」的 demo，比单次榜分更能说明模型在真实工程闭环里的手感。

- 官方精选：https://x.com/claudeai/status/2103515655760982273  
- theo ts-rust：https://x.com/theo/status/2103558185487577476  
- dhh Rust→asm：https://x.com/dhh/status/2103595410921279635

![Opus 5.5 coding](/images/twitter-hots/2026-09-26/03-opus-55.jpg)

---

## 4. Codex 宕机

**要点**：OpenAI 的 @thsottiaux 确认 **Codex** 服务异常，正在抢修。@theo 转帖并调侃「宕了——但我没察觉」。

**为何值得看**：默认依赖云端 coding agent 时，可用性本身也会变成讨论焦点。

- 官方确认：https://x.com/thsottiaux/status/2103620061156290622  
- 反应：https://x.com/theo/status/2103621399294493034

![Codex outage](/images/twitter-hots/2026-09-26/04-codex-outage.jpg)

---

## 5. Cognition：Devin 年化经常性收入跑过 $1B

**要点**：@cognition 宣布年化经常性收入跑速（ARR run rate）已跨过 **$1B**，并展示客户用 **Devin** 的方式。联合创始人 @walden_yan 称从零到一花了不到三年。

**为何值得看**：独立 coding agent 公司用商业里程碑说话，而不只是 demo 周报。

- 官方：https://x.com/cognition/status/2103500168951955718  
- 创始人：https://x.com/walden_yan/status/2103530710057549915

![Cognition Devin ARR](/images/twitter-hots/2026-09-26/05-cognition-devin.jpg)

---

## 6. 从 Codex App 切回 Claude Code：你缺什么？

**要点**：@theo 向「在 ChatGPT/Codex App 待了一阵又切回 Claude Code」的人提问：体感如何、最怀念什么？续写了近几日订阅档位与产品手感来回翻转的讨论。

**为何值得看**：默认工具往往由工作流摩擦决定，而不是由单一基准。

- 链接：https://x.com/theo/status/2103387109537275983

![Claude Code vs Codex feelings](/images/twitter-hots/2026-09-26/06-claude-vs-codex.jpg)

---

## 7. Cline Desktop：SSH 远程干活

**要点**：@cline 宣布 **Cline Desktop** 支持 **SSH**：App 留在笔记本上，Cline 可在开发机、树莓派、Docker 容器等任意可 SSH 的目标上工作，并附文档与入门视频。

**为何值得看**：本地桌面 agent 与远程算力/设备之间的「人机同环境」继续产品化——和云端 `ssh` 进 agent VM 是对称的另一端。

- 链接：https://x.com/cline/status/2103537395773911330

![Cline Desktop SSH](/images/twitter-hots/2026-09-26/07-cline-ssh.jpg)

---

## 8. DeepSeek Harness：约 60% 用户装了第三方插件

**要点**：@tianyi 称据 DeepSeek 官方 API 侧统计，约 **60%** 的 **DeepSeek Harness** 用户至少用了一个第三方插件；团队会继续稳住插件 API、尽量少破坏性变更，并计划连日推荐优质插件。

**为何值得看**：国内 harness 把插件生态当成核心体验，而不只是模型换皮。

- 链接：https://x.com/tianyi/status/2103534313463783831

![DeepSeek Harness plugins](/images/twitter-hots/2026-09-26/08-deepseek-harness.jpg)

---

## 9. Zed Delta：Terminal-Bench 对准 Codex / Claude Code

**要点**：@zeddotdev 称在自测的 **Terminal-Bench** 上，**Delta** 对每一档前沿模型的准确率都追平或超过 **Codex** 与 **Claude Code**，单次通过成本约在 **0.80–1.12×**；同时表示还没到开香槟的时候，并链到后续说明。

**为何值得看**：编辑器自带 agent 开始用同一终端基准公开对标头部 CLI/app。

- 链接：https://x.com/zeddotdev/status/2103512459814305939

![Zed Delta Terminal-Bench](/images/twitter-hots/2026-09-26/09-zed-delta.jpg)

---

## 10. Linear：coding agent 安装期可读环境密钥

**要点**：@linear 为 coding agent 增加安全安装配置：会话在 **install** 阶段可访问 **environment secrets**，以便安全拉取私有依赖与其它环境配置。

**为何值得看**：issue tracker 原生 agent 开始补齐「能装真实私有依赖」这一层，而不只是空仓库里改公开代码。

- 链接：https://x.com/linear/status/2103501540652966098

![Linear env secrets](/images/twitter-hots/2026-09-26/10-linear-secrets.jpg)
