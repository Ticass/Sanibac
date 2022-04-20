<template>
  <Header></Header>
  <div class="bg-emerald-gradient">
  <Hero punch1="Désodorise" punch2="Désinfecte" punch3="Néttoie"></Hero>
  <Comparison comparisonTitle1="Avant notre arrivée"  comparisonTitle2="Après notre passage">

  </Comparison>
  <Pricing>
  </Pricing>
  <Steps></Steps>
  </div>
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
import LanguageButton from './components/LanguageButton.vue'

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
}
</style>
