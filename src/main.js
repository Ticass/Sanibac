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
        //PRICES
        priceOption1: '32$',
        priceOption2: '27$',
        priceOption3: '34$',
        //PRICES END
        langue: 'Français',
        punch1: 'Deodorizes',
        punch2: 'Disinfects',
        punch3: 'Cleans',
        comparison1: 'Before our arrival',
        comparison2: 'After our departure',
        price: 'Packages',
        priceDescription: 'April 1st 2022 to November 30th 2022',
        option1: 'SINGLE WASH',
        option1Description1: '1 bin of your choice included',
        option1Description2: '1 visit per month',
        option1Description3: '22$ for an additional bin',
        option2: 'MONTHLY',
        option2Description1: '2 bins of your choice included',
        option2Description2: '2 visits per month',
        option2Description3: '8$ for an additional bin',
        option3: 'BIMONTHLY',
        option3Description1: '2 bins of your choice included',
        option3Description2: '2 visits per month',
        option3Description3: '9$ for an additional bin',
        Step1Title1: 'Your bins are dirty ? We\'re here to help',
        Step1Sub1: 'Whether it\'s a trash bin, a recycling bin or a compost bin',
        Step1Sub2: 'It can get dirty. After only a few days, your bins can start to smell and can become a major germ spreader',
        Step1Sub3: 'This is why we\'re here to help !',
        Step2Title1: 'Leave them in your driveway, we take care of the rest !',
        Step2Sub1: 'Once your request has been approved, you will receive an email confirmation containing the details of your first cleaning.',
        Step3Title1: 'Disinfects, Cleans, Deodorizes',
        Step3Sub1: 'Once cleaned, your bins will be',
        Step3Sub2: 'clean, disinfented and odorless !',
        Step3Sub3: 'Indeed, our products kill most',
        Step3Sub4: 'bacterias, odors and tenacious stains',
        Step3Sub5: 'which can be found all over your bins',
        Step4Title1: 'Sign Up for the 2022 season!',
        Step4Sub1: 'Sign up, without any obligations, for the ',
        Step4Sub2: '2022 season',
        Step4Sub3: 'and we will contact you in March to confirm your request',
        FormTitle: 'Sign up',
        FormTitle2: 'let us know which package you have interest in by signing up for the 2022 season without obligations. You will receive an email confirmation in March',
        FormSub1: 'Email',
        FormSub2: 'Phone',
        FormSub3: 'Package and Address',
        FormSub4: 'these offers are only available for the towns of',
        FormSub5: 'Saint-Jean-Sur-Richelieu, Iberville et L\'acadie.',
        Header1: 'Packages',
        Header2: 'Information',
        Header3: 'Contact',
        SignUp: 'Sign Up',


      }
    },
    fr: {
      message: {
        langue: 'English',
        punch1: 'Désodorise',
        punch2: 'Désinfecte',
        punch3: 'Nettoie',
        comparison1: 'Avant notre arrivée',
        comparison2: 'Après notre passage',
        price: 'Forfaits',
        priceDescription: '1er avril 2022 au 30 novembre 2022',
        option1: 'LAVAGE UNIQUE',
        priceOption1: '32$',
        option1Description1: '1 bac de votre choix inclu',
        option1Description2: '1 visite au mois de votre choix',
        option1Description3: '22$ pour un bac additionel',
        option2: 'À-CHAQUE MOIS',
        priceOption2: '27$',
        option2Description1: '2 bacs de votre choix inclus',
        option2Description2: '2 visites par mois',
        option2Description3: '8$ pour un bac additionel',
        option3: 'À-CHAQUE 2 MOIS',
        priceOption3: '34$',
        option3Description1: '2 bacs de votre choix inclu',
        option3Description2: '2 visites un mois sur deux',
        option3Description3: '9$ pour un bac additionel',
        Step1Title1: 'Vos bacs ne sont pas propres ? Nous sommes là !',
        Step1Sub1: 'Recyclage, poubelle ou composte',
        Step1Sub2: 'Des bacs ça se salit. Apres seulement quelques jours, vos bacs peuvent acquérir de la saleté, des odeurs désagréables et une panoplie de bactéries.',
        Step1Sub3: 'C\'est pourquoi nous sommes là !',
        Step2Title1: 'Laissez-les dans votre entrée, et nous nous occupons du reste !',
        Step2Sub1: 'Une fois votre demande confirmée, nous vous enverrons un courriel pour vous informer de votre premier lavage. En fonction de la fréquence de nos visites, vous recevrez une notification pour vous aviser de notre passage. Une fois lavés, nous replacerons vos bacs sur le bord de votre maison.',
        Step3Title1: 'Désinfecte, nettoie et désodorise',
        Step3Sub1: 'Une fois lavés, vos bacs seront',
        Step3Sub2: 'propres, désinfectés et sans odeur !',
        Step3Sub3: 'Nos produits éliminent les',
        Step3Sub4: 'bactéries, les odeurs et les taches tenaces',
        Step3Sub5: 'qui se retrouvent à l\'intérieur de votre bac.',
        Step4Title1: 'Inscrivez-vous pour la saison 2022 !',
        Step4Sub1: 'inscrivez-vous, sans obligation, pour la',
        Step4Sub2: 'saison 2022',
        Step4Sub3: 'et nous vous contacterons au cours du mois de mars pour confirmer votre demande',
        FormTitle: 'Inscription',
        FormTitle2: 'Informez-nous du forfait qui vous interesse et inscrivez-vous sans obligation, pour la saison 2022. Nous vous enverrons une confirmation par courriel au cours du mois de mars',
        FormSub1: 'Courriel',
        FormSub2: 'Téléphone',
        FormSub3: 'Forfait et Adresse',
        FormSub4: 'Ces offres ne sont disponibles que pour les résidents des villes de',
        FormSub5: 'Saint-Jean-sur-Richelieu, Iberville et L\'acadie.',
        Header1: 'Forfaits',
        Header2: 'Plus D\'infos',
        Header3: 'Contact',
        SignUp: 'S\'inscrire'
        
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
