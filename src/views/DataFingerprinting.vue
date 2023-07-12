<template>
  <v-container class="mt-12">
    <PageHeader title="Data Fingerprinting" subtitle="Accelerating Data Mapping and Unification using Fingerprints" />
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/Data-Fingerprinting-1.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <p>Modak’s Data Fingerprinting provides an index value that differentiates between other record values; this value is called as fuzzy value and the index is called as fuzzy index. These are called fingerprints of the data which are unique, these values are used to match similar leaves of a branch.</p>
      </v-col>
    </v-row>
    <v-row>
      <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/image-68.svg"></v-img>
    </v-row>
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <h3><span class="text-modak-blue">Why is Data Fingerprinting </span><span class="text-navy">useful?</span></h3>
        <p>In this process, the comparison of column values is done across different tables and a hash code against the column is generated. Irrespective of what the column name is labeled across different tables, if the column shares the same data, then a score will be generated from 0 to 1 as to how much of data is matched and then the mapping of the data will be done and the data will be merged. This score will be generated using an algorithm.</p><br/>
        <p>For example, if there are different tables where the column is labeled as “col”, “column”, “col1”, but the data which is shared in the columns are the same, then the data is checked, a hash will be generated against that column, a score between 0 to 1 is generated and then the mapping of the data takes place by merging the columns.</p>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/Highly-Defined-Data-1.svg"></v-img>
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