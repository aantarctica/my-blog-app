<template>
  <div class="flex flex-col w-3/5">
    <div v-if="blog_empty" class="text-3xl my-5 text-neutral-500">
      Nothing to see here yet...
    </div>
    <Post
      v-for="post in this.posts"
      :post="post"
      :key="post.id"
      class="blog-post"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },

  watch: {
    posts: {
      handler() {
        if (this.posts.length > 0) {
          this.blog_empty = false;
        } else {
          this.blog_empty = true;
        }
      },
      deep: true,
    },
  },
  methods: {
    async loadPosts() {
      const user = this.$fire.auth.currentUser;
      const postRef = this.$fire.firestore
        .collection("blogs")
        .doc(user.uid)
        .collection("posts");
      const observer = postRef.onSnapshot((snapshot) => {
        this.posts = [];
        snapshot.forEach((doc) => {
          this.posts.push({ id: doc.id, data: doc.data() });
        });
      });
    },
  },

  created() {
    this.loadPosts();
  },
};
</script>
