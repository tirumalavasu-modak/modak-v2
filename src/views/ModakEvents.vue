<template>
  <v-container class="mt-12">
    <PageHeader title="Events" subtitle="" />
    <v-row class="grid grid-cols-2 gap-6">
      <v-col class="text-center bg-sky-100 py-8 min-h-96">
        <span class="text-navy block font-oswald text-3xl font-bold my-4">Modak x Neo4j Webinar</span>
        <span class="block mb-4">June 23rd, 2023</span>
        <v-btn color="secondary" rounded="xl" size="large" class="" @click="$router.push('/events/modak-neo4j-webinar')">Register Now</v-btn>
      </v-col>
      <v-col class="text-center bg-sky-100 py-8 min-h-96">
        <span class="text-navy block font-oswald text-3xl font-bold my-4">Modak x SciBite Webinar</span>
        <span class="block mb-4">July 10, 2023</span>
        <v-btn color="secondary" rounded="xl" size="large" class="" @click="$router.push('/events/modak-scibite-webinar')">Register Now</v-btn>
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