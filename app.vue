<script lang="ts">
import GlobalProvider from './components/GlobalProvider.vue';


useHead({
  htmlAttrs: {
    lang: 'ge'
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})


</script>

<template>
  <div>
    <GlobalProvider/>
    <NuxtLayout name="default">
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
