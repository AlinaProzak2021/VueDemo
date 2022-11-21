<template>
  <div class="application-json-import-vue">
    <ButtonBackToStartComponent :backToStartApp="backToStartLeftComponent" />
    <h3 class="json-import-title">
      Демонстрация возможностей Vue - json import
    </h3>
    <h3 class="json-import-title">Вгляните на эти невероятные страны!</h3>
    <div class="countries-list">
      <div
        class="country-item"
        v-for="(country, index) in countries"
        :key="index"
      >
        <div class="country-img">
          <img :src="country.image" />
        </div>
        <p class="country-name">Страна - {{ country.country }}</p>
        <p class="country-capital">Столица - {{ country.capital }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBackToStartComponent from "../BackToStartApp/ButtonBackToStartComponents.vue";
import { mapState, mapMutations } from "vuex";
import countries from "../../data/components/countries.json";
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
      countries: countries.countries,
    };
  },
};
</script>
<style scoped>
.application-json-import-vue {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.json-import-title {
  margin-bottom: 15px;
  font-weight: 400;
}
.countries-list {
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
}
.country-item {
  width: 250px;
  background: var(--background-color-left-app-element);
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
}
.country-img {
  width: 100%;
  height: 150px;
  margin-bottom: 20px;
  border-radius: 0;
}
img {
  width: 100%;
  height: 100%;
    border-radius: 0;
}
.country-name, .country-capital{
    margin-bottom: 10px;
}
@media (max-width: 760px) {
    .countries-list{
        justify-content: center;
         width: 100%;
    }
  
}
</style>