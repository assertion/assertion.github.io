---
layout: post
title: AI Twitter 热点 · 2026-09-25
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, OpenClaw, Claude Code, Codex, Muse, OpenCode, Jev, CLM, Browser Use, Devin, Cursor, Linear, harness
lang: zh
translation_key: ai-twitter-hots-2026-09-25
---

# AI Twitter/X 热点 Digest · 2026-09-25（周五）


## 今日要点

1. **OpenClaw** 用 test-audit skill 砍掉约 **40 万行**自测代码、覆盖率几乎不动；同日发出 **2026.9.6**（接 Opus 5.5 / GPT‑6 / Grok 4.7 与 Jev）。  
2. **Claude Code** 与 **Codex** 的订阅体感再次翻转；**Muse** 上 Mac computer use，**OpenCode Desktop** 称约 **200 万**周活。  
3. **System One** 从 Jev 扩到 **CLM**；**Browser Use** 用 Luna→Jev 打牌；**Devin ssh**、**Cursor Projects + pstack**、**Linear** 自适应路由，以及 Google **harness 蒸馏**论文并行出现。

---

## 1. OpenClaw：砍掉约 40 万行自测，并发布 2026.9.6

**要点**：@steipete 称 OpenClaw 删掉约 **400k LOC** 自测代码，覆盖率几乎不变——前沿模型爱给每个小改动堆测试，真正有用的却不多；他点名 **test-audit** skill 帮了忙（链到仓库里的 skill 文档）。官方 @openclaw 同日发 **2026.9.6**：接入 Opus 5.5、GPT‑6 Sol/Luna、Grok 4.7，并提到 managed updates、重启恢复、30 日用量、GitHub reader、远程 Files/Memory/Skills、直播会议笔记，以及 **Jev + decision models**。

**为何值得看**：agent 产品一边接新模型，一边开始反向清理「模型写出来的测试税」。

- 删测试讨论：https://x.com/steipete/status/2103147927313199260  
- 2026.9.6：https://x.com/openclaw/status/2102955928693989413

![OpenClaw test-audit](/images/twitter-hots/2026-09-25/01-openclaw.jpg)

---

## 2. Claude Code vs Codex：200 美元档体感再次翻转

**要点**：@theo 直言当前 **$200 Claude Code** 计划相对 **Codex**「好得离谱」——几周前还是反过来，并期待 OpenAI 反击。同日 @badlogicgames 分享 Claude Code 匿名会里学来的习惯：不再依赖自制 review 工具，直接在 VS Code 里用代码导航/调试把 PR 看透。

**为何值得看**：订阅档位与 harness/产品体验的「手感」比单次榜单分数更常决定默认工具。

- Claude Code vs Codex：https://x.com/theo/status/2103258221700067769  
- VS Code 审阅习惯：https://x.com/badlogicgames/status/2103193213930496446

![Claude Code vs Codex](/images/twitter-hots/2026-09-25/02-claude-codex.jpg)

---

## 3. Muse：Mac 版上 computer use，可排队离开

**要点**：@alexandr_wang 宣布 **Muse for Mac** 具备 **computer use**：任务可排队，人离开后继续跑。@garrytan 转引媒体评价，称 Muse「非常 impress」。个人 agent / 数字员工叙事继续从聊天框走向「接管电脑」。

**为何值得看**：computer use 不再只是基准上的第三条轴，而是消费级 agent 的默认能力预期。

- Mac computer use：https://x.com/alexandr_wang/status/2102916057006764370  
- 评价转发：https://x.com/garrytan/status/2102974165800399274

![Muse computer use](/images/twitter-hots/2026-09-25/03-muse.jpg)

---

## 4. OpenCode：Desktop 约 200 万周活，Space Bunny 限免试玩

**要点**：@thdxr 称 **OpenCode Desktop** 约有 **200 万**周活，约为 TUI 用户的一半。@omarsar0 试用限免一周的 **Space Bunny**（1M 上下文 + 图像输入）：从线稿落地页、摩卡壶 3D、可玩 Three.js 关卡到自查浏览器截图再修——强调「会自己验收」。另有帖展示插件生态（如 GPT‑Live 语音接入会话）。

**为何值得看**：开源 coding agent 用真实用量与视觉/原型 demo，而不是再发一篇「我们支持某某模型」。

- Desktop 周活：https://x.com/thdxr/status/2102918818662342686  
- Space Bunny：https://x.com/omarsar0/status/2103174241654837649  
- 插件：https://x.com/thdxr/status/2102986362970587464

![OpenCode Space Bunny](/images/twitter-hots/2026-09-25/04-opencode.jpg)

---

## 5. System One：Jev 之后来了更快的 CLM，以及 Jev-as-a-Judge

**要点**：@omarsar0 提醒做自定义 harness 的人：继 **Jev** 之后出现 **Contrastive Language Model (CLM)**——称比 Jev 快约 **9×**，长程任务上更像更好的 verifier；Jev 走 RLCD 决策，CLM 用对比学习把状态与动作嵌入再匹配。同作者另强调 **Jev-as-a-Judge**：高置信用廉价法官、低置信再 escalate 到 GPT‑6 / Opus 5.5。

**为何值得看**：路由、门禁、评测正在从「再调一个 LLM」拆成专门的 System One 层。

- CLM vs Jev：https://x.com/omarsar0/status/2103139055013646646  
- Jev-as-a-Judge：https://x.com/omarsar0/status/2102934356108972278

![System One CLM](/images/twitter-hots/2026-09-25/05-system-one.jpg)

---

## 6. Browser Use：Luna 规划、Jev 执行，扑克赢了

**要点**：@browser_use 放出 demo——**Luna** 做 planner、**Jev** 做 actor，联手打牌并赢下对局。便宜/快的决策模型开始直接嵌进浏览器自动化闭环。

**为何值得看**：browser use 从「换模刷榜」走到「规划模型 × System One 执行」的组合拳。

- 链接：https://x.com/browser_use/status/2102980499614658580

![Browser Use Luna Jev](/images/twitter-hots/2026-09-25/06-browser-use.jpg)

---

## 7. Devin：`devin ssh` 把云端 VM 当本机开发机

**要点**：@dabit3 演示 **`devin ssh`**：直接进入 Devin 正在工作的环境，macOS / Linux / Windows 都可当服务器用；人与 Devin 同处一个 VM，设计空间变大。

**为何值得看**：云端 coding agent 的交付物不只是 PR，而是「可 ssh 进去的共享开发机」。

- 链接：https://x.com/dabit3/status/2103137532829687893

![Devin ssh](/images/twitter-hots/2026-09-25/07-devin.jpg)

---

## 8. Cursor：Projects + pstack，十个并行项目当「1000x」

**要点**：@poteto 称 Cursor **Projects** 配上 **pstack** 后，日常并行跑至少 **10** 个项目——性能、技术债、Bend2/Rust 实验、用户反馈、dashboard、甚至做游戏——自嘲像「1000x engineer」。讨论焦点从昨日的 token 账单，转到「并行编排本身」。

**为何值得看**：IDE agent 的下一档体验，往往是多会话/多仓库并行，而不只是单会话更聪明。

- 链接：https://x.com/poteto/status/2103252563999232092

![Cursor Projects pstack](/images/twitter-hots/2026-09-25/08-cursor-pstack.jpg)

---

## 9. Linear：coding agent 自适应路由选模

**要点**：@linear 上线 **Adaptive routing**：coding agent 可按 issue 自动选模——简单任务走更快模型，复杂任务走默认推理模型。联合创始人 @karrisaarinen 强调可选 Claude / Codex / 开源等，自称 coding agents 里的「瑞士」。

**为何值得看**：issue tracker 原生 agent 把「换模」收成产品默认策略，而不是用户手搓路由表。

- 官方：https://x.com/linear/status/2103157473691787665  
- 创始人补充：https://x.com/karrisaarinen/status/2103161440014393726

![Linear adaptive routing](/images/twitter-hots/2026-09-25/09-linear.jpg)

---

## 10. Harness 蒸馏：Google 等提出 Harness-Zero

**要点**：@omarsar0 推荐 Google 及合作者论文：研究能否**蒸馏 agent harness**。去掉专用 harness 后，宏任务成功率从 **23.3%** 提到 **44.3%**，甚至高于「基座模型 + harness」的 **41.7%**。**Harness-Zero** 只在训练期用优化 harness；部署动作空间不同时，由 harnessing agent 先纠正学生输出再当演示。28 类 harness 行为平均约 **82.3%** 可恢复；同 harness 下 agent-as-harness 也优于 code-as-harness。

**为何值得看**：继「自改进 harness 会过拟合」之后，社区开始认真问——壳本身能不能蒸馏进模型。

- 链接：https://x.com/omarsar0/status/2103095360239636666

![Harness distillation](/images/twitter-hots/2026-09-25/10-harness-distill.jpg)
