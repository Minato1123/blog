import{_ as e,o as a,c as l,Q as o}from"./chunks/framework.84e2b86f.js";const u=JSON.parse('{"title":"CSS BEM","description":"","frontmatter":{},"headers":[],"relativePath":"notes/front-end/css-bem.md"}'),s={name:"notes/front-end/css-bem.md"},t=o('<h1 id="css-bem" tabindex="-1">CSS BEM <a class="header-anchor" href="#css-bem" aria-label="Permalink to &quot;CSS BEM&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>B --- Block (區塊)</p><p>E --- Element（元素）</p><p>M --- Modifier（修飾符）</p></div><h2 id="基本原則及說明" tabindex="-1">基本原則及說明 <a class="header-anchor" href="#基本原則及說明" aria-label="Permalink to &quot;基本原則及說明&quot;">​</a></h2><h3 id="block-區塊" tabindex="-1">Block 區塊 <a class="header-anchor" href="#block-區塊" aria-label="Permalink to &quot;Block 區塊&quot;">​</a></h3><blockquote><p>每個 Block 在邏輯與功能上都是相互獨立，任何獨立的頁面元素都可以被視作一個區塊。</p></blockquote><ul><li>在邏輯上和功能上都相互獨立，頁面上<span class="g-mark">不能相依</span>其他 Blocks 或元素。</li><li>可以放置在頁面上的任何位置，也可以<span class="g-mark">互相嵌套</span>。</li><li>不要定義過多影響所在環境的外部樣式（e.g. <code>margin</code>）</li></ul><h3 id="element-元素" tabindex="-1">Element 元素 <a class="header-anchor" href="#element-元素" aria-label="Permalink to &quot;Element 元素&quot;">​</a></h3><blockquote><p>相依 Block，如果一個區域不能拿到外部單獨使用，將應該作為 ELement。</p></blockquote><ul><li>描述其結構、佈局或意義，語意上與 Block 相關。</li><li>不能與 Block 分開，<span class="g-mark">頁面上</span>不能相依其他的 Block 或 Element。</li><li>無法定義層次結構。</li><li>Element 和 Element 之間可以彼此<span class="g-mark">嵌套</span>。</li></ul><h3 id="modifier-修飾符" tabindex="-1">Modifier 修飾符 <a class="header-anchor" href="#modifier-修飾符" aria-label="Permalink to &quot;Modifier 修飾符&quot;">​</a></h3><blockquote><p>用來定義 Block 和 Element 的外觀、狀態或類型。</p></blockquote><ul><li>表達其外觀、狀態或行為。</li><li>不能脫離 Block 或 Element。</li><li>應該改變的是<span class="g-mark">實體</span>的外觀、行為或狀態，而不是<span class="g-mark">替換它</span>。</li><li>值可以是 Boolean 或 <span class="g-mark">Key-value</span> 形式。</li><li>不能同時具有<span class="g-mark">不同值的相同 Modifier</span>。</li></ul>',12),i=[t];function n(c,r,m,p,d,k){return a(),l("div",null,i)}const h=e(s,[["render",n]]);export{u as __pageData,h as default};