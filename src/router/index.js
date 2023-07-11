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
    path: '/resources/press-releases',
    name: 'PressReleases',
    component: () => import(/* webpackChunkName: "PressReleases" */ '@/views/PressReleases.vue'),
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
})

export default router
