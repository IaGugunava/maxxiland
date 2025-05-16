<script setup lang="ts">

/**
 * @description BUTTON TYPE ONE: Button with primary background
 * @description BUTTON TYPE TWO: Transparent button
 * @description BUTTON TYPE THREE: Transparent button with primary border and text
 */


withDefaults(
  defineProps<{
    text: string;
    type?: number;
    icon?: any;
    isActive?: boolean;
  }>(),
  {
    text: "",
    type: 1,
    icon: null,
    isActive: false,
  }
);
</script>

<template>
    <button class="px-3 sm:px-6 py-3 rounded-lg cursor-pointer text-sm sm:text-lg font-semibold transition-all duration-300 ease-in-out"
    :class="{
        'bg-primary text-light hover:bg-primary-hover': type === 1,
        'border border-light font-semibold text-light': type === 2,
        ' border border-primary text-primary hover:bg-primary hover:text-light': type === 3
    }"
    >
        <div>
            {{ text }}
        </div>
    </button>
</template>

<style scoped>

</style>