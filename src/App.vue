<template>
  <v-app class="flex flex-col justify-between">
    <v-progress-circular v-if="isLoading" indeterminate size="70" color="primary" />
    <v-main v-else>
      <AppNavbar />
      <transition>
        <router-view class="pt-24"/>
      </transition>
      <app-footer />
    </v-main>
  </v-app>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import AppNavbar from '@/components/general/AppNavbar.vue';
import AppFooter from '@/components/general/AppFooter.vue';
export default {
  components: {
    AppNavbar,
    AppFooter
  },
  setup() {
    const isLoading = ref(true);

    const onPageLoad = () => {
      isLoading.value = false;
    }

    onMounted(() => {
      window.addEventListener('load', onPageLoad);
    });

    onUnmounted(() => {
      window.removeEventListener('load', onPageLoad);
    });

    return { isLoading };
  },
};
</script>

<style lang="scss" scoped>
.v-main {
  padding: 0 !important;
}
</style>
