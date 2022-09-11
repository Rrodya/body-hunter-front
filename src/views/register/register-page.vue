<template>
  <div class="register">
    <h1 class="register-page__title title">Registration</h1>
    <router-link class="button-link register-page__goLogin" to="/login">Sign up</router-link>
    <div class="register-form">
      <v-input
          placeHold="Email"
          type="email"
          v-model="registerData.email"
          :value="registerData.email"
          @input="changeEmail"
          class="register-form__input register-form__email"></v-input>
      <v-input
          placeHold="Password"
          type="password"
          v-model="registerData.password"
          :value="registerData.password"
          class="register-form__input register-form__password"></v-input>
      <v-input
          placeHold="Full name"
          v-model="registerData.name"
          :value="registerData.name"
          class="register-form__input register-form__name"></v-input>
      <v-button
          button-name="Sign in"
          class="register-form__submit"
          @click="goRegister"
      ></v-button>
      <p
          v-if="messageValid"
          class="register-form__message-valid"
      >{{ messageValid}}</p>
    </div>
  </div>
</template>

<script lang="ts" src="./register.ts"></script>
<style src="./register.css"></style>
