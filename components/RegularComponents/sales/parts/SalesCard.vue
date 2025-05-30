<script setup lang="ts">
import { getSingleUrl } from "#imports";
import { format } from "date-fns"

const props = defineProps<{
  data: any;
}>();

const { $strapiMedia } = useNuxtApp();

const shopsMedia = (url: string) => {
  return $strapiMedia(url);
};

const reducedPrice = computed(
  () => (props.data?.price * props.data?.sale) / 100
);

const start = computed(() => format(props.data?.startDate, 'dd MMMM yyyy'));
const finish = computed(() => format(props.data?.finishDate, 'dd MMMM yyyy'))

</script>

<template>
  <NuxtLink :to="getSingleUrl('sales', data)" class="w-full group">
    <div class="image-container relative w-full overflow-hidden rounded-lg">
      <NuxtImg
        :src="shopsMedia(data?.image?.formats?.small?.url)"
        class="aspect-[351/216] w-full object-cover transition-all duration-500 ease-in-out lg:aspect-[542/300] 2xl:aspect-[778/456] group-hover:scale-125"
      />

      <div
        class="absolute right-0 bottom-0 w-[100px] border-l-[12px] border-primary h-[100px] font-bold text-primary text-4xl flex items-center pl-4 pt-[10px] justify-center rounded-tl-full bg-orange"
      >
        {{ data?.sale }} <span>%</span>
      </div>
    </div>

    <div class="flex justify-between w-full items-center">
      <h3 class="pt-3 text-lg sm:text-xl font-semibold">{{ data?.title }}</h3>

      <div class="flex gap-2">
        <div
          class="relative w-fit before:absolute before:content-[''] before:left-0 before:top-1/2 before:border-red-error before:right-0 before:border-t before:border-2 before:rotate-[-5deg]"
        >
          <p class="text-3xl text-dark">{{ data?.price + "$" }}</p>
        </div>
        <p class="text-3xl text-primary font-bold">{{ reducedPrice + "$" }}</p>
      </div>
    </div>

    <div>
      <p>hurry, only until {{ finish }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped>
.image-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(66, 53, 242, 0.2), rgba(235, 136, 55, 0.2));
  z-index: 1;
}
</style>
