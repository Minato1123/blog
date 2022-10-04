# LAUNCH Docs
## launch 文件介紹
![](https://i.imgur.com/ab1QGrR.png)

### launch 文件的格式
* 遵循 xml 格式規範，是一種標籤文件。
* 讓使用者能夠一次性執行多個節點的文件，讓機器人的開發與應用效率變為更加方便。
* 自行搜尋有無主節點的存在，若無則會以機器人本身的 IP 位址開啟主節點。

### Launch文件的常用標籤

| 標籤        | 意義                           |
|:----------- |:----------------------------- |
| `<launch>`  | 根標籤 ( root element )        |
| `<node>`    | 需要啟動的 node 與相關參數       |
| `<include>` | 包含其他的 launch 檔案          |
| `<param>`   | 定義參數到 ROS 系統的參數服務器   |
| `<arg>`     | 定義 xml 文件的變數             |
| `<remap>`   | 定義 Topic 的參數映射           |
| `<group>`   | 定義命名空間                    |


## 新增 Launch 文件
1. 開啟虛擬機器的 Ubuntu 系統
2. 開啟 Terminal 視窗
3. `roscd <package_name>`：切換目錄到指定的資料夾路徑
4. `mkdir launch`：建立資料夾 launch
5. `touch <folder_name>/<file_name>`：在指定的資料夾下新增指定名稱的文件檔案
6. 可在路徑 `<package_name>/launch` 的資料夾底下找到剛剛建立好的 launch 文件檔案
7. `<文字編輯器> <folder_name>/<file_name>`：編輯 launch 文件
8. #### launch 文件解析 - `<arg>` tag
    > 範例：`<arg name="ns_1" default="turtlesim1"/>`
    > 
    > | 屬性 | 意義 | 必要性 |
    > | -------- | -------- | -------- |
    > | name | 參數的名稱 | 必要 |
    > | default | 參數的預設值 ( 不能與屬性 value 一起使用 ) | 選項     |
    > | value | 參數的數值 ( 不能與屬性 default 一起使用 ) | 選項     |
    > | doc | 參數的註解，發生錯誤時提供之訊息 | 選項 |
    > 
    > * 引用方法
    > 在 launch 文件中直接以 `$(arg name)` 方式引用即可。<br>
    > 範例：`<group ns="$(arg ns_1)"> .... </group>`
9. #### launch 文件解析 - `<group>` tag
    > 範例：`<group ns="turtlesim1">....</group>`
    > 
    > | 屬性 | 意義 | 必要性 |
    > | -------- | -------- | -------- |
    > | ns | 指派節點至特定的命名空間 | 必要 |
    > | clear_params | 清除命名空間中的所有參數 ( 使用時請小心 ) | 選項 |
    > 
    > 節點動態流程圖的呈現
    > ![](https://i.imgur.com/ff8f7qK.png)

10. #### launch 文件解析 - `<node>` tag
    > 範例：`<node pkg="$(arg pkg_name)" name="sim" type="turtlesim_node"/>`
    > | 屬性 | 意義 | 必要性 |
    > | -------- | -------- | -------- |
    > | pkg | 節點所在的 package | 必要 |
    > | type | 執行的程式碼名稱 | 必要 |
    > | name | 節點的名稱 | 必要 |
    > | args | 執行的程式碼需要的參數 | 選項 |
    > | required | 節點的必要性 | 選項 |
    > | ns | 節點的命名空間 | 選項 |
    > | output | 節點的輸出 ( 預設* log / screen ) | 選項 |
    > 
    > * log：顯示在其他 log 文件中
    > * screen：顯示在 Terminal 上
    > 
    > **type 與 name 的差異性**
    > ![](https://i.imgur.com/FzvXRHX.png)
11. #### launch 文件解析 - `<remap>` tag
    > 範例：
    > ```
    > <group ns="turtlesim2">
    >   <remap from="turtle1/cmd_vel" to="/$(arg ns_1)/turtle1/cmd_vel"/>
    >   <node pkg="$(arg pkg_name)" name="sim" type="turtlesim_node"/>
    > </group>
    > ```
    > | 屬性 | 意義 | 必要性 |
    > | -------- | -------- | -------- 
    > | from | 被映射的主題來源 | 必要 |
    > | to | 映射的主題名稱 | 必要 |
    > 
    > * from 與 to 的詳細解釋
    > 相對路徑與絕對路徑的寫法需要特別注意。<br>
    > `/` 在最前方，表示絕對路徑；若未加上 `/` 則表示相對路徑。
12. 儲存 launch 文件


## launch 文件的應用
### 使用 launch 文件一次操控兩個 Turtlesim
1. `sudo gedit ~/.bashrc` 執行 launch 文件
    > 開始編輯 Terminal 的環境設定檔<br>
    > 確認主節點的位址設定為本地機器<br>
    > 在 `script set_ros_master.sh` 後方**不**加上 `<hostname>`表示將主節點設定為本地機器
2. `roslaunch <package_name> teleop_turtlesim.launch`：兩個 Turtlesim 視窗開啟
    > launch 文件會自動在本地機器中搜尋是否有主節點的存在，若是沒有則會自動啟動主節點<br>
    > 在 Terminal 視窗中按下鍵盤的方向鍵即可讓兩個 Turtlesim 視窗中的小烏龜同時移動
3. 取消執行 launch 文件
    > 按下按鍵 `「ctrl」+「c」` 取消正在執行中的程式


## ROS parameter 介紹
* #### Parameter Server 由 Master node ( 主節點 ) 管理，供節點使用與儲存
    > **動態 的 Parameter Server**<br>
    > Parameter Server 在 Master Node 執行時，便會一起執行。<br>
    > 而在 Master Node 關閉的時候也會一起被關閉。<br>
    > 節點在運行時，可以即時抓取存在於 Parameter Server 的參數使用，這將讓我們能夠動態調整機器人的參數，並即時得到機器人的回饋。<br>
    > 例如透過 PID 參數的調整，我們能夠即時看出 PID 參數對於機器人的影響。

* #### Master node 停止運行，Parameter Server 也停止運行
    > **Parameter Server 並不會永久存在**<br>
    > 這樣的情況將會讓我們設定好的 Parameter 也一起消失，使得下次再執行 ROS 系統時需要再重新調整參數。

### Parameter 與 yaml 檔案
* 透過 yaml 檔案，將調整過後的參數透過節點儲存。
* 後續便可以再使用相同參數，讓 launch 文件或是節點直接調用調整過好的參數繼續使用。
* 能在 launch 文件檔案直接設定 parameter。
* 不同程式碼撰寫的節點，讀取 yaml 檔案的參數實作方法也有不同。

## launch 文件撰寫 parameter
### 使用 launch 文件 改變 Turtlesim 的背景顏色
![](https://i.imgur.com/TYhBMDB.png)

* **private parameter**<br>
在參數前面加上`~` 代表這個參數是 private parameter。<br>
表示是由該節點發起並執行的參數。<br>
這樣就不需要每次都寫出完整的絕對路徑。

1. 開啟 Ubuntu 系統
2. 開啟 Terminal 視窗
3. `roscd <package_name>/launch`
4. `sudo <文字編輯器> teleop_turtlesim.launch`
5. 編輯 launch 文件檔案
6. #### launch 文件檔案 - `<param>` tag
    > 範例：
    > ```
    > <node pkg="$(arg pkg_name)" name="sim" type="turtlesim_node">
    > <param name="background_b" type="int" value="0"/>
    > </node>
    > ```
    > 
    > | 屬性 | 意義 | 必要性 |
    > | -------- | -------- | -------- |
    > | name | ROS 系統參數的名稱 | 必要 |
    > | type | ROS 系統參數的資料型態 ( str/int/double/bool/yaml ) | 選項 |
    > | value | 參數的數值 | 選項 |
    > * Private parameter
    > 若是將 Parameter 包含在 `<node>` 標籤，則會變成 private parameter。
    > 表示這個參數的命名規則，將會由 Node 的名稱決定。
    > 
    > **Parameter VS Private parameter**
    > ![](https://i.imgur.com/UE7tQmx.png)
7. 儲存 launch 文件檔案
8. 執行 launch 文件檔案
9. `roslaunch <package_name> teleop_turtlesim.launch`
    > 兩個 Turtlesim 視窗開啟，且背景顏色發生變化。
10. 開啟新的 Terminal 視窗分頁
11. `rosparam list` 查詢可使用的參數
12. `rosparam set /turtlesim1/background_b -- 255` 
    > 使用 rosparam 調整參數
    > 設定參數 background_b
    > * 背景顏色尚未發生變化
    > 因為節點 Turtlesim 並沒有參數即時更新功能
13. `rosservice list` 查詢可使用的服務
14. `rosservice call /turtlesim1_reset`：使用 rosservice 重新載入節點 Turtlesim 的相關參數
    > 節點 Turtlesim1 的背景顏色發生變化
15. 關閉所有執行中的節點

## launch 文件載入 yaml 格式檔案參數
### 新增 yaml 格式檔案
1. `roscd <package_name>`：切換目錄
2. `mkdir param`：新增資料夾
3. `touch param/turtlesim_param.yaml`：新增檔案 turtlesim_param.yaml
4. `<文字編輯器> param/turtlesim_param.yaml`：編輯 yaml 格式檔案
    > **第一種**：
    > ```
    > turtlesim1:
    >     sim:
    >         background_b: 255
    >         background_g: 255
    >         background_r: 0
    > ```
    > 以相對路徑方式撰寫，適合同一個節點下的所有參數撰寫，開頭的空格以4個空白按鍵撰寫。
    >  
    > **第二種**：
    > ```
    > /turtlesim/sim/background_b: 255
    > /turtlesim/sim/background_g: 0
    > /turtlesim/sim/background_r: 255
    > ```
    > 以絕對路徑方式撰寫，適合不同節點下的參數撰寫。
5. `roscd <package_name>/launch` 
6. `sudo <文字編輯器> teleop_turtlesim.launch`：編輯 launch 格式檔案
    > ![](https://i.imgur.com/4CBuZsB.png)
    > launch 文件中可以使用替換參數 `$(find package)` 協助我們搜尋 package 的路徑。
7. #### launch 文件檔案 - `<rosparam>` tag
    > 範例：`<rosparam command="load" file="$(find practice)/param/turtlesim_param.yaml"/>`
    > 
    > | 屬性 | 意義 | 必要性 |
    > | -------- | -------- | -------- |
    > | command | 等同於 rosparam 指令 ( 預設* load/dump/delete ) | 選項 |
    > | file | ROS 系統參數的檔案路徑 | 選項 |
8. 儲存 launch 文件檔案
9. `roslaunch <package_name> teleop_turtlesim.launch` 啟動 launch 文件
    > 兩個 Turtlesim 視窗開啟且背景顏色發生變化
10. 關閉所有執行中的節點