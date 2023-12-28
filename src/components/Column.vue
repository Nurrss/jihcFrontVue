<template>
  <div class="container my-5">
    <div class="container text-center">
      <div class="row align-items-center gap-3 justify-content-center">
        <div
          class="col-md-2 col-5 d-flex flex-column shadow bg-body-tertiary rounded-4 py-5"
        >
          <i class="bi"><img src="../assets/col1card1.png" alt="" /></i>
          {{ $t("ColumnD1P1") }} <br />{{ $t("ColumnD1P2") }}
        </div>
        <div
          class="col-md-2 col-5 d-flex flex-column shadow bg-body-tertiary rounded-4 py-5"
        >
          <i class="bi"><img src="../assets/col1card2.png" alt="" /></i>
          {{ $t("ColumnD2P1") }} <br />{{ $t("ColumnD2P2") }}
        </div>
        <div
          class="col-md-2 col-5 d-flex flex-column shadow bg-body-tertiary rounded-4 py-5"
        >
          <i class="bi"><img src="../assets/col1card3.png" alt="" /></i>
          {{ $t("ColumnD3P1") }} <br />{{ $t("ColumnD3P2") }}
        </div>
        <div
          class="col-md-2 col-5 d-flex flex-column shadow bg-body-tertiary rounded-4 py-5"
        >
          <i class="bi"><img src="../assets/col1card4.png" alt="" /></i>
          {{ $t("ColumnD4P1") }} <br />{{ $t("ColumnD4P2") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Column",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
