<template>
  <div>
    <Banner img="img/backgrounds/andy-hyd.jpg" title="Automated data ingestion" subTitle="Data Ingestion using Automated Data Pipelines. Capable of Generating Millions of Pipelines automatically." />
    <div class="max-w-7xl mx-auto my-16">
      <v-card class="my-4">
        <h1 class="p-8 text-2xl font-bold text-gray-900 text-center">
          Data Ingestion is not just data acquisition, it's about prepping the data for curation
        </h1>
        <v-img src="img/backgrounds/Ingestion-processes.png"></v-img>
      </v-card>
    </div>
    <FeatureCard :feature="feature1" />
  </div>
</template>

<script>
import Banner from '@/components/common/Banner'
// import TextCard from '@/components/common/TextCard'
import FeatureCard from '@/components/common/FeatureCard'
export default {
  name: 'ManagedDataops',
  components: {
    Banner,
    // TextCard,
    FeatureCard
  },
  data () {
    return {
      feature1: {
        img: 'img/backgrounds/pipelines.png',
        dir: 'left',
        title: '',
        description: 'Data Lakes require huge amounts of data to be processed, in some cases into the Petabytes, requiring thousands of pipelines to be created.  Traditional ETL based tools are time consuming and expensive to use.  Modak’s unique and proprietary technology dramatically reduces the time, complexity and risk to automatically generate data pipelines at <strong>scale</strong>, reducing the time to create a new pipeline from hours or days to less than a minute.​<br/><br/>Modak uses metaprogramming approach to generate the code for ingestion pipelines, using the metadata captured by Data Spiders.​',
        items: []
      }
    }    
  }
};
</script>

<style lang="scss" scoped>
</style>