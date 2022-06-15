<template>
  <div class="app-container center text-neutral-800">
    <div class="flex-col-center gap-4 bg-neutral-100 p-10 rounded-lg shadow">
      <div class="text-5xl flex self-start">Tired of all the noise?</div>
      <div class="text-4xl flex self-start font-bold">Go minimal.</div>
      <form class="flex flex-col gap-2 m-5">
        <label for="email" class="font-bold">Email</label>
        <input
          type="text"
          class="bg-neutral-200 rounded-md h-8 px-3"
          placeholder="Email"
        />
        <label for="password" class="font-bold">Password</label>
        <input
          type="password"
          class="bg-neutral-200 rounded-md h-8 px-3"
          placeholder="Password"
        />
        <button
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
          Login
        </button>
        <nuxt-link to="/register" class="self-center hover:underline"
          >Register a new account</nuxt-link
        >
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