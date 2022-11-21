<template>
  <main class="main-app">
    <div class="flex-container">
      <section class="left-app">
        <KeepAlive>
          <component :is="currentLeftComponent"></component>
        </KeepAlive>
      </section>
      <section class="right-app">
        <KeepAlive>
          <component :is="currentRightComponent"></component>
        </KeepAlive>
      </section>
    </div>
  </main>
</template>
<script>
import { mapState } from "vuex";
import StartLeftApplications from "./StartApplications/StartLeftApplications.vue";
import StartConfiguration from "./StartApplications/StartConfiguration.vue";
import ComputedVue from "./Applications/ComputedVue.vue";
import CreatedVue from "./Applications/CreatedVue.vue";
import DataVue from "./Applications/DataVue.vue";
import Events from "./Applications/EventsVue.vue";
import JsonImprtVue from "./Applications/JsonImportVue.vue";
import MethodsVue from "./Applications/MethodsVue.vue";
import MountedVue from "./Applications/MountedVue.vue";
import PropsVue from "./Applications/PropsVue/PropsVue.vue";
import VifVelse from "./Applications/VifVelse.vue";
import VmodelVue from "./Applications/VmodelVue.vue";
import Vshow from "./Applications/VshowVue.vue";
import WatchVue from "./Applications/WatchVue.vue";
import SettingsApplication from "./Applications/SettingsApplication.vue";
import VFor from "./Applications/VFor.vue";
import ApplicationOne from "./Applications/ApplicationOne.vue";
import CustomSelect from "./Applications/CustomSelect.vue";
export default {
  components: {
    StartLeftApplications,
    StartConfiguration,
    ComputedVue,
    CreatedVue,
    DataVue,
    Events,
    JsonImprtVue,
    MethodsVue,
    MountedVue,
    PropsVue,
    VifVelse,
    VmodelVue,
    Vshow,
    WatchVue,
    SettingsApplication,
    VFor,
    ApplicationOne,
    CustomSelect
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["currentLeftComponent", "currentRightComponent"]),
  },
};
</script>
<style scoped>
.main-app {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}
.flex-container {
  width: 80%;
  min-height: 80%;
  -webkit-box-shadow: 0px 4px 53px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 4px 53px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 4px 53px 2px rgba(34, 60, 80, 0.2);
  display: flex;
  flex-wrap: wrap;
}
.left-app,
.right-app {
  width: 50%;
  min-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50%;
}
.left-app {
  background-color: var(--background-color-left-app);
}
.right-app {
  background-color: var(--background-color-right-app);
}

@media (max-width: 960px) {
  .main-app {
    display: block;
  }
  .flex-container {
    width: 100%;
    min-height: 100%;
  }
  .left-app,
  .right-app {
    width: 50%;
  }
}
</style>
