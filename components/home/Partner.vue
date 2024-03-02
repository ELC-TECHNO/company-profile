<template>
   <div class="partners">
      <div class="partners__slide">
         <MyPrefixCarousel
            :items-to-show="5"
            :height="500"
            :loop="false"
            :autoplay="100"
            :animationSpeed="100"
            :wrap-around="true"
            :transition="1000"
         >
            <MyPrefixSlide
               v-for="items in images"
               :key="items.id"
               class="partners_slide_wrapper"
            >
               <div class="partners_slide_image">
                  <img :src="items.path" />
               </div>
            </MyPrefixSlide>
         </MyPrefixCarousel>
      </div>
      <hr />
   </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
   setup() {
      const images = ref([
         {
            id: 1,
            path: '/partners/comingsoon.png',
         },
         {
            id: 2,
            path: '/partners/comingsoon.png',
         },
         {
            id: 3,
            path: '/partners/comingsoon.png',
         },
         {
            id: 4,
            path: '/partners/comingsoon.png',
         },
         {
            id: 5,
            path: '/partners/comingsoon.png',
         },
         {
            id: 6,
            path: '/partners/comingsoon.png',
         },
         {
            id: 7,
            path: '/partners/comingsoon.png',
         },
         {
            id: 8,
            path: '/partners/comingsoon.png',
         },
         {
            id: 9,
            path: '/partners/comingsoon.png',
         },
         {
            id: 10,
            path: '/partners/comingsoon.png',
         },
         {
            id: 11,
            path: '/partners/comingsoon.png',
         },
         {
            id: 12,
            path: '/partners/comingsoon.png',
         },
         {
            id: 13,
            path: '/partners/comingsoon.png',
         },
         {
            id: 14,
            path: '/partners/comingsoon.png',
         },
         {
            id: 15,
            path: '/partners/comingsoon.png',
         },
      ])
      return {
         images,
      }
   },
})
</script>

<style lang="scss" scoped>

.partners {

    padding: 5% 10%;

   &__slide {

      &__wrapper {
         margin-left: 30px;
      }

      &__image {

         image {
            width: 150px;
            height: 10px;
         }
      }
   }

   hr {
        margin: 2% 0%;
        border: 1px solid;
   }

   @media (min-width: 1024px) {

    padding-top: 5%;

   }
}


:deep(.carousel__slide) {
    margin: 0px 120px;
    cursor: pointer;

    @media (min-width: 1024px) {
        margin: 0px 40px;
    }

}
</style>
