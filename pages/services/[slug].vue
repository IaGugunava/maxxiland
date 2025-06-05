<script setup lang="ts">
const route = useRoute()
const id = route.params.slug.toString()?.split("-")?.[0]

const { $strapiMedia } = useNuxtApp();

const salesMedia = (url: string) => {
  return $strapiMedia(url);
};

const { data, pending, error } = await apiFetch("/api/services?populate=*");

const servicesData = computed(() => (!error.value ? data?.value?.data?.filter((el: any) => el.id.toString() === id)?.[0] : null));

if(!servicesData?.value){
    throw createError({ statusCode: 404, statusMessage: 'Service not found' })
}

useSeo({ title: servicesData?.value?.title, description: servicesData?.value?.short_description, image: salesMedia(servicesData?.value?.image?.url) })

</script>

<template>
    <div>
        <ServicesInner :data="servicesData"/>
    </div>
</template>

<style scoped>

</style>