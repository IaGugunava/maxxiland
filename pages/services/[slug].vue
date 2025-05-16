<script setup lang="ts">
const route = useRoute()
const id = route.params.slug.toString()?.split("-")?.[0]

const { data, pending, error } = await apiFetch("/api/services?populate=*");

const servicesData = computed(() => (!error.value ? data?.value?.data?.filter((el: any) => el.id.toString() === id)?.[0] : null));

</script>

<template>
    <div>
        <ServicesInner :data="servicesData"/>
    </div>
</template>

<style scoped>

</style>