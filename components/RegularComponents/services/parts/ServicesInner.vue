<script setup lang="ts">

const props = defineProps<{
  data: any
}>();

const { $strapiMedia } = useNuxtApp();

const servicesMedia = (url: string) => {
  return $strapiMedia(url);
};

</script>

<template>
    <div class="pb-20">
        <div class="image-container relative w-full h-full">
            <NuxtImg class="h-full w-full object-cover aspect-[375/296] sm:aspect-[1920/540]" :src="servicesMedia(data?.cover_image?.formats?.large?.url)"/>
            <h1 class="absolute text-light text-3xl font-bold bottom-10 w-full left-0 z-10 flex justify-center items-center">{{ data?.name }}</h1>
        </div>

        <div class="container mt-10">
            <NuxtLink to="/services">
                <CustomButton class="mb-5" text="all services" :type="3"/>
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