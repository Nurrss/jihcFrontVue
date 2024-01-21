<template>
  <div class="mt-5 bg text-light">
    <footer class="container py-5">
      <div class="row gap-5">
        <div class="col-6 col-md-4 mb-2">
          <h5 class="mb-4">
            {{ $t("FooterH1") }}
          </h5>
          <ul class="nav flex-column text-light gap-3">
            <li class="nav-item mb-2">
              <a class="navbar-brand d-flex align-self-center" href="#">
                <i
                  class="bi bi-envelope me-3 h3 m-0"
                  style="display: list-item; align-items: center"
                ></i>
                jambyl.innovation@jihc.kz
              </a>
            </li>
            <li class="nav-item mb-2">
              <a
                class="navbar-brand d-flex align-self-center"
                href="https://api.whatsapp.com/send/?phone=77078020088&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%D0%9F%D0%B8%D1%88%D1%83+%D0%B8%D0%B7+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F+2%D0%93%D0%98%D0%A1.%0A%0A&type=phone_number&app_absent=0"
              >
                <i
                  class="bi bi-telephone me-3 h3 m-0"
                  style="display: list-item; align-items: center"
                ></i>
                +7 747 723 1289
              </a>
            </li>
            <li class="nav-item mb-2">
              <a
                class="navbar-brand d-flex align-self-center"
                href="https://go.2gis.com/vda30k"
              >
                <i
                  class="bi bi-geo-alt-fill me-3 h3 m-0"
                  style="display: list-item; align-items: center"
                ></i>
                {{ $t("FooterL1") }}
              </a>
            </li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3 me-5">
          <h5 class="mb-4">
            {{ $t("FooterH2") }}
          </h5>
          <ul class="nav flex-column text-light gap-3">
            <li class="nav-item mb-2">
              <a
                class="navbar-brand d-flex align-self-center"
                href="https://www.instagram.com/jihc.kz/"
              >
                <i
                  class="bi bi-instagram me-3 h3 m-0"
                  style="display: list-item; align-items: center"
                ></i>
                jihc.kz
              </a>
            </li>
            <li class="nav-item mb-2">
              <a
                class="navbar-brand d-flex align-self-center"
                href="https://www.facebook.com/jihc_kz/"
              >
                <i
                  class="bi bi-facebook me-3 h3 m-0"
                  style="display: list-item; align-items: center"
                ></i>
                jihc_kz
              </a>
            </li>
            <li class="nav-item mb-2">
              <a
                class="navbar-brand d-flex align-self-center"
                href="https://www.youtube.com/@jihctv2095"
              >
                <i
                  class="bi bi-youtube me-3 h3 m-0"
                  style="display: list-item; align-items: center"
                ></i>
                JIHC TV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  background-color: #0077ff;
}
</style>
