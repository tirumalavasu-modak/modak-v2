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
      // console.log(this.$vuetify.breakpoint.lgAndDown)    
      console.log(this.$route.name)  
      if (this.$vuetify.breakpoint.width <= 640) {
        if (this.$route.name === 'Metaprogramming') {
          return this.$vuetify.breakpoint.height/1.5
        }
        if (this.$route.name === 'LifeAtModak' || this.$route.name === 'CurrentOpenings') {
          return this.$vuetify.breakpoint.height/4
        }
        if (this.$route.name === 'GovernedDatalake' || this.$route.name === 'HadoopManagedServices') {
          return this.$vuetify.breakpoint.height/2.5
        }
        if (this.$route.name === 'Fingerprinting' || 
        this.$route.name === 'DataUnification' || 
        this.$route.name === 'Anonymization' || 
        this.$route.name === 'DataVisualisation' ||
        this.$route.name === 'DataMigration' || 
        this.$route.name === 'ManagedDataops' ||
        this.$route.name === 'DataFabric' ||
        this.$route.name === 'KeyDifferentiator'
        ) {
          return this.$vuetify.breakpoint.height/3
        }        
        return this.$vuetify.breakpoint.height/2
      } else if (this.$vuetify.breakpoint.width <= 1366) {
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