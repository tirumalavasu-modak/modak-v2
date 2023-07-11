<template>
  <v-container class="mt-12">
    <PageHeader title="Culture and Diversity" subtitle="At Modak, we strongly believe that diversity is a business priority. To provide our customers with unique solutions, it is important that we have diverse views, cultures, and people from all walks of life. Thus, Modak believes in versatility and creativity are best achieved through a diverse workforce." />
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/Culture-and-Diversity.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <p>Inclusiveness of our employees from different backgrounds, educational institutions, and experiences becomes the catalyst for ensuring we earn the trust and loyalty of our clients.</p><br/>
        <p>Understanding how to work in a cross-cultural environment and leveraging the diversity of multiple cultures is inherent to the unique way we do things. At Modak, we follow parity in gender ratio, providing equal opportunity for equal work. Modak has also emerged as one of the best companies for women in data and analytics to work.</p>
      </v-col>
    </v-row>
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <p>We believe that fun and learning go hand in hand. At Modak, employees have ample scope of learning and can work on their skills under their mentors.</p><br/>
        <p>Fairness and respect are pillars of the company and we have a strong foundation to hold it. These values we hold, combined with our excellent business understanding, guide us in bringing about a unique experience in the way we serve our clients and care for our employees.</p>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/Culture-and-Diversity-2.svg"></v-img>
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