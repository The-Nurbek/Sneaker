<template>
    <div class="modal" v-if="Store.modal == true" @click="Store.modal = false">
        <div class="modal__wrapper" @click.stop="">
            <div v-if="!Store.showEmptymodal">

                <h2 class="inprocess__title">Корзина</h2>
                <div class="mainlist__cards-grid-other ">
                    <div class="mainlist__cards " v-for="product in Store.CardLikeProduct" :key="product.id">
                        <MainCard :product="product" />
                    </div>
                </div>
                <div class="overall">
                    <p class="overall__price">Итого: ------------- <span></span> {{ priceTotal }} руб. </p>
                    <button @click="finished" class="overall__btn">Оформить заказ <img src="../assets/img/right.svg"
                            alt=""></button>
                </div>
            </div>
            <ModalPurchased v-if="Store.showEmptymodal" />

        </div>
    </div>
</template>

<script setup>

import { computed } from "vue";
const priceTotal = computed(() => Store.totalSumm);



import { useStoreProduct } from "../stores/counter";
import MainCard from "@/components/MainCard.vue";
import ModalPurchased from "./modal/ModalPurchased.vue";

const Store = useStoreProduct()

const finished = () => {
    Store.CardLikeProduct = []
    Store.modal = true;
    Store.showEmptymodal = true;
    setTimeout(() => {
        Store.modal = false;
        Store.showEmptymodal = false;
    }, 10000000);
}



</script>

<style lang="scss" scoped>

@mixin media($size) {
  @media screen and (max-width:#{$size}px) {
    @content
  }
}
.modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;


    &__wrapper {
        position: absolute;
        top: 0;
        right: 0;
        width: 400px;
        height: 100%;
        background: rgb(255, 255, 255);
        padding: 20px;
        @include media(768){
           width: 320px;
           @include media(576){
            width: 270px;
           }
        }
    }
}
</style>