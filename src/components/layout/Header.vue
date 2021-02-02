<template>
  <div class="">    
    <v-app-bar
      app
      color="white"
      light      
      height="60px"
      class="xl:hidden 2xl:hidden"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <img src="img/logos/modak.svg" alt="Modak Logo" class="h-8" />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list>
        <v-list-item href="/">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-group
          :value="false"
        >
          <template v-slot:activator>
            <v-list-item-title>Solutions</v-list-item-title>
          </template>
          <!-- <v-list-item
              v-for="([title, link], i) in solutions"
              :key="i"
              link
              :href="link"
            >
              <v-list-item-title v-text="title"></v-list-item-title>
            </v-list-item> -->
          <v-list-group
            no-action
            sub-group
            class="sub-group"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>MANAGED SERVICES</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="([title, link], i) in managedServicesList"
              :key="i"
              link
              :href="link"
            >
              <v-list-item-title v-text="title"></v-list-item-title>
            </v-list-item>
          </v-list-group>
          <v-list-group
            no-action
            sub-group
            class="sub-group"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>AUGMENTED DATA PREPARATION</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="([title, link], i) in augmentedList"
              :key="i"
              link
              :href="link"
            >
              <v-list-item-title v-text="title"></v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list-group>

        <v-list-group
          :value="false"
        >
          <template v-slot:activator>
            <v-list-item-title>Product</v-list-item-title>
          </template>

          <v-list-item
              v-for="([title, link], i) in products"
              :key="i"
              link
              :href="link"
            >
              <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group
          :value="false"
        >
          <template v-slot:activator>
            <v-list-item-title>Data Lab</v-list-item-title>
          </template>

          <v-list-item
              v-for="([title, link], i) in dataLabList"
              :key="i"
              link
              :href="link"
            >
              <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group
          :value="false"
        >
          <template v-slot:activator>
            <v-list-item-title>Resources</v-list-item-title>
          </template>

          <v-list-item
              v-for="([title, link], i) in resources"
              :key="i"
              link
              :href="link"
            >
              <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group
          :value="false"
        >
          <template v-slot:activator>
            <v-list-item-title>Careers</v-list-item-title>
          </template>

          <v-list-item
              v-for="([title, link], i) in careers"
              :key="i"
              link
              :href="link"
            >
              <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group
          :value="false"
        >
          <template v-slot:activator>
            <v-list-item-title>About us</v-list-item-title>
          </template>

          <v-list-item
              v-for="([title, link], i) in aboutList"
              :key="i"
              link
              :href="link"
            >
              <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>

      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="white"
      light      
      height="90px"
      class="block xs:hidden sm:hidden md:hidden lg:hidden"
    >
      <div class="flex flex-row max-w-7xl mx-auto items-center">
        <router-link to="/"><img src="img/logos/modak.svg" alt="Modak Logo" class="h-12" /></router-link>

        <v-spacer></v-spacer>
        
        <ul class="mega-menu flex flex-row justify-space-around">
          <li>
            <a href="" aria-haspopup="true">Solutions</a>
              <!-- <div class="popover-arrow"></div> -->
              <div class="dropdown-menu grid grid-cols-2 gap-16 p-8">
                <ul>
                  <li><h6 class="text-uppercase select-none">Managed Services</h6></li>
                  <li><router-link to="/data-migration" @click.native="$scrollToTop">Data Migration</router-link></li>                  
                  <li><router-link to="/managed-dataops" @click.native="$scrollToTop">Data Operations</router-link></li>
                  <li><router-link to="/governed-datalake" @click.native="$scrollToTop">Data Lake</router-link></li>   
                  <li><router-link to="/data-fabric" @click.native="$scrollToTop">Data Fabric</router-link></li>
                  <li><router-link to="/hadoop-managed-services" @click.native="$scrollToTop">Hadoop Managed Services</router-link></li>
                </ul>
                <ul>
                  <li><h6 class="text-uppercase select-none">Augmented Data Preparation</h6></li>
                  <li><router-link to="/smart-data-discovery" @click.native="$scrollToTop">Smart Data Discovery</router-link></li>
                  <li><router-link to="/automated-data-ingestion" @click.native="$scrollToTop">Automated Ingestion</router-link></li>
                  <li><router-link to="/active-metadata-catalog" @click.native="$scrollToTop">Active Metadata Catalog</router-link></li>
                  <li><router-link to="/data-fingerprinting" @click.native="$scrollToTop">Data Fingerprinting</router-link></li>
                  <li><router-link to="/data-unification" @click.native="$scrollToTop">Data Unification</router-link></li> 
                  <li><router-link to="/data-anonymization" @click.native="$scrollToTop">Anonymization</router-link></li>
                  <li><router-link to="/data-visualisation" @click.native="$scrollToTop">Visualization</router-link></li>                 
                </ul>
              </div>
          </li>
          <li>
            <a href="">Product</a>
              <div class="dropdown-menu grid grid-cols-2 gap-16 p-8">
                <ul class="">
                  <li><router-link to="/nabu" @click.native="$scrollToTop">Modak Nabu&trade;</router-link></li>
                </ul>
              </div>
          </li>
          <li>
            <a href="">Data Lab</a>
              <div class="dropdown-menu grid grid-cols-2 gap-16 p-8">
                <ul class="">
                  <li><router-link to="/Botworks" @click.native="$scrollToTop">BOTWorks</router-link></li>
                </ul>
              </div>
          </li>
          <li>
            <a href="">Resources</a>
              <div class="dropdown-menu grid grid-cols-2 gap-16 p-8">
                <ul class="">
                  <li><router-link to="/FHIR" @click.native="$scrollToTop">FHIR</router-link></li>
                  <li><router-link to="/DataOps" @click.native="$scrollToTop">DataOps</router-link></li>
                  <li><router-link to="/genome-studies" @click.native="$scrollToTop">Genome Studies</router-link></li>
                  <li><router-link to="/pharma-research" @click.native="$scrollToTop">Pharma R&D</router-link></li>
                  <li><router-link to="/pharma-firms" @click.native="$scrollToTop">Pharma Firms</router-link></li>
                  <li><router-link to="/work-from-home" @click.native="$scrollToTop">Work From Home</router-link></li>
                </ul>
              </div>
          </li>
          <li>
            <a href="">Careers</a>
              <div class="dropdown-menu grid grid-cols-2 gap-16 p-8">
                <ul class="">
                  <li><router-link to="/work-culture" @click.native="$scrollToTop">Work Culture</router-link></li>
                  <li><router-link to="/life-modak" @click.native="$scrollToTop">Life@Modak</router-link></li>
                  <li><router-link to="/employee-views" @click.native="$scrollToTop">Employee views</router-link></li>
                  <li><router-link to="/current-openings" @click.native="$scrollToTop">Current openings</router-link></li>
                </ul>
              </div>
          </li>
          <li>
            <a href="">About us</a>
              <div class="dropdown-menu grid grid-cols-2 gap-16 p-8">
                <ul class="">
                  <li><router-link to="/about" @click.native="$scrollToTop">About Modak</router-link></li>
                  <li><router-link to="/key-differentiator" @click.native="$scrollToTop">Key Differentiator</router-link></li>
                  <li><router-link to="/global-presence" @click.native="$scrollToTop">Global Presence</router-link></li>
                  <li><router-link to="/contact-us" @click.native="$scrollToTop">Contact us</router-link></li>
                </ul>
              </div>
          </li>
        </ul>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
// import VerticalContent from '@/components/content/Vertical'
// import DefaultContent from '@/components/content/Default'
// import MobileContent from '@/components/content/MobileContent'
/* eslint-disable no-console */
  export default {
    name: 'Header',
    components: {
      // VerticalContent,
      // DefaultContent,
      // MobileContent
    },
    data () {
      return {
        handler: 'click',
        drawer: false,
        group: null,
        // menu: [
        //   { title: 'Solutions', dropdown: 'products', content: VerticalContent, element: 'span' },
        //   { title: 'Company', dropdown: 'company', content: DefaultContent, listeners: { mouseover: this.onMouseOver } },
        //   { title: 'Products', dropdown: 'products', content: VerticalContent, element: 'span' },
        // ],
        items: [
          { title: 'Managed DataOps' },
          { title: '' },
          { title: 'Click Me' },
          { title: 'Click Me 2' },
        ],
        solutions: [          
        ],
        managedServicesList: [
          ['Data Migration', 'data-migration'],
          ['Data Operations', 'managed-dataops'],
          ['Data Lake', 'governed-datalake'],
          ['Data Fabric', 'data-fabric'],
          ['Hadoop Managed Services', 'hadoop-managed-services']
        ],
        augmentedList: [
          ['Smart Data Discovery', 'smart-data-discovery'],
          ['Automated Ingestion', 'automated-data-ingestion'],
          ['Active Metadata Catalog', 'active-metadata-catalog'],
          ['Data Fingerprinting', 'data-fingerprinting'],
          ['Data Unification', 'data-unification'],          
          ['Anonymization', 'data-anonymization'],
          ['Visualization', 'data-visualisation']
        ],
        products: [
          ['Modak Nabu™', 'nabu']
        ],
        dataLabList: [
          ['BOTWorks', 'Botworks']
        ],
        resources: [
          ['FHIR', 'FHIR'],
          ['DATAOPS', 'DataOps'],
          ['Genome Studies', 'genome-studies'],
          ['Pharma R&D', 'pharma-research'],
          ['Pharma Firms', 'pharma-firms'],
          ['Work From Home', 'work-from-home']
        ],
        careers: [
          ['Work Culture', 'work-culture'],
          ['Life@Modak', 'life-modak'],
          ['Employee views', 'employee-views'],
          ['Current openings', 'current-openings']
        ],
        aboutList: [
          ['About Modak', 'about'],
          ['Key Differentiator', 'key-differentiator'],
          ['Global Presence', 'global-presence'],
          ['Contact Us', 'contact-us'],
        ]
      }
    },
    methods: {
      onClick () {
        this.handler = this.handler === 'hover' ? 'click' : 'hover'
        console.log(`Change Handler to ${this.handler}`)
      },
      onMouseOver (evt) {
        console.log('mouse over', evt)
      },
      onOpenDropdown (el) {
        console.log('open dropdown', el)
      },
      onCloseDropdown (el) {
        console.log('close dropdown', el)
      }
    }
  }
</script>

<style lang="scss" scoped>
.v-application ul, .v-application ol {
  padding-left: 0 !important;
}
header {
  box-shadow: 0 2px 30px -1px rgba(85,85,85,.08), 0 4px 30px 0 rgba(85,85,85,.06), 0 1px 30px 0 rgba(85,85,85,.03) !important;
}
</style>