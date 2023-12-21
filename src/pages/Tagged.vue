<template>
  <div class="container">  <div v-if="Store.CardHeartProduct.length" class="purchases container">
        <RouterLink to="/">
            <img src="../assets/img/back.svg" alt="">
        </RouterLink>
        <h3 class="purchases__title">Мои закладки</h3>
    </div>
    <div v-else class="tagged ">
        <img src="../assets/img/tears.png" alt="">
        <h3 class="empty__title">Закладок нет :( </h3>
        <p class="empty__text">Вы ничего не добавляли в закладки</p>
        <RouterLink to="/"><button class="empty_btn"> <img src="../assets/img/emback.png" alt="">Вернуться назад</button></RouterLink>
    </div>
    <div class="mainlist__cards-grid ">
            <div class="mainlist__cards " v-for="product in Store.CardHeartProduct" :key="product.id">
                <MainCard :product="product" />
            </div>
        </div></div>
</template>

<script setup>
import MainCard from "@/components/MainCard.vue";
import { useStoreProduct } from "../stores/counter";
const Store = useStoreProduct()
</script>

<style lang="scss" scoped></style>