<template>
  <v-container class="mt-12">
    <v-row class="flex flex-row items-center">
      <v-btn icon="mdi mdi-arrow-left" variant="text" @click="$router.go(-1)"></v-btn>
      <h3 class="text-navy leading-tight">Data Engineer</h3>
    </v-row>
    <v-row>
      <div class="text-modak-blue text-lg font-medium ml-4 flex flex-row justify-start w-full"><span>Full Time</span><span
          class="mx-4">|</span><span>1+ Years</span><span class="mx-4">|</span><span>Louisville, KY.</span></div>
      <v-btn color="secondary" class="ml-4 mt-4 capitalize" rounded="xl" size="large" @click="dialogOpen = true">Apply
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
      <p>We are looking for a Data Engineer for our dynamic team. As part of the role, the selected candidate would be
        working on extensive data modeling, large scale data migration and working on data lakes and data fabrics. The
        candidate would be a critical part of the team that builds and automates data migration. We have extensive focus
        on cloud (MS-Azure, AWS, GCP etc.) and scalable solutions. The Data Engineer will be responsible for expanding and
        optimizing our data pipeline architecture, as well as optimizing the flow of data. We are looking for someone who
        enjoys coding and has a genuine interest in engaging with customer projects. Also, at the same time is interested
        in solving challenging problems, ranging from back-end data processing and machine learning to front end
        visualization and dashboarding.</p>
    </v-row>
    <v-row class="px-4 my-12">
      <h5 class="text-navy">Mandatory Skills</h5>
      <ul class="custom-list mt-4">
        <li>BS or MS degree in Computing/Data/Data Science related field from top universities in US, and a minimum up to
          1 year of work experience</li>
        <li>Understanding of Stream processing with knowledge on Kafka</li>
        <li>Knowledge of traditional programming and software development methodologies</li>
        <li>Knowledge or Experience with development languages i.e., Python, Perl, Java, MS.Net etc.</li>
        <li>Knowledge or Experience in building data pipelines to MS Azure or AWS or GCP</li>
        <li>Knowledge or Experience with SQL (RDBMS), NoSQL (MongoDB), and PostgreSQL</li>
        <li>Understanding of Data Flows, Data Architecture, ETL and processing of structured/unstructured data</li>
        <li>Demonstrated ability to work in a fast paced and changing environment with short deadlines, interruptions, and
          multiple tasks/projects occurring at once.</li>
      </ul>
    </v-row>
    <v-row class="px-4 my-12">
      <h5 class="text-navy">Preferred Skills:</h5>
      <ul class="custom-list mt-4">
        <li>Knowledge or Experience with Cloud (MS Azure / GCP / AWS) infrastructure deployments – application resource
          management in GCP environment(s).</li>
        <li>Experience with cloud provider data services.</li>
        <li>Knowledge with data pipeline applications (Kafka/Spark/Casandra)</li>
        <li>Have strong Data Science and/or software engineering knowledge or experience.</li>
        <li>Excellent interpersonal and documentation skills.</li>
      </ul>
    </v-row>

    <v-btn color="secondary" class="ml-4 capitalize" rounded="xl" size="large" @click="dialogOpen = true">Apply
      Now</v-btn>

    <v-dialog v-model="dialogOpen" persistent width="720">
      <v-card>
        <v-card-title class="flex flex-row items-center">
          <span class="text-navy font-oswald text-3xl font-bold">Application Form</span>
          <v-spacer></v-spacer>
          <v-btn @click="dialogOpen = false" icon="mdi mdi-close" variant="text"></v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container class="px-12">
            <v-form validate-on="submit lazy" class="mb-8">
              <v-text-field v-model="userName" label="Full Name" variant="underlined"></v-text-field>
              <v-text-field v-model="userName" label="Your Email" variant="underlined"></v-text-field>
              <v-textarea v-model="userName" label="About Yourself" variant="underlined"></v-textarea>
              <v-file-input show-size label="Upload File" variant="underlined"></v-file-input>              
            </v-form>
            <div class="flex flex-row justify-end">
              <v-btn type="submit" color="default" class="mt-2 mr-4 capitalize" rounded="xl" size="large" text="Reset"></v-btn>
              <v-btn type="submit" color="secondary" class="mt-2 capitalize" rounded="xl" size="large" text="Submit Application"></v-btn>
            </div>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {

    const dialogOpen = ref(false);

    const openDialog = () => {
      dialogOpen.value = true;
    }

    return {
      dialogOpen,
      openDialog
    }
  }
}
</script>

<style lang="scss" scoped>
.v-container {
  max-width: 1200px;
}
</style>