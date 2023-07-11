<template>
  <v-container class="mt-12">
    <PageHeader
      title="Our Employees"
      subtitle="To win in the marketplace you must first win in the workplace"
    />
    <v-row class="flex flex-col px-8">
      <span class="h-0.5 w-20 bg-black block mb-4"></span>
      <span class="font-bold text-md">Doug Conant</span>
      <p>
        At the core of Modak are our Employees. We treat our employees as we
        treat our customers because we believe, satisfied employees maintain and
        nurture satisfying customer experiences.
      </p>
    </v-row>
    <v-row class="flex justify-center my-8">
      <v-col cols="12" md="4" class="text-center mr-8">
        <h4 class="text-navy">Beautiful journey</h4>
        <p class="my-4 text-left">"The most reliable company which gives you enough challenges to grow in professional life. Having completed 9 plus years of employment at Modak , I can proudly say that every day you are put through a challenging role, helping you to use your full potentials and thus, aiding to meet your personal and organizational goals. At Modak , technology and automation go hand in hand and its awesome to be part of this beautiful journey."</p>
        <span class="text-modak-blue font-bold text-xl block">Rajesh Vassey</span>
        <span class="text-sm text-navy block">Technical Program Manager</span>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
        <h4 class="text-navy">A jack of all trades</h4>
        <p class="mt-4 mb-16 text-left">"Modak has helped me in becoming " a jack of all trades " by giving me the right guidance and providing me with opportunities to prove myself. The management is always open to new ideas and encourages every individual to be an innovator. Hence, it’s a right place for those who want to be self-driven."</p>
        <span class="text-modak-blue font-bold text-xl block">Akhil Katkam</span>
        <span class="text-sm text-navy block">Business Analyst</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageHeader from "@/components/general/PageHeader.vue";
export default {
  components: {
    PageHeader,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.v-container {
  max-width: 1200px;
}
</style>
