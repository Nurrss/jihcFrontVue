<template>
  <div class="container text-center">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <div class="row gap-2 justify-content-center">
      <div class="col-md-7 rounded-4 mt-4 image1"></div>
      <div class="col-6 col-md-4 image2 rounded-4 mt-4"></div>
    </div>

    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
    <div class="row mb-4 gap-2 mt-3">
      <div class="col-6 col-md-3 rounded-4 image3 p-2"></div>
      <div class="col-6 col-md-3 image4 rounded-4 p-2"></div>
      <div class="col-6 col-md-3 image5 rounded-4 p-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name,
};
</script>

<style scoped>
.image1 {
  background-image: url("../assets/jihc/спортзал/sport1.avif");
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
}

.image2 {
  background-image: url("../assets/jihc/спортзал/sport1.avif");
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
}
.image3 {
  background-image: url("../assets/jihc/спортзал/sport1.avif");
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
}
.image4 {
  background-image: url("../assets/jihc/спортзал/sport1.avif");
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
}
.image5 {
  background-image: url("../assets/jihc/спортзал/sport1.avif");
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
