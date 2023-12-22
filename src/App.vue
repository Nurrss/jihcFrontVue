<!-- <template>
  <navbar />
  <combined2 />
  <hero />
  <column />
  <jumbotron />
  <column2 />
  <column3 />
</template> -->

<template>
  <div class="main-app">
    <Navbar />
    <combined />
    <main class="flex justify-center items-center max-w-lg mx-auto w-full">
      <RouterView />
    </main>
    <my-footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Combined from "./components/Combined.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: {
    Combined,
    Navbar,
    MyFooter,
  },
};
</script>

<style></style>
