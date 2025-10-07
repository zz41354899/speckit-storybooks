/**
 * SSD 五大開發階段資料
 * 定義 Specification-Driven Development 的五個核心階段
 */
export const ssdPhases = [
  {
    id: 'constitution',
    command: '/constitution',
    title: '建立專案憲章',
    purpose: '定義專案的核心開發規範與原則，包含技術選擇、命名規範、測試策略、文件標準等。確保團隊有一致的開發準則。',
    operation: '執行 /constitution 命令，描述專案的開發規範。例如：「本專案使用 TypeScript，需要撰寫單元測試，所有命名使用駝峰式」。系統會產生專案憲章文件。',
    order: 1
  },
  {
    id: 'specify',
    command: '/specify',
    title: '撰寫功能規格',
    purpose: '使用自然語言描述功能需求，建立清晰的規格文件。透過與 AI 對話，將想法轉化為結構化的功能規格。',
    operation: '在編輯器中輸入 /specify 命令，描述你想要開發的功能。AI 會協助你建立包含使用者故事、功能需求與成功標準的完整規格文件。',
    order: 2
  },
  {
    id: 'plan',
    command: '/plan',
    title: '建立實作計畫',
    purpose: '根據規格文件，規劃技術架構、選擇技術堆疊，並設計專案結構。確保實作方向明確且可行。',
    operation: '執行 /plan 命令，系統會自動分析規格文件，產生包含技術背景、專案結構、資料模型與開發指引的實作計畫。',
    order: 3
  },
  {
    id: 'task',
    command: '/task',
    title: '拆解工作項目',
    purpose: '將實作計畫拆解為具體的開發任務，按優先級與依賴關係組織，讓開發流程清晰可執行。',
    operation: '執行 /task 命令，產生按使用者故事組織的任務清單。每個任務都包含明確的檔案路徑與實作說明。',
    order: 4
  },
  {
    id: 'implement',
    command: '/implement',
    title: '撰寫程式碼',
    purpose: '根據任務清單，逐步實作功能。AI 會協助撰寫程式碼、建立元件、處理邏輯，確保符合規格要求。',
    operation: '執行 /implement 命令，選擇要實作的任務範圍。AI 會按照任務順序，自動建立檔案、撰寫程式碼並整合功能。',
    order: 5
  }
];
