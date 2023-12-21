<template>
  <div class="mainlist__card">
    <div class="mainlist__card-top">
      <div @click="togglecardlike">
        <img v-if="product.inLike" class="like" src="../assets/img/likeed.svg" alt="">
        <img v-else class="like" src="../assets/img/like.svg" alt="">
      </div>
      <img :src="`../../public/image/${product.images}`" alt="" />
      <div class="mainlist__card-top-text">
        {{ product.title }}
      </div>
    </div>
    <div class="mainlist__card-bottom">
      <div class="mainlist__card-bottom-price">
        <p class="mainlist__card-bottom-price-text">Цена:</p>
        <p class="mainlist__card-bottom-price-text2">
          {{ product.price }} руб.
        </p>
      </div>
      <div @click="toggleCardAdd">
        <img v-if="product.inCart" src="../assets/img/mainadded.svg" alt="" />
        <img v-else src="../assets/img/mainadd.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["product"]);
import { useStoreProduct } from "../stores/counter";
const Store = useStoreProduct()

const toggleCardAdd = () => {
  if (!Store.CardLikeProduct) {
    Store.CardLikeProduct = [];
  }
  props.product.inCart = !props.product.inCart;
  if (props.product.inCart == true) {
    Store.CardLikeProduct.push(props.product);
  } else {
    const index = Store.CardLikeProduct.findIndex(p => p.id === props.product.id);
    console.log(index);
    if (index !== -1) {
      Store.CardLikeProduct.splice(index, 1);
    }
  }

}
const togglecardlike = () => {
  if (!Store.CardHeartProduct) {
    Store.CardHeartProduct = [];
  }
  props.product.inLike = !props.product.inLike;
  if (props.product.inLike == true) {
    Store.CardHeartProduct.push(props.product);
  } else {
    const index = Store.CardHeartProduct.findIndex(p => p.id === props.product.id);
    console.log(index);
    if (index !== -1) {
      Store.CardHeartProduct.splice(index, 1);
    }
  }
}


</script>

<style lang="scss" scoped></style>