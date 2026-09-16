---
layout: post
title: AI Twitter 热点 · 2026-09-16
categories: AI
description: 过去一天 AI coding / 模型 / 产品的高信号动态摘要（约 10 条）
keywords: AI, Twitter, Claude Code, Cline, Copilot, Codex, Antigravity, OpenClaw
---

# AI Twitter/X 热点 Digest · 2026-09-16（周三）


## 今日要点

1. **Claude Code 2.1.273**：网关观测头、Remote Control fork，以及一长串生产态修复。  
2. **Cline Desktop 0.0.28**：中日文 IME、后端重连、ClinePass 引导等桌面体验补强（Desktop 产品叙事自 9/14 起）。  
3. **Cline CLI 3.0.62**：Agent Plugins 走 Hub、流式不再被 Hub 拖死、大仓库 checkpoint 不再卡死。  
4. **Copilot**：自定义属性建议值（9/15）+ CLI 1.0.84-9 上下文管理工具开关。  
5. 生态侧：**Antigravity CLI 1.2.3**、**Codex rust 0.155 alpha 列车**、**OpenClaw 主仓持续合入**、**Copilot auto 三档**（9/14，窗内仍在发酵）。

---

## 1. Claude Code 2.1.273：给网关更多遥测，Remote Control 可 fork

**要点**：npm `@anthropic-ai/claude-code` **2.1.273**（约 **2026-09-15 18:06 UTC**）带来可选的 `x-claude-code-*` 请求头（`CLAUDE_CODE_GATEWAY_HINT_HEADERS=1`），方便 LLM 网关看到 request class、agent type、compaction 等信号；支持从 Claude app fork 以 `--remote-control` / `/remote-control` 起的会话，fork 在本机后台跑。同包还修了 MCP 断连提示、Bedrock/Vertex/Foundry 401/403 误导成 `/login`、sub-agent 结果丢失、context meter 双计等一长串生产问题。前一版 **2.1.272**（9/14 末）偏稳定性；**2.1.271** 的 Remote fast mode / `allowed_domains` 仍是本周主线。

**为何值得看**：企业网关与 Remote Control 要的是「可观测 + 可恢复」，而不只是又一个模型开关。

- 来源：CHANGELOG / npm  
- 链接：https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md  

---

## 2. Cline Desktop 0.0.28：桌面 beta 继续打磨输入与订阅默认

**要点**：`cline/cline` 发 **desktop-v0.0.28**（约 **2026-09-15 07:55 UTC**）：后端启动慢时不再卡在 “Desktop backend unavailable”；中日文 IME 确认不再误发半成品消息；模型列表每次打开刷新；Cline 登录卡说明免费模型 / ClinePass；Cline Pass 默认落到订阅档模型而非最新 free 条目；临时 provider 错误最多重试三次。官方博文 **2026-09-14** 已介绍 Desktop（并行会话、Schedule、从 Claude Code/Codex 导入等）——本窗是发版线迭代，不是「今日刚开源」。

**为何值得看**：开源权重路线要追上闭源 harness，桌面层的输入法、默认模型与重连细节决定能不能天天用。

- 发布：https://github.com/cline/cline/releases/tag/desktop-v0.0.28  
- 博文（9/14）：https://cline.bot/blog/cline-desktop-an-open-source-app-for-open-weight-models  

---

## 3. Cline CLI 3.0.62：Plugins 进 Hub，流式与 checkpoint 提速

**要点**：同日 **cli-v3.0.62**（约 **2026-09-15 06:04 UTC**）与 **SDK v0.0.83**。CLI 亮点：启动时指向 Desktop 的一次性提示；Agent Plugins 经 Hub 发现/校验，skills 以 `plugin-name:skill-name` 暴露，MCP 不再改 `cline_mcp_settings.json`（刻意不扫 workspace `.agents/plugins`）；流式输出不再被 Hub 全量 session round-trip 卡住；大未跟踪目录下 checkpoint 用持久索引避免每条消息全量哈希；修了后台子进程挂死 `run_commands`、在 `$HOME` 下 `@` 提及 OOM、`apply_patch` Add File 覆盖等。

**为何值得看**：和 Desktop 同一条 harness 线——CLI 先把插件治理与长会话性能做对，Desktop 才站得住。

- 发布：https://github.com/cline/cline/releases/tag/cli-v3.0.62  

---

## 4. GitHub Copilot：自定义属性定义也能「建议可选值」

**要点**：GitHub Changelog **2026-09-15**：在企业/组织创建 repository custom property 时，Copilot 可根据属性名建议 allowed values（如合规多选、是否对外暴露的 yes/no）。面向 Copilot Business / Enterprise 公测，可用策略开关控制。自定义属性是 ruleset 作用域的常用入口，这一步是在降低「元数据口径不一致」的治理成本。

**为何值得看**：coding agent 开始碰仓库治理元数据，而不只是写代码。

- 链接：https://github.blog/changelog/2026-09-15-github-copilot-suggests-custom-properties-definitions/  

---

## 5. Copilot CLI 1.0.84-9：给 agent / subagent 开上下文管理工具

**要点**：`github/copilot-cli` **v1.0.84-9**（约 **2026-09-15 20:05 UTC**）在 `/settings` 增加选项，可选择为 agents 与 subagents 启用 context management tools；并缩短大型本地 session 历史的 metadata 扫描时间。同列车还有 End/Ctrl+E 折行、`--share=~/...` 展开、MCP 在 IDE bridge 下加载失败等修复。属 prerelease 线。

**为何值得看**：CLI agent 的上下文工具面正在产品化成可开关能力，而不再是隐式默认。

- 发布：https://github.com/github/copilot-cli/releases/tag/v1.0.84-9  

---

## 6. Copilot auto model selection：efficiency / balance / intelligence 三档（再发酵）

**要点**：Changelog **2026-09-14** 为 auto 模型选择增加三档：efficiency（偏成本）、balance（日常）、intelligence（偏质量）。各档共用模型池，仍按单次 prompt 选模型；在 VS Code、Copilot CLI 与 Copilot app 滚动放出。相对本窗是「刚过一天仍在扩散」的产品叙事，不是今天才立项。

**为何值得看**：把「自动选模」从黑盒拆成可声明的成本/质量偏好，是企业采购要听懂的语言。

- 链接：https://github.blog/changelog/2026-09-14-configure-cost-and-quality-in-copilot-auto-model-selection/  

---

## 7. Antigravity CLI 1.2.3：`/copy btw` 与 tool-choice 保真

**要点**：`google-antigravity/antigravity-cli` **1.2.3**（约 **2026-09-15 02:03 UTC**）：`/copy btw` 可复制折叠的 `/btw` 旁路问答全文；把 per-request tool-choice（any/required/named）翻译成后端原生 function-calling 配置；修了 `/hooks` 漏列插件内 hooks、带 `enable_mcp_tools` 的自定义 subagent 拿不到父级 MCP 列表、前几轮误触发反馈提示等问题。

**为何值得看**：旁路问答与 tool-choice 保真，是「CLI 当主工作面」时的细节分水岭。

- 发布：https://github.com/google-antigravity/antigravity-cli/releases/tag/1.2.3  

---

## 8. Codex rust 0.155.0-alpha.8：预发布列车继续推（空 notes）

**要点**：`openai/codex` 在 **2026-09-15** 连续打出 rust **0.155.0-alpha.5 → alpha.8**（alpha.8 约 **22:26 UTC**），npm `@openai/codex` 同步到 **0.155.0-alpha.8** 多平台包。GitHub release body 基本为空——当作预发布列车信号即可，稳定/Python SDK 仍停在 **0.154.0** 叙事附近。不要写成「正式大版本今日发布」。

**为何值得看**：跟踪 Codex harness 演进时，alpha 节奏本身就是信号；落地仍以有 notes 的稳定版为准。

- 发布：https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.8  

---

## 9. OpenClaw：主仓凌晨仍在合入（非新开源）

**要点**：`openclaw/openclaw` 最新正式 tag 仍是 **v2026.9.4**（**2026-09-11**）。本窗可见主仓在 **2026-09-16 00:xx UTC** 附近持续合入测试/重构与 `fix(codex): …` 一类改动——说明 Codex runtime 相关路径仍在热修。suggested task / Control UI 等能力是既有产品线再发酵，不是今天新立仓。

**为何值得看**：和昨日「suggested task」讨论同一条线——多 session 委派正在变成各家 harness 的默认动作。

- 仓库：https://github.com/openclaw/openclaw  

---

## 10. Cline Desktop 产品叙事（9/14 博文）在开源权重桌面赛道继续扩散

**要点**：Cline 官方博文（**2026-09-14**）把 Desktop 定位成面向开源权重的独立工作区：并行会话、Schedule（cron）、Web Search / Voice、Marketplace，以及从 Claude Code / Codex / OpenCode 导入任务后换开源权重续跑。文中附带 Terminal-Bench 2.0 上 Cline harness 与 Hermes / OpenCode 的对比表——强调「权重 × harness」而不是只换模型。结合本窗 **0.0.28** 发版，属于产品向再发酵，不是今日首发。

**为何值得看**：开源权重要赢日常使用，缺的往往是桌面会话层，而不是又一个基准分数。

- 博文：https://cline.bot/blog/cline-desktop-an-open-source-app-for-open-weight-models  
- 下载：https://cline.bot/desktop  

