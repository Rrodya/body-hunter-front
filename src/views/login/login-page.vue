<template>
  <div class="login-page">
    <h1 class="login-page__title title">Login</h1>
    <router-link class="button-link" to="/register">Sign in </router-link>
    <div class="login-page__form">
      <v-input
          class="login-page__email login-page__input"
          :value="loginData.email"
          v-model="loginData.email"
          place-hold="Email"></v-input>
      <v-input
          class="login-page__password login-page__input"
          :value="loginData.password"
          v-model="loginData.password"
          place-hold="Password"></v-input>
      <v-button
          button-name="Sign up"
          class="login-form__submit"
          @click="goLogin"
      ></v-button>
      <p
          v-if="messageValid"
          class="register-form__message-valid"
      >{{ messageValid}}</p>
    </div>
  </div>
</template>

<script lang="ts" src="./login.ts"></script>
<style src="./login.css"></style>
