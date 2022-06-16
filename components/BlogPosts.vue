<template>
  <div class="app-container items-center">
    <div class="flex flex-col w-3/5">
      <div
        v-for="post in this.$store.state.articleList"
        :key="post"
        class="blog-post"
      >
        <img :src="`${post.imgUrl}`" alt="Image here" class="post-image" />
        <div class="post-title">
          {{ post.title }}
        </div>
        <div class="text-md">{{ post.description }}</div>
        <div class="text-sm text-gray-300">{{ post.timestamp }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
