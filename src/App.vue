<template>
  <div id="app">
    <FormMain />
    <AlertBox :is-alert="isAlert" />
  </div>
</template>

<script>
import FormMain from "@/components/form/FormMain";
import AlertBox from "@/components/metocrm-test/AlertBox.vue";
export default {
  name: "App",
  components: { AlertBox, FormMain },
  data() {
    return {
      isAlert: false,
      user: {},
    };
  },
  created() {
    window.addEventListener("message", (event) => {
      const { playerId, userAgent, webViewUserAgent } = event.data;
      this.user = event.data;
      this.isAlert = true;
      console.log("eventData: " + { playerId, userAgent, webViewUserAgent });
      // alert(event.data);
      // alert("vue-listener");
      // console.log("vue-listener: " + event.data + JSON.stringify(event.data));
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
