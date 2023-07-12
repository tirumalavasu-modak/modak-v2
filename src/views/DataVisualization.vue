<template>
  <v-container class="mt-12">
    <PageHeader title="Data Visualization" subtitle="Modak's data visualization services help clients in analyzing data for actionable insights and predictive analytics" />
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/Faster-Decisions.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h3><span class="text-modak-blue">Faster </span><span class="text-navy">Decisions</span></h3>
        <p>Nowadays, faster decisions are the need of the hour. It is difficult to make business decisions based on the data at hand. The representation of the data helps business individuals to understand the data and to make quick decisions. At Modak, we generate dashboards that are visually appealing and easy to understand. Business users can tweak the necessary data from the visuals to customize, according to their requirements.</p>
      </v-col>
    </v-row>
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <h3><span class="text-modak-blue">What is </span><span class="text-navy">Data Visualization?</span></h3>
        <p>Data Visualization is the graphical representation of data using charts, graphs, and maps. It helps in understanding the hidden patterns in data.</p><br/>
        <p>The process of reading and analyzing the data and coming up with business insights may take a lot of time in making business decisions. Instead, visualizing the data and generating business insights from the visuals makes it easier.</p>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/Why-is-Data-Visualization.svg"></v-img>
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