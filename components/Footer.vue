<template>
  <div
    class="relative bg-heroBg bg-cover bg-center px-4 md:px-24 pt-32 pb-24 mt-12 md:mt-0"
  >
    <div class="container mx-auto">
      <img
        class="absolute top-0 left-0 h-1/2 md:h-3/4 -z-10"
        src="../assets/images/Rectangle_5.png"
        alt=""
      />
      <img
        class="absolute bottom-1 md:bottom-20 -right-3 md:right-20 h-1/3 md:h-1/2 transform rotate-90 -z-10"
        src="../assets/images/Rectangle_8.png"
        alt=""
      />
      <div class="flex flex-wrap justify-between">
        <div class="flex flex-col w-4/5 mb-8 lg:w-1/3 pr-0 sm:pr-12 xl:pr-24">
          <h2 class="text-3xl font-semibold">slyAPI</h2>
          <p class="font-interthin mt-8">
            Kontaktieren Sie uns noch heute, um mehr über unsere
            personalisierten KI-Lösungen zu erfahren und wie Sie Ihr Unternehmen
            voranbringen können.
          </p>
        </div>
        <!--   <div
          class="flex flex-col w-1/2 mb-8 lg:px-4 lg:w-1/6 order-last md:order-none"
        >
          <a href="" class="font-interbold mb-8">Links</a>
          <a href="" class="font-interthin mb-4">Features</a>
          <a href="" class="font-interthin mb-4"
            >Wie es funktioniert</a
          >
          <a href="" class="font-interthin mb-4">Über uns</a>
          <a href="" class="font-interthin">Kostenlose Demo</a>
        </div> -->
        <div
          class="flex flex-col mb-8 w-1/2 lg:px-4 lg:w-1/3 order-last md:order-none"
        >
          <a href="" class="font-interbold mb-8">Unternehmen</a>
          <a href="" class="font-interthin mb-4">AGB</a>
          <a href="" class="font-interthin mb-4">Datenschutzerklärung</a>
          <a href="" class="font-interthin mb-4">Kontakt</a>
          <a href="" class="font-interthin mb-4">Impressum</a>
        </div>
        <div class="flex flex-col mb-8 w-full lg:w-1/3">
          <p href="" class="font-interbold mb-8">
            Du willst keine News mehr verpassen?
          </p>
          <p class="font-interthin">
            Wir informieren dich über Aktionen und exklusive Angebote sowie neue
            Lehrmaterialien.
          </p>

          <div class="relative mt-12">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path
                  d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
                />
                <path
                  d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="input-group-1"
              class="bg-gray-50 border rounded-3xl py-3 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
              placeholder="email@example.com"
            />
            <a
              href="#"
              class="absolute bg-[#288E7E] py-3 text-white px-5 rounded-3xl md:border-0 top-0 right-0 pt-[13px]"
              >Jetzt anmelden</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center opacity-50 w-full my-2">
    <small>slyapi.com 2024</small>
  </div>
</template>

<script setup></script>
