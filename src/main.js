import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createI18n } from 'vue-i18n'


// 1. Ready translated locale messages
// The structure of the locale message is the hierarchical object structure with each locale as the top property
const messages = {
    en: {
      message: {
        punch1: 'english',
        langue: 'French'
      }
    },
    fr: {
      message: {
        punch1: 'french',
        langue: 'Anglais'
      }
    }
  }
  
  // 2. Create i18n instance with options
  const i18n = createI18n({
    locale: 'fr', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages,
    legacy: true // set locale messages
    // If you need to specify other options, you can set other options
    // ...
  })
  

const app = createApp(App)
app.use(i18n)
app.mount('#app')
