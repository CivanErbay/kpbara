<template>
  <div class="relative bg-heroBg bg-cover bg-center rounded-lg">
    <div class="container mx-auto">
      <img
        class="absolute top-0 left-0 h-3/4 -z-10"
        src="../assets/images/Rectangle_5.png"
        alt=""
      />
      <img
        class="absolute top-0 right-0 h-1/2 md:right-20"
        src="../assets/images/Rectangle_8.png"
        alt=""
      />

      <div class="px-4 py-12 md:mt-12 md:p-24 flex items-center justify-evenly">
        <div>
          <h2 class="text-4xl md:text-6xl font-semibold w-[300px] md:w-[500px]">
            Wir denken KI für Dich
            <span
              class="text-[#FB951C] after:content-heroUnderline after:inline-block after:absolute after:left-[100px] after:top-[121px] md:after:left-[300px] md:after:top-[210px] 2xl:after:top-[280px]"
              >neu</span
            >
          </h2>
          <p
            class="font-interthin text-2xl md:text-4xl w-[250px] md:w-[500px] mt-16"
          >
            Nutzen Sie das transformative Potenzial unserer API und bleiben Sie
            einen Schritt voraus
          </p>
          <a
            href="#"
            class="block bg-[#288E7E] py-3 text-white px-5 rounded-3xl md:border-0 w-fit mt-8 md:mt-16"
            >KOSTENLOSE DEMO ANFORDERN</a
          >
        </div>
        <div class="flex items-center justify-center relative">
          <img
            class="hidden sm:block max-w-max w-[200px] xl:w-1/2 -ml-10 lg:ml-0"
            src="../assets/images/person_2.png"
            alt=""
          />
          <img
            class="w-1/3 hidden xl:block"
            src="../assets/images/person_1.png"
            alt=""
          />
          <img
            class="absolute right-0 mt-2 h-16 xl:top-[6rem] xl:right-[14rem] xl:h-16"
            src="../assets/images/bulb.png"
            alt=""
          />
          <img
            class="absolute top-[8px] right-0 h-16 xl:bottom-20 xl:right-40 xl:h-20 xl:top-auto"
            src="../assets/images/bubble.png"
            alt=""
          />
          <img
            class="absolute bottom-0 right-0 h-16 xl:bottom-0 xl:left-40 xl:h-auto"
            src="../assets/images/pen.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
