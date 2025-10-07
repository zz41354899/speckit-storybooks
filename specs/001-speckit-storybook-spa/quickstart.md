# Quick Start: Speckit-Storybook 教學網站

**Date**: 2025-10-07  
**Feature**: Speckit-Storybook 教學網站  
**Phase**: 1 - 快速開始指南

## 概述

本指南協助開發者快速建立並執行 Speckit-Storybook 教學網站的開發環境。

## 前置需求

- **Node.js**: 18.0 或以上版本
- **npm**: 9.0 或以上版本
- **現代瀏覽器**: Chrome、Firefox、Safari 或 Edge 最新版本
- **程式碼編輯器**: VS Code、WebStorm 或任何支援 Vue 的編輯器

## 安裝步驟

### 1. 確認專案已存在

專案已使用 Vite + Vue 3 初始化，確認以下檔案存在：

```bash
# 檢查專案結構
ls -la
# 應看到: package.json, vite.config.js, index.html, src/
```

### 2. 安裝依賴套件

```bash
# 安裝所有依賴（包含 Vue 3 與 Vite）
npm install

# 安裝圖示庫
npm install lucide-vue-next
```

### 3. 啟動開發伺服器

```bash
# 啟動 Vite 開發伺服器
npm run dev
```

開發伺服器將在 `http://localhost:5173` 啟動（或其他可用埠號）。

### 4. 開啟瀏覽器

在瀏覽器中開啟顯示的 URL，應該會看到 Vue 3 預設頁面。

## 專案結構建立

### 建立目錄結構

```bash
# 在 src/ 目錄下建立所需資料夾
mkdir -p src/components/layout
mkdir -p src/components/sections
mkdir -p src/components/common
mkdir -p src/composables
mkdir -p src/data
mkdir -p src/styles
```

### 建立樣式檔案

```bash
# 建立 CSS 檔案
touch src/styles/reset.css
touch src/styles/variables.css
touch src/styles/layout.css
touch src/styles/responsive.css
```

## 開發工作流程

### 1. 本地開發

```bash
# 啟動開發伺服器（支援熱模組替換）
npm run dev
```

- 修改程式碼後會自動重新載入
- 瀏覽器會即時反映變更
- 主控台會顯示編譯錯誤（如有）

### 2. 建置生產版本

```bash
# 建置最佳化的生產版本
npm run build
```

建置結果會輸出至 `dist/` 目錄。

### 3. 預覽生產建置

```bash
# 在本地預覽生產建置
npm run preview
```

這會啟動一個靜態檔案伺服器，預覽 `dist/` 目錄的內容。

## 開發指引

### 元件開發順序

建議按以下順序開發元件：

1. **佈局元件**（`src/components/layout/`）
   - `AppHeader.vue` - Header 模組
   - `AppFooter.vue` - Footer 模組
   - `AppSidebar.vue` - Sidebar 側邊欄
   - `MainContent.vue` - 主要內容區

2. **共用元件**（`src/components/common/`）
   - `NavItem.vue` - 導覽項目元件
   - `ContentSection.vue` - 內容區塊包裝元件

3. **內容區塊元件**（`src/components/sections/`）
   - `WhatIsSpecKit.vue` - 📦 Spec Kit 是什麼
   - `HowToInstall.vue` - ⚙️ 如何安裝
   - `WhyStorybook.vue` - 📐 為何結合 Storybook
   - `SsdPrinciples.vue` - 🧭 SDD 開發五大原則
   - `UserGuide.vue` - 📘 使用者指引範例

4. **資料與邏輯**
   - `src/data/navigationItems.js` - 導覽項目資料
   - `src/data/contentData.js` - 內容區塊資料
   - `src/data/ssdPhases.js` - SDD 階段資料
   - `src/composables/useNavigation.js` - 導覽邏輯

5. **樣式**
   - `src/styles/reset.css` - CSS Reset
   - `src/styles/variables.css` - CSS 變數
   - `src/styles/layout.css` - 佈局樣式
   - `src/styles/responsive.css` - 響應式樣式

### 元件開發範本

#### 基本 Vue 元件結構

```vue
<script setup>
// 匯入依賴
import { ref, computed } from 'vue';

// 定義 props（如需要）
const props = defineProps({
  title: {
    type: String,
    required: true
  }
});

// 定義 emits（如需要）
const emit = defineEmits(['click']);

// 響應式資料
const isActive = ref(false);

// 計算屬性
const displayTitle = computed(() => {
  return `📦 ${props.title}`;
});

// 方法
const handleClick = () => {
  isActive.value = !isActive.value;
  emit('click');
};
</script>

<template>
  <div class="component-name">
    <h2>{{ displayTitle }}</h2>
    <button @click="handleClick">點擊</button>
  </div>
</template>

<style scoped>
/* 元件專屬樣式 */
.component-name {
  padding: var(--spacing-unit);
}
</style>
```

### CSS 變數使用

在 `src/styles/variables.css` 定義全域變數：

```css
:root {
  /* 顏色 */
  --color-primary: #2563eb;
  --color-secondary: #64748b;
  --color-text: #1f2937;
  --color-bg: #ffffff;
  --color-border: #e5e7eb;
  
  /* 間距 */
  --spacing-unit: 8px;
  --spacing-xs: calc(var(--spacing-unit) * 1);
  --spacing-sm: calc(var(--spacing-unit) * 2);
  --spacing-md: calc(var(--spacing-unit) * 3);
  --spacing-lg: calc(var(--spacing-unit) * 4);
  --spacing-xl: calc(var(--spacing-unit) * 6);
  
  /* 佈局 */
  --header-height: 64px;
  --sidebar-width: 280px;
  --footer-height: 60px;
  
  /* 字體 */
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-size-base: 16px;
  --font-size-sm: 14px;
  --font-size-lg: 18px;
  --font-size-xl: 24px;
  
  /* 陰影 */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  /* 轉場 */
  --transition-fast: 150ms ease;
  --transition-base: 300ms ease;
}
```

### 響應式設計斷點

在 `src/styles/responsive.css` 使用以下斷點：

```css
/* 手機 (< 768px) */
@media (max-width: 767px) {
  :root {
    --sidebar-width: 100%;
    --font-size-base: 14px;
  }
  
  /* Sidebar 轉為漢堡選單 */
  .sidebar {
    position: fixed;
    transform: translateX(-100%);
    transition: transform var(--transition-base);
  }
  
  .sidebar.open {
    transform: translateX(0);
  }
}

/* 平板 (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  :root {
    --sidebar-width: 240px;
  }
}

/* 桌面 (>= 1024px) */
@media (min-width: 1024px) {
  :root {
    --sidebar-width: 280px;
  }
}
```

## 常見開發任務

### 新增導覽項目

1. 在 `src/data/navigationItems.js` 新增項目：

```javascript
{
  id: 'new-section',
  label: '🎯 新區塊',
  order: 6
}
```

2. 在 `src/data/contentData.js` 新增對應內容：

```javascript
'new-section': {
  id: 'new-section',
  title: '新區塊',
  content: '<p>內容...</p>'
}
```

3. （可選）建立專屬元件 `src/components/sections/NewSection.vue`

### 修改樣式

1. 全域樣式：修改 `src/styles/variables.css` 中的 CSS 變數
2. 佈局樣式：修改 `src/styles/layout.css`
3. 元件樣式：在元件的 `<style scoped>` 區塊中修改

### 除錯技巧

1. **使用 Vue DevTools**：
   - 安裝 Vue DevTools 瀏覽器擴充功能
   - 檢查元件樹狀結構與狀態

2. **主控台除錯**：
   ```javascript
   console.log('當前狀態:', activeSection.value);
   ```

3. **Vite 錯誤訊息**：
   - 開發伺服器會在瀏覽器中顯示編譯錯誤
   - 終端機會顯示詳細錯誤堆疊

## 效能最佳化

### 開發階段

- Vite 提供快速的熱模組替換（HMR）
- 無需額外設定即可享受快速開發體驗

### 生產建置

```bash
# 建置並分析打包大小
npm run build

# 檢查 dist/ 目錄大小
du -sh dist/
```

### 優化建議

1. **懶載入元件**：
   ```javascript
   const HeavyComponent = defineAsyncComponent(() =>
     import('./components/HeavyComponent.vue')
   );
   ```

2. **按需匯入圖示**：
   ```javascript
   // ✅ 好的做法
   import { Menu, Github } from 'lucide-vue-next';
   
   // ❌ 避免
   import * as Icons from 'lucide-vue-next';
   ```

3. **圖片優化**：
   - 使用適當的圖片格式（WebP、AVIF）
   - 提供不同尺寸的響應式圖片

## 部署

### 建置生產版本

```bash
npm run build
```

### 部署至靜態主機

建置完成後，`dist/` 目錄包含所有靜態檔案，可部署至：

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Cloudflare Pages**
- 任何靜態檔案主機

### GitHub Pages 部署範例

```bash
# 建置專案
npm run build

# 部署至 gh-pages 分支
npx gh-pages -d dist
```

## 疑難排解

### 問題：開發伺服器無法啟動

**解決方案**：
```bash
# 清除 node_modules 並重新安裝
rm -rf node_modules package-lock.json
npm install
```

### 問題：樣式未生效

**解決方案**：
1. 確認 CSS 檔案已在 `main.js` 中匯入
2. 檢查 CSS 選擇器是否正確
3. 使用瀏覽器開發者工具檢查樣式是否被覆蓋

### 問題：元件未顯示

**解決方案**：
1. 檢查元件是否正確匯入
2. 確認元件名稱使用 PascalCase
3. 檢查主控台是否有錯誤訊息

## 開發檢查清單

開始開發前，確認以下項目：

- [ ] Node.js 與 npm 版本符合需求
- [ ] 已執行 `npm install` 安裝依賴
- [ ] 已安裝 `lucide-vue-next`
- [ ] 開發伺服器可正常啟動
- [ ] 已建立所需的目錄結構
- [ ] 已建立基本的 CSS 檔案
- [ ] 瀏覽器開發者工具已開啟
- [ ] Vue DevTools 已安裝（建議）

## 程式碼風格指引

### 命名規範

- **元件檔案**：PascalCase（如 `AppHeader.vue`）
- **函式與變數**：camelCase（如 `handleClick`, `activeSection`）
- **常數**：UPPER_SNAKE_CASE（如 `MAX_ITEMS`）
- **CSS 類別**：kebab-case（如 `.nav-item`）

### 註解規範

所有註解必須使用正體中文：

```javascript
// ✅ 好的註解
/**
 * 處理導覽項目點擊事件
 * @param {string} sectionId - 區塊識別碼
 */
const handleNavClick = (sectionId) => {
  // 更新當前選中的區塊
  activeSection.value = sectionId;
};

// ❌ 避免英文註解
// Handle navigation item click
```

### 程式碼組織

```vue
<script setup>
// 1. 匯入
import { ref } from 'vue';

// 2. Props 與 Emits
const props = defineProps({...});
const emit = defineEmits([...]);

// 3. 響應式資料
const data = ref(null);

// 4. 計算屬性
const computed = computed(() => {...});

// 5. 方法
const method = () => {...};

// 6. 生命週期（如需要）
onMounted(() => {...});
</script>
```

## 下一步

完成環境設定後，可以開始：

1. 閱讀 [data-model.md](./data-model.md) 了解資料結構
2. 閱讀 [research.md](./research.md) 了解技術決策
3. 執行 `/speckit.tasks` 產生任務清單
4. 開始實作第一個元件（建議從 `AppHeader.vue` 開始）

祝開發順利！🚀
