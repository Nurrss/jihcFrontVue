<script>
import Hero2 from "../components/Hero2.vue";
import Canteen from "../components/Canteen.vue";

export default {
  name: "App",
  components: {
    Hero2,
    Canteen,
  },
};
</script>
<template>
  <hero2 title="Столовая" podtitle="Главная / Столовая" />
  <Canteen />
</template>
