<template>
  <div>
    <Banner img="img/backgrounds/blur-click-company.jpg" title="About us" subTitle="Modak provides advanced data engineering services that accelerate data enablement by 4-10X, using proven metadata and template-driven approaches." />
    <div class="max-w-7xl mx-auto my-16">
      <v-card class="my-4">
        <h3 class="p-8 text-base font-normal text-gray-900">
          Modak is a boutique services company that enables enterprises manage and utilize their data landscape effectively. Modak uses machine learning (ML) techniques to transform how analytics content is prepared, consumed and shared. Modak's Nabu is an enterprise product and has been covered in Gartner’s “Market Guide to Data preparation 2019.” Nabu converges data discovery, ingestion, preparation, catalog, unification, quality and profiling into a single enterprise platform with the metadata being the primary driver. By automating mundane and laborious data preparation tasks, Nabu significantly reduces the time it takes to develop and deploy data pipelines. Our portfolio of services broadly covers managed data operation services, enterprise data fabric, augmented data preparation data quality and governed data lake.
        </h3>
      </v-card>
    </div>
    <FeatureCard :feature="feature1" />
    <FeatureCard :feature="feature2" />
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
      feature1: {
        img: 'img/backgrounds/adventure-blur-close-up.jpg',
        dir: 'left',
        title: 'Our vision',
        description: 'To be the most innovative solutions provider and preferred partner for Data Analytics worldwide.',
        items: []
      },
      feature2: {
        img: 'img/backgrounds/cycle.jpg',
        dir: 'right',
        title: 'Our mission',
        description: 'To enable organizations to make better sense of data and translate that intelligence into smart decisions.',
        items: []
      }
    }    
  }
};
</script>

<style lang="scss" scoped>
</style>