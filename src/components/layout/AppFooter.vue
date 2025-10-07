<script setup>
// Footer 元件 - 顯示專案名稱與年份
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="app-footer">
    <p>© {{ currentYear }} Speckit-Storybook</p>
  </footer>
</template>

<style scoped>
/* Footer 樣式已在 layout.css 中定義 */
</style>
