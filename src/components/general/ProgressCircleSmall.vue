<template>
  <div class="flex flex-col text-center">
    <div class="ko-progress-circle" :data-progress="dataProgress">
      <div class="ko-circle">
        <div class="full ko-progress-circle__slice">
          <div class="ko-progress-circle__fill"></div>
        </div>
        <div class="ko-progress-circle__slice">
          <div class="ko-progress-circle__fill"></div>
          <div class="ko-progress-circle__fill ko-progress-circle__bar"></div>
        </div>
      </div>
      <div class="ko-progress-circle__overlay">
        <v-img :src="imgPath" class="h-20 pt-8"></v-img>
      </div>
    </div>
    <span class="text-navy text-md font-semibold">{{ title }}</span>
    <span v-if="subTitle">{{ subTitle }}</span>
    <v-btn v-if="url" aria-label="learn more" variant="text" size="large" color="green" @click="$router.push(url)">LEARN MORE ></v-btn>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useAppStore } from '@/store/app';
export default {
  props: ['imgPath', 'title', 'subTitle', 'url', 'pos'],
  setup(props) {
    const appStore = useAppStore()

    const dataProgress = computed(() => {
      if (appStore.scrollY >= props.pos) {
        return 70
      } else {
        return 0
      }
    })

    return {
      dataProgress
    }
  }
}
</script>

<style lang="scss" scoped>
$circle-size: 120px;
$circle-background: #D9D9D9;
$circle-color: #1291D4;
$inset-size: 112px;
$inset-color: #fbfbfb;
$transition-length: 1s;

.ko-progress-circle {
  margin: 20px auto;
  width: $circle-size;
  height: $circle-size;

  background-color: $circle-background;
  border-radius: 50%;

  .ko-progress-circle__slice,
  .ko-progress-circle__fill {
    width: $circle-size;
    height: $circle-size;
    position: absolute;
    -webkit-backface-visibility: hidden;
    transition: transform $transition-length;
    border-radius: 50%;
  }

  .ko-progress-circle__slice {
    clip: rect(0px, $circle-size, $circle-size, $circle-size/2);

    .ko-progress-circle__fill {
      clip: rect(0px, $circle-size/2, $circle-size, 0px);
      background-color: $circle-color;
    }
  }

  .ko-progress-circle__overlay {
    width: $inset-size;
    height: $inset-size;
    position: absolute;
    margin-left: ($circle-size - $inset-size)/2;
    margin-top: ($circle-size - $inset-size)/2;

    background-color: $inset-color;
    border-radius: 50%;
  }

  $i: 0;
  $increment: 180deg / 100;

  @while $i <=100 {
    &[data-progress='#{$i}'] {

      .ko-progress-circle__slice.full,
      .ko-progress-circle__fill {
        transform: rotate($increment * $i);
      }

      .ko-progress-circle__fill.ko-progress-circle__bar {
        transform: rotate($increment * $i * 2);
      }

      $i: $i + 1;
    }
  }
}
</style>