<template>
  <div class="flex flex-col w-3/5">
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
      console.log(this.posts);
    },
  },

  created() {
    this.loadPosts();
  },
};
</script>
