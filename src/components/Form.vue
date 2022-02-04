<template>
<section id="formulaire" class="text-gray-600 body-font relative">
  <div class="absolute inset-0 bg-gray-300" id="contact">
    <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89768.65062832067!2d-73.35973994697984!3d45.323163296226554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9a20d03b56265%3A0x5040cadae4d44f0!2sSaint-Jean-sur-Richelieu%2C%20QC!5e0!3m2!1sfr!2sca!4v1629423926852!5m2!1sfr!2sca" style="filter: grayscale(0) opacity(0.5) contrast(1.2);"></iframe>
  </div>
  <form action="mailto:sanibacwmc@gmail.com" method="post" enctype="text/plain">
  <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">{{ $t("message.FormTitle")}}</h2>
      <p class="leading-relaxed mb-5 text-gray-600">{{ $t("message.FormTitle2")}}</p>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">{{ $t("message.FormSub1")}}</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="phone" class="leading-7 text-sm text-gray-600">{{ $t("message.FormSub2")}}</label>
        <input type="phone" id="phone" name="phone" class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">{{ $t("message.FormSub3")}}</label>
        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <input type="submit" class="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"><input>
      <p class="text-xs text-gray-500 mt-3">{{ $t("message.FormSub4")}} <br><b> {{ $t("message.FormSub5")}}</b>.</p>
    </div>
  </div>
  </form>
</section>
</template>


<script setup>
import { useI18n } from "vue-i18n" 
const { locale } = useI18n({
    useScope: "global"
}); 
const CheckLocale = () => {
            
            if (locale.value == "fr"){
                return "Envoyer"
            } else {
                return "Send"
            }
}

</script>