/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import '../src/styles/tailwindcss.css'
import '../src/styles/main.scss'

import ImageKit from "imagekitio-vue"

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

app.use(ImageKit, {
  urlEndpoint: "https://ik.imagekit.io/aetklacrz",
  publicKey: 'public_VnJr03zXUHXL9PlL4pPN3DpGOv8='
})

registerPlugins(app)

app.mount('#app')
