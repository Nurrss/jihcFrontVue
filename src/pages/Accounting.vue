<script>
import Hero2 from "../components/Hero2.vue";
import Accounting from "../components/Accounting.vue";

export default {
  name: "App",
  components: {
    Hero2,
    Accounting,
  },
};
</script>
<template>
  <hero2 title="Бухгалтерский учёт" podtitle="Главная / Бухгалтерский учёт" />
  <Accounting />
</template>
