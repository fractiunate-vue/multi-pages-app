<template>testpage</template>

<!--  v-if="components.length > 0 " -->
<script lang="ts">
import { Component, defineComponent, ref, shallowRef } from "vue";

export default defineComponent({
  name: "SubApp",
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
