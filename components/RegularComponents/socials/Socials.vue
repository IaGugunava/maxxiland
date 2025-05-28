<script setup lang="ts">
defineProps<{
  isLight?: boolean
}>();

const { data, pending, error } = await apiFetch("/api/socials?populate=*");

const socials = computed(() => (!error.value ? data?.value?.data?.[0]?.media : null));

</script>

<template>
    <div>
        <div class="flex gap-4">
            <div class="flex gap-2" v-for="item in socials" :key="item?.id">
                <NuxtLink :to="item?.url" target="_blank">
                    <div class="w-6 h-6 [&_svg]:w-full [&_svg]:h-full " :class="{'[&_path]:fill-primary': !isLight, '[&_path]:fill-light': isLight}" v-html="item?.icon"></div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>