<template>
  <v-container>
    <Carousel :autoplay="2000" v-bind="settings" :breakpoints="breakpoints" wrapAround>
      <Slide v-for="slide in slides" :key="slide">
        <div class="carousel__item">
          <DynamicImage :imagePath="slide" />
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </v-container>
</template>

<script>
import { ref } from "vue";
import DynamicImage from "@/components/general/DynamicImage.vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  components: {
    Carousel,
    Slide,
    Navigation,
    DynamicImage,
  },
  setup() {
    const settings = ref({
      itemsToShow: 1,
      snapAlign: "center",
    });
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    const breakpoints = ref({
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: "start",
      },
    });

    const slides = ref([
      "starburst.png",
      "logi-logo.jpg",
      "Neo4j.png",
      "SciBite.jpg",
      "snowflake-logo.png",
      "streamsets.png",
      "cloudera.png",
      "microsoft.webp",
      "aws.webp",
      "google_cloud.png",
    ]);

    return {
      settings,
      breakpoints,
      slides,
    };
  },
};
</script>

<style lang="scss" scoped>
.v-container {
  max-width: 1200px;
}
</style>
