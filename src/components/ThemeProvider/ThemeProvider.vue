<script>
export default {
  name: "Theme-provider",
};
</script>
<style>
.lightTheme {
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
}
.DarkTheme {
  --background-color-left-app: #40e0d0;
  --background-color-right-app: #ffb6c1;
  --color-text-left-app: black;
  --color-text-title-right-app: black;
  --color-text-right-app: black;
  --color-text-right-app-hover: white;
  --background-color-right-app-element: #87cefa;
  --background-color-left-app-element: #fffefb;
  --border-color-left-app: #8a2be2;
  --border-color-right-app: #1e90ff;
  --text-color-error-message: #eb4034;
  --background-color-hover: #1e90ff;
  --text-color-button: white;
  --background-color-not-allowed: #a9a9a9;
}
.Montserrat {
  --font-family: "Montserrat", sans-serif;
}
.Sono {
  --font-family: "Sono", sans-serif;
}

.Times {
  --font-family: "Times New Roman", sans-serif;
}
.smallFont {
  --font-size: 12px;
}
.averageFont {
  --font-size: 14px;
}

.bigFont {
  --font-size: 18px;
}
</style>