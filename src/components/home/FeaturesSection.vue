<template>
  <div class="bg-gray p-4 xl:py-8 2xl:py-16">
    <div class="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-5 2xl:grid-cols-5 gap-4 xs:gap-4">
      <v-card elevation="2" class="xl:p-2 2xl:p-2 text-center flex flex-col justify-between">
        <div>
          <img src="img/icons/home/smart_data_discovery.svg" alt="" class="h-20 mx-auto xs:my-2 xl:my-4 2xl:my-4" />
          <h6 class="">Smart Data Discovery</h6>
          <span class="block xs:text-base xs:px-4 xl:text-sm 2xl:text-sm font-normal text-gray-700 mt-2">Data Spider to automate capturing of technical metadata for all data sources both on-premise and on cloud</span>
        </div>
        <div>
          <v-btn color="primary" text class="my-4 normal-case no-underline" href="smart-data-discovery.html">Learn more</v-btn>
        </div>
      </v-card>
      <v-card elevation="2" class="xl:p-2 2xl:p-2 text-center flex flex-col justify-between">        
        <div>
          <img src="img/icons/home/automated_ingestion.svg" alt="" class="h-20 mx-auto xs:my-2 xl:my-4 2xl:my-4" />
          <h6>Automated Ingestion</h6>
          <span class="block xs:text-base xs:px-4 xl:text-sm 2xl:text-sm font-normal text-gray-700 mt-2">Metadata-driven approach to create and run data ingestion pipelines in an automated way</span>
        </div>
        <div>
          <v-btn color="primary" text class="my-4 normal-case no-underline" href="automated-data-ingestion.html">Learn more</v-btn>
        </div>
      </v-card>
      <v-card elevation="2" class="xl:p-2 2xl:p-2 text-center flex flex-col justify-between">        
        <div>
          <img src="img/icons/home/active_metadata.svg" alt="" class="h-20 mx-auto xs:my-2 xl:my-4 2xl:my-4" />
          <h6>Active metadata catalog</h6>
          <span class="block xs:text-base xs:px-4 xl:text-sm 2xl:text-sm font-normal text-gray-700 mt-2">Unified repository of metadata to automate and accelerate repetitive data engineering processes</span>
        </div>
        <div>
          <v-btn color="primary" text class="my-4 normal-case no-underline" href="Metaprogramming.html">Learn more</v-btn>
        </div>
      </v-card>
      <v-card elevation="2" class="xl:p-2 2xl:p-2 text-center flex flex-col justify-between">        
        <div>
          <img src="img/icons/home/finger_print.svg" alt="" class="h-20 mx-auto xs:my-2 xl:my-4 2xl:my-4" />
          <h6>Data Fingerprinting</h6>
          <span class="block xs:text-base xs:px-4 xl:text-sm 2xl:text-sm font-normal text-gray-700 mt-2">Unique identifier for a set of data that helps to quickly identify similar sets of data</span>
        </div>
        <div>
          <v-btn color="primary" text class="my-4 normal-case no-underline" href="data-fingerprinting.html">Learn more</v-btn>
        </div>
      </v-card>
      <v-card elevation="2" class="xl:p-2 2xl:p-2 text-center flex flex-col justify-between">        
        <div>
          <img src="img/icons/home/data_unification.svg" alt="" class="h-20 mx-auto xs:my-2 xl:my-4 2xl:my-4" />
          <h6>Data Unification</h6>
          <span class="block xs:text-base xs:px-4 xl:text-sm 2xl:text-sm font-normal text-gray-700 mt-2">Use of machine learning algorithms to automate and simplify ingestion, transformation and consumption of data</span>
        </div>
        <div>
          <v-btn color="primary" text class="my-4 normal-case no-underline" href="data-unification.html">Learn more</v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturesSection'
}
</script>

<style lang="scss" scoped>

</style>