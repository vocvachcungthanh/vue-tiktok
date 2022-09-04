<template>
  <div class="global-style">
    <slot name="global-style"></slot>
  </div>
</template>

<script>
export default {
  name: "global-style",
};
</script>

<style lang="scss">
@import "./GlobalStyles.scss";
</style>
