<script setup lang="ts">
const route = useRoute()

const { $strapiMedia } = useNuxtApp();

const salesMedia = (url: string) => {
  return $strapiMedia(url);
};

const id = route.params.slug.toString()?.split("-")?.[0]

const { data, pending, error } = await apiFetch("/api/shops?populate=*");

const salesData = computed(() => (!error.value ? data?.value?.data?.filter((el: any) => el.id.toString() === id)?.[0] : null));

if(!salesData?.value){
    throw createError({ statusCode: 404, statusMessage: 'Service not found' })
}

useSeo({ title: salesData?.value?.title, description: salesData?.value?.short_description, image: salesMedia(salesData?.value?.image?.url) })
</script>

<template>
    <div>
        <SalesInner :data="salesData"/>
    </div>
</template>

<style scoped>

</style>