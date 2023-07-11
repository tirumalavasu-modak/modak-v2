<template>
  <v-container class="mt-12">
    <PageHeader title="Data Unification" subtitle="Modak's unification process combines human expertise, machine learning algorithms, data science, and in-house developed fingerprinting technology" />
    <v-container>
      <v-img src="@/assets/images/diagram-1.png" height="240"></v-img>
    </v-container>
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/Data-Unification-1.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h3><span class="text-modak-blue">Traditional approach to </span><br/><span class="text-navy">Data Unification</span></h3>
        <p>Data Unification involves the process of ingesting, transforming, mapping, and deduplicating, and exporting the data from multiple data sources. Two software tools are commonly used by IT teams when dealing with transactional data sets to feed into data warehouses: ETL (Extract Transform and Load) software and MDM (Master Data Management) software.</p>
        <br>
        <h3><span class="text-navy">The Challenge</span></h3>
        <p>The problem of unifying 3 different data standards with 10 records each doesn’t require a tool. Instead, the user can utilize a whiteboard and a pen to solve the issue. When it comes to five different data standards with 1 lakh rows, the traditional ETL approach can be used. But, if the problem is to solve tens or hundreds of separate data sources with 5000+ mapping rules, 3000+ variations in column names, and billions of records in each source, then the traditional ETL solution is not feasible.</p>
      </v-col>
    </v-row>
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <h3><span class="text-modak-blue">Modak’s </span><span class="text-navy">Solution</span></h3>
        <p>Modak’s advanced capabilities in meta programming and fingerprinting techniques change the paradigm with machine learning techniques, which replace the traditional approach.</p>
        <br>
        <p>Through extensive automation, Modak leverages big data technologies and cloud infrastructure on a massive scale that ensures reduction in time, cost, and risk for large scale data lake projects.</p>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/Modaks-Solution.svg"></v-img>
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