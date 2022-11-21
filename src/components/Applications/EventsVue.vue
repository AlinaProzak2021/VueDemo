<template>
  <div class="application-events-mechanics-vue">
    <ButtonBackToStartComponent :backToStartApp="backToStartLeftComponent" />
    <h3 class="events-mechanics-title">
      Демонстрация возможностей Vue - @events
    </h3>
    <div class="events-mechanics-click">
      <h3 class="events-mechanics-title">Событие Click</h3>
      <button class="events-mechanics-button" @click="countNumberClicks()">
        Нажми меня
      </button>
      <p class="events-mechanics-message">
        Счетчик события Click - {{ numberClicks }}
      </p>
    </div>
    <div class="events-mechanics-submit">
      <form
        class="events-mechanics-form"
        @submit.prevent="setFullName(firstName, lastName)"
      >
        <h3 class="events-mechanics-title">Событие Submit</h3>
        <input
          placeholder="Введите имя"
          class="form-input"
          v-model="firstName"
        />
        <input
          placeholder="Введите Фамилию"
          class="form-input"
          v-model="lastName"
        />
        <button class="events-mechanics-button">Ввести</button>
      </form>
      <p class="events-mechanics-message">
        Отправленные данные - {{ fullName }}
      </p>
    </div>
  </div>
</template>
<script>
import ButtonBackToStartComponent from "../BackToStartApp/ButtonBackToStartComponents.vue";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      numberClicks: 0,
      firstName: "",
      lastName: "",
      fullName: "",
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
    countNumberClicks() {
      this.numberClicks++;
    },
    setFullName(firstName, lastName) {
      this.fullName = firstName + " " + lastName;
    },
  },
  components: {
    ButtonBackToStartComponent,
  },
};
</script>
<style scoped>
.application-events-mechanics-vue {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
}
.events-mechanics-title {
  font-size: var(--font-size);
  margin-bottom: 15px;
}
.events-mechanics-click {
  background-color: var(--background-color-left-app-element);
  width: 300px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.events-mechanics-click > .events-mechanics-title {
  margin-top: 15px;
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
.events-mechanics-button {
  width: 220px;
  height: 30px;
  background: var(--border-color-left-app);
  color: var(--text-color-button);
  border: none;
  margin: 0 auto;
  margin-bottom: 15px;
}
.events-mechanics-message {
  margin-bottom: 30px;
}
.events-mechanics-form {
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color-left-app-element);
  padding-top: 15px;
  align-items: center;
}
.form-input {
  padding-left: 15px;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  border: 1px solid var(--border-color-left-app);
  background-color: var(--background-color-left-app-element);
  margin-bottom: 10px;
  margin: 0 auto;
  margin-bottom: 30px;
}
.events-mechanics-submit {
  width: 300px;
  background-color: var(--background-color-left-app-element);
  margin: 0 auto;
}
.events-mechanics-submit > .events-mechanics-message {
  text-align: center;
}
@media (max-width: 360px) {
  .events-mechanics-form {
    width: 100%;
  }
}
</style>