<template>
  <DefaultLayout>
    <template v-slot:content>
      <div id="profile">
        <h1>Page Profile</h1>
      </div>
    </template>
  </DefaultLayout>
</template>

<script>
import { DefaultLayout } from "@/layouts";

export default {
  name: "profile-page",

  components: {
    DefaultLayout,
  },
};
</script>

<style></style>
