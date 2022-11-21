<template>
  <div class="application-watch-mechanics-vue">
    <ButtonBackToStartComponent :backToStartApp="backToStartLeftComponent" />
    <h3 class="watch-mechanics-title">Демонстрация возможностей Vue - Watch</h3>
    <h3 class="watch-mechanics-title">Введите 8 символов</h3>
    <input type="text" v-model="inputString" class="watch-mechanics-input" />
    <p class="watch-mechanics-message">{{ message }}</p>
  </div>
</template>
<script>
import ButtonBackToStartComponent from "../BackToStartApp/ButtonBackToStartComponents.vue";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      inputString: "",
      message: "",
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
  components: {
    ButtonBackToStartComponent,
  },
  watch: {
    inputString() {
      if (this.inputString.length >= 1 && this.inputString.length <= 4) {
        this.message = "Начали вводить символы. Продолжайте!";
      }
      if (this.inputString.length == 4) {
        this.message = "Уже половина, отлично! Вы совсем близко!";
      }
      if (this.inputString.length == 8) {
        this.message = "Вы ввели 8 символов! ";
      }
      if (this.inputString.length > 8) {
        this.message =
          "Пожалуйста остановитесь! Не нужно вводить больше 8 символов!";
      }
    },
  },
};
</script>
<style scoped>
.application-watch-mechanics-vue {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
}
.watch-mechanics-title {
  font-size: var(--font-size);
  margin-bottom: 15px;
}
.watch-mechanics-input {
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