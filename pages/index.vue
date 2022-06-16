<template>
  <div class="app-container screen">
    <AppHeader />
    <BlogPosts />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import BlogPosts from "@/components/BlogPosts";
export default {
  name: "IndexPage",
  components: {
    AppHeader,
    BlogPosts,
  },

  created() {
    const user = this.$fire.auth.currentUser;
    console.log(user);
  },
};
</script>

