# Type Challenges Notes
最近更新日期：2023/05/08

## Easy
### 11 - Tuple to Object [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md)

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

### 14 - First of Array [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md)

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

### 189 - Awaited [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md)
```typescript
PromiseLike<any>
```
> 擁有 `.then()` 方法的物件（thenable），只要有 `.then()` 函式就會將其當做一個 Promise 實例。


### 898 - Includes [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.md)
```typescript
Equal<U, R>
```
> 推斷出兩個型別是否絕對相同。

## Medium

### 3 - Omit [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md)
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

### 8 - Readonly 2 [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.md)
```typescript
type MyReadonly2<T, K extends keyof T = keyof T> = 
  Readonly<Pick<T, K>> & Omit<T, K>
```
> `<T, K extends keyof T = keyof T>` 的 `= keyof T` 是第二參數的預設值，意即在傳入參數的時候允許只傳入第一個參數。

### 9 - Deep Readonly [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.md)
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

### 12 - Chainable Options [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/00012-medium-chainable-options/README.md)
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

### 15 - Last of Array [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.md)
```typescript
type Last<T extends any[]> = [undefined, ...T][T['length']]
```
> `[T['length']]` 會拿到 `[數量]`。<br>
> 在原陣列的最前端加上一項任意型別，讓長度可以剛好取到最後一項。

### 20 - Promise.all [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.md)
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

### 62 - Type Lookup [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/00062-medium-type-lookup/README.md)
```typescript
type LookUp<U, T> = U['type'] extends T ? U : never
```
> 這樣是無效的！<br>
> Conditional Types 只有在具有 `T extends ...` 形式（Naked Type）時才會有分配性，而在 `extends` 後面複雜的表達式也不會觸發分配性。

### 106 - Trim Left [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.md)
```typescript
type Space = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = 
  S extends `${Space}${infer R}` 
    ? TrimLeft<R> 
    : S
```
> 字串可以 `${Space}${infer R}` 像這樣組起來（類似陣列）。

### 110 - Capitalize [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/00110-medium-capitalize/README.md)
```typescript
type MyCapitalize<S extends string> = 
  S extends `${infer R}${infer Rest}` 
    ? `${Uppercase<R>}${Rest}` 
    : ''
```
> `Uppercase<R>` 可以直接轉大寫。

### 296 - Permutation [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/00296-medium-permutation/README.md)
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

### 298 - Length of String [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.md)
```typescript
type LengthOfString<S extends string, T extends string[] = []> = 
  S extends `${infer R}${infer Rest}` 
    ? LengthOfString<Rest, [...T, R]>
    : T['length']
```
> 當 S 只有一個字（例如：`'x'`），`R` 會取到 `x`，`Rest` 會取到 `''`，所以 `S extends ${infer R}${infer Rest}` 的結果仍會是 `true`。

### 527 - Append to object [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/00527-medium-append-to-object/README.md)
```typescript
type AppendToObject<T extends Object, U extends string, V extends any> = T & {
    [K in U]: V
  }
```
> 這樣寫的型別會變成 `TypeA & {...}`，和併成一整個物件型別不一定相同（若有相同 `key` 的情況下型別可能會不同）。
> 要寫成 `K in U` 才會進行迭代。
```typescript
type AppendToObject<T, U extends string, V> = 
  Omit<T & { [P in U]: V }, never>
```
```typescript
type AppendToObject<T, U extends string, V> = 
  T & { [K in U]: V } extends infer A
    ? { [K in keyof A]: A[K] } 
    : never
```
> `Omit<T, never>` 或利用 `extends infer A` 可以將 & 的物件型別們合併在一起。


### 529 - Absolute [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/00529-medium-absolute/README.md)
```typescript
type AAA = Absolute<9_999n> // "9999"

type Absolute<T extends number | string | bigint> = `${T}`
```
```typescript
type AAA = Absolute<9_999n> // 9999n

type Absolute<T extends number | string | bigint> = T
```
> * `bigint`：`123n`（末尾有 `n`）
> 
> 在 TypeScript 中，透過 `${}` 將陣列轉換為字串時，編譯器會自動進行轉換，因此透過 `${T}` 可以直接取得轉換後的 `9999`。

### 599 - Merge [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/00599-medium-merge/README.md)
```typescript
type Merge<F, S> = {
  [K in keyof F | keyof S]: K extends keyof S
    ? S[K]
    : K extends keyof F
      ? F[K]
      : never
}
```
> `[K in keyof F | keyof S]` 無法直接取 `S[K]`，需要透過 `K extends keyof S`。

### 612 - KebabCase [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/00612-medium-kebabcase/README.md)
```typescript
Uncapitalize<T>
```
> 將 `T` 字串中的第一個字元轉換為小寫字母。
```typescript
Capitalize<T>
```
> 將 `T` 字串中的第一個字元轉換為大寫字母。
```typescript
Lowercase<T>
```
> 將 `T` 字串中的每個字元轉換為小寫字母。

### 645 - Diff [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/00645-medium-diff/README.md)
```typescript
type O = {
  name: string
  age: string
}

type O1 = {
  name: string
  age: string
  gender: number
}
```
> 型別們：
> ```typescript
> keyof O & keyof O1    // "name" | "age"
> 
> keyof O | keyof O1    // "name" | "age" | "gender"
> 
> keyof (O & O1)        // "name" | "age" | "gender"
> ```

```typescript
type Diff<O, O1> = {
  [K in (keyof O | keyof O1) as Exclude<K, keyof O & keyof O1>]: (O & O1)[K]
}
```
```typescript
type Diff<O, O1> = {
  [K in keyof (O & O1) as K extends keyof (O | O1) ? never : K]: (O & O1)[K]
}
```
> 這裡的 `as` 是可以進一步對迭代到的 `K` 進行操作。<br>
> key 為 `never` 的話會直接去掉此項。

### 949 - AnyOf [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/00949-medium-anyof/README.md)
```typescript
type AnyOf<T extends readonly any[]> = T extends [infer R, ...infer Rest] 
  ? R extends 0 | '' | false | [] | { [x: string]: never } | undefined | null
    ? AnyOf<Rest>
    : true
  : false
```
> 檢查空物件不能直接寫 `{}`，要用 `{ [x: string]: never }` 或 `Record<string, never>`。

### 1097 - IsUnion [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/01097-medium-isunion/README.md)
```typescript
type IsUnion<T, K = T> = [T] extends [never] 
  ? false 
  : T extends K 
    ? [K] extends [T] ? false : true 
    : never
```
> 在 `T extends K` 的這行就會觸發分配性了，只是通常要再下一行才能進行其他操作。<span class="span-mb"></span>
> `[K] extends [T]` 是將 `K` 和 `T` 包在 Tuple 裡，為了不要觸發分配性。


### 1367 - Remove Index Signature [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/01367-medium-remove-index-signature/README.md)
> 將 `[key: any]: any`（Index Signature）去除。

```typescript
type PropertyKey = string | number | symbol
```
```typescript
type RemoveIndexSignature<T, P = PropertyKey> = {
  [
    K in keyof T as P extends K
    ? never 
    : K extends P 
      ? K 
      : never
  ]: T[K]
}
```
> `K in keyof T as P extends K` 透過前面的 `K in keyof T` 拿到迭代的 `K`，即可列成條件 `P extends K`。<span class="span-mb"></span>
> 留下 `P extends K` 不成立 ＆ `K extends P` 成立的情況。

### 2257 - MinusOne [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/02257-medium-minusone/README.md)
```typescript
type S = '12345' // '123'
type N = S extends `${infer R extends number}` ? R : never // 123
```
> 可以將型別 `"123"` 轉換成型別 `123`。

```typescript
type NumberLiteral = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

type S = '12345' // "12345"
type RemoveLastChar = S extends `${infer Rest}${NumberLiteral}` // "1234"
  ? S extends `${Rest}${infer Last extends NumberLiteral}`
    ? Rest 
    : never
  : never
```
> 透過此方式可以取得 `Rest`：去除最後一項字元的字串及 `Last`：最後一項字元。

### 2757 - PartialByKeys [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/02757-medium-partialbykeys/README.md)
```typescript
Partial<T>
```
> 建構一個型別，其中 `T` 的所有屬性都被設置為 optional。

### 2759 - RequiredByKeys [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/02759-medium-requiredbykeys/README.md)
```typescript
{
  [P in keyof T as P extends K ? P : never]-?: T[P]
}
```
> 可以透過 `-?` 將 optional 改為 required。

### 2793 - Mutable [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/02793-medium-mutable/README.md)
```typescript
type Mutable<T extends Record<string, any> | readonly any[]> = {
  -readonly [K in keyof T]: T[K]
}
```
> 可以透過 `-readonly` 將 readonly 屬性去除。

### 2946 - ObjectEntries [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/02946-medium-objectentries/README.md)
```typescript
type ObjectEntries<T> = {
  [K in keyof T]-?: 
    [K, T[K] extends (infer L | undefined) 
      ? L 
      : T[K]
    ]
}[keyof T]
```
> 只有 `{}` 區塊的話會拿到：
> ```typescript
> type AAA = {
>   name: ["name", string]
>   age: ["age", number]
>   locations: ["locations", string[] | null]
> }
> ```
> 再透過 `[keyof T]` 取得各項 key 的值。

### 3188 - Tuple to Nested Object [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/03188-medium-tuple-to-nested-object/README.md)
```typescript
type TupleToNestedObject<T extends string[], U> = 
  T extends [infer R extends string, ...infer Rest extends string[]] 
    ? { [K in R]: TupleToNestedObject<Rest, U> }
    : U
```
> 使用 `[K in R]` 而不是 `[K in keyof R]`，因為 `R` 不是物件型別。<span class="span-mb"></span>
> 除了用 `infer R extends string` 做限制之外，在 key 的地方寫成 `[K in R & string]` 也可以。


### 3196 - Flip Arguments [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/03196-medium-flip-arguments/README.md)
```typescript
T extends (...args: infer A) => any
```
> Function 型別可以透過此方式拿到參數型別（將未知數量的參數展開後的型別參考訂為 `A`）。<span class="span-mb"></span>
> 假設傳入的參數型別是 `(arg0: string, arg1: number, arg2: boolean) => void`。<br>
> 則推斷完 `A` 的型別為 `[arg0: string, arg1: number, arg2: boolean]
`

```typescript
type FlipArguments<T extends (...args: any[]) => any> = 
  T extends (...args: infer A) => infer R ? (...args: Reverse<A>) => R : never
```
> 透過 `...args` 拿到參數陣列 `args` ，而 `args` 型別推斷是 `A`。<br>
> Function 的參數名稱 `args` 需要一直寫著（實際在寫 Function 的時候本來就會寫）。

### 3243 - FlattenDepth [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/03243-medium-flattendepth/README.md)
```typescript
type FlattenDepth<A extends any[], N extends number = 1, R extends any[] = []> = 
  R['length'] extends N 
    ? A
    : A extends [infer F, ...infer Rest] 
      ? F extends any[]
        ? [...FlattenDepth<F, N, [...R, undefined]>, ...FlattenDepth<Rest, N, R>] 
        : [F, ...FlattenDepth<Rest, N, R>]
      : A
```
> 利用 `R` 陣列的長度紀錄目前展開幾層，利用 `...` 展開陣列，每次展開都將 `R` 陣列多加一項。

### 3326 - BEM style string [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/03326-medium-bem-style-string/README.md)
```typescript
type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${
    E extends [] ? '' : `__${E[number]}`
  }${
    M extends [] ? '' : `--${M[number]}`
  }`
```
> 可以直接在 `${}` 裡面做判斷。

### 3376 - InorderTraversal [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/03376-medium-inordertraversal/README.md)
Inorder traversal (中序遍歷) 會先拜訪左子節點，再拜訪父節點，最後拜訪右子節點。
```typescript
type InorderTraversal<T extends TreeNode | null> = 
  T extends TreeNode
    ? [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>]
    : []

type InorderTraversal<T extends TreeNode | null> = 
  T extends null
    ? []
    : [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>]
```
> `T extends TreeNode` 或是 `T extends null` 會讓 `T` 產生分配性。<br>
> 需要判斷的話可以用 Tuple 包起來，例如： `[T] extends [TreeNode]`。

```typescript
NonNullable<T>
```
> 從型別 `T` 中刪除 `null` 和 `undefined`。

### 4179 - Flip [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/04179-medium-flip/README.md)
```typescript
type Flip<T extends Record<string, any>> = {
  [K in keyof T as `${T[K]}`]: K
}
```
> 可以直接寫 `as` 後面作為 key 名稱。

### 4182 - Fibonacci Sequence [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/04182-medium-fibonacci-sequence/README.md)
```typescript
type Fibonacci<
  T extends number,
  CurrentIndex extends any[] = [undefined],
  Prev extends any[] = [],
  Current extends any[] = [undefined]
> = CurrentIndex['length'] extends T
  ? Current['length']
  : Fibonacci<T, [...CurrentIndex, undefined], Current, [...Prev, ...Current]>
```
> 利用陣列 `Current` 的總長度計算 Fibonacci 數列的數字。<br>
> （目的是拿到總長度，所以塞什麼進陣列都不影響，因此放了 `undefined`）<span class="span-mb"></span>
> `CurrentIndex` 陣列的總長度是負責記錄是否已達到題目要求（`T`）。

### 4260 - AllCombinations [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/04260-medium-nomiwase/README.md)
```typescript
type AllCombinations<
  S extends string,
  P extends string = ''
> = S extends `${infer F}${infer Rest}`
  ? `${F}${AllCombinations<`${P}${Rest}`>}` | AllCombinations<Rest, `${P}${F}`>
  : ''
```
> ![](/.vitepress/images/ts-challenges/AllCombinations.jpeg)
> 以 `'ABC'` 作為範例的遞迴。<span class="span-mb"></span>
> [其他解答（１）](https://github.com/type-challenges/type-challenges/issues/5339)<br>
> [其他解答（２）](https://github.com/type-challenges/type-challenges/issues/16430)

### 4425 - Greater Than [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/04425-medium-greater-than/README.md)
```typescript
type GreaterThan<T extends number, U extends number, R extends any[] = []> = 
  T extends R['length']
    ? false
    : U extends R['length']
      ? true
      : GreaterThan<T, U, [...R, 1]>
```
> 讓 `R['length']` 從 `0` 開始往上加。<br>
> 若 `T extends R['length']` 成立，則表示 `U` **不可能**大於 `T`。<br>
> 若 `U extends R['length']` 成立，則表示 `T` **肯定**大於 `T`。

### 4471 - Zip [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/04471-medium-zip/README.md)
```typescript
[T, U] extends [[infer L, ...infer RestT], [infer R, ...infer RestU]]
```
> 可以將多個判斷用 Tuple 包起來做 `extends`。

### 4484 - IsTuple [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/04484-medium-istuple/README.md)
```typescript
number extends T['length']
```
> 因為 Tuple 的 `length` 是確切數字（不是單純的 `number`），因此若 `number extends T['length']` 成立則代表 `T` 不是 Tuple。

### 4518 - Fill [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/04518-medium-fill/README.md)
```typescript
type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Count extends any[] = [],
  Flag extends boolean = Count['length'] extends Start ? true : false
> = Count['length'] extends End
  ? T
  : T extends [infer R, ...infer Rest]
    ? Flag extends false
      ? [R, ...Fill<Rest, N, Start, End, [...Count, 0]>]
      : [N, ...Fill<Rest, N, Start, End, [...Count, 0], true>]
    : T
```
> 當 `Count['length']` 和 `Start` 相同時，`Flag` 標示為 `true`，代表接下來遞迴需要將 `R` 替換成 `N`。<br>
> 當 `Count['length']` 和 `End` 相同時，代表替換已經結束，直接回傳剩餘的陣列即可（不需要特別將 `Flag` 換回 `false` 繼續跑遞迴）。

### 5117 - Without [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/05117-medium-without/README.md)
```typescript
R extends TupleToUnion<U>
  ? Without<Rest, U, A>
  : Without<Rest, U, [...A, R]>
```
> 這樣的判斷可以改寫成這樣：
> ```typescript
> Without<Rest, U, R extends TupleToUnion<U> ? A : [...A, R]>
> ```


### 5317 - LastIndexOf [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/05317-medium-lastindexof/README.md)
```typescript
type LastIndexOf<T extends unknown[], U> = T extends [...infer Rest, infer Last]
  ? Equal<Last, U> extends true
    ? Rest['length']
    : LastIndexOf<Rest, U>
  : -1
```
> 剛好 `Rest['length']` 取到的值會比 `T['length']` 少 1，所以可以直接拿來當作 `index` 參考。

### 5821 - MapTypes [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/05821-medium-maptypes/README.md)
```typescript
type MapTypes<T extends Record<string, any>, R extends {
  mapFrom: any
  mapTo: any
}> = {
      [K in keyof T]: T[K] extends R['mapFrom'] 
        ? R extends { mapFrom: T[K] } 
          ? R['mapTo'] 
          : never 
        : T[K]
    }
```
> 因為 `R` 傳入的參數有可能是 Union，因此透過 `R extends { mapFrom: T[K] }` 可以限制這行的 `R` 是哪一項，否則結果也會產生 Union。

### 10969 - Integer [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/10969-medium-integer/README.md)
```typescript
type Integer<T extends number> = `${T}` extends `${bigint}` ? T : never
```
> `bigint` 一定是 Integer。

### 16259 - ToPrimitive [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/16259-medium-to-primitive/README.md)
```typescript
type ToPrimitive<T> = T extends object 
  ? { [K in keyof T]: ToPrimitive<T[K]> }
  : T extends { valueOf(): infer R } 
    ? R
    : never
```
> `T extends { valueOf(): infer R }` 是根據 `valueOf` 的值取得推斷的型別 `R`，`string`、`number` ...等等都有 `valueOf`，所以 `never` 不會跑到。

### 17973 - DeepMutable [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/17973-medium-deepmutable/README.md)
```typescript
type A = DeepMutable<Test2>
type C = A['c']
type E = C['e']
```
> 若物件太深，型別無法全部顯示清楚的話，可以藉由新建 `type` 並取得原 `type` 的其屬性查看內部型別。

### 25270 - Transpose [➜](https://github.com/type-challenges/type-challenges/blob/main/questions/25270-medium-transpose/README.md)
```typescript
type Transpose<
    M extends number[][],
    R = M['length'] extends 0 ? [] : M[0]
  > = {
  [X in keyof R]: {
    [Y in keyof M]:X extends keyof M[Y] ? M[Y][X] : never
  }
}
```
> 物件的 key 為數字時可作為陣列。

<style>
  .span-mb {
    display: block;
    margin-bottom: 0.5rem;
  }
</style>