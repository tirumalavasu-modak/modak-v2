<template>
  <v-container class="mt-12">
    <v-row class="flex flex-row items-center my-8">
      <v-col cols="12" md="6" class="text-left px-16">
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/modak-map-image.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-alert v-if="showSuccessAlert" type="success" title="Success"
          text="'Email sent successfully'" closable="true"></v-alert>
        <v-alert v-if="showErrorAlert" type="error" title="Error"
          text="'Error in sending email'" closable="true"></v-alert>
        <h3 class="text-navy">Drop us a line</h3>
        <v-form validate-on="submit lazy">
          <v-text-field v-model="firstName" label="First Name" variant="underlined"></v-text-field>

          <v-text-field v-model="lastName" label="Last Name" variant="underlined"></v-text-field>

          <v-text-field v-model="email" label="Your Email" variant="underlined"></v-text-field>

          <v-text-field v-model="subject" label="Subject" variant="underlined"></v-text-field>

          <v-textarea v-model="message" label="Your Message" variant="underlined"></v-textarea>

          <v-btn aria-label="submit" type="button" color="secondary" class="mt-2 capitalize" rounded="xl" size="large" text="Send"
            @click="submit"></v-btn>
        </v-form>
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
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/usa.svg" height="75" class="mb-4"></v-img>
        <span class="font-oswald text-navy text-3xl">USA</span>
        <p class="my-4">
          21660 W Field Parkway, Deer Park, IL – 60010, USA.
        </p>
        <p>
          312 S, 4th St, Suite 700, Louisville, KY 40202
        </p>
      </v-col>
      <v-col cols="12" md="2" class="text-center">
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/dubai.svg" height="75" class="mb-4"></v-img>
        <span class="font-oswald text-navy text-3xl">Dubai</span>
        <p class="my-4">
          Dubai Silicon Oasis (DSO), Dubai, UAE.
        </p>
      </v-col>
      <v-col cols="12" md="2" class="text-center">
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/india.svg" height="75" class="mb-4"></v-img>
        <span class="font-oswald text-navy text-3xl">India</span>
        <p class="my-4">
          The Platina, Gachibowli, Hyderabad, India.
        </p>
      </v-col>
      <v-col cols="12" md="2" class="text-center">
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/email.svg" height="75" class="mb-4"></v-img>
        <span class="font-oswald text-navy text-3xl">E-mail Us</span>
        <p class="my-4">
          <a href="" class="no-underline text-modak-blue">sales@modak.com</a>
        </p>
      </v-col>
    </v-row>    
  </v-container>
</template>

<script>
import { ref } from 'vue'
// import Email from '@/plugins/smtp.js'
import axios from 'axios'
export default {
  setup() {
    const showSuccessAlert = ref(false)
    const showErrorAlert = ref(false)

    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')
    const subject = ref('')
    const message = ref('')

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
      subject,
      message,
      showSuccessAlert,
      showErrorAlert,
      submit
    }
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