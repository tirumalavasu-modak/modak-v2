<template>
  <v-container class="mt-12">
    <PageHeader title="About us" subtitle="Modak provides advanced data engineering software and services that accelerate enterprise data transformation initiatives by 4-10X, through deep data expertise, automation, and DataOps studios." />
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/About-Us.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <p>Modak is a solutions company that enables enterprises to manage and utilize their data landscape effectively. Modak provides technology, cloud, and vendor-agnostic to customer datafication initiatives. Modak uses machine learning (ML) techniques to transform how structured and unstructured data is prepared, consumed, and shared. Modak’s Nabu™ is an enterprise software product and has been covered in Gartner’s “Market Guide to Data preparation 2019.” Modak Nabu™ converges data discovery, ingestion, preparation, cataloging, unification, quality, and profiling into a single data engineering platform to provide Google-like metadata search across data repositories. By automating mundane and laborious data preparation tasks, Modak Nabu™ significantly reduces the time taken to develop and deploy data pipelines across thousands of on-premise, cloud, and external data sources. Modak’s portfolio of DataOps studios broadly covers managed data operation services, enterprise data fabric, augmented data preparation data quality, managed services, and governed data lake.</p>
      </v-col>
    </v-row>
    <v-row class="flex flex-row items-center my-8">
      <v-col cols="12" md="6">
        <h3 class="text-navy">Our Vision</h3>
        <p>To be the most innovative solutions provider and preferred partner for Data Analytics worldwide.</p>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/Our-Vision.svg"></v-img>
      </v-col>
    </v-row>
    <v-row class="flex flex-row items-center my-8">
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/Our-Mission.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h3 class="text-navy">Our Mission</h3>
        <p>To enable organizations to make better sense of data and translate that intelligence into smart decisions.</p>
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