<template>
  <div>
    <h2>
      <span v-if="isRu">Последние</span>
      <span v-else>Latest</span>
    </h2>
    <p v-if="pages.length" v-for="page in pages">
      <Post :path="page.path" :title="page.title" /> &nbsp;
    </p>
    <p v-if="!pages.length">
      <span v-if="isRu">Продолжение следует...</span>
      <span v-else>To be continue...</span>
    </p>
  </div>
</template>

<script>
import Post from "./Post.vue";
import { usePages } from '@temp/posts'  // posts.js filename: see plugin config

export default {
  name: 'Posts',
  components: {
    Post,
  },
  computed: {
    // markdownBlogFiles() {
    //   return __MARKDOWN_BLOG_FILES__ || [];
    // },
    pages() {
      const pages = usePages();
      // console.log('pages:', pages);
      // console.log('this.$route:', this.$route);
      // console.log('this.$router:', this.$router);
      // console.log('this.$router.currentRoute:', this.$router.currentRoute);
      // console.log('this.$router.options:', this.$router.options);
      return pages;
    },
    isRu() {
      return this.$route
          && this.$route.href
          && this.$route.href.indexOf('ru') > 0;
    },
  },
}
</script>
