<template>
  <v-container class="mt-12">
    <v-row class="flex flex-row items-center">
      <h3 class="text-navy leading-tight">What is a Data Lakehouse and Why does it Matter?</h3>
      <p>Enterprises predominantly depended on Data warehouses as the primary information storage architecture during the early 1980s. As the complexity of data increased, the need for a more dynamic model led to the birth of “Data Lakes”. While data lakes served as a game-changer in the industry, they had their set of drawbacks. Amid ever evolving data structure and size, enterprises required a solution for their data storage needs for better data management and to deliver more precise analysis on their data. Accommodating these requirements expedited the hybrid infrastructure innovation, now popularly known as “Data Lakehouse”.</p><br/>
      <p>The fundamental concept of data lakehouse was to extract the best features of data warehouse and data lake, while eliminating the drawbacks. Therefore, in basic terms, data lakehouse can efficiently store and manage structured, semi structured and unstructured data with utmost ease.</p><br/>
      <p>In order to better understand data lakehouses, it is vital to comprehend the two systems that contribute to its emergence:</p>
    </v-row>
    <v-row class="my-12">
      <h5 class="text-modak-blue">Data Lake</h5>
      <p>Data Lake is a repository that stores data- both structured and unstructured. Data lake provides the flexibility to handle large volumes of data without the need of structuring or transforming the data first. The key advantage of data lake is its scalability enables storing all the data in one location at a minimal cost and drawing it out as needed for analysis.</p>
    </v-row>
    <v-row class="my-12">
      <h5 class="text-modak-blue">Data Warehouse</h5>
      <p>Just like a data lake, a data warehouse is a repository that stores large volumes of data. In contrast to a data lake, a data warehouse only stores data in a highly structured and unified form to support analytics use cases. Decision-making across an organization’s lines of business can be supported by historical analysis and reporting using data from a warehouse.</p>
    </v-row>
    <v-row class="my-12">
      <h5 class="text-modak-blue">Data Lakehouse: combining both towards better business decisions</h5>
      <p>Data Lakehouse is a new open architecture that combines the capabilities of data warehouses and data lakes. Data Lakehouse combines the flexibility, scalability, and cost-effectiveness of data lakes and the power and speed of analytics of data warehouse.</p><br/>
      <p>It also implements comparable data structures and data management capabilities of a data warehouse directly on the kind of inexpensive storage used for data lakes making it possible to create data lakehouse. With Data lakehouse data teams can work more quickly because they can use data without having to access multiple systems. Additionally, data lakehouse guarantees that teams working on data science, machine learning, and business analytics projects have access to the most complete and accurate data available.</p>
    </v-row>
    <v-row class="my-12">
      <h5 class="text-modak-blue">Key Benefits of a Data Lakehouse</h5>
      <ul class="custom-list mt-4">
        <li><strong>Improved Data Reliability:</strong> ETL data transfers between various systems need to occur less frequently, which lowers the possibility of data quality problems.</li>
        <li><strong>Decreased Costs:</strong> Ongoing ETL costs will be decreased because data won’t be kept in multiple storage systems at once.</li>
        <li><strong>Avoid Data Duplication:</strong> By combining data, the lakehouse system removes redundancies that may occur when a company uses multiple data warehouses and a data lake.</li>
        <li><strong>More Actionable Data:</strong> Big data is organized in a data lake using the structure of a lakehouse.</li>
        <li><strong>Better Data Management:</strong> In addition to being able to store large amounts of diverse data, lakehouse also permits a variety of uses for it, including advanced analytics, reporting, and machine learning.</li>
      </ul>
    </v-row>
    <v-row class="my-12">
      <h5 class="text-modak-blue">Key Takeaways</h5>
      <p>Data lakehouse enables data teams to work more quickly, and teams working on data science, machine learning, and business analytics projects have access to the most complete and accurate data available. Data lakehouse also provides better data management by permitting a variety of uses for large amounts of diverse data, including advanced analytics, reporting, and machine learning. With the comparable data structures and data management capabilities of a data warehouse implemented on the type of inexpensive storage used for data lakes, it is possible to create data lakehouse. The emergence of data lakehouse architecture is a game-changer in the industry as it guarantees more reliable, actionable, and comprehensive data while decreasing ongoing ETL costs and avoiding data duplication.</p>
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