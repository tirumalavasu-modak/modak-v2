<template>
  <v-container>
    <v-row class="flex flex-row items-center my-8">
      <v-col cols="12" md="6">
        <h1><span class="text-modak-blue leading-tight">I'm ready to grow<br/> my business. </span><br/><span class="text-navy leading-tight">Schedule my live<br/> demo.</span></h1>
      </v-col>
      <v-col cols="12" md="6">
        <v-form validate-on="submit lazy" @submit.prevent="submit">
          <v-text-field
            v-model="firstName"
            label="First Name"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="lastName"
            label="Last Name"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="email"
            label="Your Email"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="companyName"
            label="Company Name"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="mobile"
            label="Phone Number"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="designation"
            label="Phone Number"
            variant="underlined"
          ></v-text-field>

          <v-btn
            type="reset"
            class="mt-2 mr-4 capitalize"
            rounded="xl"
            size="large"
            text="Reset"
          ></v-btn>

          <v-btn
            type="submit"
            color="secondary"
            class="mt-2 capitalize"
            rounded="xl"
            size="large"
            text="Submit"
          ></v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
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