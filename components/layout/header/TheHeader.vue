<script setup lang="ts">

const route = useRoute();
const isBurgerOpen = ref(false)

watch(
  () => isBurgerOpen.value,
  (isOpen) => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }
);

watch(() => route.fullPath, () => {
  isBurgerOpen.value = false;
})
</script>

<template>
  <div class="flex justify-between items-center p-5 relative z-20">
    <NuxtLink
      to="/"
      class="w-[100px] h-[50px] bg-white flex items-center justify-center"
    >
      <img src="../../../assets/images/logo-green-black.png" />
    </NuxtLink>

    <div class="hidden md:flex items-center gap-5">
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

    <div class="flex md:hidden">
      <div
        class="grid cursor-pointer justify-items-center gap-1.5 lg:hidden"
        @click="isBurgerOpen = !isBurgerOpen"
      >
        <div
          :class="{ 'translate-y-2.5 rotate-45': isBurgerOpen }"
          class="h-1 w-8 rounded-full bg-black transition-transform"
        ></div>
        <div
          :class="{ 'scale-x-0': isBurgerOpen }"
          class="h-1 w-8 rounded-full bg-black transition-transform"
        ></div>
        <div
          :class="{ '-translate-y-2.5 -rotate-45': isBurgerOpen }"
          class="h-1 w-8 rounded-full bg-black transition-transform"
        ></div>
      </div>
    </div>

    <Teleport to="body">
        <Transition name="fade-in-out">
            <TheBurger v-if="isBurgerOpen"/>
        </Transition>
    </Teleport>
  </div>
</template>

<style scoped></style>
