<script setup lang="ts">
const { data, pending, error } = await apiFetch("/api/about-banners?populate=*");

const aboutBannerData = computed(() => (!error.value ? data?.value?.data?.[0] : null))

const { $strapiMedia } = useNuxtApp();

const aboutBannerMedia = (url: string) => {
  return $strapiMedia(url);
};
</script>

<template>
    <div class="py-10">
        <div class="container flex flex-col md:flex-row gap-10 items-center">
            <div class="w-full md:w-1/2 flex justify-end flex-col gap-4">
                <h1 class="text-dark text-3xl font-bold">{{ aboutBannerData?.title }}</h1>
                <div class="text-dark text-lg" v-html="aboutBannerData?.description"></div>
            </div>
    
            <div class="w-full md:w-1/2">
                <NuxtImg
                class="aspect-[351/296] rounded-lg h-full w-full object-cover sm:aspect-[344/296] md:aspect-[436/296] 2xl:aspect-[1920/1080]"
                :src="aboutBannerMedia(aboutBannerData?.image?.formats?.small?.url)"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>