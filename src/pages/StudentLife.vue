<script>
import Hero2 from "../components/Hero2.vue";
import StudentLife from "../components/StudentLife.vue";

export default {
  name: "App",
  components: {
    Hero2,
    StudentLife,
  },
};
</script>
<template>
  <hero2 title="Студенческая жизнь" podtitle="Главная / Студенческая жизнь" />
  <StudentLife />
</template>
