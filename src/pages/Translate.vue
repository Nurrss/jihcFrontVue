<script>
import Hero2 from "../components/Hero2.vue";
import Translate from "../components/Translate.vue";
export default {
  name: "App",
  components: {
    Hero2,
    Translate,
  },
};
</script>
<template>
  <hero2 title="Перевод" podtitle="Главная / Подача документов" />
  <Translate />
</template>
