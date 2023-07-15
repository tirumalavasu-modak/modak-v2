<template>
  <v-app class="flex flex-col justify-between">
    <v-container class="loader" v-if="isLoading">
      <app-spinner />
    </v-container>
    <transition name="fade" v-else>
      <v-main>
        <AppNavbar />
        <router-view class="pt-24 min-h-full" />
        <app-footer class="bg-footer" />
      </v-main>
    </transition>
  </v-app>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { defineAsyncComponent } from 'vue'
const AppFooter = defineAsyncComponent(() =>
  import('@/components/general/AppFooter.vue')
)
import AppNavbar from '@/components/general/AppNavbar.vue';
import AppSpinner from '@/components/general/AppSpinner.vue';
// import AppFooter from '@/components/general/AppFooter.vue';
export default {
  components: {
    AppNavbar,
    AppFooter,
    AppSpinner
  },
  setup() {

    const isLoading = ref(true);

    const handleLoad = () => {
      isLoading.value = false;
    };

    onMounted(() => {
      window.addEventListener('load', handleLoad);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('load', handleLoad);
    });

    return {
      isLoading,
    };

  },
};
</script>

<style lang="scss" scoped>
.v-main {
  padding: 0 !important;
}

.bg-footer {
  background-image: url('https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/bg_6_footer.png');
  background-position: left bottom;
  background-size: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.loader {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
</style>
