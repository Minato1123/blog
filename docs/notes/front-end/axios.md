# axios
axios 是一個以 `Promise` 為基礎的 HTTP 請求工具，可以在瀏覽器與 `Node.js` 中被應用，在伺服器端也可以使用 `Node.js` 的 http module，而在用戶端中使用則可以使用 XMLHttpRequests。<br>
[⋯ Reference](https://ithelp.ithome.com.tw/articles/10253259) 
<span style="margin-right: 0.5rem;"></span>
[⋯ GitHub](https://github.com/axios/axios)

## 特性
* 從瀏覽器中發送 XMLHttpRequests
* 從 node.js 中發送 http 請求
* 可支援 Promise API
* 可攔截請求與回應
* 可轉換請求與回應的數據
* 可取消請求
* 可自動轉換成 Json 格式
* 保護並預防客戶端受 XSRF 攻擊

當需要透過 http 由瀏覽器發送請求或者是透過直接向 `Node.js` 發送請求時，都可以去使用 axios 來處理，而除了 Vue 的套件外，其他的前端框架或語言都可以使用 axios 去取得資料，如：React、Node、JavaScript。

## 基本語法
```javascript
axios(url[, config])
```
axios 回傳的物件是 `Promise` (`fulfilled` 狀態)，可以使用 `.then` 和 `.catch` 去處理成功和失敗的結果。

### GET 請求
回傳的是類似 Response 的物件，裡面的 `data` 才是所需的資料。
```js
axios.get('https://example.com/api/')
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
```

#### 參數設定

1. 直接寫在 `URL` 上
```js
axios.get('https://example.com/api/?gender=female&nat=us')
  .then((response) => console.log(response)) 
  .catch((error) => console.log(error))
```
2. 放在 `params` 內
```js
axios.get('https://example.com/api/', {
  params: {
      gender: 'female',
      nat: 'us'
  }
})
.then((response) => console.log(response))
.catch((error) => console.log(error))
```

#### async / await 寫法

```js
async function getUser() {
  try {
    const response = await axios.get('https://example.com/api/?gender=female&nat=us')
    console.log(response)
  } catch(error) {
    console.log(error)
  }
}
```

#### 同時發出多個請求
```js
function getUserFemale() {
  return axios.get('https://randomuser.me/api/?gender=female&nat=us')
}

function getUserMale() {
  return axios.get('https://randomuser.me/api/?gender=male&nat=us')
}

Promise.all([getUserFemale(), getUserMale()])
  .then((response) => {
    const femaleUser = response[0]
    const maleUser = response[1]
    console.log(femaleUser)
    console.log(maleUser)
  })
```

### POST 請求
```js
axios.post('https://example.com/api/signup', {
  email: 'axios@example.com',
  password: '1234'
})
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
```

## Config 物件寫法
把所有東西（`method`、`url`、`data` ...）放在一個物件內，這個物件稱之為 `config`。
### GET 請求
```js
axios({
  method: 'get',
  url: 'https://example.com/api/?gender=female&nat=us'
})
.then((response) => console.log(response))
.catch((error) => console.log(error))
```
### POST 請求
```js
axios({
  method: 'post',
  url: 'https://example.com/api/signup',
  // API 要求的資料
  data: {
      email: 'alysa@gmail.com',
      password: '11223344'
  }
})
.then( (response) => console.log(response))
```
> 在 POST 的範例中，將要傳送的資料（`email`, `password`）放在 `data` 內。
:::warning `data` 不等於 `params`
* `data`：傳送給伺服器的資料
* `params`：在 URL 裡要加上的参數
:::

Config 物件內，只有 `url` 是必需的，其他都是 optional。
```js
axios({
  method: 'post',
  url: 'https://example.com/',
  data: {
    ...
  },
  params: {
    ...
  },
  // 添加在 url 前面，除非 url 是絕對路徑
  baseURL: '...',
  ...
})
```
### 預設 Config
```js
const instance = axios.create({
  baseURL: 'https://example.com/api/',
  timeout: 1000,
  headers: {'Custom-Header': '...'}
})
```
* `baseURL`：它會被添加在 `url` 前面，例如設定 `baseURL` 是 `https://example.com/api`，接著傳入的 `URL` 是 `/exp`，最終的傳送去伺服器的 `URL` 就會是 `https://example.com/api/exp`。
* `timeout`：如果發出請求時間大於 `timeout` 所設定的時間，請求就會被中斷。
* `headers`：發出請求的標頭，裏面放 `Authorization`、`Content-Type` 等等的東西。