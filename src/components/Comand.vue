<template>
  <section class="container my-5">
    <h1 class="m-5 text-center" style="color: #0077ff">
      {{ $t("ComandH1") }}
      <hr />
    </h1>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div v-for="(card, index) in cards" :key="index" class="col-md-3">
        <div class="card text-white rounded-5 shadow-risen">
          <img
            class="card-img rounded-5"
            :src="card.imgPath"
            alt="Card image"
          />

          <div class="inner-shadow-bottom"></div>
          <div class="card-img-overlay d-flex flex-column">
            <div class="mt-auto">
              <h5 class="card-title">{{ card.jobTitle }}</h5>
              <h1 class="card-text font-weight-bold">
                <span class="mr-auto fw-bold">{{ card.name }}</span>
              </h1>
              <h5 class="card-title">{{ card.email }}</h5>
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
          email: "example1@example.com",
        },
        {
          imgPath: require("../assets/jihc/comand/Ажар Бейсембек .jpg"),
          jobTitle: "Job Title 2",
          name: "Name 2",
          email: "example2@example.com",
        },
        // Add more card objects as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
.inner-shadow-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%; /* Adjust the height of the shadow as needed */
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: inherit;
  pointer-events: none; /* Ensure the pseudo-element doesn't interfere with interaction */
}
.card {
  border: 0 !important;
}
.card {
  position: relative;
}
</style>
