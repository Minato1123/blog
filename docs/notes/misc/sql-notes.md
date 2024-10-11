# [SQL](https://www.fooish.com/sql/) Notes

## 資料庫
### 創建資料庫
```sql
CREATE DATABASE <database_name>;
CREATE DATABASE `<database_name>`;
```
#### 設定 utf-8 編碼
* 用 `utf8_general_ci` 排序
```sql
CREATE DATABASE <database_name>
CHARACTER SET utf8 COLLATE utf8_general_ci;
```
### 列出所有資料庫
```sql
SHOW DATABASES;
```
### 刪除資料庫
```sql
DROP DATABASE <database_name>;
DROP DATABASE `<database_name>`;
```
### 選擇資料庫
```sql
USE <database_name>;
USE `<database_name>`;
```
## 資料表
### 型態
| 型態 data_type | 描述 | 
| -------- | -------- | 
| INT | 整數 | 
| FLOAT (n) | 浮點數 ( 較不精確，最大位數 n ) |
| DECIMAL (m, n) | 浮點數 ( 較精確，總共 m 位數、小數點後有 n 位 ) |
| VARCHAR (n) | 字串 ( 最多存放 n 個字元，最大值 255 ) |
| CHAR (n) , CHARACTER (n) | 固定長度字串 |
| BLOB | Binary large object 圖片、影片、檔案... |
| DATE | `YYYY-MM-DD` 日期 |
| TIMESTAMP | `YYYY-MM-DD HH:MM:SS` 時間 |

### 創建資料表
#### 限制 Constraint
* `PRIMARY KEY`：用於資料的唯一識別，不能重複
* `NOT NULL`：強制該欄位一定要給定值 ( 不能是 `NULL` )
* `UNIQUE`：所有值不能重複
* `DEFAULT`：如果欄位沒有值，會自動定預設值
* `AUTO_INCREMENT`：自動+1 ( 不用自己手動更新 id )
```sql
CREATE TABLE `<table_name>`(
    `<id>` INT PRIMARY KEY AUTO_INCREMENT,
    `<column_name>` <data_type>,
    `<column_name>` <data_type> NOT NULL,
    `<column_name>` <data_type> UNIQUE,
    `<column_name>` <data_type> DEFAULT <value>,
);
```
```sql
CREATE TABLE `<table_name>`(
    `<id>` INT AUTO_INCREMENT,
    `<column_name>` <data_type>,
    `<column_name>` <data_type> NOT NULL,
    `<column_name>` <data_type> UNIQUE,
    `<column_name>` <data_type> DEFAULT <value>,
    PRIMARY KEY(`<id>`)
);
```

#### 設定 Foreign Key
將 column_nameA 對應到 table_name1 表格的 column_name2 屬性
```sql
CREATE TABLE `<table_name1>`(
    `<id>` INT PRIMARY KEY,
    `<column_name1>` <data_type>,
    `<column_name2>` <data_type>,
);

CREATE TABLE `<table_name2>`(
    `<id>` INT PRIMARY KEY,
    `<column_nameA>` <data_type>,
    `<column_nameB>` <data_type>,
    FOREIGN KEY (`column_nameA`) REFERENCES `table_name1`(`<column_name2>`) ON DELETE SET NULL
);
```
#### Foreign Key 刪除 / 更新限制
```sql
ON DELETE <Constraints>
ON UPDATE <Constraints>
```

| Constraints | 描述 |
| -------- | -------- |
| `RESTRICT` | ( 預設情況 ) 拒絕被刪除 / 更改 |
| `SET NULL`  | 刪除 / 更新了父表中的一條記錄，那麼子表中 Foreign Key 相應記錄的字段將設置為 NULL |
| `SET DEFAULT` | 刪除 / 更新了父表中的一條記錄，那麼子表中 Foreign Key 相應記錄的字段將設定為默認值 |
| `CASCADE` | 刪除 / 更新了父表中的一條記錄，那麼子表中 Foreign Key 相應記錄將被刪除 / 更新 |


#### 在舊表格上補上 Foreign Key
```sql
ALTER TABLE `<table_name1>`
ADD FOREIGN KEY (`<column_name1>`)
REFERENCES `<table_name2>`(`<column_nameB>`)
ON DELETE SET NULL;
```

#### 創建 view ( 視觀表 )
將搜尋出來建立的表暫存起來
```sql
CREATE VIEW `<view_table_name>` AS (SELECT ... FROM ... WHERE ...);
```

#### 查看資料表
屬性和其型別、限制 ( 是顯示定義，不是內容 )
```sql
DESCRIBE `<table_name>`;
```
#### 列出所有資料表
```sql
SHOW TABLES;
```
#### 刪除資料表
```sql
DROP TABLE `<table_name>`;
```
#### 刪除 view
```sql
DROP VIEW `<view_table_name>`;
```

### 屬性
#### 新增屬性
```sql
ALTER TABLE `<table_name>` ADD <column_name> <data_type>;
```
#### 刪除屬性
```sql
ALTER TABLE `<table_name>` DROP COLUMN <column_name>;
```

### 儲存資料
* 字串要記得用單、雙引號
* `NULL`：空白
```sql
INSERT INTO `<table_name>` VALUES(<id_value>, <column_value>, ...);
```
* 可更改填入屬性的順序
* 沒有被填到的屬性則視為 `NULL`
```sql
INSERT INTO `<table_name>`(`<column_name>`, `<id>`, ...) 
VALUES(<column_value>, <id_value>, ...);
```
#### 列出表格內所有資料
* `*` 意旨全部
```sql
SELECT * FROM `<table_name>`;
```

#### 修改資料
更新 table_name 內的資料

#### `WHERE` 判斷
| 運算子 | 作用  |
|-      |-     |
| =  | 等於     |
| !=、<> | 不等於   |
| >  | 大於     |
| <  | 小於     |
| >= | 大於等於  |
| <= | 小於等於  |

將 column_name 裡為 column_value 都更新改成 new_column_value
```sql
UPDATE <table_name>`
SET `<column_name>` = "<new_column_value>"
WHERE `<column_name>` = "<column_value>";
```
* 也可以判斷非本身的 column_value 去更新其他 column_value
```sql
UPDATE <table_name>`
SET `<column_name>` = "<new_column_value>"
WHERE `<column_name_2>` = "<column_value_2>";
```
* `SET` 可以一次設定多個 ( 以逗點 `,` 相隔 )
* `WHERE` 也可以判斷多個條件
* 若沒有寫 `WHERE`，則將 column_name 屬性內容全部更新
```sql
UPDATE `<table_name>`
SET `<column_name_x>` = "<new_column_value_x>", 
`<column_name_y>` = "<new_column_value_y>"
WHERE `<column_name_2>` = "<column_value_2>" OR 
`<column_name_3>` = "<column_value_3>";
```

#### 刪除資料
寫條件式判斷要刪除哪些資料 ( 符合即刪除 )
```sql
DELETE FROM `<table_name>`
WHERE `<column_name>` = "<column_value>";
```
* 若沒有寫 `WHERE`，則將資料表內全部清空
```sql
DELETE FROM `<table_name>`
```

### 取得、搜尋資料

#### 取得特定屬性資料
```sql
SELECT `<column_name>` FROM `<table_name>`;
```
* 可以一次選擇多個
```sql
SELECT `<column_name>`, `<column_name2>`... FROM `<table_name>`;
```
* 運用判斷式列出需要的資料
```sql
SELECT * FROM `<table_name>`
WHERE `<column_name>` = "<column_value>";
```
* 運用判斷式列出屬性內容符合 string 的資料
```sql
SELECT * FROM `<table_name>`
WHERE `<column_name>` IN("string1", "string2", ...);
```
```sql
SELECT * FROM `<table_name>`
WHERE `<column_name>` = "string1" OR `<column_name>` = "string2" OR ...;
```
* 也可以從搜尋表中再搜尋 ( 巢狀查詢 )
藉由另一個資料表內容作為此資料表的搜尋判斷條件
需要反過來的情況可以使用 `NOT IN`
```sql
SELECT DISTINCT * FROM `<table_name>`
WHERE `<column_name>` IN(SELECT `<column_name>` FROM ... WHERE ...);
```
| 運算子 | 意義 |
|-      |-     |
| `ANY` | 任何一個滿足就回傳 True |
| `SOME` | 任何一個滿足就回傳 True |
| `ALL` | 全部滿足才回傳 True |

* 此欄位的值需要大於全部的搜索表內容條件的欄位值才會被顯示 [(範例)](https://zhuanlan.zhihu.com/p/94659348)
```sql
SELECT DISTINCT * FROM `<table_name>`
WHERE `<column_name>` > ALL(SELECT `<column_name>` FROM ... WHERE ...);
```
* 搜尋在另一個資料表內有存在的欄位才會被顯示
需要反過來的情況可以使用 `NOT EXISTS`
```sql
SELECT * FROM `<table_name1>`
WHERE EXISTS
(SELECT * FROM `<table_name2>` WHERE <table_name2>.id=<table_name1>.id);
```
* UNION
    * 用來將兩個(以上) SQL 查詢的結果合併起來，而由 UNION 查詢中各別 SQL 語句所產生的欄位需要是相同的資料型別及順序。
    * 查詢只會回傳不同值的資料列，有如 `SELECT DISTINCT`。
    * **`UNION ALL` 則會列出所有的資料，不論是否重複。**
    * 像是 OR (聯集)，如果紀錄存在於第一個查詢結果集或第二個查詢結果集中，就會被取出。
    

```sql
SELECT <column_name1> FROM <table_name1>
UNION
SELECT <column_name2> FROM <table_name2>;
```
UNION 與 JOIN 不同的地方在於，JOIN 是作橫向結合 (合併多個資料表的各欄位)；而 UNION 則是作垂直結合 (合併多個資料表中的紀錄)。

* Joined Tables
**LEFT JOIN**
會回傳左側資料表中所有資料，就算沒有符合連接條件，而右側資料表中如果沒有匹配的資料值就會顯示為 `NULL`。
```sql
SELECT <table_column1>, <table_column2>...
FROM <table_name1>
LEFT JOIN <table_name2> 
ON <table_name1>.<column_name>=<table_name2>.<column_name>;
```


#### 取得資料並根據特定屬性排序
根據 column_name 屬性的資料去做排序
```sql
SELECT * FROM `<table_name>` ORDER BY `<column_name>`;
```
* 將排序由高到低
    > ASC：由低到高 ( 預設 )
    > DESC：由高到低
```sql
SELECT * FROM `<table_name>` ORDER BY `<column_name>` DESC;
```
* 若根據第一個屬性排序相同，則再根據第二個屬性做排序
```sql
SELECT * FROM `<table_name>` ORDER BY `<column_name>`, `<column_name2>`;
```

#### 限制回傳資料數量
列出前 number 筆資料
```sql
SELECT * FROM `<table_name>` LIMIT <number>;
```
* 可先做排序再列出有限資料
```sql
SELECT * FROM `<table_name>` ORDER BY `<column_name>` LIMIT <number>;
```

#### 限制重複回傳
若 table_value 有重複的，則只會回傳第一個
```sql
SELECT DISTINCT `<column_name>` FROM `<table_name>`;
```

## 聚合函式 Aggregate Functions
* 回傳此 table 的資料數量
```sql
SELECT COUNT(*) FROM `<table_name>`;
```
* 回傳此屬性內有值 ( 非 NULL ) 的資料數量
```sql
SELECT COUNT(`<column_name>`) FROM `<table_name>`;
```
* 回傳符合條件的資料數量
```sql
SELECT COUNT(*) FROM `<table_name>` 
WHERE <條件判斷>;
```
* 回傳此屬性的值做**總和**
```sql
SELECT SUM(`<column_name>`) FROM `<table_name>`;
```
* 回傳此屬性的值做**平均**
```sql
SELECT AVG(`<column_name>`) FROM `<table_name>`;
```
* 回傳此屬性內**最大的值**
```sql
SELECT MAX(`<column_name>`) FROM `<table_name>`;
```
* 回傳此屬性內**最小的值**
```sql
SELECT MIN(`<column_name>`) FROM `<table_name>`;
```
* 可以根據欄位名稱做**分類群組**
```sql
SELECT AVG(`<column_name>`) FROM `<table_name>` GROUP BY `<column_name>`; 
```
* 對函式產生的值來設定條件
如果被 `SELECT` 的只有函式欄， 那就不需要 `GROUP BY` 子句。
因為函式產生的值不能使用 `WHERE` 
```sql
SELECT `<column_name1>`, SUM(`<column_name2>`)
FROM `<table_name>`
GROUP BY `<column_name1>`
HAVING (<function condition>);
```

## 萬用字元 Wildcards
:::tip
`%`：代表多個字元。  
`_`：代表 1 個字元。
:::

* 列出此屬性的值**開頭**為 string 的資料
```sql
SELECT * FROM `<table_name>`
WHERE `<column_name>` LIKE 'string%';
```

* 列出此屬性的值**尾端**為 string 的資料
```sql
SELECT * FROM `<table_name>`
WHERE `<column_name>` LIKE '%string';
```
* 列出此屬性的值**中間**有 string 的資料
```sql
SELECT * FROM `<table_name>`
WHERE `<column_name>` LIKE '%string%';
```
