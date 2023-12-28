<template>
  <div class="container my-5 justify-content-center">
    <div class="text-center">
      <h1 class="m-5 text-center" style="color: #0077ff">
        {{ $t("Column2H1") }}

        <hr />
      </h1>

      <div class="row align-self-center gap-5 px-5">
        <div
          class="col d-flex flex-row gap-3 text-center justify-content-center p-4 rounded-4 py-3 align-items-center"
          style="background-color: #0077ff"
        >
          <i class="bi"><img src="../assets/col2card1.png" alt="" /></i>
          <p class="m-0 text-light">{{ $t("Column2P1") }}</p>
        </div>
        <div
          class="col d-flex flex-row gap-3 text-center justify-content-center p-4 rounded-4 py-3 align-items-center"
          style="background-color: #0077ff"
        >
          <i class="bi"><img src="../assets/col2card2.png" alt="" /></i>
          <p class="m-0 text-light">
            {{ $t("Column2P2") }}
          </p>
        </div>
        <div
          class="col d-flex flex-row gap-3 text-center justify-content-center p-4 rounded-4 py-3 align-items-center"
          style="background-color: #0077ff"
        >
          <i class="bi"><img src="../assets/col2card3.png" alt="" /></i>
          <p class="m-0 text-light text-light">
            {{ $t("Column2P3") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
