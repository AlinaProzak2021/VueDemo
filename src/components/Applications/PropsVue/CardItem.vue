<template>
  <div class="card-item">
    <div class="card-item-img">
      <img :src="image" alt="" />
    </div>
    <p class="card-item-title">{{ title }}</p>
    <p class="card-item-price">{{ price }} руб</p>
  </div>
</template>
<script>
export default {
  props: ["title", "image", "price"],
};
</script>
<style scoped>
.card-item {
  width: 150px;
  background: var(--background-color-left-app-element);
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
 
  cursor: pointer;
  margin-bottom: 25px;
}
.card-item-title,
.card-item-price {
  margin-bottom: 10px;
  text-align: center;
}
.card-item-img {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  border-radius: 0;
}
img {
  width: 100%;
  height: 100%;
   border-radius: 0;
}
</style>