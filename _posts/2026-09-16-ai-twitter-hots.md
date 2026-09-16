---
layout: post
title: AI Twitter 热点 · 2026-09-16
categories: AI
description: 过去一天 AI coding / 模型 / 产品的高信号动态摘要（按产品合并，约 10 条）
keywords: AI, Twitter, Claude Code, Cline, Copilot, Codex, Antigravity, OpenClaw, Gemini CLI, Devin, Factory, Graphify
---

# AI Twitter/X 热点 Digest · 2026-09-16（周三）


## 今日要点

1. **Claude Code**：2.1.273 网关观测头、Remote Control fork，以及一长串生产修复。  
2. **Cline**：Desktop 0.0.28 + CLI 3.0.62 / SDK，桌面体验与 Plugins Hub、流式 / checkpoint 提速同线推进（Desktop 产品叙事自 9/14）。  
3. **GitHub Copilot**：自定义属性建议值、CLI 1.0.85（Vim / 配置面）与 auto 选模三档一并跟踪。  
4. **Antigravity CLI**：1.2.3 → **1.2.4**（`/skills reload`、模型选择器模糊搜索）。  
5. **Codex** rust 0.155 alpha 列车推到 **alpha.10**；**OpenClaw** 主仓持续合入（非新开源）。  
6. 补充：**Gemini CLI 0.60.0**、**Devin Desktop 3.10.27**、**Factory Droid 0.219/0.220**、**Graphify 0.9.62**。

---

## 1. Claude Code：2.1.273 网关遥测与 Remote Control fork

**要点**：npm `@anthropic-ai/claude-code` **2.1.273**（约 **2026-09-15 18:06 UTC**）带来可选的 `x-claude-code-*` 请求头（`CLAUDE_CODE_GATEWAY_HINT_HEADERS=1`），方便 LLM 网关看到 request class、agent type、compaction 等信号；支持从 Claude app fork 以 `--remote-control` / `/remote-control` 起的会话，fork 在本机后台跑。同包还修了 MCP 断连提示、Bedrock/Vertex/Foundry 401/403 误导成 `/login`、sub-agent 结果丢失、context meter 双计等一长串生产问题。前一版 **2.1.272**（9/14 末）偏稳定性；**2.1.271** 的 Remote fast mode / `allowed_domains` 仍是本周主线。

**为何值得看**：企业网关与 Remote Control 要的是「可观测 + 可恢复」，而不只是又一个模型开关。

- CHANGELOG：https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md  
- npm：https://www.npmjs.com/package/@anthropic-ai/claude-code  

---

## 2. Cline：Desktop 0.0.28 与 CLI 3.0.62 同线发版

**要点**：同一条 harness 线本窗同时推进桌面与 CLI。

**Desktop 0.0.28**（约 **2026-09-15 07:55 UTC**）：后端启动慢时不再卡在 “Desktop backend unavailable”；中日文 IME 确认不再误发半成品消息；模型列表每次打开刷新；Cline 登录卡说明免费模型 / ClinePass；Cline Pass 默认落到订阅档模型而非最新 free 条目；临时 provider 错误最多重试三次。官方博文 **2026-09-14** 已介绍 Desktop（并行会话、Schedule、从 Claude Code/Codex 导入等）——本窗是发版迭代，不是「今日刚开源」。

**CLI 3.0.62 / SDK v0.0.83**（约 **2026-09-15 06:04 UTC**）：启动时指向 Desktop 的一次性提示；Agent Plugins 经 Hub 发现/校验，skills 以 `plugin-name:skill-name` 暴露；流式输出不再被 Hub 全量 session round-trip 卡住；大未跟踪目录下 checkpoint 用持久索引避免每条消息全量哈希；修了后台子进程挂死、`@` 提及 OOM、`apply_patch` Add File 覆盖等。

**为何值得看**：开源权重路线要追上闭源 harness，桌面层体验与 CLI 插件治理 / 长会话性能是同一块拼图。

- Desktop：https://github.com/cline/cline/releases/tag/desktop-v0.0.28  
- CLI：https://github.com/cline/cline/releases/tag/cli-v3.0.62  
- 博文（9/14）：https://cline.bot/blog/cline-desktop-an-open-source-app-for-open-weight-models  
- 下载：https://cline.bot/desktop  

---

## 3. GitHub Copilot：治理元数据、CLI 1.0.85 与 auto 三档

**要点**：本窗 Copilot 相关动态合并跟踪。

**自定义属性建议值**（Changelog **2026-09-15**）：企业/组织创建 repository custom property 时，Copilot 可根据属性名建议 allowed values；面向 Copilot Business / Enterprise 公测，可用策略开关控制。

**CLI 1.0.85**（约 **2026-09-16 02:44 UTC**；前一版 **1.0.84-9** 约 9/15 20:05）：Vim 模式对全员开放（`/vim` 或 `editorMode: vim`）；`/settings` 可为 agents / subagents 启用 context management tools；`transcriptView: concise` 折叠工具活动；新增 `/config` 侧栏、sandbox 网络 allow/deny、session/memory 的 semantic JSONL 导入，以及 GPT-6 Astra 支持等。属稳定发版相对 84-9 的 prerelease 线。

**auto 选模三档**（Changelog **2026-09-14**，窗内再发酵）：efficiency / balance / intelligence，各档共用模型池，仍按单次 prompt 选模；在 VS Code、Copilot CLI 与 Copilot app 滚动放出。

**为何值得看**：coding agent 一边碰仓库治理元数据，一边把上下文工具、编辑模态与选模偏好做成可声明的产品面。

- 自定义属性：https://github.blog/changelog/2026-09-15-github-copilot-suggests-custom-properties-definitions/  
- CLI 1.0.85：https://github.com/github/copilot-cli/releases/tag/v1.0.85  
- auto 三档：https://github.blog/changelog/2026-09-14-configure-cost-and-quality-in-copilot-auto-model-selection/  

---

## 4. Antigravity CLI：1.2.3 → 1.2.4，技能热加载与模型选择器

**要点**：`google-antigravity/antigravity-cli` 本窗两连发。

**1.2.3**（约 **2026-09-15 02:03 UTC**）：`/copy btw` 可复制折叠的 `/btw` 旁路问答全文；把 per-request tool-choice（any/required/named）翻译成后端原生 function-calling 配置；修了 `/hooks` 漏列插件内 hooks、自定义 subagent 继承 MCP、误触发反馈提示等问题。

**1.2.4**（约 **2026-09-16 03:54 UTC**）：新增 `/skills reload`，异步重载已发现 skills / slash commands 而不必重启会话；`/model` 增加内联参数补全与交互式模糊搜索；修了跨模型切换到 Gemini thinking 时的 `thought_signature` 校验、`search_web` 无摘要、schema 校验失败后过早 `NO_TOOL_CALL`、hooks 截断丢失、subagent 状态被 pubsub 合并冲掉、重启后自动恢复会话等一批生产问题。

**为何值得看**：旁路问答、tool-choice 保真，再加上「技能热加载」，是「CLI 当主工作面」时的细节分水岭。

- 1.2.3：https://github.com/google-antigravity/antigravity-cli/releases/tag/1.2.3  
- 1.2.4：https://github.com/google-antigravity/antigravity-cli/releases/tag/1.2.4  

---

## 5. Codex：rust 0.155 alpha 列车推到 alpha.10

**要点**：`openai/codex` 在本窗持续打出 rust **0.155.0-alpha** 列车：9/15 可见 **alpha.5 → alpha.8**（alpha.8 约 **22:26 UTC**），9/16 凌晨继续到 **alpha.9 / alpha.10**（alpha.10 约 **04:20 UTC**），npm `@openai/codex` 同步多平台包。GitHub release body 基本为空——当作预发布列车信号即可，稳定 / Python SDK 仍停在 **0.154.0** 叙事附近。不要写成「正式大版本今日发布」。

**为何值得看**：跟踪 Codex harness 演进时，alpha 节奏本身就是信号；落地仍以有 notes 的稳定版为准。

- 最新：https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.10  

---

## 6. OpenClaw：主仓持续合入（非新开源）

**要点**：`openclaw/openclaw` 最新正式 tag 仍是 **v2026.9.4**（**2026-09-11**）。本窗可见主仓在 **2026-09-16 00:xx UTC** 附近持续合入测试 / 重构与 `fix(codex): …` 一类改动——说明 Codex runtime 相关路径仍在热修。suggested task / Control UI 等能力是既有产品线再发酵，不是今天新立仓。

**为何值得看**：多 session 委派正在变成各家 harness 的默认动作，这条仓还在热着。

- 仓库：https://github.com/openclaw/openclaw  

---

## 7. Gemini CLI 0.60.0：扩展与沙箱边界继续加硬

**要点**：`@google/gemini-cli` 正式版 **0.60.0**（约 **2026-09-15 20:31 UTC**；同日还有 **0.61.0-preview.0**）。本版主线是安全加固：web fetch 目的地校验与连接路由、MCP OAuth 按 RFC 9207 校验 issuer、扩展加载的路径边界、环境变量变更需同意并清理运行时敏感变量、系统配置路径所有权检查、macOS Seatbelt / 沙箱内临时目录与 settings 隔离、工具输出 envelope 溯源，以及去掉 chrome-devtools-mcp 里硬编码的 CrUX API key 等。相对上一稳定版 **0.59.0**（9/8），这是窗内最清晰的 Gemini CLI 产品信号。

**为何值得看**：终端 agent 一旦能装扩展、拉网、改环境，边界与 provenance 就是能不能进企业默认允许列表的门槛。

- 发布：https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0  
- npm：https://www.npmjs.com/package/@google/gemini-cli  

---

## 8. Devin Desktop 3.10.27：拖入 composer、SSH 重连与 Fusion 更松

**要点**：Cognition **Devin Desktop 3.10.27**（**2026-09-15**）：从资源管理器拖文件到 agent 面板、或把编辑器选区送进 chat，会再次正确进 composer；远程 SSH 会话在 reload / 重启后可直接打开，不再卡在 “session is locked by another process”；即便 Claude Fable 5.1 暂不可用，也可激活 **Devin Fusion**。相对 9/10 的 3.10.23，本窗是桌面体验与 Fusion 可用性的补强，不是 Fusion 首发（Fusion 叙事自 **2026-09-11** 博文已公开）。

**为何值得看**：本地 / SSH 会话要天天用，拖放上下文与重连可靠性往往比又一个基准分数更决定留存；Fusion 则在继续放宽 lead 模型约束。

- Havoptic 摘要：https://www.havoptic.com/r/windsurf-3.10.27  
- Fusion 博文（9/11）：https://cognition.com/blog/local-fusion  

---

## 9. Factory Droid：0.219（9/15）与 0.220（9/16）双日发版

**要点**：Factory **Droid CLI / Desktop** 本窗连续发版——**CLI 0.219.0 / Desktop 0.176.0**（**2026-09-15**）与 **CLI 0.220.0 / Desktop 0.177.0**（**2026-09-16**）。0.219 亮点包括：侧栏设置入口、组织可禁止 Local 桌面会话、Files 面板显示隐藏文件、可展开 session panes、Slack 按 handle 点名、子 agent 父会话 ID 进 API，以及一批 reconnect / 压缩 / 移动端钉选修复。0.220 则加了 Slack `!connect` 指引、附件超限后仍保持更快、聊天宽表折行、connectors 刷新时间戳与按需刷新（`R`），并修了促销码校验重试、跨窗口模板只开一台 computer、Azure AI Services 凭证兼容等。

**为何值得看**：Agent-native IDE 的竞争已经落到「会话治理 + 协作通道（Slack）+ 连接器可观测」这些日常摩擦上。

- Changelog：https://docs.factory.ai/changelog/release-notes  
- npm：https://www.npmjs.com/package/@factory/cli  

---

## 10. Graphify 0.9.62：把仓库变成可查询知识图（非新开源）

**要点**：`Graphify-Labs/graphify` **v0.9.62**（约 **2026-09-15 17:58 UTC**）继续强化「确定性 AST → 知识图」路线：Terraform 本地 `source` 模块调用解析到目录级实现节点；Ruby 隐式 self 调用沿继承链保守提升；Markdown 行内代码仅在唯一匹配时可引用符号；并修了若干假边 / 闭包归因 / 跨仓 C# 作用域问题。定位是给 Claude Code / Cursor / Codex / Gemini CLI 等用的 `/graphify` skill——主仓早已存在，本窗是功能发版，不是「今日刚开源」。

**为何值得看**：在「再喂一坨向量库」之外，本地可解释的调用图正在变成 agent 上下文层的另一条默认选项。

- 发布：https://github.com/Graphify-Labs/graphify/releases/tag/v0.9.62  
- 仓库：https://github.com/Graphify-Labs/graphify  

