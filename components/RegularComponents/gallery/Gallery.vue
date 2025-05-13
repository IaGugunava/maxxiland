<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow } from "swiper/modules";
// import FsLightbox from 'fslightbox-vue'

// import fancyBox from 'vue-fancybox';

import "swiper/css";

const { data, pending, error } = await apiFetch("/api/galleries?populate=*");

const galleriesData = computed(() => (!error.value ? data?.value?.data : null));

const images = computed(() => {
  return galleriesData.value?.map((el: any) => galleriesMedia(el.image?.formats?.small?.url));
});

const { $strapiMedia } = useNuxtApp();

const galleriesMedia = (url: string) => {
  return $strapiMedia(url);
};

console.log(galleriesData.value);

const swiperKey = ref(0);
const show = ref(false);
const index = ref(0)

function openLightbox(i: number) {
  index.value = i
  show.value = true
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
          class="w-full text-black text-3xl font-bold flex items-center justify-center text-center"
        >
          gallery
        </h2>
      </div>
    </div>
    <Swiper
      class="gallery-swiper"
      :key="swiperKey"
      :slides-per-view="2"
      :centeredSlides="true"
      :space-between="70"
      :loop="true"
      effect="coverflow"
      :breakpoints="{
        0: {
          slidesPerView: 1.09,
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
      }"
      :coverflowEffect="{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: false,
      }"
      :autoplay="{ delay: 3000 }"
      :modules="[EffectCoverflow]"
    >
      <SwiperSlide v-for="(item, index) in galleriesData" :key="item?.id" @click="openLightbox(index)">
        <NuxtImg
          class="aspect-[351/296] h-full w-full object-cover sm:aspect-[344/296] md:aspect-[436/296] 2xl:aspect-[1920/1080]"
          :src="galleriesMedia(item?.image?.formats?.small?.url)"
        />
      </SwiperSlide>
    </Swiper>

    <vue-easy-lightbox
      :visible="show"
      :imgs="images"
      :index="index"
      @hide="show = false"
    >
      
    </vue-easy-lightbox>
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
</style>
