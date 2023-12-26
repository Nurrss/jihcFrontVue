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
  <hero2 :title="$t('DorPage.title')" :podtitle="$t('DorPage.podtitle')" />
  <Dormitory />
</template>
