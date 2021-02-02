<template>
  <div>
    <Banner img="img/backgrounds/animal-art-baby.jpg" title="Hadoop Managed Services" subTitle="Leverage the authority of a comprehensive managed services offering" />
    <FeatureCard :feature="feature1" />
    <div class="max-w-7xl mx-auto my-16">
      <v-card class="my-4 p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-2">Our Capabilities</h3>
        <div class="text-base font-normal text-gray-900">
          <p>Modak’s HMS, bundled with proprietary real-time proactive monitoring tools, are integrated with native managers like Cloudera manager for streamlined services.</p>
          <p >We have a highly experienced and certified DevOps team for Cloudera, capable of managing clusters with 500+ nodes containing Petabytes of data. This significantly eases our client’s journey with Hadoop System – whether it is Cloudera, Hortonworks, or MapR.</p>
          <p>This has led to the use of processes that are well defined and tools that are best-in-class for effectively managing, maintaining, and monitoring big data platforms.</p>
        </div>
      </v-card>
    </div>
    <div class="max-w-7xl mx-auto my-16 bg-gray-300">
      <v-card class="my-4 p-8 text-center" elevation="0">
        <h3 class="text-2xl font-bold text-gray-900 mb-8 mx-auto">Modak’s Hadoop Management Service Suite</h3>
        <div class="lg:grid lg:grid-cols-3 lg:gap-8 xl:grid xl:grid-cols-3 xl:gap-8 2xl:grid 2xl:grid-cols-3 2xl:gap-8 items-center">
          <v-card v-for="(item, i) in items" :key="i" class="p-8 my-4">{{item}}</v-card>
        </div>
        <div class="flex flex-row w-full items-center my-8 justify-content-center">
          <v-card class="px-12 py-8 mx-auto">Load Configuration and Management</v-card>
        </div>  
      </v-card>
    </div>
    <div class="max-w-7xl mx-auto my-16">
      <v-card class="my-4 p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mx-auto">Features & Benefits</h3>
        <ul class="list-unstyled">
          <li><img src="img/icons/check-primary.svg" class="inline mr-1 w-4" /> Empower implementation of successful big data strategies for achieving your business goals</li>
          <li><img src="img/icons/check-primary.svg" class="inline mr-1 w-4" /> Faster speed to market by enabling to adapt to the best-suited technologies and processes to accelerate the deployment</li>
          <li><img src="img/icons/check-primary.svg" class="inline mr-1 w-4" /> Optimize performance by shifting the cold data to dense storage and hot data to the fast storage</li>
          <li><img src="img/icons/check-primary.svg" class="inline mr-1 w-4" /> Lower the costs of storage by implementing the best data-retention intervals</li>
          <li><img src="img/icons/check-primary.svg" class="inline mr-1 w-4" /> Maximise efficiency thereby delivering results within budget and timeline</li>
          <li><img src="img/icons/check-primary.svg" class="inline mr-1 w-4" /> Optimize big data resources and Hadoop performance tuning to achieve visibility</li>
          <li><img src="img/icons/check-primary.svg" class="inline mr-1 w-4" /> Successful outcomes at minimum cost</li>
        </ul>
      </v-card>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/common/Banner'
// import TextCard from '@/components/common/TextCard'
import FeatureCard from '@/components/common/FeatureCard'
export default {
  name: 'ManagedDataops',
  components: {
    Banner,
    // TextCard,
    FeatureCard
  },
  data () {
    return {
      items: ['Security', 'Fluid Scalability', 'Segment Recovery', 'Capacity and Memory Usage', 'Tuning, Backups, and Patching',
      'Fixing of Broken Down Services', 'Upgrades and Patch Management', 'Holistic View', 'Pro-Active Maintenance and Monitoring'],
      feature1: {
        img: 'img/backgrounds/managed-cloud-services.jpg',
        dir: 'left',
        title: '',
        description: 'Modak’s Hadoop managed services addresses the complexities around Data Lake and enables efficient management of data. It prevents data from turning into a data swamp. Efficient data management and maintenance helps in improving the performance of Big Data environment to a great extent.',
        items: []
      }
    }    
  }
};
</script>

<style lang="scss" scoped>
</style>