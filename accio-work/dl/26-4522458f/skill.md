---
name: 新选品技能
description: 穿透B端与C端平台数据，深度挖掘蓝海风口并生成Word分析报告。
---

# 技能名称：新选品技能 (Alibaba Selection Expert)

## 技能描述
这是一个帮你“决定卖什么最赚钱”的情报专家。它不仅盯着阿里国际站的询盘热款，还会穿透到亚马逊（Jungle Scout数据）、TikTok、Shopee 等 C 端平台看真实销量。最后，它会把所有的市场走势、竞争对手分析和建议，自动整理成一份漂亮的 Word 报告给你。

## 核心功能
1. **多模式智能选品**：支持链接选品、行业选品和盲盒式蓝海选品。
2. **B/C端跨平台穿透**：同步抓取亚马逊月销量、TikTok流行趋势及国际站询盘数据。
3. **趋势增长研判**：自动分析过去6个月的流量走势，识别真正的“增长黑马”。
4. **自动化报告生成**：通过Python脚本，一键生成结构化的 Word (docx) 版分析全案。

## 工作流程 (Workflow)
1. **模式识别**：根据用户提供的“链接”、“行业”或“选品”指令，自动匹配调研路径。
2. **多源情报采集**：
   - 阿里端：使用 `product_supplier_search` 抓取询盘热款。
   - 亚马逊端：利用 Jungle Scout 数据抓取月销量与月收入。
   - 趋势端：通过 `web_search` 扫描 TikTok 和各平台流行风向。
3. **深度建模分析**：参考 `rules/selection-logic.md` 对比产品共性、价格分布与利润空间。
4. **报告自动化排版**：参考 `rules/report-protocol.md`，调用 `bash` 运行 Python 脚本生成 Word 文档。
5. **交付成果**：在对话框展示核心结论，并提供 Word 文档下载链接。

## 使用工具
- `product_supplier_search`: 抓取阿里国际站供需数据。
- `web_search` / `web_fetch`: 调研亚马逊、TikTok 等平台趋势。
- `bash`: 用于运行 Python 脚本生成结构化 Word 报告。
- `see_image`: 用于分析爆款的主图及视觉特征。
