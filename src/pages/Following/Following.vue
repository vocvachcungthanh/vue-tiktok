<template>
  <DefaultLayout>
    <template v-slot:content>
      <div class="following">
        <h1>Page Following</h1>
      </div>
    </template>
  </DefaultLayout>
</template>

<script>
import { DefaultLayout } from "@/layouts";

export default {
  name: "following-page",

  components: {
    DefaultLayout,
  },
};
</script>

<style></style>
