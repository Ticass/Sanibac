<template>
  <div class="bg-custom overflow-hidden relative">
    <div class="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 mx-auto text-center">
      <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        <span class="block" style="color: #417505">
          {{ $t("message.didYouKnow")}}
        </span>
      </h2>
      <p class="text-xl mt-4 text-white">
        {{ $t("message.didYouKnowSub")}}
      </p>
    </div>
    <img src="https://purepng.com/public/uploads/large/purepng.com-trash-cantrash-cansteelplasticdustbinrecyclebin-1421526645886ziucf.png" class="absolute top-20 right-36 hidden h-3/4 lg:block"/>
    <slot></slot>
  </div>
</template>