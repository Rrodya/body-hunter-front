<template>
  <div class="main-page">
    <h1 class="main-page__title title">Welcome</h1>
    <div class="main-page__button">
      <router-link class="main-page__login button-link" to="/login">Login</router-link>
      <router-link class="main-page__register button-link" to="/register">Sign</router-link>
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
export default class HomeMain extends Vue{

}
</script>

<style scoped>

.main-page {
  margin-top: 200px;
}
.main-page__button {
  width: 100px;
  display: flex;
  flex-direction: column;
  margin: 70px auto;
}
.main-page__login, .main-page__register{
  width: 100%;
  margin-bottom: 10px;
}
</style>
