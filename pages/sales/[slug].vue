<script setup lang="ts">
const route = useRoute()
const id = route.params.slug.toString()?.split("-")?.[0]

const { data, pending, error } = await apiFetch("/api/shops?populate=*");

const salesData = computed(() => (!error.value ? data?.value?.data?.filter((el: any) => el.id.toString() === id)?.[0] : null));

</script>

<template>
    <div>
        <SalesInner :data="salesData"/>
    </div>
</template>

<style scoped>

</style>