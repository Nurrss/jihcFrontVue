<script>
import Hero2 from "../components/Hero2.vue";
import Sporthall from "../components/Sporthall.vue";

export default {
  components: {
    Hero2,
    Sporthall,
  },
};
</script>
<template>
  <hero2 :title="$t('SportPage.title')" :podtitle="$t('SportPage.podtitle')" />
  <Sporthall />
</template>
