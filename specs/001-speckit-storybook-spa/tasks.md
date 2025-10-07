# Tasks: Speckit-Storybook 教學網站

**Input**: Design documents from `/specs/001-speckit-storybook-spa/`  
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md

**憲章提醒**：根據專案憲章，本專案不需要撰寫測試。本任務清單不包含測試相關任務。

**Organization**: Tasks are grouped by user story to enable independent implementation of each story.

## Format: `[ID] [P?] [Story] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

## Path Conventions
- **Single project**: `src/` at repository root
- All paths relative to project root: `speckit-storybooks/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 安裝 lucide-vue-next 圖示庫：執行 `npm install lucide-vue-next`
- [x] T002 [P] 建立目錄結構：`src/components/layout/`, `src/components/sections/`, `src/components/common/`, `src/composables/`, `src/data/`, `src/styles/`
- [x] T003 [P] 建立 CSS 檔案：`src/styles/reset.css`, `src/styles/variables.css`, `src/styles/layout.css`, `src/styles/responsive.css`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 建立 CSS Reset 樣式：在 `src/styles/reset.css` 撰寫基礎重置樣式
- [x] T005 定義 CSS 變數：在 `src/styles/variables.css` 定義顏色、間距、字體、陰影等全域變數
- [x] T006 建立佈局樣式：在 `src/styles/layout.css` 定義 Header、Sidebar、MainContent、Footer 的基礎佈局
- [x] T007 建立響應式樣式：在 `src/styles/responsive.css` 定義手機、平板、桌面三種斷點的響應式規則
- [x] T008 在 `src/main.js` 匯入所有 CSS 檔案
- [x] T009 [P] 建立導覽項目資料：在 `src/data/navigationItems.js` 定義 5 個導覽項目（包含 id、label、order）
- [x] T010 [P] 建立 SSD 階段資料：在 `src/data/ssdPhases.js` 定義 5 個 SSD 開發階段（包含 id、command、title、purpose、operation、order）
- [x] T011 建立導覽邏輯 composable：在 `src/composables/useNavigation.js` 實作 `activeSection`、`isSidebarOpen`、`navigateTo`、`toggleSidebar` 函式

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - 快速了解 Spec Kit 與安裝 (Priority: P1) 🎯 MVP

**Goal**: 使用者能在 5 分鐘內了解 Spec Kit 並找到安裝方式

**Independent Test**: 使用者開啟網站後，能夠在首頁看到 Spec Kit 簡介，點擊「如何安裝」區塊後看到安裝步驟與 GitHub 連結，並能成功導向 GitHub Repository

### Implementation for User Story 1

- [x] T012 [P] [US1] 建立 AppHeader 元件：在 `src/components/layout/AppHeader.vue` 建立 Header，包含 Logo 與 GitHub Repository 按鈕
- [x] T013 [P] [US1] 建立 AppFooter 元件：在 `src/components/layout/AppFooter.vue` 建立 Footer，顯示專案名稱與年份
- [x] T014 [P] [US1] 建立 NavItem 共用元件：在 `src/components/common/NavItem.vue` 建立導覽項目元件，支援高亮與點擊事件
- [x] T015 [US1] 建立 AppSidebar 元件：在 `src/components/layout/AppSidebar.vue` 建立 Sidebar，使用 NavItem 元件渲染導覽列表，整合 useNavigation
- [x] T016 [US1] 建立 MainContent 元件：在 `src/components/layout/MainContent.vue` 建立主要內容區，根據 activeSection 動態顯示對應內容
- [x] T017 [P] [US1] 建立「Spec Kit 是什麼」內容資料：在 `src/data/contentData.js` 新增 `what-is-spec-kit` 區塊資料（包含標題、內容、連結）
- [x] T018 [P] [US1] 建立「如何安裝」內容資料：在 `src/data/contentData.js` 新增 `how-to-install` 區塊資料（包含安裝步驟、GitHub 連結、程式碼範例）
- [x] T019 [P] [US1] 建立 WhatIsSpecKit 內容元件：在 `src/components/sections/WhatIsSpecKit.vue` 建立「📦 Spec Kit 是什麼」內容區塊
- [x] T020 [P] [US1] 建立 HowToInstall 內容元件：在 `src/components/sections/HowToInstall.vue` 建立「⚙️ 如何安裝」內容區塊
- [x] T021 [US1] 更新 App.vue：整合 AppHeader、AppSidebar、MainContent、AppFooter 四大佈局元件
- [x] T022 [US1] 實作錨點導覽功能：在 MainContent 元件中監聽 activeSection 變化，根據 URL hash 顯示對應內容
- [x] T023 [US1] 實作 Header GitHub 按鈕功能：確保點擊後在新分頁開啟 https://github.com/github/spec-kit
- [x] T024 [US1] 實作 Sidebar 響應式行為：在手機裝置上支援漢堡選單切換

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently. 使用者可以看到完整的網站架構，瀏覽「Spec Kit 是什麼」與「如何安裝」兩個區塊。

---

## Phase 4: User Story 2 - 理解 SSD 五大開發階段 (Priority: P2)

**Goal**: 使用者能深入學習 SSD 開發流程的五個階段

**Independent Test**: 使用者點擊「🧭 SSD 開發五大原則」後，能夠看到 /specify、/plan、/task、/implement、/readme 五個階段的詳細說明

### Implementation for User Story 2

- [x] T025 [US2] 建立「SSD 開發五大原則」內容資料：在 `src/data/contentData.js` 新增 `ssd-principles` 區塊資料，整合 `ssdPhases.js` 的五個階段
- [x] T026 [US2] 建立 SsdPrinciples 內容元件：在 `src/components/sections/SsdPrinciples.vue` 建立「🧭 SSD 開發五大原則」內容區塊，依序顯示五個階段
- [x] T027 [US2] 為每個 SSD 階段建立子元件或區塊：在 SsdPrinciples 元件中，為每個階段顯示階段名稱、用途說明、操作方式
- [x] T028 [US2] 確保 SSD 內容在手機裝置上正常顯示：調整 SsdPrinciples 元件的響應式樣式

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently. 使用者可以完整瀏覽 SSD 五大開發階段的說明。

---

## Phase 5: User Story 3 - 了解 Storybook 整合價值 (Priority: P3)

**Goal**: 使用者理解為何要結合 Storybook，以及對團隊協作的好處

**Independent Test**: 使用者點擊「📐 為何結合 Storybook」後，能夠看到清楚的說明

### Implementation for User Story 3

- [x] T029 [US3] 建立「為何結合 Storybook」內容資料：在 `src/data/contentData.js` 新增 `why-storybook` 區塊資料（包含設計與開發共用視覺規格的重要性、Storybook 視覺化 SSD 文件、團隊協作好處）
- [x] T030 [US3] 建立 WhyStorybook 內容元件：在 `src/components/sections/WhyStorybook.vue` 建立「📐 為何結合 Storybook」內容區塊

**Checkpoint**: At this point, User Stories 1, 2 AND 3 should all work independently. 使用者可以理解 Storybook 整合的價值。

---

## Phase 6: User Story 4 - 查看完整實作範例 (Priority: P4)

**Goal**: 使用者看到完整的實際案例，從 /specify 到 /readme 的完整流程示範

**Independent Test**: 使用者點擊「📘 使用者指引範例」後，能夠看到一個完整的專案範例

### Implementation for User Story 4

- [x] T031 [US4] 建立「使用者指引範例」內容資料：在 `src/data/contentData.js` 新增 `user-guide` 區塊資料（包含完整的五個階段實際輸出範例）
- [x] T032 [US4] 建立 UserGuide 內容元件：在 `src/components/sections/UserGuide.vue` 建立「📘 使用者指引範例」內容區塊
- [x] T033 [US4] 為範例內容新增程式碼區塊樣式：確保程式碼範例在不同裝置上都能正常顯示且易於閱讀
- [x] T034 [US4] 建立 ContentSection 共用元件（可選）：在 `src/components/common/ContentSection.vue` 建立內容區塊包裝元件，統一內容區塊的樣式與結構

**Checkpoint**: All user stories should now be independently functional. 使用者可以查看完整的實作範例。

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T035 [P] 優化 CSS 變數與主題：檢查並統一所有元件的顏色、間距使用，確保一致性
- [ ] T036 [P] 優化響應式設計：測試所有元件在手機、平板、桌面三種裝置上的顯示效果
- [ ] T037 [P] 新增平滑滾動效果：為內容切換新增平滑過渡動畫
- [ ] T038 [P] 優化 Sidebar 漢堡選單動畫：為手機版 Sidebar 新增滑入/滑出動畫
- [ ] T039 處理邊界案例：實作不存在錨點 URL 的預設行為（顯示 Spec Kit 簡介）
- [ ] T040 處理邊界案例：確保快速連續點擊 Sidebar 項目時內容切換流暢
- [ ] T041 [P] 新增 Loading 狀態（可選）：為懶載入元件新增載入指示器
- [ ] T042 [P] 優化效能：檢查並實作元件懶載入（使用 defineAsyncComponent）
- [ ] T043 [P] 新增 favicon 與網站 meta 資訊：更新 `index.html` 與 `public/favicon.ico`
- [x] T044 [P] 撰寫 README.md：使用正體中文撰寫專案說明、安裝步驟、開發指引
- [x] T045 程式碼審查與註解補充：確保所有元件都有清楚的正體中文註解，說明用途與資料流向
- [ ] T046 最終測試：在不同瀏覽器與裝置上測試所有功能

**額外完成的改進**：
- [x] 新增導覽圖示：為 Sidebar 導覽項目添加 lucide-vue-next 圖示
- [x] 更新 .gitignore：排除 `.specify` 和 `.windsurf` 目錄

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-6)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3 → P4)
- **Polish (Phase 7)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Builds on US1 layout but independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Independently testable
- **User Story 4 (P4)**: Can start after Foundational (Phase 2) - Independently testable

### Within Each User Story

- Models/Data before components
- Shared components before specific components
- Layout components before content components
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- **Phase 1 (Setup)**: All 3 tasks can run in parallel
- **Phase 2 (Foundational)**: T004-T007 (CSS files) can run in parallel, T009-T010 (data files) can run in parallel
- **Phase 3 (US1)**: T012-T014 can run in parallel, T017-T018 can run in parallel, T019-T020 can run in parallel
- **Once Foundational phase completes**, all user stories (Phase 3-6) can start in parallel if team capacity allows
- **Phase 7 (Polish)**: Most tasks marked [P] can run in parallel

---

## Parallel Example: User Story 1

```bash
# Launch layout components together:
Task: "建立 AppHeader 元件 in src/components/layout/AppHeader.vue"
Task: "建立 AppFooter 元件 in src/components/layout/AppFooter.vue"
Task: "建立 NavItem 共用元件 in src/components/common/NavItem.vue"

# Launch data files together:
Task: "建立「Spec Kit 是什麼」內容資料 in src/data/contentData.js"
Task: "建立「如何安裝」內容資料 in src/data/contentData.js"

# Launch content components together:
Task: "建立 WhatIsSpecKit 內容元件 in src/components/sections/WhatIsSpecKit.vue"
Task: "建立 HowToInstall 內容元件 in src/components/sections/HowToInstall.vue"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Add User Story 4 → Test independently → Deploy/Demo
6. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
   - Developer D: User Story 4
3. Stories complete and integrate independently

---

## Task Summary

**Total Tasks**: 46

**Tasks by Phase**:
- Phase 1 (Setup): 3 tasks
- Phase 2 (Foundational): 8 tasks
- Phase 3 (User Story 1): 13 tasks
- Phase 4 (User Story 2): 4 tasks
- Phase 5 (User Story 3): 2 tasks
- Phase 6 (User Story 4): 4 tasks
- Phase 7 (Polish): 12 tasks

**Tasks by User Story**:
- US1 (P1): 13 tasks - MVP 核心功能
- US2 (P2): 4 tasks - SSD 開發流程說明
- US3 (P3): 2 tasks - Storybook 整合說明
- US4 (P4): 4 tasks - 實作範例展示

**Parallel Opportunities**: 21 tasks marked [P] can run in parallel

**Suggested MVP Scope**: Phase 1 + Phase 2 + Phase 3 (User Story 1) = 24 tasks

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
- 所有程式碼註解必須使用正體中文
- 所有使用者介面文字必須使用正體中文
- 禁止使用 TypeScript 與 Tailwind CSS
- 不需要撰寫測試
