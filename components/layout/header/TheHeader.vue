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
  <div class="flex justify-between items-center p-5 relative z-20 transition-all duration-300 ease-in-out" :class="{'bg-background': isBurgerOpen, 'bg-transparent': !isBurgerOpen}">
    <NuxtLink
      to="/"
      class="w-[150px] h-[50px] flex items-center justify-center"
    >
      <img src="../../../assets/images/logo-header.png" />
    </NuxtLink>

    <div class="hidden md:flex items-center gap-5">
      <NuxtLink
        class="text-dark text-lg font-semibold transition-all duration-300 ease-in-out hover:text-primary-hover"
        to="/about-us"
      >
        ჩვენ შესახებ
      </NuxtLink>
      <NuxtLink
        class="text-dark text-lg font-semibold transition-all duration-300 ease-in-out hover:text-primary-hover"
        to="/services"
      >
        სერვისები
      </NuxtLink>
      <NuxtLink
        class="text-dark text-lg font-semibold transition-all duration-300 ease-in-out hover:text-primary-hover"
        to="/sales"
      >
        ფასდაკლებები
      </NuxtLink>
      <NuxtLink
        class="text-dark text-lg font-semibold transition-all duration-300 ease-in-out hover:text-primary-hover"
        to="/contact"
      >
        კონტაქტი
      </NuxtLink>
    </div>

    <div class="flex md:hidden">
      <div
        class="grid cursor-pointer justify-items-center gap-1.5 lg:hidden"
        @click="isBurgerOpen = !isBurgerOpen"
      >
        <div
          :class="{ 'translate-y-2.5 rotate-45': isBurgerOpen }"
          class="h-1 w-8 rounded-full bg-primary transition-transform"
        ></div>
        <div
          :class="{ 'scale-x-0': isBurgerOpen }"
          class="h-1 w-8 rounded-full bg-purple transition-transform"
        ></div>
        <div
          :class="{ '-translate-y-2.5 -rotate-45': isBurgerOpen }"
          class="h-1 w-8 rounded-full bg-green transition-transform"
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

<style scoped>
.router-link-active{
  color: #4235f2;
}
</style>
