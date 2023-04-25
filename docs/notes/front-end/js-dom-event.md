# JS DOM Event

## 事件監聽
### 事件的監聽器
```javascript
元素.addEventListener(事件名稱, 事件處理器, 捕獲/冒泡機制)
```
> - 事件名稱：`click`、[...其他 Event Reference](https://developer.mozilla.org/zh-TW/docs/Web/Events)
> - 事件處理器：事件觸發時執行的 Function
> - 捕獲 / 冒泡機制：`Boolean`。`true` 為捕獲、`false` 為冒泡（預設）。

### 解除事件的註冊
```javascript
元素.removeEventListener（事件名稱, 事件處理器, 捕獲或冒泡機制）
```
> 事件處理器需要與綁定時的處理器指<span class="span-heightlight">同一個實體</span>。

### Option
```javascript
元素.addEventListener(事件名稱, 事件處理器, {
    once: true,
    passive: true,
    capture: true
})
```
> - `once`：事件只會觸發一次，結束後自動解除事件監聽。
> - `passive`：`true` 為事件處理器不會呼叫 `event.preventDafault()`（執行默認行為）。
> - `capture`：`true` 為捕獲、`false` 為冒泡（預設）。

## 網頁介面相關事件
* `load`：註冊在 window 上，網頁資源全部載入完畢後觸發。
若是 img 上的 `load` 則表示此圖片載入完畢後觸發。
* `unload`：在網頁被卸載<span class="span-heightlight">之後</span>觸發。
* `beforeunload`：在網頁被卸載<span class="span-heightlight">之前</span>觸發。
* `error`：在 `document` 或圖片載入錯誤時觸發。
```html
<img src='image.jpg' onerror="this.src='default.jpg'">
```
* `resize`：當瀏覽器或指定元素的<span class="span-heightlight">尺寸變更</span>時觸發。
* `fullscreenchange`：當使用者切換瀏覽器為全螢幕或還原視窗時觸發。
* `scroll`：當瀏覽器或指定元素的卷軸被拉動時觸發。
* `DOMContentLoaded`：當 DOM 結構被完整讀取跟解析後觸發（不須等待外部資源讀取完成）。

## [滑鼠相關事件](https://medium.com/@shizukuichi/mouse-event-%E5%B0%8F%E7%AD%86%E8%A8%98-feb5dd866b0)
* `mousedown`：滑鼠點擊某元素<span class="span-heightlight">按下</span>時觸發。
* `mouseup`：滑鼠點擊某元素<span class="span-heightlight">放開</span>時觸發。
* `click`：滑鼠<span class="span-heightlight">點擊</span>某元素時觸發。
* `dblclick`：滑鼠<span class="span-heightlight">連點擊兩次</span>某元素時觸發。
* `mouseenter`：滑鼠<span class="span-heightlight">進入</span>某元素時觸發。
* `mouseover`：滑鼠<span class="span-heightlight">進入</span>某元素時觸發（滑鼠經過**不同元素**時觸發）。
* `mousemove`：滑鼠在某元素內<span class="span-heightlight">移動</span>時<span class="span-heightlight">連續</span>觸發。
* `mouseleave`：滑鼠<span class="span-heightlight">完全離開</span>某元素時觸發。
* `mouseout`：滑鼠<span class="span-heightlight">離開</span>某元素時觸發。

### `mouseenter` vs `mouseover`
> 1. `mouseover` 會將事件冒泡至上層的元素當中。
> 2. `mouseover` 的觸發時機較早。
> 
> [Codepen 練習](https://codepen.io/minato1123/pen/ZEXNqEJ)

### `mouseleave` vs `mouseout`
> 1. `mouseout` 會將事件冒泡至上層的元素當中。
> 2. `mouseout` 的觸發時機較早。

## 鍵盤相關事件
* `keydown`：<span class="span-heightlight">壓下</span>鍵盤按鍵時觸發。
* `keypress`：按住時會觸發，按住不放則連續觸發（除了 `Shift`、`Fn`、`CapsLock`）。
* `keyup`：<span class="span-heightlight">放開</span>鍵盤按鍵時觸發。
* `event.keyCode`：在事件觸發時，可以得知使用者按下的按鍵。
  > [keyCode 對照表](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode)

### 觸發順序
1. `keydown` 
2. `keypress` 
3. `keyup`

## Touch Event
* `touchstart`：當觸控點被<span class="span-heightlight">放置</span>在觸控面上時觸發。
* `touchmove`：當觸控點沿著觸控面<span class="span-heightlight">移動</span>時觸發。
* `touchend`：當觸控點從觸控面上<span class="span-heightlight">移除</span>時觸發。
* `touchcancel`：當觸控點因為實作方式的特定因素（e.g. 創建太多觸控點）而<span class="span-heightlight">被中斷時</span>觸發。
### 觸發順序
1. `touchstart`
2. `touchmove`
3. `touchend`
4. `click`
## 表單相關事件
* `input`：當 input、textarea 或帶有 contenteditable 的元素<span class="span-heightlight">內容被改變時馬上觸發</span>。
* `select`：當使用者在 input、textarea 元素<span class="span-heightlight">選取文字</span>時觸發。
  > `event.target.selectionStart`：被選取文字範圍的<span class="span-heightlight">起點</span>。
  > `event.target.selectionEnd`：被選取文字範圍的<span class="span-heightlight">終點</span>。
  > `event.target.value.substr(event.target.selectionStart, event.target.selectionEnd)`：取出被選取的文字區段。
* `change`：當 `input`、`select`、`textarea`、`radio`、`checkbox` 等表單元素被改變時觸發（目前焦點<span class="span-heightlight">離開輸入框後</span>）。
* `submit`：當表單被<span class="span-heightlight">送出後</span>觸發（進行表單驗證）。
* `reset`：當表單被<span class="span-heightlight">重置</span>時觸發。
* `focus`：當表單元素被<span class="span-heightlight">聚焦</span>時觸發。
* `blur`：當表單元素<span class="span-heightlight">失去焦點</span>時觸發。

## 特殊事件
### Composition Event 組成事件
* `compositionstart`：輸入框內開啟輸入法，且<span class="span-heightlight">正在拼字</span>時觸發。
* `compositionend`：輸入框內開啟輸入法，且<span class="span-heightlight">正在拼字或選字更改內容</span>時觸發。
* `compositionupdate`：輸入框內開啟輸入法，且<span class="span-heightlight">正要送出</span>時觸發。
    > [組成事件-範例](https://jsbin.com/mofepimiqo/1/edit?js,console,output)

### 剪貼簿事件
* `cut`：當使用者在網頁上選取某段文字並進行<span class="span-heightlight">剪下</span>時觸發。
* `copy`：當使用者在網頁上選取某段文字並進行<span class="span-heightlight">複製</span>時觸發。
* `paste`：當使用者將剪貼簿上的文字<span class="span-heightlight">貼上</span>時觸發。

## 自訂義事件
```javascript
const event = new Event('事件名稱')

// 監聽事件
元素.addEventListener('事件名稱', 事件處理器, false)

// 觸發事件
元素.dispatchEvent(event)
```


* `event.preventDafault()`：取消事件的預設行為。
* `event.stopPropagation()`：阻止事件向上冒泡傳遞。

<style>
  .span-mb {
    display: block;
    margin-bottom: 0.5rem;
  }

  .span-heightlight {
    color: var(--vp-c-heightlight);
    font-weight: bold;
  }
</style>