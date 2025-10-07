<script setup>
import { computed } from 'vue';
import { useNavigation } from '../../composables/useNavigation';

// 匯入內容區塊元件
import WhatIsSpecKit from '../sections/WhatIsSpecKit.vue';
import HowToInstall from '../sections/HowToInstall.vue';
import WhyStorybook from '../sections/WhyStorybook.vue';
import SsdPrinciples from '../sections/SsdPrinciples.vue';
import UserGuide from '../sections/UserGuide.vue';

// 使用導覽邏輯
const { activeSection } = useNavigation();

/**
 * 元件映射表
 * 根據 activeSection 動態顯示對應的內容元件
 */
const componentMap = {
  'what-is-spec-kit': WhatIsSpecKit,
  'how-to-install': HowToInstall,
  'why-storybook': WhyStorybook,
  'ssd-principles': SsdPrinciples,
  'user-guide': UserGuide
};

/**
 * 當前顯示的元件
 */
const currentComponent = computed(() => {
  return componentMap[activeSection.value] || WhatIsSpecKit;
});
</script>

<template>
  <main class="main-content">
    <div class="main-content__section">
      <!-- 動態渲染當前選中的內容元件 -->
      <component :is="currentComponent" />
    </div>
  </main>
</template>

<style scoped>
/* MainContent 樣式已在 layout.css 中定義 */
</style>
