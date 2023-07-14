<template>
  <v-container>
    <v-row class="flex flex-row items-center my-8 min-h-[20rem]">
      <v-col cols="12" md="6">
        <h4 class="font-normal"><span class="text-modak-blue leading-tight">Modak Nabu™ is a cloud-neutral, built-from-the-ground-up modern data platform that enables enterprises to automate data ingestion, curation, and consumption processes at a petabyte-scale.</span></h4>
      </v-col>
      <v-col cols="12" md="6">
        <h4 class="mb-8">Download Modak Nabu™ Solution Overview.</h4>
        <v-form ref="nabuSolution" validate-on="submit lazy" @submit.prevent="submit">

          <v-text-field v-model="email" label="Your Email" variant="underlined" :rules="emailRules" :disabled="loading"></v-text-field>

          <v-text-field v-model="companyName" label="Company Name" variant="underlined" :rules="companyRules" :disabled="loading"></v-text-field>

          <v-btn aria-label="Download Now" type="submit" color="secondary" class="mt-2 capitalize" rounded="xl" size="large" text="Download" :loading="loading"></v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, reactive } from 'vue'
import axios from 'axios'
export default {
  setup() {

    const nabuSolution = ref(null)
    const showSuccessAlert = ref(false)
    const showErrorAlert = ref(false)

    const email = ref('')
    const companyName = ref('')

    const loading = ref(false)

    const emailRules = reactive([
      value => {
        if (value) return true
        return 'You must enter a email.'
      },
    ])

    const companyRules = reactive([
      value => {
        if (value) return true
        return 'You must enter a company name.'
      },
    ])

    const reset = () => {
      nabuSolution.value.reset()
    }

    const submit = async () => {
      const { valid } = await nabuSolution.value.validate()
      if (!valid) return
      try {
        loading.value = true
        const response = await axios.post('https://email-api-hqvb.onrender.com/sendEmail', {
          to: email.value,
          subject: `Thanks for contacting us`,
          text: `Thanks for contacting us. We will get back to you soon.`
        });

        if (response.status === 200) {
          // alert('Email sent successfully');
          showSuccessAlert.value = true;
          window.open('https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/Modak-FHIR-Solution-Accelerator-March-2021.pdf', '_blank');
        } else {
          // alert('Failed to send email');
          showErrorAlert.value = true;
        }
        loading.value = false
        reset()
      } catch (error) {
        console.log(error)
        showErrorAlert.value = true;
        loading.value = false
        reset()
      }
    }

    return {
      nabuSolution,
      email,
      companyName,
      loading,
      emailRules,
      companyRules,
      showSuccessAlert,
      showErrorAlert,
      submit
    }
  }
}
</script>

<style lang="scss" scoped>
.v-container {
  max-width: 1200px;
}
</style>