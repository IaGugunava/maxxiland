<script setup lang="ts">

const { data, pending, error } = await useFetch('http://localhost:1337/api/main-banners?populate=*');

//@ts-ignore
const bannersData = computed(() => data?.value?.data)
</script>

<template>
    <div class="container">
        <div v-for="item in bannersData" :key="item?.id">
            <div>
                {{ item }}
                <NuxtImg :src="item?.image?.url"/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>