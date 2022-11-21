<template>
  <div class="application-v-model-mechanics">
    <ButtonBackToStartComponent :backToStartApp="backToStartLeftComponent" />
    <h3 class="v-model-mechanics-title">Демонстрация возможностей Vue - V-model</h3>
    <h3 class="v-model-mechanics-title">Введите свое имя</h3>
    <input type="text" v-model="username" class="v-model-mechanics-input" />
    <p class="v-model-mechanics-text">Ваше имя:</p>
    {{ usernameEntered }}
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
      username: "",
    };
  },
  computed: {
    ...mapState(["componentNames"]),
    usernameEntered() {
      return this.username;
    },
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
.application-v-model-mechanics {
  width: 100%;
  height: 100%;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.v-model-mechanics-title {
  margin-bottom: 15px;
  font-size: 14px;
}
.v-model-mechanics-input {
  padding-left: 15px;
  width: 220px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  border: 1px solid var(--border-color-left-app);
  background-color: var(--background-color-left-app-element);
  margin-bottom: 10px;
}
</style>