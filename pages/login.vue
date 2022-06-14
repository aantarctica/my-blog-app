<template>
  <div class="app-container">
    <div
      class="
        flex flex-col flex-nowrap
        justify-around
        gap-4
        bg-gray-100
        p-10
        rounded-lg
      "
    >
      <div class="text-lg font-bold">Login</div>
      <form class="flex flex-col gap-2">
        <label for="email">Email</label>
        <input
          type="text"
          class="bg-gray-200 rounded-md h-8 px-3"
          placeholder="Email"
        />
      </form>
      <form class="flex flex-col gap-2">
        <label for="password">Password</label>
        <input
          type="password"
          class="bg-gray-200 rounded-md h-8 px-3"
          placeholder="Password"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>