<script setup>
import { ExternalLink } from 'lucide-vue-next';
import { contentSections } from '../../data/contentData';

// 取得內容資料
const content = contentSections['what-is-spec-kit'];
</script>

<template>
  <article class="content-section">
    <h1>{{ content.title }}</h1>
    
    <!-- 使用 v-html 渲染 HTML 內容 -->
    <div v-html="content.content"></div>
    
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
