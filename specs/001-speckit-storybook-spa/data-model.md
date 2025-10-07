# Data Model: Speckit-Storybook 教學網站

**Date**: 2025-10-07  
**Feature**: Speckit-Storybook 教學網站  
**Phase**: 1 - 資料模型設計

## 概述

本文件定義 Speckit-Storybook 教學網站的資料結構。由於本專案為純前端靜態網站，所有資料皆為靜態內容，無需後端資料庫。

## 核心實體

### 1. NavigationItem（導覽項目）

代表 Sidebar 中的一個可點擊導覽項目。

**屬性**：

| 屬性名稱 | 類型 | 必填 | 說明 |
|---------|------|------|------|
| `id` | String | ✅ | 唯一識別碼，用於錨點與內容對應（如 `'what-is-spec-kit'`） |
| `label` | String | ✅ | 顯示文字，包含 emoji 圖示（如 `'📦 Spec Kit 是什麼'`） |
| `icon` | String | ❌ | Lucide 圖示名稱（可選，如需額外圖示） |
| `order` | Number | ✅ | 顯示順序（1-5） |

**範例**：

```javascript
{
  id: 'what-is-spec-kit',
  label: '📦 Spec Kit 是什麼',
  order: 1
}
```

**驗證規則**：
- `id` 必須為小寫英文與連字符組成
- `label` 必須使用正體中文
- `order` 必須為正整數且唯一

**關係**：
- 一個 NavigationItem 對應一個 ContentSection

---

### 2. ContentSection（內容區塊）

代表主要內容區中的一個完整說明區塊。

**屬性**：

| 屬性名稱 | 類型 | 必填 | 說明 |
|---------|------|------|------|
| `id` | String | ✅ | 唯一識別碼，對應 NavigationItem 的 id |
| `title` | String | ✅ | 區塊標題（正體中文） |
| `content` | String | ✅ | 主要內容（支援 HTML 或純文字） |
| `links` | Array<Link> | ❌ | 相關連結列表 |
| `codeExamples` | Array<CodeExample> | ❌ | 程式碼範例列表 |
| `subsections` | Array<Subsection> | ❌ | 子區塊列表（如 SDD 五大階段） |

**範例**：

```javascript
{
  id: 'what-is-spec-kit',
  title: 'Spec Kit 是什麼',
  content: `
    <p>Spec Kit 是一個協助開發團隊...</p>
    <p>它遵循 SDD（Specification-Driven Development）原則...</p>
  `,
  links: [
    {
      text: 'GitHub Repository',
      url: 'https://github.com/github/spec-kit',
      external: true
    }
  ]
}
```

**驗證規則**：
- `id` 必須與 NavigationItem 的 id 對應
- `title` 和 `content` 必須使用正體中文
- `content` 可包含 HTML 標籤，但需確保安全性

**關係**：
- 一個 ContentSection 對應一個 NavigationItem
- 一個 ContentSection 可包含多個 Link
- 一個 ContentSection 可包含多個 CodeExample
- 一個 ContentSection 可包含多個 Subsection

---

### 3. Link（連結）

代表內容區塊中的外部或內部連結。

**屬性**：

| 屬性名稱 | 類型 | 必填 | 說明 |
|---------|------|------|------|
| `text` | String | ✅ | 連結顯示文字（正體中文） |
| `url` | String | ✅ | 連結 URL |
| `external` | Boolean | ❌ | 是否為外部連結（預設 false） |
| `description` | String | ❌ | 連結說明（可選） |

**範例**：

```javascript
{
  text: 'GitHub Repository',
  url: 'https://github.com/github/spec-kit',
  external: true,
  description: '查看 Spec Kit 原始碼與文件'
}
```

**驗證規則**：
- `url` 必須為有效的 URL 格式
- `external` 為 true 時，連結應在新分頁開啟

---

### 4. CodeExample（程式碼範例）

代表內容區塊中的程式碼範例。

**屬性**：

| 屬性名稱 | 類型 | 必填 | 說明 |
|---------|------|------|------|
| `language` | String | ✅ | 程式語言（如 `'bash'`, `'javascript'`） |
| `code` | String | ✅ | 程式碼內容 |
| `description` | String | ❌ | 程式碼說明（正體中文） |
| `filename` | String | ❌ | 檔案名稱（如 `'package.json'`） |

**範例**：

```javascript
{
  language: 'bash',
  code: 'npm install @github/spec-kit',
  description: '使用 npm 安裝 Spec Kit'
}
```

**驗證規則**：
- `language` 必須為支援的程式語言識別碼
- `code` 不可為空字串

---

### 5. Subsection（子區塊）

代表內容區塊中的子章節（如 SDD 五大階段的每個階段）。

**屬性**：

| 屬性名稱 | 類型 | 必填 | 說明 |
|---------|------|------|------|
| `id` | String | ✅ | 子區塊識別碼 |
| `title` | String | ✅ | 子區塊標題（正體中文） |
| `content` | String | ✅ | 子區塊內容 |
| `order` | Number | ✅ | 顯示順序 |

**範例**：

```javascript
{
  id: 'specify',
  title: '/specify - 撰寫功能規格',
  content: `
    <p>使用自然語言描述功能需求...</p>
  `,
  order: 1
}
```

**驗證規則**：
- `order` 必須為正整數
- 同一 ContentSection 下的 Subsection 的 order 不可重複

---

### 6. SsdPhase（SDD 階段）

代表 SDD 開發流程中的一個階段，為 Subsection 的特化版本。

**屬性**：

| 屬性名稱 | 類型 | 必填 | 說明 |
|---------|------|------|------|
| `id` | String | ✅ | 階段識別碼（如 `'specify'`, `'plan'`） |
| `command` | String | ✅ | 命令名稱（如 `'/specify'`） |
| `title` | String | ✅ | 階段標題（正體中文） |
| `purpose` | String | ✅ | 階段用途說明 |
| `operation` | String | ✅ | 操作方式說明 |
| `order` | Number | ✅ | 階段順序（1-5） |

**範例**：

```javascript
{
  id: 'specify',
  command: '/specify',
  title: '撰寫功能規格',
  purpose: '使用自然語言描述功能需求，建立清晰的規格文件',
  operation: '在 Cascade 中輸入 /specify 命令，描述你想要開發的功能',
  order: 1
}
```

**驗證規則**：
- `command` 必須以 `/` 開頭
- `order` 必須為 1-5 之間的整數

---

## 資料關係圖

```
NavigationItem (1) ←→ (1) ContentSection
                              ↓
                              ├─ (0..n) Link
                              ├─ (0..n) CodeExample
                              └─ (0..n) Subsection
                                         ↓
                                         └─ SsdPhase (特化)
```

## 資料儲存位置

所有資料以 JavaScript 模組形式儲存於 `src/data/` 目錄：

```
src/data/
├── navigationItems.js    # NavigationItem 陣列
├── contentData.js        # ContentSection 物件集合
└── ssdPhases.js          # SsdPhase 陣列
```

## 資料範例

### navigationItems.js

```javascript
/**
 * 導覽項目資料
 * 定義 Sidebar 中的所有導覽項目
 */
export const navigationItems = [
  {
    id: 'what-is-spec-kit',
    label: '📦 Spec Kit 是什麼',
    order: 1
  },
  {
    id: 'how-to-install',
    label: '⚙️ 如何安裝',
    order: 2
  },
  {
    id: 'why-storybook',
    label: '📐 為何結合 Storybook',
    order: 3
  },
  {
    id: 'ssd-principles',
    label: '🧭 SDD 開發五大原則',
    order: 4
  },
  {
    id: 'user-guide',
    label: '📘 使用者指引範例',
    order: 5
  }
];
```

### contentData.js

```javascript
/**
 * 內容區塊資料
 * 定義每個導覽項目對應的內容
 */
export const contentSections = {
  'what-is-spec-kit': {
    id: 'what-is-spec-kit',
    title: 'Spec Kit 是什麼',
    content: `
      <h2>Spec Kit 簡介</h2>
      <p>Spec Kit 是一個協助開發團隊實踐規格驅動開發（SDD）的工具集...</p>
      
      <h3>SDD 精神</h3>
      <p>規格驅動開發強調在撰寫程式碼前，先清楚定義功能需求與驗收標準...</p>
    `,
    links: [
      {
        text: 'GitHub Repository',
        url: 'https://github.com/github/spec-kit',
        external: true
      }
    ]
  },
  
  'how-to-install': {
    id: 'how-to-install',
    title: '如何安裝',
    content: `
      <h2>安裝步驟</h2>
      <p>請參考官方 GitHub Repository 的安裝說明...</p>
    `,
    links: [
      {
        text: 'Spec Kit GitHub',
        url: 'https://github.com/github/spec-kit',
        external: true,
        description: '查看完整安裝文件'
      }
    ],
    codeExamples: [
      {
        language: 'bash',
        code: 'npm install @github/spec-kit',
        description: '使用 npm 安裝'
      }
    ]
  },
  
  // ... 其他內容區塊
};
```

### ssdPhases.js

```javascript
/**
 * SDD 五大開發階段資料
 */
export const ssdPhases = [
  {
    id: 'specify',
    command: '/specify',
    title: '撰寫功能規格',
    purpose: '使用自然語言描述功能需求，建立清晰的規格文件',
    operation: '在 Cascade 中輸入 /specify 命令，描述你想要開發的功能',
    order: 1
  },
  {
    id: 'plan',
    command: '/plan',
    title: '建立實作計畫',
    purpose: '根據規格文件，規劃技術架構與實作步驟',
    operation: '執行 /plan 命令，系統會自動產生實作計畫文件',
    order: 2
  },
  {
    id: 'task',
    command: '/task',
    title: '拆解工作項目',
    purpose: '將實作計畫拆解為具體的開發任務',
    operation: '執行 /task 命令，產生可執行的任務清單',
    order: 3
  },
  {
    id: 'implement',
    command: '/implement',
    title: '撰寫程式碼',
    purpose: '根據任務清單，逐步實作功能',
    operation: '執行 /implement 命令，開始撰寫程式碼',
    order: 4
  },
  {
    id: 'readme',
    command: '/readme',
    title: '撰寫文件',
    purpose: '產生專案文件與使用說明',
    operation: '執行 /readme 命令，自動產生文件',
    order: 5
  }
];
```

## 狀態管理

### 應用程式狀態

```javascript
// composables/useNavigation.js
import { ref } from 'vue';

// 全域狀態：當前選中的導覽項目
const activeSection = ref('what-is-spec-kit');

// 全域狀態：Sidebar 是否展開（行動裝置）
const isSidebarOpen = ref(false);

export function useNavigation() {
  const navigateTo = (sectionId) => {
    activeSection.value = sectionId;
    window.location.hash = sectionId;
    
    // 行動裝置上導覽後自動收合 Sidebar
    if (window.innerWidth < 768) {
      isSidebarOpen.value = false;
    }
  };
  
  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };
  
  return {
    activeSection,
    isSidebarOpen,
    navigateTo,
    toggleSidebar
  };
}
```

## 資料流向

```
1. 使用者點擊 Sidebar 導覽項目
   ↓
2. 觸發 navigateTo(sectionId)
   ↓
3. 更新 activeSection 狀態
   ↓
4. MainContent 元件監聽狀態變化
   ↓
5. 根據 activeSection 從 contentSections 取得對應內容
   ↓
6. 渲染對應的 ContentSection 元件
```

## 資料驗證

雖然專案不使用 TypeScript，但應在資料定義時確保：

1. **必填欄位檢查**：所有標記為必填的屬性都有值
2. **類型一致性**：屬性值符合預期類型
3. **唯一性檢查**：id 欄位在同類型實體中唯一
4. **關聯性檢查**：NavigationItem 的 id 與 ContentSection 的 id 對應

可在開發階段使用簡單的驗證函式：

```javascript
// utils/validateData.js
export function validateNavigationItems(items) {
  const ids = new Set();
  
  items.forEach(item => {
    if (!item.id || !item.label || !item.order) {
      console.error('NavigationItem 缺少必填欄位:', item);
    }
    
    if (ids.has(item.id)) {
      console.error('NavigationItem id 重複:', item.id);
    }
    
    ids.add(item.id);
  });
}
```

## 擴充性考量

未來如需新增內容區塊：

1. 在 `navigationItems.js` 新增導覽項目
2. 在 `contentData.js` 新增對應的內容區塊
3. 如需特殊元件，在 `src/components/sections/` 建立新元件
4. 更新 `MainContent.vue` 的元件映射

資料結構設計保持簡單與靈活，便於未來擴充。
