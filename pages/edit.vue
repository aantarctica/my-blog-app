<template>
  <div class="app-container items-center">
    <div class="flex flex-col w-3/5">
      <div class="text-xl font-bold">Edit Post</div>

      <form @submit.prevent="save" class="flex flex-col">
        <input
          type="text"
          placeholder="Add Title"
          v-model="title"
          class="h-16 bg-neutral-100"
        />
        <input
          type="text"
          placeholder="Edit Description"
          v-model="description"
          class="h-16 bg-neutral-100"
        />
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
</template>

<script>
export default {
  head() {
    return {
      title: "Edit",
    };
  },

  data() {
    return {
      title: "",
      description: "",
    };
  },
  created() {
    const user = this.$fire.auth.currentUser;
    console.log(user);
  },

  methods: {
    save() {
      try {
        // await admin.firestore().collection("posts").doc().set({
        //   title: this.title,
        //   description: this.description,
        // });

        this.$fire.firestore.collection("posts").add({
          title: this.title,
          description: this.description,
        });
        console.log("success");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>