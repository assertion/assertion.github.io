---
layout: post
title: AI Twitter 热点 · 2026-09-27
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, Codex, Claude, Jev Router, OpenCode, Cline, Pixel Canary, OpenClaw, Opus 5.5, DeepSeek Harness, OmO, pi, JAZ
lang: zh
translation_key: ai-twitter-hots-2026-09-27
issue: 16
item_count: 10
headline: "Codex 宕机后重置限额，T3 Code 显示 Claude 人气翻倍，Jev 硬刚 Astra"
highlights:
  - label: "Codex 宕机后重置"
    text: "短暂宕机后恢复，并对付费用户重置限额。"
  - label: "Claude 人气约两倍"
    text: "T3 Code 用量显示 Claude 人气已是 Codex 的约两倍。"
  - label: "Jev 硬刚 Astra"
    text: "Jev Router 被拿来硬刚 GPT-6 Astra；OpenCode 强调「赢的是 harness」。"
products: [Codex, T3 Code, Claude, Jev, OpenCode]
stat:
  value: "2×"
  caption: "T3 Code 中 Claude 对比 Codex 的人气"
---

# AI Twitter/X 热点 Digest · 2026-09-27（周日）


## 今日要点

1. **Codex** 短暂宕机后恢复，并对付费用户重置限额；同日 **T3 Code** 用量显示 **Claude** 人气已是 Codex 的约两倍。  
2. **Jev Router** 被拿来硬刚 **GPT-6 Astra**；**OpenCode** 强调「赢的是 harness」；**Cline** 上线免费 stealth 模型 **Pixel Canary**。  
3. **OpenClaw** 谈微软回馈上游；**Opus 5.5** 继续刷效率与配额体感；另有 **DeepSeek Harness** 插件、**OmO v5**（pi）与 MIT **JAZ** 极简 harness 论文。

---

## 1. Codex 恢复服务，并重置付费限额

**要点**：OpenAI 的 @thsottiaux 在短暂中断后宣布 Codex 与 ChatGPT work 已恢复，并将为所有付费用户重置用量限额；还提到宕机时有一台「备用 Codex」帮忙。这是对前一晚 Codex 故障公告的直接收尾。

**为何值得看**：云端 coding agent 的可用性与补偿策略，本身就会影响默认工作流选择。

- 恢复公告：https://x.com/thsottiaux/status/2103637477760311522

![Codex restored](/images/twitter-hots/2026-09-27/01-codex-back.jpg)

---

## 2. T3 Code：Claude 人气反超 Codex 约 2×

**要点**：@theo 贴出 T3 Code 用量图——两周前 Codex 还更热，今天 Claude 已是 Codex 的约两倍；另帖展示近七日用量，称「大概两个 Claude 订阅 + 一个 Codex 订阅」就能撑起高强度使用。中文圈也有人感慨「量大管饱」这个词正从 ChatGPT/Codex 挪到 Claude。

**为何值得看**：默认工具切换往往比榜分更能反映真实摩擦与配额体验。

- 人气翻转：https://x.com/theo/status/2103704797237096741  
- 七日用量：https://x.com/theo/status/2103794887481319566  
- 「量大管饱」：https://x.com/tualatrix/status/2103746764847333409

![Claude vs Codex in T3 Code](/images/twitter-hots/2026-09-27/02-claude-vs-codex.jpg)

---

## 3. Jev Router：花 $1,000 硬刚 GPT-6 Astra

**要点**：@OpenRouter 推出 **typesafe/jev-router**——用 Jev 做 cache-aware 路由，按请求挑选模型与 reasoning effort。@theo 熬夜花约 **$1,000** 在 DeepSWE 上对比：表现大致贴近 GPT-6 Astra low，但更贵、耗时约 **5×**；同时强调自己喜欢 Jev，只是讨厌被拿去干它不擅长的事。

**为何值得看**：System One「决策/分类」模型进路由层后，讨论焦点变成：它到底该不该替你选 frontier coding 模型。

- 基准：https://x.com/theo/status/2103774771788108008  
- 澄清用途：https://x.com/theo/status/2103927696359358744

![Jev Router benchmark](/images/twitter-hots/2026-09-27/03-jev-router.jpg)

---

## 4. OpenCode：不是模型，是 harness

**要点**：面对一则「one-shot」演示，@thdxr 连发强调：这只在 **opencode** 里成立——全是 harness engineering，不是模型本身。

**为何值得看**：和 Jev / 极简 harness 论文同一天共振：社区越来越把「壳」当成产品差异，而不只是换模型。

- 链接：https://x.com/thdxr/status/2103928290268319896

![OpenCode harness](/images/twitter-hots/2026-09-27/04-opencode-harness.jpg)

---

## 5. Cline：Pixel Canary（stealth）免费上线

**要点**：@cline 宣布 stealth 模型 **Pixel Canary** 已在 Cline 免费可用；在面向真实 Next.js Web/移动任务的 **Next.js Agent Evals** 上与 GPT-6 Astra 持平，并超过 Kimi K3。同帖还推广新版 Cline Desktop 速度与其它免费模型促销。

**为何值得看**：独立 harness 继续用「免费 stealth + 真实任务基准」抢默认位。

- 发布：https://x.com/cline/status/2103636639038026093  
- Desktop 速度：https://x.com/cline/status/2103636640715690479

![Cline Pixel Canary](/images/twitter-hots/2026-09-27/05-cline-pixel.jpg)

---

## 6. OpenClaw：微软 Autopilot，更关键的是回馈上游

**要点**：@openclaw 跟进微软 **Autopilot**（基于 OpenClaw 的 always-on agent）公告，并强调合作亮点是 @OmarShahine 等微软同事对 OpenClaw **回馈上游**，并链到贡献说明。

**为何值得看**：大厂搭开源 agent 运行时，是否反向贡献，决定社区是否把「合作」当成可复用基建还是一次性封装。

- 链接：https://x.com/openclaw/status/2103678752194703762

![OpenClaw Microsoft](/images/twitter-hots/2026-09-27/06-openclaw-ms.jpg)

---

## 7. Opus 5.5：asm 再加速 +「配额效率」体感

**要点**：@dhh 称 Opus 在昨夜 asm 移植后又把 Omarchy 屏保引擎推到峰值约 **22×**、均值约 **6×**，相对原 Python 最高约 **450×**，并加上 SSE2/AVX2/AVX-512。@signulll 则从配额侧发问：Opus 5.5 为何既猛又省，对比 Astra/Sol「能力/token」体感差距很大。另有「给 Opus 全公司工具权限≈白领可被替代」的强叙事帖刷屏。

**为何值得看**：模型讨论同时在「往更低层钻」与「单位配额能扛多久」两条线上推进。

- dhh 再加速：https://x.com/dhh/status/2103745963089092975  
- 配额效率：https://x.com/signulll/status/2103974381219196937  
- 工具权限叙事：https://x.com/signulll/status/2103901199774683144

![Opus 5.5 efficiency](/images/twitter-hots/2026-09-27/07-opus-efficiency.jpg)

---

## 8. DeepSeek Harness：社区插件 dsh-TUI

**要点**：@tianyi 继续 DSH 插件推荐系列，点名内测期就在做的 **dsh-TUI**：补齐 DeepSeek Harness 缺失的 TUI，并随版本迭代。承接此前「约 60% 用户装了第三方插件」的官方侧统计叙事。

**为何值得看**：国内 harness 把插件生态当成可运营的产品面，而不只是模型壳。

- 链接：https://x.com/tianyi/status/2103821968944533526

![DeepSeek Harness dsh-TUI](/images/twitter-hots/2026-09-27/08-deepseek-dsh-tui.jpg)

---

## 9. OmO v5（pi / senpi）正式版发布

**要点**：@justsisyphus 宣布基于 pi 的 **OmO v5**：codemode 工具调用约 **10×**、类 aha 的双 agent 记忆、更好的 ultracode（Astra/Opus 混用）、可视化改进；安装提示 `bun install -g omo-ai`。npm / GitHub 上 **omo-ai@5.0.0** 与 **oh-my-openagent v5.0.0** 同日落在稳定通道（此前长期 beta）。

**为何值得看**：pi 系 harness 从 beta 走到「可默认安装」的稳定版，并继续押注多模型工作流。

- 发布帖：https://x.com/justsisyphus/status/2103923201055289369  
- 安装说明：https://x.com/justsisyphus/status/2103923205014753326

![OmO v5](/images/twitter-hots/2026-09-27/09-omo-v5.jpg)

---

## 10. MIT CSAIL：JAZ 极简 harness（一个 invoke）

**要点**：@omarsar0 推荐 MIT CSAIL 论文 *Harness as a Language*：框架 **JAZ** 只有一个原语 **invoke**——模型写代码、可递归 invoke，并把输入与历史都暴露成代码环境变量。声称仅靠 prompting、无单独记忆子系统，在 StuLife 回忆任务上相对 Letta（MemGPT）约 **+8%** 且约一半成本；在 AppWorld 上相对 ACE 约 **+4%** 且更便宜。论文约 9 月 22 日挂 arXiv；代码在 jaz-lang/jaz（仓库本身更早，属论文讨论热度而非「今日刚开源」）。

**为何值得看**：和 OpenCode / Jev 同日形成对照——有人把 harness 做厚，有人证明「尽量薄」也能扛长程与自改进。

- 讨论：https://x.com/omarsar0/status/2103826930181308720

![JAZ minimal harness](/images/twitter-hots/2026-09-27/10-jaz-harness.jpg)
