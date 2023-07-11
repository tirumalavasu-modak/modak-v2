<template>
  <v-container class="mt-12">
    <PageHeader title="Anonymization" subtitle="Modak Nabu ™ provides in-built anonymization services to help customers sanitize data, information, and ensure they comply with data privacy standards" />
    <v-row class="flex flex-row items-center my-8">
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/Data-Anonymization.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h3><span class="text-modak-blue">Data </span><span class="text-navy">Anonymization</span></h3>
        <p>Modak Nabu™ uses “NLP POS” recognition and named entity extractions to annotate the unstructured data.</p><br/>
        <ul class="custom-list mt-4"><li>NLP POS Recognition</li><li>Named Entity Extractions</li><li>Master Data Elements</li></ul>
      </v-col>
    </v-row>
    <v-row>
      <h3 class="text-center text-navy w-full my-4">Use <span class="text-modak-blue">Machine Learning </span>to Automate Anonymization</h3>
      <v-img src="@/assets/images/diagram_1-2.svg"></v-img>
      <p class="my-16 mx-auto">The machine identifies and applies the last applied rules bypassing data classification and user review.</p>
    </v-row>
    <v-row>
      <h3 class="text-navy w-full text-center">Machine Learning Training for Document/Sentence Classification</h3>
      <v-img src="@/assets/images/diagram_2-1.png" class="my-12"></v-img>
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