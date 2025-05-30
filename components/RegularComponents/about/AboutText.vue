<script setup lang="ts"> 
defineProps<{
  data: any
}>();
</script>

<template>
    <div class="py-10">
        <div class="container border-t border-dark pt-10 px-0 lg:px-20">
            <h2 class="text-dark text-3xl font-bold mb-4">{{ data?.title }}</h2>
            <CustomEditor :data="data?.description"/>
        </div>
    </div>
</template>

<style scoped>

</style>