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
  alias: { // import MyFooter from '@/components/MyFooter.vue'
    '@': require('path').resolve(process.cwd(), '.vuepress'),
  },
  locales: {
    '/': {
      lang: 'ru',
      title: 'Мой блог',
      description: 'Делай дело',
    },
    '/en/': {
      lang: 'en-US',
      title: 'My blog',
      description: 'Just do it',
    },
    '/ua/': {
      lang: 'ua-UA',
      title: 'Мiй блог',
      description: 'Роби справу',
    },
  },
  themeConfig: {
    prefersTheme: 'dark',
    repo: 'daggerok/daggerok.github.io',
    docsDir: '.',
    editLinks: true,
    smoothScroll: true,
    serviceWorker: {
      updatePopup: true,
    },
    locales: {
      '/': {
        label: 'Русский',
        selectText: 'Языки',
        editLinkText: 'Изменить на GitHub',
        lastUpdated: 'Обновлено', // string | boolean
        nav: [
          { text: 'Блог', link: '/' },
          { text: 'Обо мне', link: '/about/' },
          { text: 'Категории', link: '/categories/' },
          { text: 'Теги', link: '/tags/' },
        ],
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit me on GitHub',
        lastUpdated: 'Updated at',
        nav: [
          { text: 'Blog', link: '/en/' },
          { text: 'About me', link: '/en/about/' },
          { text: 'Categories', link: '/en/categories/' },
          { text: 'Tags', link: '/en/tags/' },
        ],
      },
      '/ua/': {
        label: 'Українська',
        selectText: 'Мови',
        editLinkText: 'Змінити на GitHub',
        lastUpdated: 'Обновлено',
        nav: [
          { text: 'Блог', link: '/ua/' },
          { text: 'Про мене', link: '/ua/about/' },
          { text: 'Категорії', link: '/ua/categories/' },
          { text: 'Тегі', link: '/ua/tags/' },
        ],
      },
    },
  },
};
