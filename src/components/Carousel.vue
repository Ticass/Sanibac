<template>
    <div class="w-full h-full relative overflow-hidden">
      <transition-group name="carousel" tag="div" :css="false">
        <div :key="currentIndex" class="w-full h-full absolute top-0 left-0 flex items-center justify-center">
          <img :src="currentImage" class="w-full h-full object-cover" />
        </div>
      </transition-group>
    </div>
  </template>
  
  <script>
  export default {
    name: "Carousel",
    props: {
      images: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        currentIndex: 0,
      };
    },
    computed: {
      currentImage() {
        return this.images[this.currentIndex];
      },
    },
    mounted() {
      setInterval(this.nextImage, 5000);
    },
    methods: {
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
    },
  };
  </script>
  
  <style>
    .carousel-enter-active,
    .carousel-leave-active {
      transition: opacity 0.5s;
    }
  
    .carousel-enter,
    .carousel-leave-to {
      opacity: 0;
    }
  </style>
  