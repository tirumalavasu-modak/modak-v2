<template>
  <div class="max-w-3xl mx-auto my-16 m-pad">
    <div class="block flex justify-end">
      <a href="files/Modak FHIR Solution Accelerator March 2021.pdf" download=""
        ><v-btn color="primary" large class="mb-4" download=""
          >Download pdf</v-btn
        ></a
      >
    </div>
    <h3 class="mb-8">
      Accelerate your journey to meet the HL7 FHIR Interoperability guidelines
      set by the USA Centers for Medicare and Medicaid Services (CMS).
    </h3>
    <p class="border-l-4 border-blue-500 pl-4 my-8 italic">
      The Centers of Medicare and Medicaid Services (CMS) has published
      interoperability guidelines that will transform clinical and
      administrative data exchange among healthcare payers, providers, and
      patients. CMS specifically requires API’s (application programming
      interfaces) from
      <a
        href="https://www.cms.gov/Regulations-and-Guidance/Guidance/Interoperability/index"
        target="_blank"
        >Health Level 7 (HL7) Fast Healthcare Interoperability Resources (FHIR)
        v4</a>
    </p>    
    <p>
      The exchange of information has always been a challenge in healthcare
      industry but has been accomplished through standards-based exchanges such
      as HL7 Continuity of Care Document (CCD). However, the CCD is limited in
      the types of data exchanged, and patients who give consent would benefit
      by sharing a broader set of data with doctors, hospitals, and even pharma
      companies, if they so choose. The emergence of Fast Healthcare
      Interoperability Resource (FHIR) standards aims to transform the
      healthcare industry in terms of secure exchange of patient healthcare data
    </p>
    <p>
      The FHIR standard provides a programmatic way to share healthcare
      information, such as allergies, medication, immunization records,
      diagnostic reports and patient insurance and claims. The CMS
      interoperability rule requires the exchange of specific clinical data
      fields as per the U.S. Core Data for Interoperability (USCDI).
    </p>
    <p>
      However, the implementation of the FHIR standard by the US healthcare
      industry during the COVID-19 crises puts significant strain on stretched
      resources, other priorities, and the availability of technical resources
      to implement the standard.
    </p>
    <p>
      According to Gartner (a leading IT advisory firm), healthcare companies
      are struggling with the uphill task of data integration required for
      enabling FHIR compliant services to meet the guidelines and timelines set
      by the CMS.
    </p>
    <p>
      Modak’s extensive experience in the healthcare industry has enabled an
      alternative approach, one that is more scalable solution and secure and
      completely removes the need for storing data in FHIR compliant data model.
      Modak’s proprietary Fireshots software and the use of ‘thin’, reusable
      templates lifts the burden off IT teams of maintaining the FHIR data model
      and the associated FHIR server. Modak’s Fireshots™ solution not only
      addresses the immediate needs to comply with CMS guidelines, but also
      enables IT to review prioritization of broader use cases where
      interoperability is key, such as authorization, utilization management,
      risk adjustment, care coordination and advanced analytics.
    </p>
    <v-img src="img/backgrounds/FHIR_CURRENT.png"></v-img>
    <h4 class="my-4">Enabling FHIR with Modak Fireshots™</h4>
    <p>
      Modak Fireshots™ provides a metadata driven, low-code web services
      framework for building APIs. Modak Fireshots™ has been shown to develop
      and deploy complex APIs 5x faster than the traditional approaches. Modak’s
      metadata driven template approach enables customers to implement FHIR
      compliant APIs at an accelerated rate. The robust automated data pipelines
      ingest data quickly from various data stores, validate the data and Modak
      Fireshots™ converts data into the FHIR format on the fly, eliminating the
      need to store data in the FHIR data store. The RESTful APIs receive the
      FHIR compliant response and send it to the external providers.
    </p>
    <p>
      Modak Fireshots™ creates RESTful APIs rapidly with reusable templates. The
      template-based approach drastically reduces the time in building RESTful
      APIs by selecting the appropriate template and completing the necessary
      information.
    </p>
    <p>
      The deployment requires minimal template testing, thereby, drastically
      reducing development time and cost.
    </p>
    <p>
      Whilst with traditional approaches, using incumbent software tools, the
      development of FHIR compliant API’s could take months to develop and
      deploy. Modak Fireshots™ achieves the same in days. Modak Fireshots™ is
      completely scalable and can easily be deployed on cloud infrastructure via
      containers and for high availability with Kubernetes
    </p>
    <v-img
      src="img/backgrounds/FHIR_RECOMMENDED.png"></v-img>
  </div>
</template>

<script>
export default {
  name: "FHIR",
};
</script>

<style lang="scss" scoped>
</style>