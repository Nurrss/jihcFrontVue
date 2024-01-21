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
        <div
          class="col d-flex flex-row gap-3 text-center justify-content-center p-4 rounded-4 py-3 align-items-center"
        >
          <img :src="card.imgPath" class="img-fluid rounded-5" alt="" />
          <p class="card-title">
            <b> {{ card.name }}</b> <small> {{ card.titleBoard }}</small>
          </p>
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
