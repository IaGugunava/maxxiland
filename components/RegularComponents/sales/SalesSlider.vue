<script setup lang="ts">

import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css'

const { data, pending, error } = await apiFetch("/api/shops?populate=*");

const shopsData = computed(() => (!error.value ? data?.value?.data : null));

const checkDateViability = (item: any) => {
  if(!item?.price || !item?.sale) return true;
  if(Date.now() >= Date.parse(item?.startDate) || Date.now() <= Date.parse(item?.finishDate)){
    return true;
  }

  return false;
}

</script>

<template>
    <div class="mt-20 overflow-x-hidden">
        <div v-if="shopsData" class="container">
            <div class="mb-8 flex flex-col sm:flex-row w-full justify-between gap-4 sm:gap-0 items-start sm:items-center">
                <h2 class="shrink text-dark text-xl sm:text-2xl md:text-3xl font-bold">სიახლეები და ფასდაკლებები</h2>

                <NuxtLink to="/sales">
                  <CustomButton text="აღმოაჩინე მეტი" :type="3" color="orange"/>
                </NuxtLink>
            </div>
        </div>


         <Swiper
      class="!overflow-visible custom-swiper"
      style=""
      :breakpoints="{
        0: {
          spaceBetween: 24,
          slidesPerView: 1.09,
          slidesOffsetBefore: 12
        },
        480: {
          spaceBetween: 24,
          slidesPerView: 1.4,
          slidesOffsetBefore: 12
        },
        768: {
          spaceBetween: 16,
          slidesPerView: 2,
          slidesOffsetBefore: 32
        },
        1024: {
          spaceBetween: 24,
          slidesPerView: 2.5,
          slidesOffsetBefore: 64
        },
        1280: {
          spaceBetween: 24,
          slidesPerView: 3,
          slidesOffsetBefore: 120
        },
        1536: {
          spaceBetween: 36,
          slidesPerView: 3.5,
          slidesOffsetBefore: 120
        },
        1920:{
          spaceBetween: 36,
          slidesPerView: 4,
          slidesOffsetBefore: 150
        }
      }"
      :speed="1000"
    >
      <SwiperSlide v-show="checkDateViability(item)" v-for="item in shopsData" :key="item?.id">
          <SalesCard :data="item" :is-sales="item?.sale || item?.price" />
      </SwiperSlide>
    </Swiper>
    </div>
</template>

<style scoped>

</style>