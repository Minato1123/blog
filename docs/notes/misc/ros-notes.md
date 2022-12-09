# ROS Notes


## Communication
* Node
    > ROS 裡最小的單位
* Topic ( Publisher / Subscriber )
    > 只能做單方面的發布、接收
* Service ( Server / Client )
    > 雙向，會暫停直到收到對方回應
* Action ( Server / Client )
    > 雙向，中間可接收 feedback
* Parameter Server
    > 
![](https://i.imgur.com/eHX8VBn.png)

### Topic ( Talker and Listener )
* `roscore`：開啟 master
  > 如果沒有開啟的話，node 彼此無法溝通。<br>
  > roscore 在一個網域中只能同時有一個！

![](https://i.imgur.com/gXDo79C.png)

* `rosrun roscpp_tutorials talker`：執行 talker node
* `rosrun roscpp_tutorials listener`：執行 listener node
  > talker 和 listener 是 package：roscpp_tutorials 內建的
* `rosnode list`：列出目前所有 node
* `rosnode info <node_name>`：列出 node 的詳細資訊
* `rostopic list`：列出目前所有的 topic
* `rostopic hz /<node_name>`：列出 topic 發送的頻率
* `rostopic info <topic_name>`：列出 topic 的詳細資訊
* `rosmsg show std_mags/<msg_name>`：列出 msg 的型別和變數名稱
* `rosnode ping /<node>`：測試 node 是否存在
  > 若不存在、關閉此 node，則會出現 `cannot ping [/<node>]: unknown node`

### Service
#### Request & Response Communication
![](https://i.imgur.com/25HuvPP.png)

* `rosservice list`：列出目前可用的 service
* `rosservice type /<service_name>`：列出 service 的型別
* `rosservice call /<service_name> <args>`：呼叫 service
  > args 為根據定義所需要的參數

#### Service Definition
副檔名：`.srv`
```
<request>
---
<response>
```
範例：
```
geometry_msgs/PoseStamped start
geometry_msgs/PoseStamped goal
float32 tolerance
---
nav_msgs/Path plan
```
#### Example
1. `roscore`：開啟 master
2. `rosrun roscpp_tutorials add_two_ints_server`：執行此 server
3. `rosservice list`：列出目前可用的 service
4. `rosservice type /add_two_ints`：列出 service 的型別
5. `rossrv show roscpp_tutorials/TwoInts`：查看 Service Definition
6. `rosservice call /add_two_ints "a: 10 b: 5"`：呼叫 service
  > 不知道參數型態，可在最後按「tab」獲得提示
  > 執行 `rosrun roscpp_tutorials add_two_ints_server` 的 Terminal 也會獲得資訊 

### Action
1. Request & Response with
  * Cancel the task ( preempt )
  * Receive feedback on the progress
2. Suitable to the scenario while **response time is too long**
3. Implemented with several topics

![](https://i.imgur.com/9XOTKK1.png)

#### Action Definition
副檔名：`.action`
```
<goal>
---
<result>
---
<feedback>
```
範例：
```
navigation_msgs/Path path
---
bool success
---
float32 remaining_distance
float32 initial_distance
```
#### Example
1. `roscore`
2. `rosrun actionlib_tutorials fibonacci_server`
3. `rosrun actionlib_tutorials fibonacci_client`
4. `rostopic list`：列出目前的 topic
5. `rostopic echo /fibonacci/status`：列出 status
6. `rostopic echo /fibonacci/feedback`：列出 feedback

### Parameters
1. ROS provides Parameter Server for nodes
2. ROS node can store/retrieve parameter from server at runtime
3. rosparam is the CLI tools for Parameter Server

* `rosparam list`：列出 parameters
* `rosparam set <parameter> <value>`：設定變數
* `rosparam get /<parameter>`：列出變數的內容
* `rosparam dump`：列出所有 parameters 的內容

### Comparison
Topic 單方向、連續將資料傳送給對方
Service 停下來等待回應
![](https://i.imgur.com/VAH8H19.png)

## Launch
1. Able to launch multiple ROS nodes and set parameters easily
1. It’ll start roscore if no roscore
1. 副檔名：`.launch`

範例：
```
<launch>
    <node name="listener" pkg="roscpp_tutorials" type="listener" output="screen"/>
    <node name="talker" pkg="roscpp_tutorials" type="talker" output="screen"/>
</launch>
```
* `roslaunch roscpp_tutorials talker_listener.launch`： 執行此 launch 檔案 ( 會自動 `roscore` )
  > 指令內容結構：`roslaunch <package> <file.launch>`

## Useful ROS Tool
### rostopic
1. **Latching mode**
    > Rostopic will publish a message to `/topic_name` and keep it latched -- any new subscribers that come online after you start rostopic will hear this message. You can stop this at any time by pressing `ctrl-C`.<br>
    > Rostopic 將向 `/topic_name` 發布訊息並保持鎖定 —— 任何啟動 rostopic 後上線的新 subscribers 都會聽到收到這則訊息。<br>
    > `rostopic pub -l /chatter std_msgs/String "data: 'test'"`
1. **Once mode**
    > If you don't want to have to stop rostopic with `ctrl-C`, you can publish in once mode. <br>
    > rostopic will keep the message latched.<br>
    > 如果不想用中斷 rostopic，可選擇 Once mode 下發布。<br>
    > rostopic 將鎖定訊息 3 秒後退出。<br>
    > `rostopic pub -1 /chatter std_msgs/String "data: 'test'"`
1. **Rate mode**
    > In rate mode, rostopic will publish your message at a specific rate. For example, -r 10 will publish at 10hz. For file and piped input, this defaults to 10hz.<br>
    > 在 Rate mode 下，rostopic 將以特定速率發布訊息。<br>
    > `rostopic pub -r 10 /chatter std_msgs/String "data: 'test'"`

### rosbag
1. Record, Replay and Debug 錄製、重播、偵錯
1. network => wireshark
1. ROS => rosbag

* `rosbag record --all`：record 全部的 topic
* `rosbag record /<topic>`：rocord 特定的 topic
* `rosbag info <rosbag_filename>.bag`：列出 file.bag 的資訊
* `rosbag play <rosbag_filename>.bag`：播放 file.bag 的錄製內容

### rqt
圖形化介面工具
* `rqt`：開啟 rqt
* `rqt_graph`：開啟 rqt 並打開 node graph
  > 藍色為 Publisher、綠色為 Subscriber、紅色則為 Topic

## Build ROS packages
![](https://i.imgur.com/LHV0oLm.png)

* **Workspace**
  * **src**：放程式碼
  * **build** ( 由 catkin_make 自動創建 )
  * **devel** ( 由 catkin_make 自動創建 )

* `mkdir -p ~/<workspace_name>/src`：創建 workspace 
* `cd ~/<workspace_name>/src`：移動到 workspace/src
* `git clone https://github.com/ros/ros_tutorials.git` 
* `cd ~/<workspace_name>`：移動到 workspace
* `catkin_make`：建立 packages

### Overlay
* `cd ~/<workspace_name>`：移動到 workspace
* `rospack list | grep rospy_tutorials`：列出 rospy_tutorials 的 package
* `echo $ROS_PACKAGE_PATH`：顯示 ROS system's packages 路徑<br>

Setup the package environment by overlay
> `source devel/setup.bash` 覆蓋
* `rospack list | grep rospy_tutorials`
* `echo $ROS_PACKAGE_PATH`

### Environment Variable 環境變數
* `ROS_DISTRO`：ROS distribution, e.g. noetic
* `ROS_MASTER_URI`：Tell ROS node where to locate master
* `ROS_IP/ROS_HOSTNAME`：Network Address of ROS node
* `ROS_ROOT`：Where the ROS root path is
* `ROS_PACKAGE_PATH`：Tell ROS system where to search the packages
#### 指令
* `echo $<environment_variable>`：可以顯示出來看
* `ros_menu_env`：可以顯示常見環境變數 ( 僅限有使用 ros menu )

### Reference for ROS
* [ROS Official Sites](https://www.ros.org/)：ROS 官方網站
* [ROS Discourse](https://discourse.ros.org/)：很多公司、研究單位會發布 ROS 相關知識
* [ROS Wiki](http://wiki.ros.org/)：安裝、教學、如何使用 API
* [ROS Answers](https://answers.ros.org/questions/)：跟 ROS 有關的問題
* [ROS Packages List](https://index.ros.org/packages/)
* [ROS GitHub](https://github.com/ros)
* [ROS 2 GitHub](https://github.com/ros2)
* [Open Robotics](https://www.openrobotics.org/)
* [ROS tutorial](https://github.com/ROBOTIS-GIT/ros_seminar)：一些 ROS 的教學教材
* [ROS 2 tutorials for foxy](https://www.youtube.com/playlist?list=PLRE44FoOoKf7NzWwxt3W2taZ7BiWyfhCp)：ROS2 的影片
* [ADLINK GitHub](https://github.com/adlink-ROS/)