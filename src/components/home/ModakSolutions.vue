<template>
  <v-sheet class="min-h-96">
    <v-container
      class="grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-6 min-h-96"
    >
      <div class="flex flex-col text-center p-8">
        <div class="progress-bar py-16">
          <v-img
            src="@/assets/images/Smart-Data-Discovery-1.svg"
            alt="Image"
            class="h-20"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="180"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <h2 class="text-navy">Smart Data Discovery</h2>
        <span
          >Data Spider to automate capturing of technical metadata for all data
          sources both on-premise and on cloud</span
        >
        <v-btn variant="text" size="large" color="green">LEARN MORE ></v-btn>
      </div>
      <div class="flex flex-col text-center p-8">
        <div class="progress-bar py-16">
          <v-img
            src="@/assets/images/Automated-Ingestion.svg"
            alt="Image"
            class="h-20"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="180"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <h2 class="text-navy">Automated Ingestion</h2>
        <span
          >Metadata-driven approach to create and run data ingestion pipelines
          in an automated way</span
        >
        <v-btn variant="text" size="large" color="green">LEARN MORE ></v-btn>
      </div>
      <div class="flex flex-col text-center p-8">
        <div class="progress-bar py-16">
          <v-img
            src="@/assets/images/active_metadata.svg"
            alt="Image"
            class="h-20"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="180"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <h2 class="text-navy">Active Metadata Catalog</h2>
        <span
          >Unified repository of metadata to automate and accelerate repetitive
          data engineering processes</span
        >
        <v-btn variant="text" size="large" color="green">LEARN MORE ></v-btn>
      </div>
    </v-container>
    <v-container
      class="grid grid-flow-row-dense grid-cols-2 grid-rows-1 gap-6 px-32"
    >
      <div class="flex flex-col text-center p-8">
        <div class="progress-bar py-16">
          <v-img
            src="@/assets/images/Data-Fingerprinting.svg"
            alt="Image"
            class="h-20"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="180"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <h2 class="text-navy">Data Fingerprinting</h2>
        <span class="px-12"
          >Unique identifier for a set of data that helps to quickly identify
          similar sets of data</span
        >
        <v-btn variant="text" size="large" color="green">LEARN MORE ></v-btn>
      </div>
      <div class="flex flex-col text-center p-8">
        <div class="progress-bar py-16">
          <v-img
            src="@/assets/images/Data-Unification.svg"
            alt="Image"
            class="h-20"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="180"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <h2 class="text-navy">Data Unification</h2>
        <span class="px-12"
          >Use of machine learning algorithms to automate and simplify
          ingestion, transformation and consumption of data</span
        >
        <v-btn variant="text" size="large" color="green">LEARN MORE ></v-btn>
      </div>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
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
