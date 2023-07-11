<template>
  <v-container class="mt-12">
    <PageHeader title="Data Operations" subtitle="Agile operations for quicker analytics" />
    <p class="px-4">DataOps is a data enablement approach designed for rapid, reliable and repeatable delivery of ready-made data with fully operational analytics. Modak’s DataOps majorly consists of faster data enablement by using Modak’s approach of Data Preparation. Agile and smarter data engineering can handle large-scale data rapidly and efficiently is key to success.</p>
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/Data-Operations-Highly-Automated-1.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h3 class="leading-snug"><span class="text-modak-blue">Highly Automated, <br/></span><span class="text-navy">Continuous & Agile</span></h3>
        <p>DataOps quickly enables enterprises to explore, and understand the readily available data seamlessly and provides real-time data insights allowing multiple enterprise teams with different technologies to collaborate.</p>
        <ul class="custom-list mt-4">
          <li>Highly automated and augmented processes help in quicker, and faster data enablement</li>
          <li>Improved standardization, continuous process monitoring, and data quality checks</li>
          <li>About 4-10x reduction time in the development of new data pipelines</li>
          <li>Highly accelerated deployment processes</li>
          <li>Reduction in error rates and best practices ensure confidence in descriptive, predictive, and prescriptive analytic solutions</li>
          <li>Reduction in hardware costs, and better management of cloud infrastructure</li>
        </ul>
      </v-col>
    </v-row>
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <h3><span class="text-modak-blue">Self-</span><span class="text-navy">Service</span></h3>
        <p>As opposed to the traditional rigid schema model, where each use case must adapt to the ways of the model, DataOps provides self-service data analysis and data science solutions. Data consumers can analyze data and come up with new use cases for data-driven decisions.</p><br/>
        <p>The approach provides production-ready data and empowers consumers to become creative in effectively using the enterprise data without having to deal with complexities, such as finding data, quality, access, data integrity, difficulties with modern data management, and poorly-defined data.</p>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/Self-Service-1.svg"></v-img>
      </v-col>
    </v-row>
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/Highly-Defined-Data-1.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h3><span class="text-modak-blue">Highly- </span><span class="text-navy">Defined Data</span></h3>
        <p>DataOps aims to defeat data chaos by turning raw data into valuable and meaningful information. It brings the ability to infer relations among semantic objects across data silos and grants the capability to discover, analyze, and act upon data with ease.</p><br/>
        <p>Data consumers can use the robust search capabilities with the help of an extensive collection of metadata, data tagging, and data lineage driven by DataOps.</p>
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