<script setup lang="ts">
const { data, pending, error } = await apiFetch("/api/shops?populate=*");

const shopsData = computed(() => (!error.value ? data?.value?.data : null));

const checkDateViability = (start: string, finish: string) => {
  if(Date.now() >= Date.parse(start) || Date.now() <= Date.parse(finish)){
    return true;
  }

  return false;
}

const salesItems = computed(() => shopsData?.value?.filter((el: any) => (el.sales || el.price)))
const newsItems = computed(() => shopsData?.value?.filter((el: any) => !(el.sales || el.price)))

</script>

<template>
    <div class="pt-12 2xl:pt-20">
        <div class="container">
            <h1 class="text-dark text-3xl font-bold flex items-start justify-start text-center mb-4">ფასდაკლებები და სიახლეები</h1>
            <p class="text-dark text-lg mb-8">
                ფასდაკლებები
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-9">
                <div v-show="checkDateViability(item?.startDate, item?.finishDate)" v-for="item in salesItems">
                    <SalesCard :data="item" :is-sales="item?.sale || item?.price"/>
                </div>
            </div>

            <div class="relative w-full h-[1px] my-8 bg-dark">

            </div>

            <p class="text-dark text-lg mb-8">
                სიახლეები
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-9">
                <div v-for="item in newsItems">
                    <SalesCard :data="item" :is-sales="item?.sale || item?.price"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>