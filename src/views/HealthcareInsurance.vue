<template>
  <v-container class="mt-12">
    <v-row class="flex flex-row items-center mb-8">
      <h3 class="text-navy leading-tight">Building an Interoperable Data Fabric on Multi-cloud at a Top 5 Healthcare Insurance Company</h3>
      <p>Healthcare insurance companies depend on capturing data of their members, data such as healthcare plans, medical data from healthcare providers, review, approval of medicines, and managing Medicare plans for millions of Americans. The volume and variety of data are huge, and ensuring member data is captured, stored, and processed for analytical purposes to support that the right care, at the best possible cost and quality, is delivered in the right place is core to their business model.</p><br/>
      <p>A Top 5 Healthcare Insurance company provides medical and specialty insurance products that allow members to access healthcare services through a network of care providers such as physicians, hospitals, and other healthcare providers. As such, data interoperability is at the core of interacting and delivering services to their members.</p><br/>
      <v-row>
        <v-col cols="12" md="8">
          <p>The critical data assets, often referred to as the ‘crown jewels’ for healthcare insurance companies are members and claims data. Historically, the Healthcare insurance company had built on-prem data lakes populated by transactional systems and external data providers to provide a single repository for analytical consumption. The software tools and data storage infrastructure were assembled on legacy ETL tools, and custom programs and hosted on Hadoop. Over time the complexity, lack of scalability, and investment required to maintain and support such an on-prem infrastructure became inflexible and cost-prohibitive. The challenge was to consider the options of how to modernize the software tools and migrate to the cloud and thereby move away from the current processes and dependency on Hadoop.</p><br/>
          <p>The data volumes and business integrity checks are significant, with approximately 10+ billion records to be migrated, legacy tools taking over 25 hours to process, and frequently failing and requiring a dedicated team of contractors to manage and support.</p>
        </v-col>
        <v-col cols="12" md="4">
          <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2022/06/001.-Nabu-in-Action-blog-01.png" height="240"></v-img>
        </v-col>
      </v-row>
      <p class="my-4">The design and development team set out the following objectives:</p>
      <ul class="custom-list my-4">
        <li>Support the client’s multi-cloud strategy to securely operate across multi-cloud providers</li>
        <li>Ensure interoperability of data across on-prem and cloud provider systems</li>
        <li>Meet and improve on current business and IT service level agreements</li>
        <li>Ensure data compliance and regulatory needs are not compromised</li>
        <li>Provide a cloud data platform to fuel analytics and innovation</li>
      </ul>
      <v-row class="my-8">
        <v-col cols="12" md="4">
          <p>After evaluating incumbents, third-party software, and cloud provider tools the team selected Modak Nabu™, an integrated data engineering platform that accelerates the ingestion, profiling, and migration of data to any cloud provider. The Modak Nabu™ software provides data spiders to crawl, index, and profile large data sets, and automates the creation of data pipelines and Smart BOTs to orchestrate the data movement workflows from the on-prem enterprise source systems to the MS Azure Cloud ADLS2 platform.</p>
        </v-col>
        <v-col cols="12" md="8">
          <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2022/06/002.-Nabu-in-Action-blog-01.png" height="240"></v-img>
        </v-col>
      </v-row>
      <p class="my-8">Due to the clients’ Cloud 3.0 multi-cloud strategy, and leveraging existing investment, Google’s DataProc Engine (Spark) was used as the compute processing engine to enable the migration and provide resiliency and performance.</p>
    </v-row>
    <v-row class="my-8 grid grid-cols-2 gap-6">
      <v-col>
        <p>The outcomes and impact of the implementation of Modak Nabu™ are summarized as follows:</p>
        <ul class="custom-list my-4">
          <li>Reduced cost and improved service due to the dependency on on-prem Hadoop removed</li>
          <li>Average data processing time improved by 85% from hours to minutes</li>
          <li>Eliminated the dependency on legacy ELT/ETL tools</li>
          <li>Less stress on source systems through the usage of parallel workloads implemented with Modak Nabu™</li>
          <li>Alignment with the clients’ hybrid cloud and multi-cloud strategy</li>
          <li>Availability and refresh of data into the MS Azure Data Lake within minutes for analysis</li>
          <li>Implementation of automated data pipelines, with robust message-driven fabric and real-time monitoring to meet SLA.</li>
          <li>An active metadata repository enabling the automation of data pipelines and BOTs to orchestrate data migration.</li>
          <li>Automatic identification of source data schemas enabling data pipelines, eliminating manual intervention and downtime.</li>
        </ul>
      </v-col>
      <v-col>
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2022/06/004.-Nabu-in-Action-blog.png"></v-img>
      </v-col>
    </v-row>
    <v-row class="my-8">
      <h5 class="text-navy">Modak Nabu™</h5>
      <p>Modak Nabu™ enables enterprises to automate data ingestion, curation, and consumption processes at a
        petabyte-scale. Modak Nabu™ empowers tomorrow's smart enterprises to create repeatable and scalable business data
        domain products that improve the efficiency and effectiveness of business users, data scientists, and BI analysts
        in finding the appropriate data, at the right time, and in the right context.</p>
    </v-row>
    <v-row>
      <h5 class="text-navy w-full">Author:</h5><br />
      <v-col class="text-left">
        <v-avatar size="90">
          <v-img
            src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2022/06/Rajesh-Vassey-image-160x160.jpg.webp"></v-img>
        </v-avatar>
        <span class="font-oswald block font-medium text-xl text-modak-blue mt-4">Rajesh Vassey</span>
        <span>Technical Program Manager, Modak</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>.v-container {
  max-width: 1200px;
}</style>