<script setup lang="ts">
import { apiFetch } from '~/composables/helpers';

const { data, pending, error } = await apiFetch('/api/main-banners?populate=*');

//@ts-ignore
const bannersData = computed(() => !error.value ? data?.value?.data : null)

const { $strapiMedia } = useNuxtApp()

const bannerMedia = (url: string) => {
    return $strapiMedia(url)
}

</script>

<template>
    <div class="relative h-full">
        <div class="w-full h-full">
            <swiper-container
                :slides-per-view="1"
                :autoplay="{ delay: 5000 }"
                :loop="true"
            >
                <swiper-slide v-for="item in bannersData" :key="item?.id">
                    <div class="relative">
                        <div class="h-full group w-full overflow-hidden">
                            <NuxtImg
                            class="h-full w-full object-cover aspect-[375/296] sm:aspect-[1920/1000]"
        
                             :src="bannerMedia(item?.image?.formats?.large?.url)"/>
                        </div>
                        <div class="absolute bottom-[50px] lg:bottom-[150px] xl:bottom-[250px] left-[50px] lg:left-[100px] 2xl:left-[150px]">
                            <h1 class="text-light text-2xl lg:text-4xl font-bold mb-2 sm:mb-4">
                                {{ item?.title }}
                            </h1>
                            <p class="text-light text-sm lg:text-lg max-w-full pr-[50px] sm:pr-0 sm:max-w-1/2 md:max-w-[700px] line-clamp-4 sm:line-clamp-6 xl:max-w-[1000px] mb-4 sm:mb-8">
                                {{ item?.description }}
                            </p>
    
                            <NuxtLink :to="item?.url">
                                <CustomButton :text="item?.button_text" :type="2"/>
                            </NuxtLink>
                            
                        </div>
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>
    </div>
</template>

<style scoped>

</style>