<template>
  <section class="container my-5">
    <h1 class="m-5 text-center" style="color: #0077ff">
      {{ $t("BoardH1") }}
      <hr />
    </h1>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="col-md-6 col-lg-4"
      >
        <div class="card mb-3" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="card.imgPath" class="img-fluid rounded-5" alt="" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-title">
                  {{ card.titleBoard }}
                </p>
                <h2 class="card-text">
                  {{ card.name }}
                </h2>
                <p class="card-text">
                  {{ card.jobTitle }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          imgPath: require("../assets/jihc/comand/AlisherAgai.jpg"),
          jobTitle: "Job Title 1",
          name: "Name 1",
          titleBoard: "example1@example.com",
        },
        {
          imgPath: require("../assets/jihc/comand/Ажар Бейсембек .jpg"),
          jobTitle: "Job Title 2",
          name: "Name 2",
          titleBoard: "example2@example.com",
        },
        // Add more card objects as needed
      ],
    };
  },
};
</script>

<style scoped>
.card {
  border: 0;
}
/* Add your component-specific styles here */
</style>
