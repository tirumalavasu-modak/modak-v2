<template>
  <v-container class="mt-12">
    <PageHeader
      title="Managed Services"
      subtitle="Leverage the authority of a comprehensive managed services offering"
    />
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/Managed-Services.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <p>
          Modak’s Managed Services addresses the complexities around Data Lake
          and enables efficient management of data. It prevents data from
          turning into a data swamp. Efficient data management and maintenance
          help in improving the performance of the Big Data environment to a
          great extent.
        </p>
      </v-col>
    </v-row>
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <h3>
          <span class="text-modak-blue">Our </span
          ><span class="text-navy">Capabilities</span>
        </h3>
        <p>
          Modak’s Managed Services, bundled with proprietary real-time proactive
          monitoring tools, are integrated with native managers like Cloudera
          Manager for streamlined services.
        </p>
        <br />
        <p>
          We have a highly experienced, and certified DataOps team for Cloudera,
          capable of managing clusters with 500+ nodes containing Petabytes of
          data. This significantly eases our client’s journey with Hadoop
          Systems – whether it is Cloudera, Hortonworks, or MapR.
        </p>
        <br />
        <p>
          This has led to the use of processes that are well defined and tools
          that are best-in-class for effectively managing, maintaining, and
          monitoring big data platforms.
        </p>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/clodera-1.svg"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <h3 class="text-center text-navy w-full">Managed Services</h3>
      <v-container
        class="grid grid-flow-row-dense grid-cols-5 grid-rows-1 gap-6 min-h-72"
      >
        <ProgressCircleSmall 
          imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/1-1.svg"
          title="Security"
          subTitle=""
          url=""
          pos="1200"
        />
        <ProgressCircleSmall 
          imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/2-1.svg"
          title="Fluid Scalability"
          subTitle=""
          url=""
          pos="1200"
        />
        <ProgressCircleSmall 
          imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/3-1.svg"
          title="Segment Recovery"
          subTitle=""
          url=""
          pos="1200"
        />
        <ProgressCircleSmall 
          imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/Capacity-_-Memory-Usage.svg"
          title="Capacity & Memory Usage"
          subTitle=""
          url=""
          pos="1200"
        />
        <ProgressCircleSmall 
          imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/5.svg"
          title="Tuning, Backups, and Patching"
          subTitle=""
          url=""
          pos="1200"
        />
      </v-container>
      <v-container
        class="grid grid-flow-row-dense grid-cols-5 grid-rows-1 gap-6 min-h-72"
      >
      <ProgressCircleSmall 
          imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/6.svg"
          title="Fixing of Broken Down Servers"
          subTitle=""
          url=""
          pos="1200"
        />
        <ProgressCircleSmall 
          imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/7.svg"
          title="Upgrades & Patch Management"
          subTitle=""
          url=""
          pos="1200"
        />
        <ProgressCircleSmall 
          imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/8.svg"
          title="Holistic View"
          subTitle=""
          url=""
          pos="1200"
        />
        <ProgressCircleSmall 
          imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/9.svg"
          title="Proactive Maintenance & Monitoring"
          subTitle=""
          url=""
          pos="1200"
        />
        <ProgressCircleSmall 
          imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/10.svg"
          title="Load Configuration & Management"
          subTitle=""
          url=""
          pos="1200"
        />
      </v-container>
    </v-row>
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/Hadoop-Features-_-Benefits.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h3>
          <span class="text-modak-blue">Features & </span
          ><span class="text-navy">Benefits</span>
        </h3>
        <ul class="custom-list mt-4">
          <li>Empower implementation of big data strategies for achieving your business goals</li>
          <li>Faster time to market by adapting to the best-suited technologies and processes deployment</li>
          <li>Optimize performance by shifting the cold data to dense storage and hot data to the fast storage</li>
          <li>Lower the costs of storage by implementing the best data-retention intervals</li>
          <li>Maximize efficiency thereby delivering results within budget & timeline</li>
          <li>Optimize big data resources and Hadoop performance tuning to achieve visibility</li>
          <li>Successful outcomes at minimum cost</li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageHeader from "@/components/general/PageHeader.vue";
import ProgressCircleSmall from '@/components/general/ProgressCircleSmall.vue';
export default {
  components: {
    PageHeader,
    ProgressCircleSmall
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.v-container {
  max-width: 1200px;
}
</style>
