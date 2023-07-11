<template>
  <v-container class="mt-12">
    <PageHeader title="Active Metadata Catalog" subtitle="Modak's Active Metadata Catalog uses metadata programming to auto-generate the metadata code stored in repositories" />
    <p class="pl-4">Modak’s Metaprogramming software is a technique that runs blocks of code on billions of rows and records at an instance. Modak’s Metaprogramming software is capable enough to read, generate, analyze or transform other programs, and even modify itself while running.</p>
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <p><span class="text-modak-blue font-semibold">According to Gartner,</span> more than 70% of big data projects have failed due to a large amount of time spent on data preparation and curation. Most businesses spend the maximum amount of time preparing data to generate insights using machine learning and automation. By the time the data reaches the visualization phase, either the data or the technology becomes outdated.</p><br/>
        <p>At Modak, our metaprogramming approach focuses mainly on the data preparation phase. The metaprogramming approach drastically accelerates data preparation and curation processes. Metadata is essential for data preparation in any big data platform. Metadata contains key information about the underlying data. Modak’s Nabu™ metaprogramming approach leverages metadata to ingest, curate, and unify data sets. Metaprogramming generates code through metadata, which Modak Nabu ™ captures from source and destination, and saves into technical, operational, and business metadata catalogs.</p><br/>
        <p>One of the benefits of metaprogramming is the increase in the productivity of developers once they get past the convention and configuration phases. In metaprogramming, metadata is used in data ingestion, cascading templates, and creating entities that are helpful for data visualization. Through the meta-programming approach, we follow a complete automated end-to-end process right from the source to ingestion and curation, so that users can utilize optimized data for their process.</p>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/Active-Metadata-Catalog-1.svg"></v-img>
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