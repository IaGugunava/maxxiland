<script setup lang="ts">
const { data, pending, error } = await apiFetch("/api/articles?populate=*");

const aboutTextData = computed(() => (!error.value ? data?.value?.data?.filter((el: any) => el.slug === 'about-us')?.[0] : null))
</script>

<template>
    <div>
        <AboutBanner/>
        <AboutText :data="aboutTextData"/>
        <Gallery/>
        <Services/>
    </div>
</template>

<style scoped>

</style>