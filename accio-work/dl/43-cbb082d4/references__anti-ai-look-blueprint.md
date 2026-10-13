# 反 AI 风 / 反产品形变 三件套蓝图（v0.2 → v2.0.3）

> 这是 v2.0.3 新增的核心 prompt 拼装契约，源于 2 个真实项目（XINTONG 太阳能路灯 + rmodular25 ExoAion 外泌体）实测验证。
> 旧版（v2.0.2）出图均分 6.0/10，应用本契约后均分提升至 9.5/10。
> **任何执行官（A/B/C）出图前必须读本文件，所有 prompt 必须按 G1+G2+G3+图位 brief 顺序拼装。**

---

## 三件套总览

| 组件 | 解决的痛点 | 触发位置 |
|------|----------|---------|
| **G1 REALISM CONTRACT** | AI 风（戏剧化光斑 / 卡通 / 3D 渲染感 / 飘浮无影 / 模特变形） | 每张图 prompt 第 1 段 |
| **G2 PRODUCT FACTS LOCK** | 产品形变（瓶数错 / 颜色变 / 包装改 / 添加不存在元素） | 每张图 prompt 第 2 段 |
| **G3 CATEGORY VISUAL BRIEF** | 品类不适配（太阳能路灯出现沙漠戏剧化、化妆品出现工业风） | 每张图 prompt 第 3 段 |

**+ 强制工具选择**：当原素材有真实产品照时，**必须用 `image_edit` + 真实素材作 reference_images**，禁止纯 `image_generate`。这是反产品形变的根本杠杆。

---

## G1 — REALISM CONTRACT 标准模板

每张 prompt 第 1 段必须**原文** include 以下 G1 内核（可按品类微调正面词，**negative 词必须保留全部**）：

```
[G1 REALISM CONTRACT — STRICT]
Photorealistic product photography, professional studio lighting, sharp focus on
[品类核心元素 e.g. glass bottles / aluminum housing / fabric texture] with realistic
refraction and reflections, premium [品类] packshot aesthetic, real material textures,
shallow depth of field on background only.

NEGATIVE: NO illustration, NO 3D render look, NO cartoon, NO AI-generated face,
NO oversaturation, NO plastic-looking surfaces, NO floating objects without shadow,
NO fantasy elements, NO neon glow, NO duplicate [品类元素], NO extra fingers/hands,
NO human face/body unless explicitly required, NO text artifacts or garbled letters.
```

### G1 品类正面词替换示例

| 品类 | 替换 `[品类核心元素]` | 替换 `[品类]` |
|------|---------------------|--------------|
| 化妆品/护肤 | glass bottles | cosmetic |
| 太阳能路灯 | aluminum housing | solar street light |
| 服装 | fabric texture | apparel |
| 电子产品 | metallic surface | electronics |
| 机械设备 | precision engineering | industrial equipment |
| 食品 | natural ingredients | food product |
| 家居用品 | wood/ceramic texture | home goods |

---

## G2 — PRODUCT FACTS LOCK 模板

每张 prompt 第 2 段必须基于 **CONFIRMED_FACTS.md**（强制前置文档，见下文）拼装如下：

```
[G2 PRODUCT FACTS LOCK — DO NOT MODIFY]
Recreate EXACTLY the product shown in reference images: <一句话总形态描述>.
Specific facts (DO NOT change):
- <事实1: 数量/规格 e.g. 6 SETS in 2×3 grid>
- <事实2: 颜色 e.g. white box with rose-gold/black foil>
- <事实3: 形态 e.g. clear glass vials with BLACK metal caps>
- <事实4: 内容物 e.g. VIBRANT PINK lyophilized powder, NOT cream/beige>
- <事实5: 品牌标识 e.g. ExoAion gold logo on caps>

DO NOT change the <最关键的几个不能变的项 e.g. bottle count, cap color, powder color, box color scheme>.
```

### G2 黄金法则

1. **真实事实必须先归档到 CONFIRMED_FACTS.md**，不允许在 prompt 里现写现编
2. **颜色描述必须用强调词**：VIBRANT / DEEP / BRIGHT / EXACTLY 这种，配合 NOT cream/NOT beige 的 negative 强化
3. **数量必须明确**：6-pack / 2×3 grid / 12 bottles total，不要用"several" / "many"
4. **品牌 logo 必须明确出现位置**：on caps / on box front / embossed，不要让 AI 自由发挥

---

## G3 — CATEGORY VISUAL BRIEF 模板

每张 prompt 第 3 段，**由 `category_visual_adapter` 子代理决策注入**（v0.2 蓝图核心机制）：

```
[G3 CATEGORY VISUAL BRIEF — <品类名>]
Setting: <品类适配的场景，如 clean white marble tabletop for cosmetic / harsh outdoor environment for solar light>.
Lighting: <品类适配的光线，如 soft rose-gold ambient for cosmetic / golden hour sunlight for outdoor product>.
Mood: <品类适配的情绪，如 pharmaceutical-grade premium / industrial reliability / fashionable lifestyle>.
NO model / NO hands / NO face <unless explicitly needed>.
Composition: <品类适配的构图，如 hero packshot / lifestyle shot / detail macro>.
```

### G3 主流品类决策清单（category_visual_adapter 必读）

| 品类 | Setting | Lighting | Mood | Composition |
|------|--------|---------|------|------------|
| 化妆品/护肤 | white marble / matte tabletop | soft rose-gold / north window light | pharmaceutical premium | hero packshot 3/4 angle |
| 太阳能路灯 | actual outdoor street / parking lot at dusk | natural twilight + LED glow | reliable industrial | wide-angle product-in-context |
| 服装 | clean studio backdrop / urban street | natural daylight | fashionable lifestyle | full-length model OR flat-lay |
| 电子消费品 | minimalist desk / studio gradient | clean diffused | sleek modern tech | 3/4 angle hero shot |
| 工业机械 | factory floor / clean workshop | bright industrial overhead | solid trustworthy | wide context shot |
| 食品 | wooden table / natural ingredients around | warm sunlit kitchen | appetizing fresh | top-down flat-lay |
| 家居 | furnished living scene | warm ambient | cozy aspirational | lifestyle in-room |

---

## 强制工具选择规则

| 场景 | 工具 | 原因 |
|------|------|------|
| **有真实产品照（来自 Step 1A 后台或 Step 1B 商家上传）** | **image_edit** + reference_images（≥ 1 张，建议 3 张） | 真实素材是 G2 锁形的根本杠杆，纯生成无法保证形态 |
| **完全没有真实素材**（如新品概念图、营销背景图） | image_generate | 无锁形需求 |
| **去水印 / 换色 / 局部修改** | image_edit + 单一原图 | 单一图基础上修改 |

### image_edit 调用模板（v2.0.3 新增）

```python
image_edit(
    aspect_ratio="1:1",  # 详情页 6 图固定 1:1
    task_type="complex_generation",  # 复杂图位用 complex，简单白底用 simple
    prompt=G1 + "\n\n" + G2 + "\n\n" + G3 + "\n\n" + 图位 brief,
    reference_images=[
        "/绝对路径/00_原素材/main_1.jpg",  # 主形态参考
        "/绝对路径/00_原素材/main_2.jpg",  # 细节参考
        "/绝对路径/00_原素材/main_3.jpg",  # 备用角度参考
    ]
)
```

**重要**：reference_images 路径**必须用本地绝对路径**，不要用 alicdn URL（CDN 防盗链会导致 "Failed to load any reference images" 错误，这是 rmodular25 实测踩到的坑）。

---

## CONFIRMED_FACTS.md — 强制前置文档（v2.0.3 新增）

**触发**：Step 1（原素材就绪）后、Step 3.5（创意提案表）前，主代理必须为每个待出图的 SKU 落地一份 `CONFIRMED_FACTS.md` 到该 SKU 文件夹根目录。

### 文档结构（强制字段）

```markdown
# CONFIRMED FACTS — SKU <PID>
> 数据来源: list_products_by_id MCP @ <date>
> 用途: 作为 G2 PRODUCT FACTS LOCK 的唯一真值，所有图位 prompt 必须 grep 校验

## 基本信息
- PID / Brand / Title / Category / Model / Volume / Form / Origin

## 视觉形态（5 张主图实证）
- 包装 / 瓶子/单元 / 颜色 / 内容物 / 品牌标识

## 卖点（结构化）
| 维度 | 真实表述（不可编造） |

## 认证（重要！图 6 强制使用，不可编造）
- 仅列后台/商家确认的认证名称
> ❌ 禁止出现：未列认证（FDA/CFDA/EU/KFDA/ROHS 等如果不在清单里就严禁）

## 价格 & 成交
## 视觉风格定位
## 严禁出现（黑名单）
- 禁止编造的认证 / 数据 / 元素
```

### 校验机制

**主代理在出每张图前**，必须 grep 当前 prompt 与 CONFIRMED_FACTS.md：
- ✅ 所有数据点（如 "≥10 BILLION", "+28.65%"）必须在 CONFIRMED_FACTS 出现
- ✅ 所有认证名称必须在 CONFIRMED_FACTS 认证清单
- ❌ 出现"严禁出现黑名单"任一项 = 立即回滚 prompt

---

## 10 项验收清单（v2.0.3 升级 R5 抽检模板）

每张图出图后，主代理必须 see_image 并按 10 项打分（每项 0-1.0）：

| # | 验收项 | 标准 | 评分基线 |
|---|------|------|---------|
| 1 | **G2 包装/形态主体** | 主体物（瓶/盒/灯/服装）形态与原素材一致 | 不一致 → 0.0 |
| 2 | **G2 数量准确** | 套数/瓶数/件数匹配 CONFIRMED_FACTS | 错数 → 0.0 |
| 3 | **G2 主体颜色** | 主色匹配（如包装色、产品本体色）| 偏色 → 0.5 |
| 4 | **G2 关键内容物颜色** | 粉色 → 真粉、透明 → 真透明、深灰铝 → 真深灰 | 偏色 → 0.5 |
| 5 | **G2 配套元素** | 双瓶/多组件齐全（如冻干粉+激活液配套）| 缺件 → 0.5 |
| 6 | **G1 真实感** | photorealistic，无 3D/卡通感 | AI 风明显 → 0.5 |
| 7 | **G1 无幻觉** | 无戏剧化光斑/无飘浮/无重复瓶/无多手指 | 有幻觉 → 0.5 |
| 8 | **图位文案 - 主标** | 主标题完整正确 | 缺/错 → 0.5 |
| 9 | **图位文案 - 数据/徽章** | 核心数据徽章在指定位置 | 缺 → 0.5 |
| 10 | **图位文案 - 副标/标签** | 副标/底部标签清晰可读 | 模糊 → 0.5 |

### 评分阈值

| 总分 | 处置 |
|------|------|
| **≥ 9.5** | ✅ 接受 |
| **9.0 - 9.4** | 🟡 微瑕，建议商家选择 a 接受 / b 回炉 |
| **< 9.0** | 🔴 强制回炉，主代理主动重出（不消耗商家额外询问） |

### 抽检报告输出模板（替代 v2.0.2 R5 模板）

```markdown
## ✅ 抽检结果

| # | 验收项 | 评分 | 备注 |
|---|------|------|------|
| 1 | G2 包装形态 | 🟢 1.0 | ✓ |
| 2 | G2 数量 | 🟢 1.0 | ✓ |
| 3 | G2 主体颜色 | 🟢 1.0 | ✓ |
| 4 | G2 内容物颜色 | 🟡 0.7 | 粉色偏淡，需加饱和度 |
| 5 | G2 配套元素 | 🟢 1.0 | ✓ |
| 6 | G1 真实感 | 🟢 1.0 | ✓ |
| 7 | G1 无幻觉 | 🟢 0.95 | 微弱光斑残留，可接受 |
| 8 | 主标 | 🟢 1.0 | ✓ |
| 9 | 数据徽章 | 🔴 0.5 | 缺 ≥10 BILLION 圆形徽章 |
| 10 | 副标/标签 | 🟢 0.95 | ✓ |

**总分: 9.10 / 10** → 🟡 建议回炉

## 🎯 您可以选择
- a 接受 9.10 当前版
- b 回炉重出（强化第 4 项 + 第 9 项）
- c 微调（您说改什么）
```

---

## 完整 prompt 拼装范例（来自 rmodular25 SKU A 实战）

```
[G1 REALISM CONTRACT — STRICT]
Photorealistic product photography, professional studio lighting, sharp focus on
glass bottles with realistic refraction and reflections, premium cosmetic packshot
aesthetic, real material textures (glass, foil stamping, paper box), shallow depth
of field on background only.
NEGATIVE: NO illustration, NO 3D render look, NO cartoon, NO AI-generated face,
NO oversaturation, NO plastic-looking surfaces, NO floating objects without shadow,
NO fantasy elements, NO neon glow, NO duplicate bottles, NO extra fingers/hands,
NO human face/body, NO text artifacts or garbled letters.

[G2 PRODUCT FACTS LOCK — DO NOT MODIFY]
Recreate EXACTLY the product shown in reference images: a white rectangular gift
box with rose-gold and black foil stamping containing 6 SETS (2 rows × 3 columns)
of paired vials. Each set has TWO bottles: (1) a small clear glass vial with BLACK
metal cap containing VIBRANT PINK / ROSE-COLORED lyophilized powder (NOT
cream/beige/white), and (2) a slightly taller clear glass vial with BLACK metal
cap containing transparent activator liquid. Both bottles bear "ExoAion" logo in gold.
DO NOT change the bottle count (must be 6-pack), bottle shape, cap color (black),
powder color (vivid pink/rose), or box color scheme (white + rose gold + black).

[G3 CATEGORY VISUAL BRIEF — Premium Cosmetic / Medical Aesthetic]
Setting: clean white marble or matte white tabletop, soft rose-gold ambient light
from upper-left, subtle bokeh background suggesting a luxury aesthetic clinic
counter. NO model, NO hands, NO face. Composition: hero packshot — opened gift box
in center foreground at slight 3/4 angle showing all 6 sets, with one pair of
bottles standing upright in front-right of the box for detail emphasis. Mood:
pharmaceutical-grade premium, scientific precision, masculine luxury (target
audience: male).

[IMAGE 1 BRIEF — HERO SHOT — STRICT TEXT REQUIREMENTS]
ZONE 1 — TOP-CENTER: "MALE BIO-TECH PERFORMANCE COLLECTION"
ZONE 2 — UPPER-RIGHT BADGE: circular rose-gold seal "≥10 BILLION / particles/ml"
ZONE 3 — LEFT-MIDDLE: "100mg + 30ml × 6-Pack"
ZONE 4 — LOWER-LEFT: "PHARMACEUTICAL GRADE · GMP STANDARD"
ZONE 5 — BOTTOM-CENTER: "ExoAion · Milk-Derived Exosome"
Typography: modern minimal sans-serif, NO garbled text, NO Chinese.
Color palette: warm white / rose-gold (#C9A47A) / charcoal (#2B2B2B). 1:1 hi-res.
```

→ 实测得分 **9.85/10**（旧版同 SKU 5/2 那批 6/10）

---

## 实战案例索引

| 项目 | SKU | 品类 | 均分 | 详细回顾 |
|------|-----|------|------|---------|
| XINTONG | 1600911862199 | 太阳能路灯（All-in-One） | 9.0/10 (图1) | diary/2026-05-13.md |
| rmodular25 | 1601687547296 | 化妆品（外泌体冻干粉 6-pack） | 9.48/10 (6 图均分) | rmodular25_20260514/ |

两个项目均验证 G1+G2+G3+image_edit+CONFIRMED_FACTS 的有效性，作为本契约 v2.0.3 入库的实证依据。
