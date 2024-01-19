<template>
  <div id="carouselExampleDark" class="carousel carousel-dark slide container">
    <div class="carousel-inner">
      <div class="row">
        <div class="col-6">
          <h3 class="mb-3">{{ $t("NewsH") }}</h3>
        </div>
        <div class="col-6 d-flex justify-content-end">
          <button
            class="btn btn-primary mb-3 mr-1 me-2"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <i class="bi bi-arrow-left"></i>
          </button>
          <button
            class="btn btn-primary mb-3 mr-1"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>

      <div
        v-for="(news, index) in cards"
        :key="index"
        class="carousel-item"
        :class="{ active: index === 0 }"
        :data-bs-interval="index === 0 ? 10000 : 2000"
      >
        <div class="row">
          <div
            v-for="(item, itemIndex) in news"
            :key="itemIndex"
            class="col-md-4 mb-3"
          >
            <div class="card">
              <img class="img-fluid" :src="item.imgPath" alt="Card image cap" />
              <div class="card-body">
                <h4 class="card-title">{{ item.newsTitle }}</h4>
                <p class="card-text">{{ item.discription }}</p>
                <p>{{ item.time }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        [
          {
            imgPath: require("../assets/jihc/comand/MereyAgay.avif"),
            newsTitle: "Merey Agay",
            discription:
              "With supporting text below as a natural lead-in to additional content.",
            time: "2023.12.27",
          },
          {
            imgPath: require("../assets/jihc/comand/Тоқтасын-Олжас.avif"),
            newsTitle: "Olzhas Agay",
            discription:
              "With supporting text below as a natural lead-in to additional content.",
            time: "2023.12.27",
          },
          {
            imgPath: require("../assets/jihc/comand/Жүнісов Əлишер .avif"),
            newsTitle: "Alisher Agay",
            discription:
              "With supporting text below as a natural lead-in to additional content.",
            time: "2023.12.27",
          },
          // Add more news items as needed
        ],
        [
          {
            imgPath:
              "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698",
            newsTitle: "Special title treatment",
            discription:
              "With supporting text below as a natural lead-in to additional content.",
            time: "2023.12.27",
          },
          {
            imgPath:
              "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698",
            newsTitle: "Special title treatment",
            discription:
              "With supporting text below as a natural lead-in to additional content.",
            time: "2023.12.27",
          },
          {
            imgPath:
              "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698",
            newsTitle: "Special title treatment",
            discription:
              "With supporting text below as a natural lead-in to additional content.",
            time: "2023.12.27",
          },
          // Add more news items as needed
        ],
        [
          {
            imgPath:
              "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698",
            newsTitle: "Special title treatment",
            discription:
              "With supporting text below as a natural lead-in to additional content.",
            time: "2023.12.27",
          },
          {
            imgPath:
              "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698",
            newsTitle: "Special title treatment",
            discription:
              "With supporting text below as a natural lead-in to additional content.",
            time: "2023.12.27",
          },
          {
            imgPath:
              "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698",
            newsTitle: "Special title treatment",
            discription:
              "With supporting text below as a natural lead-in to additional content.",
            time: "2023.12.27",
          },
          // Add more news items as needed
        ],
        // Add more news arrays as needed
      ],
    };
  },
};
</script>

<style scoped>
.card img {
  max-height: 275px;
  object-fit: cover;
}
/* Add your component-specific styles here */
/* Add any additional styles for your news carousel */
</style>
