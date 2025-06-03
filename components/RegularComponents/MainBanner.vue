<script setup lang="ts">
import { apiFetch } from "~/composables/helpers";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

const { $strapiMedia } = useNuxtApp();

const { data, pending, error } = await apiFetch("/api/main-banners?populate=*");

//@ts-ignore
const bannersData = computed(() => (!error.value ? data?.value?.data : null));

// const progressCircle = ref(null);
// const progressContent = ref(null);

const bannerMedia = (url: string) => {
  return $strapiMedia(url);
};

const progress = ref(1);

function onAutoplayTimeLeft(swiper: any, time: any, progressRatio: any) {
  progress.value = 1 - progressRatio; // because it starts from 1 and goes to 0
}
</script>

<template>
  <div class="relative h-full overflow-x-hidden">
    <div class="w-full h-full">
      <Swiper
        :slides-per-view="1"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :loop="true"
        :modules="[Autoplay]"
        @autoplayTimeLeft="onAutoplayTimeLeft"
      >
        <SwiperSlide v-for="item in bannersData" :key="item?.id">
          <div class="relative">
            <div class="max-h-[calc(100dvh-90px)] group w-full overflow-hidden">

              <NuxtImg
                class="h-full w-full object-cover aspect-[375/296] sm:aspect-[1920/1000]"
                :src="bannerMedia(item?.image?.formats?.small?.url)"
              />
            </div>
            <div
              class="absolute bottom-[50px] lg:bottom-[150px] left-[50px] lg:left-[100px] 2xl:left-[150px]"
            >
              <h1
                class="text-light text-[34px] md:text-[56px] xl:text-[64px] 2xl:text-[80px] lg:text-6xl font-bold mb-2 md:mb-4"
              >
                {{ item?.title }}
              </h1>
              <p
                class="text-light text-sm lg:text-lg max-w-full pr-[50px] sm:pr-0 sm:max-w-1/2 md:max-w-[700px] line-clamp-4 sm:line-clamp-6 xl:max-w-[1000px] mb-4 sm:mb-8"
              >
                {{ item?.description }}
              </p>

              <NuxtLink :to="item?.url">
                <CustomButton :text="item?.button_text" :type="2" />
              </NuxtLink>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div class="absolute top-0 left-0 w-full h-1 bg-gray-300 z-10" v-if="bannersData?.length > 1">
        <div
          class="h-full bg-primary transition-[width] duration-100"
          :style="{ width: `${progress * 100}%` }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
