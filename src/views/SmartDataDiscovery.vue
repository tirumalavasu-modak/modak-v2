<template>
  <div>
    <Banner img="img/backgrounds/Big-Data.jpg" title="Smart Data Discovery" subTitle='<blockquote cite="#"><p class="uk-margin-small-bottom text-white">Smart, Governed, Hadoop-based, Search-based and Visual-based Data Discovery will converge into a single set of next-generation data discovery capabilities as components of a modern business intelligence and analytics platform.</p><footer class="text-white">Gartner</footer></blockquote>' />
    
    <FeatureCard :feature="feature1" />
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
      text: 'DataOps is a data enablement approach designed for rapid, reliable and repeatable delivery of ready-made data with fully operational analytics. Modak’s DataOps majorly consists of faster data enablement by using Modak’s approach of Data Preparation. Agile and smarter data engineering can handle large-scale data rapidly and efficiently is key to success.',
      feature1: {
        img: 'img/backgrounds/data-preparation-ipad.png',
        dir: 'left',
        title: '',
        description: 'Enterprises have huge amounts of data and information across their federated data silos. The challenge is to enable data teams to rapidly discover and access datasets.​<br/><br/>Modak’s Data Spider service has built-in automation capabilities to discover new data sources, detect changes in source data and schema drifts with ease.<br/><br/>The Data Spider service crawls and captures metadata from structured, semi-structured and unstructured data sources, whether on-prem or on-cloud.​<br/><br/>The metadata is stored in an active metadata catalog which is a searchable repository of business, operational, technical and social metadata in a searchable repository.<br/><br/>The Data Spider keeps changes in metadata up-to-data, enabling dynamic data profiling of your source data repositories and thus ensuring data analysts and data scientists discover and access relevant data quickly.​',
        items: []
      }
    }    
  }
};
</script>

<style lang="scss" scoped>
</style>