<template>
  <img
    alt="Vue logo"
    src="@/assets/logo.png" />

  <component
    v-if="components.get('HelloWorld')"
    :is="components.get('HelloWorld')"
    msg="test" />
  <component
    v-if="component"
    :is="component"
    msg="test" />
</template>

<!--  v-if="components.length > 0 " -->
<script lang="ts">
import HelloWorld1 from "../../components/HelloWorld1.vue";
import { Component, defineComponent, ref, shallowRef } from "vue";

const component = shallowRef(HelloWorld1);

const components = shallowRef(
  await process.env.VUE_APP_PAGES.split(",").reduce(
    async (acc: Promise<Map<string, Component>>, page: string) => {
      const componentsMap = await acc;
      return componentsMap.set(
        page,
        (await import(`../../components/${page}.vue`)).default
      );
    },
    Promise.resolve(new Map())
  )
);

export default defineComponent({
  name: "App",
  computed: {
    component(): Component {
      return component.value;
    },
    components(): Array<Component> {
      return components.value;
    },
  },
  mounted: async function () {
    console.log("mounted");
  },
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
Component, ComputedOptions, , MethodOptionsComponent, ComputedOptions, ,
MethodOptions
