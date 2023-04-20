<template>
  <div class="pricing-cards-wrapper">
    <div class="pricing-cards">
      <div v-for="index in 3" :key="index" class="pricing-card">
        <PricingCard/>
      </div>
    </div>
  </div>
</template>

<script setup>
import PricingCard from './PricingCard.vue';
</script>

<style scoped>
.pricing-cards-wrapper {
  background-color: #95BF74;
  padding: 20px;
}

.pricing-cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.pricing-card {
  margin-right: 20px;
  margin-bottom: 20px;
  width: calc((100% - 40px)/3);
}

.pricing-card:last-child {
  margin-right: 0;
}
</style>
