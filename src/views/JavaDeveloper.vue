<template>
  <v-container class="mt-12">
    <v-row class="flex flex-row items-center">
      <v-btn aria-label="Go Back" icon="mdi mdi-arrow-left" variant="text" @click="$router.go(-1)"></v-btn>
      <h3 class="text-navy leading-tight">Java Developer</h3>
    </v-row>
    <v-row>
      <div class="text-modak-blue text-lg font-medium ml-4 flex flex-row justify-start w-full"><span>Full Time</span><span
          class="mx-4">|</span><span>6-8 Years</span><span class="mx-4">|</span><span>Hyderabad.</span></div>
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
      <p>3 to 5 years of experience in designing and developing high-performance software applications/solutions using Java – J2EE technologies with high coding standards and good practices. Will be developing console, web, and enterprise applications for our clients. Collaborate with stakeholders across design, product management, and engineering teams. Develop and document core services APIs. Will be participating regularly in client meetings with project stakeholders while developing the solutions.</p>
    </v-row>
    <v-row class="px-4 my-12">
      <h5 class="text-navy">Technical Skills:</h5>
      <ul class="custom-list mt-4">
        <li>3-5 years of hands-on experience in Java – J2EE Development. Developing high-performance and multi-threaded applications.</li>
        <li>Strong coding discipline, analytical and problem-solving skills. Passion for technology and self-starter.</li>
        <li>AWS/Azure Experience highly regarded.</li>
        <li>Strong Knowledge and experience in Container Services such as Docker, Kubernetes, OpenShift, and Kibana will be an added advantage.</li>
        <li>Effective in analytical, problem-solving skills and thereby designing and building a quality product.</li>
      </ul>
    </v-row>
    <v-row class="px-4 my-12">
      <h5 class="text-navy w-full">Desired candidate profile:</h5>
      <ul class="custom-list mt-4">
        <li>Collaboration between Front End, Back End, and data engineers.</li>
        <li>Should be able to code using best coding practices and design patterns.</li>
        <li>Solid understanding of core AWS concepts (EC2, RDS, etc.)</li>
        <li>Clear knowledge of the pros and cons of OO and Functional programming.</li>
        <li>Effective in analytical, problem-solving skills and thereby designing and building a quality product.</li>
        <li>Knowledge of software design and development.</li>
        <li>Familiarity with Agile and Scrum Methodologies.</li>
        <li>Excellent verbal written communication skills.</li>
      </ul>
    </v-row>

    <v-btn color="secondary" class="ml-4 capitalize" rounded="xl" size="large" @click="dialogOpen = true">Apply
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