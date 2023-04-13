import{_ as t,o as a,c as e,Q as l}from"./chunks/framework.84e2b86f.js";const g=JSON.parse('{"title":"LAUNCH Docs","description":"","frontmatter":{},"headers":[],"relativePath":"notes/misc/launch-notes.md"}'),r={name:"notes/misc/launch-notes.md"},o=l('<h1 id="launch-docs" tabindex="-1">LAUNCH Docs <a class="header-anchor" href="#launch-docs" aria-label="Permalink to &quot;LAUNCH Docs&quot;">​</a></h1><h2 id="launch-文件介紹" tabindex="-1">launch 文件介紹 <a class="header-anchor" href="#launch-文件介紹" aria-label="Permalink to &quot;launch 文件介紹&quot;">​</a></h2><p><img src="https://i.imgur.com/ab1QGrR.png" alt=""></p><h3 id="launch-文件的格式" tabindex="-1">launch 文件的格式 <a class="header-anchor" href="#launch-文件的格式" aria-label="Permalink to &quot;launch 文件的格式&quot;">​</a></h3><ul><li>遵循 xml 格式規範，是一種標籤文件。</li><li>讓使用者能夠一次性執行多個節點的文件，讓機器人的開發與應用效率變為更加方便。</li><li>自行搜尋有無主節點的存在，若無則會以機器人本身的 IP 位址開啟主節點。</li></ul><h3 id="launch文件的常用標籤" tabindex="-1">Launch文件的常用標籤 <a class="header-anchor" href="#launch文件的常用標籤" aria-label="Permalink to &quot;Launch文件的常用標籤&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">標籤</th><th style="text-align:left;">意義</th></tr></thead><tbody><tr><td style="text-align:left;"><code>&lt;launch&gt;</code></td><td style="text-align:left;">根標籤 ( root element )</td></tr><tr><td style="text-align:left;"><code>&lt;node&gt;</code></td><td style="text-align:left;">需要啟動的 node 與相關參數</td></tr><tr><td style="text-align:left;"><code>&lt;include&gt;</code></td><td style="text-align:left;">包含其他的 launch 檔案</td></tr><tr><td style="text-align:left;"><code>&lt;param&gt;</code></td><td style="text-align:left;">定義參數到 ROS 系統的參數服務器</td></tr><tr><td style="text-align:left;"><code>&lt;arg&gt;</code></td><td style="text-align:left;">定義 xml 文件的變數</td></tr><tr><td style="text-align:left;"><code>&lt;remap&gt;</code></td><td style="text-align:left;">定義 Topic 的參數映射</td></tr><tr><td style="text-align:left;"><code>&lt;group&gt;</code></td><td style="text-align:left;">定義命名空間</td></tr></tbody></table><h2 id="新增-launch-文件" tabindex="-1">新增 Launch 文件 <a class="header-anchor" href="#新增-launch-文件" aria-label="Permalink to &quot;新增 Launch 文件&quot;">​</a></h2><ol><li><p>開啟虛擬機器的 Ubuntu 系統</p></li><li><p>開啟 Terminal 視窗</p></li><li><p><code>roscd &lt;package_name&gt;</code>：切換目錄到指定的資料夾路徑</p></li><li><p><code>mkdir launch</code>：建立資料夾 launch</p></li><li><p><code>touch &lt;folder_name&gt;/&lt;file_name&gt;</code>：在指定的資料夾下新增指定名稱的文件檔案</p></li><li><p>可在路徑 <code>&lt;package_name&gt;/launch</code> 的資料夾底下找到剛剛建立好的 launch 文件檔案</p></li><li><p><code>&lt;文字編輯器&gt; &lt;folder_name&gt;/&lt;file_name&gt;</code>：編輯 launch 文件</p></li><li><h4 id="launch-文件解析-arg-tag" tabindex="-1">launch 文件解析 - <code>&lt;arg&gt;</code> tag <a class="header-anchor" href="#launch-文件解析-arg-tag" aria-label="Permalink to &quot;launch 文件解析 - `&lt;arg&gt;` tag&quot;">​</a></h4><blockquote><p>範例：<code>&lt;arg name=&quot;ns_1&quot; default=&quot;turtlesim1&quot;/&gt;</code></p><table><thead><tr><th>屬性</th><th>意義</th><th>必要性</th></tr></thead><tbody><tr><td>name</td><td>參數的名稱</td><td>必要</td></tr><tr><td>default</td><td>參數的預設值 ( 不能與屬性 value 一起使用 )</td><td>選項</td></tr><tr><td>value</td><td>參數的數值 ( 不能與屬性 default 一起使用 )</td><td>選項</td></tr><tr><td>doc</td><td>參數的註解，發生錯誤時提供之訊息</td><td>選項</td></tr></tbody></table><ul><li>引用方法 在 launch 文件中直接以 <code>$(arg name)</code> 方式引用即可。<br> 範例：<code>&lt;group ns=&quot;$(arg ns_1)&quot;&gt; .... &lt;/group&gt;</code></li></ul></blockquote></li><li><h4 id="launch-文件解析-group-tag" tabindex="-1">launch 文件解析 - <code>&lt;group&gt;</code> tag <a class="header-anchor" href="#launch-文件解析-group-tag" aria-label="Permalink to &quot;launch 文件解析 - `&lt;group&gt;` tag&quot;">​</a></h4><blockquote><p>範例：<code>&lt;group ns=&quot;turtlesim1&quot;&gt;....&lt;/group&gt;</code></p><table><thead><tr><th>屬性</th><th>意義</th><th>必要性</th></tr></thead><tbody><tr><td>ns</td><td>指派節點至特定的命名空間</td><td>必要</td></tr><tr><td>clear_params</td><td>清除命名空間中的所有參數 ( 使用時請小心 )</td><td>選項</td></tr></tbody></table><p>節點動態流程圖的呈現 <img src="https://i.imgur.com/ff8f7qK.png" alt=""></p></blockquote></li><li><h4 id="launch-文件解析-node-tag" tabindex="-1">launch 文件解析 - <code>&lt;node&gt;</code> tag <a class="header-anchor" href="#launch-文件解析-node-tag" aria-label="Permalink to &quot;launch 文件解析 - `&lt;node&gt;` tag&quot;">​</a></h4><blockquote><p>範例：<code>&lt;node pkg=&quot;$(arg pkg_name)&quot; name=&quot;sim&quot; type=&quot;turtlesim_node&quot;/&gt;</code></p><table><thead><tr><th>屬性</th><th>意義</th><th>必要性</th></tr></thead><tbody><tr><td>pkg</td><td>節點所在的 package</td><td>必要</td></tr><tr><td>type</td><td>執行的程式碼名稱</td><td>必要</td></tr><tr><td>name</td><td>節點的名稱</td><td>必要</td></tr><tr><td>args</td><td>執行的程式碼需要的參數</td><td>選項</td></tr><tr><td>required</td><td>節點的必要性</td><td>選項</td></tr><tr><td>ns</td><td>節點的命名空間</td><td>選項</td></tr><tr><td>output</td><td>節點的輸出 ( 預設* log / screen )</td><td>選項</td></tr></tbody></table><ul><li>log：顯示在其他 log 文件中</li><li>screen：顯示在 Terminal 上</li></ul><p><strong>type 與 name 的差異性</strong><img src="https://i.imgur.com/FzvXRHX.png" alt=""></p></blockquote></li><li><h4 id="launch-文件解析-remap-tag" tabindex="-1">launch 文件解析 - <code>&lt;remap&gt;</code> tag <a class="header-anchor" href="#launch-文件解析-remap-tag" aria-label="Permalink to &quot;launch 文件解析 - `&lt;remap&gt;` tag&quot;">​</a></h4><blockquote><p>範例：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;group ns=&quot;turtlesim2&quot;&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  &lt;remap from=&quot;turtle1/cmd_vel&quot; to=&quot;/$(arg ns_1)/turtle1/cmd_vel&quot;/&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  &lt;node pkg=&quot;$(arg pkg_name)&quot; name=&quot;sim&quot; type=&quot;turtlesim_node&quot;/&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">&lt;/group&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><table><thead><tr><th>屬性</th><th>意義</th><th>必要性</th></tr></thead><tbody><tr><td>from</td><td>被映射的主題來源</td><td>必要</td></tr><tr><td>to</td><td>映射的主題名稱</td><td>必要</td></tr></tbody></table><ul><li>from 與 to 的詳細解釋 相對路徑與絕對路徑的寫法需要特別注意。<br><code>/</code> 在最前方，表示絕對路徑；若未加上 <code>/</code> 則表示相對路徑。</li></ul></blockquote></li><li><p>儲存 launch 文件</p></li></ol><h2 id="launch-文件的應用" tabindex="-1">launch 文件的應用 <a class="header-anchor" href="#launch-文件的應用" aria-label="Permalink to &quot;launch 文件的應用&quot;">​</a></h2><h3 id="使用-launch-文件一次操控兩個-turtlesim" tabindex="-1">使用 launch 文件一次操控兩個 Turtlesim <a class="header-anchor" href="#使用-launch-文件一次操控兩個-turtlesim" aria-label="Permalink to &quot;使用 launch 文件一次操控兩個 Turtlesim&quot;">​</a></h3><ol><li><code>sudo gedit ~/.bashrc</code> 執行 launch 文件 <blockquote><p>開始編輯 Terminal 的環境設定檔<br> 確認主節點的位址設定為本地機器<br> 在 <code>script set_ros_master.sh</code> 後方<strong>不</strong>加上 <code>&lt;hostname&gt;</code>表示將主節點設定為本地機器</p></blockquote></li><li><code>roslaunch &lt;package_name&gt; teleop_turtlesim.launch</code>：兩個 Turtlesim 視窗開啟 <blockquote><p>launch 文件會自動在本地機器中搜尋是否有主節點的存在，若是沒有則會自動啟動主節點<br> 在 Terminal 視窗中按下鍵盤的方向鍵即可讓兩個 Turtlesim 視窗中的小烏龜同時移動</p></blockquote></li><li>取消執行 launch 文件 <blockquote><p>按下按鍵 <code>「ctrl」+「c」</code> 取消正在執行中的程式</p></blockquote></li></ol><h2 id="ros-parameter-介紹" tabindex="-1">ROS parameter 介紹 <a class="header-anchor" href="#ros-parameter-介紹" aria-label="Permalink to &quot;ROS parameter 介紹&quot;">​</a></h2><ul><li><h4 id="parameter-server-由-master-node-主節點-管理-供節點使用與儲存" tabindex="-1">Parameter Server 由 Master node ( 主節點 ) 管理，供節點使用與儲存 <a class="header-anchor" href="#parameter-server-由-master-node-主節點-管理-供節點使用與儲存" aria-label="Permalink to &quot;Parameter Server 由 Master node ( 主節點 ) 管理，供節點使用與儲存&quot;">​</a></h4><blockquote><p><strong>動態 的 Parameter Server</strong><br> Parameter Server 在 Master Node 執行時，便會一起執行。<br> 而在 Master Node 關閉的時候也會一起被關閉。<br> 節點在運行時，可以即時抓取存在於 Parameter Server 的參數使用，這將讓我們能夠動態調整機器人的參數，並即時得到機器人的回饋。<br> 例如透過 PID 參數的調整，我們能夠即時看出 PID 參數對於機器人的影響。</p></blockquote></li><li><h4 id="master-node-停止運行-parameter-server-也停止運行" tabindex="-1">Master node 停止運行，Parameter Server 也停止運行 <a class="header-anchor" href="#master-node-停止運行-parameter-server-也停止運行" aria-label="Permalink to &quot;Master node 停止運行，Parameter Server 也停止運行&quot;">​</a></h4><blockquote><p><strong>Parameter Server 並不會永久存在</strong><br> 這樣的情況將會讓我們設定好的 Parameter 也一起消失，使得下次再執行 ROS 系統時需要再重新調整參數。</p></blockquote></li></ul><h3 id="parameter-與-yaml-檔案" tabindex="-1">Parameter 與 yaml 檔案 <a class="header-anchor" href="#parameter-與-yaml-檔案" aria-label="Permalink to &quot;Parameter 與 yaml 檔案&quot;">​</a></h3><ul><li>透過 yaml 檔案，將調整過後的參數透過節點儲存。</li><li>後續便可以再使用相同參數，讓 launch 文件或是節點直接調用調整過好的參數繼續使用。</li><li>能在 launch 文件檔案直接設定 parameter。</li><li>不同程式碼撰寫的節點，讀取 yaml 檔案的參數實作方法也有不同。</li></ul><h2 id="launch-文件撰寫-parameter" tabindex="-1">launch 文件撰寫 parameter <a class="header-anchor" href="#launch-文件撰寫-parameter" aria-label="Permalink to &quot;launch 文件撰寫 parameter&quot;">​</a></h2><h3 id="使用-launch-文件-改變-turtlesim-的背景顏色" tabindex="-1">使用 launch 文件 改變 Turtlesim 的背景顏色 <a class="header-anchor" href="#使用-launch-文件-改變-turtlesim-的背景顏色" aria-label="Permalink to &quot;使用 launch 文件 改變 Turtlesim 的背景顏色&quot;">​</a></h3><p><img src="https://i.imgur.com/TYhBMDB.png" alt=""></p><ul><li><strong>private parameter</strong><br> 在參數前面加上<code>~</code> 代表這個參數是 private parameter。<br> 表示是由該節點發起並執行的參數。<br> 這樣就不需要每次都寫出完整的絕對路徑。</li></ul><ol><li>開啟 Ubuntu 系統</li><li>開啟 Terminal 視窗</li><li><code>roscd &lt;package_name&gt;/launch</code></li><li><code>sudo &lt;文字編輯器&gt; teleop_turtlesim.launch</code></li><li>編輯 launch 文件檔案</li><li><h4 id="launch-文件檔案-param-tag" tabindex="-1">launch 文件檔案 - <code>&lt;param&gt;</code> tag <a class="header-anchor" href="#launch-文件檔案-param-tag" aria-label="Permalink to &quot;launch 文件檔案 - `&lt;param&gt;` tag&quot;">​</a></h4><blockquote><p>範例：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;node pkg=&quot;$(arg pkg_name)&quot; name=&quot;sim&quot; type=&quot;turtlesim_node&quot;&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">&lt;param name=&quot;background_b&quot; type=&quot;int&quot; value=&quot;0&quot;/&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">&lt;/node&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table><thead><tr><th>屬性</th><th>意義</th><th>必要性</th></tr></thead><tbody><tr><td>name</td><td>ROS 系統參數的名稱</td><td>必要</td></tr><tr><td>type</td><td>ROS 系統參數的資料型態 ( str/int/double/bool/yaml )</td><td>選項</td></tr><tr><td>value</td><td>參數的數值</td><td>選項</td></tr></tbody></table><ul><li>Private parameter 若是將 Parameter 包含在 <code>&lt;node&gt;</code> 標籤，則會變成 private parameter。 表示這個參數的命名規則，將會由 Node 的名稱決定。</li></ul><p><strong>Parameter VS Private parameter</strong><img src="https://i.imgur.com/UE7tQmx.png" alt=""></p></blockquote></li><li>儲存 launch 文件檔案</li><li>執行 launch 文件檔案</li><li><code>roslaunch &lt;package_name&gt; teleop_turtlesim.launch</code><blockquote><p>兩個 Turtlesim 視窗開啟，且背景顏色發生變化。</p></blockquote></li><li>開啟新的 Terminal 視窗分頁</li><li><code>rosparam list</code> 查詢可使用的參數</li><li><code>rosparam set /turtlesim1/background_b -- 255</code><blockquote><p>使用 rosparam 調整參數 設定參數 background_b</p><ul><li>背景顏色尚未發生變化 因為節點 Turtlesim 並沒有參數即時更新功能</li></ul></blockquote></li><li><code>rosservice list</code> 查詢可使用的服務</li><li><code>rosservice call /turtlesim1_reset</code>：使用 rosservice 重新載入節點 Turtlesim 的相關參數 <blockquote><p>節點 Turtlesim1 的背景顏色發生變化</p></blockquote></li><li>關閉所有執行中的節點</li></ol><h2 id="launch-文件載入-yaml-格式檔案參數" tabindex="-1">launch 文件載入 yaml 格式檔案參數 <a class="header-anchor" href="#launch-文件載入-yaml-格式檔案參數" aria-label="Permalink to &quot;launch 文件載入 yaml 格式檔案參數&quot;">​</a></h2><h3 id="新增-yaml-格式檔案" tabindex="-1">新增 yaml 格式檔案 <a class="header-anchor" href="#新增-yaml-格式檔案" aria-label="Permalink to &quot;新增 yaml 格式檔案&quot;">​</a></h3><ol><li><code>roscd &lt;package_name&gt;</code>：切換目錄</li><li><code>mkdir param</code>：新增資料夾</li><li><code>touch param/turtlesim_param.yaml</code>：新增檔案 turtlesim_param.yaml</li><li><code>&lt;文字編輯器&gt; param/turtlesim_param.yaml</code>：編輯 yaml 格式檔案 <blockquote><p><strong>第一種</strong>：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">turtlesim1:</span></span>\n<span class="line"><span style="color:#A6ACCD;">    sim:</span></span>\n<span class="line"><span style="color:#A6ACCD;">        background_b: 255</span></span>\n<span class="line"><span style="color:#A6ACCD;">        background_g: 255</span></span>\n<span class="line"><span style="color:#A6ACCD;">        background_r: 0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>以相對路徑方式撰寫，適合同一個節點下的所有參數撰寫，開頭的空格以4個空白按鍵撰寫。</p><p><strong>第二種</strong>：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/turtlesim/sim/background_b: 255</span></span>\n<span class="line"><span style="color:#A6ACCD;">/turtlesim/sim/background_g: 0</span></span>\n<span class="line"><span style="color:#A6ACCD;">/turtlesim/sim/background_r: 255</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>以絕對路徑方式撰寫，適合不同節點下的參數撰寫。</p></blockquote></li><li><code>roscd &lt;package_name&gt;/launch</code></li><li><code>sudo &lt;文字編輯器&gt; teleop_turtlesim.launch</code>：編輯 launch 格式檔案 <blockquote><p><img src="https://i.imgur.com/4CBuZsB.png" alt=""> launch 文件中可以使用替換參數 <code>$(find package)</code> 協助我們搜尋 package 的路徑。</p></blockquote></li><li><h4 id="launch-文件檔案-rosparam-tag" tabindex="-1">launch 文件檔案 - <code>&lt;rosparam&gt;</code> tag <a class="header-anchor" href="#launch-文件檔案-rosparam-tag" aria-label="Permalink to &quot;launch 文件檔案 - `&lt;rosparam&gt;` tag&quot;">​</a></h4><blockquote><p>範例：<code>&lt;rosparam command=&quot;load&quot; file=&quot;$(find practice)/param/turtlesim_param.yaml&quot;/&gt;</code></p><table><thead><tr><th>屬性</th><th>意義</th><th>必要性</th></tr></thead><tbody><tr><td>command</td><td>等同於 rosparam 指令 ( 預設* load/dump/delete )</td><td>選項</td></tr><tr><td>file</td><td>ROS 系統參數的檔案路徑</td><td>選項</td></tr></tbody></table></blockquote></li><li>儲存 launch 文件檔案</li><li><code>roslaunch &lt;package_name&gt; teleop_turtlesim.launch</code> 啟動 launch 文件 <blockquote><p>兩個 Turtlesim 視窗開啟且背景顏色發生變化</p></blockquote></li><li>關閉所有執行中的節點</li></ol>',24),n=[o];function s(d,c,i,u,p,h){return a(),e("div",null,n)}const b=t(r,[["render",s]]);export{g as __pageData,b as default};
