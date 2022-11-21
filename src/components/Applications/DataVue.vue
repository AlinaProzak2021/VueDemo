<template>
  <div class="application-data-mechanics">
    <ButtonBackToStartComponent :backToStartApp="backToStartLeftComponent" />
    <h3 class="data-mechanics-title">Демонстрация возможностей Vue - Data()</h3>
    <h1 class="data-mechanics-title font-size-big">{{ count }}</h1>

    <button @click="incrementCount()" class="data-mechanics-button">
      Увеличить на 1
    </button>
    <button @click="decrementCount()" class="data-mechanics-button">
      Уменьшить на 1
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
  computed: {
    ...mapState(["componentNames"]),
  },
  methods: {
    ...mapMutations(["setCurrentLeftComponent"]),
    backToStartLeftComponent() {
      this.setCurrentLeftComponent(this.componentNames.StartLeftApplications);
    },
    incrementCount() {
      this.count++;
    },
    decrementCount() {
      this.count--;
    },
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
<style scoped>
.application-data-mechanics {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.data-mechanics-title {
  margin-bottom: 15px;
}
.font-size-big {
  font-size: calc(var(--font-size)*2);
}
.data-mechanics-button {
  width: 190px;
  height: 30px;
  background: var(--border-color-left-app);
  color: var(--text-color-button);
  border: none;
  margin: 0 auto;
  margin-bottom: 15px;
}
</style>