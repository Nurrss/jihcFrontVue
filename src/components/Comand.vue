<template>
  <section class="container my-5">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col-md-3 shadow-risen">
        <div class="card text-white rounded-5">
          <img
            class="card-img rounded-5"
            src="../assets/jihc/comand/Алишер ағай.jpg"
            alt="Card image"
          />
          <div class="inner-shadow-bottom"></div>
          <div class="card-img-overlay d-flex flex-column">
            <div class="mt-auto">
              <h5 class="card-title">Title</h5>
              <h3 class="card-text font-weight-bold">
                <span class="mr-auto">Some other title here</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script></script>
<style>
.card {
  border: 0 !important;
}
.card {
  position: relative;
}

.inner-shadow-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%; /* Adjust the height of the shadow as needed */
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 255);
  border-radius: inherit;
  pointer-events: none; /* Ensure the pseudo-element doesn't interfere with interaction */
}
</style>
