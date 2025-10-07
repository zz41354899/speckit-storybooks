<script setup>
import { contentSections } from '../../data/contentData';
import { ssdPhases } from '../../data/ssdPhases';

// 取得內容資料
const content = contentSections['ssd-principles'];
</script>

<template>
  <article class="content-section">
    <h1>{{ content.title }}</h1>
    
    <!-- 使用 v-html 渲染 HTML 內容 -->
    <div v-html="content.content"></div>
    
    <!-- SDD 五大階段 -->
    <div class="ssd-phases">
      <div 
        v-for="phase in ssdPhases" 
        :key="phase.id"
        class="ssd-phase"
      >
        <div class="ssd-phase__header">
          <span class="ssd-phase__number">{{ phase.order }}</span>
          <div class="ssd-phase__title-group">
            <h3 class="ssd-phase__title">{{ phase.title }}</h3>
            <code class="ssd-phase__command">{{ phase.command }}</code>
          </div>
        </div>
        
        <div class="ssd-phase__content">
          <div class="ssd-phase__section">
            <h4>用途</h4>
            <p>{{ phase.purpose }}</p>
          </div>
          
          <div class="ssd-phase__section">
            <h4>操作方式</h4>
            <p>{{ phase.operation }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 流程圖示 -->
    <div class="ssd-flow">
      <h3>完整開發流程</h3>
      <div class="ssd-flow__steps">
        <div 
          v-for="(phase, index) in ssdPhases" 
          :key="phase.id"
          class="ssd-flow__step"
        >
          <div class="ssd-flow__step-number">{{ phase.order }}</div>
          <div class="ssd-flow__step-name">{{ phase.command }}</div>
          <div v-if="index < ssdPhases.length - 1" class="ssd-flow__arrow">→</div>
        </div>
      </div>
      <p class="ssd-flow__description">
        從 /specify 開始，依序執行每個階段，最終產生完整的專案文件與程式碼。
      </p>
    </div>
  </article>
</template>

<style scoped>
.ssd-phases {
  margin-top: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.ssd-phase {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow var(--transition-fast);
}

.ssd-phase:hover {
  box-shadow: var(--shadow-md);
}

.ssd-phase__header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background-color: var(--color-bg-secondary);
  border-bottom: 1px solid var(--color-border);
}

.ssd-phase__number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: var(--color-primary);
  color: white;
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  border-radius: var(--radius-full);
  flex-shrink: 0;
}

.ssd-phase__title-group {
  flex: 1;
}

.ssd-phase__title {
  margin: 0 0 var(--spacing-xs) 0;
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
}

.ssd-phase__command {
  display: inline-block;
  padding: 4px 8px;
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-family: 'Courier New', monospace;
  font-size: var(--font-size-sm);
  color: var(--color-primary);
}

.ssd-phase__content {
  padding: var(--spacing-lg);
}

.ssd-phase__section {
  margin-bottom: var(--spacing-md);
}

.ssd-phase__section:last-child {
  margin-bottom: 0;
}

.ssd-phase__section h4 {
  margin: 0 0 var(--spacing-sm) 0;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
}

.ssd-phase__section p {
  margin: 0;
  line-height: var(--line-height-relaxed);
  color: var(--color-text);
}

/* 流程圖示 */
.ssd-flow {
  margin-top: var(--spacing-2xl);
  padding: var(--spacing-xl);
  background-color: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}

.ssd-flow h3 {
  margin: 0 0 var(--spacing-lg) 0;
  text-align: center;
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
}

.ssd-flow__steps {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.ssd-flow__step {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.ssd-flow__step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: var(--color-primary);
  color: white;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  border-radius: var(--radius-full);
}

.ssd-flow__step-name {
  font-family: 'Courier New', monospace;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
}

.ssd-flow__arrow {
  font-size: var(--font-size-xl);
  color: var(--color-text-light);
  margin: 0 var(--spacing-xs);
}

.ssd-flow__description {
  margin: 0;
  text-align: center;
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
}

/* 響應式調整 */
@media (max-width: 767px) {
  .ssd-phase__header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .ssd-flow__steps {
    flex-direction: column;
    align-items: stretch;
  }
  
  .ssd-flow__step {
    justify-content: center;
  }
  
  .ssd-flow__arrow {
    transform: rotate(90deg);
    margin: var(--spacing-xs) 0;
  }
}
</style>
