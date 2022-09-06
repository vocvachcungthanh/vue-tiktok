<template>
  <header class="wrapper">
    <div class="inner">
      <font-awesome-icon :icon="{ faUserSecret }" />

      <div class="logo">
        <img :src="iconLogo" alt="Tiktok" />
      </div>
      <div class="search">
        <input
          type="text"
          placeholder="Search accounts and videos"
          spellcheck="false"
        />
        <button class="clear">
          <!-- Clear -->
        </button>

        <!-- Loading -->

        <button class="search-btn">
          <!-- Search -->
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import images from "@/assets/images";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "header-default",

  data() {
    return {
      iconLogo: images.logo,
      faUserSecret,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./Header.scss";
</style>
