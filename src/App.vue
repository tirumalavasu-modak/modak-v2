<template>
  <v-app class="flex flex-col justify-between">
    <AppNavbar />
    <router-view class="pt-24 mb-auto"/>
    <app-footer />
  </v-app>
</template>

<script>
import AppNavbar from '@/components/general/AppNavbar.vue';
import AppFooter from '@/components/general/AppFooter.vue';
export default {
  components: {
    AppNavbar,
    AppFooter
  },
  setup() {
    return {
      
    };
  },
};
</script>
