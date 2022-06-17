<template>
  <NuxtLink :to="`posts/${post.id}`">
    <div class="blog-post">
      <div class="h-48">
        <img
          class="w-full h-full object-cover"
          :src="`https://picsum.photos/seed/${post.id}/500/500?grayscale&blur=1&random=${post.id}`"
        />
      </div>
      <div class="flex flex-col gap-3 p-4 pb-8">
        <div class="font-bold text-xs text-gray-500 text-left">
          {{ post.data.date }}
        </div>
        <div class="post-title">
          {{ post.data.title }}
        </div>
        <div class="text-sm line-clamp-3" v-html="post.data.content"></div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "postTile",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>