<template>
  <v-container class="mt-24">
    <v-row class="flex items-center">
      <h1 class="text-navy">DataOps, a growing trend in data engineering</h1>
      <v-spacer></v-spacer>
      <v-btn color="secondary" rounded="xl" size="large"><span class="capitalize font-bold" @click="openPdf">Download PDF</span></v-btn>
    </v-row>
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/DataOps-main.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <p>From the need to deliver quality data quickly and continuously, emerges DataOps, an approach that promises agile data operations for analytics. Speed, agility, automation, and quality are what it aims to achieve the highest degree.</p><br/>
        <p>With the exponential increase in data volumes at enterprises in recent years, there has been an ever-growing need to leverage data and streamline it faster for the decision-making process. For enterprises to adapt to this new normal and to become data-driven, the teams that consume and produce data must collaborate effectively and use data at each step of the process of making every business decision, regardless of whether the decision is big or small. To achieve robust and rapid insights, there should be a continuous and real-time delivery of data for analytics.</p><br/>
        <p>A faster and agile approach for the delivery of analytics-ready data requires accelerated data pipelines that can ingest, test and deploy data rapidly and can handle huge volumes of data quickly and continuously. DataOps is a principles-based practice that aims to achieve faster delivery of reliable, self-service data. The approach needs continuous monitoring of inputs, outputs, and business logic. Speed, agility, metadata, automation, and self-service culture are some of the building blocks of DataOps.</p>
      </v-col>
    </v-row>
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <h3><span class="text-modak-blue">Self-Service and </span><span class="text-navy">Collaboration</span></h3>
        <p>Self-service data is a form of Business Intelligence (BI), in which line-of-business professionals are enabled and encouraged to perform queries and generate reports in close collaboration with the data analytics team.</p><br/>
        <p>When business users are empowered to explore data and test their hypotheses without much IT help, the practice naturally internalizes data in the decision-making process. Business users can become innovative and propose new use cases for analytics. New analytics can be created quickly with the proposed use cases and businesses can see value in data analytics projects. This DataOps practice can quickly lead to incredible agility among data teams within organizations.</p><br/>
        <p>So, this shared mindset is important. However, for all this to be practical, the underlying data engineering process should be robust and agile enough to provide analytics-ready data quickly and continuously to its data consumers.</p>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/Self-Service-and-Collaboration.svg"></v-img>
      </v-col>
    </v-row>
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/Metadata-is-bedrock.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h3><span class="text-modak-blue">Metadata is the </span><span class="text-navy">bedrock</span></h3>
        <p>Such fast and continuous delivery of quality data can be achieved with the support of metadata. Collecting extensive metadata is the key practice of DataOps. Maintaining consistency in metadata and capturing schema drifts is crucial. Metadata gives information about data.</p><br/>
        <p>Once the collection process begins, it empowers data engineers to automate data processes and the implementation of thousands of test cases in data pipelines. Continuous automated testing will improve data quality, and thereby trust in data analytics. The collection of descriptive, administrative, and structural metadata would give us the essential information required to implement automation.</p><br/>
      </v-col>
    </v-row>
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <h3><span class="text-modak-blue">Automation to the </span><span class="text-navy">highest degree</span></h3>
        <p>DataOps is not feasible without automation. Highly automated and augmented data pipelines will only deliver faster data enablement.</p><br/>
        <p>As data pipelines grow in number and size, the organizations need to set some standards to govern data at various stages in the pipelines. Standardization and repeatability are the core components of automation. The organization that implements automation is more impregnable to schema drifts and changes in data.</p><br/>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/Automation-to-highest-degree.svg"></v-img>
      </v-col>
    </v-row>
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/Building-trust-in-data.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h3><span class="text-modak-blue">Building trust in </span><span class="text-navy">data</span></h3>
        <p>Automated continuous testing is essential in building trust in data. Thousands of test cases can be generated automatically for data pipelines and can be used to test data continuously. The tests are simple and addictive. Whenever a change is made to data pipelines, test cases are created in DataOps. These tests are the early warning indicators of data quality issues.</p><br/>
        <p>As the complexity of data pipelines rises, the interconnections in the data elements also become complex and the pipelines are prone to more errors. Automated continuous testing can help boost confidence in data.</p><br/>
        <p>Further, statistical process controls to ensure continuous monitoring of the data pipelines by analyzing the output data. Any variations in data outputs can be identified, studied and appropriate action can be taken to resolve the issues.</p><br/>
        <p>All these practices of DataOps, if applied to the fullest, can reduce cycle time drastically allowing the business users to dive deep into the data without any waiting time. It also encourages a collaborative working environment and promotes agility.</p><br/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  setup () {

    const openPdf = () => {
      window.open('https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/DATAOPS-DOC_PDF_compressed.pdf', '_blank');
    }

    return {
      openPdf
    }
  }
}
</script>

<style lang="scss" scoped>
.v-container {
  max-width: 1200px;
}
</style>