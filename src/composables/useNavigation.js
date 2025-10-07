/**
 * 導覽邏輯 Composable
 * 管理當前選中的內容區塊與 Sidebar 開關狀態
 */
import { ref, onMounted } from 'vue';

// 全域狀態：當前選中的導覽項目
const activeSection = ref('what-is-spec-kit');

// 全域狀態：Sidebar 是否展開（行動裝置）
const isSidebarOpen = ref(false);

export function useNavigation() {
  /**
   * 導覽至指定區塊
   * @param {string} sectionId - 區塊識別碼
   */
  const navigateTo = (sectionId) => {
    activeSection.value = sectionId;
    
    // 更新 URL hash，支援瀏覽器前進/後退
    window.location.hash = sectionId;
    
    // 行動裝置上導覽後自動收合 Sidebar
    if (window.innerWidth < 768) {
      isSidebarOpen.value = false;
    }
    
    // 滾動到頁面頂部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  /**
   * 切換 Sidebar 開關狀態（行動裝置）
   */
  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };
  
  /**
   * 關閉 Sidebar（行動裝置）
   */
  const closeSidebar = () => {
    isSidebarOpen.value = false;
  };
  
  /**
   * 從 URL hash 初始化當前區塊
   */
  const initializeFromHash = () => {
    const hash = window.location.hash.slice(1); // 移除 # 符號
    if (hash) {
      activeSection.value = hash;
    }
  };
  
  /**
   * 監聽瀏覽器前進/後退事件
   */
  const setupHashListener = () => {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        activeSection.value = hash;
      }
    });
  };
  
  // 元件掛載時初始化
  onMounted(() => {
    initializeFromHash();
    setupHashListener();
  });
  
  return {
    activeSection,
    isSidebarOpen,
    navigateTo,
    toggleSidebar,
    closeSidebar
  };
}
