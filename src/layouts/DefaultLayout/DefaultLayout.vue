<template>
  <div class="wrapper">
    <HeaderDefault />
    <div class="container">
      <SidebarDefault />
      <div class="content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { Header, Sidebar } from "@/layouts/components";

export default {
  name: "default-layout",
  components: {
    HeaderDefault: Header,
    SidebarDefault: Sidebar,
  },
};
</script>

<style lang="scss" scoped>
@import "./DefaultLayout.scss";
</style>
