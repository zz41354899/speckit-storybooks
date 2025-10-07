<script setup>
import { Github, Menu } from 'lucide-vue-next';
import { useNavigation } from '../../composables/useNavigation';

// 使用導覽邏輯
const { toggleSidebar } = useNavigation();

/**
 * 開啟 GitHub Repository
 */
const openGithub = () => {
  window.open('https://github.com/github/spec-kit', '_blank');
};
</script>

<template>
  <header class="app-header">
    <!-- 漢堡選單按鈕（手機版） -->
    <button 
      class="app-header__menu-btn" 
      @click="toggleSidebar"
      aria-label="開啟選單"
    >
      <Menu :size="24" />
    </button>
    
    <!-- Logo -->
    <div class="app-header__logo">
      Speckit-Storybook
    </div>
    
    <!-- 右側操作區 -->
    <div class="app-header__actions">
      <button 
        class="app-header__github-btn" 
        @click="openGithub"
        aria-label="前往 GitHub Repository"
      >
        <Github :size="18" />
        <span>GitHub Repository</span>
      </button>
    </div>
  </header>
</template>

<style scoped>
/* Header 樣式已在 layout.css 中定義 */
</style>
