<template>
  <div class="application-v-show-mechanics">
    <ButtonBackToStartComponent :backToStartApp="backToStartLeftComponent" />
    <h3 class="v-show-mechanics-title">
      Демонстрация возможностей Vue - V-show
    </h3>
    <div class="v-show-mechanics-image" v-show="isVisibleImage">
      <img src="../../../public/assets/images/image-kat.jpg" alt="" />
    </div>
    <button
      v-if="isVisibleImage"
      class="v-show-mechanics-button"
      @click="isVisibleImage = !isVisibleImage"
    >
      Спрятать усатого!
    </button>
    <button
      v-else
      class="v-show-mechanics-button"
      @click="isVisibleImage = !isVisibleImage"
    >
      Вернуть усатого!
    </button>
  </div>
</template>
<script>
import ButtonBackToStartComponent from "../BackToStartApp/ButtonBackToStartComponents.vue";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    ButtonBackToStartComponent,
  },
  data() {
    return {
      isVisibleImage: true,
    };
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
<style scoped>
.application-v-show-mechanics {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.v-show-mechanics-image {
  width: 250px;
  height: 250px;
  border-radius: 15px;
  margin-bottom: 20px;
}
.v-show-mechanics-title {
  margin-bottom: 15px;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}
.v-show-mechanics-button {
  width: 150px;
  height: 30px;
  background: var(--border-color-left-app);
  color: var(--text-color-button);
  border: none;
}
</style>