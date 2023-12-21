<template>
    <div>
        <h2 class="inprocess__title">Корзина</h2>
        <div class="empty">
            <img src="../assets/img/done.jpg" alt="">
            <h3 class="empty__title green">Заказ оформлен!</h3>
            <p class="empty__text">Ваш заказ #18 скоро будет передан курьерской доставке</p>
            <router-link to="/" @click="Store.modal = false, this.$router.go(0)" class="empty_btn"> <img
                    src="../assets/img/emback.png" alt="">Вернуться назад</router-link>
        </div>
    </div>
</template>

<script setup>
import { useStoreProduct } from "../../stores/counter";
const Store = useStoreProduct();

</script>

<style lang="scss" scoped></style>