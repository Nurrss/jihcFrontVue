<template>
  <div class="container my-5 justify-content-center">
    <div class="text-center">
      <h1 class="m-5" style="color: #0077ff">
        Наши преимущества
        <hr />
      </h1>

      <div class="row align-self-center gap-5 px-5">
        <div
          class="col d-flex flex-row gap-3 text-center justify-content-center p-4 rounded-4 py-3 align-items-center"
          style="background-color: #0077ff"
        >
          <i class="bi"><img src="../assets/col2card1.png" alt="" /></i>
          <p class="m-0 text-light fw-normal">Инновационные технологии</p>
        </div>
        <div
          class="col d-flex flex-row gap-3 text-center justify-content-center p-4 rounded-4 py-3 align-items-center"
          style="background-color: #0077ff"
        >
          <i class="bi"><img src="../assets/col2card2.png" alt="" /></i>
          <p class="m-0 text-light fw-normal">
            Учителя, получившие образование за рубежом
          </p>
        </div>
        <div
          class="col d-flex flex-row gap-3 text-center justify-content-center p-4 rounded-4 py-3 align-items-center"
          style="background-color: #0077ff"
        >
          <i class="bi"><img src="../assets/col2card3.png" alt="" /></i>
          <p class="m-0 text-light fw-normal text-light">
            Занятия проводятся на базе WorldSkills Competence
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Column2",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.size {
  max-width: 1142px;
}
</style>
