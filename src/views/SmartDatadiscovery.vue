<template>
  <v-container class="mt-12">
    <PageHeader
      title="Smart Data Discovery"
      subtitle="Smart, Governed, Hadoop-based, Search-based, and Visual-based Data Discovery will converge into a single set of
next-generation data discovery capabilities as components of a modern business intelligence and analytics platform."
    />
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/Smart-Data-Discovery-3.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h3>
          <span class="text-modak-blue">Features & </span
          ><span class="text-navy">Benefits</span>
        </h3>
        <ul class="custom-list mt-4">
          <li>
            Enterprises have huge amounts of data and information across their
            federated data silos. The challenge is to enable data teams to
            rapidly discover and access these datasets rapidly and efficiently.
          </li>
          <li>
            Modak’s Nabu™ Data Spider service has built-in automation
            capabilities to discover new data sources and detect changes in
            source data and schema drifts with ease. Simplifying the time and
            complexity to identify data sources across the organization.
          </li>
          <li>
            The Data Spider service crawls and captures metadata from
            structured, semi-structured, and unstructured data sources, whether
            on-prem or in-cloud.
          </li>
          <li>
            The metadata is stored in an active metadata catalog, which is a
            searchable repository of business, operational, technical, and
            social metadata.
          </li>
          <li>
            The Data Spider ensures changes in metadata are kept up-to-date,
            enabling dynamic data profiling of your source data repositories and
            thus ensuring data analysts and data scientists discover and access
            contextual data quickly.
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageHeader from "@/components/general/PageHeader.vue";
export default {
  components: {
    PageHeader,
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
