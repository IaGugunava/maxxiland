<script setup lang="ts">
const { data, pending, error } = await apiFetch("/api/shops?populate=*");

const shopsData = computed(() => (!error.value ? data?.value?.data : null));

const checkDateViability = (start: string, finish: string) => {
  if(Date.now() >= Date.parse(start) || Date.now() <= Date.parse(finish)){
    return true;
  }

  return false;
}
</script>

<template>
    <div class="pt-12 2xl:pt-20">
        <div class="container">
            <h1 class="text-dark text-3xl font-bold flex items-start justify-start text-center mb-4">Sales</h1>
            <p class="text-dark text-lg mb-8">
                We offer these sales
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-9">
                <div v-show="checkDateViability(item?.startDate, item?.finishDate)" v-for="item in shopsData">
                    <SalesCard :data="item"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>