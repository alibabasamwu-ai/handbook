# 📥 安装提示词 —— 连同 zip 一起发给 Accio 对话即可自动安装

> 用法：把本文件里 **【👇 复制这段发给 Accio】** 的整段文字复制，连同 `知识库建设skill_v1.4.0.zip` 一起拖进 Accio 对话框发送。Accio 会自动解包、安装、自检并就绪。

---

## 【👇 复制这段发给 Accio】

```
请帮我安装这个技能封包（附件 zip）。按以下步骤执行：

1. 把我发的 zip（知识库建设skill_v1.4.0.zip）解压到当前 agent 的技能目录：
   ${agent_skills}/alibaba-knowledge-base-builder/
   （即 agent-core/skills/ 下，目录名用 alibaba-knowledge-base-builder；解压后把 zip 内的"知识库建设skill"文件夹内容放进去，不要多套一层）

2. 解压后做安装自检，确认下列文件都存在：
   - SKILL.md
   - CORE_RULES.md
   - VERSION（应为 1.4.0）
   - references/alibaba-retrieval-rules.md（EVA可抓取7铁律）
   - references/content-depth-and-sourcing.md（深度+多源+零幻觉）
   - references/中文目录规范.md（产出目录全中文）
   - scripts/delivery_audit.py（交付审计脚本）
   - 预热提示词.md
   运行 python3 scripts/delivery_audit.py --help 能打印参数说明即脚本就绪。

3. 把这个技能登记进 agent 的技能配置（让它能被触发），触发关键词：建知识库 / 建AI知识库 / 生成知识库 / 为授权店铺生成知识库 / 做一套能被EVA自动接待抓取的知识库。

4. 安装完成后，请读取并应用 预热提示词.md 的 §1 整段预热词作为本技能的执行基线（强制 read 序列 + 四大交付目标 + 中文目录铁律 + 零幻觉 + 交付前强制审计），让首次执行就达到一致交付质量。

5. 告诉我安装结果（版本号、自检是否全过），然后等我说"建知识库"再开始干活。
```

---

## 这个技能能做什么（给你自己看的说明）

为阿里巴巴国际站商家生成一套**可上传 MA 后台、被 EVA 自动接待 100% 抓取**的 AI 知识库：
- 6 大模块（公司/产品/沟通/售后/物流/付款）每模块 ≥10 篇，共 ≥60 篇详细问答
- 三源融合（国际站后台 + 商家资料 + 外部官网/公域/社媒），放大差异化优势
- 零幻觉（审计脚本兜底，自动检出编造的交期/价格等数字）
- 产出全中文目录 + DOCX 镜像 + 客户图册 PDF + AI 应答评分 + 上传指引

## 为什么发两个文件就够
- `知识库建设skill_v1.4.0.zip` = 技能本体（116 文件）
- 本提示词 = 让 Accio 知道把 zip 装到哪、怎么自检、怎么加载预热词
- 安装后任何人触发"建知识库"，交付质量都一致（靠强制 read 序列 + 量化门禁 + 审计脚本）
