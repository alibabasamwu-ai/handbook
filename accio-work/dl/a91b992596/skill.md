---
name: OKKI 商机深度分析助手 (OKKI Opportunity Analyst)
description: 自动从 OKKI (小满) CRM 中抓取重点商机进度，提取 AI 聊天摘要，生成多格式报告（Markdown、Word、手机端长图），并自动推送到企业微信群。
---

# Skill: OKKI 商机深度分析助手 (OKKI Opportunity Analyst)

自动从 OKKI (小满) CRM 中抓取重点商机进度，提取 AI 聊天摘要，生成多格式报告（Markdown、Word、手机端长图），并自动推送到企业微信群。

## 适用场景
- **外贸管理层**：每日自动汇总业务员跟进情况，识别需要介入的风险订单。
- **业务员自检**：自动梳理当日待办及昨日进展。

## 自动化流程 (Workflow)

1. **进入小满并筛选**：
   - 访问 `https://crm.xiaoman.cn/business/list`。
   - 筛选“结束日期”在“今日至下月底”之间的商机。
   - 锁定“样品流程”、“正式订单意向”、“PI/合同协商”三个关键阶段。

2. **数据抓取**：
   - 遍历以上阶段的所有商机卡片。
   - 提取：客户名字、国家、产品、小满编号、金额、跟进人、商机阶段。

3. **AI 进度提取**：
   - 深入每个商机的“动态” -> “AI聊天旅程”。
   - 提取昨日/今日的对话总结（价格、付款承诺、物流等关键点）。

4. **多格式报告生成**：
   - 生成 **Markdown** 报告。
   - 调用 `scripts/generate_docx_template.js` 生成 **Word** 文档。
   - 渲染 HTML 模板并截图生成 **手机端长图 (PNG)**。

5. **企业微信推送**：
   - 调用 `scripts/push_to_wecom.sh` 将图片和摘要发送至 Webhook。

## 安装与配置

1. **依赖安装**：
   - 系统需安装 `node.js`。
   - 运行：`npm install docx` (用于生成 Word)。

2. **Webhook 配置**：
   - 在 `push_to_wecom.sh` 或触发指令中填入您的企业微信机器人 Webhook 地址。

3. **复用说明**：
   - 将此文件夹放入 Accio Work 的技能目录或通过“添加技能”导入 `skill.md`。

---
*Powered by Accio Work*
