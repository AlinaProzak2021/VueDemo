<template>
  <div class="application" :class="[this.currentTheme, this.currentAppFont, this.currentFontSize]">
    <HomePage />
  </div>
  <ThemeProvider />
</template>

<script>
import { mapState } from "vuex";
import ThemeProvider from "./components/ThemeProvider/ThemeProvider.vue";
import HomePage from "./components/HomePage.vue";
export default {
  name: "App",
  components: {
    HomePage,
    ThemeProvider,
  },
  computed: {
    ...mapState(["currentTheme", "currentAppFont", "currentFontSize"]),
  },
};
</script>

<style>
:root {
  --background-color-left-app: #61e7ff;
  --background-color-right-app: #acf2e0;
  --color-text-left-app: black;
  --color-text-title-right-app: black;
  --color-text-right-app: black;
  --color-text-right-app-hover: white;
  --background-color-right-app-element: white;
  --background-color-left-app-element: #fffefb;
  --border-color-left-app: #8a2be2;
  --border-color-right-app: #8a2be2;
  --text-color-error-message: #eb4034;
  --background-color-hover: dodgerblue;
  --text-color-button: white;
  --background-color-not-allowed: #a9a9a9;
  --font-family: "Times New Roman", sans-serif;
  --font-size: 14px; 
}
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;

  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
.application {
  width: 100%;
  height: 100%;
  font-family: var(--font-family);
  font-size: var(--font-size);
}
</style>
