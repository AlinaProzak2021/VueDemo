<template>
  <div class="application-props-mechanics-vue">
    
    <div>
      <cardItem
        v-for="(productItem, index) in listProduct"
        :key="index"
        :title="productItem.title"
        :image="productItem.image"
        :price="productItem.price"
      />
    </div>
  </div>
</template>
<script>
import listProducts from "../../../data/components/ListProducts.json";
import cardItem from "./CardItem.vue";
export default {
  data() {
    return {
      listProduct: listProducts.ListProducts,
    };
  },
  components: {
    cardItem,
  },
};
</script>
<style>
</style>