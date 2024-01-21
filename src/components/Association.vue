<template>
  <section id="info " class="mt-5 container">
    <div class="row">
      <div
        class="col-lg-6 col-md-6 col-sm-6 justify-content-center text-left infoS"
      >
        <h1 style="color: #0077ff">{{ $t("AsoocH1") }}</h1>
        <hr />
        <p class="">
          {{ $t("AssocP2") }}
        </p>
        <ul
          class="navbar-nav justify-content-end flex-grow-1 pe-3 align-self-center d-flex"
        >
          <li class="nav-item me-3">
            <div
              class="nav-link active d-flex align-self-center"
              style="display: list-item; align-items: center"
              aria-current="page"
              href="#"
            >
              <i class="bi m-0 me-2"><img src="../assets/like.png" alt="" /></i>
              <p class="m-0">
                {{ $t("AssocP3") }}
              </p>
            </div>
          </li>
          <li class="nav-item me-3">
            <div
              class="nav-link active d-flex align-self-center"
              style="display: list-item; align-items: center"
              aria-current="page"
              href="#"
            >
              <i class="bi m-0 me-2"><img src="../assets/like.png" alt="" /></i>
              <p class="m-0">{{ $t("AssocP4") }}</p>
            </div>
          </li>
          <li class="nav-item me-3">
            <div
              class="nav-link active d-flex align-self-center"
              style="display: list-item; align-items: center"
              aria-current="page"
              href="#"
            >
              <i class="bi m-0 me-2"><img src="../assets/like.png" alt="" /></i>
              <p class="m-0">{{ $t("AssocP5") }}</p>
            </div>
          </li>
          <li class="nav-item me-3">
            <div
              class="nav-link active d-flex align-self-center"
              style="display: list-item; align-items: center"
              aria-current="page"
              href="#"
            >
              <i class="bi m-0 me-2"><img src="../assets/like.png" alt="" /></i>
              <p class="m-0">{{ $t("AssocP6") }}</p>
            </div>
          </li>
          <li class="nav-item me-3">
            <div
              class="nav-link active d-flex align-self-center"
              style="display: list-item; align-items: center"
              aria-current="page"
              href="#"
            >
              <i class="bi m-0 me-2"><img src="../assets/like.png" alt="" /></i>
              <p class="m-0">{{ $t("AssocP7") }}</p>
            </div>
          </li>
          <li class="nav-item me-3">
            <div
              class="nav-link active d-flex align-self-center"
              style="display: list-item; align-items: center"
              aria-current="page"
              href="#"
            >
              <i class="bi m-0 me-2"><img src="../assets/like.png" alt="" /></i>
              <p class="m-0">{{ $t("AssocP8") }}</p>
            </div>
          </li>
        </ul>
      </div>

      <img
        src="../assets/studentlifecard1.png"
        alt=""
        class="col-lg-6 col-md-6 col-sm-6 align-self-center mt-4"
      />
    </div>
    <div class="row container mb-5 d-flex justify-content-center">
      <div class="size text-center">
        <h1 class="mt-5" style="color: #0077ff">
          {{ $t("AsoocH2") }}
          <hr />
        </h1>
        <p>
          {{ $t("AssocP9") }}
        </p>
      </div>

      <div
        id="myCarousel"
        class="container carousel slide mt-5"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active crs-img-11"></div>
        </div>
      </div>
    </div>
    <div class="row container mb-5 d-flex justify-content-center">
      <div class="size text-center">
        <h1 class="" style="color: #0077ff">
          {{ $t("AsoocH3") }}
          <hr />
        </h1>
        <p>
          {{ $t("AssocP10") }}
        </p>
      </div>

      <div
        id="myCarousel"
        class="container carousel slide mt-5"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active crs-img-21"></div>
        </div>
      </div>
    </div>
    <div class="row container mb-5 d-flex justify-content-center">
      <div class="size text-center">
        <h1 class="" style="color: #0077ff">
          {{ $t("AsoocH4") }}
          <hr />
        </h1>
        <p>
          {{ $t("AssocP11") }}
        </p>
      </div>

      <div
        id="myCarousel"
        class="container carousel slide mt-5"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active crs-img-31"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Jumbotron2",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-item {
  height: 460px;
}
.crs-img-11 {
  background: url("../assets/meetup.png");
  background-size: cover;
  background-position: center;
  width: 100%;
}
.crs-img-12 {
  background: url("../assets/meetup.png");
  background-size: cover;
  background-position: center;
  width: 100%;
}
.crs-img-13 {
  background: url("../assets/meetup.png");
  background-size: cover;
  background-position: center;
  width: 100%;
}
.crs-img-21 {
  background: url("../assets/event.png");
  background-size: cover;
  background-position: center;
  width: 100%;
}
.crs-img-22 {
  background: url("../assets/event.png");
  background-size: cover;
  background-position: center;
  width: 100%;
}
.crs-img-23 {
  background: url("../assets/event.png");
  background-size: cover;
  background-position: center;
  width: 100%;
}
.crs-img-31 {
  background: url("../assets/30year.png");
  background-size: cover;
  background-position: center;
  width: 100%;
}
.crs-img-32 {
  background: url("../assets/30year.png");
  background-size: cover;
  background-position: center;
  width: 100%;
}
.crs-img-33 {
  background: url("../assets/30year.png");
  background-size: cover;
  background-position: center;
  width: 100%;
}

@media (max-width: 991px) {
  .carousel-item {
    height: 350px;
  }
  .carousel-control-prev img,
  .carousel-control-next img {
    height: 8%;
  }
}

@media (max-width: 767px) {
  .carousel-item {
    height: 250px;
  }
  .carousel-control-next img {
    height: 8%;
  }
}
</style>
