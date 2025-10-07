<script setup>
import { ExternalLink, Copy, Check } from 'lucide-vue-next';
import { ref } from 'vue';
import { contentSections } from '../../data/contentData';
import Accordion from '../common/Accordion.vue';
import AccordionGroup from '../common/AccordionGroup.vue';

// 取得內容資料
const content = contentSections['how-to-install'];

// 常見問題資料
const faqs = [
  {
    question: 'Q: Spec Kit 是免費的嗎？',
    answer: 'Spec Kit 本身是開源工具，但需要搭配支援的 AI 編輯器使用。編輯器的收費方式請參考各編輯器的官方說明。'
  },
  {
    question: 'Q: 可以在現有專案中使用 Spec Kit 嗎？',
    answer: '可以！Spec Kit 可以在任何專案中使用，無論是新專案還是現有專案。它會在專案根目錄建立 <code>.specify</code> 目錄來儲存相關文件。'
  },
  {
    question: 'Q: Spec Kit 支援哪些程式語言？',
    answer: 'Spec Kit 支援所有主流程式語言，包括 JavaScript、TypeScript、Python、Java、Go、Rust 等。你可以在專案憲章中指定使用的語言。'
  },
  {
    question: 'Q: 如果不喜歡 Spec Kit 產生的內容怎麼辦？',
    answer: '所有產生的文件都是純文字檔案，你可以隨時手動編輯。Spec Kit 會尊重你的修改，不會覆蓋已修改的內容。'
  }
];

// 複製狀態
const copiedIndex = ref(null);

/**
 * 複製程式碼到剪貼簿
 * @param {string} code - 要複製的程式碼
 * @param {number} index - 程式碼範例的索引
 */
const copyCode = async (code, index) => {
  try {
    await navigator.clipboard.writeText(code);
    copiedIndex.value = index;
    
    // 2 秒後重置複製狀態
    setTimeout(() => {
      copiedIndex.value = null;
    }, 2000);
  } catch (err) {
    console.error('複製失敗:', err);
  }
};
</script>

<template>
  <article class="content-section">
    <h1>{{ content.title }}</h1>
    
    <!-- 使用 v-html 渲染 HTML 內容 -->
    <div v-html="content.content"></div>
    
    <!-- 程式碼範例 -->
    <div v-if="content.codeExamples && content.codeExamples.length > 0" class="code-examples">
      <div 
        v-for="(example, index) in content.codeExamples" 
        :key="index"
        class="code-example"
      >
        <div class="code-example__header">
          <span class="code-example__language">{{ example.language }}</span>
          <button 
            class="code-example__copy-btn"
            @click="copyCode(example.code, index)"
            :aria-label="copiedIndex === index ? '已複製' : '複製程式碼'"
          >
            <Check v-if="copiedIndex === index" :size="16" />
            <Copy v-else :size="16" />
            <span>{{ copiedIndex === index ? '已複製' : '複製' }}</span>
          </button>
        </div>
        <pre class="code-example__code"><code>{{ example.code }}</code></pre>
        <p v-if="example.description" class="code-example__description">
          {{ example.description }}
        </p>
      </div>
    </div>
    
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
          <p v-html="faq.answer"></p>
        </Accordion>
      </AccordionGroup>
    </div>
    
    <!-- 相關連結 -->
    <div v-if="content.links && content.links.length > 0" class="content-links">
      <h3>相關連結</h3>
      <ul class="links-list">
        <li v-for="link in content.links" :key="link.url">
          <a 
            :href="link.url" 
            :target="link.external ? '_blank' : '_self'"
            :rel="link.external ? 'noopener noreferrer' : undefined"
            class="link-item"
          >
            {{ link.text }}
            <ExternalLink v-if="link.external" :size="16" />
          </a>
          <p v-if="link.description" class="link-description">
            {{ link.description }}
          </p>
        </li>
      </ul>
    </div>
  </article>
</template>

<style scoped>
.code-examples {
  margin-top: var(--spacing-xl);
}

.code-example {
  margin-bottom: var(--spacing-lg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.code-example__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--color-bg-secondary);
  border-bottom: 1px solid var(--color-border);
}

.code-example__language {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-light);
  text-transform: uppercase;
}

.code-example__copy-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-sm);
  color: var(--color-text);
  background-color: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.code-example__copy-btn:hover {
  background-color: var(--color-bg);
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.code-example__code {
  margin: 0;
  padding: var(--spacing-md);
  background-color: var(--color-bg);
  overflow-x: auto;
}

.code-example__code code {
  font-family: 'Courier New', Courier, monospace;
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
}

.code-example__description {
  padding: var(--spacing-sm) var(--spacing-md);
  margin: 0;
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  background-color: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
}

.content-links {
  margin-top: var(--spacing-xl);
  padding: var(--spacing-lg);
  background-color: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}

.content-links h3 {
  margin-top: 0;
  margin-bottom: var(--spacing-md);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
}

.links-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.links-list li {
  margin-bottom: var(--spacing-md);
}

.links-list li:last-child {
  margin-bottom: 0;
}

.link-item {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.link-item:hover {
  color: var(--color-primary-hover);
  text-decoration: underline;
}

.link-description {
  margin-top: var(--spacing-xs);
  margin-bottom: 0;
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}
</style>
