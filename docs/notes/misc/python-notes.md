# Python Notes

* any：任意 ( 字串、數字、布林值 ... )
* variable：變數
* string：字串
* index：索引值
* number：數字
* numbers：數字們 ( 或是純數字陣列 )
* list：陣列
* tuple：元組
* function：函式
* parameter：參數
* conditional_judgment：條件判斷
* pip：套件管理工具

:::tip Introduce
* **可變物件 Mutable : list / dict / set**
該物件所指向記憶體中的值可以被改變。
* **不可變物件 Immutable : number / string / tuple**
    該物件所指向記憶體中的值不可以被改變，所以當變數指向的值改變時，等於將原來的值複製一份後存於一個新的地址，變數再指向這個新的地址。
:::

## 基本用法
```python
a = string/number/boolean...  # 設變數
input()                       # 輸入
print(any)                    # 要印出來的內容
```

### 轉換
```python
str(something)                # 將 something 轉換為字串型態
int(str)                      # 將 str 轉換成整數型態 (小數無法)
float(str)                     # 將 str 轉換成小數點型態
string.lower()                # 將字串轉成全小寫
string.upper()                # 將字串轉成全大寫
string.index(str)             # 回傳 string 內 str 的 index 值
string.replace(str_1, str_2)  # 將 string 內的 str_1 替換成 str_2
```

### True or False 判斷
```python
string.islower()    # 字串是全小寫回傳 True
string.isupper()    # 字串是全大寫回傳 True
```

### 數學用法
```python
num_1 // num_2       # 整除除法 (不取餘數)
abs(number)          # 對 number 取絕對值
pow(num_1, num_2)    # 將 num_1 取 num_2 次方 (num_1 ^ num_2)
max(numbers)         # 回傳 numbers 的最大值
min(numbers)         # 回傳 numbers 的最小值
round(number)        # 對 number 取四捨五入
```
#### 引入數學函式
```python
from math import *  # 引入數學函式

floor(number)        # 對 number 取無條件捨去
ceil(number)        # 對 number 取無條件進位
sqrt(number)        # 對 number 取開根號
```

### [字串](https://docs.python.org/zh-tw/3.7/library/stdtypes.html#string-methods) 
```python
string[ind_1: ind_2: step]     # 回傳 string 從 ind_1 到 ind_2 每次間隔 step-1 個
```
#### string format
* name、age：variable
1. `"%s is %s year's old."%(name, age)`
2. `"{} is {} year's old.".format(name, age)`
3. `f"{name} is {age} year's old."`


### 陣列 List
```python
list = []
list[index]                           # 回傳 list 裡第 index 項內容物 (-1: 倒數第一項)
list[ind_1: ind_2: step]              # 回傳 list 裡從第 ind_1 項到第 ind_2 項之前的內容物 (不含 ind_2) 間隔 step-1 個
list[:ind_2]                          # 回傳 list 裡從第 0 項到第 ind_2 項之前的內容物 (不含 ind_2)
len(list)                             # 回傳 list 的長度
list.extend(list_2)                   # 將 list_2 的內容接在 list 後面
list.append(any)                      # 在 list 的後面接上 any
list.insert(ind, any)                 # 在第 ind 項插入 any
list.remove(any)                      # 將 list 中的 any 移除
list.clear()                          # 將 list 全部清空
list.pop()                            # 移除 list 的最後一項
list.sort()                           # 將 list 的內容由小到大排列
list.sort(key=None, reverse=False)    # 將 list 排序，可選擇代入key為帶有一個參數的函式 (reverse=True 則為 順序反轉) 
sorted(list)                          # 回傳排序完畢的 list ( 不影響原本的 list)
list.reverse()                        # 將 list 的內容順序做反轉
list.index(any, ind_1, ind_2)         # 回傳 list 中第一個 any 的 index 值 (any 可選填範圍在 ind_1 和 ind_2 之間)
list.count(any)                       # 回傳 list 中 有幾個 any
del list[ind]                         # 刪除 list 中第 ind 項
del list[ind_1: ind_2]                # 刪除 list 中從第 ind_1 項到第 ind_2 項之前 (不含 ind_2)
del list[:]                           # 刪除 list 所有內容
```

#### [淺複製與深複製 Shallow copy and deep copy 的差別](https://www.itread01.com/content/1544614591.html)
> 淺複製與深複製的關鍵差別在於，複製的變數中是否有可變型別。
> 深複製 ( deep copy ) 建立一份**完全獨立**的變數。
> **數字為不可變型別**，則深／淺複製沒有差別。
> **list 為可變型別**，淺複製 (shallow copy) 被改變了，而深複製 (deep copy) 則沒有被改變。
##### list copy ( Shallow copy )
```python
list_copy = list(list)
list_copy = list[:]
list_copy = list.copy()
```
##### list copy ( Deep copy )
```python
import copy
list_copy = copy.deepcopy(list)
```


#### List Comprehension
`[ <expression> for <item> in <iterable> ]`
* expression：表達式
* iterable：可迭代的物件
* item：迭代中的變數
#### 條件式
`[ <expression> for <item> in <iterable> if <condition> ]`
* condition：條件式
#### 巢狀迴圈
`[ <expression> for <item> in <iterable> for <item2> in <iterable2> ...]`
`[ [ <expression> for <item> in <iterable> ] for <item2> in <iterable2> ...]`
#### 其他 ( 易讀性差 )
`[ <expression> <if-else clause> for <item> in <iterable> <condition/iterable> ]`
* if-else clause：if-else子句

### 元組 Tuple
創建後不能新增、修改、刪除，避免被改動。
```python
tuple = ()
tuple[index]           # 回傳 tuple 裡第 index 項內容物 (-1: 倒數第一項)
tuple[ind_1: ind_2]    # 回傳 tuple 裡從第 ind_1 項到第 ind_2 項之前的內容物 (不含 ind_2)
tuple[:ind_2]          # 回傳 tuple 裡從第 0 項到第 ind_2 項之前的內容物 (不含 ind_2)
len(tuple)             # 回傳 tuple 的長度
tuple.index(any)       # 回傳 tuple 中第一個 any 的 index 值
tuple.count(any)       # 回傳 tuple 中 有幾個 any
```


| 操作 | 描述 | 
| -------- | -------- | 
| `(1,2,3)+(4,5,6)` | 組合 | 
| `(1,2,3) * 3`	 | 重複 |
| `3 in (1,2,3)` | 判斷列表內是否有該元素 |
| `3 not in (1,2,3)`	 | 判斷列表內是否無該元素 |

#### Tuple 的序列封裝與拆封 ( packing and unpacking )
```python
tuple = (a, b, c)
x, y, z = tuple
```
x, y, z 可分別得到 a, b, c，數量非一致則會出錯。

### [集合 Set](https://docs.python.org/3/tutorial/datastructures.html#sets)
集合Set為無序、不重複的集合。
```python
set = {}
any in set 判斷 set 中是否擁有 any
```
#### Set 的運算
```python
set_1 - set_2     # 差集 (letters in set_1 but not in set_2)
set_1 | set_2     # 聯集 (letters in set_1 or set_2 or both)
set_1 & set_2     # 交集 (letters in both set_1 and set_2)
set_1 ^ set_2     # 對稱差 (letters in set_1 or set_2 but not both)
```
#### Set comprehesion
`set = { <expression> for <item> in <iterable> if <item> not in <iterable> }`

### [字典 Dictionary](https://docs.python.org/3.7/library/stdtypes.html#mapping-types-dict)
```python
dict = {key: value, key_2: value_2, ...}
dict[key]                         # 回傳 key 對應到的 value
dict[key] = value_new             # 將 key 的 value 修改成 value_new
dict[key_3] = value_3             # 新增 key_3: value_3 到 dict 中
del dict[key]                     # 刪除那項 key & value
dict.clear()                      # 刪除 dict 中的所有內容
dict.get(key)                     # 回傳 key 對應到的 value
dict.get(key_none, value_none)    # 若沒有這個 key_none 存在，將回傳 value_none

dict.items()                      # 回傳 dict 
dict.keys()                       # 回傳 dict 的 keys
dict.values()                     # 回傳 dict 的 values
dict.update({key: value})         # 已有的 key 更新 value、沒有的 key 新增 value，其他維持原樣。
dict.pop(key)                     # 移除此項且回傳 value 
```
#### Loop dictionary
```python
for key, value in dict.items():
    print(key, value)
```

### 函式 Function
* 呼叫函數時可以使用關鍵字來指定其參數值，不需要依照宣告順序來呼
```python
def function_name(parameter):   # 定義、宣告 function (parameter 可有可無、可多可少)
    # do_somethings               注意縮排才算 function 內部
    return any                  # 將 any 回傳出去 (return 可有可無、需要再使用)
    
function_name(parameter)        # 呼叫函式 (沒有 return：沒有回傳值)
any = function_name(parameter)  # 呼叫函式 (有 return：將會有回傳值，需要變數去接)
```

#### 可變參數列表
* `*<args>` 回傳 tuple
* `**<kwargs>` 回傳 dictionary ( 關鍵字參數 )
```python
def test(*args, **kwargs):
    print("args = ", args)
    print("kwargs = ", kwargs)

test('a', 'b', name = 'John', age = '22') 順序不能混
```
回傳結果
```python
args = ('a', 'b')
kwargs = {'name': 'John', 'age': '22'}
```
#### Lambda 函數
`key=lambda <元素>: <元素><[k]>` 對元素第 k 個欄位排序

可創建一個短小的匿名函數，出於語法限制，只能有一個單獨表達式。
```python
def make_incrementor(n):
    return lambda x: x + n

f = make_incrementor(42)
f(0)          # 回傳 42 + 0 = 42
f(1)          # 回傳 42 + 1 = 43
```
可以當作一個小函數物件 ( function object ) 傳入其他函數引數 built-in function 很常使用 lambda 來當作運算條件，填入 key 中。
1. `sorted（list, key=lambda x:x[k]）`
1. `list.sort（key=lambda x:x[k]）`
1. `max（list, key=lambda x:x[k]）` ... 等用法

#### 函數註解
* Documentation strings
    * `__doc__` 
    > 類別 (class) 的預設屬性 (attribute)。
    > 用以當作文件字串 (docstring) ，文件字串用三引號 `'''` 字串 (string) 定義，三引號字串的特性是保留原始編排的方式，並且可以跨多行。
    > 主要用途是撰寫函數 (function) 、類別、方法 (method) 及模組 (module) 的功能與說明。
* 型別提示
    * `: argument type` 設定參數的型別
    > 範例：`def function(a: str, b: int = 10):` 
    * `-> return type` 設定回傳值的型別
    > 範例：`def function(a, b) -> str:` 
    * `function.__annotations__` 函式註釋
    > 範例：`{'a': <class 'str'>, 'b': <class 'int'>, 'return': <class 'str'>}`

## 工具
### If 判斷式
* Python 中並沒有 switch 的語法，所有 case 的判斷可以用 if elif else 代替
#### 比較式 Comparisons

| 描述 | 運算子 | 
| -------- | -------- | 
| 等於 ( Equal ) | == | 
| 不等於 ( Not equal ) | != |
| 大於 ( Greater than ) | > |
| 小於 ( Less than ) | < |
| 大於等於 ( Greater or Equal ) | >= |
| 小於等於 ( Less or Equal ) | <= |
| 物件相等 ( Object Identity ) | is |
| 物件不相等 ( Negated Object Identity )	 | is not |

#### 布林運算 Boolean operations

| 描述 | 運算子 | 
| -------- | -------- | 
| 或 ( 其中一方是 True 即為 True ) | or | 
| 且 ( 兩者都要為 True 才為 True ) | and |
| 非 ( True 為 False、False 為 True ) | not |
> not a == b 意思即為 not ( a == b )

#### False Values
1. `False`
2. `None`
3. Zero of any numeric type. 任何為零的數值
4. Any empty sequence. For example：`' '`, `( )`, `[ ]`.  任何為空的序列
5. Any empty mapping. For example：`{ }`. 任何空的 map 類型

```python
if conditional_judgment:      # 判斷式 (True 執行內部、False 則不執行)
    # do_somethings             注意縮排才算 if 內部
elif conditional_judgment_2:  # 如上述條件均不符合，則判斷此條件是 True or False
    # do_somethings
else:                         # 假如上述條件均不符合，則執行 else 的內部
    # do_somethings
```
### 迴圈 Loop
#### 迴圈流程控制 Flow control Tools

| 語句 | 描述 | 
| -------- | -------- | 
| break | 強制跳出**最近一層、結束整個**迴圈 | 
| continue	 | 強制跳出**本次**迴圈，繼續進入下一圈 |
| pass | 什麼事都不做 |


#### while 迴圈
```python
while conditional_judgment:    # 判斷式 (True 不斷執行內部、False 跳出迴圈)
    # do_somethings              注意縮排才算 while 內部
```

#### for 迴圈
```python
for variable in string/list:   # 將 string/list 內容一個個放入 variable 內全部執行過一次
    # do_somethings              注意縮排才算 for 內部
    
for variable in range(n):      # variable 代入從 0 到 n-1 全部執行過一次
    # do_somethings              注意縮排才算 for 內部
    
for variable in range(n1, n2):      # variable 代入從 n1 到 n2-1 全部執行過一次
    # do_somethings                   注意縮排才算 for 內部
```
#### range( ) 
--- Built-in function
```python
range(start, end, step) # 從 start 到 end-1 的範圍，間隔為 step-1 個
```


## 物件導向

**物件 ( object )**
* 資料 ( 屬性 attribute )
* 程式碼 ( 方法 method )
### Class Object 類別物件
* A simple example class
```python
class Class:    
    i = 12345    
    def f(self):        
        return 'hello world'
```
#### 屬性引用
```python
Class.i
Class.f
```
#### 實例化
##### 建立類別 Class (模板)
定義類別、初始化函數 init ( )
```python
class Class_name: 
    def __init__(self, parameter_1, parameter_2, ...): 
        self.parameter_1 = parameter_1
        self.parameter_2 = parameter_2
```
* self：物件本身

實例化 instanize
```python
variable = Class_name(parameter_1, parameter_2)  # 創建 Class (物件 Object)
    variable.parameter_1                         # 回傳 variable 的內容
    variable.parameter_2
```
##### 類變數及實例變數
* 類變數：該類所有實例共用的屬性和方法
* 實例變數：對於每個實例都獨有的數據
```python
class Dog:
    kind = 'canine'         # 類變數
    def __init__(self, name):
        self.name = name    # 實例變數

d = Dog('Fido')
e = Dog('Buddy')
print(d.kind)            # 所有的 class Dog 都相同 (類變數)
print(e.kind)            # 所有的 class Dog 都相同 (類變數)
print(d.name)            # 只有 'Fido' 獨特擁有 (實例變數)
print(e.name)            # 只有 'Buddy' 獨特擁有 (實例變數)
```
### 封裝 Encapsulation
封裝的用意是要讓物件裡的資料隱藏起來，其他物件只能透過物件本身提供的介面存取裡面的資料，取得裡面的屬性 ( attribute ) 或方法 ( method )。
#### 私有變數
> 新增一些方法 ( method ) 並對某些屬性進行封裝。
> 在變數前面加兩個下底線 `__variable` 這樣可以將變數變成私有變數，即只有物件內部才能夠取得資料，無法從外部物件取得。

```python
class Person:
    def __init__(self, name, height):
        self.name = name
        self.__height = height

p1 = Person("Peter", 180.0)
```
```python
print(p1.name)        # Peter 正常取得
print(p1.__height)    # AttributeError 無法取得
```

### 繼承 Inheritance
讓子物件擁有父物件的屬性及方法，並且擁有屬於自己專屬的屬性或方法。
定義類別本身就是一個抽象化 ( abstraction ) 的過程，我們必須抽象描述出這個類別該有的屬性或方法。

**先創立某類別 ( 以下作為父類別用途 )**
```python
class Inherit_dad: 
    def __init__(self, ...):
        # do_somethings
    
    def other_function():
        # do_somethings
```
* 若父類別在不同檔案需先做引入
```python
from file_dad import Inherit_dad 

class Inherit_son(Inherit_dad):      # 繼承 Inherit_dad 的內容
    def __init__(self, ...):         # 子類別的 init 內容將會覆蓋父類別的 init 內容
        super().__init__(...)
        # do_somethings
                                     # 不用寫 other_function() 就會自動繼承
    def other_function_2():          # 可以新增其他子類別的特定 function
        # do_somethings
```
:::tip
* super ( ) 內建函數是繼承時用來呼叫 / 執行父類別的方法 ( method )
`super(type[, object-or-type])`
:::

### 多型 Polymorphism
:::info
* **overload 多載**
相同函數名稱，不同參數類型、個數，依據傳入不同的參數，呼叫相對應的函數。
* **override 覆載**
相同函數名稱，覆寫方法內容，當子類別繼承覆類別時，可以覆寫父類別的方法內容。
:::

```python
class Inherit_dad:
    def __init__(self, p1, p2, p3):
        self.p1 = p1
        self.p2 = p2
        self.p3 = p3

    def function(self):
        # do_somethings

class Inherit_son_a(Inherit_dad):
    def __init__(self, p1, p2, p3, p4):
        super(Inherit_son_a, self).__init__(p1, p2, p3)
        self.p4 = p4

    def function(self):   # 覆寫掉父類別的 function
        # do_somethings

class Inherit_son_b(Car):
    def __init__(self, p1, p2, p3, p4):
        super(Inherit_son_b, self).__init__(p1, p2, p3)
        self.p4 = p4

    def function(self):   # 覆寫掉父類別的 function
        # do_somethings

t = Inherit_son_a(...)
s = Inherit_son_b(...)
t.function()              # 會執行 Inherit_son_a 子類別的 function
s.function()              # 會執行 Inherit_son_b 子類別的 function
```
當子類別繼承父類別，而子類別覆寫了父類別的方法，繼承替父類別衍伸出許多型態的子類別，不同的子類別呼叫相同名稱的方法，產生不同的實作，就是多型的概念，所以說有了繼承才有多型。

## 其他
### 模組引入 Import
* [內建模組](https://docs.python.org/3/py-modindex.html)

一個檔案就可以當作一個模組 ( module )，module 裡面可以定義 class、function、variable，一個目錄就可以當作一個套件 ( package )，package 裡面可以放 subpackge 或 module。

`from package import module` 
> 當成 package 的目錄裡面一定要生成一個 `__init__.py` 檔案，就算是空的也沒關係，目的是要讓 python 認定這個目錄可以當成 package。

`from package import *` / `from module import *`
> 匯入 package 或 module 裡的所有東西，但是不建議使用，因為有可能與其他 package 相同名稱的物件互相衝突，所以前面冠上個名稱空間 ( namespace )。

`from math import *` 引入數學函式

`import module as module_name` 將 module 改以 module_name 暱稱
`import module` 引入內建模組

`import another` 引入檔案名稱為 `another.py` 的檔案
* `another.variable` 引入變數
* `another.function` 引入函式

`from another import any` 從 `another.py` 的檔案中引入 any


### try / except 錯誤與異常
* [各種異常](https://docs.python.org/zh-tw/3/library/exceptions.html#bltin-exceptions)
	
| 關鍵詞 | 描述 | 
| -------- | -------- | 
| try | 放置可能有例外狀況的程式碼 | 
| except | 例外狀況處置 | 
| else | 當沒有發生例外狀況時執行 | 
| finally | 無論任何情況皆會執行 | 

```python
try:
    # do_somthings
except <error_name>:
    # 發生此例外時該做的事
else:
    # 沒有發生例外時該做的事
finally:
    # 無論如何都會做的事
```


### 檔案讀取、寫入
`f = open(files_path, mode="the_mode", encoding="utf-8")`
* files_path：絕對路徑
* 相對路徑
* the_mode：
    
| 模式 | 描述 | 
| -------- | -------- | 
| r | 開啟檔案及讀取 ( 預設 ) | 
| w | 開啟檔案，覆蓋原有內容並寫入 |
| a | 如果文件存在，不覆蓋並寫入文件尾端 |
| x | 開啟檔案 ( 如文件已存在則失敗 ) |
| b | 二進制模式 |
| t | 文本模式 |
| + | 開啟檔案並更新 ( 讀 / 寫 ) |
* encoding：選擇編碼 ( optional )

#### file 物件內建 method
| method | 描述 | 
| -------- | -------- | 
| `f.read()` | 讀取整個檔案 |
| `f.read(size)` | 讀取檔案到指定的字節數量 ( size ) |
| `f.readline()` | 讀取檔案中的整行資料 ( 只讀取一行 )，包含 `\n` 字元 |
| `f.readlines()` | 將檔案當中的所有資料都逐行讀取進來，將其回傳成為一個 list |
| `f.write(string)` | 將 string 寫入檔案 | 
| `f.seek(offset, whence)` | 移動這個指標的位置到 offset | 
| `f.tell()` | 回傳現在指標所在的位置 | 
| `f.close()` | 關閉檔案 | 

:::warning
**f.seek ( offset , whence ) 補充**
* offset：開始的偏移量，也就是代表需要移動偏移的字節數。
* whence：( optional )，預設為 0。
给 offset 參數一個定義，表示要從哪個位置開始偏移。
    * 0：從文件開頭開始算起
    * 1：從當前位置開始算起
    * 2：從文件末尾端算起。
:::


#### r 開啟檔案及讀取 ( 預設 )
```python
file = open(files_path, mode="r")  # 開啟檔案 (讀取)
file.read()                       # 讀取檔案
file.readline()                   # 讀取檔案第一行 (寫幾行就讀到幾行)
file.readlines()                  # 將 file 的內容寫成列表
file.close()                      # 關閉檔案 (記得！)
```
#### w 開啟檔案，覆蓋原有內容並寫入
```python
file = open(files_path, mode="w")  # 開啟檔案 (覆蓋並寫入)
file.write(any)                   # 將 file 的內容清空並寫入 any
file.close()                      # 關閉檔案 (記得！)
```
#### a 如果文件存在，不覆蓋並寫入文件尾端
```python
file = open(files_path, mode="a")  # 開啟檔案 (不覆蓋並寫入)
file.write(any)                   # 將 file 的內容接續寫入 any
file.close()                      # 關閉檔案 (記得！)
```
#### 不用特別關閉檔案的寫法
```python
with open(files_path, mode="the_mode", encoding="utf-8") as file:
    file.read() / file.write(any)
```

### Python 套件
1. GUI ( Graphic User Interface )
    就是圖形使用者介面，指的是以圖形的方式顯示電腦與使用者的操作介面，與傳統的命令列介面比起來更為直觀，使用者更易於輕鬆上手。
1. Tkinter
    是 Python 內建的標準函式庫，不需要另外安裝任何套件即可使用，如果只是要寫一些簡單的介面可以考慮
1. PyQt、PySide
    兩者基本上系出同門，都是將 Qt 包裝的 Python API ( Qt 是一個跨平台的 C++ 應用程式開發框架。廣泛用於開發 GUI 程式 )，可以讓我們用 Python 開發 Q t應用程式，如果要開發完整的應用程式推薦使用 PyQt 或 PySide。