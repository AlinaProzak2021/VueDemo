<template>
  <div class="application-v-for-mechanics">
    <ButtonBackToStartComponent :backToStartApp="backToStartLeftComponent" />
    <h3 class="v-for-mechanics-title">Демонстрация возможностей Vue - V-for</h3>
    <h3 class="v-for-mechanics-title">
      Механики Vue, показанные в этом проекте
    </h3>
    <div class="mechanics-list">
      <div
        v-for="(mechanic, index) in vueMechanics"
        :key="index"
        class="mechanics-item"
      >
        <div class="mechanics-item-img">
          <img src="../../../public/assets/logo.png" alt="логотип vue" />
        </div>
        <div class="mechanics-item-title">
          <p>{{ mechanic }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonBackToStartComponent from "../BackToStartApp/ButtonBackToStartComponents.vue";
import { mapState, mapMutations } from "vuex";
import vueMechanics from "../../data/components/vueMechanics.json";
export default {
  components: {
    ButtonBackToStartComponent,
  },
  data() {
    return {
      vueMechanics: vueMechanics,
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

.application-v-for-mechanics {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.v-for-mechanics-title {
  margin-bottom: 10px;
}
.mechanics-list {
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
}
.mechanics-item {
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  background: var(--background-color-left-app-element);
}
.mechanics-item-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.mechanics-item-title {
  margin-bottom: 10px;
}
</style>