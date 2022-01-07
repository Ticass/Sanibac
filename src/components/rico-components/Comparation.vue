<template>

  <section id="comparation" class="flex justify-evenly my-12 mx-40">
    <div id="before" class="w-1/3">
      <h2 class="text-center text-3xl mb-5 underline">
        Avant notre passage
      </h2>
      <div class="outter">
        <div class="inner" />
        <img class="w-full" alt="avant netoyage" src="../../assets/bac.jpeg" />
      </div>
    </div>
    <div id="after" class="w-1/3">
      <h2 class="text-center text-3xl mb-5 underline">
        Apres notre passage
      </h2>
      <div class="outter">
        <div class="inner" />
        <img class="w-full" alt="avant netoyage" src="../../assets/bac2.jpeg" />
      </div>
    </div>
  </section>

</template>

<style scoped>
  .outter {
    position: relative;
  }
  .inner {
    position: absolute;
    top: 22px;
    left: 12px;
    width: 100%;
    height: 100%;
    border: 2px solid #000;
    z-index: -1;
  }
</style>
