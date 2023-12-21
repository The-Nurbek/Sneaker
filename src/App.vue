<template>
  <div>
    <Navbar />
    <RouterView />
    <Modal />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import { useStoreProduct } from "./stores/counter";
import Modal from "./components/Modal.vue";
const Store = useStoreProduct();

onMounted(() => {
  Store.getProduct();
});

</script>

<style lang="scss" scoped></style>