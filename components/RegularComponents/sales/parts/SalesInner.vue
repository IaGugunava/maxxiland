<script setup lang="ts">

const props = defineProps<{
  data: any
}>();

const { $strapiMedia } = useNuxtApp();

const salesMedia = (url: string) => {
  return $strapiMedia(url);
};

</script>

<template>
    <div class="pb-20">
        <div class="image-container relative w-full h-full">
            <NuxtImg class="h-full w-full object-cover aspect-[375/296] sm:aspect-[768/472] md:aspect-[1920/540]" :src="salesMedia(data?.cover_image?.formats?.small?.url)"/>
            <h1 class="absolute text-light text-3xl font-bold bottom-10 w-full left-5 md:left-0 z-10 flex justify-center items-center">{{ data?.title }}</h1>
        </div>

        <div class="container mt-10">
            <NuxtLink to="/sales">
                <CustomButton class="mb-5" text="იხილეთ ყველა" :type="3" color="orange"/>
            </NuxtLink>

            <CustomEditor v-if="data?.description" :data="data?.description"/>
        </div>

    </div>
</template>

<style scoped>
.image-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(222, 222, 222, 0.4));
  z-index: 1;
}
</style>