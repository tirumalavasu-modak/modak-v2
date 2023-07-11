<template>
  <v-container class="mt-12">
    <PageHeader title="Automated Data Ingestion" subtitle="Data Ingestion using Automated Data Pipelines. Capable of Generating Millions of Pipelines automatically" />
    <p class="ml-4">Data Ingestion is not just data acquisition, It’s about prepping the data for curation</p>
    <v-container
      class="grid grid-flow-row-dense grid-cols-7 grid-rows-1 gap-6 min-h-72 bg-gray-100 rounded-lg border my-8"
    >
      <div class="flex flex-col text-center p-6">
        <div class="progress-bar py-12">
          <v-img
            src="@/assets/images/1.svg"
            alt="Image"
            class="h-12"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold">Schema Extraction</span>
      </div>
      <div class="flex flex-col text-center p-6">
        <div class="progress-bar py-12">
          <v-img
            src="@/assets/images/2.svg"
            alt="Image"
            class="h-12"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold">Capturing Metadata<br/> & Lineage</span>
      </div>
      <div class="flex flex-col text-center p-6">
        <div class="progress-bar py-12">
          <v-img
            src="@/assets/images/3.svg"
            alt="Image"
            class="h-12"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold">Profiling</span>
      </div>
      <div class="flex flex-col text-center p-6">
        <div class="progress-bar py-12">
          <v-img
            src="@/assets/images/4-1.svg"
            alt="Image"
            class="h-12"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold">Data Quality</span>
      </div>
      <div class="flex flex-col text-center p-6">
        <div class="progress-bar py-12">
          <v-img
            src="@/assets/images/5-1.svg"
            alt="Image"
            class="h-12"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold">Data Fingerprinting</span>
      </div>
      <div class="flex flex-col text-center p-6">
        <div class="progress-bar py-12">
          <v-img
            src="@/assets/images/6-1.svg"
            alt="Image"
            class="h-12"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold">Tagging</span>
      </div>
      <div class="flex flex-col text-center p-6">
        <div class="progress-bar py-12">
          <v-img
            src="@/assets/images/7-1.svg"
            alt="Image"
            class="h-12"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold">Data Formats & Standardization (Conversion)</span>
      </div>
    </v-container>
    <v-row class="flex flex-row items-center my-16">
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/image-76.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <p>Data Lakes require huge amounts of data to be processed, in some cases in Petabytes, requiring thousands of pipelines to be created. Traditional ETL-based tools are time-consuming and expensive to use. Modak’s unique & proprietary technology dramatically reduces the time, complexity, and risk to automatically generate data pipelines at scale, reducing the time to create a new pipeline from hours/days to less than a minute.​</p><br/>
        <p>Modak uses a metaprogramming approach to generate the code for ingestion pipelines, using the metadata captured by Data Spiders.</p><br/>
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