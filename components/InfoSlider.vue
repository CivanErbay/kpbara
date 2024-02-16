<template>
  <div class="p-24 flex">
    <img
      class="w-[300px] md:w-[500px] h-full"
      src="../assets/images/person_3.png"
      alt=""
    />
    <div class="relative ml-12">
      <img
        class="w-[300px] md:w-[500px]"
        src="../assets/images/person_4.png"
        alt=""
      />
      <img
        class="w-[300px] md:w-[500px] absolute right-0 top-0"
        src="../assets/images/gradient.png"
        alt=""
      />
      <div
        class="w-[300px] md:w-[500px] absolute -right-48 top-1/2 transform -translate-y-1/2"
      >
        <carousel :items-to-show="1">
          <slide v-for="(slide, index) in sliderData" :key="index">
            <div class="flex flex-col w-1/2">
              <h1 class="text-2xl font-interbold text-left">
                {{ slide.headline }}
              </h1>
              <p class="font-interthin text-left my-3">{{ slide.content }}</p>
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
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

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
      { headline: '1. Basic', content: '  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.'},
      { headline: '2. Basic', content: '  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.'},
      { headline: '3. Basic', content: '  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.'},
      { headline: '4. Basic', content: '  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.'},
      { headline: '5. Basic', content: '  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.'}
    ]
    }
  }
})
</script>
