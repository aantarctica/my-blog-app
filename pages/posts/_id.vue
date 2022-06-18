<template>
  <div class="app-container screen">
    <AppHeader />
    <img
      class="w-full h-48 object-cover"
      :src="`https://picsum.photos/seed/${post.id}/500/500?grayscale&blur=1&random=${post.id}`"
    />
    <div class="flex flex-col items-center p-4">
      <div class="flex flex-col w-3/5 gap-2">
        <div class="flex flex-col py-10 gap-4">
          <div class="text-3xl font-bold">{{ post.data.title }}</div>
          <div class="h-12">{{ post.data.description }}</div>
          <div class="text-sm">{{ post.data.content.getHTML }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        id: this.$route.params.id,
        data: {
          title: "",
          content: "",
          description: "",
        },
      },
      user: "",
    };
  },
  methods: {
    async loadPost() {
      this.user = this.$fire.auth.currentUser;
      const postRef = this.$fire.firestore
        .collection("blogs")
        .doc(this.user.uid)
        .collection("posts")
        .doc(this.post.id);
      const snapshot = await postRef.get();
      if (!snapshot.empty) {
        this.post.data = snapshot.data();
      } else {
        console.log("No such documents!");
      }
      console.log(this.post);
      console.log(this.user);
    },
  },
  created() {
    this.loadPost();
  },
};
</script>