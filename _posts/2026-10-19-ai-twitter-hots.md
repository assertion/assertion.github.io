---
layout: post
title: AI Twitter 热点 · 2026-10-19
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, OpenCode, thdxr, Daybreak Blue, Anthropic, Claude, Grok Bot, Elon Musk, OpenAI, Codex, dots, DeepSeek, DeepSeek-V4.1-Flash-1017, Browser Use, Arena, T3 Code, ADEMark, poteto, pstack, aurora-alpha, vLLM, Qwen3.8, Vercel, AI Gateway
lang: zh
translation_key: ai-twitter-hots-2026-10-19
issue: 38
item_count: 10
headline: "OpenCode 连遭 48 小时攻击，Anthropic 拿出 5% 股份做公益，DeepSeek 新 Flash 追平 Opus 5.5"
highlights:
  - label: "OpenCode 被连续攻击 48 小时"
    text: "@thdxr 说攻击一直没停，防御用的前沿模型中途开始拒答，拿到 OpenAI 的 Daybreak Blue 后才好转；@paulg 的评价是「可预见的未来就是这样」。"
  - label: "Anthropic Public Benefit Fund：5% 股份起步"
    text: "估值每比基线高 50% 可再加至多 2%，连同联创和员工的捐赠，合计约 20% 股份用于公共利益；马斯克回复建议直接把股份给公众。"
  - label: "DeepSeek 新 Flash 第三方成绩：便宜 19 倍"
    text: "Browser Use 基准上 V4.1-Flash-1017 拿到 75/100，与 Opus 5.5 持平、单任务成本便宜 19 倍；Code Arena WebDev 榜上成为开源第一。"
products: [OpenCode, Daybreak Blue, Anthropic Public Benefit Fund, Claude, Grok Bot, Codex, dot, ChatGPT Sites, DeepSeek-V4.1-Flash-1017, T3 Code, ADEMark, pstack, aurora-alpha, vLLM, Qwen3.8, Vercel AI Gateway]
stats:
  - value: "48 小时"
    caption: "OpenCode 遭到连续攻击的时长（@thdxr）"
  - value: "5%"
    caption: "Anthropic 首批注入公益基金的股份比例"
  - value: "19 倍"
    caption: "Browser Use 基准上 DeepSeek 新 Flash 比 Opus 5.5 便宜的倍数"
stat:
  value: "48 小时"
  caption: "OpenCode 遭到连续攻击的时长（@thdxr）"
---

# AI Twitter/X 热点 Digest · 2026-10-19（周一）


## 今日要点

1. **OpenCode 被连续攻击 48 小时**：密钥泄露事件之后，@thdxr 说攻击方「过去 **48 小时**一直没停」，防御用的前沿模型查到一半开始拒答，拿到 OpenAI 的 **Daybreak Blue** 防御访问权限后才好转；@paulg 引用说「可预见的未来就是这样」。  
2. **Anthropic 拿出 5% 股份做公益基金**：Anthropic Public Benefit Fund 先注入 **5%** 股份，估值每比基线高 50% 可再加至多 2%，连同联创和员工的捐赠合计约 **20%**；@elonmusk 回复建议「直接把股份给公众」。  
3. **DeepSeek 新 Flash 的第三方成绩**：@browser_use 测得 V4.1-Flash-1017 在长程浏览器任务上与 Opus 5.5 持平、**便宜 19 倍**；@arena 称它是 Code Arena WebDev 榜的**开源第一**。

---

## 1. OpenCode：连续 48 小时遭攻击，防御用的模型中途拒答

**要点**：昨天 OpenCode 公布了密钥泄露事件（见 10-18 期），今天是后续。@thdxr 说对方「过去 **48 小时**一直在不停地攻击我们的系统」，副作用是所有东西都在加固，「但我们基本上也需要 7×24 小时运转的 agent，因为对方就是这么干的」，这条 7.8k 赞、近 1,000 收藏、浏览超过 100 万。@paulg 引用这条说：「在可预见的未来，事情就会是这样。」@RhysSullivan 问他调查时有没有被前沿模型的网络安全护栏挡住，@thdxr 回答：事件处理到一半确实很恼火，模型「做了不少，然后开始拒绝」，现在拿到了 **Daybreak Blue** 的权限，情况好多了。（核实：Daybreak Blue 是 OpenAI「Trusted Access for Cyber」面向防御方的访问计划，经审批后降低安全类请求的拒答，不是新模型。）@AndrewCurran_ 指出 Hugging Face 之前遇到过同样的问题：防御时一分析攻击，就触发了模型的安全护栏（3.8k 赞）；@ai_for_success 直言这「太丢人」。同一晚 @thdxr 还补了一条被事件耽搁的「好消息」：OpenCode 在新的 GPU 机架上用自建的 DeepSeek 推理栈做了第一次试跑，性价比「好过我们找到的每一家供应商」，而且还有优化空间（3.2k 赞）。

**为何值得看**：攻击方用 agent 全天候进攻，防守方的模型却可能因为护栏中途停工，「给防御方开绿灯」正在变成模型厂商必须解决的产品问题。OpenCode 自建推理也说明，开放权重给了工具公司绕开 API 供应商的选项。

- thdxr：连续 48 小时被攻击：https://x.com/thdxr/status/2111790511409258796  
- paulg：「可预见的未来就是这样」：https://x.com/paulg/status/2111823339953991832  
- thdxr：模型中途拒答，换用 Daybreak Blue：https://x.com/thdxr/status/2111831348336091179  
- AndrewCurran_：和 Hugging Face 遇到同一个问题：https://x.com/AndrewCurran_/status/2111837963214794940  
- ai_for_success：护栏拦住防御方：https://x.com/ai_for_success/status/2111844853256761438  
- thdxr：自建 DeepSeek 推理机架：https://x.com/thdxr/status/2111849415204065611

![thdxr 关于持续攻击和 Daybreak Blue 的回复](/images/twitter-hots/2026-10-19/01-opencode-attack.jpg)

---

## 2. Anthropic：拿出 5% 股份成立公益基金，Claude 理财功能再被挖出

**要点**：@AnthropicAI 宣布成立 **Anthropic Public Benefit Fund**，这是一家全资持有的 LLC：经股东批准后，先注入 **5%** 的股份；公司估值每比设定基线高出 50%，董事会可酌情再加至多 2%。加上联创成立时承诺捐出的 80% 股权、约半数员工参与的股权配捐计划，合计约 **20%** 的股份将用于公共利益。这条 1 万多赞、近 200 万浏览。官方博文（10 月 18 日）写道，基金可能用于向传统非营利组织大额捐赠，或「向特定人群直接分配」，并以 AI 对劳动力市场的冲击为例（Anthropic 已为此承诺 2 亿美元）；基金持有的股权不会用于游说或政治捐款。@AndrewCurran_ 认为「直接分配」听起来像是自主推动的全球 UBI（他个人的解读）。@elonmusk 回复：「我建议直接把股份给公众。」（1.5 万赞）产品这边，@testingcatalog 再次挖到 Claude 正在准备 **Personal Finance** 功能：通过 Plaid 接入银行数据、生成各种仪表盘，开发期名叫「Claude Money」，目前未官宣；@emollick 吐槽 Anthropic 一边说 coding 在加速，Claude 却至今改不了邮箱，官方建议是删号重建。

**为何值得看**：划给公益的股份比例会随估值上涨而增加；基金的治理结构和估值里程碑，官方说会在未来几个月公布。理财功能如果上线，Claude 就要直接接触用户的银行数据了。

- AnthropicAI：Public Benefit Fund：https://x.com/AnthropicAI/status/2111881963657412903  
- elonmusk：「直接把股份给公众」：https://x.com/elonmusk/status/2111914396490604547  
- AndrewCurran_：「直接分配」像 UBI：https://x.com/AndrewCurran_/status/2111889465438601604  
- testingcatalog：Claude Personal Finance：https://x.com/testingcatalog/status/2111944960652034447  
- AndrewCurran_：「Claude Monet」：https://x.com/AndrewCurran_/status/2111951546657493349  
- emollick：改邮箱只能删号：https://x.com/emollick/status/2111925398548193574

![Anthropic 博文中关于「直接分配」的段落](/images/twitter-hots/2026-10-19/02-anthropic-fund.jpg)

---

## 3. Grok Bot：马斯克连发几帖，有人教它打电话订餐厅

**要点**：@elonmusk 10 月 18 日上午连发几条：引用 @mark_k 的「Grok Bot 最近进步太大」，说团队「每天给 Grok Bot 做大约 **20 项**改进」（1.5 万赞）；有人说该给新用户开个 Grok Bot 课，他回了一句「Sure」（1.8 万赞、680 万浏览）；又引用 @melvindvivas 整理的升级清单回了一个「Upgrades」。这份清单（电脑任务快 3 倍、回复时间减半、语音更快且记忆更好、接入 X Chat、新增 Robinhood / Coinbase / Trello 等连接器）对应的是 10 月 17 日那次已经上线的提速（10-17 期已写），这次是马斯克再次转发。新玩法来自 @BrianRoemmele：他做了一个只负责打电话订餐厅的 Grok Bot，告诉它餐厅、人数和时间，它会自己查号码，问清能接受的时间范围、用谁的名字订、留哪个回拨号码，复述确认后才拨号；挂电话后用白话汇报结果、引述餐厅原话，还能写进日历。他用的是第三方呼叫服务 ClawCall，并设了护栏：不提供信用卡、不主动打电话、一次只打一通。马斯克转发说「Grok Bot 可以打电话给餐厅帮你订位」（7k 赞）。中文圈里，@fankaishuoai 说想升级到 200 美元的套餐：小活 Bot 自己干，大活交给 Cursor 云端 agent，最后 Bot 验收，全程在手机上完成；他还开源了一套脚本：在 Bot 的云端电脑上装一个本地 agent（Pi、Codex、Claude Code、OpenCode 都行）干重活，任务编号、记录状态，跑完通过 Webhook 叫醒 Bot 核查并汇报，以节省额度。他另一帖的个人建议是：桌面端装好后先关掉「在这台电脑上执行」和「经此电脑转发流量」。@theo 让自己的 Grok Bot 去筛 T3 Code 的社区 PR；@blueemi99 则说 Anthropic 最缺的就是一个这样的常驻助手。

**为何值得看**：个人 agent 正从「在聊天框里干活」走向打电话、调度别家 agent 这类真实世界的任务；护栏和本地权限隔离，也成了用户自己总结出来的必修课。

- elonmusk：每天约 20 项改进：https://x.com/elonmusk/status/2111642151138546118  
- elonmusk：「Sure」，开 Grok Bot 课：https://x.com/elonmusk/status/2111642226774417627  
- elonmusk：「Upgrades」：https://x.com/elonmusk/status/2111642949071364231  
- elonmusk：打电话订餐厅：https://x.com/elonmusk/status/2111867437238853726  
- BrianRoemmele：订餐厅的 Grok Bot：https://x.com/BrianRoemmele/status/2111812467500458135  
- fankaishuoai：大活交给 Cursor 云端 agent：https://x.com/fankaishuoai/status/2111848026100670569  
- fankaishuoai：本地 agent + Webhook 叫醒 Bot：https://x.com/fankaishuoai/status/2111737569277104150  
- fankaishuoai：两项安全设置：https://x.com/fankaishuoai/status/2111740064409756037  
- theo：让 Grok Bot 筛 PR：https://x.com/theo/status/2111647825201422742  
- blueemi99：Anthropic 缺一个常驻助手：https://x.com/blueemi99/status/2111852373844934847

![BrianRoemmele 的订餐厅 Grok Bot 配图](/images/twitter-hots/2026-10-19/03-grok-bot.jpg)

---

## 4. Codex：额度重置成了街头梗，dots 暂不进欧盟

**要点**：@thsottiaux 说：「大家已经从时间线上跑出来，在街上找我要 reset 了，我打算做点小卡片发给大家。」（6.5k 赞）他午夜发的一句「What's cooking today」引来 **2,281** 条回复。@Similarweb 公布 9 月 X 账号页面流量份额榜，@thsottiaux 排第一，排在 @FabrizioRomano 和 @elonmusk 前面；@testingcatalog 认为重置、尤其是可以攒着用的「banked resets」，加上 DevDay 宣传，是主要原因，「免费重置就等于免费 token」。另一边，@argofowl 发现 Codex 桌面版里的 dot 不见了，@thsottiaux 解释是欧盟的原因：已经在别处创建过 dot、人在欧盟的用户可以继续用，dots 之后也会进入欧盟。中文用户这边，@turingou 一度遇到 Codex 手机、云电脑和桌面端都报「Too many requests」（个人反馈）；@chijianqiang 调侃这次重置可能是用量计算出了问题；@HiTw93 总结出一个循环：Codex 额度刚用完就被重置，Claude 一个账号快用完时另一个又满了。用法上，@shao__meng 用一个 Codex Goal **20 分钟**做出打字游戏并部署到 ChatGPT Sites，替掉了一个要 128 元的 App；@turingou 让 Codex 自己设计扫描支架，再直接操作拓竹 3D 打印机生产出来。

**为何值得看**：额度重置已经成了 OpenAI 最有效的增长手段之一，也让「token 就是钱」这件事被更多普通人看见；dots 在欧盟的限制则说明，个人 agent 的合规问题已经开始影响上线节奏。

- thsottiaux：街上有人找我要 reset：https://x.com/thsottiaux/status/2111918768733753664  
- thsottiaux：「What's cooking today」：https://x.com/thsottiaux/status/2111849858374177222  
- Similarweb：9 月 X 账号流量榜：https://x.com/Similarweb/status/2111782638830653489  
- testingcatalog：重置带来的关注：https://x.com/testingcatalog/status/2111791554310328816  
- argofowl：dot 不见了：https://x.com/argofowl/status/2111772162314944637  
- thsottiaux：dots 与欧盟：https://x.com/thsottiaux/status/2111832959842161136  
- turingou：「Too many requests」：https://x.com/turingou/status/2111713563870195756  
- chijianqiang：重置或因用量计算：https://x.com/chijianqiang/status/2111649326443450626  
- HiTw93：额度循环：https://x.com/HiTw93/status/2111650123944165796  
- shao__meng：20 分钟做打字游戏：https://x.com/shao__meng/status/2111759325379121593  
- turingou：Codex 驱动 3D 打印机：https://x.com/turingou/status/2111674144043745389

![Similarweb：9 月 X 账号页面流量份额榜](/images/twitter-hots/2026-10-19/04-openai-codex.jpg)

---

## 5. DeepSeek-V4.1-Flash-1017 后续：浏览器任务追平 Opus 5.5，WebDev 开源第一

**要点**：模型本身 10 月 17 日发布，昨天一期已经写过，今天是第三方评测的跟进。@browser_use 在自家的 Browser Use Benchmark v2.1（180 个长程任务）上测得 V4.1 Flash 1017 拿到 **75/100**，与 Opus 5.5 持平，单任务成本 0.22 美元对 2.35 美元，**便宜 19 倍**；图里分数最高的仍是 GPT-6.1 Sol（79.6）。@arena 称它在 Code Arena: WebDev 榜上成为**开源第一**，超过 Kimi K3（Max），总榜第 12、1670 分，比上一版 0910 高 52 分，价格为每百万 token 输入 0.3 美元、输出 1.2 美元。@DesignArena 也已上架这个模型。评价也不是一边倒：@oran_ge 用 DeepSeek Harness 加新 Flash 做视频，「50 分钟做了个垃圾出来」。另外，OpenCode 自建 DeepSeek 推理栈的消息见第 1 条。

**为何值得看**：官方自测之外，第三方榜单开始给出一致的信号：在浏览器 agent 和 WebDev 这类任务上，开放权重模型已经能以一个数量级的价差逼近闭源旗舰；不过实际体验仍因任务而异。

- browser_use：追平 Opus 5.5，便宜 19 倍：https://x.com/browser_use/status/2111696102106038319  
- arena：Code Arena WebDev 开源第一：https://x.com/arena/status/2111894091168682086  
- DesignArena：上架 Design Arena：https://x.com/DesignArena/status/2111707218441556057  
- oran_ge：做视频效果不佳：https://x.com/oran_ge/status/2111608203431776465

![Browser Use 基准：成本与得分](/images/twitter-hots/2026-10-19/05-deepseek-flash-followup.jpg)

---

## 6. T3 Code：agent 30 小时合并近 400 个性能 PR，ADEMark 引出「出钱」争议

**要点**：@jullerino 说他的 agent 过去 30 小时合并了**近 400 个**聚焦 web 性能的 PR：另一个线程流式输出时渲染次数减少 86%，JS CPU 最多降 35%，堆内存小约 10%，下一步做移动端；@theo 说最新 nightly 快到「几乎像是数据写死的」。昨天那份 ADE 排行榜（见 10-18 期）也有了后续：@zqkrq 宣布做 **ADEMark**，号称第一个正经的 ADE 基准：16 个 ADE、同样的任务、同一台机器，每个前沿模型都测，统计 token、速度和资源占用，T3 Code、bb、Capy、Paseo、Cursor 都在列，结果「很快」公布。随后 @DavidOndrej1 指控 theo 出钱让作者做 v2，还让他在 v2 里把 Cloudroom 藏掉（14 万浏览）。@theo 否认：他只是去问 T3 Code 为什么得分低，才知道测的是 3 个多月前的旧版，作者用新版重测后自己调整了；对方说想做一个真正的基准，他提出出资，「我根本不知道 Cloudroom 是什么」。@zqkrq 也说 theo 从没让他藏任何东西，反而让他保持 100% 透明；Cloudroom 还在 early access，和上市已久的工具放在一起不公平，正式基准里会用同样的测试纳入。

**为何值得看**：让 agent 自己批量提交、合并 PR，30 小时就能明显改变一个产品的性能。ADEMark 由被测产品之一的作者出资，结果出来后方法和数据是否公开，会决定它有多可信。

- jullerino：30 小时合并近 400 个 PR：https://x.com/jullerino/status/2111698488753078321  
- theo：nightly 快到像假数据：https://x.com/theo/status/2111960247980159232  
- zqkrq：ADEMark 预告：https://x.com/zqkrq/status/2111834690340495565  
- DavidOndrej1：指控 theo 让作者隐藏 Cloudroom：https://x.com/DavidOndrej1/status/2111884469468893524  
- theo：否认并说明出资原因：https://x.com/theo/status/2111903235166679341  
- zqkrq：theo 没让我藏任何东西：https://x.com/zqkrq/status/2111887756066738578

![jullerino、zqkrq 与 theo 的帖子](/images/twitter-hots/2026-10-19/06-t3-code-ademark.jpg)

---

## 7. pstack 新增形式化验证 skill，poteto 解读「聊天是不是终局」投票

**要点**：@poteto 发布 **pstack v0.15.27**，新增 `/create-formal-verification-skill`（beta）。它和之前的 `/create-verification-skill` 一样是 meta-skill：按你想验证的性质，生成一个新 skill 和一套形式化验证套件，比如用 TLA+ 为状态机和并发系统建模，或在 Rust 里用 kani 检查未定义行为；Bend 这类新方法则不需要单独的建模语言，证明直接写进类型系统。她说形式化验证一直没进入主流，难在建模和写证明，而能证明代码确实按意图运行，会给 agent「写出正确软件的超能力」；她自己用这个 skill 生成的 TLA+ 模型已经找到了几个 bug。帖子 1.2k 赞、801 收藏。昨天她只是预告在做一个新的验证 skill（见 10-18 期第 7 条），这次正式发布。另一帖她解读了「聊天是不是 agent UI 的终局」投票：约 70% 的人投了否。她看到两派：一派把 agent 当作自己思维的延伸，像赛博格，将来可能靠脑机接口连输入框都不需要；另一派把 agent 当成独立的个体，那像和同事、家人那样说话就够了。

**为何值得看**：「让 agent 自证正确」从测试往前推到了数学证明；收藏数接近点赞的三分之二，说明很多人打算真的拿来用。

- poteto：pstack v0.15.27 形式化验证 skill：https://x.com/poteto/status/2111926622278521253  
- poteto：投票结果解读：https://x.com/poteto/status/2111911178503082422

![poteto 发布 /create-formal-verification-skill](/images/twitter-hots/2026-10-19/07-pstack-formal-verification.jpg)

---

## 8. OpenAI：aurora-*-alpha 在 API 里短暂出现，Arena 上是图像模型

**要点**：10 月 18 日上午，@scaling01 和 @AndrewCurran_ 先后发现 OpenAI API 里冒出三个模型 ID：**aurora-red-alpha、aurora-green-alpha、aurora-blue-alpha**（AndrewCurran_ 那条 2.4k 赞）。scaling01 起初猜是 Codex 专用或 GPT-6 的高速推理版本，理由是今年早些时候 OpenRouter 上的 aurora-alpha 可能是 GPT-5.3-Codex-Spark；当天下午他又发帖说「又消失了」，@testingcatalog 认为是一次误上线。随后 @Angaisb_ 在 Arena 看到同名的三个**图像模型**，说像素画终于画对了，猜是 GPT-Image-3；@testingcatalog 实测后认为 green 好于 red，配色明显好过 gpt-image-2.5-flare；@kimmonismus 也判断是图像模型，新的 GPT Image 可能很快就来。OpenAI 未官宣，以上都是推测。

**为何值得看**：最初「Codex 新模型」的猜测，被 Arena 上的实测纠正成了图像模型，这类泄露在被实测之前都别急着下结论。

- AndrewCurran_：API 中出现三个新模型：https://x.com/AndrewCurran_/status/2111656899338973391  
- scaling01：最初的猜测：https://x.com/scaling01/status/2111653358322729401  
- scaling01：「又消失了」：https://x.com/scaling01/status/2111741499826450665  
- testingcatalog：疑似误上线：https://x.com/testingcatalog/status/2111724606927028578  
- Angaisb_：Arena 上的图像模型：https://x.com/Angaisb_/status/2111765824449167620  
- testingcatalog：green 好于 red：https://x.com/testingcatalog/status/2111894437877916032  
- kimmonismus：新 GPT Image 或将到来：https://x.com/kimmonismus/status/2111860713035550945

![Arena 上 aurora-green-alpha 与 gpt-image-2.5-flare 的对比](/images/twitter-hots/2026-10-19/08-openai-aurora.jpg)

---

## 9. 本地推理：一张 3090 跑 Qwen3.8 27B 最多提速 4.6 倍，vLLM v0.32.0 发布

**要点**：@wccftech 报道，r/LocalLLaMA 上一位用户只靠推理优化，就让 2020 年的 RTX 3090 跑 27B 模型的生成速度最多提升 **4.6 倍**。@superalesha 补充了细节：从 82 tok/s 起步，调 MTP、加上 DFlash2 drafter 和 lookup drafter，把每步验证推到 16 个 token，在一个要引用 25K token 文档的任务上跑到 382 tok/s；普通聊天约 133 tok/s，也就是 1.6 倍，上下文也提到了 138K。他的观点是「本地 AI 性能是软件问题，不是硬件问题」，而且只有开放权重才能这样调。（Qwen3.8 27B 是 8 月发布的旧模型，新闻点是社区的推理优化。）@vllm_project 发布 **v0.32.0**：814 个 commit、363 位贡献者（121 位首次贡献），新增 `/v1/systemone` 结构化决策端点；低精度 KV 全面铺开，NVFP4 覆盖 SM8x/90/12x，GLM-5.x 默认 FP8 KV，ROCm 支持 4-bit KV；Model Runner V2 加入 GPU n-gram 投机解码，并在 ROCm 上默认启用；多 API worker 下请求吞吐提升 43–85%，另有 3 个安全修复。

**为何值得看**：投机解码和低精度 KV 这些软件优化，正在把旧显卡和现有集群的性能继续往上推；对跑开放权重模型的团队来说，升级推理栈往往比换硬件划算。

- wccftech：3090 提速 4.6 倍：https://x.com/wccftech/status/2111854820503998917  
- superalesha：优化细节与「软件问题」：https://x.com/superalesha/status/2111885825218838905  
- vllm_project：v0.32.0 发布：https://x.com/vllm_project/status/2111814711956168760

![RTX 3090 推理提速报道配图](/images/twitter-hots/2026-10-19/09-local-inference.jpg)

---

## 10. 用量经济：更聪明的模型不再换来同等的用量，Vercel 把 agent 会话账单摊开

**要点**：@theinformation 报道：OpenAI、Anthropic 等头部实验室面临一个新问题，模型更好不一定带来更多用量，智能指数领先 10 分，现在只能多换来 **20%** 的开发者流量，2025 年底这个数字接近 69%（付费报道，数字以推文为准）。@emollick 认为，从 OpenAI 和 Anthropic 的内部用量数据看，开发者终将只占 token 总量的一小部分；而在验证更难、耗时更长的高价值任务里，更高「智能」的模型收益仍然很大。@rakyll 说，在 harness 工程里开源就等于免费分发，这类软件几乎守不住，除非它能提升模型质量，而那样又会很快被模型吃掉。@Yuchenj_UW 调侃 2026 年的软件工程：工程师 1 让 AI 开 PR，再请工程师 2 review，工程师 2 让 AI review，然后回一句「LGTM」，两人用的是同一个模型（534 赞）。工具这边，@vercel_dev 上线了 AI Gateway 日志的 **Sessions** 视图：按会话聚合请求，显示成本、缓存命中率和发起会话的 agent（Vercel changelog 举例 Claude Code、Codex、Cursor），session affinity 会把每一轮请求送到持有提示缓存的那家提供方（changelog 日期 10 月 18 日）；@rauchg 说关键在于掌握「元数据」，这样才能算清 ROI。

**为何值得看**：当跑分领先不再自动转化为用量，价格、缓存和可观测性就成了竞争点；按会话算账，是团队判断 agent 到底值不值的第一步。

- theinformation：领先 10 分只换来多 20% 流量：https://x.com/theinformation/status/2111857344296390929  
- emollick：开发者只占 token 用量一小部分：https://x.com/emollick/status/2111884340955062274  
- rakyll：harness 开源等于免费分发：https://x.com/rakyll/status/2111842823989539153  
- Yuchenj_UW：两个工程师用同一个模型互相 review：https://x.com/Yuchenj_UW/status/2111865993228406978  
- vercel_dev：AI Gateway 会话视图：https://x.com/vercel_dev/status/2111865122813784173  
- rauchg：「元数据才能算清 ROI」：https://x.com/rauchg/status/2111871697842495810

![Vercel AI Gateway 的 Sessions 视图](/images/twitter-hots/2026-10-19/10-ai-gateway-sessions.jpg)

---
