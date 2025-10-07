/**
 * 內容區塊資料
 * 定義每個導覽項目對應的內容
 */
export const contentSections = {
  'what-is-spec-kit': {
    id: 'what-is-spec-kit',
    title: 'Spec Kit 是什麼',
    content: `
      <h2>Spec Kit 簡介</h2>
      <p>Spec Kit 是一個協助開發團隊實踐<strong>規格驅動開發（Specification-Driven Development, SSD）</strong>的工具集。它透過 AI 輔助，讓開發者能夠用自然語言描述功能需求，自動產生結構化的規格文件、實作計畫與任務清單。</p>
      
      <p>Spec Kit 的核心理念是「<strong>先思考，再動手</strong>」。透過完整的規劃流程，確保每一行程式碼都有明確的目的，每個功能都能追溯到原始需求。這不僅提升開發效率，更能大幅降低後期維護成本。</p>
      
      <h3>核心價值</h3>
      <ul>
        <li><strong>降低溝通成本</strong>：將模糊的想法轉化為清晰的規格文件，讓團隊成員、產品經理、設計師都能快速理解功能需求</li>
        <li><strong>提升開發效率</strong>：自動產生實作計畫與任務清單，減少規劃時間，讓開發者專注於撰寫程式碼</li>
        <li><strong>確保品質一致</strong>：遵循最佳實踐，建立可測試、可維護的程式碼，減少技術債累積</li>
        <li><strong>促進團隊協作</strong>：統一的文件格式與開發流程，讓所有成員都能快速理解專案，降低新成員上手時間</li>
        <li><strong>知識傳承</strong>：完整的文件記錄，確保專案知識不會因人員異動而流失</li>
        <li><strong>風險控管</strong>：在開發前識別潛在問題，提早規劃解決方案，降低專案風險</li>
      </ul>
      
      <h3>SSD 精神</h3>
      <p>規格驅動開發（SSD）強調在撰寫程式碼前，先清楚定義功能需求與驗收標準。這種開發方式有以下優點：</p>
      <ul>
        <li><strong>需求明確</strong>：避免開發過程中頻繁變更需求，減少重工與時間浪費</li>
        <li><strong>目標清晰</strong>：每個功能都有明確的成功標準，開發者知道何時算是「完成」</li>
        <li><strong>可追溯性</strong>：從規格到實作的完整記錄，方便日後查詢與維護</li>
        <li><strong>品質保證</strong>：確保實作符合原始需求，減少功能偏離與錯誤</li>
        <li><strong>可測試性</strong>：明確的驗收標準，讓測試工作更容易進行</li>
        <li><strong>可維護性</strong>：清楚的文件記錄，讓未來的維護工作更輕鬆</li>
      </ul>
      
      <h3>與傳統開發方式的差異</h3>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: var(--color-bg-secondary);">
            <th style="padding: 12px; border: 1px solid var(--color-border); text-align: left;">項目</th>
            <th style="padding: 12px; border: 1px solid var(--color-border); text-align: left;">傳統開發</th>
            <th style="padding: 12px; border: 1px solid var(--color-border); text-align: left;">SSD 開發</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 12px; border: 1px solid var(--color-border);"><strong>需求定義</strong></td>
            <td style="padding: 12px; border: 1px solid var(--color-border);">口頭溝通或簡單筆記</td>
            <td style="padding: 12px; border: 1px solid var(--color-border);">結構化規格文件</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid var(--color-border);"><strong>規劃方式</strong></td>
            <td style="padding: 12px; border: 1px solid var(--color-border);">開發者自行規劃</td>
            <td style="padding: 12px; border: 1px solid var(--color-border);">AI 輔助產生計畫</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid var(--color-border);"><strong>任務管理</strong></td>
            <td style="padding: 12px; border: 1px solid var(--color-border);">手動拆解與追蹤</td>
            <td style="padding: 12px; border: 1px solid var(--color-border);">自動產生任務清單</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid var(--color-border);"><strong>文件維護</strong></td>
            <td style="padding: 12px; border: 1px solid var(--color-border);">事後補充，常常過時</td>
            <td style="padding: 12px; border: 1px solid var(--color-border);">開發過程自動產生</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid var(--color-border);"><strong>品質控管</strong></td>
            <td style="padding: 12px; border: 1px solid var(--color-border);">依賴個人經驗</td>
            <td style="padding: 12px; border: 1px solid var(--color-border);">遵循最佳實踐</td>
          </tr>
        </tbody>
      </table>
      
      <h3>適用場景</h3>
      <p>Spec Kit 特別適合以下情境：</p>
      <ul>
        <li><strong>新功能開發</strong>：從零開始規劃與實作，確保功能符合需求</li>
        <li><strong>團隊協作專案</strong>：需要清楚的規格文件與任務分配，讓團隊成員能並行開發</li>
        <li><strong>複雜系統設計</strong>：需要完整的架構規劃與資料模型，確保系統可擴展</li>
        <li><strong>個人學習專案</strong>：建立良好的開發習慣與文件化能力，提升專業素養</li>
        <li><strong>重構與優化</strong>：先規劃再動手，避免重構過程中引入新問題</li>
        <li><strong>技術評估</strong>：在實作前評估技術可行性，降低技術風險</li>
      </ul>
      
      <h3>誰適合使用 Spec Kit？</h3>
      <ul>
        <li><strong>獨立開發者</strong>：建立系統化的開發流程，提升個人效率</li>
        <li><strong>技術主管</strong>：統一團隊開發流程，確保程式碼品質</li>
        <li><strong>產品經理</strong>：與開發團隊溝通需求，確保功能符合預期</li>
        <li><strong>新手開發者</strong>：學習專業的開發流程，快速成長</li>
        <li><strong>開源專案維護者</strong>：讓貢獻者能快速理解專案，降低貢獻門檻</li>
      </ul>
    `,
    links: [
      {
        text: 'Spec Kit GitHub Repository',
        url: 'https://github.com/github/spec-kit',
        external: true,
        description: '查看 Spec Kit 原始碼與完整文件'
      }
    ]
  },
  
  'how-to-install': {
    id: 'how-to-install',
    title: '如何安裝',
    content: `
      <h2>安裝 Spec Kit</h2>
      <p>Spec Kit 是支援的 AI 編輯器的內建功能，無需額外安裝。只要你使用支援 Spec Kit 的編輯器（如 Cascade、Windsurf 等），就能直接使用 Spec Kit 的所有功能。</p>
      
      <h3>支援的編輯器</h3>
      <p>目前支援 Spec Kit 的 AI 編輯器包括：</p>
      <ul>
        <li><strong>Cascade</strong>：GitHub 推出的 AI 編輯器，內建完整的 Spec Kit 功能</li>
        <li><strong>Windsurf</strong>：Codeium 推出的 AI 編輯器，支援 Spec Kit 工作流程</li>
        <li><strong>其他編輯器</strong>：更多編輯器正在整合 Spec Kit 功能</li>
      </ul>
      
      <h3>前置需求</h3>
      <ul>
        <li><strong>支援的 AI 編輯器</strong>：確保你已安裝並登入支援 Spec Kit 的編輯器</li>
        <li><strong>專案目錄</strong>：在你的專案根目錄中使用 Spec Kit 命令</li>
        <li><strong>Git 版本控制</strong>（建議）：Spec Kit 會自動建立功能分支，方便版本管理</li>
        <li><strong>網路連線</strong>：部分功能需要連線至 AI 服務</li>
      </ul>
      
      <h3>快速開始</h3>
      <p>在編輯器中開啟你的專案，然後在聊天介面輸入以下命令即可開始使用：</p>
      
      <pre><code>/specify 請開發一個使用者登入功能</code></pre>
      
      <p>Spec Kit 會自動建立規格文件，並引導你完成後續的規劃與實作流程。</p>
      
      <h3>第一次使用建議</h3>
      <p>如果你是第一次使用 Spec Kit，建議按照以下步驟進行：</p>
      <ol>
        <li><strong>建立測試專案</strong>：先用一個簡單的專案熟悉 Spec Kit 的工作流程</li>
        <li><strong>設定專案憲章</strong>：定義你的開發規範，讓 Spec Kit 產生符合你需求的文件</li>
        <li><strong>從小功能開始</strong>：選擇一個簡單的功能進行練習，例如「建立一個 Hello World 頁面」</li>
        <li><strong>逐步學習</strong>：依序體驗 /constitution、/specify、/plan、/task、/implement 五個階段</li>
        <li><strong>查看產生的文件</strong>：仔細閱讀 Spec Kit 產生的文件，理解每個階段的輸出</li>
      </ol>
      
      <h3>設定專案憲章（建議）</h3>
      <p>專案憲章是 Spec Kit 的第一步，它定義了專案的開發規範。建議在開始開發前先設定憲章：</p>
      
      <pre><code>/constitution 本專案使用 TypeScript，需要撰寫單元測試，所有命名使用駝峰式</code></pre>
      
      <p>專案憲章會確保所有產生的文件與程式碼都符合你的開發規範。憲章內容包括：</p>
      <ul>
        <li><strong>技術堆疊</strong>：使用的程式語言、框架、工具</li>
        <li><strong>命名規範</strong>：變數、函式、類別的命名方式</li>
        <li><strong>測試策略</strong>：是否需要測試、測試覆蓋率要求</li>
        <li><strong>文件標準</strong>：註解語言、文件格式</li>
        <li><strong>程式碼風格</strong>：縮排、括號位置等</li>
      </ul>
      
      <h3>常見問題</h3>
      
      <h4>Q: Spec Kit 是免費的嗎？</h4>
      <p>A: Spec Kit 本身是開源工具，但需要搭配支援的 AI 編輯器使用。編輯器的收費方式請參考各編輯器的官方說明。</p>
      
      <h4>Q: 可以在現有專案中使用 Spec Kit 嗎？</h4>
      <p>A: 可以！Spec Kit 可以在任何專案中使用，無論是新專案還是現有專案。它會在專案根目錄建立 <code>.specify</code> 目錄來儲存相關文件。</p>
      
      <h4>Q: Spec Kit 支援哪些程式語言？</h4>
      <p>A: Spec Kit 支援所有主流程式語言，包括 JavaScript、TypeScript、Python、Java、Go、Rust 等。你可以在專案憲章中指定使用的語言。</p>
      
      <h4>Q: 如果不喜歡 Spec Kit 產生的內容怎麼辦？</h4>
      <p>A: 所有產生的文件都是純文字檔案，你可以隨時手動編輯。Spec Kit 會尊重你的修改，不會覆蓋已修改的內容。</p>
      
      <h3>更多資源</h3>
      <p>查看官方 GitHub Repository 以獲取更多資訊：</p>
    `,
    links: [
      {
        text: 'Spec Kit GitHub',
        url: 'https://github.com/github/spec-kit',
        external: true,
        description: '查看完整安裝文件與使用範例'
      }
    ],
    codeExamples: [
      {
        language: 'bash',
        code: '/specify 請開發一個使用者登入功能',
        description: '開始建立功能規格'
      },
      {
        language: 'bash',
        code: '/speckit.constitution 本專案使用 TypeScript，需要撰寫單元測試',
        description: '設定專案憲章（可選）'
      }
    ]
  },
  
  'ssd-principles': {
    id: 'ssd-principles',
    title: 'SSD 開發五大原則',
    content: `
      <h2>什麼是 SSD？</h2>
      <p><strong>Specification-Driven Development (SSD)</strong> 是一種以規格文件為核心的開發方法論。它強調在撰寫程式碼前，先用自然語言清楚定義功能需求、使用者故事與成功標準，確保開發方向明確且可追溯。</p>
      
      <p>SSD 開發流程分為五個階段，每個階段都有明確的輸入與輸出，形成完整的開發循環。這五個階段環環相扣，確保從需求到實作的每一步都有清楚的記錄與追溯。</p>
      
      <h3>為什麼需要 SSD？</h3>
      <p>傳統的開發方式常常遇到以下問題：</p>
      <ul>
        <li><strong>需求不明確</strong>：開發過程中頻繁變更需求，導致重工</li>
        <li><strong>溝通成本高</strong>：團隊成員對功能的理解不一致</li>
        <li><strong>文件過時</strong>：程式碼與文件不同步，維護困難</li>
        <li><strong>品質不穩定</strong>：缺乏統一的開發標準</li>
      </ul>
      
      <p>SSD 透過系統化的流程解決這些問題，讓開發過程更加順暢、可控。</p>
      
      <h3>SSD 的核心原則</h3>
      <ol>
        <li><strong>規範先行</strong>：在撰寫程式碼前，先定義開發規範</li>
        <li><strong>需求明確</strong>：用結構化的方式描述功能需求</li>
        <li><strong>計畫完整</strong>：詳細規劃技術架構與實作策略</li>
        <li><strong>任務清晰</strong>：將計畫拆解為可執行的具體任務</li>
        <li><strong>實作追溯</strong>：確保每一行程式碼都能追溯到原始需求</li>
      </ol>
    `
  },
  
  'why-storybook': {
    id: 'why-storybook',
    title: '為何結合 Storybook',
    content: `
      <h2>設計與開發的橋樑</h2>
      <p>Storybook 是一個強大的 UI 元件開發與展示工具，它能夠將 Spec Kit 產生的規格文件視覺化，讓設計師與開發者在同一個平台上協作。</p>
      
      <p>當 Spec Kit 負責「定義做什麼」時，Storybook 則負責「展示怎麼做」。兩者結合，形成從需求到視覺化的完整鏈路。</p>
      
      <h3>Storybook 是什麼？</h3>
      <p>Storybook 是一個開源的前端工作坊，用於獨立開發 UI 元件。它提供：</p>
      <ul>
        <li><strong>隔離環境</strong>：在不啟動整個應用程式的情況下開發元件</li>
        <li><strong>互動式文件</strong>：自動產生元件的使用文件與範例</li>
        <li><strong>視覺測試</strong>：快照測試確保 UI 一致性</li>
        <li><strong>設計系統</strong>：建立可重用的元件庫</li>
      </ul>
      
      <h3>結合 Spec Kit 與 Storybook 的優勢</h3>
      <ul>
        <li><strong>視覺化規格文件</strong>：將文字描述的功能需求轉化為可互動的 UI 元件，讓非技術人員也能理解</li>
        <li><strong>設計與開發共用視覺規格</strong>：設計師與開發者都能在 Storybook 中查看元件的實際樣貌，減少溝通誤差</li>
        <li><strong>元件文件化</strong>：每個元件都有清楚的使用說明與範例，新成員能快速上手</li>
        <li><strong>獨立開發環境</strong>：在隔離環境中開發與測試元件，不受應用程式狀態影響，提升開發效率</li>
        <li><strong>自動化視覺測試</strong>：透過 Storybook 的快照功能，確保 UI 一致性，避免視覺回歸</li>
        <li><strong>設計系統建立</strong>：逐步累積可重用的元件庫，提升團隊生產力</li>
      </ul>
      
      <h3>實際應用場景</h3>
      <p>當你使用 Spec Kit 建立功能規格後，可以在 Storybook 中：</p>
      <ul>
        <li><strong>展示使用者故事</strong>：每個使用者故事對應一組 UI 元件，在 Storybook 中展示完整流程</li>
        <li><strong>記錄元件狀態</strong>：記錄元件的不同狀態（載入中、錯誤、成功、空資料等），確保所有情境都有處理</li>
        <li><strong>提供互動式文件</strong>：讓團隊成員都能理解元件用途，並直接在 Storybook 中測試</li>
        <li><strong>即時預覽變更</strong>：在開發過程中即時預覽元件變更，快速迭代</li>
        <li><strong>跨團隊協作</strong>：產品經理、設計師、開發者都能在 Storybook 中檢視與討論</li>
      </ul>
      
      <h3>團隊協作的最佳實踐</h3>
      <p>結合 Spec Kit 與 Storybook，團隊可以建立以下工作流程：</p>
      <ol>
        <li><strong>規格階段</strong>：使用 Spec Kit 定義功能需求與使用者故事，明確要做什麼</li>
        <li><strong>設計階段</strong>：設計師根據規格在 Storybook 中建立元件原型，展示視覺設計</li>
        <li><strong>開發階段</strong>：開發者實作元件，並在 Storybook 中展示各種狀態</li>
        <li><strong>審查階段</strong>：團隊在 Storybook 中檢視元件，確保符合規格與設計</li>
        <li><strong>文件階段</strong>：Storybook 自動產生元件文件，供未來參考與維護</li>
        <li><strong>測試階段</strong>：使用 Storybook 的測試工具進行視覺回歸測試</li>
      </ol>
      
      <h3>實際案例</h3>
      <p>假設你要開發一個「使用者登入表單」：</p>
      <ol>
        <li><strong>Spec Kit 定義需求</strong>：「表單包含帳號、密碼欄位，以及記住我選項」</li>
        <li><strong>Storybook 展示元件</strong>：
          <ul>
            <li>預設狀態：空白表單</li>
            <li>填寫中狀態：使用者正在輸入</li>
            <li>驗證錯誤狀態：顯示錯誤訊息</li>
            <li>提交中狀態：顯示載入動畫</li>
            <li>成功狀態：顯示成功訊息</li>
          </ul>
        </li>
        <li><strong>團隊協作</strong>：所有成員都能在 Storybook 中看到這些狀態，確保理解一致</li>
      </ol>
      
      <h3>開始使用 Storybook</h3>
      <p>如果你想在專案中整合 Storybook，可以參考以下步驟：</p>
      <pre><code># 安裝 Storybook
npx storybook@latest init

# 啟動 Storybook
npm run storybook</code></pre>
      
      <p>更多資訊請參考 <a href="https://storybook.js.org/" target="_blank" rel="noopener noreferrer">Storybook 官方文件</a>。</p>
      
      <h3>總結</h3>
      <p>Spec Kit 與 Storybook 的結合，讓開發流程更加完整：</p>
      <ul>
        <li><strong>Spec Kit</strong>：定義「做什麼」（需求、架構、任務）</li>
        <li><strong>Storybook</strong>：展示「怎麼做」（元件、狀態、互動）</li>
      </ul>
      <p>這種方式能大幅降低溝通成本，確保所有團隊成員對功能的理解一致，提升開發效率與產品品質。</p>
    `
  },
  
  'user-guide': {
    id: 'user-guide',
    title: '使用者指引範例',
    content: `
      <h2>完整開發流程示範</h2>
      <p>以下展示一個完整的 SSD 開發流程，從功能描述到最終文件的實際案例。</p>
      
      <h3>範例：開發使用者登入功能</h3>
      <p>假設我們要為一個網站開發使用者登入功能，以下是完整的 SSD 流程：</p>
      
      <h4>階段 1：/constitution - 建立專案憲章</h4>
      <p><strong>輸入</strong>：</p>
      <pre><code>/constitution 本專案使用 TypeScript，需要撰寫單元測試，所有命名使用駝峰式</code></pre>
      
      <p><strong>輸出</strong>：系統自動產生 <code>constitution.md</code>，包含：</p>
      <ul>
        <li>技術堆疊：TypeScript、測試框架</li>
        <li>命名規範：駝峰式命名</li>
        <li>測試策略：單元測試必須撰寫</li>
        <li>文件標準：正體中文註解</li>
      </ul>
      
      <h4>階段 2：/specify - 撰寫功能規格</h4>
      <p><strong>輸入</strong>：</p>
      <pre><code>/specify 請開發一個使用者登入功能，包含帳號密碼登入與記住我選項</code></pre>
      
      <p><strong>輸出</strong>：系統自動產生 <code>spec.md</code>，包含：</p>
      <ul>
        <li>使用者故事：「使用者能夠輸入帳號密碼登入系統」</li>
        <li>功能需求：登入表單、驗證邏輯、錯誤處理、記住我功能</li>
        <li>成功標準：使用者能在 30 秒內完成登入</li>
      </ul>
      
      <h4>階段 3：/plan - 建立實作計畫</h4>
      <p><strong>輸入</strong>：</p>
      <pre><code>/plan</code></pre>
      
      <p><strong>輸出</strong>：系統自動產生 <code>plan.md</code>，包含：</p>
      <ul>
        <li>技術堆疊：React + TypeScript + Express</li>
        <li>專案結構：前端元件、後端 API、資料模型</li>
        <li>資料模型：User 實體、Session 實體</li>
        <li>API 合約：POST /api/auth/login</li>
      </ul>
      
      <h4>階段 4：/task - 拆解工作項目</h4>
      <p><strong>輸入</strong>：</p>
      <pre><code>/task</code></pre>
      
      <p><strong>輸出</strong>：系統自動產生 <code>tasks.md</code>，包含：</p>
      <ul>
        <li>T001: 建立 LoginForm 元件</li>
        <li>T002: 實作表單驗證邏輯</li>
        <li>T003: 建立登入 API 端點</li>
        <li>T004: 實作 Session 管理</li>
        <li>T005: 整合前後端</li>
      </ul>
      
      <h4>階段 5：/implement - 撰寫程式碼</h4>
      <p><strong>輸入</strong>：</p>
      <pre><code>/implement</code></pre>
      
      <p><strong>輸出</strong>：系統自動執行任務清單，產生：</p>
      <ul>
        <li><code>LoginForm.tsx</code> - 登入表單元件</li>
        <li><code>authService.ts</code> - 認證服務</li>
        <li><code>authController.ts</code> - 登入 API</li>
        <li><code>sessionMiddleware.ts</code> - Session 中介層</li>
      </ul>
      
      <h3>實際應用建議</h3>
      <p>使用 Spec Kit 開發時，建議遵循以下最佳實踐：</p>
      <ol>
        <li><strong>從小功能開始</strong>：先用簡單的功能熟悉流程</li>
        <li><strong>逐步迭代</strong>：完成一個使用者故事後再進行下一個</li>
        <li><strong>保持規格更新</strong>：需求變更時，先更新規格文件</li>
        <li><strong>善用憲章</strong>：為專案設定開發規範，確保一致性</li>
        <li><strong>結合 Storybook</strong>：視覺化元件，提升團隊協作效率</li>
      </ol>
      
      <h3>常見問題</h3>
      
      <h4>Q: 如果需求不明確怎麼辦？</h4>
      <p>A: 在 /specify 階段，AI 會詢問澄清問題。你也可以使用 <code>/speckit.clarify</code> 命令，系統會提出最多 5 個針對性問題幫助你釐清需求。建議在需求不明確時，先與團隊討論，再使用 Spec Kit 記錄共識。</p>
      
      <h4>Q: 可以跳過某些階段嗎？</h4>
      <p>A: 不建議跳過。每個階段都有其價值，跳過可能導致後續開發問題。但如果你已有現成的規格或計畫，可以手動建立對應文件，Spec Kit 會讀取這些文件並繼續後續流程。</p>
      
      <h4>Q: 如何處理大型專案？</h4>
      <p>A: 將大型專案拆分為多個功能，每個功能獨立執行 SSD 流程。使用 Git 分支管理不同功能的開發。建議：</p>
      <ul>
        <li>每個功能建立獨立的分支（例如：<code>feature/user-login</code>）</li>
        <li>每個功能有獨立的規格文件目錄（例如：<code>specs/001-user-login/</code>）</li>
        <li>功能完成後合併回主分支，保持主分支穩定</li>
      </ul>
      
      <h4>Q: 團隊成員不熟悉 SSD 怎麼辦？</h4>
      <p>A: 建議從小型專案開始練習，讓團隊成員熟悉流程。可以：</p>
      <ul>
        <li>舉辦內部工作坊，示範完整的 SSD 流程</li>
        <li>建立團隊的最佳實踐文件</li>
        <li>指定一位 SSD 專家協助團隊成員</li>
        <li>定期檢視產生的文件，確保品質</li>
      </ul>
      
      <h4>Q: 如何確保產生的程式碼品質？</h4>
      <p>A: Spec Kit 產生的程式碼遵循最佳實踐，但仍需要：</p>
      <ul>
        <li>在專案憲章中明確定義程式碼標準</li>
        <li>進行程式碼審查（Code Review）</li>
        <li>撰寫測試確保功能正確</li>
        <li>使用 Linter 與 Formatter 工具</li>
      </ul>
      
      <h4>Q: 可以修改 Spec Kit 產生的文件嗎？</h4>
      <p>A: 可以！所有文件都是純文字檔案，你可以隨時編輯。Spec Kit 會尊重你的修改，不會覆蓋已修改的內容。建議在修改後，確保文件之間的一致性。</p>
      
      <h3>進階技巧</h3>
      
      <h4>1. 使用 Checklist 確保品質</h4>
      <p>Spec Kit 支援檢查清單功能，可以在規劃階段建立品質檢查清單：</p>
      <pre><code>/speckit.checklist</code></pre>
      <p>系統會根據專案類型產生對應的檢查清單，確保所有重要項目都有考慮到。</p>
      
      <h4>2. 使用 Analyze 分析一致性</h4>
      <p>在完成規劃後，可以使用分析命令檢查文件之間的一致性：</p>
      <pre><code>/speckit.analyze</code></pre>
      <p>系統會檢查規格、計畫、任務之間是否有矛盾或遺漏。</p>
      
      <h4>3. 版本控制最佳實踐</h4>
      <p>建議將 Spec Kit 產生的文件納入版本控制：</p>
      <ul>
        <li>提交規格文件時，使用清楚的 commit message（例如：<code>docs: add user login specification</code>）</li>
        <li>規格變更時，同步更新相關文件</li>
        <li>使用 Pull Request 審查規格變更</li>
      </ul>
      
      <h3>學習資源</h3>
      <ul>
        <li><strong>官方文件</strong>：<a href="https://github.com/github/spec-kit" target="_blank" rel="noopener noreferrer">Spec Kit GitHub Repository</a></li>
        <li><strong>範例專案</strong>：查看 Spec Kit 的範例專案，學習最佳實踐</li>
        <li><strong>社群討論</strong>：加入 Spec Kit 社群，與其他開發者交流經驗</li>
      </ul>
      
      <h3>總結</h3>
      <p>Spec Kit 的 SSD 開發流程能夠：</p>
      <ul>
        <li>✅ 降低溝通成本，確保團隊理解一致</li>
        <li>✅ 提升開發效率，減少規劃時間</li>
        <li>✅ 確保程式碼品質，遵循最佳實踐</li>
        <li>✅ 建立完整文件，方便維護與交接</li>
        <li>✅ 降低專案風險，提早發現問題</li>
      </ul>
      <p>開始使用 Spec Kit，讓你的開發流程更加專業、高效！</p>
    `
  }
};
