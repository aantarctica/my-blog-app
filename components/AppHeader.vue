<template>
  <div
    class="
      flex flex-row
      items-center
      justify-between
      p-3
      bg-black
      text-white
      shadow-lg
      gap-4
    "
  >
    <nuxt-link to="/" class="font-bold text-3xl">minimal</nuxt-link>
    <div class="flex flex-row gap-3">
      <div class="font-bold">
        <nuxt-link to="/create">New Post</nuxt-link>
      </div>
      |
      <div class="font-bold">
        <button @click="logout()">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      const auth = this.$fire.auth;
      auth
        .signOut()
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
    },
  },
};
</script>

<style>
</style>