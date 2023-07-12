<template>
  <v-container class="mt-12">
    <v-row class="flex flex-row items-center mb-8">
      <h3 class="text-navy leading-tight mb-16 w-full">Building Blocks of a Modern Data Platform</h3>
      <h3 class="text-navy leading-tight mb-4 w-full">Research firm Gartner predicts:</h3>
      <p class="font-oswald text-modak-blue font-normal text-xl">Through 2025, 80% of organizations seeking to scale
        digital business will fail because they do not
        take a modern approach to data and analytics governance.</p>
    </v-row>
    <v-row class="my-8">
      <h5 class="text-navy">Why such a high failure rate?</h5>
      <p>In our opinion, incumbent and traditional data platforms managed by IT organizations are primarily focused on
        very narrow datasets, structured data, centralized governance, and have historically been deployed on-premises.
        With the proliferation of cloud solutions, the need for a hybrid cloud configuration, and the growing need for
        wider and continuous data sources encompassing unstructured and semi-structured data sources to fuel AI models –
        we believe we have reached a tipping point where an alternative approach should be considered. A modern data
        platform is designed to accommodate not only multi-cloud and hybrid cloud capabilities, but also automated data
        product delivery as a service and enable multiple use cases.</p>
    </v-row>
    <v-row class="my-8">
      <h5 class="text-navy">What is a Modern Data Platform (MDP)?</h5>
      <p>An MDP is a new approach and architectural pattern of data management. Modern Data Platform provides an automated
        data infrastructure that continuously feeds analytical models and AI algorithms that learn and evolve as more data
        is fed into them.</p>
    </v-row>
    <v-row class="my-8">
      <h5 class="text-navy">Key Principles of MDP</h5>
      <ul class="custom-list my-4">
        <li>A full data landscape requires inventorying all data sources and not being selective to solve specific and
          targeted use cases.</li>
        <li>Consolidation of data into cloud-enabled infrastructure to provide a “Data Lake” – enabling flexibility of
          deployment on multi-cloud and hybrid cloud infrastructure.</li>
        <li>Enabling a portfolio of use cases to be created, delivered, and prioritized to business needs and outcomes.
        </li>
        <li>The application of advanced AI and ML-driven techniques to automate the standardization and harmonization of
          data sets into data domain assets and democratization of data with business-owned data products.</li>
      </ul>
    </v-row>
    <v-row class="my-8">
      <h5 class="text-navy">To benefit from MDP requires a parallel shift in culture</h5>
      <ul class="custom-list my-4">
        <li>Adoption of a data-driven organization that provides data ownership and accessibility to business users.</li>
        <li>Senior executives providing subject matter expertise, mentorship, and transparency in decision making and
          outcomes.</li>
        <li>Sense of urgency to move faster with a start-up founders’ mentality to rapidly generate value.</li>
      </ul>
    </v-row>
    <p class="my-4 text-navy font-oswald font-normal text-xl">To learn more please download the building blocks of a Modern Data Platform White Paper:</p>
    <v-btn color="primary" rounded="xl" size="large" class="mb-20" @click="$router.push('/resources/modern-data-platform')">Read more</v-btn>

    <v-row class="mb-16">
      <h5 class="text-navy w-full">Co Authors:</h5><br />
      <v-col class="text-left">
        <v-avatar size="90">
          <v-img
            src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2022/04/Mask-group-4.svg"></v-img>
        </v-avatar>
        <span class="font-oswald block font-medium text-xl text-modak-blue mt-4">Milind Chitgupakar</span>
        <span>Chief Analytics Officer & Co-founder, Modak</span>
      </v-col>
      <v-col class="text-left">
        <v-avatar size="90">
          <v-img
            src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2022/04/Mask-group-1.svg"></v-img>
        </v-avatar>
        <span class="font-oswald block font-medium text-xl text-modak-blue mt-4">Mark Ramsey</span>
        <span>Ramsey International Managing Partner</span>
      </v-col>
      <v-col class="text-left">
        <v-avatar size="90">
          <v-img
            src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2022/04/Mask-group-2.svg"></v-img>
        </v-avatar>
        <span class="font-oswald block font-medium text-xl text-modak-blue mt-4">Baz Khuti</span>
        <span>President, Modak USA</span>
    </v-col>
  </v-row>
</v-container></template>

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