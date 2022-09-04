<template>
  <DefaultLayout>
    <template v-slot:content>
      <div id="home">
        <h1>Page Home</h1>
      </div>
    </template>
  </DefaultLayout>
</template>

<script>
import { DefaultLayout } from "@/layouts";

export default {
  name: "home-page",

  components: {
    DefaultLayout,
  },
};
</script>
