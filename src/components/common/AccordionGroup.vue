<script setup>
/**
 * AccordionGroup 元件
 * 用於包裝多個 Accordion 元件，提供統一的樣式與間距
 */
</script>

<template>
  <div class="accordion-group">
    <slot></slot>
  </div>
</template>

<style scoped>
.accordion-group {
  margin: var(--spacing-lg) 0;
}

.accordion-group :deep(.accordion:last-child) {
  margin-bottom: 0;
}
</style>
