# TS Notes
## Type VS Interface

### ＃Primitive Types
```typescript
type Name = string;
```
### ＃Array

-**Type**

```typescript
type Names = string[];
type Names = Array<string>;
```
-**Interface**

```typescript
interface Names {
  [index: number]: string;
}
```

### ＃Tuples

```typescript
type Point = [number, number];
```
:::warning
後續仍可以做 `push` 的動作，TS 不會出現警告。
:::

### ＃Function 
-**Type**

```typescript
type Log = (message: string) => void;
```
-**Interface**

```typescript
interface Log {
  (message: string): void;
}
```

### ＃Union Types

```typescript
type Status = "pending" | "working" | "complete";
```

### ＃Objects
- **Type**

```typescript
type Person = {
  name: string;
  score: number;
};
```
- **Interface**

```typescript
interface Person {
  name: string;
  score: number;
}
```

### ＃Composing Objects
- **Type**
```typescript
type Name = {
  firstName: string;
  lastName: string;
};

type PhoneNumber = {
  landline: string;
  mobile: string;
};

type Contact = Name & PhoneNumber;
```
:::warning
`interface` 也可以被組進 `type`。
:::
- **Interface**

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

### ＃Authoring a Library
```typescript
interface ButtonProps {
  text: string;
  onClick: () => void;
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

class 包含 method implementation

## Type Guard

`typeof`：用於 primitive type

`instanceof`：用於 class

`in`：用於 object（檢查 object 是否有此屬性）

`propertyName in objectVariable;`：回傳 `true` 或 `false`

`extends`：

## Immutable


| 方法 | 編輯階段 | 執行階段 | Column 3 |
| -------- | -------- | -------- | --- |
| `readonly` | 警告 | 仍可執行 | 寫在誰前面就限制誰 |
| `Readonly<T>` | 警告 | 仍可執行 | 只限制最外層 |
| `Object.freeze()` | 警告 | 不可執行 | 只限制最外層 |
| `as const` | 警告 | 不可執行 | 從外到內每層都限制 |
