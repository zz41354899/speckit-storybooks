# Implementation Plan: Speckit-Storybook 教學網站

**Branch**: `001-speckit-storybook-spa` | **Date**: 2025-10-07 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-speckit-storybook-spa/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

建立一個單頁式網站（SPA），作為 Spec Kit 安裝教學與 SDD 開發觀念的整合說明平台。網站使用 Vue 3 + Vite 建構，採用原生 CSS 撰寫樣式，包含 Header、Sidebar、主要內容區與 Footer 四大模組。使用者可透過 Sidebar 導覽切換不同內容區塊，學習 Spec Kit 的安裝方式與 SDD 五大開發階段。所有介面與文件使用正體中文，支援桌面與手機響應式設計。

## Technical Context

**Language/Version**: JavaScript ES6+（Vue 3 Composition API）  
**Primary Dependencies**: 
- Vue 3（前端框架）
- Vite（建置工具）
- lucide-vue-next（圖示庫，版本 0.545.0）
- 原生 CSS（樣式撰寫，禁止使用 Tailwind CSS）

**Storage**: N/A（純靜態網站，無後端資料儲存）  
**Testing**: 無（根據專案憲章，不需要撰寫測試）  
**Target Platform**: 現代瀏覽器（Chrome、Firefox、Safari、Edge 最新版本）  
**Project Type**: 單頁式網站（SPA）- 前端專案  
**Performance Goals**: 
- 首次載入時間 < 3 秒
- 導覽切換 < 1 秒
- Lighthouse Performance Score > 90

**Constraints**: 
- 禁止使用 TypeScript
- 禁止使用 Tailwind CSS，必須使用原生 CSS
- 所有介面文字與註解必須使用正體中文
- 不整合 ESLint 或測試框架

**Scale/Scope**: 
- 5 個主要導覽區塊
- 4 個核心元件（Header、Sidebar、MainContent、Footer）
- 預計 10-15 個 Vue 元件
- 單一頁面應用，無多頁路由

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

根據 `.specify/memory/constitution.md` 檢查以下項目：

- [x] **JavaScript 優先**：✅ 使用 JavaScript ES6+ 與 Vue 3 Composition API，完全不使用 TypeScript
- [x] **測試政策**：✅ 不撰寫測試，不整合 ESLint
- [x] **命名規範**：✅ 所有元件、函式、變數使用英文駝峰式命名（如 `MainContent.vue`, `handleNavClick`）
- [x] **正體中文文件**：✅ 所有程式碼註解、README 使用正體中文
- [x] **正體中文介面**：✅ 所有使用者介面文字使用正體中文
- [x] **響應式設計**：✅ 支援桌面（1920x1080+）、平板（768x1024）、手機（375x667+）
- [x] **程式碼品質**：✅ 每個模組具備清晰職責（SRP），函式簡潔，附中文註解

**憲章合規性評估**：✅ **通過** - 所有項目符合專案憲章要求

## Project Structure

### Documentation (this feature)

```
specs/001-speckit-storybook-spa/
├── plan.md              # 本檔案（實作計畫）
├── research.md          # Phase 0 輸出（技術研究）
├── data-model.md        # Phase 1 輸出（資料模型）
├── quickstart.md        # Phase 1 輸出（快速開始指南）
├── checklists/          # 品質檢查清單
│   └── requirements.md  # 規格品質檢查
└── spec.md              # 功能規格文件
```

### Source Code (repository root)

本專案採用 **Vue 3 單頁式應用（SPA）** 結構：

```
speckit-storybooks/
├── public/              # 靜態資源
│   └── favicon.ico      # 網站圖示
│
├── src/                 # 原始碼目錄
│   ├── components/      # Vue 元件
│   │   ├── layout/      # 佈局元件
│   │   │   ├── AppHeader.vue       # Header 模組
│   │   │   ├── AppSidebar.vue      # Sidebar 側邊欄
│   │   │   ├── AppFooter.vue       # Footer 模組
│   │   │   └── MainContent.vue     # 主要內容區
│   │   │
│   │   ├── sections/    # 內容區塊元件
│   │   │   ├── WhatIsSpecKit.vue   # 📦 Spec Kit 是什麼
│   │   │   ├── HowToInstall.vue    # ⚙️ 如何安裝
│   │   │   ├── WhyStorybook.vue    # 📐 為何結合 Storybook
│   │   │   ├── SsdPrinciples.vue   # 🧭 SDD 開發五大原則
│   │   │   └── UserGuide.vue       # 📘 使用者指引範例
│   │   │
│   │   └── common/      # 共用元件
│   │       ├── NavItem.vue         # 導覽項目元件
│   │       └── ContentSection.vue  # 內容區塊包裝元件
│   │
│   ├── composables/     # Vue Composition API 可組合函式
│   │   └── useNavigation.js        # 導覽邏輯
│   │
│   ├── data/            # 靜態資料
│   │   ├── navigationItems.js      # 導覽項目資料
│   │   └── contentData.js          # 內容區塊資料
│   │
│   ├── styles/          # 樣式檔案（原生 CSS）
│   │   ├── reset.css               # CSS Reset
│   │   ├── variables.css           # CSS 變數（顏色、字體等）
│   │   ├── layout.css              # 佈局樣式
│   │   └── responsive.css          # 響應式樣式
│   │
│   ├── App.vue          # 根元件
│   └── main.js          # 應用程式入口
│
├── index.html           # HTML 入口檔案
├── vite.config.js       # Vite 設定檔
├── package.json         # 專案依賴管理
└── README.md            # 專案說明文件（正體中文）
```

**Structure Decision**: 

採用 Vue 3 SPA 單一專案結構，原因如下：
1. **無後端需求**：純靜態網站，不需要 backend 目錄
2. **元件化設計**：將 UI 拆分為 layout、sections、common 三層元件
3. **關注點分離**：樣式、資料、邏輯分別放置於 styles/、data/、composables/
4. **符合 Vue 3 最佳實踐**：使用 Composition API 與 SFC（Single File Component）
5. **無測試目錄**：根據專案憲章，不需要 tests/ 目錄

## Complexity Tracking

*Fill ONLY if Constitution Check has violations that must be justified*

**無違規項目** - 本專案完全符合專案憲章要求，無需額外複雜度追蹤。

---

## Phase 0: Research（已完成 ✅）

**輸出檔案**：[research.md](./research.md)

**完成項目**：
- ✅ 前端框架選擇：Vue 3 Composition API
- ✅ 樣式方案決策：原生 CSS + CSS 變數
- ✅ 圖示庫選擇：lucide-vue
- ✅ 導覽實作方式：錨點切換
- ✅ 響應式設計策略：CSS Media Queries + Flexbox/Grid
- ✅ 狀態管理方案：Vue 3 Composition API
- ✅ 內容資料管理：JavaScript 物件
- ✅ 效能優化策略：Vite 內建優化 + 懶載入

**關鍵決策**：
- 使用 Vue 3 Composition API，不使用 TypeScript
- 禁止使用 Tailwind CSS，採用原生 CSS
- 使用錨點導覽，不使用 Vue Router
- 不使用 Vuex/Pinia，狀態管理使用 Composition API

---

## Phase 1: Design & Contracts（已完成 ✅）

**輸出檔案**：
- [data-model.md](./data-model.md) - 資料模型定義
- [quickstart.md](./quickstart.md) - 快速開始指南
- Agent context 已更新

**完成項目**：

### 資料模型設計
- ✅ NavigationItem（導覽項目）
- ✅ ContentSection（內容區塊）
- ✅ Link（連結）
- ✅ CodeExample（程式碼範例）
- ✅ Subsection（子區塊）
- ✅ SsdPhase（SDD 階段）

### 資料儲存結構
- ✅ `src/data/navigationItems.js` - 導覽項目資料
- ✅ `src/data/contentData.js` - 內容區塊資料
- ✅ `src/data/ssdPhases.js` - SDD 階段資料

### 狀態管理設計
- ✅ `useNavigation` composable - 導覽邏輯
- ✅ `activeSection` - 當前選中區塊
- ✅ `isSidebarOpen` - Sidebar 展開狀態

### 開發指引
- ✅ 環境設定步驟
- ✅ 專案結構建立
- ✅ 元件開發順序
- ✅ CSS 變數使用規範
- ✅ 響應式設計斷點
- ✅ 程式碼風格指引

**API Contracts**：本專案為純前端靜態網站，無需 API 合約。

---

## Phase 2: 憲章複查（已完成 ✅）

重新檢查憲章合規性：

- [x] **JavaScript 優先**：✅ 所有技術決策使用 JavaScript ES6+
- [x] **測試政策**：✅ 無測試相關依賴或設定
- [x] **命名規範**：✅ 所有元件與函式使用駝峰式命名
- [x] **正體中文文件**：✅ 所有文件與註解使用正體中文
- [x] **正體中文介面**：✅ 資料模型中所有使用者文字為正體中文
- [x] **響應式設計**：✅ 定義完整的響應式斷點與策略
- [x] **程式碼品質**：✅ 元件職責清晰，資料結構簡潔

**最終評估**：✅ **完全符合專案憲章**

---

## 實作準備就緒

### 已產出文件

1. **[spec.md](./spec.md)** - 功能規格（4 個使用者故事，28 個功能需求）
2. **[plan.md](./plan.md)** - 本檔案（實作計畫）
3. **[research.md](./research.md)** - 技術研究與決策
4. **[data-model.md](./data-model.md)** - 資料模型定義
5. **[quickstart.md](./quickstart.md)** - 快速開始指南
6. **[checklists/requirements.md](./checklists/requirements.md)** - 規格品質檢查

### 技術堆疊確認

- **前端框架**：Vue 3 Composition API
- **建置工具**：Vite
- **樣式方案**：原生 CSS（禁用 Tailwind CSS）
- **圖示庫**：lucide-vue-next
- **狀態管理**：Vue 3 Composition API
- **測試**：無（根據憲章）

### 專案結構確認

```
src/
├── components/
│   ├── layout/          # 4 個佈局元件
│   ├── sections/        # 5 個內容區塊元件
│   └── common/          # 2 個共用元件
├── composables/         # useNavigation.js
├── data/                # 3 個資料檔案
├── styles/              # 4 個 CSS 檔案
├── App.vue
└── main.js
```

### 下一步

執行 `/speckit.tasks` 產生任務清單，開始實作。

**預估工作量**：
- 佈局元件：4-6 小時
- 內容元件：6-8 小時
- 樣式與響應式：4-6 小時
- 資料整合：2-3 小時
- 總計：約 16-23 小時

**建議實作順序**：
1. Phase 1: Setup（建立專案結構）
2. Phase 2: Foundational（樣式系統與資料）
3. Phase 3: User Story 1（MVP - 基本導覽與內容）
4. Phase 4-6: User Stories 2-4（進階內容區塊）
5. Phase 7: Polish（優化與調整）

---

## 實作修正記錄

### 2025-10-07 內容與設計調整

**修正項目**：

1. **圖示庫確認**：
   - 使用 `lucide-vue-next` 版本 0.545.0
   - 已安裝並整合至專案中
   - 使用方式：`import { IconName } from 'lucide-vue-next'`
   - 主要使用的圖示：`Menu`（漢堡選單）、`Github`（GitHub 連結）、`ExternalLink`（外部連結）、`Copy`（複製）、`Check`（已複製）

2. **編輯器說明修正**：
   - **原內容**：「Spec Kit 是 Cascade AI 編輯器的內建功能」
   - **修正為**：「Spec Kit 是支援的 AI 編輯器的內建功能，只要你使用支援 Spec Kit 的編輯器（如 Cascade、Windsurf 等），就能直接使用」
   - **影響範圍**：`src/data/contentData.js` 中的 `how-to-install` 區塊
   - **理由**：Spec Kit 不僅限於 Cascade，也支援其他 AI 編輯器

3. **移除 Emoji**：
   - **原導覽項目**：包含 emoji（📦、⚙️、📐、🧭、📘）
   - **修正為**：純文字導覽項目
   - **影響檔案**：
     - `src/data/navigationItems.js` - 移除所有導覽項目的 emoji
     - `src/components/sections/WhatIsSpecKit.vue` - 簡化連結顯示結構
     - `src/components/sections/HowToInstall.vue` - 簡化連結顯示結構
   - **理由**：提升專業性與可訪問性，避免 emoji 在不同裝置上顯示不一致

**修正後的導覽項目**：
- Spec Kit 是什麼
- 如何安裝
- 為何結合 Storybook
- SDD 開發五大原則
- 使用者指引範例

**技術細節**：
- 所有修正符合專案憲章要求
- 保持正體中文介面
- 維持響應式設計
- 無需額外依賴

**驗證方式**：
- 檢查導覽列顯示是否為純文字
- 確認「如何安裝」頁面說明文字正確
- 測試所有圖示功能正常運作（GitHub 按鈕、複製按鈕、外部連結圖示）

4. **新增導覽圖示**：
   - **原設計**：純文字導覽項目（移除 emoji 後）
   - **改進為**：使用 lucide-vue-next 圖示搭配文字
   - **影響檔案**：
     - `src/data/navigationItems.js` - 新增 `icon` 屬性
     - `src/components/common/NavItem.vue` - 動態渲染圖示元件
   - **圖示對應**：
     - Package（包裹）→ Spec Kit 是什麼
     - Settings（設定）→ 如何安裝
     - Layers（圖層）→ 為何結合 Storybook
     - Compass（指南針）→ SDD 開發五大原則
     - BookOpen（開啟的書）→ 使用者指引範例
   - **理由**：提升視覺識別度，保持專業外觀，使用向量圖示確保跨裝置一致性

**技術實作細節**：
- 使用動態元件載入：`import * as LucideIcons from 'lucide-vue-next'`
- 圖示大小：20px
- 圖示透明度：一般 0.8，選中時 1.0
- 圖示與文字間距：`var(--spacing-sm)`

5. **更新 .gitignore**：
   - **新增項目**：`.specify` 和 `.windsurf` 目錄
   - **影響檔案**：`.gitignore`
   - **理由**：這些是 Spec Kit 和編輯器的工作目錄，包含臨時檔案和本地設定，不應納入版本控制
   - **說明**：確保專案倉庫保持乾淨，只包含必要的原始碼和文件

6. **修正 SDD 五大階段**：
   - **原內容**：/specify、/plan、/task、/implement、/readme
   - **修正為**：/constitution、/specify、/plan、/task、/implement
   - **影響檔案**：
     - `README.md` - 更新專案簡介
     - `src/data/ssdPhases.js` - 更新五大階段資料
     - `src/data/contentData.js` - 更新使用者指引範例
   - **變更說明**：
     - 第一階段改為 `/constitution`（建立專案憲章）
     - 移除 `/readme` 階段
     - 調整階段順序與說明
   - **理由**：正確反映 Spec Kit 的實際開發流程，專案憲章是開發的第一步

7. **內容全面增強**：
   - **影響範圍**：所有內容區塊（5 個導覽項目）
   - **增強內容**：
     - **Spec Kit 是什麼**：
       - 新增「先思考，再動手」核心理念說明
       - 擴充核心價值說明（6 項）
       - 新增 SDD 精神詳細說明（6 項優點）
       - 新增「與傳統開發方式的差異」對照表
       - 擴充適用場景（6 種情境）
       - 新增「誰適合使用 Spec Kit」說明
     - **如何安裝**：
       - 新增支援的編輯器列表
       - 新增前置需求詳細說明
       - 新增「第一次使用建議」（5 步驟）
       - 擴充專案憲章說明（5 項內容）
       - 新增常見問題（4 個 Q&A）
     - **SDD 開發五大原則**：
       - 新增「為什麼需要 SDD」說明
       - 新增 SDD 核心原則（5 項）
       - 保留五大階段卡片展示
     - **為何結合 Storybook**：
       - 新增 Storybook 簡介
       - 擴充結合優勢說明（6 項）
       - 新增實際應用場景詳細說明
       - 新增團隊協作最佳實踐（6 步驟）
       - 新增實際案例（登入表單範例）
       - 新增 Storybook 安裝指引
       - 新增總結說明
     - **使用者指引範例**：
       - 擴充常見問題（6 個 Q&A）
       - 新增進階技巧（3 項）
       - 新增學習資源
       - 新增總結（5 項優勢）
   - **內容特色**：
     - 所有內容使用正體中文
     - 結構清晰，層次分明
     - 包含實際範例與程式碼
     - 提供實用建議與最佳實踐
     - 回答常見問題
   - **理由**：提供更完整、詳細的學習資源，讓使用者能深入理解 Spec Kit 與 SDD 開發流程

8. **實作 Accordion 元件**：
   - **新增元件**：
     - `src/components/common/Accordion.vue` - 單一摺疊面板元件
     - `src/components/common/AccordionGroup.vue` - 摺疊面板群組元件
   - **應用範圍**：
     - `src/components/sections/HowToInstall.vue` - 常見問題區塊（4 個問題）
     - `src/components/sections/UserGuide.vue` - 常見問題區塊（6 個問題）
   - **功能特色**：
     - 點擊展開/收合
     - 平滑動畫效果
     - 使用 lucide-vue-next 的 ChevronDown 圖示
     - 第一個問題預設展開
     - 支援鍵盤導覽（無障礙設計）
     - 懸停效果與視覺回饋
   - **樣式設計**：
     - 邊框與圓角設計
     - 展開時標題背景變為主色調
     - 圖示旋轉動畫（180度）
     - 內容區域平滑展開/收合
   - **資料管理**：
     - 常見問題資料從 contentData.js 移至元件內部
     - 使用陣列管理問題與答案
     - 支援 HTML 內容渲染
   - **理由**：提升使用者體驗，讓常見問題更易於瀏覽，節省頁面空間，提供更好的互動性
