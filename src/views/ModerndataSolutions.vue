<template>
  <v-container class="mt-12">
    <v-row class="flex flex-row items-start my-12">
      <v-col cols="12" md="6">
        <v-img
          src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2023/05/Delivering-modern-data-solutions.png"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <p class="text-navy text-lg mb-8">
          Download our whitepaper now to supercharge your data strategy.
        </p>
        <v-form validate-on="submit lazy" @submit.prevent="submit">
          <v-text-field
            v-model="userName"
            label="Full Name"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="userName"
            label="Work Email"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="userName"
            label="Company"
            variant="underlined"
          ></v-text-field>

          <v-btn
            aria-label="Submit"
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