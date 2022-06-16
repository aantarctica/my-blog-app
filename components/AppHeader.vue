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
    <div class="font-bold text-3xl">minimal</div>
    <div class="flex flex-row">
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