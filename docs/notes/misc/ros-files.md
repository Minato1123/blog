# ROS File Configuration

## 通訊機制
### Topic ( 連續的資料傳輸 )
* Publisher
* Subscriber
### Service ( 外部呼叫、過程短暫 )
* Client : 向 Server 端請求某項服務
* Server : 執行 Client 端的請求, 並回傳 Client 端要求的回應

## 文件組織系統
* **安裝目錄資料夾** : 此處將會存放 ROS 系統的核心程式與相依的依賴、標頭檔、程式庫等預設文件檔案
* **工作空間資料夾** : 此處將會存放開發新專案時,會使用到的各種依賴、程式庫、標頭檔與程式碼等與新專案相關的各種檔案 ( 可以在任一資料夾目錄下建立 )

### 工作空間
![](https://i.imgur.com/nOVf6it.png)
1. **build (Build Space)** : 用來儲存工作空間編譯過程中產生的**暫存訊息與中間文件**
2. **devel (Development Space)** : 用來儲存**編譯生成的可執行文件**
3. **src (Source Space)** : 開發過程中**最常用**的資料夾, 用來儲存該專案所有**可執行的程式碼文件**

### project/src
![](https://i.imgur.com/hAPv9jq.png)
1. **Node** : 最小單位的可執行文件檔案，透過前面通訊模式互相傳遞資料。
( 可使用 C、python、java ... 等 ROS 可支援的程式語言撰寫 )
2. **Package** : 將各個不同的 Node 組合起來形成一個具有單一功能的 package。


### project/src/package 配置

![](https://i.imgur.com/Qh11C7T.png)
1. **action** : 存放自定義的 action 文件檔案
2. **config** : 存放自定義的動態配置文件檔案
3. **include** : 存放 Package 會使用到的標頭檔案 ( C ) 或模組 ( Python )
4. **launch** : 存放 launch 文件檔案
5. **msg** : 存放自定義的 Message 文件檔案
6. **scripts** : 存放可直接執行的 python 程式碼檔案，或是執行演算方法的程式碼檔案
7. **src** : 存放需要進行編譯的 C 或 C++ 程式碼檔案，或是直接操作硬體相關的程式碼檔案
8. **srv** : 存放自定義的 Srv 文件檔案
9. **CmakeLists.txt** : 使用 catkin_make 編譯功能時，所需要的編譯規則
10. **package.xml** : 存放會使用到其他 package 的清單

### ROS 文件配置
![](https://i.imgur.com/NKYvFs3.png)
1. **紅色虛線** : 需要自行手動新增資料夾
2. **黃色虛線** : 透過 catkin_create_pkg 指令，ROS 系統將會協助新增資料夾
3. **綠色虛線** : 透過 catkin_make 指令，ROS 系統將會自動生成，不需要自行新增資料夾



## 新增 ROS 專案空間
1. 新增 ROS 專案所需使用的資料夾<br>
`mkdir –p ~/<project_name>/catkin_ws/src`<br>
因為目錄原先都不存在，所以需要加上 `-p`
2. 切換目錄到指定的資料夾路徑
`cd ~/<project_name>/catkin_ws/src`
3. 建立一個 ROS 專案的 Package<br>
`catkin_create_pkg <package_name> <dependency_1> <dependency_2> ...` 

    **dependency** : package 需要使用到的依賴 
    > 定義各種資料型態或是定義執行方法的文件檔案，例如：roscpp ( C )、rospy ( Python )、std_msgs、geometry_msgs ( 官方核心 msgs )
4. 建立 package 的存放文件路徑
`cd <package_name>`
5. 建立 package 的存放文件路徑
`mkdir <directory_1> <directory_2> ...`
6. 配置 ROS 專案的工作空間<br>
  > 6-1. `cd ~/<project_name>/catkin_ws`<br>
  > 6-2. `catkin_make` <br>
  >
  > > 若節點的設計使用的是靜態語言 ( 如 C 語言 )，每次修改或新建立節點都需要重新建立 ROS 專案的工作空間。<br>
  > 
  > 6-3. `cd ~`<br>
  > 6-4. `roscd <project_name>`<br>
  > 6-5. `sudo <文字編輯器> ~/.bashrc` or `sudo <文字編輯器> ~/.zshrc`<br>
  >
  > > 文字編輯器 Ex : gedit、vi ( vscode )、vim ... <br>
  > 
  > **--- 將以下指令輸入到 Terminal 的環境設定檔最下方。**<br>
  > 6-6. `current_ip=$(hostname -I | awk '{print $1}')`：Ubuntu 的 IP 位址 <br>
  > 6-7. `echo "Your current IP is: "${current_ip}`：顯示後面字串及 IP 位址<br>
  > 6-8. `source ~/<project_name>/catkin_ws/devel/setup.bash` or `source ~/<project_name>/catkin_ws/devel/setup.zsh`<br>
  >
  > > 讀取 `setup.bash` ( 新增 package 後必輸入指令 )<br>
  >
  > 6-9. `export ROS_MASTER_URI=http://${current_ip}:11311` <br>
  >
  > > ROS 主節點位置 ( 11311是連接port )<br>
  >
  > 6-10. `export ROS_HOSTNAME=${current_ip}`：主機 IP 位址<br>
  > **--- 儲存退出後繼續輸入**<br>
  > 6-11. `source ~/.bashrc` or `source ~/.zshrc` <br>
  >
  > > 顯示現在的作業系統所取得的 IP 位址 ( 重新載入環境設定檔、重開也行 )<br>
  >
  > 6-12. `roscd practice` 切換當前路徑 ( 表示可以正常使用此 package！)

### Shell
![](https://i.imgur.com/1ej8wrE.png)
### Shell Script
![](https://i.imgur.com/wrrwnwT.png)
> 由使用者輸入一長串與 Shell 相關的程式後儲存起來的檔案。<br>
> 讓硬體依據 Shell Script，自動執行相關的工作。



## 操作 Turtlesim
1. 開啟 ROS 1 系統的主節點 ( 家目錄 ~ )<br>
`roscore`

1. 開啟 Terminal 分頁型視窗 ( 2 )<br>
`[ctrl] + [shift] + [t]`
3. 開啟節點 Turtlesim ( 2 )<br>
`rosrun turtlesim turtlesim_node`<br>
**turtlesim_node** : 想要執行的程式碼檔案名稱<br>
**turtlesim** : `turtlesim_node` 存在的 package 名稱<br>
3. 再開啟 Terminal 分頁型視窗 ( 3 )<br>
`[ctrl] + [shift] + [t]`
5. 開啟節點 turtle_teleop_key ( 3 )<br>
`rosrun turtlesim turtle_teleop_key`<br>
    > 按下鍵盤上的方向鍵後遙控 Turtlesim。<br>
    > 請注意！一定要在 Terminal 視窗中按下方向鍵，才可以遙控 Turtlesim。
5. 再開啟 Terminal 分頁型視窗 ( 4 )<br>
`[ctrl] + [shift] + [t]`<br>
7. 列出存在於本次 ROS 系統中使用的 Node 名稱 ( 4 )<br>
`rosnode list`：視窗顯示當前 ROS 系統中執行的所有 node 資訊<br>
    * 新開 Terminal 分頁視窗輸入`rosnode --h` 可查看 rosnode 指令其他功能。
9. 查看特定節點詳細資訊 ( 4 )<br>
`rosnode info /<node_name>`<br>
11. 列出存在於本次 ROS 系統中使用的 Topic 名稱 ( 4 )<br>
`rostopic list`：視窗顯示當前 ROS 系統中所執行的所有 topic 資訊<br>
    * 新開 Terminal 分頁視窗輸入`rostopic --h` 可查看 rostopic 指令其他功能。

13. 再開啟 Terminal 分頁型視窗 ( 5 )<br>
`[ctrl] + [shift] + [t]`
15. 監控特定 Topic 正在傳輸的資料 ( 5 )<br>
`rostopic echo /<topic_name>`<br>
    > 移動至遙控 turtlesim 的 Terminal 視窗 ( 3 )，開始遙控 Turtlesim。<br>
    > 遙控 Turtlesim 的同時，監控視窗 ( 5 ) 便會出現 topic 正在傳送的 Message 資訊。<br>
    > 若要停止監控，在監控視窗按下按鍵 `[ctrl]+[c]` 。
17. 資料視覺化 – 使用 rqt 查看目前 ROS 系統中運行的 Node 與 Topic ( 空閒 terminal 分頁 )<br>
`rqt` 將開啟 rqt 視窗<br>
    > 在 rqt 上方的功能選項列表中<br>
    > 點選「Plugins」→「Introspection」→「Node Graph」

    > 將滑鼠移至箭頭上方的文字，即會顯現出不同顏色之文字。<br>
    > **藍色** : Publisher Node<br>
    > **紅色** : Topic<br>
    > **綠色** : Subscriber<br>
    >    * rqt 內部的工具視窗內部的關閉圖示，可關閉此項工具。<br>
19. 列出存在於本次 ROS 系統中使用的 Service 名稱 ( 空閒 terminal 分頁 )<br>
`rosservice list` 顯示目前 ROS 系統中可以執行的 Service
21. 查詢特定的 service 所使用的 srv 文件<br>
`rosservice type /<service_name>` 顯示 service_name 使用到的 srv 文件
23. 查詢特定 srv 文件中的資料型態<br>
`rossrv show /<srv_文件>` 顯示 srv_文件 需要的資料型態 ( 例如： x、y、theta ... )
25. 呼叫 service 要求進行特定動作<br>
`rosservice call /<service_name> -- <value>`<br>
**value**：需要的資料數據，例如：x、y、theta、"name"... ( 輸入時用空格相隔 )
    > Terminal 顯示呼叫 Service 後的回傳資料。<br>
    > Turtlesim 視窗中，會複製出一支新的烏龜，在指定的座標軸及角度上。
26. 關閉所有執行中的程式<br>
`[ctrl] + [C]` 取消所有執行中的程式