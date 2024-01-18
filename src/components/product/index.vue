<template>
  <div>
    <div id="page-wrap">
      <div class="grid-wrap">
        <ProductItem
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ProductItem from "../partials/ProductItem.vue";
export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      products: [],
    };
  },

  async created() {
    try {
      const response = await axios.get("http://localhost:8000/api/products");
      this.products = response.data; // Memasukkan data ke dalam products
    } catch (error) {
      console.error("Error fetching products:", error.message);
      // Handle error (menampilkan pesan kesalahan, menampilkan fallback data, atau tindakan lainnya)
    }
  },
};
</script>

<style scoped>
.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
}
</style>
