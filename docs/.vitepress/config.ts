import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'


export default defineConfig({
  title: "Carrie's Blog",
  base: '/blog/',
  description: 'A blog about my learning journey',
  head: [
    ['link', { rel: "shortcut icon", href: '/blog/favicon.ico' }],
  ],
  themeConfig: {
    sidebar: [
      {
        text: '學習隨記',
        items: [
          { 
            text: '2022', 
            items: [
              { text: 'September', link: '/daily-log/sep2022' },
              { text: 'October', link: '/daily-log/oct2022' },
              { text: 'November', link: '/daily-log/nov2022' },
              { text: 'December', link: '/daily-log/dec2022' },
            ],
            collapsed: true,
          },
          {
            text: '2023',
            items: [
              { text: 'January', link: '/daily-log/jan2023' },
              { text: 'February', link: '/daily-log/feb2023' },
              { text: 'March', link: '/daily-log/mar2023' },
              { text: 'April', link: '/daily-log/apr2023' },
              { text: 'May', link: '/daily-log/may2023' },
              { text: 'June', link: '/daily-log/jun2023' },
              { text: 'July', link: '/daily-log/jul2023' },
              { text: 'August', link: '/daily-log/aug2023' },
            ],
            collapsed: false,
          }
        ]
      },
      {
        text: '前端筆記',
        collapsed: false,
        items: [
          { text: 'TagFinder', link: '/notes/front-end/tagfinder' },
          { text: 'TS Notes', link: '/notes/front-end/ts-notes' },
          { text: 'VueUse Note', link: '/notes/front-end/vueuse-notes' },
          { text: 'JS Promise', link: '/notes/front-end/js-promise' },
          { text: 'JS Prototype', link: '/notes/front-end/js-prototype' },
          { text: 'JS DOM API', link: '/notes/front-end/js-dom-api' },
          { text: 'JS DOM Event', link: '/notes/front-end/js-dom-event' },
          { text: 'CSS BEM', link: '/notes/front-end/css-bem' },
          { text: 'Axios Notes', link: '/notes/front-end/axios' },
          { text: 'Package.json', link: '/notes/front-end/package-json' },
        ]
      },
      {
        text: '其他筆記',
        collapsed: false,
        items: [
          { text: 'Git Notes', link: '/notes/misc/git-notes.md' },
          { text: 'SQL Notes', link: '/notes/misc/sql-notes.md' },
          { text: 'Linux Notes', link: '/notes/misc/linux-notes.md' },
          { text: 'Python Notes', link: '/notes/misc/python-notes.md' },
          { text: 'Java Notes', link: '/notes/misc/java-notes.md' },
          { text: 'ROS Notes', link: '/notes/misc/ros-notes.md' },
          { text: 'ROS Files', link: '/notes/misc/ros-files.md' },
          { text: 'Launch Notes', link: '/notes/misc/launch-notes.md' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Minato1123' },
      { icon: 'twitter', link: 'https://twitter.com/minato23_' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/minato1123/' },
    ],
    search: {
      provider: 'local'
    },
    outline: [1, 3]
  },
  markdown: {
    lineNumbers: true,
  },
  vite: {
    plugins: [
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        dts: '../auto-imports.d.ts',
        imports: ['vue'],
        eslintrc: {
          enabled: true, // disable no-undef
        },
      }),
      Icons({
        defaultClass: 'svg-icon',
        compiler: 'vue3',
      }),
      Components({
        dirs: [],
        dts: '../components.d.ts',
        resolvers: [
          IconsResolver({
            prefix: 'icon',
          }),
        ],
      }),
    ],
  }
})
