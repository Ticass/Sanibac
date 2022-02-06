<template>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center justify-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-100 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="../assets/bac.jpeg">
        </div>
        <h2 class="subpixel-antialiased title-font text-3xl font-sans font-bold text-gray-900 mt-6 mb-3">{{ $t("message.comparison1")}}</h2>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-90 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="../assets/bac2.jpeg">
        </div>
        <h2 class="subpixel-antialiased title-font text-3xl font-sans font-bold text-gray-900 mt-6 mb-3">{{ $t("message.comparison2")}}</h2>
      </div>
    </div>
  </div>
</section>
</template>


<script setup>

defineProps({
        comparisonTitle1: String,
        comparisonTitle2: String,
});

</script>
