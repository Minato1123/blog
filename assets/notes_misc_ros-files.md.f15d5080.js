import{_ as e,o,c as r,Q as t}from"./chunks/framework.84e2b86f.js";const h=JSON.parse('{"title":"ROS File Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"notes/misc/ros-files.md"}'),l={name:"notes/misc/ros-files.md"},c=t('<h1 id="ros-file-configuration" tabindex="-1">ROS File Configuration <a class="header-anchor" href="#ros-file-configuration" aria-label="Permalink to &quot;ROS File Configuration&quot;">​</a></h1><h2 id="通訊機制" tabindex="-1">通訊機制 <a class="header-anchor" href="#通訊機制" aria-label="Permalink to &quot;通訊機制&quot;">​</a></h2><h3 id="topic-連續的資料傳輸" tabindex="-1">Topic ( 連續的資料傳輸 ) <a class="header-anchor" href="#topic-連續的資料傳輸" aria-label="Permalink to &quot;Topic ( 連續的資料傳輸 )&quot;">​</a></h3><ul><li>Publisher</li><li>Subscriber</li></ul><h3 id="service-外部呼叫、過程短暫" tabindex="-1">Service ( 外部呼叫、過程短暫 ) <a class="header-anchor" href="#service-外部呼叫、過程短暫" aria-label="Permalink to &quot;Service ( 外部呼叫、過程短暫 )&quot;">​</a></h3><ul><li>Client : 向 Server 端請求某項服務</li><li>Server : 執行 Client 端的請求, 並回傳 Client 端要求的回應</li></ul><h2 id="文件組織系統" tabindex="-1">文件組織系統 <a class="header-anchor" href="#文件組織系統" aria-label="Permalink to &quot;文件組織系統&quot;">​</a></h2><ul><li><strong>安裝目錄資料夾</strong> : 此處將會存放 ROS 系統的核心程式與相依的依賴、標頭檔、程式庫等預設文件檔案</li><li><strong>工作空間資料夾</strong> : 此處將會存放開發新專案時,會使用到的各種依賴、程式庫、標頭檔與程式碼等與新專案相關的各種檔案 ( 可以在任一資料夾目錄下建立 )</li></ul><h3 id="工作空間" tabindex="-1">工作空間 <a class="header-anchor" href="#工作空間" aria-label="Permalink to &quot;工作空間&quot;">​</a></h3><p><img src="https://i.imgur.com/nOVf6it.png" alt=""></p><ol><li><strong>build (Build Space)</strong> : 用來儲存工作空間編譯過程中產生的<strong>暫存訊息與中間文件</strong></li><li><strong>devel (Development Space)</strong> : 用來儲存<strong>編譯生成的可執行文件</strong></li><li><strong>src (Source Space)</strong> : 開發過程中<strong>最常用</strong>的資料夾, 用來儲存該專案所有<strong>可執行的程式碼文件</strong></li></ol><h3 id="project-src" tabindex="-1">project/src <a class="header-anchor" href="#project-src" aria-label="Permalink to &quot;project/src&quot;">​</a></h3><p><img src="https://i.imgur.com/hAPv9jq.png" alt=""></p><ol><li><strong>Node</strong> : 最小單位的可執行文件檔案，透過前面通訊模式互相傳遞資料。 ( 可使用 C、python、java ... 等 ROS 可支援的程式語言撰寫 )</li><li><strong>Package</strong> : 將各個不同的 Node 組合起來形成一個具有單一功能的 package。</li></ol><h3 id="project-src-package-配置" tabindex="-1">project/src/package 配置 <a class="header-anchor" href="#project-src-package-配置" aria-label="Permalink to &quot;project/src/package 配置&quot;">​</a></h3><p><img src="https://i.imgur.com/Qh11C7T.png" alt=""></p><ol><li><strong>action</strong> : 存放自定義的 action 文件檔案</li><li><strong>config</strong> : 存放自定義的動態配置文件檔案</li><li><strong>include</strong> : 存放 Package 會使用到的標頭檔案 ( C ) 或模組 ( Python )</li><li><strong>launch</strong> : 存放 launch 文件檔案</li><li><strong>msg</strong> : 存放自定義的 Message 文件檔案</li><li><strong>scripts</strong> : 存放可直接執行的 python 程式碼檔案，或是執行演算方法的程式碼檔案</li><li><strong>src</strong> : 存放需要進行編譯的 C 或 C++ 程式碼檔案，或是直接操作硬體相關的程式碼檔案</li><li><strong>srv</strong> : 存放自定義的 Srv 文件檔案</li><li><strong>CmakeLists.txt</strong> : 使用 catkin_make 編譯功能時，所需要的編譯規則</li><li><strong>package.xml</strong> : 存放會使用到其他 package 的清單</li></ol><h3 id="ros-文件配置" tabindex="-1">ROS 文件配置 <a class="header-anchor" href="#ros-文件配置" aria-label="Permalink to &quot;ROS 文件配置&quot;">​</a></h3><p><img src="https://i.imgur.com/NKYvFs3.png" alt=""></p><ol><li><strong>紅色虛線</strong> : 需要自行手動新增資料夾</li><li><strong>黃色虛線</strong> : 透過 catkin_create_pkg 指令，ROS 系統將會協助新增資料夾</li><li><strong>綠色虛線</strong> : 透過 catkin_make 指令，ROS 系統將會自動生成，不需要自行新增資料夾</li></ol><h2 id="新增-ros-專案空間" tabindex="-1">新增 ROS 專案空間 <a class="header-anchor" href="#新增-ros-專案空間" aria-label="Permalink to &quot;新增 ROS 專案空間&quot;">​</a></h2><ol><li><p>新增 ROS 專案所需使用的資料夾<br><code>mkdir –p ~/&lt;project_name&gt;/catkin_ws/src</code><br> 因為目錄原先都不存在，所以需要加上 <code>-p</code></p></li><li><p>切換目錄到指定的資料夾路徑 <code>cd ~/&lt;project_name&gt;/catkin_ws/src</code></p></li><li><p>建立一個 ROS 專案的 Package<br><code>catkin_create_pkg &lt;package_name&gt; &lt;dependency_1&gt; &lt;dependency_2&gt; ...</code></p><p><strong>dependency</strong> : package 需要使用到的依賴</p><blockquote><p>定義各種資料型態或是定義執行方法的文件檔案，例如：roscpp ( C )、rospy ( Python )、std_msgs、geometry_msgs ( 官方核心 msgs )</p></blockquote></li><li><p>建立 package 的存放文件路徑 <code>cd &lt;package_name&gt;</code></p></li><li><p>建立 package 的存放文件路徑 <code>mkdir &lt;directory_1&gt; &lt;directory_2&gt; ...</code></p></li><li><p>配置 ROS 專案的工作空間<br></p></li></ol><blockquote><p>6-1. <code>cd ~/&lt;project_name&gt;/catkin_ws</code><br> 6-2. <code>catkin_make</code> <br></p><blockquote><p>若節點的設計使用的是靜態語言 ( 如 C 語言 )，每次修改或新建立節點都需要重新建立 ROS 專案的工作空間。<br></p></blockquote><p>6-3. <code>cd ~</code><br> 6-4. <code>roscd &lt;project_name&gt;</code><br> 6-5. <code>sudo &lt;文字編輯器&gt; ~/.bashrc</code> or <code>sudo &lt;文字編輯器&gt; ~/.zshrc</code><br></p><blockquote><p>文字編輯器 Ex : gedit、vi ( vscode )、vim ... <br></p></blockquote><p><strong>--- 將以下指令輸入到 Terminal 的環境設定檔最下方。</strong><br> 6-6. <code>current_ip=$(hostname -I | awk &#39;{print $1}&#39;)</code>：Ubuntu 的 IP 位址 <br> 6-7. <code>echo &quot;Your current IP is: &quot;${current_ip}</code>：顯示後面字串及 IP 位址<br> 6-8. <code>source ~/&lt;project_name&gt;/catkin_ws/devel/setup.bash</code> or <code>source ~/&lt;project_name&gt;/catkin_ws/devel/setup.zsh</code><br></p><blockquote><p>讀取 <code>setup.bash</code> ( 新增 package 後必輸入指令 )<br></p></blockquote><p>6-9. <code>export ROS_MASTER_URI=http://${current_ip}:11311</code> <br></p><blockquote><p>ROS 主節點位置 ( 11311是連接port )<br></p></blockquote><p>6-10. <code>export ROS_HOSTNAME=${current_ip}</code>：主機 IP 位址<br><strong>--- 儲存退出後繼續輸入</strong><br> 6-11. <code>source ~/.bashrc</code> or <code>source ~/.zshrc</code> <br></p><blockquote><p>顯示現在的作業系統所取得的 IP 位址 ( 重新載入環境設定檔、重開也行 )<br></p></blockquote><p>6-12. <code>roscd practice</code> 切換當前路徑 ( 表示可以正常使用此 package！)</p></blockquote><h3 id="shell" tabindex="-1">Shell <a class="header-anchor" href="#shell" aria-label="Permalink to &quot;Shell&quot;">​</a></h3><p><img src="https://i.imgur.com/1ej8wrE.png" alt=""></p><h3 id="shell-script" tabindex="-1">Shell Script <a class="header-anchor" href="#shell-script" aria-label="Permalink to &quot;Shell Script&quot;">​</a></h3><p><img src="https://i.imgur.com/wrrwnwT.png" alt=""></p><blockquote><p>由使用者輸入一長串與 Shell 相關的程式後儲存起來的檔案。<br> 讓硬體依據 Shell Script，自動執行相關的工作。</p></blockquote><h2 id="操作-turtlesim" tabindex="-1">操作 Turtlesim <a class="header-anchor" href="#操作-turtlesim" aria-label="Permalink to &quot;操作 Turtlesim&quot;">​</a></h2><ol><li><p>開啟 ROS 1 系統的主節點 ( 家目錄 ~ )<br><code>roscore</code></p></li><li><p>開啟 Terminal 分頁型視窗 ( 2 )<br><code>[ctrl] + [shift] + [t]</code></p></li><li><p>開啟節點 Turtlesim ( 2 )<br><code>rosrun turtlesim turtlesim_node</code><br><strong>turtlesim_node</strong> : 想要執行的程式碼檔案名稱<br><strong>turtlesim</strong> : <code>turtlesim_node</code> 存在的 package 名稱<br></p></li><li><p>再開啟 Terminal 分頁型視窗 ( 3 )<br><code>[ctrl] + [shift] + [t]</code></p></li><li><p>開啟節點 turtle_teleop_key ( 3 )<br><code>rosrun turtlesim turtle_teleop_key</code><br></p><blockquote><p>按下鍵盤上的方向鍵後遙控 Turtlesim。<br> 請注意！一定要在 Terminal 視窗中按下方向鍵，才可以遙控 Turtlesim。</p></blockquote></li><li><p>再開啟 Terminal 分頁型視窗 ( 4 )<br><code>[ctrl] + [shift] + [t]</code><br></p></li><li><p>列出存在於本次 ROS 系統中使用的 Node 名稱 ( 4 )<br><code>rosnode list</code>：視窗顯示當前 ROS 系統中執行的所有 node 資訊<br></p><ul><li>新開 Terminal 分頁視窗輸入<code>rosnode --h</code> 可查看 rosnode 指令其他功能。</li></ul></li><li><p>查看特定節點詳細資訊 ( 4 )<br><code>rosnode info /&lt;node_name&gt;</code><br></p></li><li><p>列出存在於本次 ROS 系統中使用的 Topic 名稱 ( 4 )<br><code>rostopic list</code>：視窗顯示當前 ROS 系統中所執行的所有 topic 資訊<br></p><ul><li>新開 Terminal 分頁視窗輸入<code>rostopic --h</code> 可查看 rostopic 指令其他功能。</li></ul></li><li><p>再開啟 Terminal 分頁型視窗 ( 5 )<br><code>[ctrl] + [shift] + [t]</code></p></li><li><p>監控特定 Topic 正在傳輸的資料 ( 5 )<br><code>rostopic echo /&lt;topic_name&gt;</code><br></p><blockquote><p>移動至遙控 turtlesim 的 Terminal 視窗 ( 3 )，開始遙控 Turtlesim。<br> 遙控 Turtlesim 的同時，監控視窗 ( 5 ) 便會出現 topic 正在傳送的 Message 資訊。<br> 若要停止監控，在監控視窗按下按鍵 <code>[ctrl]+[c]</code> 。</p></blockquote></li><li><p>資料視覺化 – 使用 rqt 查看目前 ROS 系統中運行的 Node 與 Topic ( 空閒 terminal 分頁 )<br><code>rqt</code> 將開啟 rqt 視窗<br></p><blockquote><p>在 rqt 上方的功能選項列表中<br> 點選「Plugins」→「Introspection」→「Node Graph」</p></blockquote><blockquote><p>將滑鼠移至箭頭上方的文字，即會顯現出不同顏色之文字。<br><strong>藍色</strong> : Publisher Node<br><strong>紅色</strong> : Topic<br><strong>綠色</strong> : Subscriber<br></p><ul><li>rqt 內部的工具視窗內部的關閉圖示，可關閉此項工具。<br></li></ul></blockquote></li><li><p>列出存在於本次 ROS 系統中使用的 Service 名稱 ( 空閒 terminal 分頁 )<br><code>rosservice list</code> 顯示目前 ROS 系統中可以執行的 Service</p></li><li><p>查詢特定的 service 所使用的 srv 文件<br><code>rosservice type /&lt;service_name&gt;</code> 顯示 service_name 使用到的 srv 文件</p></li><li><p>查詢特定 srv 文件中的資料型態<br><code>rossrv show /&lt;srv_文件&gt;</code> 顯示 srv_文件 需要的資料型態 ( 例如： x、y、theta ... )</p></li><li><p>呼叫 service 要求進行特定動作<br><code>rosservice call /&lt;service_name&gt; -- &lt;value&gt;</code><br><strong>value</strong>：需要的資料數據，例如：x、y、theta、&quot;name&quot;... ( 輸入時用空格相隔 )</p><blockquote><p>Terminal 顯示呼叫 Service 後的回傳資料。<br> Turtlesim 視窗中，會複製出一支新的烏龜，在指定的座標軸及角度上。</p></blockquote></li><li><p>關閉所有執行中的程式<br><code>[ctrl] + [C]</code> 取消所有執行中的程式</p></li></ol>',30),i=[c];function s(a,n,p,d,g,u){return o(),r("div",null,i)}const m=e(l,[["render",s]]);export{h as __pageData,m as default};
