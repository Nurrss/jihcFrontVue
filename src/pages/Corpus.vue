<script>
import Hero2 from "../components/Hero2.vue";
import Corpus from "../components/Corpus.vue";

export default {
  name: "App",
  components: {
    Hero2,
    Corpus,
  },
};
</script>
<template>
  <hero2
    :title="$t('CorpusPage.title')"
    :podtitle="$t('CorpusPage.podtitle')"
  />
  <Corpus />
</template>
