<template>
  <nav class="flex items-center justify-between flex-wrap p-4 pl-10 pr-20 shadow-lg bg-custom">
    <div id="icon" class="flex items-center flex-shrink-0 text-white">
      <a class="hover:bg-gray-100 ease-in duration-200 select-none cursor-pointer p-2 px-4 flex items-center">
        <img class="mr-4" alt="logo of clean trash can" src="../assets/logo-trash.png">
        <span class="hover:text-black text-2xl text-white font-semibold">
          Sanibac
        </span>
      </a>
    </div>

    <div class="block flex-grow flex items-center w-auto">
      <div class="text-sm lg:flex-grow flex items-center justify-end">
        <a href="#prix" class="inline-block text-white hover:text-black ease-in duration-200 mr-6 text-lg">
          {{ $t("message.Header1") }}
        </a>
        <a href="#info" class="inline-block text-white hover:text-black ease-in duration-200 mr-6 text-lg">
          {{ $t("message.Header2") }}
        </a>
        <a href="#contact" class="inline-block text-white hover:text-black ease-in duration-200 mr-6 text-lg">
          {{ $t("message.Header3") }}
        </a>
        <a class="inline-block text-white hover:text-black ease-in duration-200 mr-6 text-lg">
          <button @click="changeLocale()"> {{ $t("message.langue") }}</button>
        </a>
        <div class="w-2"></div>
      </div>
    </div>
  </nav>
</template>

<style>
  @media (max-width: 768px) {
    #icon {
      display: none;
    }
  }

  nav {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  nav a:hover {
    text-decoration: underline;
  }

  nav a {
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
</style>


<script setup>
import { useI18n } from 'vue-i18n';
const {locale } = useI18n({useScope: 'global'}) 
const changeLocale = () => {
            const currentGlobal = locale.value;
            if (currentGlobal == "fr"){
                locale.value = "en"
            } else {
                locale.value = "fr"
            }
}

</script>