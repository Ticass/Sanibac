<template>

  <div class="background-tint bg-clean-house py-60 flex gap-10 lg:gap-40 justify-center items-center">
    <div class="bg-green-100 rounded-full p-2 pr-4 flex justify-center">
      <p class="p-2 mr- select-none">
        <img alt="clorox" src="../assets/spray.png" width="45" height="45"/>
      </p>
      <div class="flex items-center">
        <p class="text-2xl text-shadow inline">
          {{ $t("message.punch1")}}
        </p>
      </div>
    </div>

    <div class="bg-green-100 rounded-full p-2 pr-4 flex justify-center">
      <p class="p-2 mr- select-none">
        <img alt="clorox" src="../assets/cleaner.png" width="45" height="45"/>
      </p>
      <div class="flex items-center">
        <p class="text-2xl text-shadow inline">
           {{ $t("message.punch2")}}
        </p>
      </div>
    </div>

    <div class="bg-green-100 rounded-full p-2 pr-4 flex justify-center">
      <p class="p-2 mr- select-none">
        <img alt="clorox" src="../assets/wipe.png" width="45" height="45"/>
      </p>
      <div class="flex items-center">
        <p class="text-2xl text-shadow inline">
           {{ $t("message.punch3")}}
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.background-tint {
  background-color: rgba(0, 0, 0, .5) !important; /* Tint color */
  background-blend-mode: multiply !important;
  flex-wrap: wrap;
}
</style>


<script setup>
import { defineProps } from 'vue'

defineProps({
    punch1: String, 
    punch2: String,
    punch3: String,
    subtext1: String,
    subtext2: String,
    subtext3: String
})
</script>
