const base = process.env.BASE || '/';

module.exports = {
  extend: '@vuepress/theme-default',
  theme: 'default-prefers-color-scheme',
  lang: 'ru-RU',
  title: 'Мой блог',
  description: 'Делай дело',
  base,
  head: [
    ['link', { rel: 'icon', href: base + 'favicon.ico' }]
  ],
  docsDir: '.',
  themeConfig: {
    repo: 'daggerok/daggerok.github.io',
    lastUpdated: 'Обновлено', // string | boolean
    prefersTheme: 'dark',
    smoothScroll: true,
    serviceWorker: {
      updatePopup: true,
    },
    nav: [
      { text: 'Блог', link: '/' },
      { text: 'Обо мне', link: '/about/' },
      { text: 'Категории', link: '/categories/' },
      { text: 'Теги', link: '/tags/' },
    ],
  },
  plugins: [
    '@vuepress/nprogress',
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
    '@vuepress/pagination',
    '@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor',
      headerTopOffset: 120
    },
  ],
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-vuepress-code-snippet-enhanced'));
    },
  },
  alias: { // import categories from '@/my-services/categories';
    '@': require('path').resolve(process.cwd(), '.vuepress'),
  },
};
