<template>
  <div class="max-w-7xl mx-auto grid grid-flow-rows lg:grid-cols-2 lg:gap-16 lg:my-24 xl:grid-cols-2 xl:gap-16 xl:my-24 2xl:grid-cols-2 2xl:gap-16 2xl:my-24 p-8 items-center feature-card">
    <v-img :src='feature.img' cover v-if="feature.dir === 'left'" max-height="400" class="w-full m-hide"></v-img>
    <v-img :src='feature.img' cover max-height="400" class="w-full lg:hidden xl:hidden 2xl:hidden"></v-img>
    <div class="flex flex-col">
      <h4 class="text-black my-2 text-left" v-html="feature.title"></h4>
      <p class="my-2 text-lg text-black" v-html="feature.description"></p>
      <ul v-if="feature.items.length > 0" class="list-disc">
        <li v-for="(item, i) in feature.items" :key="i">{{item}}</li>
      </ul>
    </div>
    <v-img :src='feature.img' cover v-if="feature.dir === 'right'" max-height="400" class="m-hide"></v-img>
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