---
name: cross-border-product-research
description: 跨境电商选品分析与热门品类报告生成器。当用户提到选品分析、品类报告、跨境电商市场研究、热门品类、蓝海产品、出口数据分析、海外市场调研时使用。输入任意产品品类名称，自动完成11维度深度调研并生成图文并茂的HTML可视化报告（含ECharts交互图表）。
---

# 跨境电商选品分析报告生成器

## 触发场景

当用户请求以下内容时自动触发：
- 某个品类的跨境电商选品分析
- 热门品类报告生成
- 出口市场调研
- 蓝海产品推荐
- 平台热销榜单分析
- 提到"选品"、"品类报告"、"跨境分析"等关键词

## 输入参数

用户需提供：**产品品类名称**（如"汽车零配件"、"家居用品"、"宠物用品"等）

可选参数：
- 目标市场（默认全球）
- 报告语言（默认中文）
- 重点关注维度

## 执行流程

### Phase 1: 多源数据采集

使用 WebSearch 工具并行采集以下11个维度数据：

**搜索策略**：每个维度至少搜索3-5个关键词组合（中英文混合），确保数据覆盖面。

| 维度 | 搜索关键词模板 | 数据目标 |
|------|---------------|----------|
| 1.市场规模 | "{品类} global market size 2026" / "{品类}跨境电商市场规模" | GMV、YoY增速、ASP |
| 2.出口数据 | "中国{品类}出口 海关数据 HS编码" / "浙江省{品类}出口" | 出口额、国家分布、HS编码TOP5 |
| 3.产业带 | "中国{品类}产业带 分布 企业数量" | 城市、企业数、优势 |
| 4.需求热度 | "{品类} TikTok trending" / "{品类} google trends" / "alibaba {品类} inquiry" | 社媒热度、询盘增长、热搜词TOP10 |
| 5.平台榜单 | "Amazon best seller {品类}" / "TikTok Shop {品类}热销" / "Temu {品类}" | 各平台TOP10产品 |
| 6.蓝海品 | "{品类}外贸蓝海产品" / "{品类} blue ocean niche" | 蓝海推荐、蓝海指数 |
| 7.热搜词 | "阿里国际站{品类}热搜词" / "alibaba {品类} trending keywords" | TOP20搜索增长关键词 |
| 8.供应链 | "1688 {品类} 跨境专供" / "淘宝 {品类} 批发" | 供应商链接、价格区间 |
| 9.买家画像 | "{品类}海外买家画像" / "{品类} buyer persona" | 买家类型、区域偏好 |
| 10.出口资质 | "{品类}出口认证 DOT CE SASO" | 各区域认证要求 |
| 11.出口政策 | "{品类}出口退税率" / "{品类}出口政策支持" | 退税率、支持政策 |

### Phase 2: 数据整理与分析

将采集数据按以下结构整理：

```
research_data = {
  market: { gmv, yoy, asp, regional_breakdown },
  export: { total_value, countries_top10, hs_codes_top5, zhejiang_data },
  industrial_belt: [{ city, enterprises, advantages, categories }],
  demand_signals: { social_media, b2b_inquiry, google_trends, hot_terms_top10 },
  platform_rankings: { amazon, tiktok_shop, shein, temu, dtc_sites },
  blue_ocean: [{ product, index, market_size, competition, growth }],
  hot_keywords: [{ keyword, growth_rate, category }],
  supply_chain: [{ category, platform, search_url, price_range, location }],
  buyer_profile: { by_platform, by_region },
  certifications: { usa, europe, southeast_asia, middle_east, africa, asia_other },
  policies: { tax_rebate, support_policies, tariff_risks }
}
```

### Phase 3: 生成HTML可视化报告

生成单文件HTML报告，包含以下特性：

#### 技术栈
- ECharts 5.x（CDN引入）用于交互式图表
- 纯CSS实现响应式布局和美观样式
- 无外部依赖，可离线浏览

#### 报告结构模板

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[品类名称]跨境电商选品分析报告</title>
    <script src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"></script>
    <style>
        /* 设计规范见下方 */
    </style>
</head>
<body>
    <!-- 报告封面/Header -->
    <!-- 目录导航 -->
    <!-- 11个维度章节 -->
    <!-- 数据来源与免责声明 -->
    <script>
        /* ECharts图表初始化 */
    </script>
</body>
</html>
```

#### 设计规范

**配色方案**（商务科技风）：
```css
:root {
    --primary: #1a73e8;        /* 主色-科技蓝 */
    --primary-dark: #1557b0;   /* 深蓝 */
    --secondary: #34a853;      /* 辅色-增长绿 */
    --warning: #fbbc04;        /* 警示黄 */
    --danger: #ea4335;         /* 风险红 */
    --bg-main: #f8f9fa;        /* 背景色 */
    --bg-card: #ffffff;        /* 卡片白 */
    --text-primary: #202124;   /* 主文字 */
    --text-secondary: #5f6368; /* 次文字 */
    --border: #e8eaed;         /* 边框 */
}
```

**布局要求**：
- 左侧固定导航栏（目录锚点跳转）
- 右侧主内容区域，卡片式布局
- 每个章节一个卡片，带圆角阴影
- 顶部报告封面含品类名称、日期、核心指标卡片
- 底部数据来源列表

**图表规划**（必须包含）：

| 章节 | 图表类型 | ECharts图表 |
|------|----------|-------------|
| 市场规模 | 柱状图+折线图 | 近5年GMV趋势 + 区域占比饼图 |
| 出口数据 | 地图/柱状图 | 出口国家分布柱状图 + HS编码TOP5横向条形图 |
| 产业带 | 表格 | 产业带信息表格（带样式） |
| 需求热度 | 雷达图/条形图 | 各平台热度对比雷达图 + 热搜词词云效果 |
| 平台榜单 | 表格 | 分Tab展示各平台产品表格 |
| 蓝海品 | 气泡图 | 竞争度vs增长率气泡图（气泡大小=市场规模） |
| 热搜词 | 横向条形图 | 搜索增长率TOP20条形图 |
| 供应链 | 表格 | 供应商信息表格（含链接） |
| 买家画像 | 饼图/桑基图 | 买家类型分布饼图 + 区域偏好 |
| 出口资质 | 表格 | 分区域认证要求表格 |
| 出口政策 | 信息卡片 | 退税率高亮卡片 + 政策时间线 |

**表格样式**：
- 斑马纹行
- 悬停高亮
- 固定表头
- 关键数据加粗/彩色标记

**响应式**：
- 桌面端：左侧导航 + 右侧内容
- 移动端：顶部折叠导航 + 全宽内容

### Phase 4: 输出文件

将HTML文件保存到输出目录，文件命名规则：
`{品类名称}_跨境电商选品报告_{日期}.html`

使用 present_files 工具呈现给用户。

## 关键注意事项

1. **数据时效性**：搜索时务必加入当前年份关键词，确保数据为最新
2. **多源验证**：关键数据（市场规模、增长率）至少2个来源交叉验证
3. **中英文搜索**：每个维度同时使用中英文关键词搜索，扩大数据覆盖
4. **数据标注**：报告中所有数据标注来源，增强可信度
5. **图表交互**：ECharts图表保留tooltip、legend筛选等交互功能
6. **单文件完整**：所有CSS/JS内联，确保离线可用（ECharts通过CDN加载）
7. **使用Task工具并行调研**：将11个维度拆分为3-4个Task并行执行，提升效率

## 示例调用

用户输入：`帮我做一份宠物用品的跨境电商选品分析报告`

执行步骤：
1. 确认品类：宠物用品
2. 启动并行数据采集（3-4个Task agent）
3. 整合数据
4. 生成HTML报告
5. 输出文件并呈现
