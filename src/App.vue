<template>
  <div id="app">
    <FormMain />
  </div>
</template>

<script>
import FormMain from "@/components/form/FormMain";
export default {
  name: "App",
  components: { FormMain },
  data() {
    return {};
  },
  created() {
    window.addEventListener("message", (data) => {
      alert(data);
      console.log("vue-data: " + data);
    });
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
  font-size: 14px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
