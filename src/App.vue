<template>
  <v-app>
    <AppNavbar />
    <router-view class="pt-24 grow"/>
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
