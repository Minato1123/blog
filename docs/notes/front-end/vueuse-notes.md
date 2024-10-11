<script setup>
import FoldCode from '/.vitepress/components/FoldCode.vue'
</script>

# VueUse

## Shared [➜](https://github.com/vueuse/vueuse/tree/main/packages/shared)
### [computedEager](https://github.com/vueuse/vueuse/tree/main/packages/shared/computedEager)
1. watchEffect 的第二參數的 `flush: sync` 代表同步調用。
2. `watchEffect` 一直在檢查 `todo.length` ，但因為 `result` 是 `shallowRef` ，所以只有在 `!!todo.length` 的值發生改變時才會讓 `result` 感受到變動並更新。

[⋯ Test Playground](https://sfc.vuejs.org/#eNp9kstu2zAQRX9lzI1kVI92a9hBiyLrAkW7CrNgZMpSSpEEObRRCPr3DEXZsZMgO5Jzzx3OY2Q/rK2OQbIN2/rG9RbBSwz2jut+sMYhjOBkW4DvhFLm9DueTwKb7r5tZYMFGP3X7gXKPUzQOjNARnYZ11w3RnsENHvjYRdd8ofH9fm5E/6XlfrPEkXp8acZbCCje3GQLs/XsLuD1Wrmq6NQQVZK6gN25AHAdRt0g73RH7CtXsMYVSmXkz4opCyvReRkEgVXpSwZZw4WJuUlstWRiIFoaRT9xRzy7Fs2v07FGWtV8N0GMv9fN1kxx5ZMjtrq9OLL9cT1pXPXmW/shRAxQbTY1mk8NBi6oBysIpRuANungEh9+N6ovvm34yy1zNJP0g/ZLCPvGIcvM1Mn6BMDqvrh8Q379T27Kst9f1xU43iZWJoVTFRoREhTlom4kd/swZWYFNv6UiYrWFrHchC2evZG08LO/eJLwHO2OQ+BM1rBeOesQ7R+U9e+beKaP/vKuENNp8oFjf0gK+mH8smZk5eOjDmbZ0Y9Z9ML0doLrw==)

---

### [computedWithControl](https://github.com/vueuse/vueuse/tree/main/packages/shared/computedWithControl)
1. source 變動時 `computedRef` 可拿到新的 counter 值，否則都是舊的，若 source 沒有變動也可以透過 `computedRef.trigger()` 去強制更新。
2. `dirty` 負責記錄是否被更新過（`true` 將重新取得 counter 的值）。
3. [customRef](https://vuejs.org/api/reactivity-advanced.html#customref) 有兩個參數：`track` 追蹤參數、`trigger` 觸發更新。
4. [Object.isExtensible()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) 判斷參數是否可以擴展 → 確認可以新增或修改 key / value。

---

### [createEventHook](https://github.com/vueuse/vueuse/tree/main/packages/shared/createEventHook)
1. on 可以掛載多個 callback function，利用 trigger 觸發更新。
2. [tryOnScopeDispose()](#tryonscopedispose) 判斷目前是否在 effect scope 內，是的話就執行 `onScopeDispose()`，不是的話則什麼都不做。
3. [onScopeDispose()](https://vuejs.org/api/reactivity-advanced.html#onscopedispose) 在當前的 effect scope 上註冊一個處理 callback function，當相關的 effect scope 停止時會呼叫這個 callback function。
4. Component 的 setup 或 `scope.run()` 的 function 裡面就代表是在 effect scope 裡面。

---

### [createGlobalState](https://github.com/vueuse/vueuse/tree/main/packages/shared/createGlobalState)
1. 建立一個獨立的 Scope，全域都可以存取同一份，像 Store。
2. effect scope 的好處是若需要停止響應性可以直接 `scope.stop()`，不需要一個一個做註銷（但這裡沒有提供此功能）

---

### [createInjectionState](https://github.com/vueuse/vueuse/tree/main/packages/shared/createInjectionState)
1. 和 `createGlobalState` 不同之處在於創建的狀態是在 Vue 的 `provide` / `inject` 系統中共享的，因此只有在注入到具有相同依賴的範圍內時才會共享。
2. `provide` / `inject` 可以明確地指定哪些變數是由哪些父層組件提供的，並限制這些變數的作用範圍，可以使程式碼更易於管理和理解，也可以減少不必要的全域變數。
3. provide / inject 和全域共享的差別：
    - 使用 `provide` / `inject`，子層要變更資料時必須透過父層提供的方法或資料屬性，然後讓父層透過 `provide` 把變更後的資料傳遞下去，才能達到資料的共享。
    - 使用全域變數，子層可以直接存取或修改全域變數，但因為沒有明確的資料流傳遞，所以可能會出現管理上的問題。
4. `composable()` 可以組合多個響應式物件。
    
    在某些情況下，使用 composable 可以達到類似全域共享的效果，但是它們的本質是不同的。
    
* composable 主要是用於抽象出可重複使用的邏輯單元，這些邏輯單元可以在不同的 Vue 組件中使用，而**不需要關注各自的狀態管理**。（注重邏輯的抽象和可重複使用性）
* 全域共享主要是用於在整個應用中**共享狀態**，並且可以在任何組件中存取和修改這些狀態。（注重狀態的共享和可讀寫性）

---

### [createSharedComposable](https://github.com/vueuse/vueuse/tree/main/packages/shared/createSharedComposable)
1. 和 `createGlobalState` 相似，差別在於 `createSharedComposable` 在沒有任何訂閱使用的情況下會做 `scope.stop()`。
再次被使用才會重新創建 effectScope。

---

### [extendRef](https://github.com/vueuse/vueuse/tree/main/packages/shared/extendRef)
1. 可以對 `ref` 進行擴展，添加額外的 function 或屬性。
2. 直接在 `ref.value` 上添加 function，可能會污染 `ref` 的原型，進而影響到其他地方的使用，因此，使用 `extendRef` 來對 `ref` 進行擴展更加地優雅和安全。
3. `unwrap`：若值為 `true`，則 `extendRef` 函數將會將 `Ref` 物件轉換為其值，並將其設置為屬性的值；`false` 的話屬性的值將是 `Ref` 物件本身。
4. `if (key === 'value') continue` ：  跳過 `extend` 物件中 `key` 為 `'value'` 的屬性。
因為 `Ref` 物件中的值是透過 `.value` 存取的，如果直接將 `extend` 物件中的 `value` 屬性設置為 `Ref` 物件的屬性會造成名稱衝突，因此需要跳過 `value`
 屬性。
5. `Object.defineProperty(ref, key, { get, set, enumerable })` ：  
會定義 `ref` 物件的 `key` 屬性的 getter 和 setter 方法，透過這些方法來操作 `Ref` 物件的 `value` 屬性（不需要 `.value` 就能直接取到值）。
6. `Object.defineProperty(ref, key, { value, enumerable })`：  
如果 `unwrap` 被設定為 `false`，則直接將 `Ref` 物件賦值給 `ref` 物件的 `key` 屬性，訪問 `ref.key` 回傳的是 `Ref` 物件本身（需要 `.value` 才能取到值）。

---

### [get](https://github.com/vueuse/vueuse/tree/main/packages/shared/get)
1. `unref()`：將參數轉換為普通的物件。
2. `MaybeRef<T>`：接受 `Ref` 或普通值的參數。  
使用 `MaybeRef<T>` 作為類型註解的好處是，在接收參數時可以直接傳入普通值或 `Ref`。

---

### [isDefined](https://github.com/vueuse/vueuse/tree/main/packages/shared/isDefined)
1. 用於檢查變數是否已定義（defined）。  
如果變數為 `null` 或 `undefined`，該函數將回傳 `false`，否則回傳 `true`。

---

### [makeDestructurable](https://github.com/vueuse/vueuse/tree/main/packages/shared/makeDestructurable)
1. 將物件和陣列組合起來，使其同時具有物件和陣列的特性，並且能夠進行解構操作。
2. `typeof Symbol !== 'undefined’`：確認瀏覽器是否支援 Symbol 這個資料型別。
3. 在 `obj` 這個物件上，定義一個 `Symbol.iterator` 屬性，並指定一個回傳迭代器物件的函式（陣列有此屬性，但物件沒有），當這個物件被迭代時，就會依次回傳 `arr` 陣列中的值。
4. 當程式碼使用 `for...of` 迴圈來迭代物件時，它會尋找該物件的 `Symbol.iterator` 屬性，所以為了讓物件能夠被 `for...of`
 迴圈正確地迭代，需要為物件加上 `Symbol.iterator`
 屬性。
5. 最後將 `obj` 和 `arr` 合併成一個新的物件並回傳。

---

### [reactify](https://github.com/vueuse/vueuse/tree/main/packages/shared/reactify)
1. 將普通的函数轉換為具有響應式特性的函數。  
這些轉換後的函數可以接受 refs 作為參數，並回傳一個 ComputedRef 物件，可以訪問和監聽該物件的值的變化。
2. `unref`：將 Ref 物件轉換為普通物件，如果傳入的參數不是 Ref 物件，則直接回傳該值。
3. `toValue`：傳入的參數是 function（getter）的話會執行，不是的話會做 `unref`。
4. `args.map(i => unrefFn(i))`：將所有參數 `map` 成普通值。
5. `fn.apply(thisArg, [argsArray])`：  
`fn` 是要調用的函數，`thisArg` 是函數執行時的 `this` 上下文，而 `argsArray` 則是傳遞給函數的參數陣列。
6. `computed(() => fn.apply(this, args.map(i => unrefFn(i))))`：  
將參數做轉為普通物件才能讓原本的 `fn` 取到值並正常執行，而因為 computed 內部還是有用到 `unrefFn(i)`，對 computed 來說 `i` 仍然會被搜集到響應性的依賴，所以當 `i` 發生變化時，將會促使 computed 下次被取值時需要重新計算。

---

### [reactifyObject](https://github.com/vueuse/vueuse/tree/main/packages/shared/reactifyObject)
1. 如果屬性的值是一個函數，則使用 reactify 函數將其轉換為響應式函數。
2. `Object.getOwnPropertyNames`：回傳一個陣列，其中包含物件自身所有屬性的名稱，包括不可列舉的屬性。
3. `Object.keys`：回傳一個陣列，其中僅包含物件自身的所有可列舉屬性的名稱。

---

### [reactiveComputed](https://github.com/vueuse/vueuse/tree/main/packages/shared/reactiveComputed)
1. Computed reactive 物件。  
回傳的是一個 `reactive` 物件，而不是像 `computed` 回傳的 `ref` 物件。
（不需要 `.value` 取值）

---

### [reactiveOmit](https://github.com/vueuse/vueuse/tree/main/packages/shared/reactiveOmit)
1. 從一個響應式物件中響應式地省略字段。
    
 ```javascript
 import { reactive } from 'vue'
 import { reactiveOmit } from '@vueuse/core'
 
 const obj = reactive({
   x: 0,
   y: 0,
   elementX: 0,
   elementY: 0,
 })
 
 const picked = reactiveOmit(obj, "x", "elementX")
 ```
 
 ```javascript
 console.log(picked)
 // Proxy {}
 
 console.log(JSON.stringify(picked))
 // {"y": 0, "elementY": 0}
 
 console.log(picked.y)
 // 0
 
 console.log(obj)
 // Proxy {x: 0, y: 0, elementX: 0, elementY: 0}
 ```
 
 ```html
 <div>
   {{ picked }} 
 	<!-- { "y": 0, "elementY": 0 } -->
 </div>
 ```
    
2. `Array.flat([depth])`：將一個多維陣列扁平化成新的一維陣列，參數可以指定展開的深度，預設為 1。
3. `Object.entries()`：直接取得所有屬性的 key 和 value，並以 Tuple 的陣列回傳。
4. `Object.fromEntries()`：將 key-value 的 Tuple 陣列轉換為物件。
5. `toRefs(reactiveObj)`：會將 `reactiveObj` 轉換為一個物件，而物件內所有 `value` 轉為 `ref`。
`ref` 是響應式的，可以讓 `reactiveComputed` 在需要時更新新物件的值。

---

### [reactivePick](https://github.com/vueuse/vueuse/tree/main/packages/shared/reactivePick)
1. 從一個響應式物件中響應式地選擇字段。
2. `UnwrapRef<T>`：對 Ref 型別做分解。
如果 T 是 Ref 型別，則 UnwrapRef 型別為 ref.value 的型別。
如果 T 不是 Ref 型別，則 UnwrapRef 型別為 T。
3. [toRef()](https://vuejs.org/api/reactivity-utilities.html#toref)：可用於將一個響應式物件（ref）的某個屬性轉換為一個獨立的響應式物件。
4. 基本上與 `reactiveOmit` 相似，只是反過來。

---

### [refAutoReset](https://github.com/vueuse/vueuse/tree/main/packages/shared/refAutoReset)
1. 建立一個可透過參數指定時間（ms），並在時間到後重置為默認值的 ref。

---

### [refDebounced](https://github.com/vueuse/vueuse/tree/main/packages/shared/refDebounced)
1. （Debounce）延遲更新 ref 值，在參數指定時間過後 ref 值的更新才會執行。
2. 利用 [useDebounceFn()](#usedebouncefn) 將更新值的動作延遲到指定時間結束後。

---

### [refDefault](https://github.com/vueuse/vueuse/tree/main/packages/shared/refDefault)
1. 給 ref 定義預設值（當 `ref.value = undefined | null` 時會 `get()` 會取得預設值）。
2. 回傳 `computed`，將 `get()` 內部做處理判斷。

---

### [refThrottled](https://github.com/vueuse/vueuse/tree/main/packages/shared/refThrottled)
1. （Throttle）限制 ref 值的更新次數。
2. `leading`：指定呼叫在 throttle 開始前。
3. `trailing`：指定呼叫在 throttle 結束後。

---

### [refWithControl](https://github.com/vueuse/vueuse/tree/main/packages/shared/refWithControl)
1. 利用 `extendRef` 提供了兩個額外的函數 `get` 和 `set`，以更好地控制何時 track / trigger 響應性。
2. 不會觸發響應性的 getter
```javascript
const foo = refWithControl('foo')

foo.get(false)
foo.untrackedGet()
foo.peek()
```
    
3. 不會觸發響應性的 setter
```javascript
const foo = refWithControl('foo')

foo.set('bar', false)
foo.silentSet('bar')
foo.lay('bar')
```
    
4. `onBeforeChange()`：可以控制是否接受新的值。（拒絕就 `return false`）
```javascript
const num = refWithControl(0, {
  onBeforeChange(value, oldValue) {
  if (Math.abs(value - oldValue) > 5)
    return false
  },
})
```
    
5. `onChanged()`：與 Vue 的 `watch` 相似，但它的同步開銷更少。
```javascript
const num = refWithControl(0, {
  onChanged(value, oldValue) {
    console.log(value)
  },
})
```
    
6. `options.onBeforeChange?.(value, old)` 先判斷 `onBeforeChange` 是否為 `undefined | null`，若不是再進一步調用函數（和參數之間要加 `.`）。

---

### [resolveRef](https://github.com/vueuse/vueuse/tree/main/packages/shared/resolveRef)
1. 將 value、ref 或 getter 規範化為 `ref` 或 `computed`。
2. 判斷傳進的參數是否為 function，是的話回傳 computed，否則回傳 ref。

---

### [toValue](https://github.com/vueuse/vueuse/tree/main/packages/shared/toValue)
1. 原本名稱是 `resolveUnref`。
2. 取得 value、ref、getter 的值。
3. 判斷傳進的參數是否為 function（Getter），是的話回傳執行的結果，否則回傳 `unref()` 的結果。

---

### [set](https://github.com/vueuse/vueuse/tree/main/packages/shared/set)
1. `ref.value = x` 的簡寫。
```javascript
set(ref, x) // ref
set(obj, key, x) // object
```
2. 透過參數數量判斷要更新的值是 ref 或是 object。

---

### [syncRef](https://github.com/vueuse/vueuse/tree/main/packages/shared/syncRef)
1. 可以實現雙向引用（two-way refs）的同步，將兩個 `Ref` 物件之間的變更同步，也可以透過參數更改成單向同步。
2. 回傳值是可以取消監聽器的函式。
3. 使用 `watch` 而不是 `computed` 的好處是有更多客製化的選項，包含：`flush`、`deep`、`immediate`。

---

### [syncRefs](https://github.com/vueuse/vueuse/tree/main/packages/shared/syncRefs)
1. 讓 target ref（多個可寫成陣列）的值與 source ref 的值保持同步。
2. target 在傳入的時候若不是陣列（單個）會先另外放在陣列內，透過 forEach 將 source 的新值去賦值給每項 `target.value`。
3. 回傳值是可以取消監聽器的函式。

---

### [toReactive](https://github.com/vueuse/vueuse/tree/main/packages/shared/toReactive)
1. 將 ref 轉換為 reactive，還可以創建一個可替換的 reactive 物件。

---

### [toRefs](https://github.com/vueuse/vueuse/tree/main/packages/shared/toRefs)
1. 可以將普通或具響應性的物件、陣列等的最外層都轉換成 ref 以方便解構使用。
2. 若傳入的參數不是 ref（普通的物件、陣列或 reactive），直接回傳 [toRef()](https://vuejs.org/api/reactivity-utilities.html#torefs) 的結果。
3. 若傳入的參數是 ref，則不管是物件或是陣列都將最外層的每一項做 `customRef()`。
4. 每一項的 `get()` 和 `set()` 都是從 objectRef 去取得或是藉由重新賦值去觸發 objectRef 的響應的。（也因此不需手動添加 `track()` 和 `trigger()`）

---

### [tryOnBeforeMount](https://github.com/vueuse/vueuse/tree/main/packages/shared/tryOnBeforeMount)
1. 如果在 component 的生命週期內，呼叫 `onBeforeMount`；不是則單純執行參數 function。
2. `onBeforeMount`：負責處理在 component 初次渲染之前需要完成的操作。  
調用的時機點為 component 已經完成設置其響應性狀態，但還沒有創建任何 DOM 節點，即將第一次地執行其 DOM 渲染效果。

---

### [tryOnBeforeUnmount](https://github.com/vueuse/vueuse/tree/main/packages/shared/tryOnBeforeUnmount)
1. 如果在 component 的生命週期內，呼叫 `onBeforeUnmount`；不是則什麼都不做。
2. `onBeforeUnmount`：調用時機為當 component instance 即將被卸載時（仍可使用）。

---

### [tryOnMounted](https://github.com/vueuse/vueuse/tree/main/packages/shared/tryOnMounted)
1. 如果在 component 的生命週期內，呼叫 `onMounted`；不是則單純執行參數 function。
2. `onMounted`：調用時機為 component 被掛載後。
    
<b>掛載的條件為</b>  
* 所有同步子元件都已經被掛載（不包括異步元件或在 `<Suspense>` 樹中的元件）。
* 自身的 DOM 樹已經被創建並插入到父容器中。（如果應用程式的根容器也在 document 中，則只保證元件的 DOM 樹在 document 中。）

---

### [tryOnScopeDispose](https://github.com/vueuse/vueuse/tree/main/packages/shared/tryOnScopeDispose)
1. 如果在 effect scope 內就執行 `onScopeDispose()`，不是的話則什麼都不做。
2. `onScopeDispose`：註冊一個 dispose callback 在當前的 effect scope 上，調用時機為相關的 effect scope 被停止時。

---

### [tryOnUnmounted](https://github.com/vueuse/vueuse/tree/main/packages/shared/tryOnUnmounted)
1. 如果在 component 的生命週期內就執行 `onUnmounted()`，不是的話則什麼都不做。
2. `onUnmounted`：調用時機為 component 被卸載後。
    
<b>卸載的條件為</b>
* 所有子元件都被卸載。
* 所有相關的 reactive effects（渲染效果、在 setup 中所註冊的 computed 或 watchers）都被停止。

---

### [until](https://github.com/vueuse/vueuse/tree/main/packages/shared/until)
1. 一次性的觀察變化（Promise）。
2. function `toBe` 的 `[v1, v2]` 指的是 `r` 和 `value`。

---

### [useArrayEvery](https://github.com/vueuse/vueuse/tree/main/packages/shared/useArrayEvery)
1. 響應性的 `Array.every`。
2. `Array.every` 的型別是 
    
```typescript
Array<T>.every(
	predicate: (element: T, index: number, array: T[]) => unknown,
	thisArg?: any
): boolean
```
所以傳入 `useArrayEvery` 的 `fn` 型別是 `Array.every` 的 `predicate` 型別。
    
3. 在傳入 `fn` 參數時，是 callback function，不限制有幾項參數。
4. `i` 拿到的值為第一項（`element`）。

---

### [useArrayFilter](https://github.com/vueuse/vueuse/tree/main/packages/shared/useArrayFilter)
1. 響應性的 `Array.filter`。

---

### [useArrayFind](https://github.com/vueuse/vueuse/tree/main/packages/shared/useArrayFind)
1. 響應性的 `Array.find`。

---

### [useArrayFindIndex](https://github.com/vueuse/vueuse/tree/main/packages/shared/useArrayFindIndex)
1. 響應性的 `Array.findIndex`。

---

### [useArrayFindLast](https://github.com/vueuse/vueuse/tree/main/packages/shared/useArrayFindLast)
1. 響應性的 `Array.findLast`。
2. `!Array.prototype.findLast`：判斷版本是否有支援 `findLast`。

---

### [useArrayJoin](https://github.com/vueuse/vueuse/tree/main/packages/shared/useArrayJoin)
1. 響應性的 `Array.join`

---

### [useArrayMap](https://github.com/vueuse/vueuse/tree/main/packages/shared/useArrayMap)
1. 響應性的 `Array.map`

---

### [useArrayReduce](https://github.com/vueuse/vueuse/tree/main/packages/shared/useArrayReduce)
1. 響應式的 `Array.reduce`。
2. `MaybeRefOrGetter<MaybeRefOrGetter<T>[]>` 代表 `MaybeRefOrGetter` 的陣列裡每一項都是 `MaybeRefOrGetter`。  
`type MaybeRefOrGetter<T> = MaybeReadonlyRef<T> | MaybeRef<T>`
3. Type `UseArrayReducer` 是 `Array.reduce` 第一個參數的型別：
    
```typescript
(
	previousValue: PV,
	currentValue: CV,
	currentIndex: number,
	// array: T[]
) => R
```

---

### [useArraySome](https://github.com/vueuse/vueuse/tree/main/packages/shared/useArraySome)
1. 響應式的 `Array.some`。
2. 如果直接寫 `some(fn)` 就不能將每次迭代的 `element` 先做  `toValue` 了。
3. `fn(toValue(element), index, array)` 應該會拿到原本該回傳的 boolean。

---

### [useArrayUnique](https://github.com/vueuse/vueuse/tree/main/packages/shared/useArrayUnique)
1. 響應式的陣列且內部元素不重複。
2. 若為物件陣列可以自定義判別式。

---

### [useCounter](https://github.com/vueuse/vueuse/tree/main/packages/shared/useCounter)
1. 附有功能的基本計數器。

---

### [useDateFormat](https://github.com/vueuse/vueuse/tree/main/packages/shared/useDateFormat)
1. 根據傳遞的令牌字符串（e.g. `YYYY-MM-DD`）獲取格式化的日期。
2. `[]` 包起來的字串不會被解析成日期（因為：`\[([^\]]+)]`）  
可以拆成這樣看： <span style="color: #e8cb25; font-weight: bold;">\\[</span> <span style="color: #e86325; font-weight: bold;">(</span> <span style="color: #03823a; font-weight: bold;">[^</span> <span style="color: #e8cb25; font-weight: bold;">\\]</span> <span style="color: #03823a; font-weight: bold;">]</span> <span style="">+</span> <span style="color: #e86325; font-weight: bold;">)</span> <span style="color: #e8cb25; font-weight: bold;">]</span>
3. 利用正則匹配和 replace 將字串轉換成日期。
4. `!/Z$/i.test(date)` 的用意是排除不需要做時區轉換的字串。（最後面如果是 `Z`
 就代表 `UTC +0` 時區。）
5. `date.match(REGEX_PARSE)` 將字串透過正則匹配回傳拆分完的陣列。
    
```javascript
const REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
const date = '2000/11/23 15:23:38:34'.match(REGEX_PARSE)
    
// [ "2000/11/23 15:23:38:34", "2000", "11", "23", "15", "23", "38", "34" ]
```
6. `str.substring(indexStart[, indexEnd])` 回傳一個字串從 `indexStart` 到 `indexEnd` 前一項，或最後一項。

---


### [useDebounceFn](https://github.com/vueuse/vueuse/tree/main/packages/shared/useDebounceFn)
1. （Debounce）延遲執行一個函數。
2. `maxWait`：延遲的最大時間（ms），若都沒有達成調用則時限到必定調用一次。
3. `rejectOnCancel`：設置選項 `rejectOnCancel: true` 才能 `catch` 到 Promise 被拒絕。（決定 `lastRejector()` 是執行 `resolve` 還是 `reject`）
預設情況函數若被取消，Promise 不會被拒絕。
4. `createFilterWrapper()` 會回傳一個回傳 Promise 的 function 。
5. `debounceFilter()`：

<FoldCode>

![](/.vitepress/images/vueuse-notes/debounceFilter.jpeg)

</FoldCode>

---

### [useInterval](https://github.com/vueuse/vueuse/tree/main/packages/shared/useInterval)
1. 響應性計數器（根據時間間隔增加）。
2. `controls: exposeControls = false` 將 `controls` 取別名 `exposeControls`，預設為 `false`。

---

### [useIntervalFn](https://github.com/vueuse/vueuse/tree/main/packages/shared/useIntervalFn)
1. 具控制功能的 `setInterval` 封裝程式。
2. [isClient](https://github.com/vueuse/vueuse/blob/main/packages/shared/utils/is.ts)：`typeof window !== 'undefined'`

---

### [useLastChanged](https://github.com/vueuse/vueuse/tree/main/packages/shared/useLastChanged)
1. 記錄最後一次更改的時間戳。
2. 內部以 `watch` 實作。

---

### [useThrottleFn](https://github.com/vueuse/vueuse/tree/main/packages/shared/useThrottleFn)
1. 限制函數的執行。 
對於限制處理程序在調整大小和滾動等事件上的執行速度特別有用。
2. `trailing`：若為 `true`，將會在 `ms` 時間結束後再次調用 `fn`。
3. `leading`：若為 `true`，則在 `ms` 時間結束前一刻調用 `fn`。
4. `rejectOnCancel`：若為 `true`，如果已取消的話將拒絕最後一次呼叫。

[⋯ Test Playground](https://play.vueuse.org/#N4IgDghgxg1hDmBTAziAXAbVAOwgW0XRADcBXRAWgBNE8BLEAGhGQHtSAnKQtEU7MDHhMQNZFA50wAFzqtsRAGrkABABFadFQAoAFhAA2AMxV1sKgGIdE2KLoCUp5CogqaxRAdZgz8FaVkDOmkATxcDLwB3ZxD2FWlWFUjJaUQVAFVsOg8OZEMVZTSAGToAIw4ISRQVI1YOAtUAJhUAMhUAZhFOAyJdaWkwZDQAemH+QXgAOihWPGGyShp6YaDS4bMaAA9JvAArVABfRhx8HhAAAQXSZERh5H1rKhE2Tm4icaERMQkpWXkiADKD0QVAaiHSN38gWCdBQky6HB6vD6AyGow+Uxmc0u5Gut3ulRB5wAnJMAAzk9bYLY7fYgI4nAhEHGIPHDGbWZ7sLhnDFfFA-GRyBS8ADCrAiiCgf3MrBMKBu2Fk+UKKnFeDArGQMPkGWhshQCKRIBRgxGYwEQmms2GLLZHMQJPJlI2iG2e0OAF1mEY6AZDWhQABBMBgSYLdCgVIagwQVJEAA8VGyAB1zCp4JIqABeFMgAB+NSiFBmBgzEDAFAALHm0yoVGBY9xcyAZkqbNISx3EPVgrRkF32xxa+ndC3xNYbCP67UlS28PJWNOVAA+OsqBPiurJ3CpFSx0qeFsADTzKjQxEM5BbpDAVDjINPIBUwzX6c3rG3Zgf+4gh4MLYAJpnheV6IDed4PlQwHPq+65JtkK7AMA-iQakoIHAcCbDMmxBvthuErs8grSEQdAanU0gqCh1hGIwSRxnYKgHDUHCzCoADkCwcWm5GahwVEoXiACy7A3PReIACq6Gx-T+hY5gsUYbF4Jxdo3OydSIDxWQUQJaqfhwO4-sp7EcZMwxbkZ36pOG5A6WmbbIIJKibPRYQsdm-g3KJeLaPYjnyM5qH3uhx4qF5tHaGSAW2EFVG3qFIKARFKhRTFgXYMFiVQal6WxZlwXSDJrBySCCmpVJJVlQp2j+RFK7UeuOVheGYGpdsl4GOQzVoclbXdWkXkhANPXpi1IKjWkADUXkAIxpkcKhzQArGSZL0UYhjifEHDkAV2CRIxujaBgbkqCE3o6I42aNcA67FbJ0j+lQtWxQcsX0swVnGbZEaBiA0aNg+ia4eus7SPOi7LqU8AtkE8B9BQa1km4lQwGg94cDAyPrcuRj+psLaFqWy6pJskN5twQ7LmALaNDD249i2bH8DQVAjm+9YJsgkDmOTlMgFWmwGHmSEoV1qiYdhvMQNgXMbrL-NuoLyCqVjGMI0jxLrWj2NoN40DBCEuNnngLadgzIArr5kLIb+-7MVhdx8-hOGIcRkgyEQNC+tgiAAApsYM2j3emB6eGgKgAtIkjYPAjDrpLiBRwAcqQeCHhwifYB99KYUAA)


---

### [useTimeout](https://github.com/vueuse/vueuse/tree/main/packages/shared/useTimeout)
1. 控制在給定的時間後更新 value。
2. 使用到 `useTimeoutFn`，並回傳 `ready` 表示是否完成更新。

---

### [useTimeoutFn](https://github.com/vueuse/vueuse/tree/main/packages/shared/useTimeoutFn)
1. 指定 `cb` 在 `interval` 後再執行，計時時間內 `isPending = true`。

---

### [useToNumber](https://github.com/vueuse/vueuse/tree/main/packages/shared/useToNumber)
1. 響應性地轉換字串 ref 為數字。

---

### [useToString](https://github.com/vueuse/vueuse/tree/main/packages/shared/useToString)
1. 響應性地使用 `${ }` 將 ref 的 value 轉換成字串。

---

### [useToggle](https://github.com/vueuse/vueuse/tree/main/packages/shared/useToggle)
1. Boolean 切換器。
2. 若參數傳進 ref，會回傳 toggle function。
3. 為了預防 `$event` 擔任第一參數蓋掉 value，寫成 `useToggle()` 以保證無參數傳入。
4. `vue-demi`：為 Vue 2 和 Vue 3 所創建的通用函式庫。
5. `isRef`：檢查參數值是否為 ref 物件。

---

### [watchArray](https://github.com/vueuse/vueuse/tree/main/packages/shared/watchArray)
1. watch 陣列的添加和刪除。
2. 類似 watch，但會將新增和移除的元素提供給 callback function。如果陣列透過 `push`、`splice` 等方式作更新，將會傳遞 `{ deep: true }`。
3. `type WatchSource<T = any> = Ref<T> | ComputedRef<T> | (() => T)`
4. `oldListRemains`：用來記錄陣列值的差異，`false` 表示這項值並不是新舊陣列都存在（可能是新增或是刪除了），`true` 則代表新舊陣列皆有（沒有變動）。
5. `found`：用來記錄是否為新增的值。`false` 代表舊陣列沒有這項值（需要新增到 `added` 陣列和 `oldList` 陣列內），`true` 則代表有（不需改動）。

---

### [watchAtMost](https://github.com/vueuse/vueuse/tree/main/packages/shared/watchAtMost)
1. 若觸發次數超過 `count`，則會註銷 watch。
2. `watchWithFilter()` 回傳的 `stop` 是註銷 watch 的函數。

---

### [watchDebounced](https://github.com/vueuse/vueuse/tree/main/packages/shared/watchDebounced)
1. 額外提供 `debounce` 和 `maxWait` 的 `watch`。
2. 基本就是使用 `watchWithFilter` 在參數 `eventFilter` 傳入 `debounceFilter`。

---

### [watchIgnorable](https://github.com/vueuse/vueuse/tree/main/packages/shared/watchIgnorable)
1. 回傳 `ignoreUpdates(updater)` 和 `ignorePrevAsyncUpdates()` 以忽略對 source 的特定更新。
2. `ignoreUpdates(updater)`：參數 `updater`（callback）對於 source 進行改動時不會觸發 watch。
3. `ignorePrevAsyncUpdates()`：只適用於非同步刷新 `pre` 和 `post`。
如果使用了 `flush: 'sync'`，則 `ignorePrevAsyncUpdates()` 不會起作用，因為每次更新 source 後，watch 將立即觸發。
4. 在 `flush` 為 `sync` 的情況下，`ignorePrevAsyncUpdates = () => {}`。
5. source 每次更新時，`ignoreCounter` 和 `syncCounter` 會先歸零，接著 `syncCounter++`
6. 只有使用到 `ignoreUpdates(updater)` 或 `ignorePrevAsyncUpdates()` 時 `ignoreCounter` 才會 `> 0`。

---

### [watchImmediate](https://github.com/vueuse/vueuse/tree/main/packages/shared/watchImmediate)
1. `watch` 的 `{ immediate: true }` 版本。

---

### [watchOnce](https://github.com/vueuse/vueuse/tree/main/packages/shared/watchOnce)
1. 只觸發一次的 `watch`。
2. 在執行指定函式時，利用 `nextTick(() => stop())` 去執行 `watch` 所回傳的停止函式。

---

### [watchPausable](https://github.com/vueuse/vueuse/tree/main/packages/shared/watchPausable)
1. 可以藉由回傳額外的 `pause()` 和 `resume()` 函數來控制。
2. 利用 `watchWithFilter` 再包一層判斷 `isActive` 為 `true` 才執行原函式的動作。
3. `pause()` 將 `isActive` 設為 `false`，`resume()` 將 `isActive` 設為 `True`。

---

### [watchThrottled](https://github.com/vueuse/vueuse/tree/main/packages/shared/watchThrottled)
1. `throttle`：在間隔期間內只允許調用一次。
2. `trailing`：在間隔期間內觸發，若為 `true` 則會等待間隔時間結束後調用。若為 `false` 則就算間隔時間結束也不會調用。
3. `leading`：若為 `true` 則在觸發時立刻調用，若為 `false` 則在間隔時間結束時才調用。
4. 基本就是使用 `watchWithFilter` 在參數 `eventFilter` 傳入 `throttleFilter`。

---
### [watchTriggerable](https://github.com/vueuse/vueuse/tree/main/packages/shared/watchTriggerable)
1. 提供在響應式物件沒有變動時也可以手動觸發 watch 的函式。
2. `onCleanup`：會在下一次 watch 的 callback 函式執行前執行參數（也是 callback），可用來改變上一次 watch 的 callback 函式作用域內的變數。


<FoldCode>

![](/.vitepress/images/vueuse-notes/watchTriggerable.jpg)

</FoldCode>

---

### [watchWithFilter](https://github.com/vueuse/vueuse/tree/main/packages/shared/watchWithFilter)
1. 回傳 watch，callback function 使用到 `createFilterWrapper()`（可以多包一層需要的執行條件）。

---
### [whenever](https://github.com/vueuse/vueuse/tree/main/packages/shared/whenever)
1. 參數格式與 watch 相同，差別在於是監測 Boolean 的響應式物件，當物件為 `true` 時才執行 callback。

## Core