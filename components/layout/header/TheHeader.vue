<script setup lang="ts">

</script>

<template>
    <div class="flex justify-between items-center p-5">
        <NuxtLink to="/" class="w-[100px] h-[50px]">
            <img src="../../../assets/images/logo-green-black.png"/>
        </NuxtLink>

        <div class="flex items-center gap-5">
            <NuxtLink class="text-black text-lg font-semibold transition-all duration-300 ease-in-out" to="about-us">
                about us
            </NuxtLink>
            <NuxtLink class="text-black text-lg font-semibold transition-all duration-300 ease-in-out" to="services">
                services
            </NuxtLink>
            <NuxtLink class="text-black text-lg font-semibold transition-all duration-300 ease-in-out" to="contact">
                contact
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>

</style>