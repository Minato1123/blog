# JS Promise


## Promise 基本介紹
1. **初始狀態**：`pending`
2. **操作完成**：`resolved` / `fulfilled`
3. **操作失敗**：`rejected`


* `new Promise` 內的函式會立即被執行
* 當 `resolve()` 得到內容後，才會執行 `.then`
* 在`.then` 的 resolvedCallback 中，可以得到在 `new Promise` 中 `resolve()` 內所得到的值（value）
* 如果在 `.then` 的 resolvedCallback 中 return 一個值，則這個值會以 **Promise 物件**的形式傳到下一個 `.then`
* 在下一個 `.then` 的 resolvedCallback 中可以取得上一個 `.then` 中 return 的值
* 如果在 `.then` 中是 return 另一個 `new Promise` ，則下一個 `.then` 會等到這個 Promise 中的 `resolve()` 得到值後才執行
* 在下一個 `.then` 的 resolvedCallback 中，可以得到上一個 `new Promise` 中 resolve 的值

```javascript
const p = new Promise(callback<resolve, reject>)

p.then(<resolveHandler>, [<rejectHandler>])
  .then(<resolveHandler2>, <rejectHandler2>)
  .catch(<rejectHandler>)
  .finally(<finallyHandler>)

Promise.all('<array>')
Promise.race('<array>')
```

### 基本使用
```javascript
const myPromise = new Promise((resolve, reject) => {
  console.log('In new Promise, start callback'); // 立即執行
  setTimeout(() => {
    // 一秒後執行
    let response = 10;
    resolve(response);
  }, 1000);
});

myPromise.then((value) => {
  // 在 myPromise 被 resolve 時執行
  console.log('The answer is ' + value);
});

myPromise.catch((error) => {
  // 在 myPromise 被 reject 時執行
  console.log('error', error);
});
```

### 其他使用
### `Promise.all`
讓多個 Promise 同時執行。<br>
每個 Promise 都完成時，resolve 才會回傳，並將值存入陣列中。<br>
只要有其中一個 Promise 被 rejected，則整個 `Promise.all` 立刻被拒絕。
```javascript
Promise.all([newPromise1, newPromise2, newPromise3, newPromise4])
  .then((data) => {
    // 一次性同時回傳成功訊息，回傳以上三個數值的陣列
    console.log(data)
  })
  .catch((err) => {
    // 失敗訊息 (立即)
    console.log(err)
  })

```
### `Promise.allSettled`
不管結果是成功或失敗，確認每一項非同步事件都執行完畢得到結果，並回傳各自的結果。
```js
Promise.allSettled([
  newPromise1,
  newPromise2,
  newPromise3,
])
  .then(value => console.log(value))
  .catch(err => console.log(err))
  
//[
//  { status: 'fulfilled', value: '...' },
//  { status: 'rejected', reason: '...' },
//  { status: 'fulfilled', value: '...' },
//]  
```
### `Promise.race`
任一個 Promise 轉換狀態，就會回傳一個同樣狀態的 Promise 物件，並且接收其成功值或失敗訊息。<br>
其餘 Promise 的結果或錯誤會被忽略。
```javascript
Promise.race([newPromise1, newPromise2, newPromise3])
  .then((data) => {
    // 僅會回傳一個最快完成的 resolve 或 reject
    console.log('race', data)
  })
  .catch((err) => {
    // 失敗訊息 (立即)
    console.log(err)
  })
```

### `Promise.any`
類似 `Promise.race`，當有一個 Promise 完成，就回傳完成結果。
而所有 Promise 都被拒絕，則會回傳一個特殊物件 AggregateError，會將所有 Promise 的失敗訊息存在 errors 屬性中。
```js
Promise.any([
  newPromise1,
  newPromise2
])
  .then((value) => console.log(value))
  .catch((err) => console.log(err.constructor.name, err.errors))
```

[⋯ Reference](https://ithelp.ithome.com.tw/articles/10276827)

## Async function 及 Await
* `async` function：用來定義一個非同步函式，讓這個函式本體是屬於非同步，但其內部以「同步的方式運行非同步」程式碼。
* `await`：可以暫停非同步函式的運行（中止 `Promise` 的運行），直到非同步進入 `resolve` 或 `reject`，當接收完回傳值後繼續非同步函式的運行。

```js
async function getData() {
  const data1 = await promiseFn(1) // 因為 await，promise 函式被中止直到回傳
  const data2 = await promiseFn(2)
}
```
> 在 `getData` 這個函式中都是以「同步」的方式運行，不會產生同步、非同步程式碼混合的狀況。

### `async function` 非同步函式
用此語法所宣告的函式，可在其內以「同步的方式運行非同步」程式碼。
當使用 `console.log` 查看 `async function` 的回傳值將可以得到與 `Promise` 結構相似的函式，該函式是以非同步的方式運行，所以無法直接使用 `console.log` 取得其值。

### `await` 運算子
屬於一元運算子，它會直接回傳後方表達式的值；但如果是 `Promise` 時則會「等待」 `resovle` 的結果並回傳。
雖然是運算子，但是在原始碼中直接運行 `await` 則會出現錯誤，它只能在 `async function` 中運行，所以 `async/await` 基本上是一體的，不會單獨出現。

### try / catch
```js
async function getData() {
  try {
    const data1 = await promiseFn(1)
    const data2 = await promiseFn(0)
    console.log(data1, data2)
  }
  catch (err) {
    console.log('catch', err)
  }
}
```

[⋯ Reference](https://www.casper.tw/development/2020/10/16/async-await/)

### 搭配 `Promise.all` 使用
```js
async function doubleAndAdd(a, b) {
  const [newA, newB] = await Promise.all([Promise1(a), Promise2(b)])
  return newA + newB
}
```

### 在迴圈中使用
在 `for`, `while` 或 `for...of` 這種迴圈中都可以正常使用，若是在帶有 `callback` 的迴圈中，例如 `forEach`, `map`, `filter`, `reduce` 等等，就需要特別留意。
* 如果想要在迴圈中使用 `await`，則可以使用一般的 `for` 迴圈、`for await...of`，或 `map` 搭配 `Promise` 的寫法，千萬不要使用 `forEach`。
* 若有需要使用 `filter` 或 `reduce` 等其他處理陣列的方式，先等陣列的資料完整取得後再來呼叫這些方法。

#### 如果要「依序」拿到每個值（每個 `Promise` 結束後可以馬上取得結果）
1. 使用 `for await(const item of promises) {...}`
```js
(async function () {
  for await (const item of promises) {
    console.log('[for await...of] result', item)
  }
})()
```
2. 使用 `for...of`
```js
(async function () {
  for (const item of promises) {
    const result = await item
    console.log('[for...of] result', result)
  }
})()
```
3. 使用 `for` 迴圈
```js
(async function () {
  for (let i = 0; i < promises.length; i++) {
    const result = await promises[i]
    console.log('[for] result', result)
  }
})()
```
#### 一次取得所有結果
1. 使用 `Promise.all`
> 需等待所有 `Promise` `resolve` 或其中一個被 `reject` 時終止。
```js
(async function () {
  const results = await Promise.all(promises)
  console.log('[Promise.all] results', results)
})()
```
2. 使用 `Promise.allSettled`
> 需等待所有 `Pormise` 都 `resolve`(`fulfilled`) / `reject`(`rejected`) 後終止。
```js
(async function () {
  const results = await Promise.allSettled(promises)
  console.log('[Promise.allSettled] results', results)
})()
```
3. 使用 `for...of await`
> 需等待所有 `Promise` `resolve` 或其中一個被 `reject` 時終止。
```js
(async function () {
  for (const result of await Promise.all(promises)) {
    console.log('[for...of await] result', result)
  }
})()
```
[⋯ Reference](https://pjchender.dev/javascript/js-async-await/)