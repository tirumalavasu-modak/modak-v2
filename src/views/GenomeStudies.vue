<template>
  <v-container class="mt-12">
    <PageHeader title="Genome studies" subtitle="A genome-wide association study (GWAS) is a genetics research method for linking specific genetic variants to specific diseases. The procedure entails scanning the genomes of a large number of people in order to find genetic markers that can be used to predict the existence of disease" />
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/Genome-Studies.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h3 class="leading-snug"><span class="text-modak-blue">High-Performance Genome Analysis at Scale </span><br/><span class="text-navy">GWAS (Genome-Wide Association Study)</span></h3>
        <p>This study helps to develop customized medicines depending on various factors that affect the subject, thereby reducing the risk of side effects and increasing the effectiveness.</p><br/>
      </v-col>
    </v-row>
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <h3 class="leading-snug"><span class="text-modak-blue">How is the </span><br/><span class="text-navy">study done?</span></h3>
        <p>The blood samples from two similar bodies are taken, of which one is affected by disease and the other is not. Then, the DNA of the subjects is collected from the blood samples and further study of the structures is done by trying to find the SNPs. Then those gaps are studied thoroughly, and a solution is found.</p><br/>
        <p>This process requires fewer human resources. Hence, it is cost-effective. Here, precision is the key to success. Even a small calculation error can cost lives.</p>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/How-is-study-done-Genome.svg"></v-img>
      </v-col>
    </v-row>
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/Our-Solution-Genome.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h3 class="leading-snug"><span class="text-modak-blue">Our </span><br/><span class="text-navy">Solution</span></h3>
        <p>We use CUDA libraries to leverage GPU acceleration and harness the enormous computing power of Nvidia’s graphics processing units. Our tools are built to run on a GPU cluster and try to exploit the massively parallel architecture of GPUs.</p><br/>
        <p>OpenMPI and Nvidia’s NCCL and NVBLAS libraries have been used to achieve this feat. We also support the OpenCL platform using ArrayFire’s OpenCL at the backend.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageHeader from '@/components/general/PageHeader.vue'
export default {
  components: {
    PageHeader
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.v-container {
  max-width: 1200px;
}
</style>