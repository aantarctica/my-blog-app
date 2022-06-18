<template>
  <div class="app-container center screen text-neutral-800">
    <div class="flex-col-center gap-4 bg-neutral-100 p-10 rounded-lg shadow">
      <div class="text-5xl flex self-start">Tired of all the noise?</div>
      <div class="text-4xl flex self-start font-bold">Go minimal.</div>
      <div
        :v-if="this.login_error"
        class="text-red-400 text-s flex items-center gap-2"
      >
        <span>{{ this.error_text }}</span>
      </div>
      <form class="flex flex-col gap-2 m-5" @submit.prevent="login">
        <label for="email" class="font-bold">Email</label>
        <input
          type="text"
          class="bg-neutral-200 rounded-md h-8 px-3"
          placeholder="Email"
          v-model="auth.email"
        />
        <label for="password" class="font-bold">Password</label>
        <input
          type="password"
          class="bg-neutral-200 rounded-md h-8 px-3"
          placeholder="Password"
          v-model="auth.password"
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
          Login
        </button>
      </form>
      <nuxt-link to="/register" class="self-center hover:underline">
        Register a new account
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Login",
    };
  },

  data() {
    return {
      auth: {
        email: "",
        password: "",
      },
      error_text: "",
      login_error: false,
    };
  },

  methods: {
    login() {
      this.login_error = false;
      if (this.auth.email == "" || this.auth.password == "") {
        this.error_text = "Please fill out all fields.";
        this.login_error = true;
      } else {
        this.$fire.auth
          .signInWithEmailAndPassword(this.auth.email, this.auth.password)
          .then((userCredential) => {
            const user = userCredential.auth;
            $nuxt.$router.push("/");
          })
          .catch((error) => {
            if (error.code == "auth/user-not-found") {
              this.error_text = "User not found";
              this.login_error = true;
            } else if (error.code == "auth/wrong-password") {
              this.error_text = "Wrong password";
              this.login_error = true;
            }
          });
      }
    },
  },
};
</script>

<style>
</style>