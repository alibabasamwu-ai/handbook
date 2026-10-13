# 跨境营销节日日历（Promotion Calendar）

> 用于 Step 5 收尾时，自动判断"距离最近营销节点 ≤ 30 天"，主动建议商家生成 #10 节日促销海报。

## 全年关键节点（按月）

| 月份 | 节点 | 适用市场 | 提前出图建议 |
|------|------|---------|-----------|
| **1 月** | Chinese New Year（中国春节，工厂放假倒计时） | 全球（提醒下单避开放假） | 提前 30–45 天 |
| 2 月 | Valentine's Day | 欧美 | 提前 20 天 |
| 2-3 月 | Ramadan（斋月，每年浮动） | 中东、东南亚穆斯林市场 | 提前 30 天 |
| 3 月 | Mother's Day（部分国家如英国） | 英国 | 提前 20 天 |
| 3-4 月 | EID al-Fitr（开斋节） | 中东、东南亚 | 提前 20 天 |
| **4 月** | **Canton Fair Spring 春季广交会** | 全球 B2B | 提前 30 天，邀请函海报 |
| 5 月 | Mother's Day（美国） | 美国 | 提前 20 天 |
| 5 月 | Memorial Day Sale | 美国 | 提前 14 天 |
| 6 月 | Mid-Year Sale / Father's Day | 全球 | 提前 20 天 |
| 6-7 月 | EID al-Adha（古尔邦节） | 中东 | 提前 20 天 |
| 7 月 | Amazon Prime Day（B2C 大促，B2B 转化期） | 美国 | 提前 14 天 |
| 7 月 | Independence Day Sale | 美国 | 提前 14 天 |
| 9 月 | Back to School | 欧美 | 提前 30 天 |
| **10 月** | **Canton Fair Autumn 秋季广交会** | 全球 B2B | 提前 30 天 |
| 10 月 | Diwali | 印度 | 提前 20 天 |
| 10 月底 | Halloween Sale | 欧美 | 提前 20 天 |
| **11 月** | **Black Friday + Cyber Monday（BFCM）** | 全球，最重要 | 提前 30 天 |
| 11 月 | Singles Day（双11，B2C 但影响全球） | 中国 / 东南亚 | 提前 14 天 |
| **12 月** | **Christmas + New Year Holiday** | 全球 | 提前 30–45 天 |

## 浮动节日的具体日期

Ramadan、EID、Diwali、CNY 等是**农历或伊斯兰历**节日，每年日期不同。判断时：
1. 用 `web_search` 查询当年具体日期（如"Ramadan 2026 start date"）
2. 或用 `get_time` + 查日历表

## 自动判断逻辑（伪代码）

```
获取当前日期 = get_time()
对于日历中每个节点：
    距离天数 = 节点日期 - 当前日期
    如果 0 < 距离天数 ≤ 30：
        提示商家：「距离 {节点名} 还有 {N} 天，建议提前出一套促销海报。是否现在帮您生成？」
        如果商家说"是" → 进入 Step 3 营销图—第10项 → 自动套用对应节日的视觉关键词与主色调
```

## 行业适配建议

| 商家品类 | 重点关注的节点 |
|---------|-------------|
| 户外灯具 / 太阳能 | 春广交、秋广交、BFCM、Christmas（B2B 工程客户备货周期） |
| 家居 / 礼品 | Christmas、Valentine's Day、BFCM、Mother's Day |
| 服装 | Back to School、BFCM、Christmas、Singles Day |
| 工业品 / 机械 | 春广交、秋广交、Mid-Year Sale（其他节日影响小） |
| 食品 / 美妆 | Ramadan / EID（中东市场）、Christmas、Diwali |

## 海报生成要点

调用 #10 营销图时，**自动注入节日的视觉关键词与主色调**（来自 [marketing-12-images.md](marketing-12-images.md) 中第 10 项的关键词库）。

⚠️ 折扣百分比、有效期、产品范围**必须商家确认后再生成**，不要 AI 编造数字。
