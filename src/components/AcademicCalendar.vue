<template>
  <section id="info " class="my-5 container">
    <div class="row">
      <div
        class="col-lg-6 col-md-6 col-sm-6 justify-content-center text-left infoS"
      >
        <p class="">
          {{ $t("AcademicCalendarInfoText") }}
        </p>
        <p>{{ $t("AcdemicCalendarP1") }}</p>
        <li>
          {{ $t("AcdemicCalendarLi1") }}
        </li>
        <li>
          {{ $t("AcdemicCalendarLi2") }}
        </li>
        <li>{{ $t("AcdemicCalendarLi3") }}</li>
        <li>{{ $t("AcdemicCalendarLi4") }}</li>
        <p class="mt-3">
          {{ $t("AcdemicCalendarP2") }}
        </p>
      </div>

      <img
        src="../assets/Director.png"
        alt=""
        class="col-lg-6 col-md-6 col-sm-6 align-self-center"
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
