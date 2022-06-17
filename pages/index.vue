<template>
  <div class="app-container screen">
    <AppHeader />
    <BlogPosts class="self-center" />
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

