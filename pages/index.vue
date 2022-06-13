<template>
  <div>
    <AppHeader />
    <div>Hello worl</div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
export default {
  name: "IndexPage",
  head() {
    return {
      title: "Home",
    };
  },

  components: {
    AppHeader,
  },
};
</script>
