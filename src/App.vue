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
    return {
      isAlert: false,
    };
  },
  created() {
    window.addEventListener("message", (event) => {
      alert(event.data);
      alert("vue-listener");
      console.log("vue-listener: " + event.data + JSON.stringify(event.data));
    });
    // eslint-disable-next-line no-undef
    Print.postMessage("Hello World being called from Javascript code");
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
