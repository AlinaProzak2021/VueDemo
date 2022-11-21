<template>
  <div class="application-conditional-drawing-mechanics">
    <ButtonBackToStartComponent :backToStartApp="backToStartLeftComponent" />
    <h3 class="conditional-drawing-mechanics-title">
      Демонстрация возможностей Vue - условная отрисовка
    </h3>

    <div v-if="!isVisiblePI" class="notVisible-image">
      <button
        @click="isVisiblePI = !isVisiblePI"
        class="conditional-drawing-button"
      >
        Показать число ПИ
      </button>
      <p>Вы еще не нажали на кнопку. Число ПИ появится, когда вы ее нажмете!</p>
    </div>
    <div v-else class="visible-image">
      <div class="conditional-drawing-image">
        <img src="../../../public/assets/images/NumberPI.jpg" alt="" />
      </div>
      <button
        @click="isVisiblePI = !isVisiblePI"
        class="conditional-drawing-button"
      >
        Скрыть число ПИ
      </button>
    </div>
  </div>
</template>
<script>
import ButtonBackToStartComponent from "../BackToStartApp/ButtonBackToStartComponents.vue";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
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
  data() {
    return {
      isVisiblePI: false,
    };
  },
};
</script>
<style>
.application-conditional-drawing-mechanics {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.conditional-drawing-mechanics-title {
  margin-bottom: 15px;
}
.conditional-drawing-button {
  width: 190px;
  height: 30px;
  background: var(--border-color-left-app);
  color: var(--text-color-button);
  border: none;
  margin: 0 auto;
  margin-bottom: 15px;
}
.conditional-drawing-image {
  width: 300px;
  height: 250px;
  border-radius: 15px;
  margin-bottom: 20px;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}
.notVisible-image,
.visible-image {
  display: flex;
  flex-direction: column;
}
</style>