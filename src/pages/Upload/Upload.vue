<template>
  <HeaderOnly>
    <template v-slot:content>
      <div class="upload-page">
        <h1>Page Upload</h1>
      </div>
    </template>
  </HeaderOnly>
</template>

<script>
import { HeaderOnly } from "@/layouts";

export default {
  name: "upload-page",

  components: {
    HeaderOnly,
  },
};
</script>
