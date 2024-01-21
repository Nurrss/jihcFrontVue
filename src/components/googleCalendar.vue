<template>
  <div class="container py-5 align-items-center d-flex flex-column">
    <p class="text-center">
      В данном разделе вы видите все важные ивенты в колледже отображаемые через
      Google Calendar
    </p>

    <iframe
      src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FAlmaty&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=NWJlNjViNDQ0YWYxM2YwZDdlOTVjMmE2N2FlM2JmZTE2NWI2NWE1MjI0MTNmMmY2OTMzMWI3NjcyNjBiM2U1NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237986CB"
      style="border: 0"
      width="1200"
      height="600"
      frameborder="0"
      scrolling="no"
      class="py-3 calen"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Jumbotron2",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (max-width: 1200px) {
  .calen {
    width: 700px;
  }
}
@media (max-width: 991px) {
  .calen {
    width: 500px;
  }
}

@media (max-width: 576px) {
  .calen {
    width: 350px;
  }
}
</style>
