import { defineClientConfig } from '@vuepress/client';
// // @ts-ignore
// import Layout from './layouts/Layout.vue';
// // @ts-ignore
// import NotFound from "./layouts/NotFound.vue";

const clientConfig = async () => {
    // @ts-ignore
    const Layout = await import('./layouts/Layout.vue');
    // @ts-ignore
    const NotFound = await import('./layouts/NotFound.vue');
    return defineClientConfig({
        layouts: {
            Layout,
            NotFound: NotFound,
        },
    });
}

export default clientConfig();
