import{_ as e,o as t,c as o,V as l}from"./chunks/framework.fa42150b.js";const f=JSON.parse('{"title":"Linux Notes（ElementaryOS - Ubuntu）","description":"","frontmatter":{},"headers":[],"relativePath":"notes/misc/linux-notes.md"}'),i={name:"notes/misc/linux-notes.md"},c=l('<h1 id="linux-notes-elementaryos-ubuntu" tabindex="-1">Linux Notes（ElementaryOS - Ubuntu） <a class="header-anchor" href="#linux-notes-elementaryos-ubuntu" aria-label="Permalink to &quot;Linux Notes（ElementaryOS - Ubuntu）&quot;">​</a></h1><ul><li><code>file</code>：檔案</li><li><code>directory</code>：目錄（ 類似 windows 資料夾 ）</li><li><code>target_directory</code>（<code>path</code>）：目標目錄 ( 相對 / 絕對路徑 )</li><li><code>package</code>：套件、軟體等等</li></ul><h2 id="一般終端機操作" tabindex="-1">一般終端機操作 <a class="header-anchor" href="#一般終端機操作" aria-label="Permalink to &quot;一般終端機操作&quot;">​</a></h2><ul><li><kbd>Ctrl</kbd> + <kbd>C</kbd>：中斷目前指令</li><li><kbd>Ctrl</kbd> + <kbd>D</kbd>：中斷目前執行的程式</li><li><kbd>Ctrl</kbd> + <kbd>L</kbd>：讓終端機把上面執行的結果捲到上面</li><li><code>clear</code>：清空終端機目前顯示的內容</li></ul><h2 id="更新、下載" tabindex="-1">更新、下載 <a class="header-anchor" href="#更新、下載" aria-label="Permalink to &quot;更新、下載&quot;">​</a></h2><ul><li><code>sudo &lt;指令&gt;</code>：以管理員身份執行指令</li><li><code>sudo apt update</code>：更新本地下載清單 (下載東西前要執行)</li><li><code>sudo apt install &lt;package&gt;</code>：下載且安裝 package</li></ul><h2 id="檔案操作" tabindex="-1">檔案操作 <a class="header-anchor" href="#檔案操作" aria-label="Permalink to &quot;檔案操作&quot;">​</a></h2><ul><li><code>man &lt;指令&gt;</code>：顯示指令文件說明 ( 按 q 離開 )</li></ul><h3 id="路徑" tabindex="-1">路徑 <a class="header-anchor" href="#路徑" aria-label="Permalink to &quot;路徑&quot;">​</a></h3><ul><li><code>pwd</code>：印出當前路徑</li><li><code>cd &lt;target_directory&gt;</code>：移動到目標目錄</li></ul><h4 id="絕對路徑-從根目錄開始-ex-home-carrie" tabindex="-1">絕對路徑：從根目錄開始 ( Ex: <code>/home/carrie</code> ) <a class="header-anchor" href="#絕對路徑-從根目錄開始-ex-home-carrie" aria-label="Permalink to &quot;絕對路徑：從根目錄開始 ( Ex: `/home/carrie` )&quot;">​</a></h4><ul><li><code>cd /</code>：移動到根目錄 ( <code>root</code> )</li><li><code>cd</code> / <code>cd ~</code>：移動到家目錄 ( <code>home</code> )</li></ul><h4 id="相對路徑-從當前目錄開始-ex-home-carrie" tabindex="-1">相對路徑：從當前目錄開始 ( Ex: <code>home/carrie</code> ) <a class="header-anchor" href="#相對路徑-從當前目錄開始-ex-home-carrie" aria-label="Permalink to &quot;相對路徑：從當前目錄開始 ( Ex: `home/carrie` )&quot;">​</a></h4><ul><li><code>cd .</code>：移動到自己 ( 當前路徑 )</li><li><code>cd ..</code>：移動回到上一個目錄</li></ul><h3 id="創建、修改" tabindex="-1">創建、修改 <a class="header-anchor" href="#創建、修改" aria-label="Permalink to &quot;創建、修改&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>名稱用底線隔開 不要加空格 ( 若有空格，請加上跳脫字元 <code>\\</code>)</p></div><ul><li><code>mkdir &lt;directory_name&gt; ...</code>：創建一個目錄 （... 代表可多個目錄）</li><li><code>mkdir -p &lt;directory_name&gt;</code>：強制創建目錄 ( 即使已經存在 )</li><li><code>touch &lt;file_name&gt;</code>：創建一個檔案 ( 若已存在，會修改最後編輯時間 )</li><li><code>ls &lt;target_directory&gt;</code>：列出此目錄的內容 （沒有寫 <code>target_directory</code> 就是指當前目錄）</li><li><code>ls -al</code>：列出當前目錄的所有內容 ( 含佔用空間、編輯時間等等 )</li><li><code>mv &lt;directory/file&gt; &lt;new_path&gt;</code>：將 <code>directory/file</code> 修改路徑成 <code>new_path</code></li><li><code>mv &lt;directory/file&gt; &lt;new_directory/file_name&gt;</code> 將 <code>directory/file</code> 重新命名為 <code>new_directory/file_name</code></li></ul><h3 id="複製" tabindex="-1">複製 <a class="header-anchor" href="#複製" aria-label="Permalink to &quot;複製&quot;">​</a></h3><ul><li><code>cp [-R] &lt;directory&gt; &lt;path&gt;</code>：複製一份 directory 到 path</li><li><code>cp &lt;file&gt; &lt;path&gt;</code>：複製一份 file 到 path</li></ul><h3 id="移除" tabindex="-1">移除 <a class="header-anchor" href="#移除" aria-label="Permalink to &quot;移除&quot;">​</a></h3><ul><li><code>rm [-Rf] &lt;target_directory&gt; ...</code>：刪除目標目錄（... 代表可多個目標目錄）</li><li><code>rm &lt;target_file&gt; ...</code>：刪除目標檔案</li></ul><h2 id="文字輸出檔案與串連" tabindex="-1">文字輸出檔案與串連 <a class="header-anchor" href="#文字輸出檔案與串連" aria-label="Permalink to &quot;文字輸出檔案與串連&quot;">​</a></h2><ul><li><code>echo &quot;text&quot;</code>：印出 <code>text</code> (含斷行)</li><li><code>printf &quot;text&quot;</code>：印出 <code>text</code> (沒有斷行)</li><li><code>printf &quot;\\n&quot;</code>：手動加入斷行</li><li><code>echo/printf &quot;text&quot; &gt; &lt;file/path&gt;</code>：將檔案內容清除再寫入 <code>text</code> (檔案不存在即產生)</li><li><code>echo/printf &quot;text&quot; &gt;&gt; &lt;file/path&gt;</code>：接在檔案內容後寫入 <code>text</code> (檔案不存在即產生)</li><li><code>cat &lt;file/path&gt;</code>：印出此檔案內容</li><li><code>cat &lt;file_1&gt; &lt;file_2&gt; ...</code>：印出 <code>file_1</code> 接上 <code>file_2</code> ... 後的內容 (原檔案不會受影響)</li><li><code>cat &lt;file_1&gt; &lt;file_2&gt; ... &gt;&gt; &lt;final_file&gt;</code>：將合併後內容寫入 <code>final_file</code></li></ul>',23),d=[c];function a(r,n,u,h,s,_){return t(),o("div",null,d)}const g=e(i,[["render",a]]);export{f as __pageData,g as default};
