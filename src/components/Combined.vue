<template>
  <div>
    <!-- Navbar for larger screens -->
    <div class="d-lg-block d-none d-xl-block d-xxl-block">
      <SecondNav />
      <ThirdNav />
    </div>

    <!-- Navbar for smaller screens (collapsed) -->
    <div class="d-lg-none">
      <nav
        class="navbar navbar-expand-lg py-2 sticky-top"
        aria-label="Twelfth navbar example"
      >
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
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Колледж
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link
                      to="/history"
                      exact
                      class="dropdown-item"
                      href="#"
                      >История колледжа</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/facts"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Важные факты</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/documents"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Документы</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/comand"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Команда</router-link
                    >
                  </li>

                  <li>
                    <router-link
                      to="/board"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Попечительский совет</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/structure"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Структура колледжа</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Поступление
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link
                      to="/profession"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Специальности</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/supplydocuments"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Подача документов</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/translate"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Перевод</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Специальности
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link to="/it" exact class="dropdown-item" href="#"
                      >Информационные системы <br />
                      и программное обеспечение</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/accounting"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Бухгалтерcкий учет</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/pedogogika"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Педагогика - математика</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Инфраструктура
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link
                      to="/labaratory"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Лаборатории</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/corpus"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Корпус</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/Dormitory"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Общежитие</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/sporthall"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Спортзал + поле</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/canteen"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Столовая</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Студентам
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link
                      to="/AcademCalendar"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Академический календарь</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/edupage"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Электронный журнал - Edupage</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/practica"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Практика</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/Career"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Карьера</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/careerguidance"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Проф. ориентация</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/comit"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Комитеты</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/studentlife"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Студенческая жизнь</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/dormitoryrools"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Дом студента</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Родителям
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link
                      to="/parentcomit"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Род. комитет</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/contact"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Контакты с колледжем</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/connectionteachers"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Связь с учителем</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Работадателям
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link
                      to="/partner"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Партнеры</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/preperationprof"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Подготовка специалистов</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Выпускникам
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link
                      to="/association"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Ассоциация</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/sponsorship"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Спонсорство</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Календарь
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link
                      to="/googlecalendar"
                      exact
                      class="dropdown-item"
                      href="#"
                      >Google Calendar</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Рус
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Каз</a></li>
                  <li><a class="dropdown-item" href="#">Рус</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import SecondNav from "./SecondNav.vue";
import ThirdNav from "./ThirdNav.vue";

export default {
  components: {
    SecondNav,
    ThirdNav,
  },
  methods: {},
  // Component logic goes here
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
