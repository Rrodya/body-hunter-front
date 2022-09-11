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
   padding: 10px 30px;
   background-color: #ffffff;
   box-shadow: 0px 0px 10px rgba(0, 0, 0, .3);
   outline: none;
   border: none;
   border-radius: 10px;
   transition: all .2s ease;
   cursor: pointer;
   color: #363635;
   font-weight: 500;
   font-family: Avenir, Helvetica, Arial, sans-serif;

 }

 .v-button:hover {
   box-shadow: 0px 0px 15px rgba(0, 0, 0, .1);
   transform: scale(1.2);
 }
</style>
