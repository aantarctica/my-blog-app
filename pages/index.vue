<template>
  <div class="app-container screen">
    <AppHeader />
    <BlogPosts class="self-center" />
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  head() {
    return {
      title: "Home",
    };
  },

  methods: {
    loadUser() {
      console.log(this.$fire.auth.currentUser);
    },
  },

  created() {
    this.loadUser();
  },
};
</script>

