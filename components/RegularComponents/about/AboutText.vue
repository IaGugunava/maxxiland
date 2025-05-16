<script setup lang="ts">
const { data, pending, error } = await apiFetch("/api/articles?populate=*");

const aboutTextData = computed(() => (!error.value ? data?.value?.data?.filter((el: any) => el.slug === 'about-us')?.[0] : null))
 
</script>

<template>
    <div class="py-10">
        <div class="container border-t border-dark pt-10 px-20">
            <h2 class="text-dark text-3xl font-bold mb-4">{{ aboutTextData?.title }}</h2>
            <CustomEditor :data="aboutTextData?.description"/>
        </div>
    </div>
</template>

<style scoped>

</style>