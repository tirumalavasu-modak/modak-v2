<template>
  <v-container class="mt-16">
    <div class="grid grid-cols-12 gap-6 mb-4">
      <div class="flex flex-col text-left px-4 col-span-2">
        <span class="text-[0.875rem] font-oswald tracking-tight uppercase"
          >Modak</span
        >
        <span
          class="text-[20px] font-oswald tracking-tight text-navy font-black"
          >Products</span
        >
        <ul class="list-none py-4">
          <li>
            <router-link to="/products/modak-nabu" class="no-underline text-black"
              >Modak Nabu™</router-link
            >
          </li>
          <li class="mt-2.5 mb-32"></li>
          <li>
            <a href="" class="no-underline text-black text-[0.8rem]"
              ><v-icon icon="mdi:mdi-email" class="mr-2 text-blue"></v-icon
              >sales@modak.com</a
            >
          </li>
        </ul>
      </div>
      <div class="flex flex-col text-left px-4 col-span-2">
        <span class="text-[0.875rem] font-oswald tracking-tight uppercase"
          >Modak</span
        >
        <span
          class="text-[20px] font-oswald tracking-tight text-navy font-black"
          >Solutions</span
        >
        <ul class="list-none py-4">
          <li>
            <router-link to="/solutions/data-operations" class="no-underline text-black"
              >Managed DataOps</router-link
            >
          </li>
          <li>
            <router-link to="/foo" class="no-underline text-black"
              >Governed Data Lake</router-link
            >
          </li>
          <li>
            <router-link to="/solutions/active-metadata-catalog" class="no-underline text-black"
              >Metaprogramming</router-link
            >
          </li>
          <li>
            <router-link to="/solutions/managed-services" class="no-underline text-black"
              >Managed Services</router-link
            >
          </li>
          <li>
            <router-link to="/solutions/data-migration" class="no-underline text-black"
              >Data Migration</router-link
            >
          </li>
          <li>
            <router-link to="/solutions/data-fingerprinting" class="no-underline text-black"
              >Data Fingerprinting</router-link
            >
          </li>
        </ul>
      </div>
      <div class="flex flex-col text-left px-4 col-span-2">
        <span class="text-[0.875rem] font-oswald tracking-tight uppercase"
          >Our</span
        >
        <span
          class="text-[20px] font-oswald tracking-tight text-navy font-black"
          >Company</span
        >
        <ul class="list-none py-4">
          <li>
            <router-link to="/careers/our-employees" class="no-underline text-black"
              >Team</router-link
            >
          </li>
          <li>
            <router-link to="/careers/work-culture" class="no-underline text-black"
              >Work Culture</router-link
            >
          </li>
          <li>
            <router-link to="/contact-us" class="no-underline text-black"
              >Contact Us</router-link
            >
          </li>
        </ul>
      </div>
      <div class="flex flex-col text-left px-4 col-span-3">
        <span class="text-[0.875rem] font-oswald tracking-tight uppercase"
          >Our Locations</span
        >
        <span
          class="text-[20px] font-oswald tracking-tight text-navy font-black"
          >Where to find us</span
        >
        <img src="@/assets/images/world_map.svg" height="180" width="279" alt="Where to find us" />
      </div>
      <div class="flex flex-col text-left col-span-3 pt-12">
        <div class="flex items-top mb-2">
          <div class="mr-2">
            <v-icon
              icon="mdi:mdi-map-marker"
              class="text-blue"
              size="small"
            ></v-icon>
          </div>
          <div class="">
            <p class="text-sm">
              <strong>USA</strong>: 21660 W Field Parkway, Deer Park, IL – 60010
            </p>
          </div>
        </div>
        <div class="flex items-top mb-2">
          <div class="mr-2">
            <v-icon
              icon="mdi:mdi-map-marker"
              class="text-blue"
              size="small"
            ></v-icon>
          </div>
          <div class="">
            <p class="text-sm">
              <strong>USA</strong>: 312 S, 4th St, Suite 700, Louisville, KY
              40202
            </p>
          </div>
        </div>
        <div class="flex items-top mb-2">
          <div class="mr-2">
            <v-icon
              icon="mdi:mdi-map-marker"
              class="text-blue"
              size="small"
            ></v-icon>
          </div>
          <div class="">
            <p class="text-sm">
              <strong>UAE</strong>: Dubai Silicon Oasis (DSO), 341041
            </p>
          </div>
        </div>
        <div class="flex items-top mb-2">
          <div class="mr-2">
            <v-icon
              icon="mdi:mdi-map-marker"
              class="text-blue"
              size="small"
            ></v-icon>
          </div>
          <div class="">
            <p class="text-sm">
              <strong>India</strong>: The Platina,Gachibowli, Hyderabad, 500032
            </p>
          </div>
        </div>
        <div class="flex flex-row justify-evenly">
          <v-btn
            aria-label="facebook"
            density="comfortable"
            icon="fab fa-facebook-f"
            class="text-white bg-[#00adee] text-xs"
            @click="openFacebook"
          ></v-btn>
          <v-btn
            aria-label="twitter"
            density="comfortable"
            icon="fab fa-twitter"
            class="text-white bg-[#00adee] text-xs"
            @click="openTwitter"
          ></v-btn>
          <v-btn
            aria-label="github"
            density="comfortable"
            icon="fab fa-github"
            class="text-white bg-[#00adee] text-xs"
            @click="openGithub"
          ></v-btn>
          <v-btn
            aria-label="linkedin"
            density="comfortable"
            icon="fab fa-linkedin-in"
            class="text-white bg-[#00adee] text-xs"
            @click="openLinkedin"
          ></v-btn>
        </div>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="my-4 flex flex-row items-center">
      <span class="text-sm">Ⓒ2022 Modak Analytics. An ISO 9001 & 27001 company. All Rights Reserved.</span>
      <v-spacer></v-spacer>
      <div class="flex flex-row">
        <v-btn aria-label="terms of use" variant="text hover:text-green-500" @click="$router.push('/terms-of-use')">TERMS OF USE</v-btn>
        <v-btn aria-label="privacy policy" variant="text hover:text-green-500" @click="$router.push('/privacy-policy')">PRIVACY POLICY</v-btn>
        <v-btn aria-label="disclaimer" variant="text hover:text-green-500" @click="$router.push('/disclaimer')">DISCLAIMER</v-btn>
        <v-btn aria-label="back to top" variant="text hover:text-green-500" prepend-icon="mdi:mdi-arrow-up" @click="gotoTop">BACK TO TOP</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  setup() {
    const gotoTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const openFacebook = () => {
      window.open('https://www.facebook.com/ModakData/', '_blank')
    };
    
    const openTwitter = () => {
      window.open('https://twitter.com/ModakAnalytics', '_blank')
    };

    const openGithub = () => {
      window.open('https://github.com/modakanalytics', '_blank')
    };

    const openLinkedin = () => {
      window.open('https://www.linkedin.com/company/modak-analytics/about/', '_blank')
    };

    return {
      gotoTop,
      openFacebook,
      openTwitter,
      openGithub,
      openLinkedin
    };
  },
};
</script>

<style lang="scss" scoped>
.v-container {
  max-width: 1200px;
}
</style>
