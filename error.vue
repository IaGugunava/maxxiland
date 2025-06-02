<script setup lang="ts">
defineProps<{
  error: any
}>();
</script>

<template>
    <div class="error-page w-full h-[100dvh] flex-col md:flex-row flex justify-center items-center">
        <div class="flex items-center flex-col gap-4">
            <h1 class="text-primary error-page-title font-bold text-[80px] text-center">404</h1>
            <p class="text-center text-dark">{{ error?.message }}</p>
            <NuxtLink to="/">
                <CustomButton text="Go Home" />
            </NuxtLink>
        </div>
        <div class="px-8 md:px-0">
            <img src="./assets/svgs/404.svg"/>
        </div>
    </div>
</template>

<style scoped>
.error-page{
    gap: 150px;
}
.error-page-title{
    font-size: 100px;
    line-height: 100px;
}

@media(max-width: 1024px){
  .error-page{
    gap: 40px;
  }
}</style>