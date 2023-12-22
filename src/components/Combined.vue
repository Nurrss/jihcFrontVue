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
        class="navbar navbar-expand-lg py-2"
        aria-label="Twelfth navbar example"
      >
        <div class="container-fluid container">
          <a class="navbar-brand" href="#"
            ><img
              src="../assets/jihc-logo-png-v1.png"
              alt=""
              style="width: 150px; height: 45px"
          /></a>
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
                    <a class="dropdown-item" href="#">История колледжа</a>
                  </li>
                  <li><a class="dropdown-item" href="#">Важные факты</a></li>
                  <li>
                    <a class="dropdown-item" href="#"
                      >Лицензии и Аккредитация</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Команда</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">НПА</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Попечительский совет</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"
                      >Лицензии и Аккредитация</a
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
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
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
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
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
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
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
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
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
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
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
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
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
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
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
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
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
