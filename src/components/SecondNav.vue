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
              href="#"
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
  methods: {
    changeLanguage(locale, langName) {
      this.$i18n.locale = locale;
      this.currentLangName = langName;
      this.$root.$emit("changeLocale", locale);
    },
    getLangName(locale) {
      // Add logic to get the language name based on the locale
      if (locale === "kz") {
        return "Қаз";
      } else if (locale === "ru") {
        return "Рус";
      }
      // Add more languages as needed
      return locale; // Fallback to the locale if the name is not defined
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
