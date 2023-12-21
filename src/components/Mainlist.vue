<template>
  <div class="mainlist container">
    <div class="upper__content">
      <h2 class="upper__content-title">Все кроссовки</h2>
      <input type="text" placeholder="Поиск..." v-model="Store.search" />
      <div class="sorting">
        <div class="down" @click="Store.sorted = !Store.sorted"> {{ Store.defultproductSort }}
          <img v-if="Store.sorted == true" src="../assets/img/arrow.svg" alt="">
          <img v-else src="../assets/img/arrow.svg" alt="">
        </div>
        <div class="any" v-if="Store.sorted == true">
          <div calss="price" @click="productSorting('all')">Все продукты</div>
          <div calss="name" @click="productSorting('title')">По названию</div>
          <div calss="price" @click="productSorting('price')">По цене</div>
        </div>
      </div>
    </div>
    <div class="mainlist__cards-grid">
      <div class="mainlist__cards" v-for="product in search" :key="product.id">
        <MainCard :product="product" />
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import MainCard from "./MainCard.vue";
import { useStoreProduct } from "../stores/counter";
const Store = useStoreProduct();

const productSorting = (value) => {
  if (value == 'title') {
    Store.defultproductSort = 'По названию'
  } else if (value == 'price') {
    Store.defultproductSort = 'По цене'
  } else if (value == 'all') {
    Store.defultproductSort = 'Все продукты'
  }
  Store.sorted = false
  Store.productSort = value;
  Store.getProduct()
}


const search = computed(() => {
  return Store.search ? Store.product.filter((product) => product.title.toLowerCase().includes(Store.search.toLowerCase())) : Store.product;
})


</script>

<style lang="scss" scoped></style>