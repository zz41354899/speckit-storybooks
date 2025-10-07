# Speckit-Storybook 教學網站

一個單頁式網站（SPA），作為 Spec Kit 安裝教學與 SSD 開發觀念的整合說明平台。

## 專案簡介

本網站提供完整的 Spec Kit 學習資源，包含：

- **Spec Kit 是什麼**：介紹 Spec Kit 與 SSD 精神
- **如何安裝**：詳細的安裝步驟與快速開始指南
- **為何結合 Storybook**：說明設計與開發協作的最佳實踐
- **SSD 開發五大原則**：完整的開發流程說明（/constitution、/specify、/plan、/task、/implement）
- **使用者指引範例**：實際案例展示

## 技術堆疊

- **前端框架**：Vue 3（Composition API）
- **建置工具**：Vite
- **圖示庫**：lucide-vue-next
- **樣式**：原生 CSS（無 Tailwind CSS）
- **語言**：JavaScript ES6+（無 TypeScript）

## 安裝與執行

### 前置需求

- Node.js 18.0 或以上版本
- npm 9.0 或以上版本

### 安裝步驟

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

## 專案結構

```
src/
├── components/
│   ├── layout/          # 佈局元件（Header、Sidebar、Footer、MainContent）
│   ├── sections/        # 內容區塊元件
│   └── common/          # 共用元件
├── composables/         # Vue Composition API 可組合函式
├── data/                # 靜態資料
├── styles/              # 樣式檔案（原生 CSS）
├── App.vue              # 根元件
└── main.js              # 應用程式入口
```

## 功能特色

- ✅ 響應式設計（支援桌面、平板、手機）
- ✅ 正體中文介面
- ✅ 簡潔現代的視覺風格
- ✅ 流暢的導覽體驗
- ✅ 程式碼範例與複製功能
- ✅ 完整的 SSD 開發流程說明

## 開發規範

本專案遵循以下開發規範：

- 使用 JavaScript ES6+，不使用 TypeScript
- 使用原生 CSS，不使用 Tailwind CSS
- 所有程式碼註解使用正體中文
- 所有使用者介面文字使用正體中文
- 元件與函式使用英文駝峰式命名
- 不撰寫測試，不整合 ESLint

## 部署

建置完成後，`dist/` 目錄包含所有靜態檔案，可部署至：

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- 任何靜態檔案主機

## 授權

本專案為教學用途。

## 相關連結

- [Spec Kit GitHub Repository](https://github.com/github/spec-kit)
- [Vue 3 文件](https://vuejs.org/)
- [Vite 文件](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)
