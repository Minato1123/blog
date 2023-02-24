# Type Challenges Notes

## Easy
### 11 - Tuple to Object

```typescript
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
```
> 加上 `as const` 會將普通的 Array 直接轉成 Tuple。
> * Tuple：
> `const tuple: readonly ["tesla", "model 3", "model X", "model Y"]`
> * Array：
> `const tuple: string[]`

```typescript
type TupleToObject<T extends readonly (string | number)[]> = {
  [P in T[number]]: P
}
```
> 這裡的 `T[number]` 包含 `'tesla'|'model 3'|'model X'|'model Y'`。<span class="span-mb"></span>
> `number` 指的是 index（全部的數字），有取到的值（e.g. `T[0]`：`'tesla'`）就會存在，沒有取到的值（e.g. `T[5]`：`never`）就是不存在，全部做成 Union 就是 `T[number]` 的結果。

### 14 - First of Array

```typescript
TheType<[3, 2, 1]>
```
> 直接寫在泛型 `< >` 裡面就會是 Tuple。

```typescript
type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
```
> `T['length']` 可以直接取到長度。

```typescript
type First<T extends any[]> = T extends [infer R, ...any[]] ? R : never
```
> `infer R` 必須使用在「條件類型的子句」，也就是 `extends` 後面、`?` 前面的位置。<br>
> 用來推斷此位置的型別（存成變數用在同一行的其他地方）。

### 189 - Awaited
```typescript
PromiseLike<any>
```
> 擁有 `.then()` 方法的物件（thenable），只要有 `.then()` 函式就會將其當做一個 Promise 實例。


### 898 - Includes
```typescript
Equal<U, R>
```
> 推斷出兩個型別是否絕對相同。

## Medium

### 3 - Omit
```typescript
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}
```
> 將 `K extends keyof T` 寫在 `< >` 裡面會限制傳入的參數。
```typescript
Exclude<T, K>
```
> 需要兩個參數 `T` 和 `K`，把 `T` 中滿足 `K` 的剔除。
> * Omit：從「物件」屬性內剔除一個或多個屬性
> * Exclude：從「聯集型別」內剔除一個或多個

### 8 - Readonly 2
```typescript
type MyReadonly2<T, K extends keyof T = keyof T> = 
  Readonly<Pick<T, K>> & Omit<T, K>
```
> `<T, K extends keyof T = keyof T>` 的 `= keyof T` 是第二參數的預設值，意即在傳入參數的時候允許只傳入第一個參數。

### 9 - Deep Readonly 
```typescript
type DeepReadonly<T> = T extends Function 
  ? T 
  : T extends object 
    ? { readonly [K in keyof T]: DeepReadonly<T[K]> } 
    : T
```
> `Function` 跟 `(...args: any[]) => any` 不一樣。<br>
> `Function` 可能包含其他不清楚的東西（少用比較好）。
> 
```typescript
type DeepReadonly<T> = {
  readonly [P in keyof T]: keyof T[P] extends never 
    ? T[P] 
    : DeepReadonly<T[P]>
}
```
> 判斷 `T[P]` 的 keys 是不是不存在（沒有下一層）。

```typescript
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends string | number | boolean | Function 
    ? T[P] 
    : DeepReadonly<T[P]>
}
```
> 判斷 `T[P]` 是不是沒有 key 的型別（沒有下一層）。

### 12 - Chainable Options
```typescript
type Chainable<T = {}> = {
  option: <K extends string, V>(
    key: K extends keyof T ? never : K,
    value: V
  ) => Chainable<Omit<T, K> & Record<K, V>>,
  get: () => T
}
```
> `<K extends string, V>` 是傳入參數型別的泛型，因為 `key`、`value` 有用到型別參數，所以會自行推斷型別，不需要再額外寫一次。<br>
> `.option` 需要回傳 Chainable，才能再繼續接 `.option`。

### 15 - Last of Array
```typescript
type Last<T extends any[]> = [undefined, ...T][T['length']]
```
> `[T['length']]` 會拿到 `[數量]`。<br>
> 在原陣列的最前端加上一項任意型別，讓長度可以剛好取到最後一項。

### 20 - Promise.all
```typescript
declare function PromiseAll<T extends readonly any[]>(values: [...T])

declare function PromiseAll<T extends any[]>(values: readonly [...T])
```
> 寫在泛型裡的 `readonly` 是用來限制傳入的參數。<br>
> 寫在 `( )` 裡的 `readonly` 是用來標明實際 function 內部不會動到傳入的值。<span class="span-mb"></span>
> 若泛型限制 `readonly` -> 可以傳入一般參數或 `readonly` 的參數（因為在 function 內皆不會被改動），反過來若無限制則不可傳入 `readonly` 的參數。

```typescript
declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{
  [P in keyof T]: T[P] extends infer A
    ? A extends Promise<infer R> ? R : A
    : never
}>
```
> 假設 `T[P]` 是 `number | Promise<number>`，則 extends 的判斷 `T[P]` 會代表 `(number | Promise<number>)`，並不會將 `|` 的兩項分開處理。<span class="span-mb"></span>
> `T[P] extends infer A` 將 `T[P]` 先存成變數（非用中括號取值）再做 extends 的判斷，則會將 `number` 與 `Promise<number>` 分開動作。

### 62 - Type Lookup
```typescript
type LookUp<U, T> = U['type'] extends T ? U : never
```
> 這樣是無效的！<br>
> Conditional Types 只有在具有 `T extends ...` 形式（Naked Type）時才會有分配性，而在 `extends` 後面複雜的表達式也不會觸發分配性。

### 106 - Trim Left
```typescript
type Space = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = 
  S extends `${Space}${infer R}` 
    ? TrimLeft<R> 
    : S
```
> 字串可以 `${Space}${infer R}` 像這樣組起來（類似陣列）。

### 110 - Capitalize
```typescript
type MyCapitalize<S extends string> = 
  S extends `${infer R}${infer Rest}` 
    ? `${Uppercase<R>}${Rest}` 
    : ''
```
> `Uppercase<R>` 可以直接轉大寫。

### 296 - Permutation
```typescript
[T] extends [never]
```
> * Tuple
```typescript
T[] extends [never]
```
> * Array<br>
>
> 要判斷是不是 `never` 無法直接判斷，需要以這種方式。

```typescript
K extends K
```
> 當 Naked Type 遇到 `extends` 就會觸發分配性，不一定要是 `extends` 自己，`any` 或其他也可以，主要是有 `extends`。

### 298 - Length of String
```typescript
type LengthOfString<S extends string, T extends string[] = []> = 
  S extends `${infer R}${infer Rest}` 
    ? LengthOfString<Rest, [...T, R]>
    : T['length']
```
> 當 S 只有一個字（例如：`'x'`），`R` 會取到 `x`，`Rest` 會取到 `''`，所以 `S extends ${infer R}${infer Rest}` 的結果仍會是 `true`。


<style>
  .span-mb {
    display: block;
    margin-bottom: 0.5rem;
  }
</style>