<template>
  <div class="container flex flex-col items-center">
    <div class="flex flex-col w-3/5">
      <div
        v-for="article in this.$store.state.articleList"
        :key="article"
        class="
          flex flex-col
          p-6
          gap-2
          hover:bg-gray-100
          transition-all
          duration-200
          ease-in-out
        "
      >
        <img
          :src="`${article.imgUrl}`"
          alt="Image here"
          class="grayscale h-max-10 overflow-hidden shadow"
        />
        <div class="font-bold text-3xl">
          {{ article.title }}
        </div>
        <div class="text-md">{{ article.description }}</div>
        <div class="text-sm text-gray-300">{{ article.timestamp }}</div>
      </div>

      <!-- <section>{{ this.$store.state.articleList[0].title }}</section> -->
    </div>
  </div>
</template>

<script>
import BlogPost from "./BlogPost";
export default {
  data() {
    return {
      posts: [],
    };
  },
  components: {
    BlogPost,
  },
  created() {},
};
</script>
