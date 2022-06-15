<template>
  <div class="app-container text-gray-800">
    <div class="flex-col-center gap-4 bg-gray-100 p-10 rounded-lg">
      <div class="text-2xl font-bold">Welcome</div>
      <form class="flex flex-col gap-2">
        <label for="email" class="font-bold">Email</label>
        <input
          type="text"
          class="bg-gray-200 rounded-md h-8 px-3"
          placeholder="Email"
        />
        <label for="password" class="font-bold">Password</label>
        <input
          type="password"
          class="bg-gray-200 rounded-md h-8 px-3"
          placeholder="Password"
        />
        <button
          class="
            bg-green-500
            hover:bg-green-700
            text-white
            font-bold
            py-1
            px-2
            rounded-md
            mt-6
          "
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    login() {
      this.$fire.auth
        .signInWithEmailAndPassword(this.auth.email, this.auth.password)
        .then((user) => {
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>