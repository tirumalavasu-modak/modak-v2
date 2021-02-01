<template>
  <div>
    <Banner img="img/backgrounds/ball.jpg" title="Data migration" subTitle="Fast track your journey to the cloud with Modak" />
    <div class="max-w-7xl mx-auto my-16">
      <v-card class="p-8 my-4">
        <!-- <h1 class="text-2xl font-bold text-gray-700 my-2 text-left">Data Migration</h1> -->
        <h3 class="text-base font-normal text-gray-900">
          Data migration from on-premise data sources to the Cloud provides enterprises the opportunity to not only gain the benefits of Cloud operating costs and scalability but done correctly change the way Enterprises manage their data in the Cloud to increase value from analytics.   Further, migration is not a one-time activity, for many reasons data from systems of record will remain on-premise, continuous data migration processes to the cloud to create “data fabrics” and “data lakes” is required.
          <br/><br/>At Modak we have proven data migration processes, software and skills to help you in your journey to the cloud regardless of the data types, frequency and volumes.
          <!-- Transferring information from one place to another by itself does not create a business value. Modak's data migration solution ensures an effective migration of data and improved data quality. The solution shifts the focus from customized traditional solutions to standardized implementations in order to achieve -->
        </h3>
        <ul class="list-unstyled mt-4">
          <li><img src="img/icons/check.png" class="inline mr-1 w-4" /> Upgrades</li>
          <li><img src="img/icons/check.png" class="inline mr-1 w-4" /> Adequate migration</li>
          <li><img src="img/icons/check.png" class="inline mr-1 w-4" /> Significant savings in operational costs</li>
        </ul>
      </v-card>
    </div>
    <div class="max-w-7xl mx-auto my-16">
      <v-img src="img/backgrounds/DM1.png"></v-img>
    </div>
    <div class="max-w-7xl mx-auto my-16">
      <v-card class="p-8 my-4">
        <h1 class="text-2xl font-bold text-gray-700 my-2 text-left">Our Capabilities</h1>
        <ul class="list-unstyled">
          <li><img src="img/icons/check.png" class="inline mr-1 w-4" /> Data Migration from any platform to the desired source</li>
          <li><img src="img/icons/check.png" class="inline mr-1 w-4" /> Hadoop to Hadoop file transfer</li>
          <li><img src="img/icons/check.png" class="inline mr-1 w-4" /> Migration of legacy data to advanced cloud services like AWS and Microsoft Azure</li>
        </ul>
        <br/>
        <h3 class="text-base font-normal text-gray-900">
          We integrate innovative processes, tools, and solutions to ensure that your data migration is carried out quickly and effectively.
          <br/><br/>
          We use our industrialized data migration factory to help you combine data migration with an effective archival strategy. This ensures that new systems are commissioned and old systems are decommissioned more quickly.
          <br/><br/>
          We execute these data migrations using our Global Delivery Model approach where both, onsite and offsite teams collaborate to provide top value to the customers.
          <br/><br/>
          While each data migration method is exclusive and unique, we tend to perceive what has worked for others. This expertise would help in running your project smoothly. Modak provides you with the finest professionals possessing the precise skill sets required to complete the project successfully.
        </h3>
      </v-card>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/common/Banner'
export default {
  name: 'ManagedDataops',
  components: {
    Banner
  }
};
</script>

<style lang="scss" scoped>
</style>