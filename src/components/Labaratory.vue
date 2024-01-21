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
    </div>
    <div class="carousel-inner">
      <div class="carousel-item crs-img-1"></div>
      <div class="carousel-item crs-img-2"></div>
      <div class="carousel-item active crs-img-3"></div>
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
  <div class="text-center">
    <div class="container">
      <h2 class="m-5" style="color: #0077ff">{{ $t("LabH") }}</h2>
      <p class="lead m-0">
        {{ $t("LabP") }}
      </p>
    </div>
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
  background: url("../assets/jihc/лаб/lab1.avif");
  background-size: cover;
  background-position: center;
  width: 100%;
}
.crs-img-2 {
  background: url("../assets/jihc/лаб//lab2.avif");
  background-size: cover;
  background-position: center;
  width: 100%;
}
.crs-img-3 {
  background: url("../assets/jihc/лаб/lab3.avif");
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
