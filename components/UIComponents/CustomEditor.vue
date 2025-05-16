<script setup lang="ts">
import { marked } from 'marked'

const props = defineProps<{
  data: any;
}>();

const editorContent = computed(() => props?.data)
const htmlContent = computed(() => marked.parse(editorContent.value))
</script>

<template>
  <div>
    <div
      class="[&_p]:text-lg [&_p]:text-black [&_img]:my-8 [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:aspect-[375/296] [&_img]:sm:aspect-[1920/540] [&_img]:rounded-xl"
      v-html="htmlContent"
    ></div>
  </div>
</template>

<style scoped></style>
