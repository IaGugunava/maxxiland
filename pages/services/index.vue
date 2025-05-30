<script setup lang="ts">
const { data, pending, error } = await apiFetch("/api/articles?populate=*");

const servicesTextData = computed(() => (!error.value ? data?.value?.data?.filter((el: any) => el.slug === 'services')?.[0] : null))
</script>

<template>
    <div>
        <div>
            <Services/>
            <AboutText :data="servicesTextData"/>
        </div>
    </div>
</template>

<style scoped>

</style>