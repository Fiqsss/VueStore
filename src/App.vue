<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Navbar from "./components/partials/navbar.vue";
import Product from "./components/product/index.vue";
import DetailProduct from "./components/product/detailproduct.vue";
import Cart from "./components/cart/index.vue";
</script>

<template>
  <div id="app">
    <div id="navbar">
      <Navbar />
    </div>
    <div id="contain">
      <RouterView />
    </div>
  </div>
</template>



<style>
* {
    box-sizing: border-box;
    font-family: Arial;
  }

  #page-wrap {
    margin: auto;
    max-width: 800px;
    min-height: 100vh;
  }

  button {
    background-color: #41B883;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    outline: 0;
    padding: 16px;
  }</style>
