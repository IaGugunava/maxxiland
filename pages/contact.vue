<script setup lang="ts">
const { data, pending, error } = await apiFetch(
  "/api/contact-infos?populate=*"
);

const contactInfoData = computed(() =>
  !error.value ? data?.value?.data?.[0] : null
);

const { $strapiMedia } = useNuxtApp();

const contactMedia = (url: string) => {
  return $strapiMedia(url);
};
</script>

<template>
  <div class="py-20">
    <div class="container">
      <h1 class="w-full text-black text-3xl font-bold mb-6">Contact us</h1>
      <div class="flex flex-col md:flex-row gap-6 sm:gap-10">
        <div class="w-full md:w-1/2">
          <p class="text-lg mb-6" v-html="contactInfoData?.description"></p>
          <ContactList
            :socials="contactInfoData?.socials"
            :info="contactInfoData?.contactLinks"
          />
        </div>
        <div class="w-full md:w-1/2">
          <NuxtImg
            class="h-full w-full object-cover aspect-[375/296] sm:aspect-[1920/1000]"
            :src="contactMedia(contactInfoData?.image?.formats?.large?.url)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
