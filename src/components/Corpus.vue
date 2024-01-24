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
  <!-- <div class="pt-5 d-flex justify-content-center container">
    <img src="../assets/cor14.png" alt="" class="img-fluid" />
  </div> -->
  <!-- HTML with Bootstrap classes -->
  <div class="container-xl position-relative p-0 mx-auto text-center map mt-5">
    <img
      src="../assets/obzorcollege.png"
      alt="College Overview"
      class="img-fluid mx-auto d-block"
    />
    <a href="link-to-location-1" class="map-link link1" style="top: 0.7%"
      >СПОРТЗАЛ</a
    >
    <a href="link-to-location-2" class="map-link link2" style="top: 260px"
      >ФУТБОЛЬНОЕ ПОЛЕ</a
    >
    <a
      href="link-to-location-2"
      class="map-link link3"
      style="top: 3px; text-align: start"
      >КОРПУС В (ОБЩЕЖИТИЕ ДЛЯ МАЛЬЧИКОВ И ДЕВОЧЕК)</a
    >
    <a href="link-to-location-2" class="map-link link4" style="top: 33px"
      >ПРАЧЕЧНАЯ</a
    >
    <a
      href="link-to-location-2"
      class="map-link link5"
      style="top: 108px; text-align: start"
      >БЕСЕДКА ДЛЯ БАРБЕКЮ</a
    >
    <a href="link-to-location-2" class="map-link link6" style="top: 275px"
      >СТОЛОВАЯ</a
    >
    <a
      href="link-to-location-2"
      class="map-link link7"
      style="top: 426px; text-align: start"
      >КОРПУС А (учебный корпус + актовый зал)</a
    >
    <!-- Add more links as needed -->
  </div>

  <div class="container position-relative p-0 text-center map2 mt-5" style="">
    <img src="../assets/map2.png" alt="College Overview" class="img-fluid" />
    <a href="link-to-location-1" class="map-link map-link1" style="top: 27.7%"
      >СПОРТЗАЛ</a
    >
    <a href="link-to-location-2" class="map-link map-link2" style="top: 50%"
      >ФУТБОЛЬНОЕ ПОЛЕ</a
    >
    <a
      href="link-to-location-2"
      class="map-link map-link3"
      style="top: 6.7%; font-weight: 600; text-align: start"
      >КОРПУС В И ОБЩЕЖИТИЕ</a
    >
    <a
      href="link-to-location-2"
      class="map-link map-link4"
      style="top: 20.5%; font-weight: 600"
      >ПРАЧЕЧНАЯ</a
    >
    <a
      href="link-to-location-2"
      class="map-link map-link5"
      style="top: 44%; text-align: start; font-weight: 600"
      >БЕСЕДКА ДЛЯ БАРБЕКЮ</a
    >
    <a
      href="link-to-location-2"
      class="map-link map-link6"
      style="top: 49%; font-weight: 600"
      >СТОЛОВАЯ</a
    >
    <a
      href="link-to-location-2"
      class="map-link map-link7"
      style="top: 72.5%; text-align: start; font-weight: 600"
      >КОРПУС А (учебный <br />корпус + актовый зал)</a
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagePath: require("../assets/cor14.png"),
    };
  },
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

/* Custom CSS */
.container-xl.position-relative {
  /* margin-left: auto; */
  /* margin-right: auto; */
}

.map-link {
  position: absolute;
  display: block;
  /* Style your links as needed */
  color: #000;
  text-decoration: none;
  transform: translate(-50%, -50%); /* Adjust as necessary for positioning */
  z-index: 10; /* Ensure the z-index is high enough to be above the image */
}

@media (max-width: 1250px) {
  .map-link1 {
    font-weight: 600;
    font-size: 15px;
    left: 31.5%;
  }
  .map-link2 {
    font-weight: 600;
    font-size: 14px;
    left: 25.5%;
  }
  .map-link3 {
    font-weight: 600;
    font-size: 13px;
    left: 68.5%;
  }
  .map-link4 {
    font-weight: 600;
    font-size: 13px;
    left: 77.5%;
  }
  .map-link5 {
    font-weight: 600;
    font-size: 13px;
    left: 49.5%;
  }
  .map-link6 {
    font-weight: 600;
    font-size: 13px;
    left: 71.5%;
  }
  .map-link7 {
    font-weight: 600;
    font-size: 14px;
    left: 51.5%;
  }
}
@media (max-width: 992px) {
  .map-link1 {
    left: 25.5%;
  }
  .map-link2 {
    left: 17.5%;
  }
  .map-link3 {
    left: 74.5%;
    font-size: 13px;
  }
  .map-link4 {
    left: 86.5%;
    font-size: 13px;
  }
  .map-link6 {
    left: 78.5%;
    font-size: 13px;
  }
}
@media (max-width: 769px) {
  .map-link1 {
    font-weight: 600;
    font-size: 13px;
    left: 22.5%;
  }
  .map-link2 {
    font-weight: 600;
    font-size: 11px;
    left: 13.5%;
  }
  .map-link3 {
    font-weight: 600;
    font-size: 10px;
    left: 76.5%;
    flex-wrap: nowrap;
  }
  .map-link4 {
    font-weight: 600;
    font-size: 10px;
    left: 90.5%;
    flex-wrap: nowrap;
  }
  .map-link5 {
    font-weight: 600;
    font-size: 10px;
    left: 49.5%;
    flex-wrap: nowrap;
  }
  .map-link6 {
    font-weight: 600;
    font-size: 10px;
    left: 82.5%;
    flex-wrap: nowrap;
  }
  .map-link7 {
    font-weight: 600;
    font-size: 10px;
    left: 51.5%;
    flex-wrap: nowrap;
  }
}
@media (max-width: 576px) {
  .map-link1 {
    font-weight: 600;
    font-size: 12px;
    left: 22.5%;
  }
  .map-link4 {
    font-weight: 600;
    font-size: 12px;
    left: 90.5%;
  }
}
@media (max-width: 515px) {
  .map-link1 {
    left: 22.5%;
    font-weight: 600;
    font-size: 9px;
  }
  .map-link2 {
    left: 14.5%;
    font-weight: 600;
    font-size: 9px;
  }
  .map-link3 {
    left: 78.5%;
    font-weight: 600;
    font-size: 8px;
    width: 110px;
  }
  .map-link4 {
    left: 90.5%;
    font-weight: 600;
    font-size: 9px;
  }
  .map-link5 {
    font-weight: 600;
    font-size: 9px;
  }
  .map-link6 {
    font-weight: 600;
    font-size: 9px;
  }
  .map-link7 {
    font-weight: 600;
    font-size: 9px;
  }
}
@media (max-width: 430px) {
  .map-link2 {
    font-weight: 600;
    font-size: 8px;
    flex-wrap: nowrap;
    left: 13.7%;
  }
  .map-link3 {
    left: 78.5%;
    font-weight: 600;
    font-size: 8px;
    flex-wrap: nowrap;
  }
  .map-link4 {
    font-weight: 600;
    font-size: 8px;
    flex-wrap: nowrap;
  }
  .map-link5 {
    font-weight: 600;
    font-size: 8px;
    flex-wrap: nowrap;
  }
  .map-link6 {
    font-weight: 600;
    font-size: 8px;
    flex-wrap: nowrap;
  }
  .map-link7 {
    font-weight: 600;
    font-size: 8px;
    flex-wrap: nowrap;
  }
}

@media (min-width: 1401px) {
  .link1 {
    left: 27%;
  }
  .link2 {
    left: 9%;
  }
  .link3 {
    left: 74%;
  }
  .link4 {
    left: 87%;
  }
  .link5 {
    left: 91%;
  }
  .link6 {
    left: 89%;
  }
  .link7 {
    left: 89%;
  }
}

@media (max-width: 1250px) {
  .map {
    display: none;
  }
}
@media (min-width: 1250px) {
  .map2 {
    display: none;
  }
}
/* When the viewport width is less than or equal to 1400px */
@media (max-width: 1400px) {
  .link1 {
    left: 23%;
  }
  .link2 {
    left: 2%;
  }
  .link3 {
    left: 75%;
  }
  .link4 {
    left: 93%;
  }
  .link5 {
    left: 95%;
  }
  .link6 {
    left: 95%;
  }
  .link7 {
    left: 92%;
  }
}
</style>
