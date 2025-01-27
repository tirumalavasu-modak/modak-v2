<template>
  <v-container class="mt-12">
    <v-row class="flex flex-row items-center">
      <v-btn aria-label="Go Back" icon="mdi mdi-arrow-left" variant="text" @click="$router.go(-1)"></v-btn>
      <h3 class="text-navy leading-tight">Head - Content Strategy</h3>
    </v-row>
    <v-row>
      <div class="text-modak-blue text-lg font-medium ml-4 flex flex-row justify-start w-full"><span>Full Time</span><span
          class="mx-4">|</span><span>12+ Years</span><span class="mx-4">|</span><span>Hyderabad.</span></div>
      <v-btn aria-label="Apply Now" color="secondary" class="ml-4 mt-4 capitalize" rounded="xl" size="large" @click="dialogOpen = true">Apply
        Now</v-btn>
    </v-row>
    <v-row class="px-4 my-12">
      <h5 class="text-navy">About Modak</h5>
      <p>Modak is a fast-growing boutique data engineering company that enables enterprises manage and utilize their data
        landscape effectively. Modak uses machine learning (ML) techniques to transform how analytics content is prepared,
        consumed, and shared. Modak Nabu™ is an enterprise product that has been covered in Gartner’s “Market Guide to
        Data preparation 2020”. Modak Nabu™ is also recognized with the “Best in the Show” award in the Bio-IT World
        Conference & Expo 2022.</p>
      <p>Suggest you to go through our <a class="no-underline text-modak-blue" href="/about-modak">About Us page</a></p>
    </v-row>
    <v-row class="px-4 my-12">
      <h5 class="text-navy">Job Description</h5>
      <p>We are looking at hiring a Head – Content Strategy, with rich experience in creating marketing content and having deep rooted understanding in technology, especially Data Engineering, Data Analytics and Cloud Technology. Also, someone who can create long term marketing content strategies for our business and product teams. The ideal candidate should also have experience in managing website, social media campaigns, SEO/SEM, content marketing etc. The person should be proactive in day-to-day marketing activities, as well as long-term strategy, thriving with tight deadlines and changing needs with necessary leadership qualities.</p>
    </v-row>
    <v-row class="px-4 my-12">
      <h5 class="text-navy">Skills Required</h5>
      <ul class="custom-list mt-4">
        <li>12+ years of experience in a marketing role, hands on in content development, production and ownership across various channels, format types i.e., written, video, interactive and social assets</li>
        <li>Experience in preparing marketing material for deep tech software products, cloud technology and SAAS/PAAS</li>
        <li>Bring company messaging and positioning to life by developing and delivering high-impact narrative and delivering a variety of marketing assets, including website pages, white papers, presentations, sales enablement material, product demo videos, etc. to support every stage of the customer lifecycle</li>
        <li>Create sales enablement content including presentations, seminars/webinars, emailers, demos, videos, case studies, infographics, whitepapers, and other sales collaterals</li>
        <li>Partner with sales and the rest of the marketing to drive focused alignment between sales strategy and marketing campaigns, for a consistent and compelling customer experience</li>
        <li>Drive creative thinking, blend effectiveness and creativity to create best-in-class content that incites engagement and grows our audiences. Act as a creative champion for new, interesting content ideas</li>
        <li>Identify opportunities to improve the quality, usability, and productivity of the existing content/information available across various platforms.</li>
        <li>Providing end-to-end support for Inside Sales, Branding &, Digital Marketing & Automation, Investor Relations, Partnerships & Alliances, Analyst & Advisory Relations, Account-Based Marketing, Marketing Operations & Analytics Function.</li>
        <li>Working to establish the brand strongly on reputed external avenues, as also in the minds of clients, prospects, analysts, & advisors utilizing diverse levers such as White Papers, Case Studies, Website, & other collaterals.</li>
        <li>Continuously revamping website content to reflect the new positioning & offerings of the company</li>
        <li>Identifying and implementing strategies to increase visibility and generate leads from social media, helping achieve growth.</li>
        <li>The selected candidate will also drive business development efforts and thought leadership in the content management and digital marketing space.</li>
        <li>Experience in effectively communicating technical information in a relevant, accessible way.</li>
        <li>Experience of working in a high-growth Product/SaaS/PaaS company is strongly preferred.</li>
      </ul>
    </v-row>

    <v-btn aria-label="Apply Now" color="secondary" class="ml-4 capitalize" rounded="xl" size="large" @click="dialogOpen = true">Apply
      Now</v-btn>

      <v-dialog v-model="dialogOpen" persistent width="720">
      <v-card>
        <v-card-title class="flex flex-row items-center">
          <span class="text-navy font-oswald text-3xl font-bold">Application Form</span>
          <v-spacer></v-spacer>
          <v-btn aria-label="close" @click="dialogOpen = false" icon="mdi mdi-close" variant="text"></v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container class="px-12">
            <v-alert v-if="showSuccessAlert" type="success" title="Success" text="'Email sent successfully'"
              closable="true"></v-alert>
            <v-alert v-if="showErrorAlert" type="error" title="Error" text="'Error in sending email'"
              closable="true"></v-alert>
            <v-form validate-on="submit lazy" class="mb-8" ref="applyForm">
              <v-text-field v-model="fullName" label="Full Name" variant="underlined" :rules="fullNameRules"
                :disabled="loading"></v-text-field>
              <v-text-field v-model="email" label="Your Email" variant="underlined" :rules="emailRules"
                :disabled="loading"></v-text-field>
              <v-textarea v-model="about" label="About Yourself" variant="underlined" :rules="aboutRules"
                :disabled="loading"></v-textarea>
              <v-file-input show-size v-model="resume" label="Upload File" variant="underlined" :rules="resumeRules"
                :disabled="loading"></v-file-input>
              <div class="flex flex-row justify-end">
                <v-btn aria-label="reset" color="default" class="mt-2 mr-4 capitalize" rounded="xl"
                  size="large" text="Reset" @click="reset"></v-btn>
                <v-btn aria-label="submit" color="secondary" class="mt-2 capitalize" rounded="xl"
                  size="large" text="Submit Application" @click="submit" :loading="loading"></v-btn>
              </div>
            </v-form>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
export default {
  setup() {

    const dialogOpen = ref(false);

    const applyForm = ref(null);
    const showSuccessAlert = ref(false)
    const showErrorAlert = ref(false)

    const loading = ref(false);

    const fullName = ref('');
    const email = ref('');
    const about = ref('');
    const resume = ref('');

    const fullNameRules = [
      v => !!v || 'Name is required',
      v => (v && v.length <= 30) || 'Name must be less than 30 characters',
    ]

    const emailRules = [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ]

    const aboutRules = [
      v => !!v || 'About is required',
      v => (v && v.length <= 150) || 'About must be less than 150 characters',
    ]

    const resumeRules = [
      v => !!v || 'Resume is required',
    ]


    const openDialog = () => {
      dialogOpen.value = true;
    }

    const reset = () => {
      applyForm.value.reset();
    }

    const submit = async () => {
      const { valid } = await applyForm.value.validate()
      if (!valid) return
      try {
        loading.value = true
        const response = await axios.post('https://email-api-hqvb.onrender.com/sendEmail', {
          to: email.value,
          subject: `Thanks for contacting us ${fullName.value}`,
          text: `Thanks for contacting us ${fullName.value} we will get back to you soon.`
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
      applyForm,
      dialogOpen,
      loading,
      fullName,
      email,
      about,
      resume,
      fullNameRules,
      emailRules,
      aboutRules,
      resumeRules,
      openDialog,
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