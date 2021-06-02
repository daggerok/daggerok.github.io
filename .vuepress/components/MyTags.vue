<template>
  <div>
    <h1>My tags</h1>
    <pre style="background-color: transparent">{{ tags }}</pre>
  </div>
</template>

<script>
import tagsServices from '@/my-services/tags';

export default {
  name: 'MyTags',
  computed: {
    tags() {
      return tagsServices.getAllTags(this.$site).sort();
    },
  },
};
</script>
