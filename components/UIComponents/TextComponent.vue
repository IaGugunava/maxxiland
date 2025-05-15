<script setup lang="ts">
defineProps<{
  textValue: string
}>();
</script>

<template>
    <div class="text-black text-lg" v-html="textValue"></div>
</template>

<style scoped>

</style>