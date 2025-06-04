<script setup lang="ts">
const { data, pending, error } = await apiFetch(
  "/api/contact-infos?populate=*"
);

const footerContactInfo = computed(() =>
  !error.value ? data?.value?.data?.[0]?.contactLinks : null
);
</script>

<template>
  <footer class="mt-20 bg-secondary">
    <div class="container py-10 flex flex-col md:flex-row gap-10">
      <div class="flex flex-col gap-6 w-full md:w-1/3">
        <NuxtLink
          to="/"
          class="max-w-[100px] max-h-[100px] flex items-center justify-center"
        >
          <img src="../../../assets/images/logo-footer.png" />
        </NuxtLink>

        <div>
          <p class="text-light">
            „მაქსი ლენდი“ არის მულტიფუნქციური გასართობი სივრცე! ჩვენთან ყველა
            ასაკის და ინტერესის მქონე სტუმარი იპოვის საკუთარ თავზე მორგებულ
            აქტივობას. გელით დაუვიწყარი გასართობი ღონისძიებები, ტურნირები და
            გათამაშებები!
          </p>
        </div>

    </div>
    <div class="w-full md:w-1/3 flex flex-col items-center">
        <h2 class="text-light text-lg font-semibold mb-7">ლინკები</h2>
        <div class="flex flex-col gap-5">
            <NuxtLink
                class="relative text-light text-lg font-semibold text-center transition-all duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-light after:transition-all after:duration-300 hover:after:w-full"
                to="/about-us"
            >
                ჩვენ შესახებ
            </NuxtLink>
            <NuxtLink
                class="relative text-light text-lg font-semibold text-center transition-all duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-light after:transition-all after:duration-300 hover:after:w-full"
                to="/services"
            >
                სერვისები
            </NuxtLink>
            <NuxtLink
                class="relative text-light text-lg font-semibold text-center transition-all duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-light after:transition-all after:duration-300 hover:after:w-full"
                to="/sales"
            >
                ფასდაკლებები
            </NuxtLink>
            <NuxtLink
                class="relative text-light text-lg font-semibold text-center transition-all duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-light after:transition-all after:duration-300 hover:after:w-full"
                to="/contact"
            >
                კონტაქტი
            </NuxtLink>
        </div>
    </div>
    <div class="w-full md:w-1/3">
        <h2 class="text-light text-lg font-semibold mb-5">დაგვიკავშირდით</h2>
        <div class="flex flex-col gap-4 mb-5">
            <div  v-for="item in footerContactInfo" :key="item?.id">
                <NuxtLink class="flex gap-2 items-center" :to="item?.url" target="_blank">
                    <div class="w-6 h-6 [&_path]:stroke-light [&_rect]:stroke-light" v-html="item?.icon"></div>
                    <p class="text-sm text-light lg:text-lg">{{ item?.name }}</p>
                </NuxtLink>
            </div>
        </div>
        <Socials :is-light="true"/>
    </div>
    </div>

    <div class="flex justify-center items-center w-full border-t border-light text-light py-5">
      <p>© 2025 მაქსილენდი</p>
    </div>
  </footer>
</template>

<style scoped></style>
