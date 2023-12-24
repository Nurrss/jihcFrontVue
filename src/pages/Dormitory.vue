<script>
import Hero2 from "../components/Hero2.vue";
import Dormitory from "../components/Dormitory.vue";

export default {
  name: "App",
  components: {
    Hero2,
    Dormitory,
  },
};
</script>
<template>
  <hero2 title="Общежитие" podtitle="Главная / Общежитие" />
  <Dormitory />
</template>
