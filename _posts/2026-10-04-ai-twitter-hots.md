---
layout: post
title: AI Twitter 热点 · 2026-10-04
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, Codex, OpenClaw, Antigravity, Pi Durable, OpenCode, T3 Code, AutoCompact, Cline, Claude Code, GitHub Copilot
lang: zh
translation_key: ai-twitter-hots-2026-10-04
---

# AI Twitter/X 热点 Digest · 2026-10-04（周日）


## 今日要点

1. **Codex / OpenCode** 同场征集痛点：OpenAI 的 Tibo 公开问「Codex 还缺什么」，OpenCode 2 也在刷最大槽点——产品迭代直接对着时间线开。  
2. **端侧与分发**：OpenClaw Android 卡在 Google 审核超过一周，同时放出 v2026.9.8（GPT-6.1 Sol）；Pi Durable 在手机上做出可热更新、可多人的本机 agent。  
3. **模型进 IDE / harness**：Antigravity 给付费用户上 Opus 5.5 / Sonnet 5.5；Cline 免费接入 Ling 3.1 Flash；AutoCompact 等论文继续把「压缩 / 改 harness」训进模型；Claude Code 2.1.289 与 Copilot 并排审 agent 代码。

---

## 1. Codex：官方公开征集「还缺什么」

**要点**：@thsottiaux（OpenAI）发帖问：「What's one thing that's missing in codex that you wish we had?」评论区瞬间涌入大量功能请求。同日社区仍有人强调 GPT-6.1 Sol 在 high effort 下够稳、少切模型更省心。

**为何值得看**：旗舰 coding agent 把需求调研放到公开时间线，比 changelog 更能看出用户真正卡在哪。

- Tibo 征集：https://x.com/thsottiaux/status/2106439068557144179  
- Sol 使用心得：https://x.com/haider1/status/2106408936329154943

![Codex wishlist](/images/twitter-hots/2026-10-04/01-codex-wishlist.jpg)

---

## 2. OpenClaw：Android 审核卡住 + v2026.9.8 支持 GPT-6.1 Sol

**要点**：@steipete 称 OpenClaw Android 应用已在 Google 审核里卡了超过一周，公开求人帮忙。同日官号 @openclaw 发布 **v2026.9.8**：支持 **GPT-6.1 Sol**、agent 回复回传到正确会话、降内存、更新与 Windows 启动修复（43 PRs / 8 contributors）。

**为何值得看**：一边是端侧分发被商店门禁卡住，一边是桌面/CLI 版本已经跟上最新 frontier 模型——OpenClaw 的「能装上」本身成了产品故事。

- 审核 limbo：https://x.com/steipete/status/2106446147791597774  
- v2026.9.8：https://x.com/openclaw/status/2106247624634531889

![OpenClaw Android and release](/images/twitter-hots/2026-10-04/02-openclaw.jpg)

---

## 3. Antigravity：付费用户可用 Opus 5.5 / Sonnet 5.5

**要点**：@_mohansolo 确认 **Antigravity** 已为所有付费用户加入 **Claude Opus 5.5** 与 **Sonnet 5.5**，并称希望大家用上最强 frontier 模型，同时暗示 **Gemini 4 Argon** 将更广放开。

**为何值得看**：独立 coding 产品把最新 Claude 一代整包塞进付费层，和「只用一家模型」的 IDE 叙事正面竞争。

- Antigravity 模型更新：https://x.com/_mohansolo/status/2106432039817998463

![Antigravity Opus Sonnet 5.5](/images/twitter-hots/2026-10-04/03-antigravity.jpg)

---

## 4. Pi Durable：手机上的本机 multiplayer agent

**要点**：@badlogicgames 周末用 **Pi Durable** 在 Android 上做了个人项目：完全跑在手机上（无 cloud VM）、可 live edit、可多人、可任选 provider/model，并加上 artifacts；自称「比 Claude for Android / ChatGPT for Android 更好用」。后续贴出 ngrok 暴露的 multiplayer、热重载自修改（「building pim with pim」），以及「未来是手机上的 agent，不是云端沙箱」的一月预言回响。强调非 Earendil 官方产品，只是为了压测 Durable。

**为何值得看**：把 Durable 运行时压到随身设备上，直接挑战「agent 必须住在云端沙箱」的默认假设。

- 本机替换 Claude for Android：https://x.com/badlogicgames/status/2106286641551675411  
- 无 moat / artifacts：https://x.com/badlogicgames/status/2106452296087302173  
- 手机 multiplayer：https://x.com/badlogicgames/status/2106383122183196709  
- 自修改软件：https://x.com/badlogicgames/status/2106461615793004817

![Pi Durable on phone](/images/twitter-hots/2026-10-04/04-pi-durable.jpg)

---

## 5. OpenCode 2：创始人问「最大槽点是什么」

**要点**：@thdxr 发帖：「what are your biggest issues with OpenCode 2？」评论区高活跃，用户直接吐槽与许愿。与同日 Codex 官方征集形成对照——两家都在公开时间线上做需求收敛。

**为何值得看**：开源 coding agent 的下一代版本把反馈通道做成主帖，迭代节奏跟社区抱怨绑在一起。

- OpenCode 2 征集：https://x.com/thdxr/status/2106380410577981703

![OpenCode 2 issues](/images/twitter-hots/2026-10-04/05-opencode.jpg)

---

## 6. T3 Code：Usage 视图看清「钱花在哪」

**要点**：@theo 继续改进 **T3 Code** 的 usage 视图，更容易看出 spend 落在哪、不同模型在自己数据上的行为差异；并强调该视图会统计机器上 **Claude Code 与 Codex 的全部用量**，不限于 T3 Code 内。

**为何值得看**：多 harness / 多模型并存后，「额度与花费可视化」本身成为 coding UI 的核心功能。

- Usage 视图：https://x.com/theo/status/2106473854113894520

![T3 Code usage view](/images/twitter-hots/2026-10-04/06-t3-code.jpg)

---

## 7. AutoCompact：把「何时压缩」训进模型

**要点**：@omarsar0 串联 **AutoHarness → AutoContext → AutoCompact** 趋势：模型开始原生承担更多原属 harness 的工作。AutoCompact 让 agent 自己决定何时 compact、保留什么工作状态、如何 resume；经 judge 纠偏轨迹 + SFT + RL 后，SWE-bench Verified +9.2、SWE-PolyBench Verified +5.0，且在 256K 不溢出窗口下仍有增益。同日另推 CMU harness learning：用 RL 训 proposer 改 harness 代码、solver 权重不动。

**为何值得看**：coding agent 的下一步不是只堆更大窗口，而是模型与 harness 共设计——「何时压缩 / 改哪段 harness」变成可训练技能。

- AutoCompact：https://x.com/omarsar0/status/2106416745686995025  
- CMU harness learning：https://x.com/omarsar0/status/2106529236068819394

![AutoCompact paper](/images/twitter-hots/2026-10-04/07-autocompact.jpg)

---

## 8. Cline：Ling 3.1 Flash 限时免费

**要点**：@cline 宣布 **Ling 3.1 Flash** 已接入 Cline，**免费至 10 月 13 日**。该 MoE 总参 560B、激活 25B，官宣对标 Kimi K3、DeepSeek V4 Pro 等开源 frontier。

**为何值得看**：coding IDE 继续用「免费试 frontier 开源权重」拉新与换模，降低尝试成本。

- Ling 3.1 Flash：https://x.com/cline/status/2106470199415456151

![Cline Ling 3.1 Flash](/images/twitter-hots/2026-10-04/08-cline-ling.jpg)

---

## 9. Claude Code 2.1.289：teammate 可 spawn 共享 agent

**要点**：@ClaudeCodeLog 记录 **Claude Code 2.1.289** 已推送（约 27 项 CLI 变更）。亮点：teammate 可通过 `agent.spawn` 拉起共享 agent；agent ID 统一，并澄清 idle / waiting 状态；Read deny 规则覆盖 `@` 提及的文件，避免绕过只读限制；另有插件 / MCP 登录描述、终端冻结等修复。

**为何值得看**：多 agent 协作从「人手开会话」走向 teammate 可程序化拉起共享 agent，权限规则也跟着收紧。

- 2.1.289 可用：https://x.com/ClaudeCodeLog/status/2106525277618635228  
- CLI changelog：https://x.com/ClaudeCodeLog/status/2106525288255402339

![Claude Code 2.1.289](/images/twitter-hots/2026-10-04/09-claude-code.jpg)

---

## 10. GitHub Copilot：diff / 终端 / 浏览器并排审 agent 代码

**要点**：@github 推广 Copilot 应用里的并排审阅：审 agent 写出的代码时不必来回切标签，**diff、终端、浏览器**同屏，便于检查、运行与预览。

**为何值得看**：agent 产量上来之后，瓶颈从「谁写代码」变成「怎么在一个界面里验代码」——IDE / 审阅面开始为 agent 工作流重做。

- Copilot 并排审阅：https://x.com/github/status/2106445557535220101

![GitHub Copilot side-by-side](/images/twitter-hots/2026-10-04/10-copilot.jpg)

---
