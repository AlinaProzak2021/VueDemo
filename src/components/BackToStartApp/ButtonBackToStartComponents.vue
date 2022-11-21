<template>
  <div class="back-to-start-app" @click="backToStartApp(componentName)">
    <img class="back-img" src="../../../public/assets/images/back.png" alt="картинка назад" />
  </div>
</template>
<script>
export default {
  name: "back-button-left-app",
  props: {
    backToStartApp: Function
  }
};
</script>
<style>
.back-to-start-app {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
.back-to-start-app:hover {
  transform: scale(var(--transform-scale));
}
.back-img {
  pointer-events: none;
  width: 100%;
  height: 100%;
}

.back-img:hover {
  transform: scale(var(--transform-scale));
}
</style>