# JS DOM API

## DOM 節點的選取
- 根據傳入的值，找到 DOM 中 id 為 `...` 的元素
```javascript
document.getElementById('...')
```
- 針對給定的 tag 名稱，回傳所有符合條件的集合
```javascript
document.getElementByTagName('...')
```
- 針對給定的 class 名稱，回傳所有符合條件的集合
```javascript
document.getElementByClassName('...')
```
- 針對給定的 Selector 條件，回傳第一個或所有符合條件的 NodeList
```javascript
document.querySelector('...')
document.querySelectorAll('...')
```

## DOM 節點的類型

| 節點類型（nodeType） | 對應數值 | 說明 | 範例 |
| --- | :---: | --- | --- |
| ELEMENT_NODE | 1 | HTML 元素的 Element 節點 | `<body>`、`<a>` |
| ATTRIBUTE_NODE | 2 | HTML 元素的屬性 | `class="funEdges"` |
| TEXT_NODE | 3 | 實際文字節點 | 換行、空格 |
| COMMENT_NODE | 8 | 註解節點 | `<!-- something -->` |
| DOCUMENT_NODE | 9 | 根節點 | `window.document` |
| DOCUMENT_TYPE_NODE | 10 | 文件類型的 DocumentType 節點 | `<!DOCTYPE html>` |
| DOCUMENT_FRAGMENT_NODE | 11 | DocumentFragment 節點 | `document.createDocumentFragment()` |


```javascript
節點.nodeType === 節點類型
節點.nodeType === 對應數值
```

## DOM 節點間的查找遍歷
* `節點.hasChildNodes()`：檢查 DOM 節點<span class="span-highlight">是否有子節點</span>
* `節點.childNodes`：回傳有順序性、由目前元素之 DOM <span class="span-highlight">子節點組成之集合</span> ( 即時更新的 NodeList )
* `節點.firstChild`：取得節點的<span class="span-highlight">第一個</span>子節點 ( 含空白或換行字元 )
* `節點.lastChild`：取得節點的<span class="span-highlight">最後一個</span>子節點 ( 含空白或換行字元 )
* `節點.parentNode`：取得父元素節點
* `節點.previousSibling`：取得同層之<span class="span-highlight">前一個</span>節點 ( 若自己是第一個，回傳 `null` )
* `節點.nextSibling`：取得同層之間下一個節點 ( 若自己是最後一個，回傳 `null` )

## DOM 節點的新增
- 建立一個新的元素 ( Element )
```javascript
documnet.createElement('標籤名稱')
```
- 建立文字節點
```javascript
document.createTextNode('文字內容')
```
- 建立 DocumentFragment ( 沒有父層節點的最小化文件物件 )
```javascript
documnet.createDocumentFragment()
```
- 將內容寫入網頁
```javascript
documnet.write('純字串/HTML')
```

## DOM 節點的修改和刪除
- 將指定的新節點加進父容器節點的末端
```javascript
父節點.appendChild(新節點)
```
- 將新節點插入至指定的參考節點的前面
```javascript
父節點.insertBefore(新節點, 參考節點)
```
- 將舊節點替換成指定的新節點
```javascript
父節點.replaceChild(新節點, 舊節點)
```
- 將指定的子節點做移除
```javascript
父節點.removeChild(子節點)
```
- 將父節點內的元素全部移除清空
```javascript
父節點.innerHTML = ''
```
## DOM 節點的樣式
- 修改元素的 Style
    > 範例：
    > 將顏色改為紅色
    > 若遇到 CSS 屬性為 `font-size` 記得改成小駝峰寫法
```javascript
let 變數 = documnet.querySelector('#id / .class')
變數.style.color = 'red'
變數.style.fontSize = '20px'
```
- 修改元素的 class 屬性
    > 缺點是原本 class 裡的內容會全部被覆寫掉
```javascript
let 變數 = document.querySelector('#id / .class')
變數.className = '另一個 class'
```
    >　可以換個方法
```javascript
變數.classList.remove('想移除的 class')
變數.classList.add('想新增的 class')
```
- 利用 JavaScript 直接寫入 CSS
1. 利用 `documnet.write()` 在 `<head>` 寫入 CSS
```javascript
document.write('<style>...</style>')
``` 
```javascript
document.write('<link rel="stylesheet" href="某個 .css 檔" />')
```
2. 利用 `document.createElement` 新增 Link 標籤
```javascript
let head = document.quertSelector('head')
let linkTag = document.createElement('link')

linkTag.rel = 'stylesheet'
linkTag.type = 'text/css'
linkTag.href = '某個 .css 檔'

head.appendChild(linkTag)
```

