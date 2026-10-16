---
layout: post
title: AI Twitter 热点 · 2026-10-16
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, Muse Spark Open, Meta, Cursor, Gemini 4 Argon, Antigravity, Grok Bot, Anthropic, OpenCode, Devin, ChatGPT, Codex, Magnitude, T3 Code, pi-durable
lang: zh
translation_key: ai-twitter-hots-2026-10-16
issue: 35
item_count: 10
headline: "Meta 放出 816B 开放权重 Muse Spark Open，Argon 进 Antigravity，Anthropic 称已盈利"
highlights:
  - label: "Muse Spark Open：Meta 的 816B 开放权重 coding 模型"
    text: "816B 总参 / 42B 激活、1M 上下文、原生多模态，主打长程任务和硬核软件工程；Ollama 当天上云端，可直接接 Claude Code；Muse Wonder 同日进 Cursor，CursorBench 46.1%。"
  - label: "Gemini 4 Argon 进 Antigravity，Pro 用户另给周额度"
    text: "Argon 向付费 Google AI Pro 开放，额度与 3.8 Flash 分开算；但也有开发者实测写代码不如 Opus、幻觉多。"
  - label: "Anthropic 对投资人称已盈利，Fable 5.5 传言再起"
    text: "FT 报 Anthropic 告诉投资人公司已经盈利、在为 IPO 造势；同日开放 STEM / 概念推理两类 Fellowship；theo 一句「今天发 Fable 5.5 就结束了」6k+ 赞。"
products: [Muse Spark Open, Muse Wonder, Cursor, Gemini 4 Argon, Antigravity, Grok Bot, Anthropic, OpenCode, Devin, ChatGPT, Codex, Magnitude, T3 Code, Mayoi, pi-durable]
stats:
  - value: "816B"
    caption: "Muse Spark Open 总参数（42B 激活）"
  - value: "46.1%"
    caption: "Muse Wonder 在 CursorBench 的得分（默认 effort）"
  - value: "2M"
    caption: "thdxr：OpenCode 2.0 后即将达到的日活"
stat:
  value: "816B"
  caption: "Muse Spark Open 总参数（42B 激活）"
---

# AI Twitter/X 热点 Digest · 2026-10-16（周五）


## 今日要点

1. **Meta 放出开放权重 Muse Spark Open**：@AIatMeta 称其为「迄今最强的美国开放权重模型」，**816B 总参 / 42B 激活**、**1M** 上下文、原生多模态，主打 coding 和 agent 长程任务；@ollama 当天上线云端版并支持接 Claude Code；@cursor_ai 同日上架 Muse Wonder，CursorBench **46.1%**。  
2. **Gemini 4 Argon 进 Antigravity**：@antigravity 向付费 Google AI Pro 用户开放 Argon，另设独立周额度、不占 3.8 Flash 的额度；口碑分化，@signulll 说写代码「不如 Opus，甚至不如 Sonnet」。  
3. **Anthropic 对投资人称已盈利**：@FT 报道 Anthropic 告诉投资人公司已经盈利、为 IPO 争取支持，但增速比部分投资人预期慢；@theo 一句「Anthropic 今天要是发 Fable 5.5 就结束了」拿到 6k+ 赞。

---

## 1. Muse Spark Open：Meta 的 816B 开放权重 coding 模型

**要点**：@AIatMeta 发布 **Muse Spark Open**，称是「迄今最强的美国开放权重模型」：**816B 总参数 / 42B 激活**，**1M token** 上下文，文本、图像、视频、音频原生多模态，主打长程任务、复杂软件工程和多步推理。@alexandr_wang 的长串也重复了这组参数。@ollama 当天上线 `muse-spark-open:cloud`，还能用 `ollama launch claude muse-spark-open:cloud` 直接接进 Claude Code（先给 Max / Teams，Pro 随后）。同一天 @cursor_ai 上架闭源的 **Muse Wonder**：默认 effort 下 CursorBench **46.1%**，是 Muse 系列最高，定价 **$4 / $20** 每百万输入 / 输出 token。

**为何值得看**：开放权重的头部模型第一次直接对准 agentic coding，加上 Ollama 当天就能接 Claude Code，开放权重模型进 coding 工作流的门槛又低了一截。注意「最强」是 Meta 自己的说法。

- AIatMeta：Muse Spark Open 发布：https://x.com/AIatMeta/status/2110779754274292212  
- alexandr_wang：参数与定位：https://x.com/alexandr_wang/status/2110778736434184611  
- ollama：云端上线、接 Claude Code：https://x.com/ollama/status/2110833609829695718  
- cursor_ai：Muse Wonder 进 Cursor，CursorBench 46.1%：https://x.com/cursor_ai/status/2110867556693430293

![Muse Spark Open 发布图](/images/twitter-hots/2026-10-16/01-muse-spark-open.jpg)

---

## 2. Gemini 4 Argon 进 Antigravity：Pro 另给周额度

**要点**：@antigravity 宣布向付费 **Google AI Pro** 用户开放 **Gemini 4 Argon**，称需求「惊人」，所以是有意控制节奏扩容；Pro 额外给一个**只按周计**的 Argon 额度，不挤占现有 3.8 Flash 额度（@_mohansolo 也确认了这一点）。@Google 同时发长串，讲 Google 内部各团队怎么拿 Argon 啃难题。反面声音来自 @signulll：他实测 Argon 写代码，连小代码库都表现不佳、幻觉多，「很多情况下不如 Sonnet」。

**为何值得看**：Argon 上周的话题是「发布和评测」，这次是真正进了 coding IDE 并给了额度；开发者实测和官方宣传之间的落差，接下来值得继续看。

- antigravity：Argon 向 Pro 开放：https://x.com/antigravity/status/2110866531932316011  
- _mohansolo：独立周额度：https://x.com/_mohansolo/status/2110866446020710657  
- Google：内部工程用例串：https://x.com/Google/status/2110746360047603834  
- signulll：coding 实测不及 Opus：https://x.com/signulll/status/2110906507776667709

![Gemini 4 Argon 在 Google 工程团队](/images/twitter-hots/2026-10-16/02-gemini-argon-antigravity.jpg)

---

## 3. Grok Bot：代购兜底、无免费档的增长、插件投稿

**要点**：@elonmusk 转引用户用 Grok Bot 订机票的帖子，表示如果 Grok Bot 在**购物上出错或泄露银行卡**（「目前还没发生过」），**SpaceX 会全额赔付**；另一帖称「从没见过增长这么快的东西」，而且**没有免费档**，说明用户觉得物有所值。@poteto 提醒 Grok Bot（以及 Grok、Cursor）的插件都可以投稿；@grok 介绍了免费的 **Spam-Call Scrubber** skill：在人肉搜索网站和数据经纪商那里找到你的号码，代你提交退出申请、处理确认，并按你设的周期复查。

**为何值得看**：agent 代你花钱，最难的是信任。厂商直接承诺赔付，加上插件生态开放投稿，可以看出个人 agent 正从「能用」走向「敢用」。

- elonmusk：购物出错 SpaceX 赔付：https://x.com/elonmusk/status/2110610960474079445  
- elonmusk：增长最快、无免费档：https://x.com/elonmusk/status/2110866513955868924  
- poteto：插件投稿入口：https://x.com/poteto/status/2110840796954202186  
- grok：Spam-Call Scrubber skill：https://x.com/grok/status/2110852882907934743

![Grok Bot 购物兜底](/images/twitter-hots/2026-10-16/03-grok-bot.jpg)

---

## 4. Anthropic：对投资人称已盈利，新 Fellowship，Fable 5.5 传言

**要点**：@FT 报道 Anthropic **告诉投资人公司已经盈利**，借此为一场大型 IPO 争取支持，但增速比部分投资人预期慢，背后是市场对 AI 交易的担忧（营收数字昨天已报，这次的新信息是「盈利」）。@AnthropicAI 开放两类新 Fellowship：**STEM Fellows** 和 **Conceptual Reasoning Fellows**（哲学、认知科学、经济、政策、法律），2027 年 1 月起在 Anthropic 待四个月，截止日期 **10 月 28 日**。社区里，@theo 一句「Anthropic 今天要是发 Fable 5.5 就结束了」拿到 6k+ 赞，之后又说想更新模型分级榜，但怕一发 Fable 5.5 就来了；@evanyou 拿 Anthropic 新发的反蒸馏防护文章和 Bun 开了个玩笑。

**为何值得看**：「盈利」对 IPO 叙事分量很重；Fable 5.5 目前只是社区猜测，没有官方消息。

- FT：Anthropic 称已盈利：https://x.com/FT/status/2110709513552601571  
- AnthropicAI：两类新 Fellowship：https://x.com/AnthropicAI/status/2110720940665372825  
- theo：Fable 5.5 猜想：https://x.com/theo/status/2110673598533050814 ｜ https://x.com/theo/status/2110827068347027508  
- evanyou：反蒸馏 vs Bun：https://x.com/evanyou/status/2110722301536915553

![FT：Anthropic 称已盈利](/images/twitter-hots/2026-10-16/04-anthropic-profitable.jpg)

---

## 5. OpenCode：2.0 之后冲向 200 万日活，DeepSeek V4.1 Flash 免费用

**要点**：@thdxr 说 OpenCode 2.0 发布后「数字又疯涨了」，**即将突破 200 万日活**；他还演示了一个场景：边散步边用手机上的 OpenCode app，遥控办公室电脑上的 OpenCode server，同时在 Slack 线程里和团队以及 OpenCode slackbot 一起干活。@opencode 宣布 **DeepSeek V4.1 Flash 在 OpenCode 里免费**，这条帖子拿到 2.2 万赞。

**为何值得看**：开源 coding agent 靠「免费模型 + 多端」继续抢用户；手机遥控本地 server、再接 Slack 的用法，也在模糊终端 agent 和团队协作工具的边界。

- thdxr：逼近 2M 日活：https://x.com/thdxr/status/2110544790764794231  
- thdxr：手机 → server → Slack：https://x.com/thdxr/status/2110793318959632615  
- opencode：DeepSeek V4.1 Flash 免费：https://x.com/opencode/status/2110635747648909472

![OpenCode 日活](/images/twitter-hots/2026-10-16/05-opencode.jpg)

---

## 6. Devin Oncall：让 Devin 当 SRE

**要点**：@cognition 发布 **Devin Oncall**：Devin 自动调查告警和 bug，帮团队诊断并解决线上事故，官方称已经在为一些全球最大的公司**每天处理数千条告警**。@walden_yan 说私测阶段的使用量就「爆炸式」增长，工程师值班不用再那么熬夜。

**为何值得看**：coding agent 从「写新代码」延伸到「值班排障」，这是工程时间里最痛、也最容易量化收益的一块。

- cognition：Devin Oncall 发布：https://x.com/cognition/status/2110790097369010292  
- walden_yan：私测用量：https://x.com/walden_yan/status/2110795331709632768

![Devin Oncall](/images/twitter-hots/2026-10-16/06-devin-oncall.jpg)

---

## 7. OpenAI：GPT-Live-1.1 进 Codex 语音，ChatGPT 能操控 Chrome 标签页

**要点**：@OpenAI 发布 **GPT-Live-1.1**：新声音、更好的口音、更少「checking...」，覆盖 ChatGPT、**Codex** 和 dots 的语音模式，新增法、德、印地、墨西哥西语、韩、日语声音，今天起对所有用户推出，API 随后。@ChatGPT 同日宣布给 Chrome 用户带来 computer use：Chat 模式下可以读你打开的标签页，**Work 模式下能直接操控 Chrome 标签页**办事（发消息、填表等）。@nickbaumann_ 称这是「低调但巨大的发布」。

**为何值得看**：语音进 Codex，加上浏览器操控进 ChatGPT 主产品，OpenAI 在把 agent 能力塞进日常入口。

- OpenAI：GPT-Live-1.1：https://x.com/OpenAI/status/2110797830361436604  
- ChatGPT：Chrome 标签页与 Work 模式：https://x.com/ChatGPT/status/2110823738531037651  
- nickbaumann_：「低调但巨大」：https://x.com/nickbaumann_/status/2110849181829185833

![GPT-Live-1.1](/images/twitter-hots/2026-10-16/07-openai-voice-chrome.jpg)

---

## 8. Magnitude：开源本地推理引擎，自称比 Ollama 快 2×

**要点**：@tomgreenwald 发布开源推理引擎 **Magnitude**：下载模型时在你的芯片上花最多约一分钟自动调 kernel，保留最快且不改变输出的组合，并给每个模型配好 speculative decoding drafter。官方数据是 11 个常见本地模型的平均值：M4 Pro 上比 Ollama（MLX）prefill 快 1.32×、decode 快 **2.19×**；DGX Spark 上比 Ollama（llama.cpp）decode 快 2.17×。支持 Apple Silicon、NVIDIA、AMD 和纯 CPU，可一键接 Pi、OpenCode、Hermes、Codex 等 agent；KV cache 量化后每个 agent 内存约减半，多个 agent 共享前缀缓存。这条帖子收藏 1.7k，比点赞还多。

**为何值得看**：本地模型跑 agent 的瓶颈是速度和内存，「按机器自动调 kernel」是一条不用换硬件的路。数据来自官方自测。

- tomgreenwald：Magnitude 发布：https://x.com/tomgreenwald/status/2110718297255670071

![Magnitude vs Ollama](/images/twitter-hots/2026-10-16/08-magnitude.jpg)

---

## 9. 为 agent 时代造编辑器：T3 Code 出 alpha、Mayoi、IntelliJ 进 Cursor

**要点**：@jullerino 宣布 T3 Code 的 **Orchestrator V2** 进入稳定通道，同时去掉 Alpha 标签，版本号定为 **0.1.0 Beta**，移动端 2.0.0 已上 App Store 和 Play Store；@theo 转发说「T3 Code 终于出 alpha 了」。@chenchengpro 开源了编辑器 **Mayoi**，专为「看 diff、review agent 代码、起下一个 agent」设计：Go 写的，GPU 原生 UI，没有 Electron；应用 **24 MB**（他对比 Cursor 970 MB），内存约 180 MB，用 Ghostty 内核做终端，MIT 协议。@intellijidea 宣布和 @cursor_ai 合作的 **Java and Kotlin by IntelliJ IDEA** 扩展到了 1.0，基于 LSP，把 JVM 能力带出 IDE。

**为何值得看**：人越来越少手改代码，编辑器的重心正在从「写」转到「审 + 调度 agent」。

- jullerino：Orchestrator V2 / 0.1.0 Beta：https://x.com/jullerino/status/2110874152186040662  
- theo：T3 Code 出 alpha：https://x.com/theo/status/2110907433656938681  
- chenchengpro：Mayoi 开源：https://x.com/chenchengpro/status/2110699165051453771  
- intellijidea：Java/Kotlin 扩展 1.0：https://x.com/intellijidea/status/2110737206767665224

![T3 Code Orchestrator V2](/images/twitter-hots/2026-10-16/09-t3-code-beta.jpg)

---

## 10. pi-durable：从 iOS 上的 Python IDE 到浏览器里的编程老师

**要点**：pi 生态里的 **pi-durable** agent 这两天出现在好几个作品里。@mitsuhiko 说用新模型，一个下午（大多在挂机）加一趟航班，就做出了 iOS 上的 Python IDE：跑 Pyodide，带调试器、linter / formatter，内嵌 pi-durable 驱动的 coding agent，支持 iCloud Drive；他还录了和孩子们一起做的游戏，游戏里在浏览器内嵌了一个 pi-durable agent 当编程老师。@badlogicgames 也转了 kitze 用它做个人 agent 的案例。

**为何值得看**：把一个小而耐久的 agent 运行时直接嵌进应用、甚至浏览器，比再造一个大 IDE 更轻，也是「agent 当组件」的一个具体样本。

- mitsuhiko：iOS Python IDE：https://x.com/mitsuhiko/status/2110680120843444589  
- mitsuhiko：游戏里的 agent 老师：https://x.com/mitsuhiko/status/2110726538622636420  
- badlogicgames：kitze 用上 pi-durable：https://x.com/badlogicgames/status/2110741895374647367

![mitsuhiko 的 iOS Python IDE](/images/twitter-hots/2026-10-16/10-pi-durable.jpg)

---
