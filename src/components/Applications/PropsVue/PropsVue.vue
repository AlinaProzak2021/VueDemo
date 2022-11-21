<template>
  <div class="application-props-mechanics-vue">
    <ButtonBackToStartComponent :backToStartApp="backToStartLeftComponent" />
    <h3 class="props-mechanics-title">Демонстрация возможностей Vue - Props</h3>
    <div class="card-list">
      <CardItem
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
import ButtonBackToStartComponent from "../../BackToStartApp/ButtonBackToStartComponents.vue";
import { mapState, mapMutations } from "vuex";
import listProducts from "../../../data/components/ListProducts.json";
import CardItem from "./CardItem.vue";
export default {
  data() {
    return {
      listProduct: listProducts.ListProducts,
    };
  },
  components: {
    CardItem,
    ButtonBackToStartComponent,
  },
  computed: {
    ...mapState(["componentNames"]),
  },
  methods: {
    ...mapMutations(["setCurrentLeftComponent"]),
    backToStartLeftComponent() {
      this.setCurrentLeftComponent(this.componentNames.StartLeftApplications);
    },
  },
};
</script>
<style>
.application-props-mechanics-vue {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.props-mechanics-title {
  margin-bottom: 15px;
}
.card-list {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>