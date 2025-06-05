<script setup lang="ts">
import { apiFetch } from '#imports';

const route = useRoute();
const { $strapiMedia } = useNuxtApp();

const { data, pending, error } = await apiFetch("/api/pages?populate=seo.shareImage");

const imageUrl = (url: string) => {
  return $strapiMedia(url);
};

watch(() => route?.fullPath, () => {

    const pageSeoData = data?.value?.data?.filter((el: any) => el.name === route?.name)?.[0]?.seo

    if(!pageSeoData) return;

    useSeo({title: pageSeoData?.metaTitle, description: pageSeoData?.metaDescription, image: imageUrl(pageSeoData?.shareImage?.url)})
},
{
    immediate: true
})
</script>

<template>
    <div>

    </div>
</template>

<style scoped>

</style>