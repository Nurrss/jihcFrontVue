<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-4" v-for="item in cards" :key="item._id">
        <div class="card mb-3">
          <img class="card-img-top" :src="item.imgPath" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{{ item.newsTitle }}</h5>
            <p class="card-text">{{ item.description }}</p>
            <p class="card-time">{{ formatDate(item.createdAt) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cards: [],
    };
  },
  created() {
    this.fetchNews();
  },
  methods: {
    formatDate(value) {
      if (value) {
        // You can customize the options as needed
        return new Date(value).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }
      return "";
    },
    async fetchNews() {
      try {
        const response = await axios.get("https://jihc.edu.kz/api/news", {
          withCredentials: true,
        });

        // Sort the news items by date in descending order
        response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        // Take only the last three news items

        this.cards = response.data.map((item) => ({
          ...item,
          // Directly assign the transformed URL to imgPath
          imgPath: item.imgPath,
        }));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    },
  },
};
</script>

<style scoped>
.card img {
  max-height: 275px;
  object-fit: cover;
  background-repeat: no-repeat;
  background-repeat: no-repeat;
}
</style>
