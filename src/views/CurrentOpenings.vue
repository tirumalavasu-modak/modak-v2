<template>
  <div>
    <Banner img="img/backgrounds/current-openings.jpg" title="Current Openings" subTitle="" />
    <div class="max-w-7xl mx-auto my-16 grid grid-cols-2 gap-8">
      <v-card class="my-2 p-4" v-for="(job, i) in jobs" :key="i">
        <h3 class="text-xl font-bold text-gray-900 my-2">{{job.title}}</h3>
        <div class="flex flex-row justify-between my-2">
          <span><strong>Job type</strong>: {{job.type}}</span>
          <span><strong>Experience</strong>: {{job.exp}}</span>
          <span><strong><v-icon>mdi-map-marker</v-icon></strong>{{job.location}}</span>
        </div>
        <span class="my-2"><strong>Posted on:</strong> {{job.postedOn}}</span>
      </v-card>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/common/Banner'
export default {
  name: 'ManagedDataops',
  components: {
    Banner,
  },
  data () {
    return {
      jobs: [
        {
          title: 'Product Manager',
          type: 'Full Time',
          exp: '5+ years',
          location: 'Hyderabad',
          postedOn: 'October 28, 2020'
        },
        {
          title: 'Hadoop Admin',
          type: 'Full Time',
          exp: '3 - 10+ years',
          location: 'Hyderabad',
          postedOn: 'August 24, 2020'
        },
        {
          title: 'Sr Data Engineer',
          type: 'Full Time',
          exp: '4+ years',
          location: 'Hyderabad',
          postedOn: 'May 19, 2020'
        },
        {
          title: 'Scrum Master',
          type: 'Full Time',
          exp: '4 - 10+ years',
          location: 'Hyderabad',
          postedOn: 'August 24, 2020'
        },
        {
          title: 'Delivery Manager',
          type: 'Full Time',
          exp: '10 - 12+ years',
          location: 'Hyderabad',
          postedOn: 'July 1, 2020'
        },
        {
          title: 'Scala Developer',
          type: 'Full Time',
          exp: '2+ years',
          location: 'Hyderabad',
          postedOn: 'June 25, 2020'
        }
      ]
    }    
  }
};
</script>

<style lang="scss" scoped>
</style>