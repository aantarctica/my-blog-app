<template>
  <div class="app-container">
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
};
</script>

