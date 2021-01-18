import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'

import '@vuikit/theme'

import VueStripeMenu from 'vue-stripe-menu'

import './styles/index.scss'

import 'vue-stripe-menu/dist/vue-stripe-menu.css'

Vue.use(VueStripeMenu)

Vue.use(Vuikit)
Vue.use(VuikitIcons)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
