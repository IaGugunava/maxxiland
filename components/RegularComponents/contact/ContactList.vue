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
                    <div class="w-6 h-6 [&_path]:fill-primary" v-html="item?.icon"></div>
                    <p class="text-sm text-dark lg:text-lg">{{ item?.name }}</p>
                </NuxtLink>
            </div>
        </div>
        <div class="flex gap-4">
            <Socials/>
        </div>
    </div>
</template>

<style scoped>

</style>