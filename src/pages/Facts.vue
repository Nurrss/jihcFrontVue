<script>
import Hero2 from "../components/Hero2.vue";
import Facts from "../components/Facts.vue";

export default {
  name: "App",
  components: {
    Hero2,
    Facts,
  },
};
</script>
<template>
  <Hero2 title="Важные факты" podtitle="Главная / Важные факты" />
  <Facts />
</template>
