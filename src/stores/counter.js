import axios from "axios";
import {
  defineStore
} from "pinia";

export const useStoreProduct = defineStore("product", {
  state: () => ({
    product: null,
    CardLikeProduct: [],
    CardHeartProduct: [],
    modal: false,
    search: '',
    productSort: '',
    defultproductSort: 'Все продукты',
    sorted: false,
    showEmptymodal: false,
  }),
  getters: {
    totalSumm() {
      return this.CardLikeProduct.reduce((total, card) => total + card.price, 0);
    }
  },
  actions: {
    async getProduct() {
      const respons = await axios.get(
        this.productSort ? `https://64d5d92f613ee4426d97abc4.mockapi.io/vue-sneakers?sortBy=${this.productSort}&order=desc`
          : "https://64d5d92f613ee4426d97abc4.mockapi.io/vue-sneakers"
      );
      this.product = respons.data;
      console.log(this.product);
    },

  },
});