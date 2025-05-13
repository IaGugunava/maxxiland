<script setup lang="ts"></script>

<template>
  <div class="py-20">
    <div class="container flex items-center justify-center gap-20">
      <div class="w-1/2 flex justify-end flex-col gap-4">
        <h2 class="text-black text-3xl font-bold text-end">Why choose us</h2>

        <p class="text-black text-lg text-end">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem
          lorem, molestie et rutrum sed, molestie vel enim. Donec malesuada
          imperdiet interdum. Pellentesque turpis nunc, lacinia ac dui et,
          accumsan ornare felis. Etiam sit amet nibh purus. Nulla facilisi.
          Vestibulum eget dui aliquet, malesuada nibh mollis, molestie felis.
          Curabitur faucibus nibh vel ipsum dictum pharetra ut et odio. Nulla
          ornare lacus nec volutpat ultrices. Sed nec posuere ante. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Curabitur nisl erat, viverra quis neque accumsan, faucibus
          accumsan nunc. Curabitur risus magna, blandit ut pellentesque sit
          amet, aliquet nec enim.
        </p>

        <NuxtLink to="about-us" class="w-full flex justify-end">
            <CustomButton text="show more" class="w-fit"/>
        </NuxtLink>
      </div>

      <div class="w-1/2">
        <img src="../../../assets/images/image.jpg" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
