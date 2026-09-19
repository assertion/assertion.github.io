---
layout: post
title: AI Twitter 热点 · 2026-09-19
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, Claude Code, AGENTS.md, Jev, Codex, Cline, Devin, MiniMax, Factory, Kev
lang: zh
translation_key: ai-twitter-hots-2026-09-19
---

# AI Twitter/X 热点 Digest · 2026-09-19（周六）


## 今日要点

1. **Claude Code** 正式加 **AGENTS.md**：无 `CLAUDE.md` 时回退读取社区通用 agent 说明文件。  
2. **Jev** 成主线：Vercel AI Gateway 首日采用、Cline 的 jev-browser、以及 Codex+Jev 的「Jev Use」对比视频。  
3. **Codex** 讨论很散：ask 超时自动选、额度重置吐槽、Model Catalog、手机 Voice、以及 Pro 20x 续订入口。  
4. **Devin** 仍在吵容量与降智；**Factory Private**、**MiniMax Code CLI** 开源叙事也进了时间线。

---

## 1. Claude Code：原生支持 AGENTS.md

**要点**：Anthropic 的 @trq212（Thariq）宣布：从 **Claude Code 2.1.277** 起，如果目录里没有 `CLAUDE.md`，会检查并使用 **AGENTS.md**。日文圈很快跟帖，认为这降低了 Codex / Claude 之间搬项目说明的摩擦；X「今日新闻」里也把这条聚成高讨论话题。

**为何值得看**：`AGENTS.md` 本是跨工具的社区约定；Claude Code 补上无 CLAUDE.md 时的回退，等于承认「一份说明、多端 agent」的协作现实。

- Thariq：https://x.com/trq212/status/2101009392611278961  

---

## 2. Jev：Gateway 采用纪录 + Cline 浏览器插件 + Codex 加强版 Computer Use

**要点**：@vercel 称 **Jev**（@typesafeai）是 AI Gateway 历史上首日采用最快的模型：付费团队占比约 13%，约为 GPT-5.6 家族的 2 倍、Fable 5.1 的 6 倍；并跟帖指向完整报告。同窗 @cline 放出 **jev-browser** 插件，让 Jev 在 Cline 里用浏览器（走 Vercel AI Gateway key）。@Saccc_c 则用视频对比「Codex 内置 Computer Use」与自拼的 **Codex + Jev Use**，称后者更顺、token 差不多。Theo 的 Spaces「Jev time?」同期有数千听众。

**为何值得看**：不是单条发布说明，而是模型入口（Gateway）、IDE 插件、以及「能不能真操电脑」三条线同时热——Jev 在 coding agent 栈里的位置被当场试出来。

- Vercel 采用：https://x.com/vercel/status/2101077346203971900  
- Vercel 报告：https://x.com/vercel/status/2101078089669423378  
- Cline jev-browser：https://x.com/cline/status/2101056078872256935  
- Jev Use：https://x.com/Saccc_c/status/2100864907046768890  
- LangChain 直播预告：https://x.com/LangChain/status/2101077173604143503  

---

## 3. Codex：ask question 超时自动选择

**要点**：@unixzii 高互动吐槽：Codex 的 ask question 超时后会替用户自动选选项；回复里有人主张这应该是阻塞操作——要么明确提交，要么明确取消；也有人点名 Hermes 同类体验。

**为何值得看**：agent 越主动，确认框越危险；这是「工具替你决定」边界被用户当场打回的现场。

- 链接：https://x.com/unixzii/status/2100893952501305806  

---

## 4. Codex：额度重置焦虑

**要点**：@lxfater「Codex还不重置？我咋活呀？」引发大量跟帖；有人安慰「明天自动重置」，也有人建议先让 workbuddy 顶上。

**为何值得看**：和功能发布无关，但是订阅制 coding agent 的真实使用摩擦——额度窗口本身就是产品体验的一部分。

- 链接：https://x.com/lxfater/status/2100856628530774050  

---

## 5. Codex Model Catalog：国产模型直连与 CC Switch

**要点**：@Jason_Young1231 发长文讨论 Codex Model Catalog：Kimi k3 Response 等格式出现后，不少国产模型可少做中间转换、直接配进 Codex；配置项变复杂后，他用开源 **CC Switch**（覆盖 Claude Code / Codex / Pi 等）简化第三方模型切换。

**为何值得看**：把「OpenAI 是否更 Open」落成可操作的 catalog 与本地路由问题，而不是口号。

- 链接：https://x.com/Jason_Young1231/status/2100971161920368763  

---

## 6. Codex Voice：手机连电脑远程说

**要点**：@cdngdev 展示可从手机用 **Codex voice** 连回电脑；@turingou 跟帖说以前要把远程任务会话整理成文本再开 realtime voice，现在能直接用远程会话，但仍嫌 voice session 与任务 session 的组织方式别扭。

**为何值得看**：coding agent 的交互面从终端/IDE 扩到「人在别处、电脑还在跑」——入口变了，会话模型问题立刻露出来。

- 官方向演示：https://x.com/cdngdev/status/2100665093784563865  
- 体感：https://x.com/turingou/status/2101018857246994526  

---

## 7. ChatGPT Pro 20x：Codex 桌面里的续订入口

**要点**：@Voxyz_ai 称在 **Codex 桌面应用** 的 Billing 里又看到 **ChatGPT Pro 20x**，并把第二个账号从 5x 升到 20x；提醒「网页升不了的可以看看桌面端」。

**为何值得看**：额度与套餐入口开始出现在 coding 客户端里——订阅摩擦和产品分发绑在一起。

- 链接：https://x.com/Voxyz_ai/status/2100915644384383015  

---

## 8. Devin：SWE-2 变慢与「订阅超支」

**要点**：@Fei2411 抱怨 Devin 服务器容量不够，**SWE-2** 明显变慢、感觉降智，并喊 @cognition 补算力；同窗另一帖则吐槽 Cursor Ultra、Devin max 等一堆订阅叠在一起「用不完还超支」。

**为何值得看**：一边是运行时体验塌方，一边是多 agent 订阅账单——都是「真在用」的人才会吵的问题。

- 容量：https://x.com/Fei2411/status/2100800965997928941  
- 订阅：https://x.com/Fei2411/status/2100944052040683547  

---

## 9. MiniMax Code CLI：开源叙事落地 GitHub

**要点**：@Ronny_MiniMax 先说 MiniMax Code「接下来几天开源」，随后发「See you on GitHub / here we are」，并配 FrontierHarness 对比图（帖中称约 76.7%、中位成功任务约 4m33s）。公开仓库 `MiniMax-AI/minimax-code` 并非昨日新建（约 2026-06 起即为公开 MIT），但 9 月 18 日晚间有密集提交与这波宣布同窗对齐——讨论的是「开源推进/可见度」，不是「仓库今天才创建」。

**为何值得看**：国内 coding CLI 又一次用公开 harness 数字抢注意力；写进 digest 时要分清「宣布浪潮」与「仓库创建日」。

- 预告：https://x.com/Ronny_MiniMax/status/2100884417028005912  
- 落地：https://x.com/Ronny_MiniMax/status/2100926464187367538  

---

## 10. Factory Private：组织可自建部署

**要点**：@FactoryAI 介绍 **Factory Private**——面向组织的新部署选项，把 Factory 放进自己的基础设施边界里跑。

**为何值得看**：继 Slack Code beta 之后，企业采购常卡在数据驻留；Private 是同一产品线的合规面补丁。

- 链接：https://x.com/FactoryAI/status/2100993480709533748  

---

## 11. Kev-0.5B：本地「Jev 味」小决策模型

**要点**：@jaredpalmer 放出开源 **Kev-0.5B**（自称 tiny Jev-like decision model），并演示在 MacBook 上本地自我对弈象棋——每步都是 Choice question。

**为何值得看**：和本窗 Jev 热潮对位：一边是 Gateway 上的大模型采用曲线，一边是「决策/选择」能力被压到可本地跑的小权重。

- 介绍：https://x.com/jaredpalmer/status/2101028325472841920  
- 象棋：https://x.com/jaredpalmer/status/2101037645316898933  
