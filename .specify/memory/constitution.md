<!--
Sync Impact Report:
- Version change: [INITIAL] → 1.0.0
- Modified principles: All principles newly defined
- Added sections: Core Principles, Technology Stack, Documentation Standards, User Experience, Governance
- Removed sections: None (initial creation)
- Templates requiring updates:
  ✅ plan-template.md - Constitution Check section references this file
  ✅ spec-template.md - Requirements align with constitution principles
  ✅ tasks-template.md - Task categorization reflects constitution principles
- Follow-up TODOs: None
-->

# Speckit-Storybook 專案憲章

## 核心原則

### I. JavaScript 優先（強制性）

本專案**必須**使用 JavaScript（ES6+）進行開發，**完全禁止**使用 TypeScript。

**理由**：保持專案簡潔性，降低學習門檻，專注於功能實現而非類型系統。

### II. 測試與程式碼檢查政策

本專案**不需要**撰寫單元測試、整合測試或端對端測試。本專案**不需要**整合 ESLint 或其他程式碼檢查工具。

**理由**：快速原型開發與迭代，減少開發流程複雜度，專注於核心功能交付。

### III. 命名規範（強制性）

所有變數、函式、類別、檔案名稱**必須**使用英文駝峰式命名法（camelCase 或 PascalCase）。

**範例**：
- 變數與函式：`getUserData`, `handleClick`, `isVisible`
- 類別與元件：`UserProfile`, `DataService`, `NavigationBar`
- 檔案名稱：`userService.js`, `HomePage.vue`, `apiClient.js`

**理由**：維持程式碼一致性，符合 JavaScript 生態系統慣例，提升程式碼可讀性。

### IV. 正體中文文件（強制性）

所有專案文件**必須**使用正體中文撰寫，包含但不限於：
- 程式碼註解
- README 與說明文件
- API 文件與技術規格
- 提交訊息與變更日誌
- 開發者指南與使用手冊

**理由**：降低團隊溝通成本，提升文件可讀性與可維護性。

### V. 正體中文使用者介面（強制性）

所有使用者可見的文字內容**必須**使用正體中文，包含但不限於：
- 介面標籤與按鈕文字
- 錯誤訊息與提示訊息
- 表單驗證訊息
- 通知與警告訊息
- 幫助文字與工具提示

**理由**：提供一致的本地化使用者體驗，符合目標使用者語言需求。

### VI. 響應式設計（強制性）

所有使用者介面**必須**具備基本響應式設計能力，確保在不同螢幕尺寸下皆可正常使用。

**最低要求**：
- 支援桌面瀏覽器（1920x1080 及以上）
- 支援平板裝置（768x1024）
- 支援手機裝置（375x667 及以上）
- 使用流式佈局或媒體查詢適配不同螢幕

**理由**：確保跨裝置使用體驗，提升產品可用性與覆蓋範圍。

### VII. 程式碼品質優先

在功能開發過程中，**必須**優先考慮程式碼品質與可維護性：
- 保持函式簡潔，單一職責
- 避免過度嵌套與複雜邏輯
- 使用有意義的變數與函式名稱
- 適當添加註解說明複雜邏輯
- 保持程式碼風格一致性

**理由**：確保長期可維護性，降低技術債務，提升開發效率。

## 技術堆疊

### 必要技術

- **程式語言**：JavaScript（ES6+）
- **前端框架**：Vue 3（根據現有專案）
- **建置工具**：Vite（根據現有專案）
- **樣式方案**：CSS3 / Sass / TailwindCSS（視需求選擇）

### 禁止技術

- **TypeScript**：完全禁止使用
- **測試框架**：不需要整合（Jest, Vitest, Cypress 等）
- **程式碼檢查**：不需要整合（ESLint, Prettier 等）

## 文件標準

### 程式碼註解

- 複雜邏輯**必須**添加正體中文註解說明
- 公開 API 與函式**必須**添加功能說明
- 註解**必須**保持更新，與程式碼同步

### 專案文件

- README.md **必須**包含專案簡介、安裝步驟、使用說明
- 重要功能**必須**提供使用範例
- API 文件**必須**說明參數、回傳值、使用範例

## 使用者體驗

### 語言一致性

- 所有使用者可見文字**必須**使用正體中文
- 錯誤訊息**必須**清晰易懂，提供解決建議
- 介面文字**必須**簡潔明瞭，避免技術術語

### 響應式要求

- 介面佈局**必須**在不同裝置上保持可用性
- 觸控目標**必須**符合最小尺寸要求（44x44px）
- 文字**必須**保持可讀性，避免過小字體

## 治理規範

### 憲章優先級

本憲章為專案最高指導原則，所有開發活動**必須**遵守本憲章規範。如有衝突，以本憲章為準。

### 修訂程序

憲章修訂**必須**經過以下流程：
1. 提出修訂提案，說明修訂理由與影響範圍
2. 團隊討論與評估
3. 達成共識後更新憲章版本
4. 更新相關文件與模板

### 版本控制

憲章版本遵循語義化版本控制：
- **MAJOR**：移除或重新定義核心原則
- **MINOR**：新增原則或擴充現有規範
- **PATCH**：文字修正、澄清說明、非語義變更

### 合規性檢查

所有功能開發**必須**在規劃階段進行憲章合規性檢查，確保符合本憲章所有原則。

**Version**: 1.0.0 | **Ratified**: 2025-10-07 | **Last Amended**: 2025-10-07