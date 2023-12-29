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
          <div
            class="row g-0 rounded-5 align-items-center"
            style="max-height: 150px; background-position: center"
          >
            <div class="col-md-4">
              <img :src="card.imgPath" class="img-fluid rounded-5" alt="" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-title">
                  <small> {{ card.titleBoard }}</small>
                </p>
                <h5 class="card-text fw-bold">
                  {{ card.name }}
                </h5>
                <p class="card-text fw-light lh-1">
                  <small> {{ card.jobTitle }}</small>
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
          imgPath: require("../assets/jihc/sovet/card1.png"),
          jobTitle: "Ректор SDU Universitym",
          name: "Игенбаев Алимжан Бекежанович",
          titleBoard: "Председатель попечительского совета",
        },
        {
          imgPath: require("../assets/jihc/sovet/card2.png"),
          jobTitle: "президент ассоциации выпускников колледжа “JAMECO ALUMNI”",
          name: "Лесхан Даурен",
          titleBoard: "Член попечительского совета",
        },
        {
          imgPath: require("../assets/jihc/sovet/card3.png"),
          jobTitle:
            "региональный координатор на Юге Казахстана МОФ “Білім-Инновация”",
          name: "Муканов Алмас Джубайұлы",
          titleBoard: "Член попечительского совета",
        },
        {
          imgPath: require("../assets/jihc/sovet/card4.png"),
          jobTitle: "гражданский активист, международный коуч",
          name: "Бермаганбетов Галымбек Темирбекович",
          titleBoard: "Член попечительского совета",
        },
        {
          imgPath: require("../assets/jihc/sovet/card5.png"),
          jobTitle:
            "старший преподаватель кафедры “Экономика” в Dulaty University”",
          name: "Жантаева Ардақ Мықтыбековна",
          titleBoard: "Член попечительского совета",
        },

        {
          imgPath: require("../assets/jihc/sovet/card6.png"),
          jobTitle: "предприниматель - меценат, учредитель школы “Innoverse”",
          name: "Шалғынбаев Жұмадыл Мурзабекұлы",
          titleBoard: "Член попечительского совета",
        },
        {
          imgPath: require("../assets/jihc/sovet/card7.png"),
          jobTitle: "предприниматель - меценат, учредитель школы “Innoverse”",
          name: "Джурымбаев Галымжан Бахитжанович",
          titleBoard: "Член попечительского совета",
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
