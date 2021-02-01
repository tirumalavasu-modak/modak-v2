<template>
  <div class="banner">
    <v-img :src="img" alt="" cover :height='bgHeight' color="#45516b" flat="" tile="" gradient="to left, rgba(41, 128, 185, 0.5), rgba(41, 128, 185, 0.8)">
      <div class="max-w-7xl mx-auto flex flex-col justify-start self-center pt-16">
        <h4 class="text-white align-middle">{{title}}</h4>
        <p class="text-lg font-normal text-white" v-html="subTitle"></p>
      </div>
    </v-img>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: ['img', 'title', 'subTitle'],
  computed: {
    bgHeight: function () {
      if (this.$vuetify.breakpoint.width <= 1366) {
        return this.$vuetify.breakpoint.height/3
      }
      return this.$vuetify.breakpoint.height/4
    }
  },
};
</script>

<style lang="scss">
.banner .v-responsive__content {
  // background-color: rgba(0, 173, 238, 0.8);
  // background-color: rgb(96, 125, 139, 0.9);
  // background-color: rgb(25, 118, 210, 0.7);
  // background-color: rgba(0, 112, 243, 0.8);
}
.banner p {
  margin: 0 !important;
}
</style>