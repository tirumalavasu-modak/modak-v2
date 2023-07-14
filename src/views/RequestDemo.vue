<template>
  <v-container>
    <v-row class="flex flex-row items-center my-8">
      <v-col cols="12" md="6">
        <h1><span class="text-modak-blue leading-tight">I'm ready to grow<br /> my business. </span><br /><span
            class="text-navy leading-tight">Schedule my live<br /> demo.</span></h1>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="p-8">
        <v-alert v-if="showSuccessAlert" type="success" title="Success" text="'Email sent successfully'"
          closable="true"></v-alert>
        <v-alert v-if="showErrorAlert" type="error" title="Error" text="'Error in sending email'"
          closable="true"></v-alert>
        <v-form validate-on="submit lazy" ref="requestDemo">
          <v-text-field v-model="firstName" label="First Name" variant="underlined"
            :rules="firstNameRules" :disabled="loading"></v-text-field>

          <v-text-field v-model="lastName" label="Last Name" variant="underlined" :rules="lastNameRules" :disabled="loading"></v-text-field>

          <v-text-field v-model="email" label="Your Email" variant="underlined" :rules="emailRules" :disabled="loading"></v-text-field>

          <v-text-field v-model="companyName" label="Company Name" variant="underlined"
            :rules="companyRules" :disabled="loading"></v-text-field>

          <v-text-field v-model="mobile" label="Phone Number" variant="underlined" :rules="mobileRules" :disabled="loading"></v-text-field>

          <v-text-field v-model="designation" label="Designation" variant="underlined"
            :rules="designationRules" :disabled="loading"></v-text-field>

          <v-btn aria-label="Reset" type="reset" class="mt-2 mr-4 capitalize" rounded="xl" size="large"
            @click="reset" text="Reset"></v-btn>

          <v-btn aria-label="Submit" color="secondary" class="mt-2 capitalize" rounded="xl" size="large" text="Submit"
            :loading="loading" @click="submit"></v-btn>
        </v-form>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, reactive } from 'vue'
import axios from 'axios'
import { load } from 'webfontloader'
export default {
  setup() {

    const loading = ref(false)

    const showSuccessAlert = ref(false)
    const showErrorAlert = ref(false)
    const requestDemo = ref(null)

    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')
    const companyName = ref('')
    const mobile = ref('')
    const designation = ref('')

    const firstNameRules = reactive([
      value => {
        if (value) return true
        return 'You must enter a first name.'
      },
    ])

    const lastNameRules = reactive([
      value => {
        if (value) return true
        return 'You must enter a last name.'
      },
    ])

    const emailRules = reactive([
      value => {
        if (value) return true
        return 'You must enter a email.'
      },
    ])

    const mobileRules = reactive([
      value => {
        if (value) return true
        return 'You must enter a mobile.'
      },
    ])

    const companyRules = reactive([
      value => {
        if (value) return true
        return 'You must enter a company name.'
      },
    ])

    const designationRules = reactive([
      value => {
        if (value) return true
        return 'You must enter your designation.'
      },
    ])

    const reset = () => {
      requestDemo.value.reset()
    }

    const submit = async () => {
      const { valid } = await requestDemo.value.validate()
      if (!valid) return
      try {
        loading.value = true
        const response = await axios.post('https://email-api-hqvb.onrender.com/sendEmail', {
          to: email.value,
          subject: `Thanks for contacting us ${firstName.value} ${lastName.value}`,
          text: `And this is the body ${firstName.value} ${lastName.value}`
        });

        if (response.status === 200) {
          // alert('Email sent successfully');
          showSuccessAlert.value = true;
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
      }
    }

    return {
      loading,
      firstName,
      lastName,
      email,
      companyName,
      mobile,
      designation,
      firstNameRules,
      lastNameRules,
      emailRules,
      mobileRules,
      companyRules,
      designationRules,
      requestDemo,
      showSuccessAlert,
      showErrorAlert,
      reset,
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