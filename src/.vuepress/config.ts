import { getDirname, path } from '@vuepress/utils';
import { defineUserConfig, viteBundler } from 'vuepress';
import { usePagesPlugin } from 'vuepress-plugin-use-pages';
import { searchPlugin } from '@vuepress/plugin-search';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';

// @ts-ignore
const __dirname = getDirname(import.meta.url);

// @ts-ignore // const { name, description } = require(`${process.cwd()}/package.json`)
const getPackageJsonFile = await import('../../package.json', { assert: { type: 'json' } });
const { name, description } = getPackageJsonFile.default;

import { myBlogLocalTheme } from './theme';
const themeConfig = {
    title: description,
    displayAllHeaders: true,
    mediumZoom: true,
    backToHome: true,
    nprogress: true,
    locales: {
        '/': {
            lang: 'en-US',
        },
        '/ru/': {
            lang: 'ru-RU',
        },
    },
};

// @ts-ignore
import * as glob from 'glob';
const rootPath = path.resolve(__dirname, '..');
const blogPath = path.resolve(rootPath, 'blog');
const blogSidebar = glob.sync(`${blogPath}/**/*.md`)
    .map(f => f.substring(rootPath.length, f.length))
    .sort()
    .reverse()
const blogPagePath = '/blog/README.md';
const firstBlogPath = blogSidebar.find((value, index, array) => value != blogPagePath) || blogPagePath;

export default defineUserConfig({
    ...themeConfig,
    base: !process.env.BASE_HREF ? '/' : `/${name}/`,
    theme: myBlogLocalTheme({
        // See: https://v2.vuepress.vuejs.org/reference/default-theme/config.html#repo
        repo: `daggerok/${name}`, // repo: `https://github.com/daggerok/${name}`,
        docsBranch: 'master',
        docsDir: './src',
        lastUpdated: true,
        sidebar: blogSidebar,
        // default theme options
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: firstBlogPath || '/blog/' },
        ],
        locales: {
            '/': {
                selectLanguageName: 'English'
            },
            '/ru/': {
                selectLanguageName: 'Русский'
            },
        },
    }),
    bundler: viteBundler(), // required by plugins => usePagesPlugin
    plugins: [
        usePagesPlugin({ // see: https://github.com/monsat/vuepress-plugin-use-pages
            filter: (page) => page.title !== 'Blog' && page.title !== 'Блог', // fetch non README.md (title: '# Blog') posts
            sort: (a, b) => {
                if (a.path == b.path) return 0;
                return (a.path > b.path) ? -1 : 1; // natural descending order: newest pages comes first
            },
            startsWith: '/', // '/blog/', // fetch only matched paths
            file: 'posts.js', // temp file name will be: posts.js
        }),
        registerComponentsPlugin({
           componentsDir: path.resolve(__dirname, './components'),
        }),
        searchPlugin({ /* options */}),
    ],
});
