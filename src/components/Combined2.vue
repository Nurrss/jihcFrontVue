<template>
  <div class="bg-img">
    <!-- Navbar for larger screens -->
    <hero />
    <column />
  </div>
</template>

<script>
import Hero from "./Hero.vue";
import Column from "./Column.vue";

export default {
  components: {
    Hero,
    Column,
  },
  // Component logic goes here
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-img {
  background-image: url("@/assets/heroes-bg.png"); /* Adjust the path to your background image */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>
