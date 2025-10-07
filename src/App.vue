<script setup>
// 匯入佈局元件
import AppHeader from './components/layout/AppHeader.vue';
import AppSidebar from './components/layout/AppSidebar.vue';
import MainContent from './components/layout/MainContent.vue';
import AppFooter from './components/layout/AppFooter.vue';
</script>

<template>
  <div id="app">
    <!-- Header -->
    <AppHeader />
    
    <!-- 主要內容區域 -->
    <div class="app-main">
      <!-- Sidebar -->
      <AppSidebar />
      
      <!-- 主要內容 -->
      <MainContent />
    </div>
    
    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<style>
/* 全域樣式已在 main.js 中匯入 */
</style>
