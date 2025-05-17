<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Navigation } from "swiper/modules";
// import FsLightbox from 'fslightbox-vue'

// import fancyBox from 'vue-fancybox';

import "swiper/css";

const { data, pending, error } = await apiFetch("/api/galleries?populate=*");

const galleriesData = computed(() => (!error.value ? data?.value?.data : null));

const images = computed(() => {
  return galleriesData.value?.map((el: any) =>
    galleriesMedia(el.image?.formats?.small?.url)
  );
});

const { $strapiMedia } = useNuxtApp();

const galleriesMedia = (url: string) => {
  return $strapiMedia(url);
};

const swiperKey = ref(0);
const show = ref(false);
const index = ref(0);

function openLightbox(i: number) {
  index.value = i;
  show.value = true;
}

onMounted(() => {
  swiperKey.value++;
});
</script>

<template>
  <div class="pt-20 overflow-x-hidden">
    <div class="container">
      <div class="mb-8">
        <h2
          class="w-full text-dark text-3xl font-bold flex items-center justify-center text-center"
        >
          gallery
        </h2>
      </div>
    </div>
    <div class="relative">

      <Swiper
        class="gallery-swiper"
        :key="swiperKey"
        :slides-per-view="2"
        :centeredSlides="true"
        :space-between="70"
        :loop="true"
        :navigation="{
          nextEl: '.gallery-slider-next',
          prevEl: '.gallery-slider-prev',
        }"
        effect="coverflow"
        :breakpoints="{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1280: {
            spaceBetween: 40
          },
          1920: {
            spaceBetween: 70
          }
        }"
        :coverflowEffect="{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }"
        :modules="[EffectCoverflow, Navigation]"
      >
        <SwiperSlide
          v-for="(item, index) in galleriesData"
          :key="item?.id"
          @click="openLightbox(index)"
        >
          <NuxtImg
            class="aspect-[351/296] h-full w-full object-cover sm:aspect-[768/432] 2xl:aspect-[1920/1080]"
            :src="galleriesMedia(item?.image?.formats?.small?.url)"
          />
        </SwiperSlide>
      </Swiper>
  
      <div
        class="pointer-events-none left-0 z-30 my-auto flex w-full items-center gap-2 px-3 absolute top-1/2 mt-0 justify-between lg:px-6 xl:px-8"
      >
        <div
          class="gallery-slider-prev pointer-events-auto h-8 w-8 cursor-pointer xl:h-10 xl:w-10 [&_path]:stroke-grey-3 [&_svg]:h-full [&_svg]:w-full"
        >
          <ArrowLeft />
        </div>
  
        <div
          class="gallery-slider-next pointer-events-auto h-8 w-8 -rotate-180 cursor-pointer xl:h-10 xl:w-10 [&_path]:stroke-grey-3 [&_svg]:h-full [&_svg]:w-full"
        >
          <ArrowLeft />
        </div>
      </div>
  
      <vue-easy-lightbox
        :visible="show"
        :imgs="images"
        :index="index"
        @hide="show = false"
        :loop="true"
        :move-disabled="true"
        :zoom-disabled="true"
        :rotate-disabled="true"
        teleport="body"
        class="[&_.vel-img]:!scale-150 lg:[&_.vel-img]:scale-200"
      >
      </vue-easy-lightbox>
    </div>
  </div>
</template>

<style>
.swiper-wrapper {
  overflow: visible !important;
}

.gallery-swiper .swiper-slide-next,
.gallery-swiper .swiper-slide-prev {
  opacity: 0.8;
  transition: all 500ms ease-in-out;
}

.vel-img{
  transform: scale(2);
}

@media(max-width: 1024px){
  .vel-img{
    transform: scale(1.5);
  }
}
</style>
