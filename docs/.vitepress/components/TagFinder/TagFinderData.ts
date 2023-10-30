const _tags = [
  'package', 'auto-import', 'Vite', 'webpack', 'Rollup', 'icons', 'Vue', 'CLI', 'ESLint',
  'presets', 'Vuex', 'loader-management', 'tool', 'code', 'VSCode', 'extension',
  'JSON', 'stringify', 'immutable-state', 'component', 'modal', 'Vue2', 'notification', 'scrollbar',
  'CSS', 'JS', 'tooltip', 'dropdown', 'Pinia', 'store', 'store-library', 'share-state', 'persist-stores',
  'library', 'modularity', 'functional-utilities', 'asynchronous-events', 'composition-utilities',
  'date', 'time', 'string', 'validation', 'sanitization', 'form', 'schema', 'NodeJS', 'HTTP',
  'http-request', 'API', 'REST-API', 'back-end', 'middleware', 'web-framework', 'data', 'visualization',
  'chart', 'table', 'analyze', 'particle', 'email', 'finder', 'state', 'state-machine',
  'statechart', 'Visualizer', 'reactive', 'function', 'TS', 'monorepo', 'microservice', 'SDK',
  'report', 'error', 'exception', 'ESM', 'manager', 'version', 'compiler', 'transform-syntax',
  'toolkit', 'automate', 'workflow', 'build', 'obfuscate', 'compress', 'bundler', 'build-tool',
  'framework', 'test', 'unit-test', 'badge', 'SVG', 'raster-format', 'code-snippet', 'documentation',
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
  'formatter', 'commit', 'github', 'toc', 'video', 'native', 'map', 'AI', 'hooks', 'AST', 'Babel',
  'auth', 'passwordless', 'biometrics', 'refactor', 'normalize', 'popover', 'floating', 'type', 'props',
  'drag', 'Class', 'packeage-manager', 'toast', 'composable', 'vueuse', 'edge-hosted', 'SQL', 'micro-frontend',
  'WebComponent', 'iframe', 'ORM', 'canvas', 'zh', 'chinese', 'natural-language', 'npm', 'size', 'highlighter',
  'input-mask', 'compatibility', 'export', 'yaml', 'internationalization'
] as const

type Tag = (typeof _tags)[number]
type Row = [name: string, url: string, tags: Tag[]]

const data: Row[] = [
  ['unplugin-auto-import', 'https://github.com/antfu/unplugin-auto-import', ['package', 'auto-import', 'Vite', 'webpack', 'Rollup']],
  ['unplugin-icons', 'https://github.com/antfu/unplugin-icons', ['package', 'icons']],
  ['unplugin-vue-components', 'https://github.com/antfu/unplugin-vue-components', ['package', 'Vue', 'auto-import']],
  ['Commander.js', 'https://github.com/tj/commander.js', ['package', 'CLI']],
  ['antfu/eslint-config', 'https://github.com/antfu/eslint-config', ['package', 'ESLint', 'presets', 'linter']],
  ['vue-wait', 'https://github.com/f/vue-wait', ['package', 'Vue', 'Vuex', 'loader-management', 'loading']],
  ['CodeGPT', 'https://www.codegpt.co/', ['extension', 'tool', 'code', 'VSCode', 'extension']],
  ['fast-json-stringify', 'https://github.com/fastify/fast-json-stringify', ['package', 'JSON', 'stringify']],
  ['immer', 'https://github.com/immerjs/immer', ['package', 'immutable-state']],
  ['vue-js-modal', 'https://github.com/euvl/vue-js-modal', ['package', 'Vue', 'component', 'modal']],
  ['vue-notification', 'https://github.com/euvl/vue-notification', ['package', 'Vue', 'Vue2', 'component', 'notification']],
  ['simplebar', 'https://github.com/Grsmto/simplebar', ['package', 'scrollbar', 'CSS']],
  ['BetterScroll', 'https://better-scroll.github.io/docs/en-US/guide/', ['package', 'scrollbar', 'JS']],
  ['PortalVue', 'https://portal-vue.linusb.org/', ['package', 'Vue', 'component']],
  ['Floating Vue', 'https://floating-vue.starpad.dev/', ['package', 'Vue', 'component', 'tooltip', 'dropdown', 'floating']],
  ['Pinia', 'https://pinia.vuejs.org/', ['package', 'Vue', 'Pinia', 'Vuex', 'store', 'store-library', 'share-state']],
  ['pinia-plugin-persistedstate', 'https://prazdevs.github.io/pinia-plugin-persistedstate/', ['package', 'Pinia', 'persist-stores']],
  ['Lodash', 'https://lodash.com/', ['package', 'library', 'tool', 'JS', 'modularity', 'functional-utilities']],
  ['Futil-js', 'https://smartprocure.github.io/futil-js/', ['package', 'library', 'tool', 'JS', 'functional-utilities']],
  ['RxJS', 'https://rxjs.dev/', ['package', 'library', 'JS', 'asynchronous-events']],
  ['Underscore.js', 'https://underscorejs.org/', ['package', 'library', 'tool', 'JS', 'functional-utilities']],
  ['Vueuse', 'https://vueuse.org/', ['package', 'library', 'tool', 'Vue', 'composition-utilities', 'vueuse']],
  ['day.js', 'https://day.js.org/en/', ['package', 'library', 'date', 'time']],
  ['Moment.js', 'https://momentjs.com/', ['package', 'date', 'time']],
  ['Validator.js', 'https://github.com/validatorjs/validator.js/', ['package', 'library', 'string', 'validation', 'sanitization']],
  ['Survey Library', 'https://surveyjs.io/', ['package', 'library', 'form']],
  ['Yup', 'https://github.com/jquense/yup', ['package', 'form', 'schema', 'validation']],
  ['Vorms', 'https://vorms.mini-ghost.dev/', ['package', 'Vue', 'form', 'validation']],
  ['vee-validate', 'https://vee-validate.logaretm.com/v4/', ['package', 'Vue', 'form', 'validation']],
  ['FormKit', 'https://formkit.com/', ['package', 'Vue', 'form', 'validation']],
  ['axios', 'https://axios-http.com/', ['package', 'NodeJS', 'HTTP', 'http-request', 'API']],
  ['json-server', 'https://github.com/typicode/json-server', ['package', 'JS', 'JSON', 'REST-API', 'API', 'back-end']],
  ['Koa.js', 'https://koajs.com/', ['package', 'NodeJS', 'back-end', 'middleware']],
  ['Express.js', 'https://expressjs.com/', ['package', 'NodeJS', 'web-framework']],
  ['D3.js', 'https://d3js.org/', ['package', 'library', 'JS', 'data', 'visualization', 'chart']],
  ['vue-good-table', 'https://xaksis.github.io/vue-good-table/', ['package', 'Vue', 'data', 'table']],
  ['webpack Bundle Analyzer', 'https://github.com/webpack-contrib/webpack-bundle-analyzer', ['package', 'webpack', 'analyze', 'visualization', 'chart']],
  ['particles.js', 'https://github.com/VincentGarreau/particles.js/', ['package', 'JS', 'particle']],
  ['EmailJS', 'https://www.emailjs.com/', ['package', 'JS', 'email']],
  ['FZF', 'https://fzf.netlify.app/docs/latest', ['package', 'JS', 'finder']],
  ['XState', 'https://xstate.js.org/docs/', ['package', 'JS', 'state', 'state-machine', 'statechart', 'Visualizer']],
  ['vue-chemistry', 'https://github.com/vueuse/vue-chemistry', ['package', 'Vue', 'reactive', 'function', 'vueuse']],
  ['Lerna', 'https://lerna.js.org/', ['tool', 'JS', 'TS', 'monorepo']],
  ['Amplication', 'https://amplication.com/', ['NodeJS', 'TS', 'microservice', 'back-end']],
  ['Sentry', 'https://sentry.io/welcome/', ['tool', 'JS', 'SDK', 'report', 'error', 'exception']],
  ['NVM', 'https://github.com/nvm-sh/nvm', ['tool', 'NodeJS', 'manager', 'version']],
  ['TypeRunner', 'https://github.com/marcj/TypeRunner', ['TS', 'compiler']],
  ['Babel', 'https://babeljs.io/', ['tool', 'JS', 'compiler', 'transform-syntax', 'code', 'Babel']],
  ['Gulp', 'https://gulpjs.com/', ['tool', 'toolkit', 'automate', 'workflow', 'JS', 'build']],
  ['Broccoli', 'https://github.com/broccolijs/broccoli', ['tool', 'build', 'obfuscate', 'compress', 'JS']],
  ['Vite', 'https://vitejs.dev/', ['build-tool', 'Rollup', 'ESM', 'Vite']],
  ['Vitest', 'https://vitest.dev/', ['package', 'test', 'unit-test', 'framework', 'Vite']],
  ['Jest', 'https://jestjs.io/', ['package', 'JS', 'test', 'framework']],
  ['shields', 'https://github.com/badges/shields', ['badge', 'SVG', 'raster-format']],
  ['Dropcode', 'https://github.com/egoist/dropcode', ['package', 'code', 'code-snippet', 'manager']],
  ['Storybook', 'https://storybook.js.org/', ['build', 'UI', 'component','test', 'documentation']],
  ['emoji-mart', 'https://github.com/missive/emoji-mart', ['customizable', 'HTML', 'component', 'emoji']],
  ['GraphQL', 'https://graphql.org/', ['package', 'GraphQL', 'API']],
  ['Heroicons', 'https://heroicons.com/', ['TailwindCSS', 'SVG', 'icons', 'React', 'Vue']],
  ['Nuxt-icon', 'https://github.com/nuxt-modules/icon', ['Nuxt', 'icons', 'emoji']],
  ['pictogrammers', 'https://pictogrammers.com/', ['icons']],
  ['iconify', 'https://iconify.design/', ['icons', 'explorer']],
  ['icones', 'https://icones.js.org/', ['icons', 'explorer']],
  ['Can I Use', 'https://caniuse.com/', ['tool', 'CSS', 'support', 'browser']],
  ['Component Party', 'https://component-party.dev/', ['tool', 'framework', 'syntax', 'JS']],
  ['Solid', 'https://www.solidjs.com/', ['framework', 'JS', 'library', 'real-DOM']],
  ['Qwik', 'https://qwik.builder.io/', ['framework', 'SSR', 'instant-on', 'resumable', 'React']],
  ['Svelte', 'https://svelte.dev/', ['framework', 'compiler', 'JS', 'build', 'lightweight']],
  ['Preact', 'https://preactjs.com/', ['framework', 'React', 'virtual-DOM', 'Preact']],
  ['Vitepress', 'https://vitepress.dev/', ['SSG', 'framework', 'Vite', 'Vue', 'markdown']],
  ['Vuepress', 'https://vuepress.vuejs.org/', ['SSG', 'framework','Vue', 'markdown', 'webpack']],
  ['Tauri', 'https://tauri.app/', ['framework', 'build', 'multi-platform', 'cross-platform', 'GUI', 'desktop']],
  ['Electron', 'https://www.electronjs.org/', ['framework', 'build', 'multi-platform', 'cross-platform', 'Electron', 'desktop']],
  ['Quasar', 'https://quasar.dev/', ['framework', 'multi-platform', 'cross-platform', 'Vue', 'PWA', 'SSR']],
  ['Fresh', 'https://fresh.deno.dev/', ['framework', 'Deno', 'Preact', 'full-stack', 'TS', 'JS']],
  ['Alpine', '', ['package', 'tool', 'JS', 'framework', 'lightweight', 'interactive']],
  ['Histoire', 'https://histoire.dev/', ['documentation', 'component', 'Vite']],
  ['Astro', 'https://astro.build/', ['framework', 'content-focused', 'build', 'UI-agnostic', 'SSR', 'SSG', 'on-demand']],
  ['Next.js', 'https://nextjs.org/', ['framework', 'React', 'full-stack', 'build', 'Turbopack']],
  ['Nuxt.js', 'https://nuxtjs.org/', ['framework', 'Vue', 'build', 'full-stack', 'SSR', 'Nitro']],
  ['Nest.js', 'https://docs.nestjs.com/', ['framework', 'Angular', 'NodeJS', 'TS', 'SSR']],
  ['Tailwind UI', 'https://tailwindui.com/', ['TailwindCSS', 'UI', 'component', 'template', 'HTML', 'React', 'Vue']],
  ['Shoelace', 'https://shoelace.style/', ['UI', 'component', 'React', 'CSS']],
  ['Chakra UI', 'https://chakra-ui.com/', ['UI', 'React', 'component']],
  ['Element Plus', 'https://element-plus.org/en-US/', ['component', 'Vue', 'TS', 'UI']],
  ['Ant Design Vue', 'https://antdv.com/components/overview', ['UI', 'component', 'Vue']],
  ['Vuetify', 'https://vuetifyjs.com/en/', ['UI', 'Vue', 'UI', 'component']],
  ['pug', 'https://pugjs.org/api/getting-started.html', ['HTML', 'NodeJS', 'engine', 'JS']],
  ['Marko', 'https://markojs.com/', ['HTML', 'JS']],
  ['Autoprefixer', 'https://github.com/postcss/autoprefixer', ['CSS', 'PostCSS', 'prefix', 'vender-prefix']],
  ['Stylify', 'https://stylifycss.com/', ['CSS', 'on-demand', 'library']],
  ['clippy', 'https://bennettfeely.com/clippy/', ['CSS', 'tool', 'shape']],
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
  ['v-lazy-show', 'https://github.com/antfu/v-lazy-show', ['package', 'Vue']],
  ['Hasura', 'https://hasura.io/', ['tool', 'GraphQL', 'API']],
  ['Rollup', 'https://rollupjs.org/', ['bundler', 'library', 'ESM', 'JS', 'Rollup']],
  ['esbuild', 'https://esbuild.github.io/', ['bundler', 'ESM', 'esbuild']],
  ['webpack', 'https://webpack.js.org/', ['bundler', 'module', 'static', 'JS']],
  ['Parcel', 'https://parceljs.org/', ['build-tool', 'browser', 'Electron']],
  ['UnoCSS', 'https://unocss.dev/', ['atomic', 'CSS', 'on-demand', 'customizable', 'engine', 'UnoCSS']],
  ['Vitesse', 'https://github.com/antfu/vitesse', ['Vue', 'Vite', 'template']],
  ['PurgeCSS', 'https://purgecss.com/', ['tool', 'CSS']],
  ['Twind', 'https://github.com/tw-in-js/twind', ['JS', 'CSS', 'CSS-in-JS', 'TailwindCSS']],
  ['TailwindCSS', 'https://tailwindcss.com/', ['CSS', 'framework', 'TailwindCSS', 'atomic', 'UI']],
  ['WindCSS', 'https://windicss.org/', ['CSS', 'framework', 'on-demand', 'UI', 'atomic']],
  ['Vue Macros', 'https://vue-macros.sxzz.moe/', ['package', 'Vue', 'syntax-sugar']],
  ['vscode-extension-samples', 'https://github.com/microsoft/vscode-extension-samples', ['VSCode', 'code', 'template', 'extension']],
  ['Vercel', 'https://vercel.com', ['build', 'deploy', 'host', 'serverless']],
  ['Netlify', 'https://www.netlify.com/', ['build', 'deploy', 'host']],
  ['Firebase', 'https://firebase.google.com/', ['build', 'Bass', 'back-end']],
  ['Zodios', 'https://www.zodios.org/', ['REST-API', 'API', 'TS', 'JS']],
  ['Mitt', 'https://github.com/developit/mitt', ['JS', 'runtime', 'event-emitter', 'pub-sub']],
  ['Fela', 'https://fela.js.org/', ['CSS', 'tool', 'atomic', 'JS']],
  ['Cordova', 'https://cordova.apache.org/', ['framework', 'multi-platform', 'mobile', 'cross-platform']],
  ['Turbopack', 'https://turbo.build/pack', ['tool', 'bundler', 'JS', 'TS', 'webpack']],
  ['PostCSS', 'https://github.com/postcss/postcss', ['tool', 'CSS', 'JS']],
  ['Turborepo', 'https://turbo.build/repo', ['tool', 'build', 'JS', 'TS', 'code']],
  ['ofetch', 'https://github.com/unjs/ofetch', ['package', 'API', 'NodeJS', 'ESM', 'CJS', 'TS']],
  ['zeabur', 'https://docs.zeabur.com/', ['deploy', 'host']],
  ['vue-reuse-template', 'https://github.com/antfu/vue-reuse-template', ['package', 'Vue', 'template']],
  ['magicast', 'https://github.com/unjs/magicast', ['tool', 'package', 'JS', 'TS', 'ESM', 'CJS', 'file']],
  ['Hexo', 'https://hexo.io/', ['framework', 'markdown', 'NodeJS', 'SSG']],
  ['Playwright', 'https://playwright.dev/', ['test', 'browser', 'NodeJS', 'tool', 'operating-system']],
  ['chokidar', 'https://github.com/paulmillr/chokidar', ['NodeJS', 'package', 'cross-platform', 'library', 'file', 'watch']],
  ['SWC', 'https://swc.rs/', ['compiler', 'bundler', 'package', 'JS']],
  ['onu-ui', 'https://github.com/onu-ui/onu-ui', ['CSS', 'UI', 'library', 'component', 'Vue', 'UnoCSS']],
  ['UnJS', 'https://unjs.io/', ['JS', 'tool']],
  ['Stylus', 'https://stylus-lang.com/', ['CSS', 'NodeJS', 'package', 'tool']],
  ['Remda', 'https://ramdajs.com/', ['JS', 'functional-utilities', 'library']],
  ['Remeda', 'https://remedajs.com/', ['TS', 'functional-utilities', 'library']],
  ['Flutter', 'https://flutter.dev/', ['framework', 'multi-platform', 'build', 'mobile', 'desktop', 'deploy']],
  ['ts-reset', 'https://github.com/total-typescript/ts-reset', ['package', 'TS', 'JS', 'type']],
  ['Swiper', 'https://swiperjs.com/', ['UI', 'CSS', 'slides', 'package']],
  ['ArkType', 'https://arktype.io/', ['package', 'TS', 'schema', 'validation', 'runtime', 'type']],
  ['unlazy', 'https://unlazy.byjohann.dev/', ['package', 'library', 'browser', 'loading']],
  ['husky', 'https://typicode.github.io/husky/#/', ['git', 'package', 'monorepo']],
  ['three.js', 'https://threejs.org/', ['JS', 'package', '3D', 'browser', 'library']],
  ['stylelint', 'https://stylelint.io/', ['CSS', 'package', 'linter', 'error', 'stylelint']],
  ['AOS', 'https://michalsnik.github.io/aos/', ['scroll', 'library', 'package', 'animation']],
  ['lint-staged', 'https://github.com/okonet/lint-staged', ['git', 'package', 'linter', 'ESLint', 'stylelint', 'workflow']],
  ['device.js', 'https://github.com/borismus/device.js', ['package', 'mobile', 'desktop', 'device']],
  ['animated-scroll-to', 'https://muffinman.io/animated-scroll-to/', ['package', 'animation', 'scroll', 'lightweight']],
  ['js-cookie', 'https://github.com/js-cookie/js-cookie', ['cookie', 'browser', 'package', 'JS', 'lightweight', 'API']],
  ['HeadlessUI', 'https://headlessui.com/', ['UI', 'TailwindCSS', 'CSS', 'component', 'Vue']],
  ['Zag','https://zagjs.com/', ['UI', 'component', 'state-machine', 'Vue', 'state']],
  ['inkline','https://www.inkline.io/', ['Vue', 'UI', 'component', 'library', 'CSS']],
  ['Dreamsands','https://dreamsands.io/?ref=producthunt', ['code', 'tool']],
  ['vite-plugin-vue-nested-sfc', 'https://github.com/HunYan-io/vite-plugin-vue-nested-sfc', ['package', 'Vue', 'Vite', 'SFC']],
  ['feTS', 'https://github.com/ardatan/feTS', ['package', 'API', 'REST-API', 'TS']],
  ['Swagger UI', 'https://swagger.io/tools/swagger-ui/', ['API', 'UI', 'tool', 'visualization']],
  ['HD Gradients', 'https://gradient.style/', ['tool', 'CSS', 'code', 'code-snippet']],
  ['ftld', 'https://github.com/cevr/ftld', ['library', 'package', 'TS', 'functional-utilities']],
  ['vscode-inline-html', 'https://github.com/pushqrdx/vscode-inline-html', ['VSCode', 'extension', 'HTML', 'CSS']],
  ['Emmet', 'https://github.com/emmetio/emmet', ['HTML', 'CSS', 'tool', 'code']],
  ['Vue DevTools', 'https://github.com/webfansplz/vite-plugin-vue-devtools', ['Vite', 'Vue', 'devtools', 'package']],
  ['AFFiNE.PRO', 'https://affine.pro/', ['markdown', 'tool', 'Electron']],
  ['vite-plugin-vue-component-preview', 'https://github.com/johnsoncodehk/vite-plugin-vue-component-preview', ['markdown', 'SFC', 'Vue', 'Vite', 'component', 'package']],
  ['Nuxtr', 'https://github.com/nuxtrdev/nuxtr-vscode', ['VSCode', 'extension', 'Nuxt', 'devtools', 'Vue']],
  ['PhantomJS', 'https://github.com/ariya/phantomjs', ['JS', 'test', 'automate']],
  ['google-webfonts-helper', 'https://github.com/majodev/google-webfonts-helper', ['package', 'font']],
  ['TresJS', 'https://tresjs.org/', ['3D', 'package', 'Vue', 'Vite']],
  ['tailwind-merge', 'https://github.com/dcastil/tailwind-merge', ['package', 'TailwindCSS', 'CSS']],
  ['vue-promised', 'https://github.com/posva/vue-promised', ['package', 'Vue', 'component', 'API']],
  ['BootstrapVue', 'https://github.com/bootstrap-vue/bootstrap-vue', ['package', 'component', 'Vue', 'Nuxt', 'WAI-ARIA', 'icons']],
  ['Pulumi', 'https://www.pulumi.com/', ['JS', 'TS', 'tool', 'cloud']],
  ['Mocha', 'https://mochajs.org/', ['tool', 'test', 'JS', 'NodeJS']],
  ['UQuit', 'https://qunitjs.com/', ['tool', 'test', 'JS', 'NodeJS', 'unit-test']],
  ['AutoAnimate', 'https://auto-animate.formkit.com/', ['package', 'animation', 'JS', 'Vue', 'UI']],
  ['PageSpyWeb', 'https://huolalatech.github.io/page-spy-web/', ['tool', 'debug', 'remote']],
  ['Nitro', 'https://github.com/unjs/nitro', ['server', 'Nitro', 'Nuxt', 'auto-import', 'TS', 'engine']],
  ['Standard.js', 'https://standardjs.com/readme-zhtw.html', ['JS', 'code', 'NodeJS', 'linter', 'formatter']],
  ['ESLint', 'https://eslint.org/', ['tool', 'linter', 'code', 'JS', 'ESLint']],
  ['Prettier', 'https://prettier.io/', ['tool', 'formatter', 'code', 'JS', 'TS', 'CSS', 'Vue', 'markdown', 'ESLint']],
  ['JSLint', 'https://github.com/jslint-org/jslint', ['tool', 'JS', 'linter', 'code']],
  ['commitlint', 'https://github.com/conventional-changelog/commitlint', ['tool', 'linter', 'git', 'commit']],
  ['git-commit-plugin', 'https://github.com/RedJue/git-commit-plugin', ['tool', 'git', 'commit', 'VSCode', 'extension']],
  ['Vue Vine', 'https://github.com/vue-vine/vue-vine', ['Vue', 'package', 'syntax', 'SFC']],
  ['UglifyJS', 'https://github.com/mishoo/UglifyJS', ['JS', 'tool', 'compress', 'parser', 'code']],
  ['defu', 'https://github.com/unjs/defu', ['JS', 'tool']],
  ['ECharts', 'https://echarts.apache.org/zh/index.html', ['chart', 'library', 'data', 'visualization', 'SVG', 'browser']],
  ['Nuxt Content', 'https://content.nuxtjs.org/', ['Nuxt', 'Vue', 'markdown']],
  ['Nuxt Studio', 'https://nuxt.studio/', ['Nuxt', 'Vue']],
  ['vue-bind-once', 'https://github.com/danielroe/vue-bind-once', ['Vue', 'SSR', 'data', 'package']],
  ['scrolly-video', 'https://scrollyvideo.js.org/', ['package', 'library', 'scroll', 'component', 'video']],
  ['github-toc-sidebar', 'https://github.com/reorx/github-toc-sidebar', ['github', 'toc', 'extension']],
  ['Splide', 'https://splidejs.com/', ['package', 'slides', 'lightweight', 'TS', 'loading']],
  ['NativeScript-Vue', 'https://nativescript-vue.org/', ['package', 'native', 'mobile', 'Vue', 'JS']],
  ['Docusaurus', 'https://docusaurus.io/docs', ['SSG', 'framework', 'markdown', 'React', 'documentation']],
  ['Leaflet', 'https://leafletjs.com/', ['package', 'library', 'JS', 'map', 'mobile']],
  ['awesome-vue', 'https://github.com/vuejs/awesome-vue', ['Vue', 'package']],
  ['codeium', 'https://codeium.com/', ['tool', 'AI', 'code', 'VSCode']],
  ['VueHooks Plus', 'https://inhiblabcore.github.io/docs/hooks/', ['Vue', 'library', 'TS', 'hooks']],
  ['Mermaid', 'https://mermaid.js.org/', ['tool', 'markdown', 'chart']],
  ['million', 'https://million.dev/', ['React', 'virtual-DOM', 'lightweight', 'JS', 'framework']],
  ['CSS Loader Generator', 'https://www.cssportal.com/css-loader-generator/', ['loading', 'CSS', 'customizable']],
  ['Blitzar', 'https://blitzar.cycraft.co/?ref=madewithvuejs.com', ['Vue', 'table', 'form', 'package', 'schema', 'JSON', 'data']],
  ['Vant', 'https://vant-ui.github.io/vant/', ['component', 'mobile', 'Vue', 'Nuxt', 'UI', 'customizable', 'library']],
  ['GoGoCode', 'https://gogocode.io/', ['code', 'JS', 'TS', 'HTML', 'Vue', 'AST', 'Babel', 'transform-syntax', 'tool']],
  ['Hanko', 'https://github.com/teamhanko/hanko', ['auth', 'passwordless', 'biometrics', 'tool']],
  ['ast-grep', 'https://ast-grep.github.io/', ['AST', 'tool', 'code', 'linter', 'refactor']],
  ['fastmod', 'https://github.com/facebookincubator/fastmod', ['tool', 'refactor', 'regex']],
  ['modern-normalize', 'https://github.com/sindresorhus/modern-normalize', ['CSS', 'normalize']],
  ['Floating UI', 'https://floating-ui.com/', ['package', 'floating', 'tooltip', 'library', 'dropdown', 'popover']],
  ['VueTypes', 'https://dwightjack.github.io/vue-types/', ['type', 'Vue', 'props', 'package']],
  ['UploadThing', 'https://docs.uploadthing.com/', ['file', 'package', 'React', 'TS']],
  ['Taze', 'https://github.com/antfu/taze', ['CLI', 'tool', 'monorepo']],
  ['whyframe', 'https://whyframe.dev/', ['UI', 'package', 'HTML', 'component', 'iframe']],
  ['Vue.Draggable', 'https://sortablejs.github.io/vue.draggable.next/#/simple', ['package', 'Vue', 'drag', 'code']],
  ['Vue Class Component', 'https://class-component.vuejs.org/', ['Vue', 'Class', 'package', 'library']],
  ['vue-functional-ref', 'https://github.com/sxzz/vue-functional-ref', ['Vue', 'function', 'package']],
  ['ni', 'https://github.com/antfu/ni', ['CLI', 'manager', 'package', 'packeage-manager']],
  ['fnm', 'https://github.com/Schniz/fnm', ['NodeJS', 'JS', 'tool']],
  ['result', 'https://github.com/badrap/result', ['package', 'TS', 'type', 'API']],
  ['iconoir', 'https://github.com/iconoir-icons/iconoir', ['icons', 'React']],
  ['sucrase', 'https://github.com/alangpierce/sucrase', ['JS', 'TS', 'compiler', 'package']],
  ['tsup', 'https://github.com/sxzz/tsup', ['NodeJS', 'TS', 'bundler', 'package']],
  ['alova', 'https://github.com/alovajs/alova', ['API', 'http-request', 'Vue', 'React']],
  ['idux', 'https://github.com/IDuxFE/idux', ['UI', 'Vue', 'TS', 'component']],
  ['arethetypeswrong', 'https://arethetypeswrong.github.io/', ['TS', 'type', 'package']],
  ['vite-plugin-dts', 'https://github.com/qmhc/vite-plugin-dts', ['TS', 'Vite', 'Vue', 'package']],
  ['notivue', 'https://github.com/smastrom/notivue', ['Vue', 'Nuxt', 'toast', 'notification', 'package']],
  ['ArrowJS', 'https://github.com/justin-schroeder/arrow-js', ['reactive', 'JS', 'package']],
  ['unimport', 'https://github.com/unjs/unimport', ['tool', 'TS', 'Vite', 'webpack', 'auto-import', 'module']],
  ['@vueuse/gesture', 'https://gesture.vueuse.org/', ['Vue', 'drag', 'component', 'composable', 'package', 'vueuse']],
  ['@vueuse/motion', 'https://motion.vueuse.org/', ['Vue', 'animation', 'composable', 'package', 'vueuse']],
  ['visualization-collection', 'https://github.com/hepengwei/visualization-collection', ['CSS', 'visualization']],
  ['Quado', 'https://doc.quado.io/', ['auth', 'passwordless', 'tool']],
  ['Turso', 'https://docs.turso.tech/', ['data', 'edge-hosted', 'SQL']],
  ['SQLite', 'https://www.sqlite.org/index.html', ['data', 'SQL']],
  ['sidebase', 'https://sidebase.io/', ['Vue', 'Nuxt', 'TS', 'full-stack']],
  ['You don’t need Lodash/Underscore', 'https://you-dont-need.github.io/You-Dont-Need-Lodash-Underscore/', ['library', 'functional-utilities', 'JS']],
  ['radash', 'https://radash-docs.vercel.app/docs/getting-started', ['library', 'functional-utilities', 'type', 'TS']],
  ['zhlint', 'https://jinjiang.dev/zhlint/', ['linter', 'zh', 'chinese']],
  ['TypeChat', 'https://microsoft.github.io/TypeChat/', ['tool', 'AI', 'type', 'natural-language']],
  ['oku-ui', 'https://oku-ui.com/', ['UI', 'Vue', 'component', 'library']],
  ['PrimeVue', 'https://primevue.org/', ['UI', 'Vue', 'component', 'library']],
  ['pkg-size', 'https://pkg-size.dev/', ['npm', 'package', 'NodeJS', 'size']],
  ['pkg-types', 'https://github.com/unjs/pkg-types', ['type', 'NodeJS', 'TS', 'package']],
  ['brotli', 'https://github.com/httptoolkit/brotli-wasm', ['tool', 'JS', 'compress', 'NodeJS']],
  ['http-toolkit', 'https://httptoolkit.com/', ['HTTP', 'tool']],
  ['typescript-eslint', 'https://typescript-eslint.io/', ['package', 'ESLint', 'linter', 'TS']],
  ['TypeBox', 'https://github.com/sinclairzx81/typebox', ['type', 'package', 'JSON', 'TS', 'schema']],
  ['TanStack', 'https://tanstack.com/', ['tool', 'composition-utilities']],
  ['Prisma', 'https://www.prisma.io/', ['NodeJS', 'TS', 'ORM', 'SQL', 'tool']],
  ['Chart.js', 'https://www.chartjs.org/', ['chart', 'data', 'canvas', 'JS', 'package']],
  ['vue-chartjs', 'https://vue-chartjs.org/', ['chart', 'data', 'Vue', 'package']],
  ['VOLTA', 'https://volta.sh/', ['tool', 'NodeJS', 'packeage-manager', 'version']],
  ['NativeScript', 'https://nativescript.org/', ['framework', 'native', 'mobile', 'API', 'JS', 'cross-platform']],
  ['无界 wujie', 'https://github.com/Tencent/wujie', ['micro-frontend', 'framework', 'iframe', 'WebComponent', 'Vite']],
  ['MicroApp', 'https://zeroing.jd.com/', ['micro-frontend', 'framework', 'lightweight', 'webpack', 'WebComponent']],
  ['乾坤 qiankun', 'https://github.com/umijs/qiankun', ['micro-frontend', 'framework']],
  ['VueEmail', 'https://www.vuemail.net/getting-started', ['package', 'Vue', 'email']],
  ['vite-plugin-checker', 'https://vite-plugin-checker.netlify.app/', ['Vite', 'linter', 'ESLint', 'TS', 'tool', 'type']],
  ['single-spa', 'https://single-spa.js.org/', ['micro-frontend', 'framework']],
  ['Shikiji 式辞', 'https://github.com/antfu/shikiji', ['syntax', 'highlighter', 'package']],
  ['TASUKU', 'https://github.com/privatenumber/tasuku', ['CLI', 'NodeJS', 'Visualizer', 'tool']],
  ['Radix Vue', 'https://www.radix-vue.com/', ['UI', 'component', 'library', 'Vue', 'Nuxt']],
  ['panda', 'https://github.com/chakra-ui/panda', ['CSS', 'CSS-in-JS', 'package']],
  ['starry-night', 'https://github.com/wooorm/starry-night', ['syntax', 'highlighter']],
  ['maska', 'https://github.com/beholdr/maska', ['JS', 'Vue', 'input-mask', 'package']],
  ['tiny-invariant', 'https://github.com/alexreardon/tiny-invariant', ['package', 'function', 'error']],
  ['Docus', 'https://github.com/nuxt-themes/docus', ['Vue', 'Nuxt', 'documentation', 'markdown', 'tool']],
  ['publint', 'https://publint.dev/', ['tool', 'linter', 'Vite', 'npm', 'compatibility']],
  ['std-env', 'https://github.com/unjs/std-env', ['package', 'NodeJS']],
  ['Valibot', 'https://valibot.dev/', ['validation', 'type', 'schema', 'TS']],
  ['Obsidian', 'https://obsidian.md/', ['markdown', 'documentation']],
  ['tsx', 'https://github.com/esbuild-kit/tsx', ['TS', 'runtime', 'esbuild', 'NodeJS', 'ESM']],
  ['pkg-exports', 'https://github.com/antfu/pkg-exports', ['export', 'package', 'npm']],
  ['RunKit', 'https://runkit.com/home', ['npm', 'NodeJS', 'code', 'JS', 'visualization']],
  ['Wiki.js', 'https://js.wiki/', ['documentation', 'tool']],
  ['gts', 'https://github.com/google/gts', ['linter', 'TS', 'formatter', 'code']],
  ['TypeStat', 'https://github.com/JoshuaKGoldberg/TypeStat', ['TS', 'type', 'JS', 'CLI', 'tool']],
  ['gray-matter', 'https://github.com/jonschlinkert/gray-matter', ['yaml', 'NodeJS', 'parser', 'package']],
  ['EMP', 'https://github.com/efoxTeam/emp', ['micro-frontend', 'TS', 'webpack', 'framework', 'ESM']],
  ['fluent-vue', 'https://fluent-vue.demivan.me/', ['package', 'Vue', 'internationalization']],
  ['Milkdown', 'https://milkdown', ['markdown', 'framework']],
  ['Grid.js', 'https://gridjs.io/', ['table', 'Vue', 'package']],
  ['tsup', 'https://github.com/egoist/tsup', ['TS', 'bundler', 'esbuild', 'package']],
  ['unbuild', 'https://github.com/unjs/unbuild', ['TS', 'Rollup', 'JS', 'build', 'bundler', 'package']],

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