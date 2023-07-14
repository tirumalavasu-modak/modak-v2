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
            v-model="fullName"
            label="Full Name"
            variant="underlined"
            :rules="fullNameRules"
            :disabled="loading"
          ></v-text-field>

          <v-text-field
            v-model="email"
            label="Work Email"
            variant="underlined"
            :rules="emailRules"
            :disabled="loading"
          ></v-text-field>

          <v-text-field
            v-model="company"
            label="Company"
            variant="underlined"
            :rules="companyRules"
            :disabled="loading"
          ></v-text-field>

          <v-btn
            aria-label="Submit"
            type="submit"
            color="secondary"
            class="mt-2 capitalize"
            rounded="xl"
            size="large"
            text="Submit"
            :loading="loading"
          ></v-btn>
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
    const dataSolution = ref(null)
    const showSuccessAlert = ref(false)
    const showErrorAlert = ref(false)

    const fullName = ref('')
    const email = ref('')
    const companyName = ref('')

    const loading = ref(false)

    const fullNameRules = reactive([
      value => {
        if (value) return true
        return 'You must enter your full name.'
      },
    ])

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
      dataSolution.value.reset()
    }

    const submit = async () => {
      const { valid } = await dataSolution.value.validate()
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
          window.open('https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/09/002.-Whitepaper-Delivering-Modern-Data-Solutions-Faster.pdf', '_blank');
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
      dataSolution,
      fullName,
      email,
      companyName,
      loading,
      fullNameRules,
      emailRules,
      companyRules,
      showSuccessAlert,
      showErrorAlert,
      submit
    }
  },
};
</script>

<style lang="scss" scoped>
.v-container {
  max-width: 1200px;
}
</style>