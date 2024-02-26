<template>
  <div class="flex flex-col mg:flex-row px-4 lg:p-24 lg:pb-0 justify-between">
    <div class="flex flex-col mb-8 md:w-2/5">
      <h2 class="font-interbold text-3xl">Für wen?</h2>
      <p class="font-interthin my-6">
        Um Ihnen einen Einblick in unsere Dienstleistungen zu geben,
        haben wir eine Auswahl von Anwendungsfällen zusammengestellt.
      </p>
    </div>
  </div>
  <div
    class="pb-12 -ml-3 md:ml-0 relative px-4 lg:pb-24 lg:px-24 flex flex-col xl:flex-row"
  >
    <img
      class="hidden xl:block w-[300px] md:w-[500px] h-full"
      src="../assets/images/person_3.png"
      alt=""
    />
    <div class="relative xl:ml-12">
      <img
        class="w-[345px] md:w-[500px]"
        src="../assets/images/person_4.png"
        alt=""
      />
      <img
        class="w-[345px] md:w-[500px] absolute left-0 top-0"
        src="../assets/images/gradient.png"
        alt=""
      />
      <div
        class="w-4/5 md:w-[500px] absolute right-0 xl:-right-64 top-1/2 transform -translate-y-1/2"
      >
        <carousel :items-to-show="1">
          <slide v-for="(slide, index) in sliderData" :key="index">
            <div class="flex flex-col w-4/5 lg:w-2/3">
              <h1 class="text-2xl font-interbold text-left">
                {{ slide.headline }}
              </h1>
              <p class="font-interthin text-left mx-3 my-3">
                {{ slide.content }}
              </p>
            </div>
          </slide>

          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      sliderData: [
        {
          headline: '1. Lehrmaterialien',
          content:
            'Erstelle hochwertige Lehrmaterialien von Grund auf oder optimiere und individualisiere bereits vorhandene.',
        },
        {
          headline: '2. Kundenkommunikation',
          content:
            'slyAPI generiert automatisierte Kundenantworten durch Analyse von E-Mails, Nachrichten und Formularen, basierend auf Kontext und Unternehmensrichtlinien.',
        },
        {
          headline: '3. Dokumentenverarbeitung',
          content: 'slyAPI analysiert große Mengen von Dokumenten und extrahiert relevante Informationen, z. B. zur Identifizierung wichtiger Klauseln in Verträgen für Rechtsanwaltskanzleien oder zur Überprüfung von Schadensfällen für Versicherungsunternehmen.'
        },
        {
          headline: '4. Automatisierte Berichterstellung',
          content:
            'Nutzen Sie unsere API, um automatisch Berichte zu generieren. Sammeln, analysieren und präsentieren Sie Daten aus verschiedenen Quellen in einem leicht verständlichen Format.',
        },
        {
          headline: '5. Content-Erstellung und -Optimierung',
          content:
            'Setzen Sie slyAPI ein, um textliche Inhalte zu generieren oder vorhandene Inhalte zu optimieren. Lassen Sie die KI relevante Informationen aus verschiedenen Quellen zusammenstellen und in einem ansprechenden Format präsentieren.',
        },
      ],
    };
  },
});
</script>
