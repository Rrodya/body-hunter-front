<template>
  <div class="main-page">
    <h1 class="main-page__title">Добро пожаловать</h1>
    <div class="main-page__button">
      <router-link class="main-page__login" to="/login">Авторизация</router-link>
      <router-link class="main-page__register" to="/register">Регистрация</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import sendReq from "@/services/api";

@Component({
  created() {
    sendReq('users');
  }
})
export default class MainPage extends Vue{

}
</script>

<style scoped>

</style>
