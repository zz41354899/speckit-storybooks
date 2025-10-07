<script setup>
import { computed } from 'vue';
import NavItem from '../common/NavItem.vue';
import { navigationItems } from '../../data/navigationItems';
import { useNavigation } from '../../composables/useNavigation';

// 使用導覽邏輯
const { activeSection, isSidebarOpen, navigateTo, closeSidebar } = useNavigation();

/**
 * 處理導覽項目點擊
 * @param {string} sectionId - 區塊識別碼
 */
const handleNavClick = (sectionId) => {
  navigateTo(sectionId);
};

/**
 * 處理遮罩點擊（關閉 Sidebar）
 */
const handleOverlayClick = () => {
  closeSidebar();
};

// 計算 Sidebar 樣式類別
const sidebarClass = computed(() => ({
  'app-sidebar': true,
  'open': isSidebarOpen.value
}));

// 計算遮罩樣式類別
const overlayClass = computed(() => ({
  'sidebar-overlay': true,
  'visible': isSidebarOpen.value
}));
</script>

<template>
  <!-- Sidebar 遮罩（手機版） -->
  <div 
    :class="overlayClass" 
    @click="handleOverlayClick"
    aria-hidden="true"
  ></div>
  
  <!-- Sidebar -->
  <aside :class="sidebarClass">
    <nav class="app-sidebar__nav" role="navigation" aria-label="主要導覽">
      <NavItem
        v-for="item in navigationItems"
        :key="item.id"
        :item="item"
        :is-active="activeSection === item.id"
        @click="handleNavClick"
      />
    </nav>
  </aside>
</template>

<style scoped>
/* Sidebar 樣式已在 layout.css 和 responsive.css 中定義 */
</style>
