# CSS BEM

:::info
B --- Block (區塊) 

E --- Element（元素） 

M --- Modifier（修飾符）
:::

## 基本原則及說明
### Block 區塊
> 每個 Block 在邏輯與功能上都是相互獨立，任何獨立的頁面元素都可以被視作一個區塊。
- 在邏輯上和功能上都相互獨立，頁面上<span class="span-highlight">不能相依</span>其他 Blocks 或元素。
- 可以放置在頁面上的任何位置，也可以<span class="span-highlight">互相嵌套</span>。
- 不要定義過多影響所在環境的外部樣式（e.g. `margin`）

### Element 元素
> 相依 Block，如果一個區域不能拿到外部單獨使用，將應該作為 ELement。
- 描述其結構、佈局或意義，語意上與 Block 相關。
- 不能與 Block 分開，<span class="span-highlight">頁面上</span>不能相依其他的 Block 或 Element。
- 無法定義層次結構。
- Element 和 Element 之間可以彼此<span class="span-highlight">嵌套</span>。

### Modifier 修飾符
> 用來定義 Block 和 Element 的外觀、狀態或類型。
- 表達其外觀、狀態或行為。
- 不能脫離 Block 或 Element。
- 應該改變的是<span class="span-highlight">實體</span>的外觀、行為或狀態，而不是<span class="span-highlight">替換它</span>。
- 值可以是 Boolean 或 <span class="span-highlight">Key-value</span> 形式。
- 不能同時具有<span class="span-highlight">不同值的相同 Modifier</span>。

<style>
  .g-mark {
    background-color: #e8fae1;
    padding: 0.15rem;
  }

  .span-highlight {
    color: #51a89d;
    font-weight: bold;
  }

</style>