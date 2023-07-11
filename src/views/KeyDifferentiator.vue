<template>
  <v-container class="mt-12">
    <PageHeader title="Key Differentiator" subtitle="Things that make us Unique" />
    <v-row class="flex flex-row items-center my-8">
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/Integrity.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h3><span class="text-navy">Integrity</span></h3>
        <p>Integrity is not just the best policy, but it is also one of the most important values to hold in any organization, as it’s the only way to build a successful organization.</p><br/>
        <p>Our culture of integrity results in a trusted workplace environment. Allowing respect and results in a successful and profitable organization. Our employees proactively support by telling the facts without any fear or hesitation. Thus, small problems can be identified early on, and therefore our managers are armed beforehand with the information needed to make optimal decisions.</p>
      </v-col>
    </v-row>
    <v-row class="flex flex-row items-center my-8">
      <v-col cols="12" md="6">
        <h3><span class="text-navy">Bias for action</span></h3>
        <p>The core quality that drives Modak is to deliver services efficiently in time. Further, we at Modak don’t compromise on quality while delivering the services.</p><br/>
        <p>This quality helps in drawing clients and also the overall work ecosystem. The employees at Modak are well-trained and have inherited the value of delivering services while maintaining quality.</p>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/Bias-for-action.svg"></v-img>
      </v-col>
    </v-row>
    <v-row class="flex flex-row items-center my-8">
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/Transperancy.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h3><span class="text-navy">Transparency</span></h3>
        <p>Transparency is given the highest priority in Modak’s work culture. It always keeps the spirits of the employees high and allows them to share their opinions and communicate better.</p>
        <p>The agile methodology of working is the strongest pillar, which keeps the company standing tall.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageHeader from '@/components/general/PageHeader.vue'
export default {
  components: {
    PageHeader
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.v-container {
  max-width: 1200px;
}
</style>