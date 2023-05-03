# JavaScript prototype

每一個 JavaScript 物件（除了 `null`）在創建的時候就會與之關聯另一個物件，這個物件就是所謂的原型，每一個物件都會從原型「繼承」屬性。

![](../../.vitepress/images/js-prototype/JS-obj-layout.png)

## 範例介紹

* `Person`：建構函式。
* `personA`：實例物件。
* `prototype`：函式的 prototype 屬性指向了一個物件，這個物件正是「調用該建構函式而創建的實例」的原型。
* `__proto__`：指向該物件的原型（物件）。
* `constructor`：每個原型都有一個 constructor 屬性指向關聯的建構函式。


```javascript
function Person() {
    // something
}

const personA = new Person()
```

* 原型物件 `Person.prototype` 的 `constructor` 指向構造函式本身
```javascript
Person.prototype.constructor === Person // true
```
* 實例 `personA` 的 `__proto__` 和原型物件指向同一個地方
```javascript
personA.__proto__ === Person.prototype // true
```
* ES5 的方法，可以獲得物件的原型
```javascript
Object.getPrototypeOf(personA) === Person.prototype // true
```

當獲取 `personA.constructor` 時，其實 `personA` 中並沒有 `constructor` 屬性。
當不能讀取到 `constructor` 屬性時，會從 `personA` 的原型（ `Person.prototype` ）中讀取，正好原型中有該屬性。
```javascript
personA.constructor === Person.prototype.constructor
```



## 原型的原型

原型也是一個物件，既然是物件，就可以用最原始的方式創建它。
```javascript
const obj = new Object()
obj.name = 'Kevin'

console.log(obj.name) // Kevin
```
原型物件就是透過 `Object` 建構函式所生成的，實例的 `__proto__` 指向建構函式的 `prototype`。

## 原型鏈
`Object.prototype` 的原型為 `null`。
```javascript
Object.prototype.__proto__ === null // true
```

即代表 `Object.prototype` 沒有原型，所以查找屬性的時候查到 `Object.prototype` 就可以停止查找了。

除了 `Object` 的原型物件 `Object.prototype` 的 `__proto__` 指向 `null`，其他內建函式物件的原型物件（例如：`Array.prototype`）和使用者定義的建構函式的原型物件的 `__proto__` 都指向 `Object.prototype`。

```javascript
Object.prototype.__proto__ === null
Array.prototype.__proto__ === Object.prototype
Person.prototype.__proto__  === Object.prototype
```

