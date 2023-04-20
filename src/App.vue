<template>
  <div>
    <div><Header/></div>
      <Hero/>
      <Banner/>
      <HowWeWork/>
      <SecondBanner/>
      <Pricing/>
    <Form/>
    <Footer/>
  </div>
</template>

<script setup>
import Pricing from './components/Pricing.vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Steps from './components/Steps.vue'
import Footer from './components/Footer.vue'
import Form from './components/Form.vue'
import Comparison from './components/Comparison.vue'
import Carousel from './components/Carousel.vue'
import Banner from './components/Banner.vue'
import LanguageButton from './components/LanguageButton.vue'
import HowWeWork from './components/HowWeWork.vue'
import SecondBanner from './components/SecondBanner.vue'
import Zones from './components/Zones.vue'

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
