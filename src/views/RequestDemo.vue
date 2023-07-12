<template>
  <v-container>
    <v-row class="flex flex-row items-center my-8">
      <v-col cols="12" md="6">
        <h1><span class="text-modak-blue leading-tight">I'm ready to grow<br/> my business. </span><br/><span class="text-navy leading-tight">Schedule my live<br/> demo.</span></h1>
      </v-col>
      <v-col cols="12" md="6">
        <v-alert v-if="showSuccessAlert" type="success" title="Success"
          text="'Email sent successfully'" closable="true"></v-alert>
        <v-alert v-if="showErrorAlert" type="error" title="Error"
          text="'Error in sending email'" closable="true"></v-alert>
        <v-form validate-on="submit lazy">
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
            aria-label="Reset"
            type="reset"
            class="mt-2 mr-4 capitalize"
            rounded="xl"
            size="large"
            text="Reset"
          ></v-btn>

          <v-btn
            aria-label="Submit"
            color="secondary"
            class="mt-2 capitalize"
            rounded="xl"
            size="large"
            text="Submit"
            @click="submit"
          ></v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
export default {
  setup () {

    const showSuccessAlert = ref(false)
    const showErrorAlert = ref(false)

    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')
    const companyName = ref('')
    const mobile = ref('')
    const designation = ref('')

    const submit = async () => {
      try {
        const response = await axios.post('https://email-api-hqvb.onrender.com/sendEmail', {
          to: email.value,
          subject: `Thanks for contacting us ${firstName.value} ${lastName.value}`,
          text: `And this is the body ${firstName.value} ${lastName.value} ${subject.value} ${message.value}`
        });

        if (response.status === 200) {
          // alert('Email sent successfully');
          showSuccessAlert.value = true;
        } else {
          // alert('Failed to send email');
          showErrorAlert.value = true;
        }
      } catch (error) {
        console.log(error)
      }
    }

    return {
      firstName,
      lastName,
      email,
      companyName,
      mobile,
      designation,
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