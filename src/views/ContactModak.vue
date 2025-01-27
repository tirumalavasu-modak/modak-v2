<template>
  <v-container class="mt-12">
    <v-row class="flex flex-row items-center my-8">
      <v-col cols="12" md="6" class="text-left px-16">
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/modak-map-image.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="text-center">
            <h3 class="text-navy">Drop us a line</h3>
          </v-card-title>
          <v-divider></v-divider>
          <div class="p-8">
            <v-alert v-if="showSuccessAlert" type="success" title="Success" text="'Email sent successfully'"
              closable="true"></v-alert>
            <v-alert v-if="showErrorAlert" type="error" title="Error" text="'Error in sending email'"
              closable="true"></v-alert>
            <v-form validate-on="submit lazy" ref="contactForm">
              <v-text-field v-model="firstName" label="First Name" variant="underlined" :rules="firstNameRules"
                :disabled="loading"></v-text-field>

              <v-text-field v-model="lastName" label="Last Name" variant="underlined" :rules="lastNameRules"
                :disabled="loading"></v-text-field>

              <v-text-field v-model="email" label="Your Email" variant="underlined" :rules="emailRules"
                :disabled="loading"></v-text-field>

              <v-text-field v-model="subject" label="Subject" variant="underlined" :rules="subjectRules"
                :disabled="loading"></v-text-field>

              <v-textarea v-model="message" label="Your Message" variant="underlined" :rules="messageRules"
                :disabled="loading"></v-textarea>

              <v-btn aria-label="Reset" type="reset" class="mt-2 mr-4 capitalize" rounded="xl" size="large" @click="reset"
                text="Reset"></v-btn>

              <v-btn aria-label="submit" type="button" color="secondary" class="mt-2 capitalize" rounded="xl" size="large"
                text="Send" @click="submit" :loading="loading"></v-btn>
            </v-form>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-16">
      <v-col cols="12" md="4">
        <h3 class="font-oswald text-navy">Get in touch</h3>
        <div class="flex flex-row justify-start">
          <v-btn density="comfortable" icon="fab fa-facebook-f" size="x-large" aria-label="facebook"
            class="text-white bg-[#00adee] text-xl mr-4"></v-btn>
          <v-btn density="comfortable" icon="fab fa-twitter" size="x-large" aria-label="twitter"
            class="text-white bg-[#00adee] text-xl mr-4"></v-btn>
          <v-btn density="comfortable" icon="fab fa-github" size="x-large" aria-label="github"
            class="text-white bg-[#00adee] text-xl mr-4"></v-btn>
          <v-btn density="comfortable" icon="fab fa-linkedin-in" size="x-large" aria-label="linkedin"
            class="text-white bg-[#00adee] text-xl mr-4"></v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="2" class="text-center">
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/usa.svg" height="75"
          class="mb-4"></v-img>
        <span class="font-oswald text-navy text-3xl">USA</span>
        <p class="my-4">
          21660 W Field Parkway, Deer Park, IL – 60010, USA.
        </p>
        <p>
          312 S, 4th St, Suite 700, Louisville, KY 40202
        </p>
      </v-col>
      <v-col cols="12" md="2" class="text-center">
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/dubai.svg" height="75"
          class="mb-4"></v-img>
        <span class="font-oswald text-navy text-3xl">Dubai</span>
        <p class="my-4">
          Dubai Silicon Oasis (DSO), Dubai, UAE.
        </p>
      </v-col>
      <v-col cols="12" md="2" class="text-center">
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/india.svg" height="75"
          class="mb-4"></v-img>
        <span class="font-oswald text-navy text-3xl">India</span>
        <p class="my-4">
          The Platina, Gachibowli, Hyderabad, India.
        </p>
      </v-col>
      <v-col cols="12" md="2" class="text-center">
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/email.svg" height="75"
          class="mb-4"></v-img>
        <span class="font-oswald text-navy text-3xl">E-mail Us</span>
        <p class="my-4">
          <a href="" class="no-underline text-modak-blue">sales@modak.com</a>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, reactive } from 'vue'
import axios from 'axios'
export default {
  setup() {

    const contactForm = ref(null)

    const showSuccessAlert = ref(false)
    const showErrorAlert = ref(false)

    const loading = ref(false)

    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')
    const subject = ref('')
    const message = ref('')

    const firstNameRules = reactive([
      v => !!v || 'First Name is required',
      v => (v && v.length <= 20) || 'First Name must be less than 20 characters',
    ])

    const lastNameRules = reactive([
      v => !!v || 'Last Name is required',
      v => (v && v.length <= 20) || 'Last Name must be less than 20 characters',
    ])

    const emailRules = reactive([
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ])

    const subjectRules = reactive([
      v => !!v || 'Subject is required',
      v => (v && v.length <= 100) || 'Subject must be less than 100 characters',
    ])

    const messageRules = reactive([
      v => !!v || 'Message is required',
      v => (v && v.length <= 150) || 'Message must be less than 150 characters',
    ])

    const reset = () => {
      contactForm.value.reset()
    }

    const submit = async () => {
      const { valid } = await contactForm.value.validate()
      if (!valid) return
      try {
        loading.value = true
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
        loading.value = false
        reset()
      } catch (error) {
        console.log(error)
        loading.value = false
        reset()
      }
    }
    return {
      firstName,
      lastName,
      email,
      subject,
      message,
      firstNameRules,
      lastNameRules,
      emailRules,
      subjectRules,
      messageRules,
      showSuccessAlert,
      showErrorAlert,
      loading,
      contactForm,
      reset,
      submit
    }
  }
}
</script>

<style lang="scss" scoped>@media (min-width: 1920px) {
  .v-container {
    max-width: 1200px;
  }
}</style>