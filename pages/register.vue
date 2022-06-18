<template>
  <div class="app-container center screen text-neutral-800">
    <div class="flex-col-center gap-4 bg-neutral-100 p-10 rounded-lg shadow">
      <div class="text-5xl flex self-start">Begin your minimal journey.</div>
      <div
        :v-if="this.register_error"
        class="text-red-400 text-s flex items-center gap-2"
      >
        <span>{{ this.error_text }}</span>
      </div>
      <form class="flex flex-col gap-2 m-5" @submit.prevent="register">
        <label for="firstName" class="font-bold">First Name</label>
        <input
          type="text"
          class="bg-neutral-200 rounded-md h-8 px-3"
          placeholder="First Name"
          v-model="firstName"
        />
        <label for="lastName" class="font-bold">Last Name</label>
        <input
          type="text"
          class="bg-neutral-200 rounded-md h-8 px-3"
          placeholder="Last Name"
          v-model="lastName"
        />
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
          Register
        </button>
      </form>
      <nuxt-link to="/login" class="self-center hover:underline">
        Already have an account?
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Register",
    };
  },

  data() {
    return {
      auth: {
        email: "",
        password: "",
        displayName: "",
      },
      register_error: false,
      error_text: "",
      firstName: "",
      lastName: "",
    };
  },

  methods: {
    register() {
      if (
        this.auth.firstName == "" ||
        this.auth.lastName == "" ||
        this.auth.email == "" ||
        this.auth.password == ""
      ) {
        this.register_error = true;
        this.error_text = "Please fill out all fields";
      } else {
        this.$fire.auth
          .createUserWithEmailAndPassword(this.auth.email, this.auth.password)
          .then((userCredential) => {
            $nuxt.$router.push("/");
          })
          .catch((error) => {
            if (error.code == "auth/email-already-in-use") {
              this.register_error = true;
              this.error_text = "Email already in use";
            }
          });
      }
    },
  },
};
</script>

<style>
</style>