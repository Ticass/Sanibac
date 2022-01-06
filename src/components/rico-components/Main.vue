<template>

  <div class="background-tint bg-clean-house py-60 flex gap-10 lg:gap-40 justify-center items-center">
    <div class="bg-green-100 rounded-full p-2 pr-4 flex justify-center">
      <p class="p-2 mr- select-none">
        <img alt="clorox" src="../../assets/rico-assets/spray.png" width="45" height="45"/>
      </p>
      <div class="flex items-center">
        <p class="text-2xl text-shadow inline">
          Désodorise
        </p>
      </div>
    </div>

    <div class="bg-green-100 rounded-full p-2 pr-4 flex justify-center">
      <p class="p-2 mr- select-none">
        <img alt="clorox" src="../../assets/rico-assets/cleaner.png" width="45" height="45"/>
      </p>
      <div class="flex items-center">
        <p class="text-2xl text-shadow inline">
          Désinfecte
        </p>
      </div>
    </div>

    <div class="bg-green-100 rounded-full p-2 pr-4 flex justify-center">
      <p class="p-2 mr- select-none">
        <img alt="clorox" src="../../assets/rico-assets/wipe.png" width="45" height="45"/>
      </p>
      <div class="flex items-center">
        <p class="text-2xl text-shadow inline">
          Néttoie
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.background-tint {
  background-color: rgba(0, 0, 0, .5) !important; /* Tint color */
  background-blend-mode: multiply !important;
}
</style>
