<template>
  <section class="container my-5">
    <h1 class="m-5 text-center" style="color: #0077ff">
      {{ $t("BoardH1") }}
      <hr />
    </h1>
    <div class="row g-4">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="col-12 col-sm-6 col-md-4 col-lg-3"
      >
        <div class="card h-100 text-center p-4">
          <img
            :src="card.imgPath"
            class="card-img-top mx-auto d-block c"
            alt="Profile image"
            style="width: 80%; height: auto"
          />
          <div class="card-body">
            <h5 class="card-title">{{ card.name }}</h5>
            <p class="card-text">{{ card.titleBoard }}</p>
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
.c {
  max-width: 130px;
}
/* Add your component-specific styles here */
</style>
