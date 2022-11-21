<template>
  <div class="application-methods-mechanics-vue">
    <ButtonBackToStartComponent :backToStartApp="backToStartLeftComponent" />
    <h3 class="methods-mechanics-title">
      Демонстрация возможностей Vue - Methods()
    </h3>
    <h3 class="methods-mechanics-title">
      Введите строку без пробелов и мы ее перевернем!
    </h3>
    <input
      type="text"
      placeholder="Введите строку"
      v-model="inputSting"
      class="methods-mechanics-input"
    />
    <button
      :disabled="isEmptyInputString"
      @click="normalizationString()"
      class="methods-mechanics-button"
    >
      Перевернуть
    </button>
    <p>Перевернутая строка - {{ normalizedString }}</p>
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
      inputSting: "",
      normalizedString: "",
    };
  },
  methods: {
    normalizationString() {
      let symbolsArray = this.convertStringToArraySymbols;
      let reversedArraySymbols = this.reverseArraySymbols(symbolsArray);
      this.normalizedString =
        this.convertArraySymbolsToString(reversedArraySymbols);
      this.cleanInput();
    },
    reverseArraySymbols(inputString) {
      return inputString.reverse();
    },
    convertArraySymbolsToString(inputString) {
      return inputString.join("");
    },
    cleanInput() {
      this.inputSting = "";
    },
    ...mapMutations(["setCurrentLeftComponent"]),
    backToStartLeftComponent() {
      this.setCurrentLeftComponent(this.componentNames.StartLeftApplications);
    },
  },
  computed: {
    ...mapState(["componentNames"]),
    isEmptyInputString() {
      return this.inputSting === "";
    },
    convertStringToArraySymbols() {
      return this.inputSting.split("");
    },
  },
};
</script>
<style>
.application-methods-mechanics-vue {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
}
.methods-mechanics-title {
  margin-bottom: 15px;
}
.methods-mechanics-input {
  padding-left: 15px;
  width: 220px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  border: 1px solid var(--border-color-left-app);
  font-size: 12px;
  background-color: var(--background-color-left-app-element);
  margin: 0 auto;
  margin-bottom: 10px;
}
.methods-mechanics-button {
  width: 220px;
  height: 30px;
  background: var(--border-color-left-app);
  color: var(--text-color-button);
  border: none;
  margin: 0 auto;
  margin-bottom: 15px;
}
</style>