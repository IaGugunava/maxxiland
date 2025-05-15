<script setup lang="ts">
defineProps<{
  socials: any;
  info: any;
}>();
</script>

<template>
    <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
            <div  v-for="item in info" :key="item?.id">
                <NuxtLink class="flex gap-2 items-center" :to="item?.url">
                    <div class="w-6 h-6 [&_path]:fill-blue-800" v-html="item?.icon"></div>
                    <p class="text-sm lg:text-lg">{{ item?.name }}</p>
                </NuxtLink>
            </div>
        </div>
        <div class="flex gap-4">
            <div class="flex gap-2" v-for="item in socials" :key="item?.id">
                <NuxtLink :to="item?.url" target="_blank">
                    <div class="w-6 h-6 [&_path]:fill-blue-800" v-html="item?.icon"></div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>