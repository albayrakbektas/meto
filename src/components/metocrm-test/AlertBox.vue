<template>
  <div>
    <span>{{ user.playerId }}</span>
    <span>{{ user.userAgent }}</span>
    <span>{{ user.webViewUserAgent }}</span>
  </div>
</template>

<script>
export default {
  name: "AlertBox",
  props: {
    user: Object,
  },
};
</script>

<style scoped></style>
