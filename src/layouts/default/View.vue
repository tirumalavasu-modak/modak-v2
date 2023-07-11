<template>
  <v-main>
    <AppNavbar />
    <router-view />
    <app-footer />
  </v-main>
</template>

<script>
import AppNavbar from '@/components/general/AppNavbar.vue';
import AppFooter from '@/components/general/AppFooter.vue';
export default {
  components: {
    AppNavbar,
    AppFooter
  }
}
</script>
