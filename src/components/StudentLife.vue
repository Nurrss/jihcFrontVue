<template>
  <section id="info " class="my-5 container">
    <div class="row">
      <p class="mb-5 text-center">
        {{ $t("LifeP1") }}
      </p>
      <div
        class="col-lg-6 col-md-6 col-sm-6 justify-content-center text-left infoS"
      >
        <h1 style="color: #0077ff">{{ $t("LifeH1") }}</h1>
        <hr />
        <p class="">
          {{ $t("LifeP2") }}
        </p>
      </div>

      <img
        src="../assets/studentlifecard1.png"
        alt=""
        class="col-lg-6 col-md-6 col-sm-6 align-self-center mb-5"
      />
      <img
        src="../assets/studentlifecard2.png"
        alt=""
        class="col-lg-6 col-md-6 col-sm-6 align-self-center mb-5"
      />
      <div
        class="col-lg-6 col-md-6 col-sm-6 justify-content-center text-left infoS"
      >
        <h1 style="color: #0077ff">{{ $t("LifeH2") }}</h1>
        <hr />
        <p class="">
          {{ $t("LifeP3") }}
        </p>
      </div>
      <div
        class="col-lg-6 col-md-6 col-sm-6 justify-content-center text-left infoS"
      >
        <h1 style="color: #0077ff">{{ $t("LifeH3") }}</h1>
        <hr />
        <p class="">
          {{ $t("LifeP4") }}
        </p>
      </div>

      <img
        src="../assets/studentlifecard1.png"
        alt=""
        class="col-lg-6 col-md-6 col-sm-6 align-self-center mb-5"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "Jumbotron2",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
