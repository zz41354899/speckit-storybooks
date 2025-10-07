<script setup>
import { contentSections } from '../../data/contentData';

// 取得內容資料
const content = contentSections['user-guide'];
</script>

<template>
  <article class="content-section">
    <h1>{{ content.title }}</h1>
    
    <!-- 使用 v-html 渲染 HTML 內容 -->
    <div v-html="content.content"></div>
  </article>
</template>

<style scoped>
/* 樣式已在 layout.css 中定義 */
</style>
