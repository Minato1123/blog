const _tags = [
  '套件', 'auto-import', 'Vite', 'Webpack', 'Rollup', 'icons', 'Vue', 'CLI', 'ESLint',
  'presets', 'Vuex', 'loader-management', '工具', 'code', 'VSCode', 'extension',
  'JSON', 'stringify', 'immutable-state', 'component', 'modal', 'Vue2', 'notification', 'scrollbar',
  'CSS', 'JS', 'tooltip', 'dropdown', 'Pinia', 'store', 'store-library', 'share-state', 'persist-stores',
  '函式庫', 'modularity', 'functional-utilities', 'asynchronous-events', 'composition-utilities',
  'date', 'time', 'string', 'validation', 'sanitization', 'form', 'schema', 'NodeJS', 'HTTP',
  'http-request', 'API', 'REST-API', 'back-end', 'middleware', 'web-framework', 'data', 'visualization',
  'chart', 'table', 'webpack', 'analyze', 'particle', 'email', 'finder', 'state', 'state-machine',
  'statechart', 'Visualizer', 'reactive', 'function', 'TS', 'monorepo', 'microservice', 'SDK',
  'report', 'error', 'exception', 'ESM', 'manager', 'version', 'compiler', 'transform-syntax',
  'toolkit', 'automate', 'workflow', 'build', 'obfuscate', 'compress', 'bundler', 'build-tool',
  '框架', 'test', 'unit-test', 'badge', 'SVG', 'raster-format', 'code-snippet', 'documentation',
  'UI', 'customizable', 'HTML', 'emoji', 'GraphQL', 'TailwindCSS', 'React', 'Nuxt', 'explorer',
  'support', 'browser', 'syntax', 'real-DOM', 'SSR', 'instant-on', 'resumable', 'lightweight',
  'virtual-DOM', 'Preact', 'markdown', 'SSG', 'PWA', 'multi-platform', 'cross-platform', 'GUI',
  'full-stack', 'interactive', 'Deno', 'content-focused', 'UI-agnostic', 'PostCSS', 'prefix',
  'vender-prefix', 'engine', 'CSS-in-JS', 'shape', 'static', 'module', 'guide', 'Turbopack',
  'runtime', 'esbuild', 'parser', 'template', 'Electron', 'on-demand', 'Angular', 'regex',
  'Nitro', 'atomic', 'animation', 'AnimateCSS', 'CJS', 'tsx', 'syntax-sugar', 'deploy',
  'host', 'serverless', 'Bass', 'event-emitter', 'pub-sub', 'desktop', 'mobile', 'operating-system',
  'file', 'watch', 'UnoCSS', 'slides', 'loading', 'git', 'linter', '3D', 'scroll', 'stylelint',
  'device', 'cookie', 'SFC', 'devtools', 'font', 'WAI-ARIA', 'cloud', 'debug', 'remote', 'server',
  'formatter', 'commit'
] as const

type Tag = (typeof _tags)[number]
type Row = [name: string, url: string, tags: Tag[]]

const data: Row[] = [
  ['unplugin-auto-import', 'https://github.com/antfu/unplugin-auto-import', ['套件', 'auto-import', 'Vite', 'Webpack', 'Rollup']],
  ['unplugin-icons', 'https://github.com/antfu/unplugin-icons', ['套件', 'icons']],
  ['unplugin-vue-components', 'https://github.com/antfu/unplugin-vue-components', ['套件', 'Vue', 'auto-import']],
  ['Commander.js', 'https://github.com/tj/commander.js', ['套件', 'CLI']],
  ['antfu/eslint-config', 'https://github.com/antfu/eslint-config', ['套件', 'ESLint', 'presets', 'linter']],
  ['vue-wait', 'https://github.com/f/vue-wait', ['套件', 'Vue', 'Vuex', 'loader-management', 'loading']],
  ['CodeGPT', 'https://www.codegpt.co/', ['extension', '工具', 'code', 'VSCode', 'extension']],
  ['fast-json-stringify', 'https://github.com/fastify/fast-json-stringify', ['套件', 'JSON', 'stringify']],
  ['immer', 'https://github.com/immerjs/immer', ['套件', 'immutable-state']],
  ['vue-js-modal', 'https://github.com/euvl/vue-js-modal', ['套件', 'Vue', 'component', 'modal']],
  ['vue-notification', 'https://github.com/euvl/vue-notification', ['套件', 'Vue', 'Vue2', 'component', 'notification']],
  ['simplebar', 'https://github.com/Grsmto/simplebar', ['套件', 'scrollbar', 'CSS']],
  ['BetterScroll', 'https://better-scroll.github.io/docs/en-US/guide/', ['套件', 'scrollbar', 'JS']],
  ['PortalVue', 'https://portal-vue.linusb.org/', ['套件', 'Vue', 'component']],
  ['Floating Vue', 'https://floating-vue.starpad.dev/', ['套件', 'Vue', 'component', 'tooltip', 'dropdown']],
  ['Pinia', 'https://pinia.vuejs.org/', ['套件', 'Vue', 'Pinia', 'Vuex', 'store', 'store-library', 'share-state']],
  ['pinia-plugin-persistedstate', 'https://prazdevs.github.io/pinia-plugin-persistedstate/', ['套件', 'Pinia', 'persist-stores']],
  ['Lodash', 'https://lodash.com/', ['套件', '函式庫', '工具', 'JS', 'modularity', 'functional-utilities']],
  ['Futil-js', 'https://smartprocure.github.io/futil-js/', ['套件', '函式庫', '工具', 'JS', 'functional-utilities']],
  ['RxJS', 'https://rxjs.dev/', ['套件', '函式庫', 'JS', 'asynchronous-events']],
  ['Underscore.js', 'https://underscorejs.org/', ['套件', '函式庫', '工具', 'JS', 'functional-utilities']],
  ['Vueuse', 'https://vueuse.org/', ['套件', '函式庫', '工具', 'Vue', 'composition-utilities']],
  ['day.js', 'https://day.js.org/en/', ['套件', '函式庫', 'date', 'time']],
  ['Moment.js', 'https://momentjs.com/', ['套件', 'date', 'time']],
  ['Validator.js', 'https://github.com/validatorjs/validator.js/', ['套件', '函式庫', 'string', 'validation', 'sanitization']],
  ['Survey Library', 'https://surveyjs.io/', ['套件', '函式庫', 'form']],
  ['Yup', 'https://github.com/jquense/yup', ['套件', 'form', 'schema', 'validation']],
  ['Vorms', 'https://vorms.mini-ghost.dev/', ['套件', 'Vue', 'form', 'validation']],
  ['vee-validate', 'https://vee-validate.logaretm.com/v4/', ['套件', 'Vue', 'form', 'validation']],
  ['FormKit', 'https://formkit.com/', ['套件', 'Vue', 'form', 'validation']],
  ['axios', 'https://axios-http.com/', ['套件', 'NodeJS', 'HTTP', 'http-request', 'API']],
  ['json-server', 'https://github.com/typicode/json-server', ['套件', 'JS', 'JSON', 'REST-API', 'API', 'back-end']],
  ['Koa.js', 'https://koajs.com/', ['套件', 'NodeJS', 'back-end', 'middleware']],
  ['Express.js', 'https://expressjs.com/', ['套件', 'NodeJS', 'web-framework']],
  ['D3.js', 'https://d3js.org/', ['套件', '函式庫', 'JS', 'data', 'visualization', 'chart']],
  ['vue-good-table', 'https://xaksis.github.io/vue-good-table/', ['套件', 'Vue', 'data', 'table']],
  ['Webpack Bundle Analyzer', 'https://github.com/webpack-contrib/webpack-bundle-analyzer', ['套件', 'webpack', 'analyze', 'visualization', 'chart']],
  ['particles.js', 'https://github.com/VincentGarreau/particles.js/', ['套件', 'JS', 'particle']],
  ['EmailJS', 'https://www.emailjs.com/', ['套件', 'JS', 'email']],
  ['FZF', 'https://fzf.netlify.app/docs/latest', ['套件', 'JS', 'finder']],
  ['XState', 'https://xstate.js.org/docs/', ['套件', 'JS', 'state', 'state-machine', 'statechart', 'Visualizer']],
  ['vue-chemistry', 'https://github.com/vueuse/vue-chemistry', ['套件', 'Vue', 'reactive', 'function']],
  ['Lerna', 'https://lerna.js.org/', ['工具', 'JS', 'TS', 'monorepo']],
  ['Amplication', 'https://amplication.com/', ['NodeJS', 'TS', 'microservice', 'back-end']],
  ['Sentry', 'https://sentry.io/welcome/', ['工具', 'JS', 'SDK', 'report', 'error', 'exception']],
  ['NVM', 'https://github.com/nvm-sh/nvm', ['工具', 'NodeJS', 'manager', 'version']],
  ['TypeRunner', 'https://github.com/marcj/TypeRunner', ['TS', 'compiler']],
  ['Babel', 'https://babeljs.io/', ['工具', 'JS', 'compiler', 'transform-syntax', 'code']],
  ['Gulp', 'https://gulpjs.com/', ['工具', 'toolkit', 'automate', 'workflow', 'JS', 'build']],
  ['Broccoli', 'https://github.com/broccolijs/broccoli', ['工具', 'build', 'obfuscate', 'compress', 'JS']],
  ['Vite', 'https://vitejs.dev/', ['build-tool', 'Rollup', 'ESM', 'Vite']],
  ['Vitest', 'https://vitest.dev/', ['套件', 'test', 'unit-test', '框架', 'Vite']],
  ['Jest', 'https://jestjs.io/', ['套件', 'JS', 'test', '框架']],
  ['shields', 'https://github.com/badges/shields', ['badge', 'SVG', 'raster-format']],
  ['Dropcode', 'https://github.com/egoist/dropcode', ['套件', 'code', 'code-snippet', 'manager']],
  ['Storybook', 'https://storybook.js.org/', ['build', 'UI', 'component','test', 'documentation']],
  ['emoji-mart', 'https://github.com/missive/emoji-mart', ['customizable', 'HTML', 'component', 'emoji']],
  ['GraphQL', 'https://graphql.org/', ['套件', 'GraphQL', 'API']],
  ['Heroicons', 'https://heroicons.com/', ['TailwindCSS', 'SVG', 'icons', 'React', 'Vue']],
  ['Nuxt-icon', 'https://github.com/nuxt-modules/icon', ['Nuxt', 'icons', 'emoji']],
  ['pictogrammers', 'https://pictogrammers.com/', ['icons']],
  ['iconify', 'https://iconify.design/', ['icons', 'explorer']],
  ['icones', 'https://icones.js.org/', ['icons', 'explorer']],
  ['Can I Use', 'https://caniuse.com/', ['工具', 'CSS', 'support', 'browser']],
  ['Component Party', 'https://component-party.dev/', ['工具', '框架', 'syntax', 'JS']],
  ['Solid', 'https://www.solidjs.com/', ['框架', 'JS', '函式庫', 'real-DOM']],
  ['Qwik', 'https://qwik.builder.io/', ['框架', 'SSR', 'instant-on', 'resumable', 'React']],
  ['Svelte', 'https://svelte.dev/', ['框架', 'compiler', 'JS', 'build', 'lightweight']],
  ['Preact', 'https://preactjs.com/', ['框架', 'React', 'virtual-DOM', 'Preact']],
  ['Vitepress', 'https://vitepress.dev/', ['SSG', '框架', 'Vite', 'Vue', 'markdown']],
  ['Vuepress', 'https://vuepress.vuejs.org/', ['SSG', '框架','Vue', 'markdown', 'webpack']],
  ['Tauri', 'https://tauri.app/', ['框架', 'build', 'multi-platform', 'cross-platform', 'GUI', 'desktop']],
  ['Electron', 'https://www.electronjs.org/', ['框架', 'build', 'multi-platform', 'cross-platform', 'Electron', 'desktop']],
  ['Quasar', 'https://quasar.dev/', ['框架', 'multi-platform', 'cross-platform', 'Vue', 'PWA', 'SSR']],
  ['Fresh', 'https://fresh.deno.dev/', ['框架', 'Deno', 'Preact', 'full-stack', 'TS', 'JS']],
  ['Alpine', '', ['套件', '工具', 'JS', '框架', 'lightweight', 'interactive']],
  ['Histoire', 'https://histoire.dev/', ['documentation', 'component', 'Vite']],
  ['Astro', 'https://astro.build/', ['框架', 'content-focused', 'build', 'UI-agnostic', 'SSR', 'SSG', 'on-demand']],
  ['Next.js', 'https://nextjs.org/', ['框架', 'React', 'full-stack', 'build', 'Turbopack']],
  ['Nuxt.js', 'https://nuxtjs.org/', ['框架', 'Vue', 'build', 'full-stack', 'SSR', 'Nitro']],
  ['Nest.js', 'https://docs.nestjs.com/', ['框架', 'Angular', 'NodeJS', 'TS', 'SSR']],
  ['Tailwind UI', 'https://tailwindui.com/', ['TailwindCSS', 'UI', 'component', 'template', 'HTML', 'React', 'Vue']],
  ['Shoelace', 'https://shoelace.style/', ['UI', 'component', 'React', 'CSS']],
  ['Chakra UI', 'https://chakra-ui.com/', ['UI', 'React', 'component']],
  ['Element Plus', 'https://element-plus.org/en-US/', ['component', 'Vue', 'TS', 'UI']],
  ['Ant Design Vue', 'https://antdv.com/components/overview', ['UI', 'component', 'Vue']],
  ['Vuetify', 'https://vuetifyjs.com/en/', ['UI', 'Vue', 'UI', 'component']],
  ['pug', 'https://pugjs.org/api/getting-started.html', ['HTML', 'NodeJS', 'engine', 'JS']],
  ['Marko', 'https://markojs.com/', ['HTML', 'JS']],
  ['Autoprefixer', 'https://github.com/postcss/autoprefixer', ['CSS', 'PostCSS', 'prefix', 'vender-prefix']],
  ['Stylify', 'https://stylifycss.com/', ['CSS', 'on-demand', '函式庫']],
  ['clippy', 'https://bennettfeely.com/clippy/', ['CSS', '工具', 'shape']],
  ['cssreference', 'https://cssreference.io/', ['CSS', 'visualization', 'guide']],
  ['Animate.css', 'https://animate.style/', ['CSS', 'animation', 'AnimateCSS']],
  ['wow.js', 'https://wowjs.uk/', ['CSS', 'animation', 'AnimateCSS']],
  ['Node.js', 'https://nodejs.org/en', ['NodeJS', 'JS', 'cross-platform', 'runtime']],
  ['Deno', 'https://deno.land/', ['Deno', 'TS', 'JS', 'runtime', 'ESM']],
  ['Acorn', 'https://github.com/acornjs/acorn', ['JS', 'parser']],
  ['Esprima', 'https://esprima.org/', ['JS', 'parser']],
  ['regex101', 'https://regex101.com/', ['regex']],
  ['Zod', 'https://zod.dev/', ['TS', 'schema', 'validation']],
  ['esno', 'https://github.com/esbuild-kit/esno', ['NodeJS', 'runtime', 'esbuild', 'TS', 'ESM', 'CJS', 'tsx']],
  ['v-lazy-show', 'https://github.com/antfu/v-lazy-show', ['套件', 'Vue']],
  ['Hasura', 'https://hasura.io/', ['工具', 'GraphQL', 'API']],
  ['Rollup', 'https://rollupjs.org/', ['bundler', '函式庫', 'ESM', 'JS', 'Rollup']],
  ['esbuild', 'https://esbuild.github.io/', ['bundler', 'ESM', 'esbuild']],
  ['webpack', 'https://webpack.js.org/', ['bundler', 'module', 'static', 'JS']],
  ['Parcel', 'https://parceljs.org/', ['build-tool', 'browser', 'Electron']],
  ['UnoCSS', 'https://unocss.dev/', ['atomic', 'CSS', 'on-demand', 'customizable', 'engine', 'UnoCSS']],
  ['Vitesse', 'https://github.com/antfu/vitesse', ['Vue', 'Vite', 'template']],
  ['PurgeCSS', 'https://purgecss.com/', ['工具', 'CSS']],
  ['Twind', 'https://github.com/tw-in-js/twind', ['JS', 'CSS', 'CSS-in-JS', 'TailwindCSS']],
  ['TailwindCSS', 'https://tailwindcss.com/', ['CSS', '框架', 'TailwindCSS', 'atomic', 'UI']],
  ['WindCSS', 'https://windicss.org/', ['CSS', '框架', 'on-demand', 'UI', 'atomic']],
  ['Vue Macros', 'https://vue-macros.sxzz.moe/', ['套件', 'Vue', 'syntax-sugar']],
  ['vscode-extension-samples', 'https://github.com/microsoft/vscode-extension-samples', ['VSCode', 'code', 'template', 'extension']],
  ['Vercel', 'https://vercel.com', ['build', 'deploy', 'host', 'serverless']],
  ['Netlify', 'https://www.netlify.com/', ['build', 'deploy', 'host']],
  ['Firebase', 'https://firebase.google.com/', ['build', 'Bass', 'back-end']],
  ['Zodios', 'https://www.zodios.org/', ['REST-API', 'API', 'TS', 'JS']],
  ['Mitt', 'https://github.com/developit/mitt', ['JS', 'runtime', 'event-emitter', 'pub-sub']],
  ['Fela', 'https://fela.js.org/', ['CSS', '工具', 'atomic', 'JS']],
  ['Cordova', 'https://cordova.apache.org/', ['框架', 'multi-platform', 'mobile', 'cross-platform']],
  ['Turbopack', 'https://turbo.build/pack', ['工具', 'bundler', 'JS', 'TS', 'webpack']],
  ['PostCSS', 'https://github.com/postcss/postcss', ['工具', 'CSS', 'JS']],
  ['Turborepo', 'https://turbo.build/repo', ['工具', 'build', 'JS', 'TS', 'code']],
  ['ofetch', 'https://github.com/unjs/ofetch', ['套件', 'API', 'NodeJS', 'ESM', 'CJS', 'TS']],
  ['zeabur', 'https://docs.zeabur.com/', ['deploy', 'host']],
  ['vue-reuse-template', 'https://github.com/antfu/vue-reuse-template', ['套件', 'Vue', 'template']],
  ['magicast', 'https://github.com/unjs/magicast', ['工具', '套件', 'JS', 'TS', 'ESM', 'CJS', 'file']],
  ['Hexo', 'https://hexo.io/', ['框架', 'markdown', 'NodeJS', 'SSG']],
  ['Playwright', 'https://playwright.dev/', ['test', 'browser', 'NodeJS', '工具', 'operating-system']],
  ['chokidar', 'https://github.com/paulmillr/chokidar', ['NodeJS', '套件', 'cross-platform', '函式庫', 'file', 'watch']],
  ['SWC', 'https://swc.rs/', ['compiler', 'bundler', '套件', 'JS']],
  ['onu-ui', 'https://github.com/onu-ui/onu-ui', ['CSS', 'UI', '函式庫', 'component', 'Vue', 'UnoCSS']],
  ['UnJS', 'https://unjs.io/', ['JS', '工具']],
  ['Stylus', 'https://stylus-lang.com/', ['CSS', 'NodeJS', '套件', '工具']],
  ['Remda', 'https://ramdajs.com/', ['JS', 'functional-utilities', '函式庫']],
  ['Remeda', 'https://remedajs.com/', ['TS', 'functional-utilities', '函式庫']],
  ['Flutter', 'https://flutter.dev/', ['框架', 'multi-platform', 'build', 'mobile', 'desktop', 'deploy']],
  ['ts-reset', 'https://github.com/total-typescript/ts-reset', ['套件', 'TS', 'JS']],
  ['Swiper', 'https://swiperjs.com/', ['UI', 'CSS', 'slides', '套件']],
  ['ArkType', 'https://arktype.io/', ['套件', 'TS', 'schema', 'validation', 'runtime']],
  ['unlazy', 'https://unlazy.byjohann.dev/', ['套件', '函式庫', 'browser', 'loading']],
  ['husky', 'https://typicode.github.io/husky/#/', ['git', '套件', 'monorepo']],
  ['three.js', 'https://threejs.org/', ['JS', '套件', '3D', 'browser', '函式庫']],
  ['stylelint', 'https://stylelint.io/', ['CSS', '套件', 'linter', 'error', 'stylelint']],
  ['AOS', 'https://michalsnik.github.io/aos/', ['scroll', '函式庫', '套件', 'animation']],
  ['lint-staged', 'https://github.com/okonet/lint-staged', ['git', '套件', 'linter', 'ESLint', 'stylelint', 'workflow']],
  ['device.js', 'https://github.com/borismus/device.js', ['套件', 'mobile', 'desktop', 'device']],
  ['animated-scroll-to', 'https://muffinman.io/animated-scroll-to/', ['套件', 'animation', 'scroll', 'lightweight']],
  ['js-cookie', 'https://github.com/js-cookie/js-cookie', ['cookie', 'browser', '套件', 'JS', 'lightweight', 'API']],
  ['HeadlessUI', 'https://headlessui.com/', ['UI', 'TailwindCSS', 'CSS', 'component', 'Vue']],
  ['Zag','https://zagjs.com/', ['UI', 'component', 'state-machine', 'Vue', 'state']],
  ['inkline','https://www.inkline.io/', ['Vue', 'UI', 'component', '函式庫', 'CSS']],
  ['Dreamsands','https://dreamsands.io/?ref=producthunt', ['code', '工具']],
  ['vite-plugin-vue-nested-sfc', 'https://github.com/HunYan-io/vite-plugin-vue-nested-sfc', ['套件', 'Vue', 'Vite', 'SFC']],
  ['feTS', 'https://github.com/ardatan/feTS', ['套件', 'API', 'REST-API', 'TS']],
  ['Swagger UI', 'https://swagger.io/tools/swagger-ui/', ['API', 'UI', '工具', 'visualization']],
  ['HD Gradients', 'https://gradient.style/', ['工具', 'CSS', 'code', 'code-snippet']],
  ['ftld', 'https://github.com/cevr/ftld', ['函式庫', '套件', 'TS', 'functional-utilities']],
  ['vscode-inline-html', 'https://github.com/pushqrdx/vscode-inline-html', ['VSCode', 'extension', 'HTML', 'CSS']],
  ['Emmet', 'https://github.com/emmetio/emmet', ['HTML', 'CSS', '工具', 'code']],
  ['Vue DevTools', 'https://github.com/webfansplz/vite-plugin-vue-devtools', ['Vite', 'Vue', 'devtools', '套件']],
  ['AFFiNE.PRO', 'https://affine.pro/', ['markdown', '工具', 'Electron']],
  ['vite-plugin-vue-component-preview', 'https://github.com/johnsoncodehk/vite-plugin-vue-component-preview', ['markdown', 'SFC', 'Vue', 'Vite', 'component', '套件']],
  ['Nuxtr', 'https://github.com/nuxtrdev/nuxtr-vscode', ['VSCode', 'extension', 'Nuxt', 'devtools', 'Vue']],
  ['PhantomJS', 'https://github.com/ariya/phantomjs', ['JS', 'test', 'automate']],
  ['google-webfonts-helper', 'https://github.com/majodev/google-webfonts-helper', ['套件', 'font']],
  ['TresJS', 'https://tresjs.org/', ['3D', '套件', 'Vue', 'Vite']],
  ['tailwind-merge', 'https://github.com/dcastil/tailwind-merge', ['套件', 'TailwindCSS', 'CSS']],
  ['vue-promised', 'https://github.com/posva/vue-promised', ['套件', 'Vue', 'component', 'API']],
  ['BootstrapVue', 'https://github.com/bootstrap-vue/bootstrap-vue', ['套件', 'component', 'Vue', 'Nuxt', 'WAI-ARIA', 'icons']],
  ['Pulumi', 'https://www.pulumi.com/', ['JS', 'TS', '工具', 'cloud']],
  ['Mocha', 'https://mochajs.org/', ['工具', 'test', 'JS', 'NodeJS']],
  ['UQuit', 'https://qunitjs.com/', ['工具', 'test', 'JS', 'NodeJS', 'unit-test']],
  ['AutoAnimate', 'https://auto-animate.formkit.com/', ['套件', 'animation', 'JS', 'Vue', 'UI']],
  ['PageSpyWeb', 'https://huolalatech.github.io/page-spy-web/', ['工具', 'debug', 'remote']],
  ['Nitro', 'https://github.com/unjs/nitro', ['server', 'Nitro', 'Nuxt', 'auto-import', 'TS', 'engine']],
  ['Standard.js', 'https://standardjs.com/readme-zhtw.html', ['JS', 'code', 'NodeJS', 'linter', 'formatter']],
  ['ESLint', 'https://eslint.org/', ['工具', 'linter', 'code', 'JS', 'ESLint']],
  ['Prettier', 'https://prettier.io/', ['工具', 'formatter', 'code', 'JS', 'TS', 'CSS', 'Vue', 'markdown', 'ESLint']],
  ['JSLint', 'https://github.com/jslint-org/jslint', ['工具', 'JS', 'linter', 'code']],
  ['commitlint', 'https://github.com/conventional-changelog/commitlint', ['工具', 'linter', 'git', 'commit']],
  ['git-commit-plugin', 'https://github.com/RedJue/git-commit-plugin', ['工具', 'git', 'commit', 'VSCode', 'extension']],
  ['Vue Vine', 'https://github.com/vue-vine/vue-vine', ['Vue', '套件', 'syntax', 'SFC']],
  ['UglifyJS', 'https://github.com/mishoo/UglifyJS', ['JS', '工具', 'compress', 'parser', 'code']],
  ['defu', 'https://github.com/unjs/defu', ['JS', '工具']]

]

const tags = _tags.map(t => {
  const num = data.filter(d => d[2].includes(t)).length
  return [t, num] as const
}).sort().sort((a, b) => b[1] - a[1])

export {
  Tag,
  tags,
  data
}