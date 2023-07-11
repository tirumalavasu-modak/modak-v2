<template>
  <v-container class="mt-12">
    <v-row class="flex flex-row items-center my-8">
      <v-col cols="12" md="6" class="text-left px-16">
        <v-img src="@/assets/images/modak-map-image.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h3 class="text-navy">Drop us a line</h3>
        <v-form validate-on="submit lazy" @submit.prevent="submit">
          <v-text-field
            v-model="userName"
            label="First Name"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="userName"
            label="Second Name"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="userName"
            label="Your Email"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="userName"
            label="Subject"
            variant="underlined"
          ></v-text-field>

          <v-textarea
            v-model="userName"
            label="Your Message"
            variant="underlined"
          ></v-textarea>

          <v-btn
            type="submit"
            color="secondary"
            class="mt-2 capitalize"
            rounded="xl"
            size="large"
            text="Send"
          ></v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-row class="mt-16">
      <v-col cols="12" md="4">
        <h3 class="font-oswald text-navy">Get in touch</h3>
        <div class="flex flex-row justify-start">
          <v-btn
            density="comfortable"
            icon="fab fa-facebook-f"
            size="x-large"
            class="text-white bg-[#00adee] text-xl mr-4"
          ></v-btn>
          <v-btn
            density="comfortable"
            icon="fab fa-twitter"
            size="x-large"
            class="text-white bg-[#00adee] text-xl mr-4"
          ></v-btn>
          <v-btn
            density="comfortable"
            icon="fab fa-github"
            size="x-large"
            class="text-white bg-[#00adee] text-xl mr-4"
          ></v-btn>
          <v-btn
            density="comfortable"
            icon="fab fa-linkedin-in"
            size="x-large"
            class="text-white bg-[#00adee] text-xl mr-4"
          ></v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="2" class="text-center">
        <v-img src="@/assets/images/usa.svg" height="75" class="mb-4"></v-img>
        <span class="font-oswald text-navy text-3xl">USA</span>
        <p class="my-4">
          21660 W Field Parkway, Deer Park, IL – 60010, USA.
        </p>
        <p>
          312 S, 4th St, Suite 700, Louisville, KY 40202
        </p>
      </v-col>
      <v-col cols="12" md="2" class="text-center">
        <v-img src="@/assets/images/dubai.svg" height="75" class="mb-4"></v-img>
        <span class="font-oswald text-navy text-3xl">Dubai</span>
        <p class="my-4">
          Dubai Silicon Oasis (DSO), Dubai, UAE.
        </p>
      </v-col>
      <v-col cols="12" md="2" class="text-center">
        <v-img src="@/assets/images/india.svg" height="75" class="mb-4"></v-img>
        <span class="font-oswald text-navy text-3xl">India</span>
        <p class="my-4">
          The Platina, Gachibowli, Hyderabad, India.
        </p>
      </v-col>
      <v-col cols="12" md="2" class="text-center">
        <v-img src="@/assets/images/email.svg" height="75" class="mb-4"></v-img>
        <span class="font-oswald text-navy text-3xl">E-mail Us</span>
        <p class="my-4">
          <a href="" class="no-underline text-modak-blue">sales@modak.com</a>
        </p>
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
@media (min-width: 1920px) {
  .v-container {
    max-width: 1200px;
  }
}

</style>