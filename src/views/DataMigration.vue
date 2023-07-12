<template>
  <v-container class="mt-12">
    <PageHeader title="Data Migration" subtitle="Fast track your journey to the cloud with Modak" />
    <v-row class="flex flex-row items-center my-8">
      <v-col cols="12" md="6">
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/Data-Migration-3.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <p>Data migration from on-premise data sources to the Cloud provides enterprises the opportunity to not only gain the benefits of Cloud operating costs and scalability, but if done correctly, changes the way Enterprises manage their data in the Cloud to increase value from analytics. Further, migration is not a one-time activity, for many reasons data from systems of record will remain on-premise, continuous data migration processes to the cloud to create “data fabrics” and “data lakes” are required.</p><br/>
        <p>At Modak we have proven data migration processes, software, and skills to help you in your journey to the cloud regardless of the data types, frequency, and volumes.</p>
        <ul class="custom-list mt-4"><li>Upgrades</li><li>Adequate migration</li><li>Significant savings in operational costs</li></ul>
      </v-col>
    </v-row>
    <v-container
      class="grid grid-flow-row-dense grid-cols-5 grid-rows-1 gap-6 min-h-96"
    >
      <div class="flex flex-col text-center p-6">
        <div class="progress-bar py-12">
          <v-img
            src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/multiple_sources.svg"
            alt="Image"
            class="h-12"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold">Multiple sources or<br/> legacy systems</span>
      </div>
      <div class="flex flex-col text-center p-6">
        <div class="progress-bar py-12">
          <v-img
            src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/data_quality.svg"
            alt="Image"
            class="h-12"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold">Data quality<br/> challenges</span>
      </div>
      <div class="flex flex-col text-center p-6">
        <div class="progress-bar py-12">
          <v-img
            src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/sensetive_confidential.svg"
            alt="Image"
            class="h-12"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold">Sensitive or<br/> Confidential data</span>
      </div>
      <div class="flex flex-col text-center p-6">
        <div class="progress-bar py-12">
          <v-img
            src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/complex_transformations.svg"
            alt="Image"
            class="h-12"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold">Complex<br/> transformations</span>
      </div>
      <div class="flex flex-col text-center p-6">
        <div class="progress-bar py-12">
          <v-img
            src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/business_critical.svg"
            alt="Image"
            class="h-12"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold">Business critical<br/> systems</span>
      </div>
    </v-container>
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <h3><span class="text-modak-blue">Our </span><span class="text-navy">Capabilities</span></h3>
        <ul class="custom-list mt-4">
          <li>Data Migration from any platform to the desired source</li>
          <li>Hadoop to Hadoop file transfer</li>
          <li>Migration of legacy data to advanced cloud services like AWS & Microsoft Azure</li>
        </ul>
        <p>We integrate innovative processes, tools, and solutions to ensure that your data migration is carried out quickly and effectively.</p>
        <p>We use our industrialized data migration factory to help you combine data migration with an effective archival strategy. This ensures that new systems are commissioned, and old systems are decommissioned more quickly.</p><br/>
        <p>We execute these data migrations using our Global Delivery Model approach where both, onsite and offsite teams collaborate to provide top value to the customers.</p><br/>
        <p>While each data migration method is exclusive and unique, we tend to perceive what has worked for others. This expertise will help in running your project smoothly. Modak provides you with the finest professionals possessing the precise skill sets required to complete the project successfully.</p>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/Our-Capabilities-1.svg"></v-img>
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