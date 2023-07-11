<template>
  <v-container class="mt-12">
    <PageHeader title="Pharma R&D" subtitle="Pharma companies use science-based innovations, analytical tools, and services to give out answers to some of the most challenging healthcare problems" />
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/Pharma-R_D.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <p>They help people live a long and healthy life. One such Fortune 500 pharma company wanted to analyze the biomarker data and unmined clinical trial. Modak Analytics, along with a consultant team, undertook this transformation. There were many challenges:</p><br/>
        <ul class="list-decimal pl-4">
          <li>A large amount of legacy trial data – The biopharmaceutical company had thousands of legacy datasets ranging from the past 10 years to a constantly growing set of new clinical trial data, to be integrated.</li>
          <li>A large amount of legacy trial data – The biopharmaceutical company had thousands of legacy datasets ranging from the past 10 years to a constantly growing set of new clinical trial data, to be integrated.</li>
        </ul>
      </v-col>
    </v-row>
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <p>Modak developed a system for integrating new studies that have already been standardized to SDTM (Study Data Tabulation Model) format. This helps to scale the larger number of legacy studies that could not be addressed and where ETL and statistical programming could not keep up. Modak combined machine learning and expert analytical tools to map legacy clinical trials to the master schema by:</p><br/>
        <ul class="custom-list mt-4">
          <li>Automatically ingesting thousands of study datasets and associated metadata from SAS binary files</li>
          <li>Applying machine learning guided mapping of source datasets to the custom standard implementation</li>
          <li>Providing a point-and-click user interface for simple and complex transformations (e.g. pivoting)</li>
          <li>Documentation of all the mapping and transformations performed in the system is generated automatically</li>
          <li>Plugging data into an existing data loading pipeline after it had been aligned to a standard schema</li>
        </ul>
        <p>Modak’s Novel approach of preparing data for downstream analytics enables scientists to access more data to make better, faster, and more accurate decisions. Moreover, it enables biopharmaceutical organizations to finally see a return on their enormous data investment.</p>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/Pharma-R_D-2.svg"></v-img>
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