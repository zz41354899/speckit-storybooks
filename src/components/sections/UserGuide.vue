<script setup>
import { contentSections } from '../../data/contentData';
import Accordion from '../common/Accordion.vue';
import AccordionGroup from '../common/AccordionGroup.vue';

// 取得內容資料
const content = contentSections['user-guide'];

// 常見問題資料
const faqs = [
  {
    question: 'Q: 如果需求不明確怎麼辦？',
    answer: '在 /specify 階段，AI 會詢問澄清問題。你也可以使用 <code>/speckit.clarify</code> 命令，系統會提出最多 5 個針對性問題幫助你釐清需求。建議在需求不明確時，先與團隊討論，再使用 Spec Kit 記錄共識。'
  },
  {
    question: 'Q: 可以跳過某些階段嗎？',
    answer: '不建議跳過。每個階段都有其價值，跳過可能導致後續開發問題。但如果你已有現成的規格或計畫，可以手動建立對應文件，Spec Kit 會讀取這些文件並繼續後續流程。'
  },
  {
    question: 'Q: 如何處理大型專案？',
    answer: `將大型專案拆分為多個功能，每個功能獨立執行 SDD 流程。使用 Git 分支管理不同功能的開發。建議：
      <ul>
        <li>每個功能建立獨立的分支（例如：<code>feature/user-login</code>）</li>
        <li>每個功能有獨立的規格文件目錄（例如：<code>specs/001-user-login/</code>）</li>
        <li>功能完成後合併回主分支，保持主分支穩定</li>
      </ul>`
  },
  {
    question: 'Q: 團隊成員不熟悉 SDD 怎麼辦？',
    answer: `建議從小型專案開始練習，讓團隊成員熟悉流程。可以：
      <ul>
        <li>舉辦內部工作坊，示範完整的 SDD 流程</li>
        <li>建立團隊的最佳實踐文件</li>
        <li>指定一位 SDD 專家協助團隊成員</li>
        <li>定期檢視產生的文件，確保品質</li>
      </ul>`
  },
  {
    question: 'Q: 如何確保產生的程式碼品質？',
    answer: `Spec Kit 產生的程式碼遵循最佳實踐，但仍需要：
      <ul>
        <li>在專案憲章中明確定義程式碼標準</li>
        <li>進行程式碼審查（Code Review）</li>
        <li>撰寫測試確保功能正確</li>
        <li>使用 Linter 與 Formatter 工具</li>
      </ul>`
  },
  {
    question: 'Q: 可以修改 Spec Kit 產生的文件嗎？',
    answer: '可以！所有文件都是純文字檔案，你可以隨時編輯。Spec Kit 會尊重你的修改，不會覆蓋已修改的內容。建議在修改後，確保文件之間的一致性。'
  }
];
</script>

<template>
  <article class="content-section">
    <h1>{{ content.title }}</h1>
    
    <!-- 使用 v-html 渲染 HTML 內容 -->
    <div v-html="content.content"></div>
    
    <!-- 常見問題 Accordion -->
    <div class="faq-section">
      <h3>常見問題</h3>
      <AccordionGroup>
        <Accordion 
          v-for="(faq, index) in faqs" 
          :key="index"
          :title="faq.question"
          :default-open="index === 0"
        >
          <div v-html="faq.answer"></div>
        </Accordion>
      </AccordionGroup>
    </div>
  </article>
</template>

<style scoped>
/* 樣式已在 layout.css 中定義 */
</style>
