import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Carrie's Blog",
  base: '/blog/',
  description: 'A blog about my learning journey',
  themeConfig: {
    sidebar:[
      {
        text: '學習日誌',
        collapsible: true,
        items: [
          // { text: '111/09/15', link: '/daily-log/111-09-15' },
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
          { text: 'Sql Notes', link: '/notes/misc/sql-notes.md' },
          { text: 'Linux Notes', link: '/notes/misc/linux-notes.md' },
          { text: 'Python Notes', link: '/notes/misc/python-notes.md' },
          { text: 'Java Notes', link: '/notes/misc/java-notes.md' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Minato1123' },
      { icon: 'twitter', link: 'https://twitter.com/minato23_' },
      { icon: 'linkedin', link: '' },
    ],
  },
  markdown: {
    lineNumbers: true,
  },

})
