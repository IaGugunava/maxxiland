<script setup lang="ts">
import { marked } from 'marked'

const props = defineProps<{
  data: any;
}>();

const editorContent = computed(() => props?.data ? props?.data : null)
const htmlContent = computed(() => editorContent.value ? marked.parse(editorContent.value) : null)
</script>

<template>
  <div>
    <div
      class="[&_p]:text-lg [&_p]:text-dark [&_img]:my-8 [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:aspect-[375/296] [&_img]:sm:aspect-[1920/540] [&_img]:rounded-xl"
      v-html="htmlContent"
    ></div>
  </div>
</template>

<style scoped></style>
