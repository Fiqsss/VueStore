<template>
  <div id="page-wrap">
    <h1>Shoping Cart</h1>
    <div v-for="item in cartItems" :key="item.id" class="product-container">
      <img
        :src="`http://localhost:8000${item.imageUrl}`"
        alt=""
        class="product-image"
      />
      <div class="details-wrap">
        <h3>{{ item.name }}</h3>
        <p>Rp{{ item.price }}</p>
      </div>
      <button class="remove-button" @click="removeFromCart(item.code)">
        Remove
      </button>
    </div>
    <h3 id="total-price">Total: Rp{{ totalPrice }}</h3>
    <button id="checkout-button">Checkout</button>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from "axios";
export default {
  data() {
    return {
      cartItems: [],
    };
  },
  methods: {
    async removeFromCart(product) {
      try {
        await axios.delete(
          `http://localhost:8000/api/orders/delete/user/1/product/${product}`
        );

        let cart = this.cartItems
          .map(function (item) {
            return item.code;
          })
          .indexOf(product);

        if (cart !== -1) {
          this.cartItems.splice(cart, 1);

          // Menjalankan SweetAlert setelah item berhasil dihapus
          Swal.fire({
            text: `Data Berhasil di hapus`,
            icon: "success",
          }); 
        }
      } catch (error) {
        console.error(error);
        // Handle error jika terjadi kesalahan saat penghapusan item
      }
    },
  },

  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + Number(item.price), 0);
    },
  },
  async created() {
    const result = await axios.get("http://localhost:8000/api/orders/user/1");
    let data = Object.assign(
      {},
      ...result.data.map((result) => ({
        cart_items: result.products,
      }))
    );
    this.cartItems = data.cart_items;
  },
};
</script>

<style scoped>
h1 {
  border-bottom: 1px solid #41b883;
  margin: 0;
  margin-top: 16px;
  padding: 16px;
}
#total-price {
  padding: 16px;
  text-align: right;
}
#checkout-button {
  width: 100%;
}
.product-container {
  align-content: "center";
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
}
.product-image {
  flex: 1;
  height: 100px;
  max-width: 100px;
}
.details-wrap {
  padding: 0 16px;
  flex: 3;
}
.remove-button {
  flex: 1;
  margin: auto;
}
</style>
