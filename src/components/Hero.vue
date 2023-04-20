<template>
  <div class="relative py-60 flex justify-center items-center">
    <div class="absolute inset-0 w-full h-full">
      <carousel :images="images" class="blur"></carousel>
      <div class="bg-black opacity-50 w-full h-full absolute inset-0"></div>
    </div>
    <div class="relative z-10 text-white max-w-2xl mx-auto text-center">
      <h1 class="text-4xl font-bold mb-6">Sanibac</h1>
      <p class="text-lg mb-10">{{ $t("message.Step1Sub2")}}</p>
      <a href="#" class="border border-white text-white py-3 px-8 inline-block hover:bg-white hover:text-clean-house transition ease-in-out duration-300">Learn More</a>
    </div>
  </div>
</template>

<style>
  .bg-clean-house {
    background-color: #95BF74;
  }

  .text-clean-house {
    color: #95BF74;
  }

  .border-clean-house {
    border-color: #95BF74;
  }

  .hover\:bg-white:hover {
    background-color: #fff;
  }

  .hover\:text-clean-house:hover {
    color: #95BF74;
  }
</style>


<script>
import Carousel from "../components/Carousel.vue";

export default {
  name: "HeroBanner",
  components: {
    Carousel,
  },
  data() {
    return {
      images: [
        "src/assets/home-clean.png",
        "src/assets/home-clean2.png",
        "src/assets/home-clean3.png",
      ],
    };
  },
};
</script>