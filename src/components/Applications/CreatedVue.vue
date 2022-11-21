<template>
  <div class="application-created-mechanics-vue">
    <ButtonBackToStartComponent :backToStartApp="backToStartLeftComponent" />
    <h3 class="created-mechanics-title">username = {{ getUserName }}</h3>
  </div>
</template>
<script>
import ButtonBackToStartComponent from "../BackToStartApp/ButtonBackToStartComponents.vue";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      username: "Alina",
    };
  },
  created() {
    alert("До создания DoM username = " + this.username);
  },
  computed: {
    ...mapState(["componentNames"]),
    getUserName() {
      return this.username;
    },
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
};
</script>
<style scoped>
.application-created-mechanics-vue {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
}
.created-mechanics-title{
    font-size: var(--font-size);
}
</style>