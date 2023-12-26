<script>
import Hero2 from "../components/Hero2.vue";
import Labaratory from "../components/Labaratory.vue";

export default {
  components: {
    Hero2,
    Labaratory,
  },
};
</script>
<template>
  <Hero2 :title="$t('LabPage.title')" :podtitle="$t('LabPage.podtitle')" />
  <Labaratory />
</template>
