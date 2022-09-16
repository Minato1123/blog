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

## Promise 基本使用
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

## Promise 其他使用
### # `Promise.all(陣列)`
```javascript
Promise.all([newPromise1, newPromise2, newPromise3, newPromise4])
  .then((data) => {
    // 一次性同時回傳成功訊息，回傳以上三個數值的陣列
    console.log(data);
  })
  .catch((err) => {
    // 失敗訊息 (立即)
    console.log(err);
  });

```

### # `Promise.race(陣列)`
```javascript
Promise.race([newPromise1, newPromise2, newPromise3])
  .then((data) => {
    // 僅會回傳一個最快完成的 resolve 或 reject
    console.log('race', data);
  })
  .catch((err) => {
    // 失敗訊息 (立即)
    console.log(err);
  });
```
