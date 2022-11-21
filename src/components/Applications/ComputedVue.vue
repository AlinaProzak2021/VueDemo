<template>
  <div class="application-computed-mechanics">
    <ButtonBackToStartComponent :backToStartApp="backToStartLeftComponent" />
    <h3 class="computed-mechanics-title">
      Демонстрация возможностей Vue - Computed
    </h3>
    <h3 class="computed-mechanics-title">
      Введите строку, котоорая содержит не более трех слов
    </h3>
    <input
      v-model="inputString"
      type="text"
      class="computed-mechanics-input"
      placeholder="Введите строку"
    />
    <p class="error-message" v-if="!isAllowedStringLength">
      Строка содержит больше трех слов!
    </p>
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
    isAllowedStringLength() {
      let matchesCount = this.inputString.match(/\S+/g) || [];
      return matchesCount.length <= 3;
    },
  },
  methods: {
    ...mapMutations(["setCurrentLeftComponent"]),
    backToStartLeftComponent() {
      this.setCurrentLeftComponent(this.componentNames.StartLeftApplications);
    },
  },
  data() {
    return {
      inputString: "",
    };
  },
};
</script>
<style scoped>
.application-computed-mechanics {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
}
.computed-mechanics-title {
  font-size: var(--font-size);
  text-align: center;
  margin-bottom: 20px;
  font-weight: 500;
}
.computed-mechanics-input {
  padding-left: 15px;
  width: 220px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  border: 1px solid var(--border-color-left-app);
  background-color: var(--background-color-left-app-element);
  margin: 0 auto;
  margin-bottom: 10px;
}
.error-message {
  text-align: center;
  color: var(--text-color-error-message);
  font-weight: bold;
  padding-top: 0;
  margin-bottom: 10px;
}
</style>