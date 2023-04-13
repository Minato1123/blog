import{_ as e,o as s,c as o,Q as a}from"./chunks/framework.84e2b86f.js";const m=JSON.parse('{"title":"JS DOM Event","description":"","frontmatter":{},"headers":[],"relativePath":"notes/front-end/js-dom-event.md"}'),n={name:"notes/front-end/js-dom-event.md"},l=a(`<h1 id="js-dom-event" tabindex="-1">JS DOM Event <a class="header-anchor" href="#js-dom-event" aria-label="Permalink to &quot;JS DOM Event&quot;">​</a></h1><h2 id="事件監聽" tabindex="-1">事件監聽 <a class="header-anchor" href="#事件監聽" aria-label="Permalink to &quot;事件監聽&quot;">​</a></h2><h3 id="事件的監聽器" tabindex="-1">事件的監聽器 <a class="header-anchor" href="#事件的監聽器" aria-label="Permalink to &quot;事件的監聽器&quot;">​</a></h3><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">元素</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(事件名稱</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 事件處理器</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 捕獲</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">冒泡機制)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><ul><li>事件名稱：<code>click</code>、... <a href="https://developer.mozilla.org/zh-TW/docs/Web/Events" target="_blank" rel="noreferrer">其他 Event reference</a></li><li>事件處理器：事件觸發時執行的 Function</li><li>捕獲 / 冒泡機制：Boolean [ true / 捕獲、false / 冒泡 ( 預設 ) ]</li></ul></blockquote><h3 id="解除事件的註冊" tabindex="-1">解除事件的註冊 <a class="header-anchor" href="#解除事件的註冊" aria-label="Permalink to &quot;解除事件的註冊&quot;">​</a></h3><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">元素</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeEventListener</span><span style="color:#A6ACCD;">(事件名稱</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 事件處理器</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 捕獲</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">冒泡機制)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>事件處理器需要與綁定時的處理器指<span class="span-heightlight">同一個實體</span></p></blockquote><h3 id="option" tabindex="-1">Option <a class="header-anchor" href="#option" aria-label="Permalink to &quot;Option&quot;">​</a></h3><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">元素</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(事件名稱</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 事件處理器</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">once</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">passive</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">capture</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><ul><li><code>once</code>：事件只會觸發一次，結束後自動解除事件監聽</li><li><code>passive</code>：true / 事件處理器不會呼叫 <code>event.preventDafault()</code> ( 執行默認行為 )</li><li><code>capture</code>：true / 捕獲、false / 冒泡 ( 預設 )</li></ul></blockquote><h2 id="網頁介面相關事件" tabindex="-1">網頁介面相關事件 <a class="header-anchor" href="#網頁介面相關事件" aria-label="Permalink to &quot;網頁介面相關事件&quot;">​</a></h2><ul><li><code>load</code>：註冊在 window 上，網頁資源全部載入完畢後觸發 若是 img 上的 <code>load</code> 則表示此圖片載入完畢後觸發</li><li><code>unload</code>：在網頁被卸載<strong>之後</strong>觸發</li><li><code>beforeunload</code>：在網頁被卸載<strong>之前</strong>觸發</li><li><code>error</code>：在 <code>document</code> 或圖片載入錯誤時觸發</li></ul><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">image.jpg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onerror</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;this.</span><span style="color:#A6ACCD;">src</span><span style="color:#89DDFF;">=&#39;</span><span style="color:#C3E88D;">default.jpg</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>resize</code>：當瀏覽器或指定元素的<strong>尺寸變更</strong>時觸發</li><li><code>fullscreenchange</code>：當使用者切換瀏覽器為全螢幕或還原視窗時觸發</li><li><code>scroll</code>：當瀏覽器或指定元素的卷軸被拉動時觸發</li><li><code>DOMContentLoaded</code>：當 DOM 結構被完整讀取跟解析後觸發 ( 不須等待外部資源讀取完成 )</li></ul><h2 id="滑鼠相關事件" tabindex="-1"><a href="https://medium.com/@shizukuichi/mouse-event-%E5%B0%8F%E7%AD%86%E8%A8%98-feb5dd866b0" target="_blank" rel="noreferrer">滑鼠相關事件</a> <a class="header-anchor" href="#滑鼠相關事件" aria-label="Permalink to &quot;[滑鼠相關事件](https://medium.com/@shizukuichi/mouse-event-%E5%B0%8F%E7%AD%86%E8%A8%98-feb5dd866b0)&quot;">​</a></h2><ul><li><code>mousedown</code>：滑鼠點擊某元素<strong>按下</strong>時觸發</li><li><code>mouseup</code>：滑鼠點擊某元素<strong>放開</strong>時觸發</li><li><code>click</code>：滑鼠<strong>點擊</strong>某元素時觸發</li><li><code>dblclick</code>：滑鼠<strong>連點擊兩次</strong>某元素時觸發</li><li><code>mouseenter</code>：滑鼠<strong>進入</strong>某元素時觸發</li><li><code>mouseover</code>：滑鼠<strong>進入</strong>某元素時觸發 ( 滑鼠經過<strong>不同元素</strong>時觸發 )</li><li><code>mousemove</code>：滑鼠在某元素內<strong>移動</strong>時<strong>連續</strong>觸發</li><li><code>mouseleave</code>：滑鼠<strong>完全離開</strong>某元素時觸發</li><li><code>mouseout</code>：滑鼠<strong>離開</strong>某元素時觸發</li></ul><h3 id="mouseenter-vs-mouseover" tabindex="-1">#<code>mouseenter</code> vs <code>mouseover</code> <a class="header-anchor" href="#mouseenter-vs-mouseover" aria-label="Permalink to &quot;#\`mouseenter\` vs \`mouseover\`&quot;">​</a></h3><blockquote><ol><li><code>mouseover</code> 會將事件冒泡至上層的元素當中</li><li><code>mouseover</code> 的觸發時機較早</li></ol><p><a href="https://codepen.io/minato1123/pen/ZEXNqEJ" target="_blank" rel="noreferrer">Codepen 練習</a></p></blockquote><h3 id="mouseleave-vs-mouseout" tabindex="-1">#<code>mouseleave</code> vs <code>mouseout</code> <a class="header-anchor" href="#mouseleave-vs-mouseout" aria-label="Permalink to &quot;#\`mouseleave\` vs \`mouseout\`&quot;">​</a></h3><blockquote><ol><li><code>mouseout</code> 會將事件冒泡至上層的元素當中</li><li><code>mouseout</code> 的觸發時機較早</li></ol></blockquote><h2 id="鍵盤相關事件" tabindex="-1">鍵盤相關事件 <a class="header-anchor" href="#鍵盤相關事件" aria-label="Permalink to &quot;鍵盤相關事件&quot;">​</a></h2><ul><li><code>keydown</code>：<strong>壓下</strong>鍵盤按鍵時觸發</li><li><code>keypress</code>：按住時會觸發，按住不放則連續觸發 ( 除了 Shift、Fn、CapsLock )</li><li><code>keyup</code>：<strong>放開</strong>鍵盤按鍵時觸發</li><li><code>event.keyCode</code>：在事件觸發時，可以得知使用者按下的按鍵 <blockquote><p><a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode" target="_blank" rel="noreferrer">keyCode 對照表</a></p></blockquote></li></ul><h3 id="觸發順序" tabindex="-1">觸發順序 <a class="header-anchor" href="#觸發順序" aria-label="Permalink to &quot;觸發順序&quot;">​</a></h3><blockquote><ol><li><code>keydown</code> 2. <code>keypress</code> 3. <code>keyup</code></li></ol></blockquote><h2 id="表單相關事件" tabindex="-1">表單相關事件 <a class="header-anchor" href="#表單相關事件" aria-label="Permalink to &quot;表單相關事件&quot;">​</a></h2><ul><li><code>input</code>：當 input、textarea 或帶有 contenteditable 的元素<strong>內容被改變時馬上觸發</strong></li><li><code>select</code>：當使用者在 input、textarea 元素<strong>選取文字</strong>時觸發 <blockquote><p><code>event.target.selectionStart</code>：被選取文字範圍的<strong>起點</strong><code>event.target.selectionEnd</code>：被選取文字範圍的<strong>終點</strong><code>event.target.value.substr(event.target.selectionStart, event.target.selectionEnd)</code>：取出被選取的文字區段</p></blockquote></li><li><code>change</code>：當 input、select、textarea、radio、checkbox 等表單元素被改變時觸發 ( 目前焦點<strong>離開輸入框後</strong> )</li><li><code>submit</code>：當表單被<strong>送出後</strong>觸發 ( 進行表單驗證 )</li><li><code>reset</code>：當表單被<strong>重置</strong>時觸發</li><li><code>focus</code>：當表單元素被<strong>聚焦</strong>時觸發</li><li><code>blur</code>：當表單元素<strong>失去焦點</strong>時觸發</li></ul><h2 id="特殊事件" tabindex="-1">特殊事件 <a class="header-anchor" href="#特殊事件" aria-label="Permalink to &quot;特殊事件&quot;">​</a></h2><h3 id="composition-event-組成事件" tabindex="-1">Composition Event 組成事件 <a class="header-anchor" href="#composition-event-組成事件" aria-label="Permalink to &quot;Composition Event 組成事件&quot;">​</a></h3><ul><li><code>compositionstart</code>：輸入框內開啟輸入法，且<strong>正在拼字</strong>時觸發</li><li><code>compositionend</code>：輸入框內開啟輸入法，且<strong>正在拼字或選字更改內容</strong>時觸發</li><li><code>compositionupdate</code>：輸入框內開啟輸入法，且<strong>正要送出</strong>時觸發 <blockquote><p><a href="https://jsbin.com/mofepimiqo/1/edit?js,console,output" target="_blank" rel="noreferrer">組成事件-範例</a></p></blockquote></li></ul><h3 id="剪貼簿事件" tabindex="-1">剪貼簿事件 <a class="header-anchor" href="#剪貼簿事件" aria-label="Permalink to &quot;剪貼簿事件&quot;">​</a></h3><ul><li><code>cut</code>：當使用者在網頁上選取某段文字並進行<strong>剪下</strong>時觸發</li><li><code>copy</code>：當使用者在網頁上選取某段文字並進行<strong>複製</strong>時觸發</li><li><code>paste</code>：當使用者將剪貼簿上的文字<strong>貼上</strong>時觸發</li></ul><h2 id="自訂義事件" tabindex="-1">自訂義事件 <a class="header-anchor" href="#自訂義事件" aria-label="Permalink to &quot;自訂義事件&quot;">​</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> event </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Event</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">事件名稱</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 監聽事件</span></span>
<span class="line"><span style="color:#A6ACCD;">元素</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">事件名稱</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 事件處理器</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 觸發事件</span></span>
<span class="line"><span style="color:#A6ACCD;">元素</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dispatchEvent</span><span style="color:#A6ACCD;">(event)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>event.preventDafault()</code>：取消事件的預設行為</p><p><code>event.stopPropagation()</code>：阻止事件向上冒泡傳遞</p>`,36),t=[l];function r(c,p,i,d,u,h){return s(),o("div",null,t)}const b=e(n,[["render",r]]);export{m as __pageData,b as default};
