<template>
  <header class="wrapper">
    <div class="inner">
      <div class="logo">
        <img :src="iconLogo" alt="Tiktok" />
      </div>
      <div class="search">
        <input
          type="text"
          placeholder="Search accounts and videos"
          spellcheck="false"
          class="search__input"
        />
        <button class="search__clear">
          <FontAwesomeIcon :icon="['fas', 'fa-circle-xmark']" />
        </button>

        <button class="search__loading">
          <FontAwesomeIcon :icon="['fas', 'fa-spinner']" />
        </button>

        <button class="search__btn">
          <IconSearch className="search__btn--img" />
        </button>
      </div>
      <div class="actions"></div>
    </div>
  </header>
</template>

<script>
import images from "@/assets/images";

import { IconSearch } from "@/components/Icons";

export default {
  name: "header-default",

  data() {
    return {
      iconLogo: images.logo,
    };
  },

  components: {
    IconSearch,
  },
};
</script>

<style lang="scss" scoped>
@import "./Header.scss";
</style>
