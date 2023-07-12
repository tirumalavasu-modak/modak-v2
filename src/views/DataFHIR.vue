<template>
  <v-container class="mt-12">
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/Accelerate-your-Journey.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6" class="flex flex-col">
        <v-btn color="secondary" size="large" rounded="xl" class="self-end w-48"
          ><span class="capitalize font-bold" @click="openPdf">Download PDF</span></v-btn
        >
        <h3 class="leading-snug">
          <span class="text-modak-blue"
            >Accelerate your journey to meet the HL7 FHIR Interoperability
            guidelines</span
          ><br />
          <span class="text-navy"
            >set by the USA Centers for Medicare and Medicaid Services
            (CMS).</span
          >
        </h3>
      </v-col>
    </v-row>
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <p>The Centers for Medicare and Medicaid Services (CMS) has published interoperability guidelines that will transform clinical and administrative data exchange among healthcare payers, providers, and patients. CMS specifically requires API’s (application programming interfaces) from Health Level 7 (HL7) Fast Healthcare Interoperability Resources (FHIR) v4.</p><br/>
        <p>The exchange of information has always been a challenge in the healthcare industry but has been accomplished through standards-based exchanges such as HL7 Continuity of Care Document (CCD). However, the CCD is limited in the types of data exchanged, and patients who give consent would benefit by sharing a broader set of data with doctors, hospitals, and even pharma companies if they so choose. The emergence of Fast Healthcare Interoperability Resource (FHIR) standards aims to transform the healthcare industry in terms of the secure exchange of patient healthcare data.</p><br/>
        <p>The FHIR standard provides a programmatic way to share healthcare information, such as allergies, medication, immunization records, diagnostic reports, and patient insurance and claims. The CMS interoperability rule requires the exchange of specific clinical data fields as per the U.S. Core Data for Interoperability (USCDI).</p><br/>
        <p>However, the implementation of the FHIR standard by the US healthcare industry during the COVID-19 crisis puts significant strain on stretched resources, other priorities, and the availability of technical resources to implement the standard.</p><br/>
        <p>According to Gartner (a leading IT advisory firm), healthcare companies are struggling with the uphill task of data integration required to enable FHIR compliant services to meet the guidelines and timelines set by the CMS.</p>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/FHIR-2.svg"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <h3 class="w-full text-center text-navy">Conventional FHIR Implementation</h3>
      <v-img src="@/assets/images/Conventional-FHIR-2.png"></v-img>
    </v-row>
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <v-img src="@/assets/images/Enabling-FHIR.svg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <p>Modak’s extensive experience in the healthcare industry has enabled an alternative approach, one that is a more scalable, secure and completely removes the need for storing data in FHIR compliant data model. Modak’s proprietary Fireshots software and the use of ‘thin’, reusable templates lift the burden off IT teams of maintaining the FHIR data model and the associated FHIR server. Modak’s Fireshots™ solution not only addresses the immediate need to comply with CMS guidelines but also enables IT to review prioritization of broader use cases where interoperability is key, such as authorization, utilization management, risk adjustment, care coordination, and advanced analytics.</p><br/>
        <h3 class="leading-snug"><span class="text-modak-blue">Enabling FHIR with </span><br/><span class="text-navy">Modak Fireshots™</span></h3>
        <p>Modak Fireshots™ is a metadata-driven, low-code web services framework for building APIs. Modak Fireshots™ has been shown to develop and deploy complex APIs 5x faster than the traditional approaches. Modak’s metadata-driven template approach enables customers to implement FHIR compliant APIs at an accelerated rate. The robust automated data pipelines ingest data quickly from various data stores, validate the data and Modak Fireshots™ converts data into the FHIR format on the fly, eliminating the need to store data in the FHIR data store. The RESTful APIs receive the FHIR compliant response and send it to the external providers.</p>
        <p>Modak Fireshots™ creates RESTful APIs rapidly with reusable templates. The template-based approach drastically reduces the time spent on building RESTful APIs by selecting the appropriate template and completing the necessary information.</p><br/>
        <p>The deployment requires minimal template testing, thereby, drastically reducing development time and cost.</p><br/>
        <p>Whilst with traditional approaches, using incumbent software tools, the development of FHIR compliant APIs could take months to develop and deploy. Modak Fireshots™ achieves the same in days. Modak Fireshots™ is completely scalable and can easily be deployed on cloud infrastructure via containers and for high availability with Kubernetes.</p>
      </v-col>
    </v-row>
    <v-row>
      <h3 class="w-full text-center text-navy">Recommended FHIR Implementation</h3>
      <v-img src="@/assets/images/Recommended-FHIR.svg"></v-img>
    </v-row>
  </v-container>
</template>

<script>
export default {
  setup() {

    const openPdf = () => {
      window.open('https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/Modak-FHIR-Solution-Accelerator-March-2021.pdf', '_blank');
    }

    return {
      openPdf
    };
  },
};
</script>

<style lang="scss" scoped>
.v-container {
  max-width: 1200px;
}
</style>
