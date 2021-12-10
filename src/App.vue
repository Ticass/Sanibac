<template>
  <Header></Header>
  <Hero punch1="Désodorise" punch2="Désinfecte" punch3="Néttoie" subtext1="" subtext2="" subtext3=""></Hero>
  <Comparison comparisonTitle1="Avant notre arrivée"  comparisonTitle2="Après notre passage">

  </Comparison>
  <Pricing
  option1="LAVAGE UNIQUE"
   priceOption1="25$"
    Option1description1="1 bac de votre choix inclu"
     Option1description2="1 visite au mois de votre choix"
      Option1description3="15$ pour un bac additionel"
       option2="MENSUEL"
       priceOption2="25$"
        Option2description1="2 bacs de votre choix inclus"
         Option2description2="2 visites par mois"
          Option2description3="9$ pour un bac additionel"
           option3="BIMENSUEL"
            priceOption3="$30"
             Option3description1="2 bacs de votre choix inclu"
              Option3description2="2 visites par mois"
               Option3description3="9$ pour un bac additionel"
               option4="ANNUEL"
               priceOption4="160$"
               Option4description1="2 bacs de votre choix inclus"
               Option4description2="lavage de vos bacs chaque mois"
               Option4description3="40$ pour un bac additionel"
                   prix="Tarifs"
                    prixDescription=""
                    Signup="S'inscrire"
   saison="1er avril 2022 au 30 novembre 2022" slogan="Lavage de bacs à domicile"></Pricing>
  <Steps></Steps>
  <Form></Form>
  <Footer></Footer>
  
  
</template>

<script setup>
import Pricing from './components/Pricing.vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Steps from './components/Steps.vue'
import Footer from './components/Footer.vue'
import Form from './components/Form.vue'
import Comparison from './components/Comparison.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
