<script>
import Hero2 from "../components/Hero2.vue";
import JumbotronElem from "../components/JumbotronElem.vue";

export default {
  name: "App",
  components: {
    Hero2,
    JumbotronElem,
  },
};
</script>
<template>
  <hero2 title="Подача документов" podtitle="Главная / Подача документов" />
  <JumbotronElem />
</template>
