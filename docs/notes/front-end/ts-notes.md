# TS Notes
## Type VS Interface

### ＃Primitive Types
```typescript
type Name = string;
```
### ＃Array

**Type**

```typescript
type Names = string[]
type Names = Array<string>
```
**Interface**

```typescript
interface Names {
  [index: number]: string;
}
```

### ＃Tuples

```typescript
type Point = [number, number]
```

:::warning
後續仍可以做 `push` 的動作，TS 不會出現警告。
:::

### ＃Function 
**Type**

```typescript
type Log = (message: string) => void
```
**Interface**

```typescript
interface Log {
  (message: string): void;
}
```

### ＃Union Types

```typescript
type Status = "pending" | "working" | "complete"
```

### ＃Objects
**Type**

```typescript
type Person = {
  name: string;
  score: number;
}
```
**Interface**

```typescript
interface Person {
  name: string;
  score: number;
}
```

### ＃Composing Objects
**Type**
```typescript
type Name = {
  firstName: string;
  lastName: string;
}

type PhoneNumber = {
  landline: string;
  mobile: string;
}

type Contact = Name & PhoneNumber
```
:::warning
`interface` 也可以被組進 `type`。
:::
**Interface**

```typescript
interface Name {
  firstName: string;
  lastName: string;
}

interface PhoneNumber {
  landline: string;
  mobile: string;
}

interface Contact extends Name, PhoneNumber {}
```

### Authoring a Library

```typescript
interface ButtonProps {
  text: string;
  onClick: () => void ;
}

interface ButtonProps {
  id: string;
}
```

:::tip
重複名稱會造成 ButtonProps 的結果型別組合在一起：


```typescript
interface ButtonProps {
  text: string;
  onClick: () => void;
  id: string;
}
```

:::

:::danger
`type` 不允許相同名稱。
:::

### implements

Class 會用 `implements` 指定要實作的 `Interface` ，一旦指定了就得把 `Interface` 內所有的 `Method` 和 `Property` 給實作。<br>
而 Class 還是可以寫下 `Interface` 內沒有描述到的 `Method` 和 `Property`，因為 `Interface` 只是約束了最低需要哪些行為而已。

```typescript
interface TheCar {
  name: string;
  move(): void;
}

class Car implements TheCar {
  name: string

  constructor(name: string) {
    this.name = name
  }

  move(): void {
    console.log('開始加速')
  }
}
```

而且，一個 Class 也能夠同時被多個 `Interface` 給約束，每個 `Interface` 間使用逗號間隔。

```typescript
class Car implements TheCarA, TheCarB {
  ...
}
```
[⋯ Reference](https://medium.com/enjoy-life-enjoy-coding/typescript-%E5%BE%9E-ts-%E9%96%8B%E5%A7%8B%E5%AD%B8%E7%BF%92%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91-interface-%E7%94%A8%E6%B3%95-77fd0959769f)


## Type Guard

* `typeof`：用於 primitive type
* `instanceof`：用於 class
* `in`：用於 object（檢查 object 是否有此屬性）
* `propertyName in objectVariable;`：回傳 `true` 或 `false`
* `extends`：限制泛型可被代入的型別（generic constraints）或是作為型別的條件判斷（conditional types）
  > 假設現在我們希望限制這個 T 只能是數值（number）的話，可以搭配 `extends` 寫成 `<T extends number>`，意思就是限制使用者帶入的泛型。<br>
  > T 需要是 number 的子集合
  > ```typescript
  > function getFirstElement<T>(arr: T[]): T {
  >   const [firstElement] = arr;
  >   return firstElement;
  > }
  > ```
  > 更精確的來說，應該是指「 T 要是 number 的子集合（subset）」。

:::tip extends 擴展某一個 interfaces
```typescript
interface A extends B {
  firstName: string;
  lastName: string;
}
```
:::
[⋯ Reference](https://ithelp.ithome.com.tw/articles/10266542)

## Conditional Types
* `infer`：必須使用在「條件類型的子句」，也就是 `extends` 後面、`?` 前面的位置。
```ts
type Item<T> = T extends (infer U)[] ? U : never;
```
[⋯ Reference](https://chentsulin.medium.com/typescript-infer-%E7%9A%84%E5%BC%B7%E5%A4%A7%E5%8A%9F%E7%94%A8-9b43c4eac6fb)

## Immutable


| 方法 | 編輯階段 | 執行階段 | 限制對象 |
| -------- | -------- | -------- | --- |
| `readonly` | 警告 | 仍可執行 | 寫在誰前面就限制誰 |
| `Readonly<T>` | 警告 | 仍可執行 | 只限制最外層 |
| `Object.freeze()` | 警告 | 不可執行 | 只限制最外層 |
| `as const` | 警告 | 不可執行 | 從外到內每層都限制 |
