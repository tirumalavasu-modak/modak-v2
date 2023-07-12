<template>
  <v-container class="mt-12">
    <v-row class="flex flex-row items-center">
      <h3 class="text-navy leading-tight">Building Scalable Data Fabric to Comply with US Healthcare Interoperability Standards </h3>
    </v-row>
    <v-row class="my-12">
      <h5 class="text-modak-blue">Background</h5>
      <p>The US Center for Medicare and Medicaid Services (CMS) has taken a step forward in advancing the interoperability and authorization process for the US Healthcare industry by advocating the adoption of the United States Core Data for Interoperability (USCDI) standard. This standard provides a set of health data classes and data elements to be included in patient records for sharing within the health information exchange, allowing insurers and providers to share patient data throughout their healthcare journey. As a result, when a patient wants to compare health plans to switch from one insurer to another, the patient can easily review the options available to make an informed choice, assuming the patient has consented to data sharing.</p><br/>
      <p>Healthcare insurance companies, who are custodians of information for millions of Americans, are now required to meet the standards set out by CMS. In addition to this, CMS has also implemented price transparency, enabling consumers to compare insurer plans. The CMS directive allows customers to make informed decisions based on the plans offered. Failure to comply with the CMS guidelines comes with a significant penalty to the insurer on a per member per day basis.</p>
    </v-row>
    <v-row class="my-12">
      <h5 class="text-modak-blue">Challenges</h5>
      <p>Within this context, a large US Healthcare Insurer set out on a path to extract and process data from disparate internal systems to create the standardized data sets in compliance with the USCDI standard across 25m+ members. The volume of data to be processed was significant, over 500 terabytes, representing approximately 500 billion rows of member records. Working with a leading system integrator the client adopted an incumbent software package to ingest data and use cloud provider big data services to profile and format the data into the common data format and meet the deadline set by the CMS.</p><br/>
      <p>However, the client faced massive last-minute issues with the project, incurring cloud processing costs in the hundreds of thousands for a few hours of processing time. And facing the possibility of not meeting the timeline set by the CMS and as a result, incurring penalties.</p>
    </v-row>
    <v-row class="my-12">
      <h5 class="text-modak-blue">Solution</h5>
      <p>The client approached Modak on a Friday afternoon to review the approach taken by their strategic System Integrator (SI) and if Modak could provide a solution to (a) resolve the technical issues (b) reduce the cloud costs and (c) meet the timelines set by CMS.</p><br/>
      <p>Modak’s leadership and data engineering team spent the week reviewing the cloud services configuration and the code created by the SI. Within the week, the Modak team had re-written the code and demonstrated that the output met the USCIS standard specifications. Further, the cloud processing costs were reduced to a few thousand dollars.</p>
    </v-row>
    <v-row class="my-12">
      <h5 class="text-modak-blue w-full">Impact</h5>
      <p>The solution delivered by Modak helped the Healthcare Insurance provider achieve the following:</p><br/><br/>
      <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2023/02/001.-Modak-Building-interoperable-data-fabric-at-scale-1-768x430.png" height="480"></v-img>
      <ul class="custom-list mt-4">
        <li>Reduced cloud processing costs by 99%</li>
        <li>Improved processing times by 90%</li>
        <li>Successful deployment of the solution into production within 3 weeks</li>
        <li>Client avoided US CMS penalty fees of millions of dollars and escalation of the issue to the Office of the CEO</li>
      </ul>
    </v-row>
    <v-row class="my-12">
      <h5 class="text-modak-blue">About Modak</h5>
      <p>Modak is a solutions company that enables enterprises to manage and utilize their data landscape effectively. We provide cloud-agnostic software and services to accelerate data migration initiatives. We use machine learning (ML) techniques to transform how structured and unstructured data is prepared, consumed, and shared.</p>
      <br />
      <p>Modak’s portfolio of Data Engineering Studio provides best-in-class delivery services, managed data operations, data mesh, data fabric, augmented data preparation, data quality, and governed data lake solutions.</p><br/>
      <p>To learn more, please download: <a href="https://modak.com/modak-nabu-solution/" class="no-underline text-modak-blue">https://modak.com/modak-nabu-solution/</a></p>
    </v-row>
    <v-row>
      <h5 class="text-modak-blue w-full">Author:</h5><br />
      <v-col class="text-left">
        <v-avatar size="90">
          <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2022/04/Author-Name-Devesh-Salvi-160x160.jpg.webp"></v-img>
        </v-avatar>
        <span class="font-oswald block font-medium text-xl text-modak-blue mt-4">Devesh Salvi</span>
        <span>Product Analyst at Modak</span>
      </v-col>
      <v-col class="text-left">
        <v-avatar size="90">
          <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/09/Aastha-Pic-160x160.png.webp"></v-img>
        </v-avatar>
        <span class="font-oswald block font-medium text-xl text-modak-blue mt-4">Aastha Jha</span>
        <span>Content Manager at Modak</span>
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

<style lang="scss" scoped>
.v-container {
  max-width: 1200px;
}
</style>