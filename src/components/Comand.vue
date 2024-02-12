<template>
  <section class="container my-5">
    <h1 class="m-5 text-center" style="color: #0077ff">
      Руководство
      <hr />
    </h1>
    <div class="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
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
    <h1 class="m-5 text-center" style="color: #0077ff">
      Администрация
      <hr />
    </h1>
    <div class="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
      <div
        class="col-md-3 g-2 rounded py-2 mx-2 frame justify-content-center d-flex flex-column"
        v-for="card in cards2"
        :key="card.email"
        style="background-color: #0077ff"
      >
        <p class="fw-bold text-light m-0 ms-1">{{ card.name }}</p>
        <p class="fw-medium text-light p-0 m-0 ms-1 job">
          {{ card.jobTitle }}
        </p>
        <a :href="`mailto:${card.email}`" class="ms-1 fw-medium text-light">{{
          card.email
        }}</a>
      </div>
    </div>
    <h1 class="m-5 text-center" style="color: #0077ff">
      Кафедра языков
      <hr />
    </h1>
    <div class="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
      <div
        class="col-md-3 g-2 rounded py-2 mx-2 frame justify-content-center d-flex flex-column"
        v-for="card in cards3"
        :key="card.email"
        style="background-color: #00805e"
      >
        <p class="fw-bold text-light m-0 ms-1">{{ card.name }}</p>
        <p class="fw-medium text-light p-0 m-0 ms-1 job">
          {{ card.jobTitle }}
        </p>
        <a :href="`mailto:${card.email}`" class="ms-1 fw-medium text-light">{{
          card.email
        }}</a>
      </div>
    </div>
    <h1 class="m-5 text-center" style="color: #0077ff">
      Кафедра гуманитарных наук и физической культуры
      <hr />
    </h1>
    <div class="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
      <div
        class="col-md-3 g-2 rounded py-2 mx-2 frame justify-content-center d-flex flex-column"
        v-for="card in cards4"
        :key="card.email"
        style="background-color: #43188a"
      >
        <p class="fw-bold text-light m-0 ms-1">{{ card.name }}</p>
        <p class="fw-medium text-light p-0 m-0 ms-1 job">
          {{ card.jobTitle }}
        </p>
        <a :href="`mailto:${card.email}`" class="ms-1 fw-medium text-light">{{
          card.email
        }}</a>
      </div>
    </div>
    <h1 class="m-5 text-center" style="color: #0077ff">
      Кафедра естественно - математического цикла
      <hr />
    </h1>
    <div class="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
      <div
        class="col-md-3 g-2 rounded py-2 mx-2 frame justify-content-center d-flex flex-column"
        v-for="card in cards5"
        :key="card.email"
        style="background-color: #ff9100"
      >
        <p class="fw-bold text-light m-0 ms-1">{{ card.name }}</p>
        <p class="fw-medium text-light p-0 m-0 ms-1 job">
          {{ card.jobTitle }}
        </p>
        <a :href="`mailto:${card.email}`" class="ms-1 fw-medium text-light">{{
          card.email
        }}</a>
      </div>
    </div>
    <h1 class="m-5 text-center" style="color: #0077ff">
      Кафедра информационных технологий
      <hr />
    </h1>
    <div class="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
      <div
        class="col-md-3 g-2 rounded py-2 mx-2 frame justify-content-center d-flex flex-column"
        v-for="card in cards6"
        :key="card.email"
        style="background-color: #0077ff"
      >
        <p class="fw-bold text-light m-0 ms-1">{{ card.name }}</p>
        <p class="fw-medium text-light p-0 m-0 ms-1 job">
          {{ card.jobTitle }}
        </p>
        <a :href="`mailto:${card.email}`" class="ms-1 fw-medium text-light">{{
          card.email
        }}</a>
      </div>
    </div>
    <h1 class="m-5 text-center" style="color: #0077ff">
      Кафедра учета и аудита
      <hr />
    </h1>
    <div class="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
      <div
        class="col-md-3 g-2 rounded py-2 mx-2 frame justify-content-center d-flex flex-column"
        v-for="card in cards7"
        :key="card.email"
        style="background-color: #00a353"
      >
        <p class="fw-bold text-light m-0 ms-1">{{ card.name }}</p>
        <p class="fw-medium text-light p-0 m-0 ms-1 job">
          {{ card.jobTitle }}
        </p>
        <a :href="`mailto:${card.email}`" class="ms-1 fw-medium text-light">{{
          card.email
        }}</a>
      </div>
    </div>
    <h1 class="m-5 text-center" style="color: #0077ff">
      Воспитатели
      <hr />
    </h1>
    <div class="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
      <div
        class="col-md-3 g-2 rounded py-2 mx-2 frame justify-content-center d-flex flex-column"
        v-for="card in cards8"
        :key="card.email"
        style="background-color: #0077ff"
      >
        <p class="fw-bold text-light m-0 ms-1">{{ card.name }}</p>
        <p class="fw-medium text-light p-0 m-0 ms-1 job">
          {{ card.jobTitle }}
        </p>
        <a :href="`mailto:${card.email}`" class="ms-1 fw-medium text-light">{{
          card.email
        }}</a>
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
          imgPath: require("../assets/jihc/comand/AlisherAgai.avif"),
          jobTitle: "Директор",
          name: "Алишер Бодаубеков",
          email: "alisher.bodaubekov@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Ержан Койшибеков.avif"),
          jobTitle: "Заместитель директора по учебно-методической работе",
          name: "Ержан Койшибеков",
          email: "erzhan.koishybekov@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Бақытжан Қазанғапов.avif"),
          jobTitle: "Заместитель директора по воспитательной работе",
          name: "Бақытжан Қазанғапов",
          email: "bakytzhan.kazangapov@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Сарманов Айдос.avif"),
          jobTitle: "Заместитель директора по воспитательной работе",
          name: "Айдос Сарманов",
          email: "aidos.sarmanov@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Ақжан Нұрекеева.avif"),
          jobTitle: "Заместитель директора по воспитательной работе",
          name: "Ақжан Нұрекеева",
          email: "akzhan.nurkeyeva@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Жолдыбаева Тамара .avif"),
          jobTitle: "Заместитель директора по воспитательной работе",
          name: "Каримбердиева Тамара",
          email: "tamara.zholdybaeva@jihc.kz",
        },
        /*   {
          imgPath: require("../assets/jihc/comand/Нұржан Сағындық.avif"),
          jobTitle: "Учитель IT",
          name: "Нұржан Сағындық",
          email: "nurzhan.sagyndyq@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Саулебекова Данагуль.avif"),
          jobTitle: "Учитель английского языка ",
          name: "Данагуль Саулебекова",
          email: "danagul.saulebekova@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Айжан Бердибаева.avif"),
          jobTitle: "Учитель учета и аудита",
          name: "Айжан Бердибаева",
          email: "aizhan.berdibayeva@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Анарбеков Алмаз.avif"),
          jobTitle: "Учитель IT",
          name: "Алмаз Анарбеков",
          email: "almaz.anarbekov@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Тоқтасын-Олжас.avif"),
          jobTitle: "Учитель IT",
          name: "Олжас Тоқтасын",
          email: "olzhas.toktassyn@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Жүнісов Əлишер .avif"),
          jobTitle: "Учитель IT",
          name: "Әлишер Жүнісов",
          email: "alisher.zhunissov@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Бахытжан Мыктыбаев.avif"),
          jobTitle: "Учитель IT",
          name: "Бахытжан Мықтыбаев",
          email: "bakhytzhan.myktybayev@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Жаныбек Айбол .avif"),
          jobTitle: "Учитель IT",
          name: "Айбол Жаныбек",
          email: "aibol.zhanybek@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Алекулов Жангерхан.avif"),
          jobTitle: "Учитель IT",
          name: "Жангерхан Алекулов",
          email: "zhangerkhan.alekulov@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Жүрсін Дархан.avif"),
          jobTitle: "Учитель IT",
          name: "Дархан Жүрсін",
          email: "darkhan.zhursin@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Егембердиева Мадина .avif"),
          jobTitle: "Учитель IT",
          name: "Мадина Егембердиева",
          email: "madina.egemberdieva@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Тəжібаева-Жансая.avif"),
          jobTitle: "Учитель IT",
          name: "Жансая Тәжібаева",
          email: "zhansaya.tazhibayeva@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/MereyAgay.avif"),
          jobTitle: "Учитель ",
          name: "Мерей Мейрам",
          email: "merey.meiram@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Қарлығаш Тұрар .avif"),
          jobTitle: "Учитель IT",
          name: "Қарлығаш Тұрар",
          email: "qarlygash.turar@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Ернар Кудайбергенов .avif"),
          jobTitle: "Учитель экономики ",
          name: "Ернар Кудайбергенов",
          email: "yernar.kudaibergenov@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Нұргүл Тоқтар .avif"),
          jobTitle: "Учитель ",
          name: "Нұргүл Тоқтар",
          email: "nurgul.toktar@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Шынар-Алтынбекова.avif"),
          jobTitle: "Учитель менеджмента",
          name: "Шынар Алтынбекова",
          email: "shynar.altynbekova@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Нурипа Куандыкова .avif"),
          jobTitle: "Учитель",
          name: "Нурипа Куандыкова",
          email: "nuripa.kuandykova@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Емел Картав.avif"),
          jobTitle: "Учитель турецкого языка ",
          name: "Емел Картав",
          email: "emel.kartav@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Зейнеп Қанатқызы .avif"),
          jobTitle: "Учитель английского языка ",
          name: "Зейнеп Қанатқызы",
          email: "zeinep.kanatkyzy@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Азиза Саясатова.avif"),
          jobTitle: "Учитель английского языка ",
          name: "Азиза Саясатова",
          email: "aziza.sayassatova@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Назкен Бекхалиева .avif"),
          jobTitle: "Учитель английского языка ",
          name: "Назкен Бекхалиева",
          email: "nazken.bekkhaliyeva@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Замира Қырықбаева .avif"),
          jobTitle: "Учитель английского языка ",
          name: "Замира Қырықбаева",
          email: "zamira.kyrykbayeva@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Бөкейхан Қалдыбек.avif"),
          jobTitle: "Учитель физики",
          name: "Бөкейхан Қалдыбек",
          email: "bokeikhan.qaldybek@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Қаламқас Алиева .avif"),
          jobTitle: "Учитель математики",
          name: "Қаламқас Алиева",
          email: "kalamkas.aliyeva@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Баян Жырғау.avif"),
          jobTitle: "Учитель математики",
          name: "Баян Жырғау",
          email: "bayan.zhyrgau@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Ғазизбек Курышбекович.avif"),
          jobTitle: "Учитель ",
          name: "Ғазизбек Курышбекович",
          email: "gaziz.janayev@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Әмірхан Әлі Әсем .avif"),
          jobTitle: "Психолог ",
          name: "Әсем Әмірхан Әлі",
          email: "assem.amirkhan-ali@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Ержан Ахмет.avif"),
          jobTitle: "Учитель истории ",
          name: "Ержан Ахмет",
          email: "erzhan.ahmet@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Ғайша Тулегенова.avif"),
          jobTitle: "Учитель истории",
          name: "Ғайша Тулегенова",
          email: "gaysha.tulegenova@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Тұмар-Азамат.avif"),
          jobTitle: "Учитель биологии ",
          name: "Тұмар Азамат",
          email: "tumar.azamat@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Ажар Бейсембек.avif"),
          jobTitle: "Учитель химии",
          name: "Ажар Бейсембек",
          email: "azhar.beisembek@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Айгерим Ахметова.avif"),
          jobTitle: "Учитель географии",
          name: "Айгерим Ахметоваи",
          email: "aygerim.akhmetova@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Гулзада Курманбаева .avif"),
          jobTitle: "Учитель казахского языка ",
          name: "Гулзада Курманбаева",
          email: "gulzada.kurmanbayeva@jihc.kzz",
        },
        {
          imgPath: require("../assets/jihc/comand/Қанат Тилентаев .avif"),
          jobTitle: "Учитель физкультуры",
          name: "Қанат Тилентаев",
          email: "kanat.tilentayev@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Мухтар Ниязов.avif"),
          jobTitle: "Учитель НВП",
          name: "Мухтар Ниязов",
          email: "muhtar.niyazov@jihc.kz",
        },
        {
          imgPath: require("../assets/jihc/comand/Гульнур Ахметова.avif"),
          jobTitle: "Учитель физкультуры",
          name: "Гульнур Ахметова",
          email: "gulnur.akhmetova@jihc.kz",
        }, */
      ],
      cards2: [
        {
          name: "Кенжебаев Ерлан Бахытұлы",
          jobTitle: "Заведующий по хозяйственной части",
          email: "yerlan.kenzhebayev@jihc.kz",
        },
        {
          name: "Оспанов Максат Болатулы",
          jobTitle:
            "Инспектор по кадрам, заместитель директора по связям с общественностью",
          email: "maksat.ospanov@jihc.kz",
        },
        {
          name: "Исабекова Дарина Өміржанқызы",
          jobTitle: "Главный бухгалтер",
          email: "darina.issabekova@jihc.kz",
        },
        {
          name: "Машанло Ихтина Джумазовна",
          jobTitle: "Бухгалтер",
          email: "имейл",
        },
        {
          name: "Рахманкулова Гульдана Мадыхановна",
          jobTitle: "Экономист",
          email: "rahmankulova.g@jihc.kz",
        },
        {
          name: "Тоқтар Нұргүл Ауесхановна",
          jobTitle: "Методист, офис - регистратор",
          email: "nurgul.toktar@jihc.kz",
        },
        {
          name: "Елеусіз Жансая Оңғарбекқызы",
          jobTitle: "Секретарь отдела образования",
          email: "zhansaya.yeleusiz@jihc.kz",
        },
        {
          name: "Сарымбетова Алия Аскаровна",
          jobTitle: "Социальный педагог",
          email: "aliya.sarymbetova@jihc.kz",
        },
        {
          name: "Әмірхан Әлі Әсем",
          jobTitle: "Психолог",
          email: "assem.amirkhan-ali@jihc.kz",
        },
        {
          name: "Джанаев Ғазизбек Курышбекович",
          jobTitle: "Руководитель отдела планирования карьеры",
          email: "gaziz.janayev@jihc.kz",
        },
        {
          name: "Жүнісбай Ақерке Болатқызы",
          jobTitle: "Медсестра",
          email: "akerke.zhunisbay@jihc.kz",
        },
        {
          name: "Кулмаханбетова Бибинур Ермековна",
          jobTitle: "Библиотекарь",
          email: "bibinur.kulmahanetova@jihc.kz",
        },
        {
          name: "Сарымбетов Ерболат Аскарович",
          jobTitle: "Системный администратор - программист",
          email: "yerbolat.sarymbetov@jihc.kz",
        },
      ],
      cards3: [
        {
          name: "Саулебекова Данагуль Мирамбековна",
          jobTitle: "Учитель английского языка, руководитель кафедры",
          email: "dana.saulebekova@jihc.kz",
        },
        {
          name: "Бекхалиева Назкен Бакытгалиевна",
          jobTitle: "Учитель английского языка",
          email: "nazken.bekkhaliyeva@jihc.kz",
        },
        {
          name: "Қанатқызы Зейнеп",
          jobTitle: "Учитель английского языка",
          email: "zeinep.kanatkyzy@jihc.kz",
        },
        {
          name: "Қырықбаева Замира Дәурбекқызы",
          jobTitle: "Учитель английского языка",
          email: "zamira.kyrykbayeva@jihc.kz",
        },
        {
          name: "Саясатова Азиза Жанатбекқызы",
          jobTitle: "Учитель английского языка",
          email: "aziza.sayassatova@jihc.kz",
        },
        {
          name: "Курманбаева Гулзада Меирбековна",
          jobTitle: "Учитель казахского языка и литературы",
          email: "gulzada.kurmanbayeva@jihc.kz",
        },
        {
          name: "Эмэл Картав",
          jobTitle: "Учитель турецкого языка",
          email: "emel.kartav@jihc.kz",
        },
        {
          name: "Жолдыбаева Тамара Каримбердиевнаа",
          jobTitle: "Учитель русского языка",
          email: "tamara.zholdybaeva@jihc.kz",
        },
      ],
      cards4: [
        {
          name: "Тулегенова Ғайша Анафияевна",
          jobTitle: "Учитель истории, руководитель кафедры",
          email: "gaysha.tulegenova@jihc.kz",
        },
        {
          name: "Ахмет Ержан Ерболатұлы",
          jobTitle: "Учитель истории",
          email: "erzhan.ahmet@jihc.kz",
        },
        {
          name: "Ахметова Айгерим Кайратовна",
          jobTitle: "Учитель географии",
          email: "aygerim.akhmetova@jihc.kz",
        },
        {
          name: "Ниязов Мухтар Яхшибаевич",
          jobTitle: "Учитель НВП",
          email: "muhtar.niyazov@jihc.kz",
        },
        {
          name: "Тилентаев Қанат Берикбаевич",
          jobTitle: "Учитель физкультуры",
          email: "kanat.tilentayev@jihc.kz",
        },
        {
          name: "Ахметова Гульнур Абрахимовна",
          jobTitle: "Учитель физкультуры",
          email: "gulnur.akhmetova@jihc.kz",
        },
      ],
      cards5: [
        {
          name: "Алиева Қаламқас Жанбырқызы",
          jobTitle: "Учитель математики, руководитель кафедры",
          email: "kalamkas.aliyeva@jihc.kz",
        },
        {
          name: "Жырғау Баян",
          jobTitle: "Учитель математики",
          email: "bayan.zhyrgau@jihc.kz",
        },
        {
          name: "Нұрекеева Ақжан Еркінқызы",
          jobTitle: "Учитель математики",
          email: "akzhan.nurkeyeva@jihc.kz",
        },
        {
          name: "Бейсембек Ажар Канаткызы",
          jobTitle: "Учитель химии",
          email: "azhar.beisembek@jihc.kz",
        },
        {
          name: "Қалдыбек Бөкейхан Мұхтарұлы",
          jobTitle: "Учитель физики",
          email: "bokeikhan.qaldybek@jihc.kz",
        },
        {
          name: "Койшибеков Ержан Аманжолович",
          jobTitle: "Учитель физики",
          email: "erzhan.koishybekov@jihc.kz",
        },
        {
          name: "Азамат Тұмар Азаматқызы",
          jobTitle: "Учитель биологии",
          email: "tumar.azamat@jihc.kz",
        },
      ],
      cards6: [
        {
          name: "Мыктыбаев Бахытжан Курбанович",
          jobTitle: "Учитель ИТ, заместитель директора по ИТ",
          email: "bakhytzhan.myktybayev@jihc.kz",
        },
        {
          name: "Тəжібаева Жансая Әбуқызы",
          jobTitle: "Учитель ИТ, Заведующий общежития",
          email: "zhansaya.tazhibayeva@jihc.kz",
        },
        {
          name: "Егембердиева Мадина Мелисовна",
          jobTitle: "Учитель ИТ",
          email: "madina.egemberdieva@jihc.kz",
        },
        {
          name: "Жүнісов Əлишер Ғалымжанұлы",
          jobTitle: "Учитель ИТ, инспектор по делам молодежи",
          email: "alisher.zhunissov@jihc.kz",
        },
        {
          name: "Алекулов Жангерхан Серикович",
          jobTitle: "Учитель ИТ",
          email: "zhangerkhan.alekulov@jihc.kz",
        },
        {
          name: "Сағындық Нұржан Нұрмұратұлы",
          jobTitle: "Учитель ИТ",
          email: "nurzhan.sagyndyq@jihc.kz",
        },
        {
          name: "Жаныбек Айбол Жаныбекұлы",
          jobTitle: "Учитель ИТ",
          email: "aibol.zhanybek@jihc.kz",
        },
        {
          name: "Мейрам Мерей Бейбітұлы",
          jobTitle: "Учитель ИТ",
          email: "merey.meiram@jihc.kz",
        },
        {
          name: "Тоқтасын Олжас Тоқтарбекұлы",
          jobTitle: "Учитель ИТ, Заведующий общежития",
          email: "olzhas.toktassyn@jihc.kz",
        },
        {
          name: "Анарбеков Алмаз Нурболұлы",
          jobTitle: "Учитель ИТ",
          email: "almaz.anarbekov@jihc.kz",
        },
        {
          name: "Қазанғапов Бақытжан Айтуғанұлы",
          jobTitle: "Учитель ИТ",
          email: "bakytzhan.kazangapov@jihc.kz",
        },
      ],
      cards7: [
        {
          name: "Бердибаева Айжан Амантаевна",
          jobTitle: "Преподаватель по финансам",
          email: "aizhan.berdibayeva@jihc.kz",
        },
        {
          name: "Тұрар Қарлығаш Қайратқызы",
          jobTitle: "Преподаватель по бухгалтерскому учету и 1С",
          email: "qarlygash.turar@jihc.kz",
        },
        {
          name: "Кудайбергенов Ернар Кайратович",
          jobTitle: "Преподаватель экономики и маркетинга",
          email: "yernar.kudaibergenov@jihc.kz",
        },
        {
          name: "Куандыкова Нурипа Таласбаевна",
          jobTitle: "Преподаватель по учету и аудиту",
          email: "nuripa.kuandykova@jihc.kz",
        },
        {
          name: "Алтынбекова Шынар Жұмабекқызы",
          jobTitle: "Преподаватель по менеджменту",
          email: "shynar.altynbekova@jihc.kz",
        },
        {
          name: "Айткүл Аппасова",
          jobTitle: "преподаватель бухгалтерского учета и 1С",
          email: "aitkul.appasova@jihc.kz",
        },
      ],
      cards8: [
        {
          name: "Абдуллаева Жансая Тимурқызы",
          jobTitle: "Воспитатель",
          email: "zhansaya.abdullayeva@jihc.kz",
        },
        {
          name: "Балтабай Нұрбибі Серікқызы",
          jobTitle: "Воспитатель",
          email: "nurbibi.baltabai@jihc.kz",
        },
        {
          name: "Дүйсенбай Назерке Дінмұхамедқызы",
          jobTitle: "Воспитатель",
          email: "nazerke.duisenbai@jihc.kz",
        },
        {
          name: "Салқанова Нұрдана Талғатқызы",
          jobTitle: "Воспитатель",
          email: "nurdana.salkanova@jihc.kz",
        },
        {
          name: "Мусабаева Ұлжан Абдигаппарқызы",
          jobTitle: "Воспитатель",
          email: "ulzhan.musabaeva@jihc.kz",
        },
        {
          name: "Ермаханова Айдана Жарқынханқызы",
          jobTitle: "Воспитатель",
          email: "aidana.yermakhanova@jihc.kz",
        },
        {
          name: "Әкім Ырыс Әшімқызы",
          jobTitle: "Воспитатель",
          email: "yrys.akim@jihc.kz",
        },
        {
          name: "Божбанбай Нұрай Арманқызы",
          jobTitle: "Воспитатель",
          email: "nurai.bozhbanbai@jihc.kz",
        },
        {
          name: "Естемес Тоқжан Мұхитқызы",
          jobTitle: "Воспитатель",
          email: "tokzhan.estemes@jihc.kz",
        },
        {
          name: "Алтынбекова Ақерке Нұрланқызы",
          jobTitle: "Воспитатель",
          email: "akerke.altynbekova@jihc.kz",
        },
        {
          name: "Мактабаева Сымбат Муратбековна",
          jobTitle: "Воспитатель",
          email: "maktabayeva.symbat@jihc.kz",
        },
        {
          name: "Абдылдаева Ақмарал Нұрланқызы",
          jobTitle: "Воспитатель",
          email: "akmaral.abdyldaeva@jihc.kz",
        },
        {
          name: "Балтабай Әкімжан Сакенұлы",
          jobTitle: "Воспитатель",
          email: "akimzhan.baltabay@jihc.kz",
        },
        {
          name: "Марат Арсен Асқарұлы",
          jobTitle: "Воспитатель",
          email: "arsen.marat@jihc.kz",
        },
        {
          name: "Жұмабай Бекзат Берікұлы",
          jobTitle: "Воспитатель",
          email: "bekzat.zhumabay@jihc.kz",
        },
        {
          name: "Ерғали Айдос Ерғалиұлы",
          jobTitle: "Воспитатель",
          email: "aidos.yergali@jihc.kz",
        },
        {
          name: "Елшібек Жандос Маратұлы",
          jobTitle: "Воспитатель",
          email: "zhandos.yelshibek@jihc.kz",
        },
        {
          name: "Өмірзақ Бекзат",
          jobTitle: "Воспитатель",
          email: "bekzat.omirzak@jihc.kz",
        },
        {
          name: "Қадырбек Мақсат Ерболатұлы",
          jobTitle: "Воспитатель",
          email: "maksat.kadyrbek@jihc.kz",
        },
        {
          name: "Абдурашидов Давронбек Мухитдинович",
          jobTitle: "Воспитатель",
          email: "davronbek.abdurashidov@jihc.kz",
        },
        {
          name: "Даулетұлы Даниал",
          jobTitle: "Воспитатель",
          email: "danial.dauletuly@jihc.kz",
        },
        {
          name: "Әбзелбек Ағасұлтан Нұрғалиұлы",
          jobTitle: "Воспитатель",
          email: "agasultan.abzelbek@jihc.kz",
        },
        {
          name: "Гулиев Бахтияр Махаматович",
          jobTitle: "Воспитатель",
          email: "bakhtiyar.guliyev@jihc.kz",
        },
        {
          name: "Ашимбеков Алмас Талғатұлы",
          jobTitle: "Воспитатель",
          email: "almas.ashimbekov@jihc.kz",
        },
      ],
    };
  },
};
</script>

<style scoped>
.job {
  line-height: 16px;
  font-size: 12px;
}
.frame {
  max-width: 213px;
}
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
