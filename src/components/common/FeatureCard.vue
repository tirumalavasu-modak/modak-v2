<template>
  <div class="max-w-7xl mx-auto grid grid-cols-2 gap-16 my-24 items-center feature-card">
    <v-img :src='feature.img' cover v-if="feature.dir === 'left'" max-height="400" class="w-full"></v-img>
    <div class="flex flex-col">
      <h4 class="text-black my-2 text-left" v-html="feature.title"></h4>
      <p class="my-2" v-html="feature.description"></p>
      <ul v-if="feature.items.length > 0" class="list-disc">
        <li v-for="(item, i) in feature.items" :key="i">{{item}}</li>
      </ul>
    </div>
    <v-img :src='feature.img' cover v-if="feature.dir === 'right'" max-height="400"></v-img>
  </div>
</template>

<script>
export default {
  name: 'FeatureCard',
  props: ['feature']
}
</script>

<style lang="scss" scoped>
.feature-card p, li {
  @apply text-lg;
} 
</style>