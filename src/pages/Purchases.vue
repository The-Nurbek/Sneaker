<template>
    <div class="container">
        <div class="purchases " v-if="Store.CardLikeProduct.length">
            <RouterLink to="/"> <img src="../assets/img/back.svg" alt=""></RouterLink>
            <h3 class="purchases__title">Мои покупки</h3>
        </div>
        <div class="purchased " v-else>
            <img src="../assets/img/down.png" alt="">
            <h3 class="empty__title">У вас нет заказов</h3>
            <p class="empty__text">Вы нищеброд? Оформите хотя бы один заказ.</p>
            <RouterLink to="/"><button class="empty_btn"> <img src="../assets/img/emback.png" alt="">Вернуться
                    назад</button>
            </RouterLink>
        </div>
        <div class="mainlist__cards-grid ">
            <div class="mainlist__cards " v-for="product in Store.CardLikeProduct" :key="product.id">
                <MainCard :product="product" />
            </div>
        </div>
    </div>
</template>

<script setup>
import MainCard from "@/components/MainCard.vue";
import { useStoreProduct } from "../stores/counter";
const Store = useStoreProduct()

</script>

<style lang="scss" scoped></style>