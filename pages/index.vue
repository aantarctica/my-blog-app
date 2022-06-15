<template>
  <div class="">
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

