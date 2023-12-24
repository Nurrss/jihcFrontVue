<script>
import Hero2 from "../components/Hero2.vue";
import Practic from "../components/Practic.vue";

export default {
  name: "App",
  components: {
    Hero2,
    Practic,
  },
};
</script>
<template>
  <Hero2 title="Практика" podtitle="Главная / Практика" />
  <Practic />
</template>
