<script>
import Hero2 from "../components/Hero2.vue";
import History from "../components/History.vue";

export default {
  name: "App",
  components: {
    Hero2,
    History,
  },
};
</script>
<template>
  <hero2 title="История колледжа" podtitle="Главная / История колледжа" />
  <history />
</template>
