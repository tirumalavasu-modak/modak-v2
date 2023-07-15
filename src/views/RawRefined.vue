<template>
  <v-container class="mt-12">
    <v-row class="flex flex-row items-center">
      <h3 class="text-navy leading-tight">From Raw to Refined: Incorporating Data Quality Rules in Data Pipelines</h3>
      <p>Data quality is a critical aspect of managing and utilizing data effectively within organizations. Data engineering and DataOps teams play a crucial role in ensuring the integrity, accuracy, and security of an organization's data assets. In an ideal scenario, data quality issues should be addressed at the source, but this is often challenging in real-world environments. However, data pipelines, which facilitate the flow of data through an organization's systems, can be enhanced for high-quality data delivery by incorporating data quality checks and rules. This article explores the concept of how embedded data quality checks can help organizations to improve data quality.</p>
    </v-row>
    <v-row class="my-12">
      <h5 class="text-modak-blue">Detecting Data Quality Issues Early:</h5>
      <p>Data quality issues can originate from the data source itself, making it essential to identify and resolve these issues as early as possible. The timely identification and resolution of data quality issues significantly contribute to the overall data quality and the effectiveness of teams working with the data. Data pipelines, with their inherent ability to monitor data as it flows, can serve as a proactive mechanism for detecting defects and flaws in data quality.</p>
    </v-row>
    <v-row class="my-12">
      <h5 class="text-modak-blue">Incorporating Data Quality Rules into Data Pipelines:</h5>
      <p>To enable data pipelines to deliver high-quality data for consumption, it is essential to embed data quality rules directly within the pipelines. These rules can include industry-standard checks, such as verifying non-null values, validating date formats, or ensuring data falls within specific ranges. Additionally, organization-specific data quality rules, unique to each business or domain, should be added to the pipelines.</p>
    </v-row>
    <v-row class="my-12">
      <h5 class="text-modak-blue">Setting Data Quality Checks:</h5>
      <p>DataOps teams should have the flexibility to define and configure various data quality checks for each data pipeline. These checks can be customized to align with the specific requirements and characteristics of the organization's data. By setting thresholds and criteria for data quality, the pipelines can evaluate and assess the incoming data in real time.</p>
    </v-row>
    <v-row class="my-12">
      <h5 class="text-modak-blue">Implementing Alert Mechanisms:</h5>
      <p>Data pipelines can be equipped with alert mechanisms to promptly notify stakeholders when data quality rules are not met. Depending on the severity of the data quality issue, different levels of alerts can be configured. For instance, a hard pause can be set to halt the pipeline's operation until the issue is resolved, or a soft pause can be utilized, allowing the data to continue flowing while triggering an alert for investigation.</p>
    </v-row>
    <v-row class="my-12">
      <h5 class="text-modak-blue">Addressing Industry and Organization-Specific Data Quality:</h5>
      <p>Data quality rules can be categorized into two types: those that apply across the industry and those specific to an organization or domain. Industry-standard rules, like common data formats, can be incorporated into data pipelines universally. Meanwhile, organization-specific rules that reflect the uniqueness of each business's data should be integrated into the pipelines to address organization-specific requirements.</p>
    </v-row>
    <v-row class="my-12">
      <h5 class="text-modak-blue">The Business Impact of Good Data Quality:</h5>
      <p>A survey by Experian Data Quality highlights that 94% of organizations believe they encounter data quality issues, with poor data quality estimated to cost around 12% of annual revenue. Consequently, data practitioners and business leaders recognize the significance of maintaining good data quality. Ensuring data quality is not just a key metric for DataOps teams but is also critical to overall business success.</p>
      <br />
      <p>Data pipelines, with their ability to monitor data flow and apply data quality rules, ensure high-quality data delivery for end-user consumption. By incorporating data quality checks, setting alert mechanisms, and addressing both industry and organization-specific data quality rules, data pipelines contribute to improved data quality. As a result, organizations can mitigate the negative impacts of poor data quality, drive better decision-making, enhance customer experiences, and ultimately achieve their data-driven goals. Leveraging data pipelines ensures that poor-quality data does not infiltrate the organization's data ecosystem, safeguarding the integrity and reliability of valuable data assets.</p>
    </v-row>
    <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/09/001.-Modak-Data-Pipelines-article-006.png"></v-img>
    <v-row class="my-12">
      <h5 class="text-modak-blue">About Modak</h5>
      <p>Modak is a solutions company that enables enterprises to manage and utilize their data landscape effectively. We provide cloud-agnostic software and services to accelerate data migration initiatives. We use machine learning (ML) techniques to transform how structured and unstructured data is prepared, consumed and shared.</p>
      <br />
      <p>Modak’s portfolio of Data Engineering Studio provides best-in-class delivery services, managed data operations, data mesh, data fabric, augmented data preparation, data quality, and governed data lake solutions.</p>
      <br />
      <p class="my-4">To learn more, please download: <a href="https://modak.com/modak-nabu-solution" class="no-underline text-modak-blue">https://modak.com/modak-nabu-solution</a></p>
    </v-row>
    <v-row>
      <h5 class="text-modak-blue w-full">Author:</h5><br />
      <v-col class="text-left">
        <v-avatar size="90">
          <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/09/aarti-1-160x160.png"></v-img>
        </v-avatar>
        <span class="font-oswald block font-medium text-xl text-modak-blue mt-4">Aarti Joshi</span>
        <span>CEO and Cofounder</span>
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