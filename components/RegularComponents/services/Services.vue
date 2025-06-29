<script setup lang="ts">
import { getSingleUrl } from '#imports';
const route = useRoute();
const { data, pending, error } = await apiFetch("/api/services?populate=*");

const servicesData = computed(() => (!error.value ? data?.value?.data : null));

const { $strapiMedia } = useNuxtApp();

const servicesMedia = (url: string) => {
  return $strapiMedia(url);
};

const showButton = computed(() => route?.fullPath?.includes('services'))

</script>

<template>
  <div class="pt-20 pb-5 md:pb-20">
    <div v-if="servicesData?.length" class="container">
      <h2
        class="text-dark text-3xl font-bold flex items-start justify-start mb-4"
      >
        სერვისები
      </h2>

      <p class="text-dark text-lg mb-8">
        ჩვენ ამ სერვისებს გთავაზობთ
      </p>

      <ul id="hexGrid">
        <li class="hex" v-for="item in servicesData" :key="item?.id">
          <NuxtLink :to="getSingleUrl('services', item)" class="hexIn">
            <a class="hexLink text-light" href="#">
              <NuxtImg :src="servicesMedia(item?.image?.formats?.small?.url)" />
              <h3 class="text-light bg-primary-opacity">{{ item?.name }}</h3>
              <p class="text-light bg-primary-opacity">{{ item?.short_description }}</p>
            </a>
          </NuxtLink>
        </li>
      </ul>

      <NuxtLink v-if="!showButton" to="/services" class="mt-8 md:mt-20 flex w-full items-center justify-center">
        <CustomButton text="დეტალურად" color="green" :type="3"/>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
#hexGrid {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
  list-style-type: none;
}

.hex {
  position: relative;
  visibility:hidden;
  outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */
}
.hex::after{
  content:'';
  display:block;
  padding-bottom: 86.602%;  /* =  100 / tan(60) * 1.5 */
}
.hexIn{
  position: absolute;
  width:96%;
  padding-bottom: 110.851%; /* =  width / sin(60) */
  margin:0 2%;
  overflow: hidden;
  visibility: hidden;
  outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */
  -webkit-transform: rotate3d(0,0,1,-60deg) skewY(30deg);
      -ms-transform: rotate3d(0,0,1,-60deg) skewY(30deg);
          transform: rotate3d(0,0,1,-60deg) skewY(30deg);
}
.hexIn * {
  position: absolute;
  visibility: visible;
  outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */
}
.hexLink {
    display:block;
    width: 100%;
    height: 100%;
    text-align: center;
    /* color: #fff; */
    overflow: hidden;
    -webkit-transform: skewY(-30deg) rotate3d(0,0,1,60deg);
        -ms-transform: skewY(-30deg) rotate3d(0,0,1,60deg);
            transform: skewY(-30deg) rotate3d(0,0,1,60deg);
}

/*** HEX CONTENT **********************************************************************/
.hex img {
  left: -100%;
  right: -100%;
  width: auto;
  height: 100%;
  margin: 0 auto;
  object-fit: cover;
  -webkit-transform: rotate3d(0,0,0,0deg);
      -ms-transform: rotate3d(0,0,0,0deg);
          transform: rotate3d(0,0,0,0deg);
}

.hex h3, .hex p {
  width: 100%;
  padding: 8%;
  box-sizing:border-box;
  /* background-color: rgba(0, 128, 128, 0.8); */
  font-weight: 300;
  -webkit-transition:  -webkit-transform .2s ease-out, opacity .3s ease-out;
          transition:          transform .2s ease-out, opacity .3s ease-out;
}
.hex h3 {
  bottom: 50%;
  padding-top:50%;
  font-size: 18px;
  z-index: 1;
  -webkit-transform:translate3d(0,-100%,0);
      -ms-transform:translate3d(0,-100%,0);
          transform:translate3d(0,-100%,0);
}
.hex h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 45%;
  width: 10%;
  text-align: center;
  border-bottom: 1px solid #fff;
}
.hex p {
  top: 50%;
  padding-bottom:50%;
  -webkit-transform:translate3d(0,100%,0);
      -ms-transform:translate3d(0,100%,0);
          transform:translate3d(0,100%,0);
}


/*** HOVER EFFECT  **********************************************************************/
.hexLink:hover h3, .hexLink:focus h3,
.hexLink:hover p, .hexLink:focus p{
  -webkit-transform:translate3d(0,0,0);
      -ms-transform:translate3d(0,0,0);
          transform:translate3d(0,0,0);
}

.hexLink:active h3, .hexLink:focus h3,
.hexLink:active p, .hexLink:focus p{
  -webkit-transform:translate3d(0,0,0);
      -ms-transform:translate3d(0,0,0);
          transform:translate3d(0,0,0);
}

/*** HEXAGON SIZING AND EVEN ROW INDENTATION *****************************************************************/
@media (min-width:1201px) { /* <- 5-4  hexagons per row */
  #hexGrid{
    padding-bottom: 4.4%
  }
  .hex {
    width: 20%; /* = 100 / 5 */
  }
  .hex:nth-child(9n+6){ /* first hexagon of even rows */
    margin-left:10%;  /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 1200px) and (min-width:901px) { /* <- 4-3  hexagons per row */
  #hexGrid{
    padding-bottom: 5.5%
  }
  .hex {
    width: 25%; /* = 100 / 4 */
  }
  .hex:nth-child(7n+5){ /* first hexagon of even rows */
    margin-left:12.5%;  /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 1024px){
  .hexLink h3{
    font-size: 12px;
    /* -webkit-transform:translate3d(0,0,0);
      -ms-transform:translate3d(0,0,0);
          transform:translate3d(0,0,0); */
          transform: unset;
          height: 100%;
          bottom: 0;
          display: flex;
          padding: 0;
          width: 100%;
          justify-content: center;
          align-items: center;
  }
}

@media (max-width: 900px) and (min-width:601px) { /* <- 3-2  hexagons per row */
  #hexGrid{
    padding-bottom: 7.4%
  }
  .hex {
    width: 33.333%; /* = 100 / 3 */
  }
  .hex:nth-child(5n+4){ /* first hexagon of even rows */
    margin-left:16.666%;  /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 600px) { /* <- 2-1  hexagons per row */
  #hexGrid{
    padding-bottom: 11.2%
  }
  .hex {
    width: 50%; /* = 100 / 3 */
  }
  .hex:nth-child(3n+3){ /* first hexagon of even rows */
    margin-left:25%;  /* = width of .hex / 2  to indent even rows */
  }
  

  .hex p{
    display: none;
  }
}

@media (max-width: 400px) {
    #hexGrid {
        font-size: 13px;
    }

    .hexLink h3{
      font-size: 16px;
    }
}
</style>
