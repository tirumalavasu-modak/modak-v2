// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
    meta: {
      preload: true, // Preload the chunk
      prefetch: true // Prefetch the chunk
    }
  },
  {
    path: '/request-demo',
    name: 'RequestDemo',
    component: () => import(/* webpackChunkName: "RequestDemo" */ '@/views/RequestDemo.vue'),
  },
  {
    path: '/modak-nabu-solution',
    name: 'ModakNabuSolution',
    component: () => import(/* webpackChunkName: "ModakNabuSolution" */ '@/views/ModakNabuSolution.vue'),
  },
  {
    path: '/solutions/data-migration',
    name: 'DataMigration',
    component: () => import(/* webpackChunkName: "DataMigration" */ '@/views/DataMigration.vue'),
  },
  {
    path: '/solutions/data-operations',
    name: 'DataOperations',
    component: () => import(/* webpackChunkName: "DataOperations" */ '@/views/DataOperations.vue'),
  },
  {
    path: '/solutions/data-fingerprinting',
    name: 'DataFingerprinting',
    component: () => import(/* webpackChunkName: "DataFingerprinting" */ '@/views/DataFingerprinting.vue'),
  },
  {
    path: '/solutions/managed-services',
    name: 'ManagedServices',
    component: () => import(/* webpackChunkName: "ManagedServices" */ '@/views/ManagedServices.vue'),
  },
  {
    path: '/solutions/smart-data-discovery',
    name: 'SmartDataDiscovery',
    component: () => import(/* webpackChunkName: "SmartDataDiscovery" */ '@/views/SmartDatadiscovery.vue'),
  },
  {
    path: '/solutions/automated-ingestion',
    name: 'AutomatedIngestion',
    component: () => import(/* webpackChunkName: "AutomatedIngestion" */ '@/views/AutomatedIngestion.vue'),
  },
  {
    path: '/solutions/active-metadata-catalog',
    name: 'ActiveMetadataCatalog',
    component: () => import(/* webpackChunkName: "ActiveMetadataCatalog" */ '@/views/ActiveMetadatacatalog.vue'),
  },
  {
    path: '/solutions/data-unification',
    name: 'DataUnification',
    component: () => import(/* webpackChunkName: "DataUnification" */ '@/views/DataUnification.vue'),
  },
  {
    path: '/solutions/anonymization',
    name: 'Anonymization',
    component: () => import(/* webpackChunkName: "Anonymization" */ '@/views/DataAnonymization.vue'),
  },
  {
    path: '/solutions/visualization',
    name: 'Visualization',
    component: () => import(/* webpackChunkName: "Visualization" */ '@/views/DataVisualization.vue'),
  },
  {
    path: '/products/modak-nabu',
    name: 'ModakNabu',
    component: () => import(/* webpackChunkName: "ModakNabu" */ '@/views/ModakNabu.vue'),
  },
  {
    path: '/products/fireshots',
    name: 'ModakFireshots',
    component: () => import(/* webpackChunkName: "ModakFireshots" */ '@/views/ModakFireshots.vue'),
  },
  {
    path: '/data-lab/bot-works',
    name: 'BotWorks',
    component: () => import(/* webpackChunkName: "BotWorks" */ '@/views/BotWorks.vue'),
  },
  {
    path: '/resources/data-ops',
    name: 'DataOps',
    component: () => import(/* webpackChunkName: "DataOps" */ '@/views/DataOps.vue'),
  },
  {
    path: '/resources/FHIR',
    name: 'FHIR',
    component: () => import(/* webpackChunkName: "DataFHIR" */ '@/views/DataFHIR.vue'),
  },
  {
    path: '/resources/genome-studies',
    name: 'GenomeStudies',
    component: () => import(/* webpackChunkName: "GenomeStudies" */ '@/views/GenomeStudies.vue'),
  },
  {
    path: '/resources/pharma-rd',
    name: 'PharmaResearchDevelopment',
    component: () => import(/* webpackChunkName: "PharmaResearch" */ '@/views/PharmaResearch.vue'),
  },
  {
    path: '/resources/modern-data-platform',
    name: 'ModernDataPlatform',
    component: () => import(/* webpackChunkName: "ModernDataPlatform" */ '@/views/ModerndataPlatform.vue'),
  },
  {
    path: '/resources/modern-data-solutions',
    name: 'ModernDataSolutions',
    component: () => import(/* webpackChunkName: "ModerndataSolutions" */ '@/views/ModerndataSolutions.vue'),
  },
  {
    path: '/resources/blog',
    name: 'ModakBlog',
    component: () => import(/* webpackChunkName: "ModakBlog" */ '@/views/ModakBlog.vue'),
  },
  {
    path: '/blog/from-raw-to-refined-incorporating-data-quality-rules-in-data-pipelines/',
    name: 'RawRefined',
    component: () => import(/* webpackChunkName: "RawRefined" */ '@/views/RawRefined.vue'),
  },
  {
    path: '/blog/what-is-a-data-lakehouse-and-why-does-it-matter',
    name: 'DataLake',
    component: () => import(/* webpackChunkName: "DataLake" */ '@/views/DataLake.vue'),
  },
  {
    path: '/blog/do-you-have-an-accurate-data-inventory',
    name: 'DataInventory',
    component: () => import(/* webpackChunkName: "DataInventory" */ '@/views/DataInventory.vue'),
  },
  {
    path: '/blog/building-scalable-data-fabric-to-comply-with-us-healthcare-interoperability-standards',
    name: 'DataFabric',
    component: () => import(/* webpackChunkName: "DataFabric" */ '@/views/DataFabric.vue'),
  },
  {
    path: '/blog/graph-analytics-the-future-in-data-science',
    name: 'GraphAnalytics',
    component: () => import(/* webpackChunkName: "GraphAnalytics" */ '@/views/GraphAnalytics.vue'),
  },
  {
    path: '/blog/top-6-data-engineering-best-practices-for-2023',
    name: 'DataEngineering',
    component: () => import(/* webpackChunkName: "DataEngineering" */ '@/views/DataEngineering.vue'),
  },
  {
    path: '/blog/modak-data-engineering-studio',
    name: 'DataEngineeringStudio',
    component: () => import(/* webpackChunkName: "DataEngineeringStudio" */ '@/views/DataEngineeringStudio.vue'),
  },
  {
    path: '/blog/is-your-data-strategy-ready-for-a-multi-hybrid-cloud-future/',
    name: 'HybridCloud',
    component: () => import(/* webpackChunkName: "HybridCloud" */ '@/views/HybridCloud.vue'),
  },
  {
    path: '/blog/seven-habits-of-a-highly-impactful-chief-data-officer-cdo',
    name: 'CDOHabits',
    component: () => import(/* webpackChunkName: "CDOHabits" */ '@/views/CDOHabits.vue'),
  },
  {
    path: '/blog/are-your-cloud-costs-bursting',
    name: 'CloudCosts',
    component: () => import(/* webpackChunkName: "CloudCosts" */ '@/views/CloudCosts.vue'),
  },
  {
    path: '/blog/building-an-interoperable-data-fabric-on-multi-cloud-at-a-top-5-healthcare-insurance-company',
    name: 'HealthcareInsurance',
    component: () => import(/* webpackChunkName: "HealthcareInsurance" */ '@/views/HealthcareInsurance.vue'),
  },
  {
    path: '/blog/combining-data-mesh-and-data-fabric-capabilities',
    name: 'DataMesh',
    component: () => import(/* webpackChunkName: "DataMesh" */ '@/views/DataMesh.vue'),
  },
  {
    path: '/blog/data-fabric-and-data-mesh',
    name: 'FabricMesh',
    component: () => import(/* webpackChunkName: "FabricMesh" */ '@/views/FabricMesh.vue'),
  },
  {
    path: '/blog/building-blocks-of-a-modern-data-platform',
    name: 'BuildingBlocks',
    component: () => import(/* webpackChunkName: "BuildingBlocks" */ '@/views/BuildingBlocks.vue'),
  },
  {
    path: '/resources/press-releases',
    name: 'PressReleases',
    component: () => import(/* webpackChunkName: "PressReleases" */ '@/views/PressReleases.vue'),
  },
  {
    path: '/press-releases/modak-recognized-in-2021-gartner-market-guide-for-data-and-analytics-governance-platforms-report/',
    name: 'ModakGartner',
    component: () => import(/* webpackChunkName: "ModakGartner" */ '@/views/press/ModakGartner.vue'),
  },
  {
    path: '/press-releases/modak-at-the-16th-annual-mit-cdoiq-symposium',
    name: 'ModakCDOIQ',
    component: () => import(/* webpackChunkName: "ModakCDOIQ" */ '@/views/press/ModakCDOIQ.vue'),
  },
  {
    path: '/press-releases/modak-and-neo4j-announce-partnership',
    name: 'ModakNeo4j',
    component: () => import(/* webpackChunkName: "ModakNeo4j" */ '@/views/press/ModakNeo4j.vue'),
  },
  {
    path: '/press-releases/modak-joins-starburst-partner-program',
    name: 'ModakStarburst',
    component: () => import(/* webpackChunkName: "ModakStarburst" */ '@/views/press/ModakStarburst.vue'),
  },
  {
    path: '/press-releases/modak-at-bio-it-world-conference-and-expo-2022',
    name: 'ModakBioIT',
    component: () => import(/* webpackChunkName: "ModakBioIT" */ '@/views/press/ModakBioIT.vue'),
  },
  {
    path: '/resources/work-from-home',
    name: 'WorkFromHome',
    component: () => import(/* webpackChunkName: "WorkFromHome" */ '@/views/WorkfromHome.vue'),
  },
  {
    path: '/resources/events',
    name: 'Events',
    component: () => import(/* webpackChunkName: "Events" */ '@/views/ModakEvents.vue'),
  },
  {
    path: '/events/modak-neo4j-webinar',
    name: 'ModakNeo4jWebinar',
    component: () => import(/* webpackChunkName: "ModakNeo4jWebinar" */ '@/views/ModakNeo4j.vue'),
  },
  {
    path: '/events/modak-scibite-webinar',
    name: 'ModakScibiteWebinar',
    component: () => import(/* webpackChunkName: "ModakScibiteWebinar" */ '@/views/ModakScibite.vue'),
  },
  {
    path: '/careers/work-culture',
    name: 'WorkCulture',
    component: () => import(/* webpackChunkName: "WorkCulture" */ '@/views/WorkCulture.vue'),
  },
  {
    path: '/careers/our-employees',
    name: 'OurEmployees',
    component: () => import(/* webpackChunkName: "OurEmployees" */ '@/views/OurEmployees.vue'),
  },
  {
    path: '/careers/life-at-modak',
    name: 'ModakLife',
    component: () => import(/* webpackChunkName: "ModakLife" */ '@/views/ModakLife.vue'),
  },
  {
    path: '/careers/current-openings',
    name: 'CurrentOpenings',
    component: () => import(/* webpackChunkName: "CurrentOpenings" */ '@/views/CurrentOpenings.vue'),
  },
  {
    path: '/careers/current-openings/data-engineer',
    name: 'DataEngineer',
    component: () => import(/* webpackChunkName: "DataEngineer" */ '@/views/DataEngineer.vue'),
  },
  {
    path: '/careers/current-openings/java-developer',
    name: 'JavaDeveloper',
    component: () => import(/* webpackChunkName: "JavaDeveloper" */ '@/views/JavaDeveloper.vue'),
  },
  {
    path: '/careers/current-openings/head-content-strategy',
    name: 'HeadContentStrategy',
    component: () => import(/* webpackChunkName: "HeadContentStrategy" */ '@/views/HeadContentStrategy.vue'),
  },
  {
    path: '/about-modak',
    name: 'AboutModak',
    component: () => import(/* webpackChunkName: "ModakLife" */ '@/views/AboutModak.vue'),
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: () => import(/* webpackChunkName: "ContactUs" */ '@/views/ContactModak.vue'),
  },
  {
    path: '/key-differentiator',
    name: 'KeyDifferentiator',
    component: () => import(/* webpackChunkName: "KeyDifferentiator" */ '@/views/KeyDifferentiator.vue'),
  },
  {
    path: '/leadership',
    name: 'ModakLeadership',
    component: () => import(/* webpackChunkName: "ModakLeadership" */ '@/views/ModakLeadership.vue'),
  },
  {
    path: '/terms-of-use',
    name: 'ModakTerms',
    component: () => import(/* webpackChunkName: "ModakTerms" */ '@/views/ModakTerms.vue'),
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import(/* webpackChunkName: "PrivacyPolicy" */ '@/views/PrivacyPolicy.vue'),
  },
  {
    path: '/disclaimer',
    name: 'ModakDisclaimer',
    component: () => import(/* webpackChunkName: "ModakDisclaimer" */ '@/views/ModakDisclaimer.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
})

export default router
