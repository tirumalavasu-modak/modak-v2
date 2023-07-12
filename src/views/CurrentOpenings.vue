<template>
  <v-container class="mt-12">
    <PageHeader title="Current Openings" subtitle="" />
    <v-container>
      <v-row class="grid grid-cols-3 gap-6">
        <v-card class="py-2">
          <v-card-title class="text-navy text-md font-semibold font-oswald tracking-tight">Data Engineer</v-card-title>
          <div class="pl-4">
          <span class="h-0.5 w-10 bg-black block mb-4"></span>
          <span class="block my-2"><span class="font-semibold">Job Type: </span>Full Time</span>
          <span class="block"><span class="font-semibold">Experience: </span>1+ Years</span>
          <div class="flex flex-row my-2">
            <span class="flex flex-row items-center my-2 mr-8 text-sm"><v-icon icon="mdi:mdi-calendar" color="primary" class="mr-2"></v-icon>Posted on 06/06/2023</span>
            <span class="flex flex-row items-center my-2 text-sm"><v-icon icon="mdi:mdi-map-marker" color="primary" class="mr-2"></v-icon>Louisville, KY.</span>
          </div>
          <v-btn variant="text" color="secondary"><span class="capitalize font-bold" @click="$router.push('/careers/current-openings/data-engineer')">view details ></span></v-btn>
        </div>
        </v-card>
        <v-card class="py-2">
          <v-card-title class="text-navy text-md font-semibold font-oswald tracking-tight">Java Developer</v-card-title>
          <div class="pl-4">
          <span class="h-0.5 w-10 bg-black block mb-4"></span>
          <span class="block my-2"><span class="font-semibold">Job Type: </span>Full Time</span>
          <span class="block"><span class="font-semibold">Experience: </span>6-8 Years</span>
          <div class="flex flex-row my-2">
            <span class="flex flex-row items-center my-2 mr-8 text-sm"><v-icon icon="mdi:mdi-calendar" color="primary" class="mr-2"></v-icon>Posted on 04/05/2023</span>
            <span class="flex flex-row items-center my-2 text-sm"><v-icon icon="mdi:mdi-map-marker" color="primary" class="mr-2"></v-icon>Hyderabad</span>
          </div>
          <v-btn variant="text" color="secondary"><span class="capitalize font-bold" @click="$router.push('/careers/current-openings/java-developer')">view details ></span></v-btn>
        </div>
        </v-card>
        <v-card class="py-2">
          <v-card-title class="text-navy text-md font-semibold font-oswald tracking-tight">Head – Content Strategy</v-card-title>
          <div class="pl-4">
          <span class="h-0.5 w-10 bg-black block mb-4"></span>
          <span class="block my-2"><span class="font-semibold">Job Type: </span>Full Time</span>
          <span class="block"><span class="font-semibold">Experience: </span>12+ Years</span>
          <div class="flex flex-row my-2">
            <span class="flex flex-row items-center my-2 mr-8 text-sm"><v-icon icon="mdi:mdi-calendar" color="primary" class="mr-2"></v-icon>Posted on 07/06/2022</span>
            <span class="flex flex-row items-center my-2 text-sm"><v-icon icon="mdi:mdi-map-marker" color="primary" class="mr-2"></v-icon>Hyderabad</span>
          </div>
          <v-btn variant="text" color="secondary"><span class="capitalize font-bold" @click="$router.push('/careers/current-openings/head-content-strategy')">view details ></span></v-btn>
        </div>
        </v-card>
      </v-row>
    </v-container>
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