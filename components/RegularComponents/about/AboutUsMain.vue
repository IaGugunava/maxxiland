<script setup lang="ts">
const { data, pending, error } = await apiFetch(
  "/api/about-banners?populate=*"
);

const mainBannerData = computed(() =>
  !error.value ? data?.value?.data?.[0] : null
);

const { $strapiMedia } = useNuxtApp();

const mainBannerMedia = (url: string) => {
  return $strapiMedia(url);
};
</script>

<template>
  <div class="py-20">
    <div
      class="container flex items-center flex-col lg:flex-row justify-center gap-10 lg:gap-20"
    >
      <div class="w-full lg:w-1/2 flex justify-end items-start lg:items-end flex-col gap-4">
        <h2 class="text-dark text-3xl font-bold text-start lg:text-end">
          {{ mainBannerData?.title }}
        </h2>
        <div
          class="text-dark text-lg text-start lg:text-end"
          v-html="mainBannerData?.description"
        ></div>

        <NuxtLink
          to="about-us"
          class="w-fit flex justify-start lg:justify-end"
        >
          <CustomButton text="გაიგე მეტი" class="w-fit" :type="3" color="purple"/>
        </NuxtLink>
      </div>

      <div class="w-full lg:w-1/2">
        <NuxtImg
          class="aspect-[351/296] rounded-lg h-full w-full object-cover sm:aspect-[768/432] md:aspect-[480/270] 2xl:aspect-[1920/1080]"
          :src="mainBannerMedia(mainBannerData?.image?.formats?.small?.url)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
