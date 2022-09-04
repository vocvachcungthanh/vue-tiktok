<template>
  <GlobalStyles>
    <template v-slot:global-style>
      <router-view />
    </template>
  </GlobalStyles>
</template>

<script>
import GlobalStyles from "@/components/GlobalStyles";

export default {
  name: "App",

  components: {
    GlobalStyles,
  },
};
</script>
