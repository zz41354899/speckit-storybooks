<script setup>
import { computed } from 'vue';
import * as LucideIcons from 'lucide-vue-next';

// 定義 props
const props = defineProps({
  // 導覽項目資料
  item: {
    type: Object,
    required: true
  },
  // 是否為當前選中項目
  isActive: {
    type: Boolean,
    default: false
  }
});

// 定義 emits
const emit = defineEmits(['click']);

/**
 * 處理點擊事件
 */
const handleClick = () => {
  emit('click', props.item.id);
};

// 計算樣式類別
const navItemClass = computed(() => ({
  'nav-item': true,
  'nav-item--active': props.isActive
}));

/**
 * 取得對應的圖示元件
 */
const iconComponent = computed(() => {
  if (props.item.icon && LucideIcons[props.item.icon]) {
    return LucideIcons[props.item.icon];
  }
  return null;
});
</script>

<template>
  <button 
    :class="navItemClass" 
    @click="handleClick"
    :aria-current="isActive ? 'page' : undefined"
  >
    <component 
      v-if="iconComponent" 
      :is="iconComponent" 
      :size="20" 
      class="nav-item__icon"
    />
    <span class="nav-item__label">{{ item.label }}</span>
  </button>
</template>

<style scoped>
.nav-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-text);
  background-color: transparent;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  cursor: pointer;
}

.nav-item:hover {
  background-color: var(--color-border-light);
}

.nav-item--active {
  background-color: var(--color-primary);
  color: white;
  font-weight: var(--font-weight-medium);
}

.nav-item--active:hover {
  background-color: var(--color-primary-hover);
}

.nav-item__icon {
  flex-shrink: 0;
  opacity: 0.8;
}

.nav-item--active .nav-item__icon {
  opacity: 1;
}

.nav-item__label {
  flex: 1;
}

/* 焦點樣式（鍵盤導覽） */
.nav-item:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
</style>
