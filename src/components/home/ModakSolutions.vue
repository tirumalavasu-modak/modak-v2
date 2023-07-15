<template>
  <v-sheet class="min-h-96">
    <v-container
      class="grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-6 min-h-96"
    >
      <ProgressCircle 
        imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/Smart-Data-Discovery-1.svg"
        title="Smart Data Discovery"
        subTitle="Data Spider to automate capturing of technical metadata for all data sources both on-premise and on cloud"
        url="/solutions/smart-data-discovery"
        pos="2100"
      />
      <ProgressCircle 
        imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/Automated-Ingestion.svg"
        title="Automated Ingestion"
        subTitle="Metadata-driven approach to create and run data ingestion pipelines in an automated way"
        url="/solutions/automated-ingestion"
        pos="2100"
      />
      <ProgressCircle 
        imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/active_metadata.svg"
        title="Active Metadata Catalog"
        subTitle="Unified repository of metadata to automate and accelerate repetitive data engineering processes"
        url="/solutions/active-metadata-catalog"
        pos="2100"
      />
    </v-container>
    <v-container
      class="grid grid-flow-row-dense grid-cols-2 grid-rows-1 gap-6 px-32"
    >
    <ProgressCircle 
        imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/Data-Fingerprinting.svg"
        title="Data Fingerprinting"
        subTitle="Unique identifier for a set of data that helps to quickly identify similar sets of data"
        url="/solutions/data-fingerprinting"
        pos="2100"
      />
      <ProgressCircle 
        imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/Data-Unification.svg"
        title="Data Unification"
        subTitle="Use of machine learning algorithms to automate and simplify ingestion, transformation and consumption of data"
        url="/solutions/data-unification"
        pos="2100"
      />
    </v-container>
  </v-sheet>
</template>

<script>
import ProgressCircle from '@/components/general/ProgressCircle.vue';
export default {
  components: {
    ProgressCircle
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
