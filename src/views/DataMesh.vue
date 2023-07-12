<template>
  <v-container class="mt-12">
    <v-row class="flex flex-row items-center mb-8">
      <h3 class="text-navy leading-tight">Combining Data Mesh and Data Fabric Capabilities</h3>
      <p class="font-oswald text-modak-blue font-normal text-xl">Data Fabric and Data Mesh concepts are front and center for many data-driven organizations and are routinely compared in data management and engineering circles. If you want some practical ideas to accelerate your data strategy, look for opportunities to learn from both approaches and leverage the best for your design.</p>
    </v-row>
    <v-row class="my-4 flex flex-col">
      <h5 class="text-modak-blue">A simpler and faster pathway to decentralized data sources</h5>
      <p>There are numerous articles and videos on mesh vs fabric, many of them offer useful opinions on the pros and cons. While most present the two as competing ideas, we propose that they can work together. They are both great concepts, and while there are differences in the approach, they share some key principles:</p><br />
      <ul class="custom-list">
        <li>Eliminating data silos and enabling data democratization across the enterprise.</li>
        <li>Enabling access to decentralized data sources in a multi-cloud/hybrid-cloud environment with the agility and scale that our business teams demand. Centralization is not a requirement, and for many organizations, it is not effective.</li>
        <li>Simplifying the ETL process to eliminate the bottleneck that the current centralized teams present.</li>
      </ul>
      <p>In this article, we are going to focus on three capabilities: Artificial Intelligence, Domains and Data Products, and Governance. Certainly, there is a lot more to discuss and more opportunities to leverage the best of both worlds but let this be our first step towards a more enriching conversation in the near future.</p>
    </v-row>
    <v-row class="my-4 flex flex-col">
      <h5 class="text-modak-blue">How a Data Fabric Leverages Artificial Intelligence</h5>
      <p>A Data Fabric uses artificial intelligence to integrate data sets across different data sources. The fabric relies on active metadata, knowledge graphs, and machine learning to drive recommendations for integration and analytics. This approach automates your discovery of new logical groupings to create virtual data domains. If you have good metadata and are working across large data sets, this is a sensible approach.</p><br />
      <p>For anyone building a fabric or a mesh, look for ways to leverage AI to automate data discovery and integration. The effectiveness of the AI engine will depend greatly on the metadata and your knowledge of the data sets; you need to ‘teach’ the engine and keep an eye on data quality. If you have implemented a Data Mesh and are looking for new ways to analyze, improve the quality, or categorize your data sets, look into AI capabilities.</p>
    </v-row>
    <v-row class="my-4 flex flex-col">
      <h5 class="text-modak-blue">Data Mesh Domains Serve Up Data Products</h5>
      <p>The biggest difference between a Data Fabric and a Data Mesh is how they each address the concept of domains and data products. The fabric creates a virtual management layer that sits on top of the data sources to create logical domains. Whether it is recommended by AI or designed by an engineer, in a fabric, the domain is managed within a central virtual layer.</p><br />
      <p>A mesh can also rely on a virtual layer to create logical domains and products, but it moves management and delivery closer to the consumer. The Data Mesh adds people and processes to the domain and product concepts. In a mesh, distributed domains are managed in a self-service manner by autonomous domain teams. Each domain team designs and builds data products for their consumer as their primary purpose is to simplify consumer reuse and incentivize sharing. The teams closest to the business problem and the business data, manage the domain.</p><br/>
      <p>For teams building a fabric or a mesh, you should empower the consumer. Data products should be curated and offered in a manner that allows the consumer to quickly find them, use them, and share them. Self-service capabilities empower domain teams to build their own data products, and some autonomy allows them to make rapid governance decisions. If you have built a Data Fabric and are looking for ways to accelerate consumer adoption, consider empowering them to manage their own domains and products.</p>
    </v-row>
    <v-row class="my-4 flex flex-col">
      <h5 class="text-modak-blue">Governance</h5>
      <p>A Data Fabric can be described as employing a top-down approach to governance. In a fabric, the metadata and virtual layers are centrally managed. A Data Mesh more closely resembles a bottom-up approach, with distributed domain teams each managing their own data governance. Whether you are implementing a fabric or a mesh, you should adapt your governance approach to meet the risk vs value profile that best fits the use case. A Data Mesh promotes autonomy to enable domain teams to govern their own areas. A domain with higher risk data may employ strict controls, whereas another domain may choose an open-access approach.</p><br />
      <h4 class="text-modak-blue font-[300]">Whether you have started your mesh or fabric or are still thinking about how to get started, you have an opportunity to drive continuous improvement and consumer value by learning from the collective experiences and capabilities of both concepts.</h4>
    </v-row>
    <v-row class="my-4">
      <h5 class="text-navy">About Modak</h5>
      <p>Modak is a solutions company that enables enterprises to manage and utilize their data landscape effectively. We
        provide cloud-agnostic software and services to accelerate data migration initiatives. We use machine learning
        (ML) techniques to transform how structured and unstructured data is prepared, consumed, and shared.</p>
      <br />
      <p>Modak’s portfolio of Data Engineering Studio provides best-in-class delivery services, managed data operations,
        data mesh, data fabric, augmented data preparation, data quality, and governed data lake solutions.</p><br />
      <p>To learn more, please download: <a href="https://modak.com/modak-nabu-solution/"
          class="no-underline text-modak-blue">https://modak.com/modak-nabu-solution/</a></p>
    </v-row>
    <v-row class="my-4">
      <h5 class="text-navy">Modak Nabu™</h5>
      <p>Modak Nabu™ enables enterprises to automate data ingestion, curation, and consumption processes at a petabyte-scale. Modak Nabu™ empowers tomorrow's smart enterprises to create repeatable and scalable business data domain products that improve the efficiency and effectiveness of business users, data scientists, and BI analysts in finding the appropriate data, at the right time, and in the right context.</p>
    </v-row>
    <v-row class="mb-16">
      <h5 class="text-navy w-full">Co Author:</h5><br />
      <v-col class="text-left">
        <v-avatar size="90">
          <v-img
            src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2022/04/mayank-160x160.png"></v-img>
        </v-avatar>
        <span class="font-oswald block font-medium text-xl text-modak-blue mt-4">Mayank Mehra</span>
        <span>Modak - Head of Product Management</span>
        <span>Contact: mayank.mehra@modak.com</span>
      </v-col>
      <v-col class="text-left">
        <v-avatar size="90">
          <v-img
            src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2022/04/Screenshot-2022-04-28-134610.png"></v-img>
        </v-avatar>
        <span class="font-oswald block font-medium text-xl text-modak-blue mt-4">Adrian Estala</span>
        <span>Starburst - VP, Data Mesh Consulting Services</span>
      </v-col>
    </v-row>
    <h5 class="italic">Originally published on Starburst.io.</h5>
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