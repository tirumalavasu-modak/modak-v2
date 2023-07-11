/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import '../src/styles/tailwindcss.css'
import '../src/styles/main.scss'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
