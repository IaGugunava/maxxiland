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
      class="container flex items-center flex-col md:flex-row justify-center gap-10 md:gap-20"
    >
      <div class="w-full md:w-1/2 flex justify-end flex-col gap-4">
        <h2 class="text-black text-3xl font-bold text-start md:text-end">
          {{ mainBannerData?.title }}
        </h2>

        <!-- <p class="text-black text-lg text-start md:text-end">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem
          lorem, molestie et rutrum sed, molestie vel enim. Donec malesuada
          imperdiet interdum. Pellentesque turpis nunc, lacinia ac dui et,
          accumsan ornare felis. Etiam sit amet nibh purus. Nulla facilisi.
          Vestibulum eget dui aliquet, malesuada nibh mollis, molestie felis.
          Curabitur faucibus nibh vel ipsum dictum pharetra ut et odio. Nulla
          ornare lacus nec volutpat ultrices. Sed nec posuere ante. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Curabitur nisl erat, viverra quis neque accumsan, faucibus
          accumsan nunc. Curabitur risus magna, blandit ut pellentesque sit
          amet, aliquet nec enim.
        </p> -->
        <div
          class="text-black text-lg text-start md:text-end"
          v-html="mainBannerData?.description"
        ></div>

        <NuxtLink
          to="about-us"
          class="w-full flex justify-start md:justify-end"
        >
          <CustomButton text="show more" class="w-fit" />
        </NuxtLink>
      </div>

      <div class="w-full md:w-1/2">
        <NuxtImg
          class="aspect-[351/296] rounded-lg h-full w-full object-cover sm:aspect-[344/296] md:aspect-[436/296] 2xl:aspect-[1920/1080]"
          :src="mainBannerMedia(mainBannerData?.image?.formats?.small?.url)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
