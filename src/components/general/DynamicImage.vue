<script setup>
import { ref, watchEffect, defineProps } from 'vue'

const props = defineProps({
  imagePath: { type: String },
  height: { type: String }
})

const logo = ref()
watchEffect(async () => {
  logo.value = (await import(/* @vite-ignore */ `@/assets/images/${props.imagePath}`)).default
})
</script>

<template>
  <img :src="logo" :height="height"/>
</template>
