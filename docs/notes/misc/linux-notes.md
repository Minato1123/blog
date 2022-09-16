# Linux Notes（ElementaryOS - Ubuntu）

* file 檔案
* directory 目錄 （類似 windows 資料夾）
* target_directory ( path ) 目標目錄 ( 相對 / 絕對路徑 )
* package 套件、軟體等等

## 一般終端機操作

`[ctrl + C]` 中斷目前指令
`[ctrl + D]` 中斷目前執行的程式
`[ctrl + L]` 讓終端機把上面執行的結果捲到上面
`clear` 清空終端機目前顯示的內容

## 更新、下載

`sudo <指令>` 以管理員身份執行指令
`sudo apt update` 更新本地下載清單 (下載東西前要執行)
`sudo apt install <package>` 下載且安裝 package

## 檔案操作
`man <指令>` 顯示指令文件說明 ( 按 q 離開 )

#### 路徑

`pwd` 印出當前路徑
`cd <target_directory>` 移動到目標目錄

* 絕對路徑：從根目錄開始 ( Ex: /home/carrie )
`cd /` 移動到根目錄 ( root )
`cd` or `cd ~` 移動到家目錄 ( home )

* 相對路徑：從當前目錄開始 ( Ex: home/carrie )
`cd .` 移動到自己 ( 當前路徑 )
`cd ..` 移動回到上一個目錄
#### 創建、修改
* 名稱用底線隔開 不要加空格 ( 若有空格，請加上跳脫字元 " \\ " )

`mkdir <directory_name> ...` 創建一個目錄 （... 代表可多個目錄）
`mkdir -p <directory_name>` 強制創建目錄 ( 即使已經存在 )
`touch <file_name>` 創建一個檔案 ( 若已存在，會修改最後編輯時間 )
`ls <target_directory>` 列出此目錄的內容 （沒有寫 target_directory 就是指當前目錄）
`ls -al` 列出當前目錄的所有內容 ( 含佔用空間、編輯時間等等 )
`mv <directory/file> <new_path>` 將 directory/file 修改路徑成 new_path
`mv <directory/file> <new_directory/file_name>` 
將 directory/file 重新命名為 new_directory/file_name
#### 複製
`cp [-R] <directory> <path>` 複製一份 directory 到 path
`cp <file> <path>` 複製一份 file 到 path
#### 移除
`rm [-Rf] <target_directory> ...` 刪除目標目錄（... 代表可多個目標目錄）
`rm <target_file> ...` 刪除目標檔案

## 文字輸出檔案與串連
`echo "<text>"` 印出 text ( 含斷行 )
`printf "<text>"` 印出 text ( 沒有斷行 )
`printf "\n"` 手動加入斷行

`echo/printf "<text>" > <file (path)>` 將檔案內容清除再寫入 text ( 檔案不存在即產生 )
`echo/printf "<text>" >> <file (path)>` 接在檔案內容後寫入 text ( 檔案不存在即產生 )

`cat <file (path)>` 印出此檔案內容
`cat <file_1> <file_2> ...` 印出 file_1 接上 file_2 ... 後的內容 ( 原檔案不會受影響 )
`cat <file_1> <file_2> ... >> <final_file>` 將合併後內容寫入 final_file

