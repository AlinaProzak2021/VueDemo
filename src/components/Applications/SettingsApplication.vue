<template>
  <div class="configuration-container">
    <ButtonBackToStartComponent :backToStartApp="backToStartRightComponent" />
    <div class="select-settings">
      <h3 class="configuration-title">Вы можете выбрать тему и приложение</h3>
      <section class="configuration-select">
        <p class="configuration-subtitle">Выберите тему приложения</p>
        <select
          name="select-theme"
          v-model="selectTheme"
          @change="setCurrentTheme(selectTheme)"
        >
          <option
            selected
            :value="theme"
            v-for="(theme, index) in themes"
            :key="index"
          >
            {{ theme }}
          </option>
        </select>
      </section>
      <section class="configuration-select">
        <p class="configuration-subtitle">Выберите приложение</p>
        <select
          name="selectLeftApplication"
          v-model="selectLeftApplication"
          @change="setDinamicLeftComponent(selectLeftApplication)"
        >
          <option
            selected
            :value="app"
            v-for="(app, index) in getApplicationList()"
            :key="index"
          >
            {{ app }}
          </option>
        </select>
      </section>
      <section class="configuration-select">
        <p class="configuration-subtitle">Выберите шрифт</p>
        <select
          name="select-font"
          v-model="selectAppFont"
          @change="setCurrentAppFont(selectAppFont)"
        >
          <option
            selected
            :value="font"
            v-for="(font, index) in fonts"
            :key="index"
          >
            {{ font }}
          </option>
        </select>
      </section>
      <section class="configuration-select">
        <p class="configuration-subtitle">Выберите размер шрифта</p>
        <select
          name="select-font"
          v-model="selectAppFontSize"
          @change="setCurrentFontSize(selectAppFontSize)"
        >
          <option
            selected
            :value="fontSize"
            v-for="(fontSize, index) in fontSizes"
            :key="index"
          >
            {{ fontSize }}
          </option>
        </select>
      </section>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import ButtonBackToStartComponent from "../BackToStartApp/ButtonBackToStartComponents.vue";
import componentNames from "../../data/components/componentNames.json";
import themes from "../../data/components/themes.json";
import fonts from "../../data/components/fonts.json";
import fontSizes from "../../data/components/fontsizes.json";
export default {
  data() {
    return {
      selectLeftApplication: componentNames.applications.ComputedVue,
      selectTheme: themes.brightTheme,
      selectAppFont: fonts.Times,
      selectAppFontSize: fontSizes.averageFont,
    };
  },
  computed: {
    ...mapState(["themes", "fonts", "fontSizes", "componentNames"]),
  },
  methods: {
    ...mapGetters(["getApplicationList"]),
    ...mapMutations([
      "setDinamicLeftComponent",
      "setCurrentTheme",
      "setCurrentAppFont",
      "setCurrentFontSize",
      "setCurrentRightComponent",
    ]),
    backToStartRightComponent() {
      this.setCurrentRightComponent(this.componentNames.StartConfiguration);
    },
  },
  components: {
    ButtonBackToStartComponent,
  },
};
</script>
<style scoped>
.configuration-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
  font-weight: normal;
}
.select-settings {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.configuration-title {
  margin-top: 30px;
  font-size: var(--font-size);
  letter-spacing: 0.1em;
  margin-bottom: 30px;
  
  text-align: center;
}
.configuration-select {
  margin: 0 auto;
  width: 300px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.configuration-subtitle {
  text-align: center;
  margin-bottom: 15px;
}
select {
  width: 300px;
  height: 36px;
  background: var(--background-color-right-app-element);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  color: var(--color-text-right-app);
  cursor: pointer;
  margin: 0 auto;
  outline: none;
  border: none;
  padding-left: 15px;
}
@media (max-width: 1024px) {
  .select-settings {
    width: 100%;
    background: none;
  }
  .configuration-title {
    font-size: 14px;
  }
  .configuration-subtitle {
    font-size: 12px;
  }
  .configuration-select {
    width: 100%;
    margin-bottom: 40px;
  }
}
@media (max-width: 360px) {
  select {
    width: 200px;
  }
}
</style>