<template>
  <div
    id="myCarousel"
    class="container carousel slide mt-5"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="0"
        class=""
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
        class=""
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="2"
        aria-label="Slide 3"
        class="active"
        aria-current="true"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="3"
        aria-label="Slide 4"
        class="active"
        aria-current="true"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="4"
        aria-label="Slide 5"
        class="active"
        aria-current="true"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="5"
        aria-label="Slide 6"
        class="active"
        aria-current="true"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="6"
        aria-label="Slide 7"
        class="active"
        aria-current="true"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="7"
        aria-label="Slide 8"
        class="active"
        aria-current="true"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="8"
        aria-label="Slide 9"
        class="active"
        aria-current="true"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="9"
        aria-label="Slide 10"
        class="active"
        aria-current="true"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="10"
        aria-label="Slide 11"
        class="active"
        aria-current="true"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="11"
        aria-label="Slide 12"
        class="active"
        aria-current="true"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="12"
        aria-label="Slide 13"
        class="active"
        aria-current="true"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active crs-img-1"></div>
      <div class="carousel-item crs-img-2"></div>
      <div class="carousel-item crs-img-3"></div>
      <div class="carousel-item crs-img-4"></div>
      <div class="carousel-item crs-img-5"></div>
      <div class="carousel-item crs-img-6"></div>
      <div class="carousel-item crs-img-7"></div>
      <div class="carousel-item crs-img-8"></div>
      <div class="carousel-item crs-img-9"></div>
      <div class="carousel-item crs-img-10"></div>
      <div class="carousel-item crs-img-11"></div>
      <div class="carousel-item crs-img-12"></div>
      <div class="carousel-item crs-img-13"></div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="prev"
    >
      <img src="../assets/button_prev.png" alt="" />
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="next"
    >
      <img src="../assets/button_next.png" alt="" />
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <h2 class="m-5 text-center" style="color: #0077ff">{{ $t("CorpusH") }}</h2>
  <div class="">
    <div class="container">
      <p class="lead m-0">
        <span class="fw-bold">{{ $t("CorpusPBold") }}</span>
        {{ $t("CorpusP") }}
      </p>
      <p>
        {{ $t("CorpusP2") }}
      </p>
      <p>
        {{ $t("CorpusP3") }}
      </p>
      <p>
        {{ $t("CorpusP4") }}
      </p>
      <p>
        {{ $t("CorpusP5") }}
      </p>
      <p>
        {{ $t("CorpusP6") }}
      </p>
      <p>
        {{ $t("CorpusP7") }}
      </p>
    </div>
  </div>
  <div class="pt-5 d-flex justify-content-center container">
    <img src="../assets/cor14.png" alt="" class="img-fluid" />
  </div>
</template>

<script>
export default {
  name,
};
</script>

<style scoped>
.carousel-item {
  height: 460px;
}

.crs-img-1 {
  background: url("../assets/jihc/корпус/cor1.avif");
  background-size: cover;
  background-position: center;
  width: 100%;
}
.crs-img-2 {
  background: url("../assets/jihc/корпус/cor2.avif");
  background-size: cover;
  background-position: center;
  width: 100%;
}
.crs-img-3 {
  background: url("../assets/jihc/корпус/cor3.avif");
  background-size: cover;
  background-position: center;
  width: 100%;
}
.crs-img-4 {
  background: url("../assets/jihc/корпус/cor4.avif");
  background-size: cover;
  background-position: center;
  width: 100%;
}
.crs-img-5 {
  background: url("../assets/jihc/корпус/cor5.avif");
  background-size: cover;
  background-position: center;
  width: 100%;
}
.crs-img-6 {
  background: url("../assets/jihc/корпус/cor6.avif");
  background-size: cover;
  background-position: center;
  width: 100%;
}
.crs-img-7 {
  background: url("../assets/jihc/корпус/cor7.avif");
  background-size: cover;
  background-position: center;
  width: 100%;
}
.crs-img-8 {
  background: url("../assets/jihc/корпус/cor8.avif");
  background-size: cover;
  background-position: center;
  width: 100%;
}
.crs-img-9 {
  background: url("../assets/jihc/корпус/cor9.avif");
  background-size: cover;
  background-position: center;
  width: 100%;
}
.crs-img-10 {
  background: url("../assets/jihc/корпус/cor10.avif");
  background-size: cover;
  background-position: center;
  width: 100%;
}
.crs-img-11 {
  background: url("../assets/jihc/корпус/cor11.avif");
  background-size: cover;
  background-position: center;
  width: 100%;
}
.crs-img-12 {
  background: url("../assets/jihc/корпус/cor12.avif");
  background-size: cover;
  background-position: center;
  width: 100%;
}
.crs-img-13 {
  background: url("../assets/jihc/корпус/cor13.avif");
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
