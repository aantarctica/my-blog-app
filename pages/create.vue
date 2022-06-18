<template>
  <div class="app-container screen">
    <AppHeader />
    <div class="flex flex-col items-center p-4">
      <div class="flex flex-col w-3/5 gap-4">
        <div class="text-3xl font-bold">Create New Post</div>

        <form @submit.prevent="createPost" class="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Add Title"
            v-model="post.title"
            class="h-20 text-3xl border-solid"
          />
          <input
            type="text"
            placeholder="Edit Description"
            v-model="post.description"
            class="h-12"
          />
          <!-- <Editor v-model="post.content" /> -->

          <button
            type="submit"
            class="
              bg-black
              hover:bg-neutral-800
              transition-all
              duration-200
              ease-in-out
              text-white
              font-bold
              py-1
              px-2
              rounded-md
              mt-6
            "
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreatePost",

  head() {
    return {
      title: "Create a new post",
    };
  },

  data() {
    return {
      post: {
        title: "",
        description: "",
        content: "",
      },
    };
  },

  methods: {
    createPost() {
      const user = this.$fire.auth.currentUser;
      const db = this.$fire.firestore
        .collection("blogs")
        .doc(user.uid)
        .collection("posts");
      db.add(this.post);
      this.$nuxt.$router.push("/");
    },
  },
};
</script>

<style>
</style>