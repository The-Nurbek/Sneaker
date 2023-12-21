<template>
  <div class="navbar container">
    <div class="navbar__left">
      <Router-link to="/"><img src="../assets/img/navsneaker.png" alt="" /></Router-link>
      <div class="navbar__left-inner">
        <h2 class="navbar__left-inner-title">REACT SNEAKERS</h2>
        <p class="navbar__left-inner-text">Магазин лучших кроссовок</p>
      </div>
    </div>
    <div class="navbar__right">
      <div class="navbar__right-inner" @click="addModal">
        <img src="../assets/img/navbag.svg" alt="">
        <p class="navbar__right-inner-text">{{ priceTotal }}</p>
      </div>
      <RouterLink to="/tagged"><img src="../assets/img/navlike.svg" alt=""></RouterLink>
      <RouterLink to="/purchases"><img src="../assets/img/navuser.svg" alt=""></RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useStoreProduct } from "../stores/counter";
const Store = useStoreProduct();
import { computed } from "vue";
const addModal = () => {
  Store.modal = !Store.modal
}
const priceTotal = computed(() => Store.totalSumm);
</script>

<style lang="scss" scoped></style>