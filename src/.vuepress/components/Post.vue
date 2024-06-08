<template>
  <router-link :to="path">
    {{ title }}
  </router-link>
</template>

<script>
export default {
  name: 'Post',
  props: {
    filePathRelative: {
      type: String,
      required: false,
      default: '',
    },
    lang: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
    image: {
      type: String,
      default: 'me-2020-11.jpeg',
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>

</style>
