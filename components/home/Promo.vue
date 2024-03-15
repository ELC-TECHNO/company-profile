<template>
    <div class="promo">
        <hr />
        <div class="promo__wrapper">
            <div class="promo__header">
                <div class="promo__header__title">
                    <h2>Promo</h2>
                </div>
                <div class="promo__header__more">
                    <h5 @click="goToPromo">See More</h5>
                </div>
            </div>
            <div class="promo__carousel">
                 <MyPrefixCarousel
                    :items-to-show="1"
                    :height="700"
                    :loop="true"
                    :autoplay="10000"
                    :animationSpeed="10000"
                    :transition="1000"
                 >
                    <MyPrefixSlide
                        v-for="items in 10"
                        :key="items"
                        class="asd"
                    >
                        <div class="partners_slide_image">
                            <img src="/promo.png" alt="">
                        </div>
                    </MyPrefixSlide>
                    <template #addons>
                        <MyPrefixPagination />
                    </template>
                </MyPrefixCarousel>
            </div>
        </div>
        <hr />
    </div>
</template>

<script lang="ts">
import { useRoute, useRouter } from 'vue-router';

export default defineNuxtComponent({

    setup() {

        const route = useRouter();

        const goToPromo = () => {
            route.push("/promo");
        };

        return {
            route,
            goToPromo
        };
    },
});

</script>

<style lang="scss" scoped>

.promo {

    &__wrapper {
        padding: 5% 10%;
    }

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__more {
            text-decoration: underline;
        }

    }

}

.asd {
    margin-top: 20px;
}

</style>