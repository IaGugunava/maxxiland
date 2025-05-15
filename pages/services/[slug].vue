<script setup lang="ts">
const route = useRoute()
const id = route.params.slug.toString().split("-")?.[0]

const { data, pending, error } = await apiFetch(`/api/services/${id}`);

console.log(data.value)
</script>

<template>
    <div>
        <h1>Service: {{ id }}</h1>
        <p>This is the page for the "{{ id }}" service.</p>
        <NuxtLink to="/services">← Back to all services</NuxtLink>
    </div>
</template>

<style scoped>

</style>