<script setup>
import { ref } from 'vue';
import { ChevronDown } from 'lucide-vue-next';

// 定義 props
const props = defineProps({
  // 問題標題
  title: {
    type: String,
    required: true
  },
  // 是否預設展開
  defaultOpen: {
    type: Boolean,
    default: false
  }
});

// 控制展開/收合狀態
const isOpen = ref(props.defaultOpen);

/**
 * 切換展開/收合狀態
 */
const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="accordion">
    <button 
      class="accordion__header"
      :class="{ 'accordion__header--open': isOpen }"
      @click="toggle"
      :aria-expanded="isOpen"
    >
      <span class="accordion__title">{{ title }}</span>
      <ChevronDown 
        :size="20" 
        class="accordion__icon"
        :class="{ 'accordion__icon--open': isOpen }"
      />
    </button>
    
    <div 
      class="accordion__content"
      :class="{ 'accordion__content--open': isOpen }"
    >
      <div class="accordion__body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-sm);
  overflow: hidden;
  transition: all var(--transition-normal);
}

.accordion:hover {
  border-color: var(--color-primary);
}

.accordion__header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md);
  background-color: var(--color-bg-secondary);
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
  text-align: left;
}

.accordion__header:hover {
  background-color: var(--color-border-light);
}

.accordion__header--open {
  background-color: var(--color-primary);
  color: white;
}

.accordion__header--open:hover {
  background-color: var(--color-primary-hover);
}

.accordion__title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  flex: 1;
}

.accordion__icon {
  flex-shrink: 0;
  transition: transform var(--transition-normal);
  opacity: 0.7;
}

.accordion__header--open .accordion__icon {
  opacity: 1;
}

.accordion__icon--open {
  transform: rotate(180deg);
}

.accordion__content {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-normal) ease-out;
}

.accordion__content--open {
  max-height: 1000px;
  transition: max-height var(--transition-normal) ease-in;
}

.accordion__body {
  padding: var(--spacing-md);
  background-color: white;
}

.accordion__body :deep(p) {
  margin-bottom: var(--spacing-sm);
}

.accordion__body :deep(p:last-child) {
  margin-bottom: 0;
}

.accordion__body :deep(ul) {
  margin-left: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
}

.accordion__body :deep(code) {
  background-color: var(--color-bg-secondary);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

/* 焦點樣式（鍵盤導覽） */
.accordion__header:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
</style>
