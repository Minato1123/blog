import{_ as e,o as a,c as t,V as l}from"./chunks/framework.62adf23d.js";const m=JSON.parse('{"title":"Oct. 2022","description":"","frontmatter":{},"headers":[],"relativePath":"daily-log/oct2022.md"}'),o={name:"daily-log/oct2022.md"},s=l(`<h1 id="oct-2022" tabindex="-1">Oct. 2022 <a class="header-anchor" href="#oct-2022" aria-label="Permalink to &quot;Oct. 2022&quot;">​</a></h1><h2 id="_2-nd" tabindex="-1">2 nd <a class="header-anchor" href="#_2-nd" aria-label="Permalink to &quot;2 nd&quot;">​</a></h2><h3 id="工具" tabindex="-1">工具 <a class="header-anchor" href="#工具" aria-label="Permalink to &quot;工具&quot;">​</a></h3><ul><li><a href="https://github.com/getsentry/sentry-javascript" target="_blank" rel="noreferrer">Sentry</a><blockquote><p>報錯時 sentry 將第一時間通知開發者。<br> 系統異常時主動對其進行收集上報，出現了什麼錯誤，錯誤出現在哪，幫忙記錄錯誤以制定解決方案並進行優化迭代。<br> sentry 支援自動收集和手動收集兩種錯誤收集方法。<br> 使用 sentry 需要結合兩個部分：Client-Side 與 sentry 的 Server-Side。<br></p><ul><li>Client-Side：需要去監聽的對象（e.g. 公司的前端項目）。</li><li>Server-Side：展示已蒐集的錯誤信息、專案管理等功能的服務平台。</li></ul></blockquote></li><li>Nginx Web Server <blockquote><p>Web Server：只能拿來處理靜態資源，負載平衡、代理。<br> 所謂動態的資源是指會把需求轉發到程式語言起的 Application Server，由 Application Server 處理完後，再丟 response 回去，由 Web Server 進行回應，最後才回到 Client 端。</p></blockquote></li></ul><h2 id="_3-rd" tabindex="-1">3 rd <a class="header-anchor" href="#_3-rd" aria-label="Permalink to &quot;3 rd&quot;">​</a></h2><h3 id="套件" tabindex="-1">套件 <a class="header-anchor" href="#套件" aria-label="Permalink to &quot;套件&quot;">​</a></h3><ul><li><a href="https://github.com/tj/commander.js/" target="_blank" rel="noreferrer">Commander.js</a><blockquote><p><span class="span-heightlight">命令行工具開發組件</span>，提供了一些方便的 API 供程式開發者方便使用。<br> 輸入命令字串，它將自動地去分析使用者輸入的參數，並執行你所希望執行的動作。</p><div class="tip custom-block"><p class="custom-block-title">CLI</p><p>Command Line Interface，命令列介面。</p></div></blockquote></li></ul><h3 id="函式庫" tabindex="-1">函式庫 <a class="header-anchor" href="#函式庫" aria-label="Permalink to &quot;函式庫&quot;">​</a></h3><ul><li><a href="https://github.com/d3/d3" target="_blank" rel="noreferrer">D3.js</a><blockquote><p>Data-Driven Documents（資料驅動文件）。<br> 用來操作 Document Object Model（DOM）樹狀資料，將資料內容視覺化的工具。<br> 常用來<span class="span-heightlight">建立圖表</span>，操作 DOM 樹的 JS 函式庫，因此基本的建構元素不是圓或矩形等圖案。</p><ul><li>建立圖案：使用 node 節點跟 DOM 元素 去建立圖形（畫面渲染部分使用 SVG）</li><li>圖案樣式：透過屬性 (attribute) 來調整元素的樣式</li><li>目前位置：在 DOM 樹中選擇節點，非畫布上的ＸＹ座標<br></li></ul><p>主要搭配 SVG 去建立圖表，但不僅限於操作 SVG，而是能操作頁面上所有的 DOM 元素。</p></blockquote></li></ul><h3 id="學習資源" tabindex="-1">學習資源 <a class="header-anchor" href="#學習資源" aria-label="Permalink to &quot;學習資源&quot;">​</a></h3><ul><li><a href="https://www.totaltypescript.com/tutorials/beginners-typescript" target="_blank" rel="noreferrer">Befinner&#39;s Typescript Tutorials</a><blockquote><ol><li>學習型別變數、函式和錯誤。</li><li>與 TypeScript 文件更熟悉。</li><li>獲得現代 TypeScript 工具使用的經驗。</li></ol></blockquote></li></ul><h2 id="_4-th" tabindex="-1">4 th <a class="header-anchor" href="#_4-th" aria-label="Permalink to &quot;4 th&quot;">​</a></h2><h3 id="資源" tabindex="-1">資源 <a class="header-anchor" href="#資源" aria-label="Permalink to &quot;資源&quot;">​</a></h3><ul><li><a href="https://heroicons.com/" target="_blank" rel="noreferrer">Heroicons</a><blockquote><p>由 Tailwind CSS 所免費提供的線上 <span class="span-heightlight">SVG 圖標</span>素材資源。<br> 所有 Icons 都已經經過預先優化，同時能直接複製並貼至 HTML 中顯示。</p></blockquote></li></ul><h2 id="_6-th" tabindex="-1">6 th <a class="header-anchor" href="#_6-th" aria-label="Permalink to &quot;6 th&quot;">​</a></h2><h3 id="測試" tabindex="-1">測試 <a class="header-anchor" href="#測試" aria-label="Permalink to &quot;測試&quot;">​</a></h3><ul><li><a href="https://vitest.dev/" target="_blank" rel="noreferrer">Vitest</a><blockquote><p>由 Vite 提供支持的極速<span class="span-heightlight">單元測試框架</span>。</p><div class="tip custom-block"><p class="custom-block-title">TDD（Test Driven Development，測試驅動開發）</p><p>透過測試來保證程式碼的功能正常。</p></div></blockquote></li></ul><h2 id="_7-th" tabindex="-1">7 th <a class="header-anchor" href="#_7-th" aria-label="Permalink to &quot;7 th&quot;">​</a></h2><h3 id="函式庫-1" tabindex="-1">函式庫 <a class="header-anchor" href="#函式庫-1" aria-label="Permalink to &quot;函式庫&quot;">​</a></h3><ul><li><a href="https://github.com/VincentGarreau/particles.js/" target="_blank" rel="noreferrer">particles.js</a><blockquote><p>用於創建粒子的 JavaScript 函式庫。</p></blockquote></li><li><a href="https://github.com/surveyjs/survey-library" target="_blank" rel="noreferrer">Survey Library</a><blockquote><p>免費的 JavaScript 表單構建器庫。</p></blockquote></li></ul><h2 id="_10-th" tabindex="-1">10 th <a class="header-anchor" href="#_10-th" aria-label="Permalink to &quot;10 th&quot;">​</a></h2><h3 id="元件庫" tabindex="-1">元件庫 <a class="header-anchor" href="#元件庫" aria-label="Permalink to &quot;元件庫&quot;">​</a></h3><ul><li><a href="https://tailwindui.com/" target="_blank" rel="noreferrer">Tailwind UI</a><blockquote><p>Tailwind 官方的元件庫。</p></blockquote></li><li>Tailwind 第三方的元件庫 <ol><li><a href="https://tailblocks.cc/" target="_blank" rel="noreferrer">Tailblocks</a></li><li><a href="https://tailwindcomponents.com/" target="_blank" rel="noreferrer">Tailwind Components</a></li><li><a href="https://www.tailwind-kit.com/components" target="_blank" rel="noreferrer">Tailwind Kit</a></li></ol></li></ul><h3 id="javascript-執行環境" tabindex="-1">JavaScript 執行環境 <a class="header-anchor" href="#javascript-執行環境" aria-label="Permalink to &quot;JavaScript 執行環境&quot;">​</a></h3><ul><li><a href="https://github.com/oven-sh/bun" target="_blank" rel="noreferrer">Bun</a><blockquote><p>速度快、預設支援 TypeScript。<br> 使用簡單，內建套件管理器、測試工具。<br> 相容於現有 Node.js 和 npm 的套件。</p></blockquote></li></ul><h3 id="shell-命令解析器" tabindex="-1">Shell 命令解析器 <a class="header-anchor" href="#shell-命令解析器" aria-label="Permalink to &quot;Shell 命令解析器&quot;">​</a></h3><p>使用者透過鍵盤（程式碼）跟作業系統核心做溝通。<br> 透過 Terminal（終端機）輸入指令，真正發送指令的人為 Shell。</p><ul><li>Bash <blockquote><p>Mac 的預設 Shell。<br> 能別名設定、建立函式、匯出變數、及執行命令等。</p></blockquote></li><li>Zsh <blockquote><p>比 Bash 能有更多的自訂，且速度較快。<br> Zsh 包括 Bash 的功能，甚至多了自動校正拼寫。</p></blockquote></li></ul><h3 id="套件-1" tabindex="-1">套件 <a class="header-anchor" href="#套件-1" aria-label="Permalink to &quot;套件&quot;">​</a></h3><ul><li><a href="https://github.com/antfu/eslint-config" target="_blank" rel="noreferrer">eslint-config</a><blockquote><p>antfu 的 ESLint 配置預設。</p></blockquote></li></ul><h3 id="框架" tabindex="-1">框架 <a class="header-anchor" href="#框架" aria-label="Permalink to &quot;框架&quot;">​</a></h3><ul><li><a href="https://histoire.dev/" target="_blank" rel="noreferrer">Histoire</a><blockquote><p>編寫故事來展示與記錄 Components。</p></blockquote></li></ul><h2 id="_11-st" tabindex="-1">11 st <a class="header-anchor" href="#_11-st" aria-label="Permalink to &quot;11 st&quot;">​</a></h2><h3 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-label="Permalink to &quot;CSS&quot;">​</a></h3><ul><li><code>input</code> 標籤 <code>text</code> 與 <code>button</code> 高度計算 <blockquote><p><code>text</code> 高度顯示值 = <code>原本高度 + padding + border</code><br><code>button</code> 高度顯示值 = <code>原本高度</code>（包含 <code>padding</code> 和 <code>border</code>）</p><div class="tip custom-block"><p class="custom-block-title">將兩者設為同高方式</p><p>在 <code>text</code> 的 CSS 選擇器加上 <code>box-sizing: border-box;</code>。</p></div></blockquote></li></ul><h3 id="cookie" tabindex="-1">Cookie <a class="header-anchor" href="#cookie" aria-label="Permalink to &quot;Cookie&quot;">​</a></h3><p>Cookie 是一種<span class="span-heightlight">「小型文字檔案」儲存在使用者瀏覽器中</span>。 瀏覽網站時，設定於瀏覽器內的 Cookies，會讓瀏覽器記下一些特定的資訊以便未來能夠更加方便被使用。 例如：紀錄使用者在網站上所打的文字或是一些選擇。（下次訪問同一個網站時伺服器會先看看有沒有上次留下的 Cookie 資料，有的話會依據裡面的內容來判斷使用者，並送出特定的網頁內容。）</p><ul><li><p>第一方 Cookie</p><blockquote><p>是由使用者瀏覽的網站所建立，也就是網址列中所顯示的網站。<br> 當使用者瀏覽該網域的網站，第一方會記錄使用者的資訊及登錄狀況，讓瀏覽體驗更方便。<br> 例如：更快的瀏覽、自動填充、保存你的購物車 ... 等。<br> 通常會在剛進入網站時詢問是否同意使用 Cookie ，若不同意可能會讓網站無法正常運作。</p></blockquote></li><li><p>第三方 Cookie</p><blockquote><p>是在您造訪的第一方網站上的其他網站廣告（e.g. 快顯視窗、橫幅廣告），是由其他網站所建立。<br> 瀏覽網頁時，會看到由其他網站的廣告或圖片，這個提供能跨網域存取的暫存資料，就是第三方 Cookie。<br> 若曾點擊網頁中出現的廣告連結，伺服器就會收到第三方網站的 Cookie。<br> 因此對於使用者來說，接受第一方 Cookie，授權給信任網站，不僅能提升瀏覽體驗，對於個資也有所保障，而第三方 Cookie 則會是較難以掌握來源網站的安全性。</p></blockquote><p><a href="https://www.waca.net/support/id/445" target="_blank" rel="noreferrer">⋯ Reference</a></p></li></ul><h3 id="javascript-解析器" tabindex="-1">JavaScript 解析器 <a class="header-anchor" href="#javascript-解析器" aria-label="Permalink to &quot;JavaScript 解析器&quot;">​</a></h3><ul><li><a href="https://github.com/acornjs/acorn" target="_blank" rel="noreferrer">Acorn</a><blockquote><p><a href="https://juejin.cn/post/6844903450287800327" target="_blank" rel="noreferrer">⋯ Reference</a></p></blockquote></li><li><a href="https://github.com/jquery/esprima" target="_blank" rel="noreferrer">Esprima</a></li></ul><h2 id="_12-nd" tabindex="-1">12 nd <a class="header-anchor" href="#_12-nd" aria-label="Permalink to &quot;12 nd&quot;">​</a></h2><h3 id="component" tabindex="-1">Component <a class="header-anchor" href="#component" aria-label="Permalink to &quot;Component&quot;">​</a></h3><ul><li><a href="https://github.com/themesberg/flowbite-react" target="_blank" rel="noreferrer">Flowbite-react</a><blockquote><p>為 Flowbite 和 Tailwind CSS 構建的官方 React Component。</p></blockquote></li></ul><h2 id="_13-rd" tabindex="-1">13 rd <a class="header-anchor" href="#_13-rd" aria-label="Permalink to &quot;13 rd&quot;">​</a></h2><h3 id="問題" tabindex="-1">問題 <a class="header-anchor" href="#問題" aria-label="Permalink to &quot;問題&quot;">​</a></h3><ul><li>處理動態 Window 寬度變化的處理</li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getWidth</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">windowWidth</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerWidth</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">onMounted</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">resize</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> getWidth)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">onUnmounted</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">resize</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> getWidth)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p><a href="https://masteringjs.io/tutorials/vue/resize-event" target="_blank" rel="noreferrer">⋯ Reference</a></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>也可以使用 VueUse 的 <a href="https://vueuse.org/core/useWindowSize/#usewindowsize" target="_blank" rel="noreferrer"><code>useWindowSize</code></a>，更加方便取得響應式的視窗大小。</p></div></blockquote><h2 id="_18-th" tabindex="-1">18 th <a class="header-anchor" href="#_18-th" aria-label="Permalink to &quot;18 th&quot;">​</a></h2><h3 id="工具-1" tabindex="-1">工具 <a class="header-anchor" href="#工具-1" aria-label="Permalink to &quot;工具&quot;">​</a></h3><ul><li><p><a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noreferrer">NVM</a></p><blockquote><p>Node 版本管理器。</p><ol><li>切換 Node.js 的版本</li><li>使用特定 Node.js 作為預設啟用環境</li><li>安裝不同的套件至特定的版本上</li></ol></blockquote></li><li><p><a href="https://github.com/marcj/TypeRunner" target="_blank" rel="noreferrer">TypeRunner</a></p><blockquote><p>TS 編譯器。</p></blockquote></li></ul><h3 id="css-1" tabindex="-1">CSS <a class="header-anchor" href="#css-1" aria-label="Permalink to &quot;CSS&quot;">​</a></h3><ul><li><code>aspect-ratio</code><blockquote><p>設定長寬比（寬 ÷ 長）的數值，</p></blockquote></li></ul><h3 id="html" tabindex="-1">HTML <a class="header-anchor" href="#html" aria-label="Permalink to &quot;HTML&quot;">​</a></h3><ul><li><code>http-equiv=&quot;refresh&quot;</code><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">refresh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">5; url=https://www.fooish.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><ul><li><code>http-equiv=&quot;refresh&quot;</code> 表示刷新頁面</li><li><code>content</code> 的第一個參數為秒數，<code>url</code> 為秒數倒數完目標跳轉的網頁</li></ul></blockquote><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">refresh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>沒有 <code>url</code> 的情況下，此行單純表示每 10 秒會刷新此頁面。</p></blockquote></li></ul><h2 id="_20-th" tabindex="-1">20 th <a class="header-anchor" href="#_20-th" aria-label="Permalink to &quot;20 th&quot;">​</a></h2><h3 id="元件庫-1" tabindex="-1">元件庫 <a class="header-anchor" href="#元件庫-1" aria-label="Permalink to &quot;元件庫&quot;">​</a></h3><ul><li><a href="https://shoelace.style/" target="_blank" rel="noreferrer">Shoelace</a></li></ul><h2 id="_22-nd" tabindex="-1">22 nd <a class="header-anchor" href="#_22-nd" aria-label="Permalink to &quot;22 nd&quot;">​</a></h2><h3 id="icons" tabindex="-1">Icons <a class="header-anchor" href="#icons" aria-label="Permalink to &quot;Icons&quot;">​</a></h3><ul><li><a href="https://github.com/nuxt-modules/icon" target="_blank" rel="noreferrer">Nuxt-icon</a></li></ul><h2 id="_27-th" tabindex="-1">27 th <a class="header-anchor" href="#_27-th" aria-label="Permalink to &quot;27 th&quot;">​</a></h2><h3 id="css-2" tabindex="-1">CSS <a class="header-anchor" href="#css-2" aria-label="Permalink to &quot;CSS&quot;">​</a></h3><ul><li><p><code>transition</code></p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">transition: </span><span style="color:#FFCB6B;">transition-property</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">transition-duration</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">transition-timing-function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">transition-delay</span><span style="color:#A6ACCD;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><table><thead><tr><th>屬性</th><th>定義</th><th>預設</th><th>單位</th></tr></thead><tbody><tr><td><code>transition-property</code></td><td>指定要轉換的 CSS 屬性</td><td><code>none</code></td><td></td></tr><tr><td><code>transition-duration</code></td><td>轉換持續的時間（動畫長度）</td><td><code>0</code></td><td>s / ms</td></tr><tr><td><code>transition-timing-function</code></td><td>轉換時的速度變化</td><td><code>ease</code></td><td></td></tr><tr><td><code>transition-delay</code></td><td>動畫觸發的延遲時間</td><td><code>0</code></td><td>s / ms</td></tr></tbody></table></li><li><p><code>transition-timing-function</code></p><table><thead><tr><th>變化函式</th><th>說明</th><th><code>= cubic-bezier()</code></th></tr></thead><tbody><tr><td><code>ease</code></td><td>緩入中間快緩出，預設值</td><td><code>cubic-bezier(.25, .1, .25, 1)</code></td></tr><tr><td><code>ease-in</code></td><td>緩入</td><td><code>cubic-bezier(.42, 0, 1, 1)</code></td></tr><tr><td><code>ease-out</code></td><td>緩出</td><td><code>cubic-bezier(0, 0, .58, 1)</code></td></tr><tr><td><code>ease-in-out</code></td><td>緩入緩出（較於 <code>ease</code> 平緩）</td><td><code>cubic-bezier(.42, 0, .58, 1)</code></td></tr><tr><td><code>linear</code></td><td>均速</td><td><code>cubic-bezier(0, 0, 1, 1)</code></td></tr><tr><td><code>cubic-bezier(n, n, n, n)</code></td><td>利用貝茲曲線自定義速度模式，<code>n</code> 為 0~1 中的數值</td><td></td></tr></tbody></table><p><img src="https://ithelp.ithome.com.tw/upload/images/20181017/20111500dECPJzMVeo.png" alt=""></p><blockquote><p><a href="https://cubic-bezier.com/" target="_blank" rel="noreferrer">⋯ cubic-bezier</a><br></p><p><a href="https://ithelp.ithome.com.tw/articles/10200365" target="_blank" rel="noreferrer">⋯ Reference</a></p></blockquote><div class="warning custom-block"><p class="custom-block-title">沒有動畫！</p><p><code>transition</code> 轉換的開始和結束屬性值都必須是確切數值，否則將無法進行計算！</p><ol><li><code>width: auto</code>（不確定的值）&lt;-&gt; <code>width: 100px</code>（確切值）</li><li><code>display: none</code> &lt;-&gt; <code>display: block</code>（都不是值）</li></ol></div></li></ul><h2 id="_30-th" tabindex="-1">30 th <a class="header-anchor" href="#_30-th" aria-label="Permalink to &quot;30 th&quot;">​</a></h2><h3 id="html-1" tabindex="-1">HTML <a class="header-anchor" href="#html-1" aria-label="Permalink to &quot;HTML&quot;">​</a></h3><ul><li><code>contenteditable</code><blockquote><p>表示此元素是否可以被使用者編輯。<br> 沒有設置參數，同被視為 <code>contenteditable=&quot;true&quot;</code>。</p></blockquote><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">contenteditable</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">display: block;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">body</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>此程式碼可以將 <code>style</code> 變成可編輯區域。</p></blockquote></li></ul><h2 id="_31-st" tabindex="-1">31 st <a class="header-anchor" href="#_31-st" aria-label="Permalink to &quot;31 st&quot;">​</a></h2><h3 id="css-3" tabindex="-1">CSS <a class="header-anchor" href="#css-3" aria-label="Permalink to &quot;CSS&quot;">​</a></h3><ul><li><code>mask-image</code><blockquote><p>⚠️ 實驗性功能（部分瀏覽器仍開發中）<br> 用於設置元素上遮罩的圖片。</p></blockquote></li></ul><h3 id="網頁座標" tabindex="-1">網頁座標 <a class="header-anchor" href="#網頁座標" aria-label="Permalink to &quot;網頁座標&quot;">​</a></h3><table><thead><tr><th>標準</th><th>定義</th><th>白話解釋</th></tr></thead><tbody><tr><td><code>screen</code></td><td>依據螢幕解析度來判斷</td><td>整個電腦螢幕</td></tr><tr><td><code>page</code></td><td>依據網頁頁面來判斷</td><td>有 scroll 的情況下畫面被暫時遮蔽的也算進去</td></tr><tr><td><code>client</code></td><td>依據瀏覽器窗口來判斷</td><td>不管有沒有 scroll，僅視窗長寬為主</td></tr></tbody></table><table><thead><tr><th>標準</th><th>定義</th></tr></thead><tbody><tr><td><code>innerHeight</code></td><td>網頁內容本身的高度</td></tr><tr><td><code>outerHeight</code></td><td>瀏覽器整個視窗的高度</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>scroll 皆不受影響。</p></div>`,74),n=[s];function r(c,i,p,d,h,u){return a(),t("div",null,n)}const y=e(o,[["render",r]]);export{m as __pageData,y as default};
