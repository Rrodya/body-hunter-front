<template>
  <input
      class="v-input"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeHold"
  >
</template>

<script lang="ts" src="./v-input.ts"></script>
<style src="./v-input.css"></style>
