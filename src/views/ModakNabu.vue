<template>
  <v-container class="mt-12">
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6" class="flex flex-col">
        <h3>
          <span class="text-modak-blue">Modak Nabu™ </span
          ><span class="text-navy"
            >accelerates the journey from data to business value</span
          >
        </h3>
        <br /><br />
        <span class="text-modak-blue font-oswald text-2xl"
          >Modak Nabu™ Overview</span
        >
        <v-btn color="secondary" rounded="xl" class="w-60 my-4" size="large" @click="$router.push('/modak-nabu-solution')"
          >Download Now</v-btn
        >
        <span class="text-modak-blue font-oswald text-2xl"
          >Featured in Gartner’s Market Guide for Data <br />
          Preparation Tools, 2020
        </span>
        <span class="my-6">
          80% time of data scientists is taken up in data preparation. Modak
          Nabu™ accelerates data preparation by 4X, at a petabyte scale, by
          automating repetitive tasks, with active metadata services.
        </span>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/Modak-Nabu-Main-1.svg"></v-img>
      </v-col>
    </v-row>
    <v-container
      class="grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-6 min-h-96"
    >
      <div class="flex flex-col text-center p-4">
        <div class="progress-bar py-16">
          <v-img
            src="@/assets/images/active_metadata-1.svg"
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
          >Accelerate data preparation with metadata
including technical, operational, social, and
business metadata
</span
        >
      </div>
      <div class="flex flex-col text-center p-4">
        <div class="progress-bar py-16">
          <v-img
            src="@/assets/images/Automated-Ingestion-Pipelines.svg"
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
        <h2 class="text-navy">Automated Ingestion Pipelines</h2>
        <span
          >Automate building ingestion pipelines
in minutes, using active metadata
</span
        >
      </div>
      <div class="flex flex-col text-center p-4">
        <div class="progress-bar py-16">
          <v-img
            src="@/assets/images/search_explore.svg"
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
        <h2 class="text-navy">Search and Exploration</h2>
        <span
          >Intuitive search and exploration capabilities
to discover data, explore relationships, and
assess quality
</span
        >
      </div>
    </v-container>
    <v-container
      class="grid grid-flow-row-dense grid-cols-2 grid-rows-1 gap-6 px-32"
    >
      <div class="flex flex-col text-center p-4">
        <div class="progress-bar py-16">
          <v-img
            src="@/assets/images/data_standardization.svg"
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
        <h2 class="text-navy">Data Standardization</h2>
        <span class="px-12"
          >Standardize hundreds of data formats across thousands of datasets in days, using Modak’s Data Fingerprinting technology</span
        >
      </div>
      <div class="flex flex-col text-center p-4">
        <div class="progress-bar py-16">
          <v-img
            src="@/assets/images/enterprise_ready.svg"
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
        <h2 class="text-navy">Enterprise Ready</h2>
        <span class="px-12"
          >Comply with data privacy, governance, and regulatory requirements with role-based access control, data anonymization, data lineage, and audit trails</span
        >
      </div>
    </v-container>
    <v-row class="my-8">
      <h3 class="mx-auto text-center leading-snug"><span class="text-modak-blue">How does Modak Nabu™</span><br/><span class="text-navy">Help you?</span></h3>
    </v-row>
    <v-container
      class="grid grid-cols-3 gap-6 min-h-96"
    >
      <div class="text-center px-8">
        <v-img src="@/assets/images/chief_data_officer.svg" height="150" class="mb-4"></v-img>
        <span class="text-navy font-oswald text-2xl font-bold">Chief Data Officer</span>
        <p class="mt-2">Democratize data access to <br/> empower citizen data scientists</p>
      </div>
      <div class="text-center px-8">
        <v-img src="@/assets/images/data_scientist.svg" height="150" class="mb-4"></v-img>
        <span class="text-navy font-oswald text-2xl font-bold">Data Scientist</span>
        <p class="mt-2">Get access to datasets in <br/> minutes, not weeks</p>
      </div>
      <div class="text-center px-8">
        <v-img src="@/assets/images/data_engineer.svg" height="150" class="mb-4"></v-img>
        <span class="text-navy font-oswald text-2xl font-bold">Data Engineer</span>
        <p>Quickly orchestrate data ingestion and <br/> curation, at petabyte scale</p>
      </div>
      <div class="text-center px-8 mt-8">
        <v-img src="@/assets/images/business_manager.svg" height="150" class="mb-4"></v-img>
        <span class="text-navy font-oswald text-2xl font-bold">Business Manager</span>
        <p>Find the most relevant datasets <br/> for a business case</p>
      </div>
      <div class="text-center px-8 mt-8">
        <v-img src="@/assets/images/enterprise_architect.svg" height="150" class="mb-4"></v-img>
        <span class="text-navy font-oswald text-2xl font-bold">Enterprise Architect</span>
        <p>Drive data standards and compliance <br/> across the organization</p>
      </div>
      <div class="text-center px-8 mt-8">
        <v-img src="@/assets/images/data_analyst.svg" height="150" class="mb-4"></v-img>
        <span class="text-navy font-oswald text-2xl font-bold">Data Analyst</span>
        <p>Explore datasets, understand <br/> relationships and assess the quality</p>
      </div>
    </v-container>
    <v-row class="my-16">
      <v-img src="@/assets/images/002.-MODAK-Nabu.png"></v-img>
    </v-row>
  </v-container>
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
