<script setup lang="ts"></script>

<template>
  <div class="w-full h-[100dvh] z-10 fixed top-[90px] left-0 bg-background">
    <div class="flex gap-5 flex-col justify-center items-center">
      <div class="w-full border-b border-dark flex justify-center items-center pb-5">
        <NuxtLink
          class="text-dark text-lg font-semibold"
          to="/about-us"
        >
          about us
        </NuxtLink>
      </div>
      <div class="w-full border-b border-dark flex justify-center items-center pb-5">
        <NuxtLink
          class="text-dark text-lg font-semibold"
          to="/services"
        >
        services
      </NuxtLink>
      </div>
      <div class="w-full border-b border-dark flex justify-center items-center pb-5">
        <NuxtLink
          class="text-dark text-lg font-semibold"
          to="/contact"
        >
          contact
        </NuxtLink>
      </div>
    </div>

    <div class="absolute bottom-[150px] flex-col z-30 left-5 flex gap-4 items-start">
        <p class="text-xl text-dark font-bold">follow us on social media</p>
        <Socials/>
    </div>
  </div>
</template>

<style scoped></style>
