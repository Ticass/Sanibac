<template>
  <Header></Header>
  <Hero></Hero>
  <Pricing
  description1="bronze" description2="argent" description3="or" saison="1er avril 2020 au 30 novembre 2022" slogan="Lavage de bacs à domicile"></Pricing>
  <Steps></Steps>
  <Form></Form>
  <Footer></Footer>
  
  
</template>

<script setup>
import Pricing from './components/Pricing.vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Gallery from './components/Gallery.vue'
import Steps from './components/Steps.vue'
import Footer from './components/Footer.vue'
import Form from './components/Form.vue'

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
