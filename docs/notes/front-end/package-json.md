# package.json
常見配置項：
![](https://www.readfog.com/assets/12/8d/a08e5b4dc9ec5eab1fa9f4fa83f3.png)
[⋯ Reference](https://blog.csdn.net/qiwoo_weekly/article/details/125270150)
<span style="margin-right: 0.5rem;"></span>
[⋯ npm](https://docs.npmjs.com/cli/v9/configuring-npm/package-json)
## <b>必須屬性</b>
如果沒有此兩項屬性，就無法正常執行 `npm install` 命令。  
npm 規定 package.json 文件是由名稱和版本號作爲唯一標識符的。 
### 1. name
專案的名稱（String）
:::warning 注意事項
* 名稱的長度必須小於或等於 214 個字符，不能以 “.” 和“_”開頭，不能包含大寫字母。  
這是因爲當軟件包在 npm 上發佈時，會基於此屬性獲得自己的 URL，所以不能包含非 URL 安全字符（non-url-safe）
* 名稱可以作爲參數被傳入 require("")，用來導入 module，所以應當儘可能的簡短、語義化。
* 名稱不能和其他 module 的名稱重複，可以使用 `npm view` 命令查詢 module 名稱是否重複，如果不重複就會提示 404。
:::
> 不過平時開發的很多項目並不會發佈在 npm 上，所以這個名稱是否標準可能就不是那麼重要，它不會影響項目的正常運行。  
> 如果需要發佈在 npm 上，name 字段一定要符合要求！
### 2. version
version 字段表示該專案的版本號（String）  
在每次項目改動後，即將發佈前都要同步的去更改項目的版本號。
:::tip 使用規範
* 版本號的命名遵循語義化版本 2.0.0 規範，格式爲：`[主版本號].[次版本號].[修訂號]`。  
  1. 主版本號：進行較大功能性的改動
  1. 次版本號：新增新功能
  1. 修訂號：修復了一些 bug
* 如果某個版本的改動較大，並且不穩定，可能如法滿足預期的兼容性需求，就需要發佈先行版本，先行版本通過會加在版本號的後面，通過 `-` 號連接以 `.` 分隔的標識符和版本編譯信息：內部版本（alpha）、公測版本（beta）和候選版本（rc，即 release candiate）。
:::

## 描述訊息
### 1. description
用來描述此專案（String），可以讓其他開發者在 npm 的搜尋到我們的專案。
### 2. keywords
表示此專案的關鍵字（String[]），用來增加此專案的曝光率。
### 3. author
表示該專案的作者。  
（String）
```json
author": "CUGGZ <xxxxx@xx.com> (https://juejin.cn/user/3544481220801815)"
```
（Object）
```json
"author": {
  "name": "CUGGZ",
  "email": "xxxxx@xx.com",
  "url": "https://juejin.cn/user/3544481220801815"
}
```
### 4. contributors
表示該專案的貢獻者們。  
（String[]）
```json
"contributors": [
  "CUGGZ0 <xxxxx@xx.com> (https://juejin.cn/user/3544481220801815)",
  "CUGGZ1 <xxxxx@xx.com> (https://juejin.cn/user/3544481220801815)"
 ]
```
（Object[]）
```json
"contributors": [
  {
   "name" : "CUGGZ0",
   "email" : "xxxxx@xx.com",
   "url" : "https://juejin.cn/user/3544481220801815"
 },
  {
   "name" : "CUGGZ1",
   "email" : "xxxxx@xx.com",
   "url" : "https://juejin.cn/user/3544481220801815"
 }
 ]
```

### 5. homepage
專案的主頁網址（String）。
### 6. repository
表示程式碼的存放網址。  
（string）
```json
"repository": "https://github.com/facebook/react.git"
```
（object）較易閱讀地設置版本控制系統。
```json
"repository": {
  "type": "git",
  "url": "https://github.com/facebook/react.git"
}
```
### 7. bugs
表示專案提交問題的網址（Object），可以填上一個提交問題用的網址與反饋的信箱。
```json
"bugs": { 
  "url" : "https://github.com/facebook/react/issues",
  "email" : "xxxxx@xx.com"
}
```
> 最常見的 bugs 就是 Github 中的 issues 頁面。

## 相依套件配置
專案通常會依賴一個至多個外部的相依套件，而根據相依套件的不同用途可以將他們配置在這五個屬性下：`dependencies`、`devDependencies`、`peerDependencies`、`bundledDependencies`、`optionalDependencies`。

### 1. dependencies
專案的生產環境中所必須的相依套件（Object）。  
當使用 npm 或 yarn 等安裝 npm 包時，該 npm 包會被自動插入到此配置項中。
```json
"dependencies": {
   "react": "^17.0.2",
   "react-dom": "^17.0.2",
   "react-scripts": "4.0.3",
},
```
> 每一項配置都是一個鍵值對（key-value）  
> `key` 表示 module 名稱，`value` 表示 module 的版本號。
:::tip 版本號遵循 `[主版本號].[次版本號].[修訂號]` 的格式規定
* 固定版本：上面的 react-scripts 的版本 `4.0.3` 就是固定版本，安裝時只安裝這個指定的版本。
* 波浪號：比如 `~4.0.3`，表示安裝 `4.0.x` 的最新版本（不低於 `4.0.3`），也就是說安裝時不會改變主版本號和次版本號。
* 插入號：比如上面 react 的版本 `^17.0.2`，表示安裝 `17.x.x` 的最新版本（不低於 `17.0.2`），也就是說安裝時不會改變主版本號。  
如果主版本號爲 `0`，那麼插入號和波浪號的行爲是一致的。
* `latest`：安裝最新的版本。
:::
> 不要把測試或者過渡性的相依套件放在 `dependencies`，避免生產環境出現意外的問題。


### 2. devDependencies
專案在開發階段需要的相依套件，例如 Webpack、Eslint、Babel 等，用於輔助開發。  
它們不同於 `dependencies`，因爲只需安裝在開發設備上，並無需在生產環境中運行程式碼。  
當打包上線時並不需要這些包，所以可以把這些相依套件添加到 `devDependencies` 中，這些依賴依然會在本地指定 `npm install` 時被安裝和管理，但是不會被安裝到生產環境中。
```json
"devDependencies": {
  "autoprefixer": "^7.1.2",
  "babel-core": "^6.22.1"
}
```

### 3. peerDependencies
有些情況下，我們的專案和所相依的 module 可能會<b>同時</b>相依另一個 module，但是所相依的版本不一樣。
> <b>例如</b>  
> 專案相依 A module 和 B module 的 `1.0` 版，而 A module 本身又相依 B module 的 `2.0` 版。  
> 大多數情況下，B module 的兩個版本可以並存且同時運行。  
> <b>但是</b>有一種情況會出現問題，就是這種相依關係將暴露給使用者。

最典型的場景就是插件，比如 A module 是 B module 的插件。  
使用者安裝的 B module 是 `1.0` 版本，但是 A 插件只能和 `2.0` 版本的 B module 一起使用。  
這時，使用者如果將 `1.0` 版本中 B 的實例傳給 A，就會出現問題。  
因此，需要一種機制，在 module 安裝的時候提醒使用者，如果 A 和 B 一起安裝，那麼 B 必須是 `2.0` module。

peerDependencies 就是用來供插件指定其所需要的主工具的版本。
```json
"name": "chai-as-promised",
"peerDependencies": {
   "chai": "1.x"
}
```
> 指定在安裝 `chai-as-promised` module 時，`chai` 必須一起安裝。  
> 而且 `chai` 的版本必須是 `1.x`。  
> 如果專案指定的相依是 `chai` 的 `2.0` 版本，就會報錯。
:::warning
從 npm `3.0` 版開始，`peerDependencies` 不再會默認安裝了。
:::

### 4. optionalDependencies
如果需要在找不到套件或者安裝套件失敗時 npm 仍然能繼續運行，可以將該套件放在 `optionalDependencies` 物件中。  
`optionalDependencies` 物件中的套件會覆蓋 `dependencies` 中同名的套件，所以只需在一個地方進行設置即可。
:::warning
由於 `optionalDependencies` 中的相依可能併爲安裝成功，所以一定要做異常處理，否則當獲取這個相依套件時，如果獲取不到就會報錯。
:::

### 5. bundledDependencies
配置項是一個陣列，陣列內可以指定一些 modules，這些 modules 將在發佈時一起被打包。
:::warning
這個陣列中的值必須是在 `dependencies`, `devDependencies` 內宣告過的套件。
:::

### 6. engines
維護一些舊專案時，可能對 npm 包的版本或者 Node 版本有特殊要求。
如果不滿足條件就可能無法將專案跑起來，爲了讓專案開箱即用，可以在 `engines` 字段中說明具體的版本號。
```json
"engines": {
 "node": ">=8.10.3 <12.13.0",
  "npm": ">=6.9.0"
}
```
:::warning
`engines` 僅為說明的作用，即便使用者安裝的版本不符需求也不影響相依套件的安裝。
:::

## 腳本配置
### 1. scripts
package.json 中內建的腳本入口，是 `key-value` 鍵值對配置，`key` 爲可運行的命令。  
除了運行基本的 `scripts` 命令，還可以結合 `pre` 和 `post` 完成前置和後續操作。
```json
"scripts": {
  "dev": "node index.js",
  "predev": "node beforeIndex.js",
  "postdev": "node afterIndex.js"
}
```
> 執行順序是 `predev` -> `dev` -> `postdev`。  
> 如果 `scripts` 命令存在一定的先後關係，則可以使用這三個配置項，分別配置執行命令。

通過配置 scripts 屬性，可以定義一些常見的操作命令：
```json
"scripts": {
  "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
  "start": "npm run dev",
  "unit": "jest --config test/unit/jest.conf.js --coverage",
  "test": "npm run unit",
  "lint": "eslint --ext .js,.vue src test/unit",
  "build": "node build/build.js"
}
```
> 這些腳本是命令行應用程序。  
> 可以透過調用 `npm run XXX` 來運行，例如：`npm run dev`。  
> 我們可以爲命令使用任何的名稱，腳本也可以是任何操作。

### 2. config
配置 scripts 運行時的配置參數。
```json
"config": {
 "port": 3000
}
```
> 若運行 `npm run start`，則 `port` 將會映射到 `npm_package_config_port` 環境變數。

## 文件 & 目錄
### 1. main
（String）指定加載的 entry（入口文件），在 browser 和 Node 環境中都可以使用。  
如果我們將專案發佈爲 `npm` 包，那麼當使用 `require` 導入 `npm` 包時，回傳的就是 `main` 所列出的文件的 `module.exports` 屬性。  
如果不指定該字串，預設是專案根目錄下的 `index.js`（如果沒找到，將會報錯）。
```json
"main": "./src/index.js"
```
### 2. browser
（String）定義 `npm` 包在 browser 環境下的 entry。
如果 `npm` 包只在 web 端使用，並且嚴禁在 server 端使用，使用 browser 來定義 entry。

### 3. module
定義 `npm` 包的 ESM 規範的 entry，browser 環境和 node 環境均可使用。
如果 `npm` 包導出的是 ESM 規範的包，使用 module 來定義 entry。

:::tip
在 Web 環境中：  
* 如果使用 `loader` 加載 ESM（ES module）
  > 加載順序：browser -> module -> main
* 如果使用 `require` 加載 CommonJS 模塊
  > 加載順序：main -> module -> browser。

Webpack 在進行項目構建時，有一個 `target` 選項，默認爲 Web，即構建 Web 應用。  
如果需要編譯一些同構項目，如 node 項目，則只需將 `webpack.config.js` 的 `target` 選項設置爲 node 進行構建即可。  
* 如果在 Node 環境中加載 CommonJS 模塊，或者 ESM，則只有 `main` 有效。
:::

### 4. bin
（Object）指定各個內部命令對應的可執行文件的位置。
```json
"bin": {
  "someTool": "./bin/someTool.js"
}
```
> `someTool` 命令對應的可執行文件爲 `bin` 目錄下的 `someTool.js`，`someTool.js` 將會建立符號連接 `node_modules/.bin/someTool`。  
> 由於 `node_modules/.bin/` 目錄會在運行時加入系統的 PATH 變量，因此在運行 `npm` 時，就可以不帶路徑，直接透過命令來調用這些腳本。
* 一般寫法
```json
scripts: {  
  "start": "./node_modules/bin/someTool.js build"
}
```
* 簡化寫法
```json
scripts: {  
  "start": "someTool build"
}
```

### 5. files
（String[]）用來描述當把 `npm` 包作爲相依套件安裝時需要說明的文件列表。  
當 `npm` 包發佈時，`files` 指定的檔案會被推送到 `npm` server 中，如果指定的是目錄，那麼該目錄下面所有的檔案都會被提交。
```json
"files": [
    "LICENSE",
    "Readme.md",
    "index.js",
    "lib/"
 ]
```
如果有不想提交的文件，可以在專案的根目錄中新建一個 `.npmignore` 檔案，並在其中標示不需要提交的檔案。  
這個檔案的形式和 `.gitignore` 類似，寫在這個檔案中的檔案即便被寫在 `files` 屬性內也會被排除在外。
```
node_modules
.vscode

build

.DS_Store
```

### 6. man
（String[]）Linux 中的幫助指令，透過該指令可以查看 Linux 中的指令幫助、配置文件幫助和撰寫幫助等訊息。  
如果 node.js module 是一個全局的命令行工具，在 package.json 透過 `man` 屬性可以指定 `man` 命令查找的文件網址。
```json
"man": [
 "./man/npm-access.1",
 "./man/npm-audit.1"
]
```
> `man` 可以指定一個或多個文件, 當執行 `man` {套件名稱} 時,會展現檔案內容給使用者。
:::warning
* `man` 內的文件必須以數字結尾，若經過壓縮可以使用 `.gz` 後綴。  
這個數字表示文件將安裝到哪個 man 節中。
* 如果 `man` 文件名稱不是以 module 名稱開頭的，安裝的時候會加上 module 名稱作為前綴。
:::

### 7. directories
規範專案的目錄。  
node.js module 是基於 CommonJS 模塊化規範實現的，需要嚴格遵循 CommonJS 規範。  
module 目錄下除了必須包含專案的描述文件 package.json 以外，還需要包含以下目錄：
* `bin`：存放可執行二進制文件的目錄。
* `lib`：存放 js 代碼的目錄。
* `doc`：存放檔案的目錄。
* `test`：存放單元測試用例程式碼的目錄。  

在實際的專案目錄中，可能沒有按照這個規範進行命名，那麼就可以在 `directories` 內指定每個目錄對應的檔案路徑：
```json
"directories": {
    "bin": "./bin",
    "lib": "./lib",
    "doc": "./doc",
    "test": "./test",
    "man": "./man"
}
```
> 這個屬性實際上沒有什麼實際的作用，當然不排除未來會有什麼比較有意義的用處。

## 發佈配置
### 1. private
防止使用者意外地將 private repository 發佈到 npm server。
```json
"private": true
```

### 2. publishConfig
在 module 發佈時生效，用於設置發佈時一些配置項的集合。  
如果不想 module 被默認標記爲最新或不想發佈到 public repository，可以配置 tag 或 repository 網址。  
通常情況下，`publishConfig` 會配合 private 來使用。  
如果只想讓 module 發佈到特定 npm repository，就可以這樣來配置：
```json
"private": true,
"publishConfig": {
  "tag": "1.1.0",
  "registry": "https://registry.npmjs.org/",
  "access": "public"
}
```

### 3. os
設置該 `npm` 包可以在什麼作業系統使用，及不能在什麼作業系統使用。
如果希望開發的 `npm` 包只運行在 linux，爲了避免出現不必要的異常，需要建議使用 Windows 系統的使用者不要安裝它，可以使用 os 配置：
```json
"os" ["linux"]   // 適用的作業系統
"os" ["!win32"]  // 禁用的作業系統
```

### 4. cpu
CPU 可以更準確的限制用戶的安裝環境。
```json
"cpu" ["x64", "AMD64"]   // 適用的 cpu
"cpu" ["!arm", "!mips"]  // 禁用的 cpu
```

### 5. license
指定軟體的開源協議，開源協議表明了其他人獲得程式碼後擁有的權利，可以對程式碼進行哪部分操作，或禁止哪部分操作。  
常見的協議如下：
* MIT：只要使用者在專案副本中包含了版權聲明和許可聲明，就可以對程式碼做任何想做的事情，原主人無需承擔任何責任。
* Apache：類似於 MIT ，同時包含了貢獻者向使用者提供專利授權相關的條款。
* GPL：修改專案程式碼的使用者再次分發源碼或二進制代碼時，必須公佈他的相關修改。
```json
"license": "MIT"
```

## 第三方配置
可以承載命令特有的配置，例如 Babel、ESLint 等，它們每個都有特有的屬性，例如 `eslintConfig`、`babel` 等。  
可以在相應的命令、專案檔案中找到如何使用它們。
### 1. typings
指定 TypeScript 的 entry。
```json
"typings": "types/index.d.ts"
```
### 2. eslintConfig
可以寫在單獨的配置文件. eslintrc.json 中，也可以寫在 package.json 文件的 `eslintConfig` 配置項中。
```json
"eslintConfig": {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  "rules": {},
  "parserOptions": {
    "parser": "babel-eslint"
  },
}
```

### 3. babel
指定 Babel 的編譯配置。
```json
"babel": {
  "presets": ["@babel/preset-env"],
  "plugins": [...]
}
```

### 4. unpkg
讓 npm 上所有的文件都開啓 cdn 服務，該 CND 服務由 unpkg 提供。
```json
"unpkg": "dist/vue.js"
```

### 5. lint-staged
在 Git 暫存檔案上運行 linters 的工具，配置後每次修改一個檔案即可給所有檔案執行一次 lint 檢查，通常配合 gitHooks 一起使用。
```json
"lint-staged": {
  "*.js": [
    "eslint --fix",
    "git add"
  ]
}
```
> 使用 lint-staged 時，每次提交程式碼時只會檢查當前改動的檔案。

### 6. gitHooks
定義一個鉤子（hook），在提交（commit）之前執行 ESlint 檢查。  
在執行 lint 命令後，會自動修復暫存區的檔案。  
修復之後的檔案並不會儲存在暫存區，所以需要用 `git add` 將修復後的檔案重新加入暫存區。  
在執行 `pre-commit` 之後，沒有錯誤將會執行 `git commit`。
```json
"gitHooks": {
  "pre-commit": "lint-staged"
}
```
> 配合上面的 lint-staged 來進行程式碼的檢查。

### 7. browserslist
告知支援哪些瀏覽器及版本。  
Babel、Autoprefixer 和其他工具會用到它，以將所需的 polyfill 和 fallback 添加到目標瀏覽器。
```json
"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
}
```
> 指定了一個物件，定義了生產環境和開發環境的瀏覽器要求。  
> 上面的 `development` 就是指定開發環境中支持最後一個版本的 chrome、Firefox、safari 瀏覽器。  
> 這個屬性是不同的前端工具之間共用目標瀏覽器和 node 版本的配置工具，被很多前端工具使用，比如 Babel、Autoprefixer 等。


