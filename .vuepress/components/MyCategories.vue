<template>
  <div>
    <pre style="background-color: transparent">{{ categories }}</pre>
    <h2>?q=...</h2>
    <pre style="background-color: transparent">
  query: {{ query }}

  query && query.q && Array.isArray(query.q): {{ query && query.q && Array.isArray(query.q) }}
    </pre>
    <p>
      use these links: <br/>
      <router-link :to="'/categories/?q=ololo'">http://localhost:8080/categories/?q=ololo</router-link> <br/>
      <router-link :to="'/categories/?q=ololo&q=trololo'">http://localhost:8080/categories/?q=ololo&q=trololo</router-link> <br/>
    </p>
  </div>
</template>

<script>
const { getAllCategories } = require('@/my-services/categories');
export default {
  name: 'MyCategories',
  mounted() {
    console.log(this.$route);
  },
  computed: {
    query() {
      // return this.$router.options.routes.flatMap(({ name, path }, index, array) => ({ [name]: path }));
      return this.$route.query;
    },
    categories() {
      return getAllCategories(this.$site).sort();
    },
  },
};
</script>
