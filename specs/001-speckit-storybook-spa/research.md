# Research: Speckit-Storybook 教學網站

**Date**: 2025-10-07  
**Feature**: Speckit-Storybook 教學網站  
**Phase**: 0 - 技術研究與決策

## 研究目標

解決技術背景中的所有未知項目，並為實作階段提供明確的技術決策與最佳實踐指引。

## 技術決策

### 1. 前端框架選擇：Vue 3

**決策**：使用 Vue 3 Composition API

**理由**：
- 專案已使用 Vue 3 + Vite 作為基礎（根據現有 README.md）
- Composition API 提供更好的邏輯組織與程式碼重用
- 符合專案憲章的 JavaScript 優先原則（無需 TypeScript）
- 學習曲線平緩，適合快速開發

**替代方案**：
- React：需要額外學習 JSX，且專案已有 Vue 基礎
- Svelte：雖然簡潔，但生態系統較小，且需要重新建置專案
- 原生 JavaScript：開發效率較低，缺乏元件化支援

### 2. 樣式方案：原生 CSS

**決策**：使用原生 CSS，搭配 CSS 變數與模組化結構

**理由**：
- 使用者明確要求禁止使用 Tailwind CSS
- 原生 CSS 提供最大的控制彈性與樣式精準度
- 使用 CSS 變數（Custom Properties）管理主題色彩與間距
- 將樣式分層為 reset.css、variables.css、layout.css、responsive.css

**最佳實踐**：
```css
/* variables.css - 定義全域變數 */
:root {
  --color-primary: #2563eb;
  --color-text: #1f2937;
  --spacing-unit: 8px;
  --header-height: 64px;
  --sidebar-width: 280px;
}

/* 響應式斷點 */
@media (max-width: 768px) {
  :root {
    --sidebar-width: 100%;
  }
}
```

**替代方案**：
- Tailwind CSS：已被明確禁止
- Sass/SCSS：增加建置複雜度，原生 CSS 已足夠
- CSS-in-JS：不符合關注點分離原則

### 3. 圖示庫：lucide-vue

**決策**：使用 lucide-vue 作為圖示庫

**理由**：
- 使用者明確指定使用 lucide-vue
- 提供豐富的現代化圖示集
- 與 Vue 3 完美整合
- 支援樹搖（Tree-shaking），減少打包體積

**使用方式**：
```javascript
// 統一從 lucide-vue 匯入
import { Menu, Github, Book, Settings } from 'lucide-vue-next';
```

**替代方案**：
- Font Awesome：體積較大，且使用者已指定 lucide-vue
- Material Icons：風格不符合現代技術文件風格
- 自製 SVG：開發成本高，且缺乏一致性

### 4. 導覽實作方式

**決策**：使用錨點（Anchor）切換內容區塊，不使用 Vue Router

**理由**：
- 單頁式應用，無需多頁路由
- 錨點方式簡單直觀，符合使用者預期
- 減少依賴，降低專案複雜度
- 支援瀏覽器前進/後退功能

**實作方式**：
```javascript
// useNavigation.js
export function useNavigation() {
  const activeSection = ref('what-is-spec-kit');
  
  const navigateTo = (sectionId) => {
    activeSection.value = sectionId;
    // 更新 URL hash，支援瀏覽器歷史
    window.location.hash = sectionId;
  };
  
  return { activeSection, navigateTo };
}
```

**替代方案**：
- Vue Router：對於單頁應用過於複雜
- 手動 DOM 操作：不符合 Vue 響應式設計原則

### 5. 響應式設計策略

**決策**：使用 CSS Media Queries + Flexbox/Grid 實作響應式佈局

**理由**：
- 原生支援，無需額外依賴
- 效能優異，瀏覽器原生優化
- 符合現代 CSS 最佳實踐

**斷點定義**：
```css
/* 手機 */
@media (max-width: 767px) {
  /* Sidebar 轉為漢堡選單 */
  /* 單欄佈局 */
}

/* 平板 */
@media (min-width: 768px) and (max-width: 1023px) {
  /* Sidebar 可收合 */
  /* 雙欄佈局 */
}

/* 桌面 */
@media (min-width: 1024px) {
  /* Sidebar 固定顯示 */
  /* 完整佈局 */
}
```

**替代方案**：
- Bootstrap Grid：增加不必要的依賴
- Tailwind 響應式類別：已被禁止使用

### 6. 狀態管理

**決策**：使用 Vue 3 Composition API 的 `ref` 和 `reactive`，不使用 Vuex/Pinia

**理由**：
- 應用狀態簡單（僅需追蹤當前導覽項目）
- Composition API 已足夠處理狀態共享
- 減少依賴，降低學習成本

**實作方式**：
```javascript
// composables/useNavigation.js
import { ref, computed } from 'vue';

const activeSection = ref('what-is-spec-kit');

export function useNavigation() {
  const navigateTo = (sectionId) => {
    activeSection.value = sectionId;
  };
  
  return { activeSection, navigateTo };
}
```

**替代方案**：
- Pinia：對於簡單狀態過於複雜
- Vuex：已被 Pinia 取代，且不適合小型應用

### 7. 內容資料管理

**決策**：使用 JavaScript 物件儲存靜態內容資料

**理由**：
- 內容為靜態資料，無需後端 API
- 易於維護與更新
- 支援正體中文內容
- 可輕鬆擴充新的內容區塊

**資料結構**：
```javascript
// data/contentData.js
export const contentSections = {
  'what-is-spec-kit': {
    title: '📦 Spec Kit 是什麼',
    content: `
      Spec Kit 是一個...
    `,
    links: [
      { text: 'GitHub Repository', url: 'https://github.com/github/spec-kit' }
    ]
  },
  // ... 其他區塊
};
```

**替代方案**：
- Markdown 檔案：需要額外的 Markdown 解析器
- JSON 檔案：JavaScript 物件更靈活，且支援函式
- 後端 API：純靜態網站，無需後端

### 8. 效能優化策略

**決策**：使用 Vite 的內建優化功能 + 程式碼分割

**理由**：
- Vite 提供快速的開發體驗與優化的生產建置
- 自動程式碼分割與樹搖
- 原生 ES 模組支援

**優化措施**：
1. **懶載入內容元件**：使用 Vue 的 `defineAsyncComponent`
2. **圖示按需載入**：僅匯入使用的 lucide-vue 圖示
3. **CSS 最小化**：Vite 自動處理
4. **圖片優化**：使用適當的圖片格式與尺寸

```javascript
// 懶載入範例
const WhatIsSpecKit = defineAsyncComponent(() =>
  import('./components/sections/WhatIsSpecKit.vue')
);
```

**替代方案**：
- Webpack：設定複雜，Vite 已足夠
- 手動優化：Vite 已提供自動優化

## 開發工作流程

### 本地開發

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建置生產版本
npm run build

# 預覽生產建置
npm run preview
```

### 依賴安裝

```bash
# 核心依賴（已存在）
npm install vue@^3.0.0

# 圖示庫
npm install lucide-vue-next
```

## 設計參考

根據使用者需求，參考以下技術文件風格：

1. **GitHub Docs** (https://docs.github.com)
   - 清晰的側邊欄導覽
   - 簡潔的內容呈現
   - 優秀的響應式設計

2. **Vite** (https://vitejs.dev)
   - 現代化的視覺風格
   - 清楚的程式碼範例
   - 快速的導覽體驗

3. **Nuxt** (https://nuxt.com)
   - 優雅的配色方案
   - 直觀的資訊架構
   - 專業的技術文件風格

### 視覺設計原則

- **簡潔優先**：避免花俏動畫，專注內容呈現
- **易讀性**：使用適當的字體大小與行高
- **一致性**：統一的間距、顏色與元件風格
- **可訪問性**：確保足夠的對比度與觸控目標大小

## 技術風險評估

| 風險項目 | 影響程度 | 緩解措施 |
|---------|---------|---------|
| 瀏覽器相容性 | 低 | 使用現代瀏覽器標準功能，避免實驗性 API |
| 效能問題 | 低 | Vite 自動優化，內容為靜態資料 |
| 響應式佈局複雜度 | 中 | 使用 Flexbox/Grid，逐步測試各裝置 |
| 內容維護 | 低 | 資料集中管理於 data/ 目錄 |

## 下一步

Phase 1 將產出：
1. **data-model.md**：定義導覽項目、內容區塊等資料結構
2. **quickstart.md**：開發者快速開始指南
3. **contracts/**：（本專案無 API，此目錄可省略）

所有技術決策已明確，可進入 Phase 1 設計階段。
