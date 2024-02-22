<template>
  <div class="pb-12 -ml-3 md:ml-0 relative px-4 lg:p-24 flex flex-col xl:flex-row">
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
              <p class="font-interthin text-left mx-3 my-3">{{ slide.content }}</p>
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
          headline: '1. Basic',
          content:
            '  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
        },
        {
          headline: '2. Basic',
          content:
            '  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
        },
        {
          headline: '3. Basic',
          content:
            '  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
        },
        {
          headline: '4. Basic',
          content:
            '  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
        },
        {
          headline: '5. Basic',
          content:
            '  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
        },
      ],
    };
  },
});
</script>
