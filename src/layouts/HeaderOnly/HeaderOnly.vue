<template>
  <div class="header-only">
    <header-default />
    <slot name="content"></slot>
  </div>
</template>

<script>
import { Header } from "@/layouts/components";

export default {
  name: "header-only",

  components: {
    HeaderDefault: Header,
  },
};
</script>
