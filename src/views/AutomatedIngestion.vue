<template>
  <v-container class="mt-12">
    <PageHeader title="Automated Data Ingestion"
      subtitle="Data Ingestion using Automated Data Pipelines. Capable of Generating Millions of Pipelines automatically" />
    <p class="ml-4">Data Ingestion is not just data acquisition, It’s about prepping the data for curation</p>
    <v-container
      class="grid grid-flow-row-dense grid-cols-7 grid-rows-1 gap-6 min-h-72 bg-gray-100 rounded-lg border my-8">
        <ProgressCircleSmall imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/1.svg"
        title="Schema Extraction" subTitle="" url="" pos="1" />
        <ProgressCircleSmall imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/2.svg"
        title="Capturing Metadata & Lineage" subTitle="" url="" pos="1" />
        <ProgressCircleSmall imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/3.svg"
        title="Profiling" subTitle="" url="" pos="1" />
        <ProgressCircleSmall imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/4-1.svg"
        title="Data Quality" subTitle="" url="" pos="1" />
        <ProgressCircleSmall imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/5-1.svg"
        title="Data Fingerprinting" subTitle="" url="" pos="1" />
        <ProgressCircleSmall imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/6-1.svg"
        title="Tagging" subTitle="" url="" pos="1" />
        <ProgressCircleSmall imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/7-1.svg"
        title="Data Formats & Standardization (Conversion)" subTitle="" url="" pos="1" />
    </v-container>
    <v-row class="flex flex-row items-center my-16">
      <v-col cols="12" md="6">
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/image-76.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <p>Data Lakes require huge amounts of data to be processed, in some cases in Petabytes, requiring thousands of
          pipelines to be created. Traditional ETL-based tools are time-consuming and expensive to use. Modak’s unique &
          proprietary technology dramatically reduces the time, complexity, and risk to automatically generate data
          pipelines at scale, reducing the time to create a new pipeline from hours/days to less than a minute.​</p><br />
        <p>Modak uses a metaprogramming approach to generate the code for ingestion pipelines, using the metadata captured
          by Data Spiders.</p><br />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageHeader from '@/components/general/PageHeader.vue'
import ProgressCircleSmall from '@/components/general/ProgressCircleSmall.vue';
export default {
  components: {
    PageHeader,
    ProgressCircleSmall
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.v-container {
  max-width: 1200px;
}
</style>