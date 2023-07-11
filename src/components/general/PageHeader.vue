<template>
  <v-container>
    <h1 class="text-navy">{{ data.title }}</h1>
    <h2 class="text-modak-blue font-medium leading-normal">
      {{ data.subtitle }}
    </h2>
  </v-container>
</template>

<script>
import { toRaw } from 'vue'
export default {
  props: ['title', 'subtitle'],
  setup(props) {
    const data = toRaw(props)
    return {
      data
    };
  },
};
</script>

<style lang="scss" scoped></style>
