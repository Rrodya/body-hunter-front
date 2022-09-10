<template>
  <button
      @click="$emit('click')"
      class="v-button"
  >{{buttonName }}</button>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator";


@Component
export default class VButton extends Vue {
  @Prop({
    type: String,
    required: false,
    default: ''
  }) readonly buttonName: string | undefined
}

</script>

<style scoped>
 .v-button {
   padding: 20px 30px;
   background-color: transparent;
   outline: none;
   border: 1px solid #ffffff;
   color: #ffffff;
   transition: all .2s ease;
   cursor: pointer;
 }

 .v-button:hover {
   background-color: #ffffff;
   color: #000000;
 }
</style>
