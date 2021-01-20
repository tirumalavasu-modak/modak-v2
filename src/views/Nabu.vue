<template>
  <div>
    <v-btn color="primary" elevation="4" x-large class="request-btn nabu"><router-link to="request-demo">Request Demo</router-link></v-btn>
    <v-img src="img/backgrounds/Banner-nebo.jpg" cover :height="bgHeight">
      <div
        class="max-w-7xl mx-auto flex flex-col justify-start self-center pt-16"
      >
        <h4 class="text-white align-middle mb-4">
          Modak Nabu&trade; accelerates the journey<br />
          from data to business value
        </h4>
        <h4 class="text-lg font-light text-white">
          “Featured in Gartner’s Market Guide for Data Preparation Tools, 2020”
        </h4>
        <p class="text-xl font-light mt-8 text-white my-8">
          80% time of data scientists is taken up in data preparation.
          <br />Modak Nabu&trade; accelerates data preparation by 4X, at petabyte
          scale,<br />
          by automating repetitive tasks, with active metadata services.
        </p>
      </div>
    </v-img>
    <div class="bg-gray py-16">
      <!-- <h1 class="text-center mx-auto text-3xl font-bold mb-8">Product – Modak Nabu™</h1> -->
      <div class="max-w-7xl mx-auto grid grid-cols-6 gap-8 nabu-features">
        <v-card elevation="2" class="col-span-2">          
          <v-img
            src="img/icons/nabu/datacatalof.svg"
            class="mx-auto my-8 w-16" contain
          ></v-img>
          <h5 class="text-center">
            Active Metadata Catalog
          </h5>
          <p class="text-center">
            Accelerate data preparation with metadata including technical,
            operational, social and business metadata
          </p>
        </v-card>
        <v-card elevation="2" class="p-0 flex flex-col col-span-2">
          <v-img
            src="img/icons/nabu/ingestion.svg"
            class="mx-auto my-8 w-16" contain
          ></v-img>
          <h5 class="text-center">
            Automated Ingestion Pipelines
          </h5>
          <p class="text-base m-0 p-4 text-center">
            Automate building ingestion pipelines in minutes, using active
            metadata.
          </p>
        </v-card>
        <v-card elevation="2" class="p-0 flex flex-col col-span-2">
          <v-img
            src="img/icons/nabu/datadiscovery.svg"
            class="mx-auto my-8 w-16" contain
          ></v-img>
          <h5 class="text-center">
            Search and Exploration
          </h5>
          <p class="text-base m-0 p-4 text-center">
            Intuitive search and exploration capabilities to discover data,
            explore relationships and assess quality
          </p>
        </v-card>
        <v-card elevation="2" class="p-0 flex flex-col col-span-3">
          <v-img
            src="img/icons/nabu/mappingandstandardizaion.svg"
            class="mx-auto my-8 w-16" contain
          ></v-img>
          <h5 class="text-center">
            Data Standardization
          </h5>
          <p class="text-base m-0 p-4 text-center">
            Standardize hundreds of data formats across thousands of datasets in
            days, using Modak’s data fingerprinting technology
          </p>
        </v-card>
        <v-card elevation="2" class="p-0 flex flex-col col-span-3">
          <v-icon class="mx-auto my-6 shield">mdi-shield-check</v-icon>
          <h5 class="text-center">
            Enterprise Ready
          </h5>
          <p class="text-base m-0 p-4 text-center">
            Comply with data privacy, governance and regulatory requirements
            with role based access control, data anonymization, data lineage and
            audit trails.
          </p>
        </v-card>
      </div>
    </div>
    <div>
      <h1 class="text-center mx-auto text-3xl font-bold mt-8">
        How does <span class="text-3xl font-bold text-primary">Modak Nabu&trade;</span> help you?
      </h1>
      <div
        class="max-w-4xl mx-auto my-16 grid grid-cols-3 grid-rows-2 gap-8 nabu-features"
      >
        <v-card elevation="2" class="p-4 flex flex-col">
          <img
            class="mx-auto h-24 w-auto"
            src="https://blog.idatainc.com/hs-fs/hubfs/ICO-Icon/Icons_10%20Executive-Manager.png?width=240&name=Icons_10%20Executive-Manager.png"
            alt="Chief Data Officer"
          />
          <h5 class="text-center">
            Chief Data Officer
          </h5>
          <p class="m-0 px-4 text-center">
            Democratize data access to empower citizen data scientists.
          </p>
        </v-card>
        <v-card elevation="2" class="p-4 flex flex-col">
          <img
            class="mx-auto h-24 w-auto"
            src="https://blog.idatainc.com/hs-fs/hubfs/ICO-Icon/Icons_10%20Executive-Manager.png?width=240&name=Icons_10%20Executive-Manager.png"
            alt="Chief Data Officer"
          />
          <h5 class="text-center">
            Data Scientist
          </h5>
          <p class="m-0 px-4 text-center">
            Get access to datasets in minutes, not weeks.
          </p>
        </v-card>
        <v-card elevation="2" class="p-4 flex flex-col">
          <img
            class="mx-auto h-24 w-auto"
            src="https://blog.idatainc.com/hs-fs/hubfs/ICO-Icon/Icons_10%20Executive-Manager.png?width=240&name=Icons_10%20Executive-Manager.png"
            alt="Chief Data Officer"
          />
          <h5 class="text-center">
            Data Engineer
          </h5>
          <p class="m-0 px-4 text-center">
            Quickly orchestrate data ingestion and curation, at petabyte scale
          </p>
        </v-card>
        <v-card elevation="2" class="p-4 flex flex-col">
          <img
            class="mx-auto h-24 w-auto"
            src="https://blog.idatainc.com/hs-fs/hubfs/ICO-Icon/Icons_10%20Executive-Manager.png?width=240&name=Icons_10%20Executive-Manager.png"
            alt="Chief Data Officer"
          />
          <h5 class="text-center">
            Business Manager
          </h5>
          <p class="m-0 px-4 text-center">
            Find the most relevant datasets for a business case.
          </p>
        </v-card>
        <v-card elevation="2" class="p-4 flex flex-col">
          <img
            class="mx-auto h-24 w-auto"
            src="https://blog.idatainc.com/hs-fs/hubfs/ICO-Icon/Icons_10%20Executive-Manager.png?width=240&name=Icons_10%20Executive-Manager.png"
            alt="Chief Data Officer"
          />
          <h5 class="text-center">
            Enterprise Architect
          </h5>
          <p class="m-0 px-4 text-center">
            Drive data standards and compliance across the organization.
          </p>
        </v-card>
        <v-card elevation="2" class="p-4 flex flex-col">
          <img
            class="mx-auto h-24 w-auto"
            src="https://blog.idatainc.com/hs-fs/hubfs/ICO-Icon/Icons_10%20Executive-Manager.png?width=240&name=Icons_10%20Executive-Manager.png"
            alt="Chief Data Officer"
          />
          <h5 class="text-center">
            Data Analyst
          </h5>
          <p class="m-0 px-4 text-center">
            Explore datasets, understand relationships and assess quality.
          </p>
        </v-card>
      </div>
    </div>
    <div class="py-8 max-w-7xl mx-auto">
      <v-img src="img/icons/Nabu_Image_Tunnel_flow.svg" class=""></v-img>
    </div>    
  </div>
</template>

<script>
export default {
  name: "Nabu",
  computed: {
    bgHeight: function () {
      return this.$vuetify.breakpoint.height / 2;
    },
  },
};
</script>

<style lang="scss" scoped>
.shield {
  width: 100% !important;
  font-size: 5rem !important;
  color: #29abe2 !important;
}
.nabu-features h3 {
  height: 90px;
}
.nabu-features img {
  height: 90px;
}
</style>