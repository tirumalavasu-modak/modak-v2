<template>
  <v-container class="grid grid-flow-row-dense grid-cols-3 grid-rows-2 gap-6">
    <div class="flex flex-row bg-[#F8F8F9] overflow-hidden p-4">
      <!-- Top Logo -->
      <img
        src="@/assets/images/icon-e1654503882660.png"
        alt="Logo"
        height="80"
      />
      <div class="ml-4">
        <img
          src="@/assets/images/bio-it-world-logo-thumb-removebg-preview-e1654507088846.png"
          alt="Avatar"
          height="64"
        />
        <div class="flex flex-col items-left">
          <span class="text-sm ml-1">Best of Show Award</span>
        </div>
      </div>
    </div>
    <div class="flex flex-row bg-[#F8F8F9] overflow-hidden p-4">
      <!-- Top Logo -->
      <img
        src="@/assets/images/Modak-Cloudera-Award-Badge-002-4.png"
        alt="Logo"
        height="80"
      />
      <div class="ml-4">
        <img src="@/assets/images/cloudera-1.png" alt="Avatar" height="48" />
        <div class="flex flex-col items-left">
          <span class="text-sm ml-1">Global ISV Partner of the Year, FY22</span>
        </div>
      </div>
    </div>
    <div class="flex flex-row bg-[#F8F8F9] overflow-hidden p-4">
      <!-- Top Logo -->
      <img src="@/assets/images/award_icon_3.png" alt="Logo" height="75" />
      <div class="ml-4">
        <img
          src="@/assets/images/strataconf_logo.svg"
          alt="Avatar"
          height="30"
        />
        <div class="flex flex-col items-left">
          <span class="text-sm ml-1">Data Platform built in record time</span>
        </div>
      </div>
    </div>
    <div class="flex flex-row bg-[#F8F8F9] overflow-hidden p-4">
      <!-- Top Logo -->
      <img src="@/assets/images/award_icon_1.png" alt="Logo" height="75" />
      <div class="ml-4">
        <img src="@/assets/images/gartner-logo.svg" alt="Avatar" height="25" />
        <div class="flex flex-col items-left">
          <span class="text-sm ml-1"
            >Featured in Market Guide for Data and Analytics Governance
            Platforms, 2021</span
          >
        </div>
      </div>
    </div>
    <div class="flex flex-row bg-[#F8F8F9] overflow-hidden p-4">
      <!-- Top Logo -->
      <img src="@/assets/images/award_icon_1.png" alt="Logo" height="75" />
      <div class="ml-4">
        <img src="@/assets/images/gartner-logo.svg" alt="Avatar" height="25" />
        <div class="flex flex-col items-left">
          <span class="text-sm ml-1"
            >Featured in Market Guide for Data Preparation Tools, 2020</span
          >
        </div>
      </div>
    </div>
    <div class="flex flex-row bg-[#F8F8F9] overflow-hidden p-4">
      <!-- Top Logo -->
      <img src="@/assets/images/award_icon_2.png" alt="Logo" height="75" />
      <div class="ml-4">
        <img src="@/assets/images/gartner-logo.svg" alt="Avatar" height="25" />
        <div class="flex flex-col items-left">
          <span class="text-sm ml-1"
            >Featured in Vendor Identification for AI & Data Analytics Service
            Providers, 2020</span
          >
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.v-container {
  max-width: 1200px;
}
.subheading {
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #4e4841;
}
</style>
