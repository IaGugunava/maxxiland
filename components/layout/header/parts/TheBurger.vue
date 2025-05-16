<script setup lang="ts"></script>

<template>
  <div class="w-full h-[100dvh] z-10 fixed top-[90px] left-0 bg-background">
    <div class="flex gap-10 flex-col justify-center items-center">
      <NuxtLink
        class="text-dark text-lg font-semibold transition-all duration-300 ease-in-out"
        to="/about-us"
      >
        about us
      </NuxtLink>
      <NuxtLink
        class="text-dark text-lg font-semibold transition-all duration-300 ease-in-out"
        to="/services"
      >
        services
      </NuxtLink>
      <NuxtLink
        class="text-dark text-lg font-semibold transition-all duration-300 ease-in-out"
        to="/contact"
      >
        contact
      </NuxtLink>
    </div>

    <div class="absolute bottom-[150px] flex-col z-30 left-5 flex gap-4 items-start">
        <p class="text-xl text-dark font-bold">follow us on social media</p>
        <Socials/>
    </div>
  </div>
</template>

<style scoped></style>
