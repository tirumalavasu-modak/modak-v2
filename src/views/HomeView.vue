<template>
  <v-responsive>
    <v-container class="h-[54rem] flex flex-row -mt-24 p-0" fluid>
      <v-responsive class="hero-bg flex flex-row">
        <div class="w-1/2"></div>
        <div class="fill-height flex flex-grow items-center">
          <div class="w-full flex flex-col align-start flex-grow">
            <h1 class="text-primary font-oswald text-5xl">We Deliver Your</h1>
            <h1 class="text-[#1b4962] font-oswald text-5xl">
              Modern Data Platforms
            </h1>
            <v-btn
              class="my-4 px-8 capitalize"
              color="secondary"
              variant="elevated"
              rounded="xl"
              size="large"
              @click="$router.push('/request-demo')"
              >Request Demo</v-btn
            >
            <p class="text-[#005676] text-2xl">
              Accelerate your data transformation journey into cloud by <br />
              4x with Modak Nabu™
            </p>
          </div>
        </div>
      </v-responsive>
    </v-container>
    <ModakAwards class="my-24" />
    <ModakFeatures class="my-24" />
    <ModakFeedback class="mt-24 mb-4" />
    <v-container class="my-8 md"
      ><span class="text-[1.625rem] text-[#005676]"
        >Solving your toughest data challenges at scale, in production with
        tangible results within weeks not months or years</span
      ></v-container
    >
    <v-parallax height="240" src="@/assets/images/Fastertime-to-Value-bg.png">
      <v-container class="md">
        <h3 class="w-full text-center flex flex-col items-center mt-12 leading-tight">
          <span class="text-[#00adee] font-oswald"
            >Faster Time-to-Value in your Digital Transformation</span
          >
          <span class="text-[#1b4962]">Journey with Modak Nabu™</span>
        </h3>
      </v-container>
    </v-parallax>
    <ModakSolutions class="my-16" />
    <v-container class="md flex flex-row items-center">
      <v-img src="@/assets/images/Modak-Circle.png" height="600"></v-img>
      <div class="flex flex-col ml-10">
        <h1>
          <span class="text-modak-blue text-5xl">Data Automation<br/></span>
          <span class="text-navy text-5xl">Services</span>
        </h1>
        <span class="my-4 text-lg text-navy">Over 2.5 million hours of expertise in the latest Cloud, Big Data and AI, Modak is your trusted partner for deploying enterprise-wide Data Platform</span>
        <span class="font-oswald text-[1.625rem] font-normal">
          <span class="text-navy">Accelerated data engineering outcomes<br/> driven by </span>
          <span class="text-modak-blue">active metadata</span>
        </span>
      </div>
    </v-container>
    <ClientsCarousel class="my-12"/>
  </v-responsive>
</template>

<script>
import ModakAwards from "@/components/home/ModakAwards.vue";
import ModakFeatures from "@/components/home/ModakFeatures.vue";
import ModakFeedback from "@/components/home/ModakFeedback.vue";
import ModakSolutions from '@/components/home/ModakSolutions.vue';
import ClientsCarousel from "@/components/home/ClientsCarousel.vue";
export default {
  components: {
    ModakAwards,
    ModakFeatures,
    ModakFeedback,
    ModakSolutions,
    ClientsCarousel
  },
  setup() {
    return {}
  },
};
</script>

<style scoped>
.hero-bg {
  background-image: url("@/assets/images/Hero_image.svg");
  background-size: cover;
  background-position: center;
}
.v-container.md {
  max-width: 1200px;
}
</style>
