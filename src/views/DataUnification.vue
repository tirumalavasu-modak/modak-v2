<template>
  <div>
    <Banner img="img/backgrounds/bg-unify.jpg" title="Data unification" subTitle="UNIFY >> FINGERPRINT >> CLASSIFY" />
    <TextCard text="Modak's unification process combines human expertise, machine learning algorithms, data science and in-house developed fingerprinting technology" />
    <FeatureCard :feature="feature1" />
    <div class="max-w-7xl mx-auto my-16">
      <v-card class="my-4 p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-2">The Challenge</h3>
        <h3 class="text-base font-normal text-gray-900">
          The problem of unifying 3 different data standards with 10 records each doesn’t require a tool. Instead, the user can utilize a whiteboard and a pen to solve the issue. When it comes to five different data standards with 1 lakh rows, traditional ETL approach can be used. But, if the problem is to solve tens or hundreds of separate data sources with 5000+ mapping rules, 3000+ variations in column names and billions of records in each source, then the traditional ETL solution is not feasible.
        </h3>
      </v-card>
    </div>
    <FeatureCard :feature="feature2" />
    
  </div>
</template>

<script>
import Banner from '@/components/common/Banner'
import TextCard from '@/components/common/TextCard'
import FeatureCard from '@/components/common/FeatureCard'
export default {
  name: 'ManagedDataops',
  components: {
    Banner,
    TextCard,
    FeatureCard
  },
  data () {
    return {
      feature1: {
        img: 'img/backgrounds/data-unification.jpg',
        dir: 'left',
        title: 'Traditional approach to Data Unification​',
        description: 'Data unification involves the process of ingesting, transforming, mapping and deduplicating and exporting the data from multiple data sources.  Two software tools are commonly used by IT teams when dealing with transactional data sets to feed into data warehouses : ETL (Extract Transform and Load) software and MDM (Master Data Management) software.',
        items: []
      },
      feature2: {
        img: 'img/backgrounds/Unification.svg',
        dir: 'right',
        title: 'Modak’s Solution:​',
        description: 'Modak’s advanced software capabilities such as metadataprogramming and data fingerprinting (enabled in Modak Nabu™), changes the paradigm by using machine learning techniques to replace the traditional approaches and through extensive automation based on big data technologies (such as Hadoop) and using cloud infrastructure to massively scale and reduce the time, cost and risk in implementing large scale data lake projects.​',
        items: []
      }
    }    
  }
};
</script>

<style lang="scss" scoped>
</style>