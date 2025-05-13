<script setup lang="ts">
const { data, pending, error } = await apiFetch("/api/services?populate=*");

const servicesData = computed(() => (!error.value ? data?.value?.data : null));

const { $strapiMedia } = useNuxtApp();

const servicesMedia = (url: string) => {
  return $strapiMedia(url);
};
</script>

<template>
  <div class="pt-20">
    <div v-if="servicesData?.length" class="container">
      <h2
        class="w-full text-black text-3xl font-bold flex items-center justify-center text-center"
      >
        services
      </h2>
      <div class="main flex mt-8">
        <div class="services-container">
          <div
            class="services-item flex items-center justify-center"
            v-for="item in servicesData"
            :style="`background-image: url(${servicesMedia(
              item?.image?.formats?.large?.url
            )})`"
          >
            <div class="bg-blue-800 relative top-1/2">
              <p class="text-dark">
                {{ item?.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  --s: 400px; /* size  */
  --m: 8px; /* margin */
  --f: calc(1.732 * var(--s) + 4 * var(--m) - 1px);
}

.services-container {
  font-size: 0;
}

.services-container .services-item {
  width: var(--s);
  margin: var(--m);
  height: calc(var(--s) * 1.1547);
  display: inline-block;
  font-size: initial;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  margin-bottom: calc(var(--m) - var(--s) * 0.2885);
}
.services-container .services-item:nth-child(odd) {
  background: green;
}
.services-container::before {
  content: "";
  width: calc(var(--s) / 2 + var(--m));
  float: left;
  height: 120%;
  shape-outside: repeating-linear-gradient(
    #0000 0 calc(var(--f) - 3px),
    #000 0 var(--f)
  );
}
</style>
