<template>
  <router-link :to="path" class="disabled-text-decoration">
    <div class="post-list-item">
      <h3 class="post-view-heading">
        <router-link :to="path">{{ title }}</router-link>
      </h3>
      <p>
        {{ description }} <router-link :to="path">→ Читать</router-link>
      </p>
      <hr/>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'MyPostPreview',
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      path: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style lang="stylus">
  .post-view-heading
    text-align center
  .disabled-text-decoration, .disabled-text-decoration:hover
    text-decoration none !important
    background transparent !important
</style>
