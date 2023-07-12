<template>
  <v-container>
    <v-row class="flex flex-row items-center my-8 min-h-[20rem]">
      <v-col cols="12" md="6">
        <h4 class="font-normal"><span class="text-modak-blue leading-tight">Modak Nabu™ is a cloud-neutral, built-from-the-ground-up modern data platform that enables enterprises to automate data ingestion, curation, and consumption processes at a petabyte-scale.</span></h4>
      </v-col>
      <v-col cols="12" md="6">
        <h4>Download Modak Nabu™ Solution Overview.</h4>
        <v-form validate-on="submit lazy" @submit.prevent="submit">

          <v-text-field v-model="email" label="Your Email" variant="underlined"></v-text-field>

          <v-text-field v-model="companyName" label="Company Name" variant="underlined"></v-text-field>

          <v-btn type="submit" color="secondary" class="mt-2 capitalize" rounded="xl" size="large" text="Download"></v-btn>
        </v-form>
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