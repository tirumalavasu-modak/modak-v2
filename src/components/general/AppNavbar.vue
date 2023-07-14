<template>
  <v-app-bar  @scroll="handleScroll" :color="showAffix ? 'white' : 'transparent'" :class="showAffix ? 'drop-shadow-md' : ''" class="header p-4" elevation="0">
    <!-- <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon> -->
    <v-toolbar-title>
      <v-img
        src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/modak_logo.svg"
        alt="Modak Logo"
        height="36"
        class="float-left cursor-pointer"
        @click="$router.push('/')"
      ></v-img>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn
          aria-label="Solutions"
          color="secondary"
          class="text-base font-semibold text-capitalize"
          v-bind="props"
        >
          Solutions
        </v-btn>
      </template>
      <v-list class="grid grid-cols-2">
        <v-list>
          <v-list-item>
            <v-list-item-title class="uppercase text-sm"
              >Managed Services</v-list-item-title
            >
          </v-list-item>
          <v-list-item v-for="(item, index) in managedServices" :key="index">
            <v-list-item-title>
              <router-link
                class="cursor-pointer text-sm text-secondary font-medium no-underline hover:text-black"
                :to="item.path"
                >{{ item.title }}</router-link
              >
            </v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list>
          <v-list-item>
            <v-list-item-title class="uppercase text-sm"
              >Augmented Data Preparation</v-list-item-title
            >
          </v-list-item>
          <v-list-item v-for="(item, index) in augmentedData" :key="index">
            <v-list-item-title>
              <router-link
                class="cursor-pointer text-sm text-secondary font-medium no-underline hover:text-black"
                :to="item.path"
                >{{ item.title }}</router-link
              >
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-list>
    </v-menu>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn
          aria-label="Product"
          color="secondary"
          class="text-base font-semibold text-capitalize"
          v-bind="props"
        >
          Product
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in products" :key="index">
          <v-list-item-title>
            <router-link
              class="cursor-pointer text-sm text-secondary font-medium no-underline hover:text-black"
              :to="item.path"
              >{{ item.title }}</router-link
            >
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn
          aria-label="Data Lab"
          color="secondary"
          class="text-base font-semibold text-capitalize"
          v-bind="props"
        >
          Data Lab
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in dataLabMenu" :key="index">
          <v-list-item-title>
            <router-link
              class="cursor-pointer text-sm text-secondary font-medium no-underline hover:text-black"
              :to="item.path"
              >{{ item.title }}</router-link
            >
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn
          aria-label="Resources"
          color="secondary"
          class="text-base font-semibold text-capitalize"
          v-bind="props"
        >
          Resources
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in resourcesMenu" :key="index">
          <v-list-item-title>
            <router-link
              class="cursor-pointer text-sm text-secondary font-medium no-underline hover:text-black"
              :to="item.path"
              >{{ item.title }}</router-link
            >
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn
          aria-label="Careers"
          color="secondary"
          class="text-base font-semibold text-capitalize"
          v-bind="props"
        >
          Careers
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in careersMenu" :key="index">
          <v-list-item-title>
            <router-link
              class="cursor-pointer text-sm text-secondary font-medium no-underline hover:text-black"
              :to="item.path"
              >{{ item.title }}</router-link
            >
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn
          aria-label="About Us"
          color="secondary"
          class="text-base font-semibold text-capitalize"
          v-bind="props"
        >
          About Us
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in aboutMenu" :key="index">
          <v-list-item-title>
            <router-link
              class="cursor-pointer text-sm text-secondary font-medium no-underline hover:text-black"
              :to="item.path"
              >{{ item.title }}</router-link
            >
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <!-- <v-btn aria-label="search" icon="mdi:mdi-magnify"></v-btn> -->
  </v-app-bar>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
export default {
  setup() {

    const showAffix = ref(false);

    const managedServices = ref([
      { title: "Data Migration", path: "/solutions/data-migration" },
      { title: "Data Operations", path: "/solutions/data-operations" },
      { title: "Data Fingerprinting", path: "/solutions/data-fingerprinting" },
      { title: "Managed Services", path: "/solutions/managed-services" },
    ]);

    const augmentedData = ref([
      { title: "Smart Data Discovery", path: "/solutions/smart-data-discovery" },
      { title: "Automated Ingestion", path: "/solutions/automated-ingestion" },
      { title: "Aactive Metadata Catalog", path: "/solutions/active-metadata-catalog" },
      { title: "Data Unification", path: "/solutions/data-unification" },
      { title: "Anonymization", path: "/solutions/anonymization" },
      { title: "Visualization", path: "/solutions/visualization" },
    ]);

    const products = ref([{ title: "Modak Nabu™", path: "/products/modak-nabu" }, { title: "Fireshots™", path: "/products/fireshots" }]);

    const dataLabMenu = ref([{ title: "Bot Works", path: "/data-lab/bot-works" }]);

    const resourcesMenu = ref([
      { title: "Data Ops", path: "/resources/data-ops" },
      { title: "FHIR", path: "/resources/FHIR" },
      { title: "Genome Studies", path: "/resources/genome-studies" },
      { title: "Pharma R&D", path: "/resources/pharma-rd" },
      { title: "Modern Data Platform", path: "/resources/modern-data-platform" },
      { title: "Delivering Modern Data Solutions Faster", path: "/resources/modern-data-solutions" },
      { title: "Blog", path: "/resources/blog" },
      { title: "Press Releases", path: "/resources/press-releases" },
      { title: "Work From Home", path: "/resources/work-from-home" },
      { title: "Events", path: "/resources/events" },
    ]);

    const careersMenu = ref([
      { title: "Work Culture", path: "/careers/work-culture" },
      { title: "Our Employees", path: "/careers/our-employees" },
      { title: "Life@Modak", path: "/careers/life-at-modak" },
      { title: "Current Openings", path: "/careers/current-openings" },
    ]);

    const aboutMenu = ref([
      { title: "About Modak", path: "/about-modak" },
      { title: "Contact", path: "/contact-us" },
      { title: "Key Differentiator", path: "/key-differentiator" },
      { title: "Leadership", path: "/leadership" },
    ]);

    const toggleDrawer = () => {};

    const handleScroll = () => {
      showAffix.value = window.scrollY > 180;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    })

    return {
      managedServices,
      augmentedData,
      products,
      dataLabMenu,
      resourcesMenu,
      careersMenu,
      aboutMenu,
      showAffix,
      toggleDrawer,
      handleScroll
    };
  },
};
</script>

<style lang="scss" scoped></style>
