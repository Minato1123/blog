import { defineConfig } from 'vitepress'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'


export default defineConfig({
  title: "Carrie's Blog",
  base: '/blog/',
  description: 'A blog about my learning journey',
  themeConfig: {
    sidebar:[
      {
        text: '學習隨記',
        collapsible: true,
        items: [
          { text: 'Sep. 2022', link: '/daily-log/sep2022' },
        ]
      },
      {
        text: '前端筆記',
        collapsible: true,
        items: [
          { text: 'TS Notes', link: '/notes/front-end/ts-notes' },
          { text: 'JS Promise', link: '/notes/front-end/js-promise' },
          { text: 'JS DOM Event', link: '/notes/front-end/js-dom-event' },
          { text: 'JS DOM API', link: '/notes/front-end/js-dom-api' },
          { text: 'CSS BEM', link: '/notes/front-end/css-bem' },
        ]
      },
      {
        text: '其他筆記',
        collapsible: true,
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
      { icon: 'linkedin', link: 'www.linkedin.com/in/minato1123' },
    ],
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
        imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
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
