# 谈客户营销图 12 张清单

> 用于线下谈判 / 邮件 / WhatsApp / 询盘回复 / 展会 / 报价单。
> 不是平台主图，而是**业务员每天和客户打交道时要发出去的素材**。
> 默认输出英文 + 商家指定的主推市场语言（双语版本同时生成）。

## 阶段—图片对应表

| 客户阶段 | 客户问题 | 对应图 |
|---------|---------|--------|
| 破冰 | "你是谁？做什么的？" | 01 Catalog 封面、02 About Us |
| 比价 | "你和别家有啥不一样？" | 03 USP 海报、04 竞品对比、09 MOQ 价格、11 报价单配图 |
| 信任 | "你靠不靠谱？" | 05 认证墙、06 工厂实拍、07 客户案例、08 包装发货 |
| 促单 | "现在下单有啥好处？" | 10 节日促销、12 业务员签名 |

---

## 通用规范

| 项目 | 规范 |
|------|------|
| 比例 | 默认 1:1（适配 WhatsApp/邮件/聊天）；Catalog 封面、报价单配图、节日海报 = 3:4 或 16:9 |
| 文案 | 默认英文 + 主推市场语言（俄语/西班牙语/阿拉伯语/越南语/葡萄牙语等） |
| 文件命名 | `{图名}_{语言}.jpg`（如 `Catalog_Cover_EN.jpg`、`Catalog_Cover_ES.jpg`） |
| 文件夹命名 | 中英混合（如 `01_Catalog封面/`） |

---

## 01_Catalog封面（Catalog Cover）

**用途**：发邮件 / WhatsApp 第一张；展会 leaflet 封面。
**比例**：3:4（A4 纵版）
**关键元素**：
- 多产品拼图（4–6 个主推品）
- 公司 Logo（左上）
- 一句 Slogan（如 `Your Trusted Partner for {Product Category}`）
- 联系方式（底部）：网站 + 邮箱 + WhatsApp

### Prompt

```
Design a B2B product catalog cover, A4 portrait 3:4 ratio.
Top-left: company logo "{logo}".
Center: collage of 4-6 product photos in a tasteful asymmetric layout.
Headline (top-right): "{slogan}" in 60px serif/sans-serif bold.
Subheading: "{product_category} | OEM/ODM | Worldwide Shipping" in 24px.
Bottom strip: brand color band with website, email, WhatsApp in white text.
Color: dominant white + brand color accent.
Style: premium, like a Bosch/Schneider catalog cover.
```

---

## 02_AboutUs公司介绍（About Us）

**用途**：询盘回复第一封信附图。
**比例**：1:1
**关键元素**：
- 工厂外景照
- 成立年份、员工数、出口国家数、年出口额
- 主要市场地图（标注出口国家国旗）

### Prompt

```
Design a "About Us" infographic, 1:1 square 1200x1200.
Top half: factory exterior photo with subtle dark gradient overlay.
Headline overlay: "{company_name} — Factory Since {year}"
Bottom half (white background): 4 key metrics in horizontal row with big numbers:
  "{years}+ Years"  "{employees}+ Staff"  "{countries}+ Countries"  "${gmv}M Annual Export"
Bottom strip: world map silhouette with small flag pins on main export markets.
Style: corporate, trustworthy, B2B.
```

---

## 03_USP核心卖点海报

**用途**：询盘回复 / WhatsApp 推送，按主推品出。
**比例**：1:1
**关键元素**：产品大图 + 3–5 个图标化卖点 + CTA 按钮 `Get Quote Now`

> 与"详情页第 3 图 USP"基本一致，但**画面下方加 CTA 按钮**，且尺寸独立（不嵌入详情页 6 图序列）。
> Prompt 见 [detail-6-images.md](detail-6-images.md) 第 3 图，末尾加：
> `Add a CTA button at bottom: "Get Quote Now →" in brand color rounded rectangle.`

---

## 04_竞品对比图（Why Choose Us）

**用途**：客户说"别家更便宜"时甩出。
**比例**：1:1 或 3:4
**关键元素**：表格式对比 ✓✗

### Prompt

```
Design a "Why Choose Us vs Other Suppliers" comparison infographic, 1:1 or 3:4.
Top headline: "Why Choose {Company}?"
Center: 2-column comparison table.
  Left column header: "Us" (brand color, with check icon)
  Right column header: "Common Suppliers" (gray, with X icon)
Compare rows (5-7 items): {comparison_items}
  e.g.  Quality: 100% inspection vs sample inspection
        Warranty: 5 years vs 1 year
        Lead time: 25 days vs 45 days
        Customization: free OEM vs paid OEM
        Certifications: CE/RoHS/SGS vs none
Use ✓ green for "Us" wins, ✗ red for competitor.
Footer: "Contact us today for a winning quotation"
```

⚠️ 对比项必须真实，不可贬低具名同行。

---

## 05_认证墙（Certifications Wall）

**用途**：信任建立、报价单角标。
**比例**：1:1
**关键元素**：商家真实持有的认证 logo 整齐排列 + 编号

### Prompt

```
Design a "Our Certifications" wall, 1:1 square.
Headline: "Quality Certified by Global Standards"
Center: 3x2 grid of certification logos: {real_cert_list}
  Each cell shows: certification logo + cert number (small font below)
Background: white, with very subtle brand color border.
Footer: "All certificates available upon request"
```

⚠️ **必须使用商家真实持有的认证**。生成前先问商家：CE / RoHS / FCC / ISO9001 / ISO14001 / SGS / TUV / FDA 等持有哪些 + 证书编号（用于显示）。

---

## 06_工厂实拍（Factory Tour）

**用途**：客户提"看工厂视频"前的前置物料。
**比例**：1:1
**关键元素**：4–6 张实拍拼图 — 车间、QC、仓库、装柜

### Prompt

```
Design a "Factory Tour" gallery, 1:1 square.
Layout: 2x3 grid of factory photos.
Cells: 1) production line  2) QC inspection  3) raw material warehouse
       4) finished goods warehouse  5) packing area  6) container loading
Each cell has small white label at bottom-left in 24px.
Top headline strip: "Inside Our Factory — {factory_size} m² | {employees}+ Workers"
Style: photo-realistic, NOT staged-looking.
```

如果商家**没有真实工厂照片**，需主动告知："工厂图建议用真实拍摄，AI 生成可能造成信任度反向损伤。建议您拍 6 张实景照后用本技能拼图 + 加文案"，并改用 `指令绘图` 仅做拼图与文字叠加。

---

## 07_客户案例（Project Reference）

**用途**：谈大客户、工程类订单必备。
**比例**：1:1
**关键元素**：项目实景 + 客户国家国旗 + 数量/规模 + 简短背书

### Prompt

```
Design a "Project Reference" case card, 1:1 square.
Top 60%: project site photo (full bleed).
Bottom 40% (white panel):
  Left: client country flag icon + country name
  Center: project name "{project_name}" in 36px bold
  Right: key numbers: "{quantity} units" "{year}"
  Bottom line: short testimonial quote (max 15 words) "{testimonial}"
Brand color accent stripe at very bottom.
```

每个标杆案例出 1 张。**项目数据必须商家提供真实信息**，不可编造。

---

## 08_包装发货（Packaging & Shipping）

**用途**：解决"运过来会不会坏"。
**比例**：1:1
**关键元素**：内包装 + 外箱 + 唛头 + 装柜数 + 装柜实拍

### Prompt

```
Design a "Packaging & Shipping" spec card, 1:1 square.
Top half: 3 photo cells in row showing - inner packaging (foam/PE bag) | export carton (with shipping mark) | container loading
Bottom half (white): packing specs in 2 columns
  Inner pack: {inner_spec}     Carton size: {carton_size}
  Pcs/Carton: {pcs_per_carton} Carton weight: {weight}
  CBM: {cbm}                   20'GP load: {pcs_per_20gp} pcs
                               40'HQ load: {pcs_per_40hq} pcs
Footer: "FOB / CIF / DDP shipping options available"
```

---

## 09_MOQ价格信息（MOQ & Pricing）

**用途**：报价前预先告知，过滤无效询盘。
**比例**：1:1
**关键元素**：表格 + 图标，MOQ、起订量、生产周期、付款方式、发货港

### Prompt

```
Design a "Trade Terms" info card, 1:1 square.
Headline: "Trade Terms at a Glance"
Center: 6 trade term items in 2x3 grid, each = icon + label + value:
  📦 MOQ: {moq} pcs
  ⏱️ Lead Time: {lead_time} days
  💳 Payment: {payment_terms}
  🚢 Shipping Port: {port}
  🏷️ Incoterms: {incoterms}
  🛡️ Warranty: {warranty}
Footer: "Bulk discount available for orders above {bulk_threshold}"
```

---

## 10_节日促销海报（Promotion Banner）

**用途**：Canton Fair / BFCM / Christmas / Ramadan / CNY / EID / Diwali 等。
**比例**：3:4（适合 WhatsApp Status / 邮件 banner） + 16:9（适合官网 banner，可选）
**关键元素**：节日视觉 + 折扣信息 + 时效 + CTA

### 节日视觉关键词库

| 节日 | 视觉关键词 | 主色调 |
|------|-----------|--------|
| Canton Fair | 展会场景、握手、广交会 logo（不要直接用） | 红 + 金 |
| Black Friday | 黑色背景 + 金色折扣字 | 黑 + 金 |
| Christmas | 雪花、礼盒、绿红配色、圣诞树 | 绿 + 红 |
| Ramadan / EID | 月牙、灯笼、阿拉伯纹样 | 金 + 绿 |
| Chinese New Year | 红包、灯笼、福字（避免文化敏感元素） | 红 + 金 |
| Diwali | 油灯、烟花、印度纹样 | 金 + 紫 |
| Mid-year Sale | 夏日、阳光 | 橙 + 黄 |

### Prompt 模板

```
Design a "{festival} Sale" promotion banner for B2B alibaba.com sellers, {3:4 or 16:9}.
Theme visual: {festival_visual_keywords}
Color palette: {festival_color}
Headline: "{festival_name} SPECIAL OFFER"
Subheadline: "Up to {discount}% OFF on {product_category}"
Validity: "Valid until {end_date}"
CTA button: "Inquire Now →" in contrasting color
Bottom: company logo + WhatsApp + website
Avoid culturally sensitive symbols.
```

⚠️ **折扣百分比、有效期必须商家确认后再生成**，不可由 AI 编造。

---

## 11_报价单配图（Quotation Header）

**用途**：PDF/Excel 报价单顶部 banner。
**比例**：16:9 或 16:5（横版长条）
**关键元素**：公司 Logo + 联系方式 + 产品全家福 + 一句 Slogan

### Prompt

```
Design a quotation header banner, ratio 16:5 (long horizontal).
Left third: company logo + slogan "{slogan}"
Middle third: small product family lineup (3-5 silhouettes)
Right third: contact strip (Email, WhatsApp, Website, Address) in 18px
Color: brand color base, white text
Style: corporate header, like a SaaS company invoice header.
```

---

## 12_业务员签名图（Sales Signature）⭐ 可选模块

**用途**：每条 WhatsApp / Email 底部签名条。
**比例**：16:5 或 4:1（横版）
**关键元素**：业务员头像 + 姓名 + Title + 公司 + WhatsApp/Skype/邮箱

### ⚠️ 启动前必须问商家提供以下信息

| 必填字段 | 说明 |
|---------|------|
| `staff_photo` | 业务员头像照片（建议商务照） |
| `staff_name` | 姓名（英文名） |
| `staff_title` | 职位（如 Senior Sales Manager） |
| `company` | 公司全称 |
| `whatsapp` | WhatsApp 号码 |
| `email` | 邮箱 |
| `skype` | Skype（选填） |
| `wechat` | 微信号（选填） |

### Prompt

```
Design a professional email/WhatsApp signature card, ratio 4:1 horizontal.
Left section (square): circular cropped staff photo with thin brand color ring.
Middle section: staff name (28px bold) + title (18px regular) + company name (20px brand color)
Right section: contact icons in vertical stack:
  📱 WhatsApp: {whatsapp}
  📧 Email: {email}
  💼 Skype: {skype} (if provided)
  💬 WeChat: {wechat} (if provided)
Background: very light gray with subtle brand color left border (4px wide).
Style: clean, professional, like LinkedIn/Outlook signature card.
```

如果商家没提供头像，**不要 AI 生成假人头像**，改用公司 logo 占位 + 业务员姓名首字母圆形头像。

---

## 批量执行规则

商家可一次勾选多张，按以下顺序生成（先公司类，再产品类，最后促销类）：

```
02 AboutUs → 06 工厂实拍 → 05 认证墙 → 08 包装发货 → 09 MOQ价格
→ 01 Catalog封面 → 03 USP（按主推品）→ 07 客户案例（按案例）→ 04 竞品对比
→ 11 报价单配图 → 12 签名图（按业务员）→ 10 节日促销（按节日）
```

理由：先固定公司维度的图（一次性），再产品维度，最后时效性的促销。

## 落地命名

```
营销图/
├── 01_Catalog封面/
│   ├── Catalog_Cover_EN.jpg
│   └── Catalog_Cover_ES.jpg
├── 02_AboutUs公司介绍/
│   └── About_Us_EN.jpg
├── ...
└── 12_业务员签名图/
    ├── Signature_Jake_Zhang.jpg
    └── Signature_Jan_Hou.jpg
```
