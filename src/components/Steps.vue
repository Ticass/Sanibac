<template>
   <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap" id="info">
    <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">1</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
          <img class="w-12 h-12" src="../assets/icons/icon_bin.png">
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">{{ $t("message.Step1Title1")}}</h2>
          <p class="leading-relaxed"><b>{{ $t("message.Step1Sub1")}}</b>; {{ $t("message.Step1Sub2")}} <b>{{ $t("message.Step1Sub3")}}</b></p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">2</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
          <img class="w-12 h-12" src="../assets/icons/icon_Cleanhands.png">
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">{{ $t("message.Step2Title1")}}</h2>
          <p class="leading-relaxed">{{ $t("message.Step2Sub1")}}</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">3</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
          <img class="w-12 h-12" src="../assets/icons/icon_cleaning.png">
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">{{ $t("message.Step3Title1")}}</h2>
          <p class="leading-relaxed">{{ $t("message.Step3Sub1")}} <b>{{ $t("message.Step3Sub2")}}</b> {{ $t("message.Step3Sub3")}} <b>{{ $t("message.Step3Sub4")}}</b> {{ $t("message.Step3Sub5")}}</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">4</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
         <img class="w-12 h-12" src="../assets/icons/icon_signup.png">
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">{{ $t("message.Step4Title1")}}</h2>
          <p class="leading-relaxed">{{ $t("message.Step4Sub1")}} <b>{{ $t("message.Step4Sub2")}}</b> {{ $t("message.Step4Sub3")}}</p>
        </div>
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