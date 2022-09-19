<script setup>
import Slides from '../.vitepress/components/Slides/Slides.vue'
import FoldCode from '../.vitepress/components/FoldCode.vue'
</script>


# 隨記 EP1
## 111/09/15
### 套件
  * [unplugin auto import](https://github.com/antfu/unplugin-auto-import)
    > 按照需求自動引入 API
    > 
    > For Vite, Webpack, Rollup and esbuild.

    <FoldCode>

    ```javascript
    AutoImport({
      // 目標文件
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],

      // 自動引入 vue 和 vue-router 相關函数（全局引入插件）
      imports: [
        // 預設包（其餘的可參考來源）
        'vue',
        'vue-router',
        // 客製化範例
        {
          '@vueuse/core': [
            'useMouse', // import { useMouse } from '@vueuse/core',
            // 以別名方式引入
            ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
          ],
          'axios': [
            // 直接引入（不需解構的方式）
            ['default', 'axios'], // import { default as axios } from 'axios',
          ],
          // 參考格式
          '[package-name]': [ 
            '[import-names]',
            // 以別名方式引入
            ['[from]', '[alias]'],
          ],
        },
      ],
      // 聲明文件生成位置和文件名稱
      dts: true,  // './auto-imports.d.ts' 可指定特定路徑

      // Vue template 自動引入
      vueTemplate: false,

      // 解析器, 與 `unplugin-vue-components` 兼容
      resolvers: [
        /* ... */
      ],

      // 解決 eslint 報錯問題的配置項
      eslintrc: {
        enabled: false, // 預設
        filepath: './.eslintrc-auto-import.json', // 預設
        globalsPropValue: true, // 預設, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    })
    ```

    </FoldCode>

    > Presets: https://github.com/antfu/unplugin-auto-import/tree/main/src/presets
    >
    > 參考：https://walkonnet.com/archives/551599
  * [unplugin icons](https://github.com/antfu/unplugin-icons)
    > 和 `nplugin-vue-components` 搭配可以做到使用 icon 時自動引入，並增加 prefix 選項
  * [unplugin vue components](https://github.com/antfu/unplugin-vue-components)
    > 按照需求自動引入 Vue components
    >
    > 僅用來搭配 `unplugin-icons` 使用
### [Lodash](https://lodash.com/docs/4.17.15)
  * 簡體中文版：https://www.lodashjs.com/ 
  * 提供模組化、擁有優秀效能的函式庫。
  * 適用於：
    > 遍歷 array、object 和 string
    >
    > 對值進行操作和檢測
    >
    > 創建符合功能的函数
  * 補充工具：[futil-js](https://github.com/smartprocure/futil-js)
### 手刻簡易版幻燈片
  * 將圖片使用 `flex` 排成一橫排，容器只留下一張圖片的大小，利用 `overflow: hidden;` 隱藏其他非當前圖片，再利用 `transform` 去移動 `x` 位置切換當前顯示圖片（`transition` 可加上過度動畫）
  * 容器 `padding-top` 的百分比是參照容器的 `width`
    > 利用 padding-top 按照長寬比撐出圖片的大小並設為 `relative`，再放入 `div` 設為 `absolute` 去撐滿父容器的空間以放置圖片
  * `setInterval` 要記得在 `onBeforeUnmount` 清除
    > 若沒有在元件移除前將 `setInterval` 清除的話，當元件移除後 `setInterval` 仍會繼續運作，而找不到元件時便會產生錯誤
  <Slides />
  範例圖片來源：https://www.sanriogiftgate.com.tw/
  <FoldCode>

  <<< @/.vitepress/components/Slides/Slides.vue
  
  </FoldCode>
  

## 111/09/16
### [Vitepress](https://vitepress.vuejs.org/)
現代 SSG (Static Site Generation) 框架<br>
基於 vite、vue3 的靜態網站產生器

#### 配置主要分為 App Configs 和 Theme Configs
  * App Configs
    >
    > 配置網站的基本功能，例如：設置網站的標題、客製化 markdown 解析器的工作方式。
  * Theme Configs
    > 配置網站的主題，例如：添加側邊欄、添加「在 GitHub 上編輯此頁面」的連結等功能。

## 111/09/17
### 套件
  * [day.js](https://t.me/c/1319631492/1065)
    > 用來解析、驗證、操作和顯示現代瀏覽器的日期和時間，具有很大程度上與 `Moment.js` 兼容的 API。
### 文件
  * 乾淨無瑕的程式碼
    * [clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript)
    * [clean-code-typescript](https://github.com/labs42io/clean-code-typescript)

