<template>
  <div class="alert-box" v-show="isAlert">
    <span>{{ user.playerId }}</span>
    <span>{{ user.userAgent }}</span>
    <span>{{ user.webViewUserAgent }}</span>
  </div>
</template>

<script>
export default {
  name: "AlertBox",
  props: {
    isAlert: Boolean,
    user: Object,
  },
};
</script>

<style scoped lang="">
.alert-box {
  border: 1px solid #000000;
  border-radius: 4px;
  padding: 1rem 2rem;
}
</style>
