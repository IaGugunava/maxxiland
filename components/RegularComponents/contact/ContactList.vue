<script setup lang="ts">
defineProps<{
  socials: any;
  info: any;
}>();
</script>

<template>
  <div
    class="flex flex-col gap-4 sm:gap-0 justify-start sm:justify-around h-full"
  >
    <div class="flex flex-col gap-4">
      <div v-for="item in info" :key="item?.id">
        <NuxtLink
          class="flex gap-2 w-fit items-center group"
          :to="item?.url"
          target="_blank"
        >
          <div
            class="w-6 h-6 transition-all duration-300 ease-in-out [&_path]:stroke-primary [&_rect]:stroke-primary group-hover:[&_path]:stroke-primary-opacity group-hover:[&_rect]:stroke-primary-opacity"
            v-html="item?.icon"
          ></div>
          <p class="text-sm text-dark lg:text-lg">{{ item?.name }}</p>
        </NuxtLink>
      </div>
    </div>
    <div class="flex gap-4">
      <Socials />
    </div>
  </div>
</template>

<style scoped></style>
