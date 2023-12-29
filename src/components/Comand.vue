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
              <h3 class="card-text font-weight-bold">
                <span class="mr-auto fw-bold">{{ card.name }}</span>
              </h3>
              <h6 class="card-title">{{ card.email }}</h6>
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
          jobTitle: "Директор",
          name: "Алишер Бодаубеков",
          email: "alisher.bodaubekov@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Ержан Койшибеков.jpg"),
          jobTitle: "Завуч",
          name: "Ержан Койшибеков",
          email: "erzhan.koishybekov@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Бақытжан Қазанғапов.jpg"),
          jobTitle: "Завуч",
          name: "Бақытжан Қазанғапов",
          email: "bakytzhan.kazangapov@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Сарманов Айдос.jpg"),
          jobTitle: "Завуч",
          name: "Айдос Сарманов",
          email: "aidos.sarmanov@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Нұржан Сағындық.jpg"),
          jobTitle: "Учитель IT",
          name: "Нұржан Сағындық",
          email: "nurzhan.sagyndyq@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Саулебекова Данагуль.jpg"),
          jobTitle: "Учитель английского языка ",
          name: "Данагуль Саулебекова",
          email: "nurzhan.sagyndyq@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Айжан Бердибаева .jpg"),
          jobTitle: "Учитель учета и аудита",
          name: "Айжан Бердибаева",
          email: "aizhan.berdibayeva@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Жолдыбаева Тамара .jpg"),
          jobTitle: "Учитель русского языка ",
          name: "Тамара Жолдыбаева",
          email: "tamara.zholdybaeva@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Анарбеков Алмаз .jpg"),
          jobTitle: "Учитель IT",
          name: "Алмаз Анарбеков",
          email: "almaz.anarbekov@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Тоқтасын Олжас.jpg"),
          jobTitle: "Учитель IT",
          name: "Олжас Тоқтасын",
          email: "olzhas.toktassyn@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Жүнісов Əлишер .jpg"),
          jobTitle: "Учитель IT",
          name: "Әлишер Жүнісов",
          email: "alisher.zhunissov@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Бахытжан Мыктыбаев.jpg"),
          jobTitle: "Учитель IT",
          name: "Бахытжан Мықтыбаев",
          email: "bakhytzhan.myktybayev@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Жаныбек Айбол .jpg"),
          jobTitle: "Учитель IT",
          name: "Айбол Жаныбек",
          email: "aibol.zhanybek@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Алекулов Жангерхан .jpg"),
          jobTitle: "Учитель IT",
          name: "Жангерхан Алекулов",
          email: "zhangerkhan.alekulov@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Жүрсін Дархан.jpg"),
          jobTitle: "Учитель IT",
          name: "Дархан Жүрсін",
          email: "darkhan.zhursin@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Егембердиева Мадина .jpg"),
          jobTitle: "Учитель IT",
          name: "Мадина Егембердиева",
          email: "madina.egemberdieva@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Тəжібаева Жансая.jpg"),
          jobTitle: "Учитель IT",
          name: "Жансая Тәжібаева",
          email: "zhansaya.tazhibayeva@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/MereyAgay.jpg"),
          jobTitle: "Учитель ",
          name: "Мерей Мейрам",
          email: "merey.meiram@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Қарлығаш Тұрар .jpg"),
          jobTitle: "Учитель IT",
          name: "Қарлығаш Тұрар",
          email: "qarlygash.turar@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Ернар Кудайбергенов .jpg"),
          jobTitle: "Учитель экономики ",
          name: "Ернар Кудайбергенов",
          email: "yernar.kudaibergenov@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Нұргүл Тоқтар .jpg"),
          jobTitle: "Учитель ",
          name: "Нұргүл Тоқтар",
          email: "nurgul.toktar@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Шынар Алтынбекова.jpg"),
          jobTitle: "Учитель менеджмента",
          name: "Шынар Алтынбекова",
          email: "shynar.altynbekova@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Нурипа Куандыкова .jpg"),
          jobTitle: "Учитель",
          name: "Нурипа Куандыкова",
          email: "nuripa.kuandykova@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Емел Картав.jpg"),
          jobTitle: "Учитель турецкого языка ",
          name: "Емел Картав",
          email: "emel.kartav@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Зейнеп Қанатқызы .jpg"),
          jobTitle: "Учитель английского языка ",
          name: "Зейнеп Қанатқызы",
          email: "zeinep.kanatkyzy@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Азиза Саясатова .jpg"),
          jobTitle: "Учитель английского языка ",
          name: "Азиза Саясатова",
          email: "aziza.sayassatova@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Назкен Бекхалиева .jpg"),
          jobTitle: "Учитель английского языка ",
          name: "Назкен Бекхалиева",
          email: "nazken.bekkhaliyeva@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Замира Қырықбаева .jpg"),
          jobTitle: "Учитель английского языка ",
          name: "Замира Қырықбаева",
          email: "zamira.kyrykbayeva@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Бөкейхан Қалдыбек.jpg"),
          jobTitle: "Учитель физики",
          name: "Бөкейхан Қалдыбек",
          email: "nurzhan.sagyndyq@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Қаламқас Алиева .jpg"),
          jobTitle: "Учитель математики",
          name: "Қаламқас Алиева",
          email: "kalamkas.aliyeva@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Баян Жырғау.jpg"),
          jobTitle: "Учитель математики",
          name: "Баян Жырғау",
          email: "bayan.zhyrgau@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Ақжан Нұрекеева.jpg"),
          jobTitle: "Учитель математики",
          name: "Ақжан Нұрекеева",
          email: "akzhan.nurkeyeva@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Ғазизбек Курышбекович .jpg"),
          jobTitle: "Учитель ",
          name: "Ғазизбек Курышбекович",
          email: "gaziz.janayev@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Әмірхан Әлі Әсем .jpg"),
          jobTitle: "Психолог ",
          name: "Әсем Әмірхан Әлі",
          email: "assem.amirkhan-ali@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Ержан Ахмет.jpg"),
          jobTitle: "Учитель истории ",
          name: "Ержан Ахмет",
          email: "erzhan.ahmet@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Ғайша Тулегенова.jpg"),
          jobTitle: "Учитель истории",
          name: "Ғайша Тулегенова",
          email: "gaysha.tulegenova@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Тұмар Азамат.jpg"),
          jobTitle: "Учитель биологии ",
          name: "Тұмар Азамат",
          email: "tumar.azamat@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Ажар Бейсембек .jpg"),
          jobTitle: "Учитель химии",
          name: "Ажар Бейсембек",
          email: "azhar.beisembek@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Айгерим Ахметова .jpg"),
          jobTitle: "Учитель географии",
          name: "Айгерим Ахметоваи",
          email: "aygerim.akhmetova@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Гулзада Курманбаева .jpg"),
          jobTitle: "Учитель казахского языка ",
          name: "Гулзада Курманбаева",
          email: "gulzada.kurmanbayeva@jihc.kzz",
        },
        {
          imgPath: require("../assets/jihc/comand/Қанат Тилентаев .jpg"),
          jobTitle: "Учитель физкультуры",
          name: "Қанат Тилентаев",
          email: "kanat.tilentayev@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Мухтар Ниязов.jpg"),
          jobTitle: "Учитель НВП",
          name: "Мухтар Ниязов",
          email: "muhtar.niyazov@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Гульнур Ахметова.jpg"),
          jobTitle: "Учитель физкультуры",
          name: "Гульнур Ахметова",
          email: "gulnur.akhmetova@jihc.kz",
        },
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
.card img {
  max-height: 326.25px;
  object-fit: cover; /* Ensures the image doesn't exceed the width of its container */
  width: auto; /* Maintains the aspect ratio */
}
</style>
