---
layout: post
title: AI Twitter 热点 · 2026-10-18
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, DeepSeek, DeepSeek-V4.1-Flash-1017, OpenCode, OpenAI, Codex, ChatGPT, Replit, Claude, Opus 5.5, Vercel, tsc-ts, T3 Code, Cursor, thdxr, poteto, Grok Bot, Gemini 4 Argon, GitHub Copilot, pi
lang: zh
translation_key: ai-twitter-hots-2026-10-18
issue: 37
item_count: 10
headline: "DeepSeek 开源 V4.1-Flash-1017，OpenCode 遭遇密钥泄露，Codex 额度再重置"
highlights:
  - label: "DeepSeek-V4.1-Flash-1017 开源：官方称 DeepSWE 77.0"
    text: "MIT 协议放出权重，输出更短、完成更快；官方自测 DeepSWE、Automation-Bench 超过 Opus 5；Search / Fetch API 全面开放，每千次 0.75 美元；vLLM、Ollama、Cline、Qoder 当天接入。"
  - label: "OpenCode 安全事件：1.4% Console 用户受影响"
    text: "OpenCode 称与「大规模蒸馏攻击」有关，受影响的是绑定了外部模型提供方的用户；Anthropic 已吊销疑似泄露的 Claude key，Google 封禁了暴露的 Gemini key。"
  - label: "OpenAI：Codex 额度再重置，Replit 默认换成 OpenAI"
    text: "@thsottiaux 的「Day 13」再次重置 Codex 用量额度，1.3 万赞；TechCrunch 报道 Replit 把默认模型从 Anthropic 换成 OpenAI，Claude 仍可选。"
products: [DeepSeek-V4.1-Flash-1017, DeepSeek Harness, OpenCode, Codex, ChatGPT, dot, Replit, Claude, Opus 5.5, Claude Code, tsc-ts, T3 Code, Cursor, pstack, Grok Bot, Gemini 4 Argon, GitHub Copilot, pi-durable]
stats:
  - value: "77.0"
    caption: "DeepSeek-V4.1-Flash-1017 的 DeepSWE v1.1 得分（官方自测）"
  - value: "1.4%"
    caption: "受 OpenCode 安全事件影响的 Console 用户比例"
  - value: "27%"
    caption: "theo 实测 Gemini 4 Argon 在 agent 循环里的缓存未命中率"
stat:
  value: "77.0"
  caption: "DeepSeek-V4.1-Flash-1017 的 DeepSWE v1.1 得分（官方自测）"
---

# AI Twitter/X 热点 Digest · 2026-10-18（周日）


## 今日要点

1. **DeepSeek 开源 V4.1-Flash-1017**：@deepseek_ai 发布 V4.1-Flash 的小版本更新，权重以 **MIT** 协议放出；官方自测 **DeepSWE v1.1 77.0**、Automation-Bench 60.5，均高于 Opus 5，Terminal-Bench 4.0 仍落后；Search / Fetch API 全面开放，**每千次 0.75 美元**。官宣帖近 3 万赞。  
2. **OpenCode 密钥泄露**：@opencode 称一次与「大规模蒸馏攻击」有关的入侵影响了 **1.4%** 的 Console 用户，都是绑定了外部模型提供方的账户；Anthropic 已吊销疑似受影响的 Claude key，Google 封禁了暴露的 Gemini key。  
3. **OpenAI 这边**：@thsottiaux 「Day 13」再次重置 Codex 用量额度（1.3 万赞）；TechCrunch 报道 **Replit 把默认模型从 Anthropic 换成 OpenAI**，Claude 仍可手动选择。

---

## 1. DeepSeek-V4.1-Flash-1017：开源小版本，官方称 coding 超过 Opus 5

**要点**：@deepseek_ai 发布 **DeepSeek-V4.1-Flash-1017**，称比上一版跑分更高、完成任务更快、输出更短，是「性能和成本上的帕累托改进」，网页、App 和 API 已上线，并针对 DeepSeek Harness、腾讯 CodeBuddy、WorkBuddy 做了优化；@tianyi 提醒要升级到 **DeepSeek Harness 0.2.1-rc.1** 及以上才能发挥新模型的能力。权重同步放到 Hugging Face 和 ModelScope，协议 **MIT**（Hugging Face 仓库 10 月 17 日创建，确是新发布）。官方自测成绩：**DeepSWE v1.1 77.0**（Opus 5 为 74.0）、**Automation-Bench 60.5**（Opus 5 为 50.3）、Terminal-Bench 4.0 42.3（Opus 5 为 51.8，GPT-5.6 Sol 为 39.9）。@cline 的说法是：Terminal-Bench 超过 GPT-5.6 Sol、价格约便宜 17 倍，比上一版 Flash 提高 35%，而且「没有算法创新」，靠的是在多个 coding agent harness 上做 RL。DeepSeek 同时开放 **Search / Fetch API**，每个接口每千次调用 **0.75 美元**，在 DeepSeek Harness、Claude Code、Codex 里作为服务端工具调用时暂时免费，10 月 31 日开始计费。生态方面，@vllm_project 首日支持，@ollama 上线 Ollama Cloud（美国托管、零数据保留），可直接 `ollama launch claude` 接 Claude Code，Qoder 全家桶也已支持。@business（彭博）认为这给 Anthropic、OpenAI 和国内同行都带来压力；@natolambert 问「开放权重之王回来了？」。@bourneliu66 实测后觉得性价比高、用代码生成视频很强，同时猜测它蒸馏了不少 GPT-6-Astra 的数据（他本人说明是没有证据的猜测）。

**为何值得看**：这是又一款直接对准 coding agent 的开放权重模型，而且 DeepSeek 把 harness、搜索 API 和模型一起推。跑分都是官方自测，第三方复测还要再等等。

- deepseek_ai：V4.1-Flash-1017 发布：https://x.com/deepseek_ai/status/2111375640717033777  
- deepseek_ai：Search / Fetch API 开放：https://x.com/deepseek_ai/status/2111375650414309859  
- deepseek_ai：开源权重：https://x.com/deepseek_ai/status/2111375653069259247  
- tianyi：升级 DeepSeek Harness：https://x.com/tianyi/status/2111376782717035007  
- cline：Terminal-Bench 与价格对比：https://x.com/cline/status/2111434657732640792  
- vllm_project：首日支持：https://x.com/vllm_project/status/2111401488392343722  
- ollama：Ollama Cloud 上线：https://x.com/ollama/status/2111576482879553726  
- business：彭博报道：https://x.com/business/status/2111486163739365812  
- natolambert：「开放权重之王回来了？」：https://x.com/natolambert/status/2111440910257099072  
- bourneliu66：实测体验：https://x.com/bourneliu66/status/2111495019437981878

![DeepSeek-V4.1-Flash-1017 官方跑分表](/images/twitter-hots/2026-10-18/01-deepseek-v41-flash.jpg)

---

## 2. OpenCode 安全事件：第三方 API key 泄露，三家模型厂商联手处置

**要点**：@opencode 宣布前一晚发生安全事件，与一次「大规模蒸馏攻击」有关，影响了 **1.4%** 的 OpenCode Console 用户，都是绑定了外部模型提供方的账户；受影响用户已收到邮件，没收到邮件的就没受影响。事件仍在处理中，细节暂不公开，OpenCode 正和 **Anthropic、OpenAI、Google** 一起补救。这条帖子 6.8k 赞。Anthropic 的 @lydiahallie 说已吊销认为受影响的 Claude API key，在 OpenCode 里存过 key 的用户最好重建一个；Google AI Studio 的 @EvanOtero 说已封禁暴露的 Gemini API key，建议新建 key、删掉旧的并检查用量，有不明扣费可以找 Google Cloud 账单支持。在官方公告之前，已有用户（@colinparsonscom）发帖说自己在 OpenCode 里用的 OpenAI key 一夜之间被刷了 281 美元。@thdxr 随后说自己的个人账户也正遭到攻击，「AI 驱动的黑客是个全新的世界」；pi 作者 @badlogicgames 表示声援：agent 时代要守住安全太难了。

**为何值得看**：「蒸馏攻击」是 OpenCode 自己的说法，具体原因还没披露。对用户来说，存在任何第三方工具里的模型 key 都该设好额度上限，必要时去提供方那边直接轮换。

- opencode：安全事件公告：https://x.com/opencode/status/2111519637049319818  
- lydiahallie：Anthropic 吊销受影响 key：https://x.com/lydiahallie/status/2111563956666110287  
- EvanOtero：Google 封禁暴露的 Gemini key：https://x.com/EvanOtero/status/2111591525876474100  
- colinparsonscom：用户 key 被刷：https://x.com/colinparsonscom/status/2111451256426250580  
- thdxr：个人账户也被攻击：https://x.com/thdxr/status/2111528031072461114  
- badlogicgames：#hugops：https://x.com/badlogicgames/status/2111519887763902796

![OpenCode 与 Anthropic 的公告](/images/twitter-hots/2026-10-18/02-opencode-breach.jpg)

---

## 3. OpenAI：Codex 额度再重置，dot 协作报税，Replit 默认换成 OpenAI

**要点**：@thsottiaux 发出「Day 13 / Le limit reset」，又一次重置 Codex 用量额度，拿到 **1.3 万赞**，随后跟帖「太平洋时间今天之内上线」，几小时后宣布「Done」；此前 @chijianqiang 还在吐槽自己的 GPT 周额度一天从 66% 掉到 25%。@thsottiaux 还分享了自己的用法：工作用的 dot「Burger」应个人 dot「Dorito」的请求，通过邮件和它协作拿到材料，再和他的会计师沟通，**20 分钟**办完一件报税的事，「我们还很早期」。他另发了一段 ChatGPT Space 团队亲自出镜的介绍视频，并说前一天刚加了幻灯片支持，目前 Pro / Business / Enterprise 可用。@OpenAIDevs 整理了一份社区周末项目合集，附复刻方法。另一边，@TechCrunch 报道 Replit CEO Amjad Masad 在 TechCrunch Disrupt 上说已不再与 Anthropic 合作，事后澄清为：**OpenAI 取代 Anthropic 成为 Replit 的默认模型提供方**，Claude 仍可供用户选择；他给出的理由是成本、合作关系和性能。报道也提到，有知情人士否认双方合作已经终止。

**为何值得看**：额度重置几乎成了 Codex 拉新的固定节目。Masad 说 Replit 直到最近还是 Anthropic 的前五大客户之一，而多数用户不会改默认模型，默认一换，用量也就跟着换了。

- thsottiaux：Day 13 额度重置：https://x.com/thsottiaux/status/2111492673890824348  
- thsottiaux：今天之内上线：https://x.com/thsottiaux/status/2111492738025959922  
- thsottiaux：Done：https://x.com/thsottiaux/status/2111566005684289735  
- chijianqiang：周额度掉得快：https://x.com/chijianqiang/status/2111434904127127866  
- thsottiaux：两个 dot 协作报税：https://x.com/thsottiaux/status/2111495392559067199  
- thsottiaux：ChatGPT Space 介绍视频：https://x.com/thsottiaux/status/2111249534072529256  
- thsottiaux：Space 加入幻灯片：https://x.com/thsottiaux/status/2111249810502353152  
- OpenAIDevs：周末项目合集：https://x.com/OpenAIDevs/status/2111585491237650691  
- TechCrunch：Replit 默认改用 OpenAI：https://x.com/TechCrunch/status/2111529951555891386

![Day 13：Le limit reset](/images/twitter-hots/2026-10-18/03-openai-codex.jpg)

---

## 4. Claude：一条 Opus 5.5 动效提示词收藏近 6k

**要点**：@minchoi 发了一条「这个 Opus 5.5 提示词相当于一个时薪 400 美元的动效设计师」，附一段完全用代码做出来的动效短片，帖子收藏 **近 6,000**，是点赞的两倍。提示词全文放在回复里：让模型扮演「动效导演 + 创意技术」，**完全用代码完成设计、动画、配乐和 QA**；用一份 brief 定义模式（showreel / 产品 / 发布故事 / 讲解）、受众、时长、帧率、品牌、素材、工具链（Remotion 或 HTML + GSAP）等，空着的项让模型自己决定并在 brief.md 里写明理由。@swyx 也在找类似讲解视频的提示词，说清晰程度「接近 Kurzgesagt」。@theo 说自己「最近用 Claude 做的东西简直离谱，本不该做得到」（5.1k 赞），另一帖说对 Claude 新的响应提速感受非常明显，「按下回车模型几乎立刻开始回答」，在中途纠偏时差别最大。

**为何值得看**：「用代码生成视频」正在成为一类新的 agent 任务，一份写得好的 brief 本身就成了可以复用的资产。

- minchoi：Opus 5.5 动效提示词：https://x.com/minchoi/status/2111306174259691669  
- minchoi：提示词全文：https://x.com/minchoi/status/2111306178164584547  
- swyx：求讲解视频提示词：https://x.com/swyx/status/2111265627612787023  
- theo：「用 Claude 做的东西太离谱」：https://x.com/theo/status/2111360964390207490  
- theo：提速的体感：https://x.com/theo/status/2111357444496712120

![Opus 5.5 动效提示词](/images/twitter-hots/2026-10-18/04-claude-opus.jpg)

---

## 5. Vercel Labs tsc-ts：把 TypeScript 编译器从 Go 移植回 TS

**要点**：@ctatedev 宣布 Vercel Labs 的 **tsc-ts**：TypeScript 编译器原本用 TypeScript 写，后来用 Go 重写成 tsgo，他们又把它**移植回 TypeScript**，再用 **scriptc** 编译成原生程序，结果**比 tsgo 快 2–4 倍**（Vercel 自己的数据）。@rauchg 调侃「TypeScript is the new TypeScript」。@theo 说它在多数场景下比自己的 Rust 移植 ts-rust（tsc-rs）更快，还爆料对方原本想早点发，因为他的 `--fast` 模式跑赢了才推迟；不过从他贴的图看，tsrs 才是「真正的赢家」。GitHub 仓库 10 月 7 日创建，本周在 X 上正式公开。

**为何值得看**：同一个编译器，现在有 Go、Rust、TypeScript 原生编译几个版本在比速度；对前端工具链来说，「用 TS 写、编译成原生」多了一个有说服力的样本。

- ctatedev：tsc-ts 发布：https://x.com/ctatedev/status/2111272070768185787  
- rauchg：「TypeScript is the new TypeScript」：https://x.com/rauchg/status/2111274408706965898  
- theo：和 tsc-rs 对比：https://x.com/theo/status/2111366322651324726

![tsc-ts：用 TypeScript 写、原生运行](/images/twitter-hots/2026-10-18/05-tsc-ts.jpg)

---

## 6. 多 agent 编排：T3 Code 口碑走高，ADE 排行榜，Cursor 子 agent 各配模型

**要点**：T3 Code 的 Orchestrator V2 10 月 16 日转入稳定通道后，用户反馈陆续出来。@blueemi99 用了几天，说一切都「连起来了」：让 Claude 通过 Grok CLI 调用 Grok、通过 Devin 调用 Gemini 4 Argon 当子 agent，「有点魔法」（874 赞，@theo 转发）。@zqkrq 花了一整天在真实任务上重测各家 **ADE（agentic 开发环境）和终端复用器**，出了第二版排行榜，结论是 T3 Code 0.1.0 把 Orchestrator V2 放进稳定版，能跑 Pi 和任何 ACP provider，是「目前最好的工具」；这条收藏 438，比点赞还多。Cursor 用户 @MaiYangAI 提醒：Cursor 的自定义 subagent 可以单独指定模型。Cursor 文档里写明，subagent 文件的 `model` 字段可以填 `inherit` 或具体模型 ID，还能带 effort、上下文长度等参数。

**为何值得看**：主 agent 调度不同厂商的子 agent，已经从实验变成日常用法；选工具的标准也从「哪个模型强」变成了「哪个编排层好用」。

- blueemi99：Orchestrator V2 使用体验：https://x.com/blueemi99/status/2111436682541031478  
- zqkrq：ADE 排行榜 v2：https://x.com/zqkrq/status/2111296531470889444  
- MaiYangAI：Cursor subagent 指定模型：https://x.com/MaiYangAI/status/2111597318449635662

![ADE 与终端复用器排行榜 v2](/images/twitter-hots/2026-10-18/06-t3-code-ade.jpg)

---

## 7. agent 时代怎么干活：别只折腾配置，先让 agent 能自证

**要点**：@thdxr 说他以前想不通为什么大多数人错过了早期互联网，现在懂了：「这么多人在折腾『我的定制 agent 配置』，真正拿这个神奇工具做成事的人却很少」，4.4k 赞、近 900 收藏。尤雨溪 @evanyou 吐槽：前沿模型还在估计一个任务要两周，然后两小时就做完了（5.2k 赞）。@poteto 发问「聊天是 agent UI 的最终形态吗？」，22 万多次浏览；她还预告正在给 **pstack** 做一个新的验证 skill。@addyosmani 引用 Claude 团队关于 code review 与验证的文章：给 agent 一个验证自己工作的方法，输出质量会大幅提升，有了这套流程，**Claude Code 90% 以上的代码由它自己写**；人工逐行 review 已经撑不住，要换成多层验证：e2e 测试、feature map（他点名 poteto 的倡导）、性质测试和多 agent 对抗式 review，人把精力放在产品意图、风险评估和看证据上。

**为何值得看**：几位工具作者给出的方向一致：瓶颈已经从「写出来」变成「证明它是对的」，而且该把时间花在用 agent 做事上，而不是无休止地调配置。

- thdxr：「都在折腾配置」：https://x.com/thdxr/status/2111401470667194440  
- evanyou：「估两周、做两小时」：https://x.com/evanyou/status/2111386137541697762  
- poteto：聊天是 agent UI 的终点吗：https://x.com/poteto/status/2111321176769442251  
- poteto：pstack 新验证 skill：https://x.com/poteto/status/2111596610836955561  
- addyosmani：多层验证取代逐行 review：https://x.com/addyosmani/status/2111604705340326393

![thdxr、尤雨溪与 poteto 的讨论](/images/twitter-hots/2026-10-18/07-agent-workflow.jpg)

---

## 8. Grok Bot：会主动找活干，中文用户玩出管家群

**要点**：@AndrewCurran_ 说 Grok Bot 前一天在完全没被触发的情况下主动私信他，「无聊了，想找点事做」；他查了一下，这是一个类似心跳机制的新功能，叫 **Proactive Suggestions**。他的总结是 agent 的「主动性」正在从用户触发、到定时、再到完全自主。中文圈的玩法也很多：@turingou 让 Grok Bot 管起一整周的早餐，找营养均衡的菜谱，在家附近 5 公里内比较 **10 家**能网上配送的超市，每天买好第二天的食材；他还让 **Codex 接管了家里的日立微蒸烤炉**，试了几百种菜单，并建了一个「日常饮食」群，把订餐、健康、杂货三个管家 agent 拉到一起协调菜谱和采购。@fankaishuoai 给 Grok Bot 装上 Pi Agent 并填入 DeepSeek API key，让 Bot 只负责调度、具体活交给 Pi Agent 跑，以节省订阅额度；他还用 **Webhook + GitHub Actions** 把本地 agent 和云端 Bot 打通：本地 agent 把任务写进同步仓库，就会触发 Bot 接活。也有不同声音：@kevinma_dev_zh 说自己试了几次还是用不起来，核心是对模型能力和数据权限的不信任。

**为何值得看**：个人 agent 正从「你叫它才动」走向「它自己找事做」，也越来越多地被当成调度层，去接其他模型和本地 agent。信任和权限仍是很多人迈不过的门槛。

- AndrewCurran_：Proactive Suggestions：https://x.com/AndrewCurran_/status/2111522784438587767  
- turingou：一周早餐与超市比价：https://x.com/turingou/status/2111362185335304293  
- turingou：Codex 接管微蒸烤炉：https://x.com/turingou/status/2111470955457601540  
- turingou：「日常饮食」管家群：https://x.com/turingou/status/2111483937822474526  
- fankaishuoai：Pi Agent + DeepSeek 省额度：https://x.com/fankaishuoai/status/2111258866877190576  
- fankaishuoai：Webhook 打通本地 agent：https://x.com/fankaishuoai/status/2111361067041673452  
- kevinma_dev_zh：信任仍是门槛：https://x.com/kevinma_dev_zh/status/2111331585794744619

![Grok Bot 主动发来的消息](/images/twitter-hots/2026-10-18/08-grok-bot.jpg)

---

## 9. Gemini 4 Argon：缓存命中不稳，幻觉率最低

**要点**：@theo 发了一组 agent 循环里的提示缓存测试：同样 228 轮对话，Claude Sonnet 5.5 和 GPT-6.1 Sol **每一轮都命中缓存**，Gemini 4 Argon 只有 **167 轮（73%）**完全命中，也就是 **27% 未命中**，成本是理想缓存的 **1.20–1.48 倍**（间隔越长越贵），他据此说「Gemini 比应有的价格贵 50%」。这是他自己的测试，暂未看到 Google 回应。另一面，@haider1 贴出 Artificial Analysis 的 AA-Omniscience 幻觉率榜：Gemini 4 Argon **15.1%**，明显低于 GPT-6 Astra（44.8%–48.3%）、GPT-6.1 Sol（49.4%–50.9%）和 Claude Opus 5.5（65.7%–67.6%）；他认为在不联网的自动化流程里，低幻觉率更重要。

**为何值得看**：长时间跑的 agent 里，缓存命中率直接决定账单；选模型除了看跑分，也要看缓存和幻觉这类「运行成本」指标。

- theo：Gemini 缓存未命中 27%：https://x.com/theo/status/2111370893561909423  
- haider1：Gemini 4 幻觉率最低：https://x.com/haider1/status/2111469783376105936

![agent 循环中的提示缓存可靠性](/images/twitter-hots/2026-10-18/09-gemini-cache.jpg)

---

## 10. 工具小更新：GitHub Copilot 接上实体键盘，pi-durable 将支持休眠

**要点**：@github 宣布新款 **Logitech MX Keypad** 直接集成进 GitHub Copilot app：可以用实体按键跑 agentic 工作流、把常用提示词映射到按键上、一键开始或恢复会话，「实体控制回来了」。pi 作者 @badlogicgames 预告 **pi-durable** 下周的体验改进：在 Cloudflare Durable Objects、Vercel 这类 serverless 环境里正式支持休眠，并加入遥测。

**为何值得看**：agent 会话越来越像需要「开 / 停 / 继续」的长任务：一边是给人的物理按键，一边是让云端 agent 闲时休眠、按需唤醒，两边都在解决同一个问题。

- github：Logitech MX Keypad × GitHub Copilot：https://x.com/github/status/2111515160766550057  
- badlogicgames：pi-durable 休眠支持：https://x.com/badlogicgames/status/2111595722806300811

![Logitech MX Keypad × GitHub Copilot](/images/twitter-hots/2026-10-18/10-github-copilot-keypad.jpg)

---
