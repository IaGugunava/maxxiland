<script setup lang="ts">

const { data, pending, error } = await apiFetch('/api/main-banners?populate=*');

//@ts-ignore
const bannersData = computed(() => !error.value ? data?.value?.data : null)

const { $strapiMedia } = useNuxtApp()

const bannerMedia = (url: string) => {
    return $strapiMedia(url)
}

</script>

<template>
    <div class="absolute top-0 left-0 w-full">
        <swiper-container
            :slides-per-view="1"
            :autoplay="{
                delay: 5000
            }"
            :loop="true"
        >
            <swiper-slide v-for="item in bannersData" :key="item?.id">
                <div class="relative">
                    <div class="h-full group w-full overflow-hidden">
                        <NuxtImg
                        class="aspect-[351/296] h-full w-full object-cover sm:aspect-[344/296] md:aspect-[436/296] 2xl:aspect-[1920/1000]"
    
                         :src="bannerMedia(item?.image?.formats?.large?.url)"/>
                    </div>
                    <div class="absolute bottom-[300px] left-[50px]">
                        <h1 class="text-white text-4xl font-bold mb-2">
                            {{ item?.title }}
                        </h1>
                        <p class="text-white text-lg max-w-[1000px] mb-4">
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
</template>

<style scoped>

</style>