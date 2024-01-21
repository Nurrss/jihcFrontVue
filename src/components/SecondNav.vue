<template>
  <nav class="navbar navbar-expand-lg py-2" aria-label="Twelfth navbar example">
    <div class="container-fluid container">
      <router-link to="/" exact class="navbar-brand" href="#"
        ><img
          src="../assets/jihc-logo-png-v1.png"
          alt=""
          style="width: 150px; height: 45px"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample10"
        aria-controls="navbarsExample10"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-md-center"
        id="navbarsExample10"
      >
        <ul
          class="navbar-nav justify-content-end flex-grow-1 pe-3 align-self-center d-flex"
        >
          <li class="nav-item me-3">
            <a
              class="nav-link active d-flex align-self-center"
              style="display: list-item; align-items: center"
              aria-current="page"
              href="#"
              ><i class="bi bi-envelope h5 m-0 me-2"></i>
              <p class="m-0">
                {{ $t("SecondNavP1") }}

                <br />
                jambyl.innovation@jihc.kz
              </p></a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link active d-flex align-self-center"
              style="display: list-item; align-items: center"
              aria-current="page"
              href="https://api.whatsapp.com/send/?phone=77078020088&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%D0%9F%D0%B8%D1%88%D1%83+%D0%B8%D0%B7+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F+2%D0%93%D0%98%D0%A1.%0A%0A&type=phone_number&app_absent=0"
              ><i class="bi bi-telephone h5 m-0 me-2"></i>
              <p class="m-0">
                {{ $t("SecondNavP2") }}
                <br />
                +7 747 723 1289
              </p></a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle active"
              style="display: list-item; align-items: center"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="lang"
            >
              {{ currentLangName }}
            </a>
            <ul class="dropdown-menu">
              <li>
                <button
                  class="dropdown-item"
                  @click="changeLanguage('kz', 'Қаз')"
                >
                  Қаз
                </button>
              </li>
              <li>
                <button
                  class="dropdown-item"
                  @click="changeLanguage('ru', 'Рус')"
                >
                  Рус
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      currentLangName: this.getLangName(this.$i18n.locale),
    };
  },
  mounted() {
    // Set the default language to 'ru'
    this.$i18n.locale = "ru";
    this.currentLangName = this.getLangName("ru");
    this.$root.$emit("changeLocale", "ru");
  },
  methods: {
    changeLanguage(locale, langName) {
      this.$i18n.locale = locale;
      this.currentLangName = langName;
      this.$root.$emit("changeLocale", locale);
    },
    getLangName(locale) {
      if (locale === "kz") {
        return "Қаз";
      } else if (locale === "ru") {
        return "Рус";
      }
      return locale;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 990px) and (max-width: 1225px) {
  .navbar-nav > li > a {
    font-size: 10px;
  }
}
@media (min-width: 1225px) and (max-width: 1380px) {
  .navbar-nav > li > a {
    font-size: 14px;
  }
}
</style>
