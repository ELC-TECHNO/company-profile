<template>
    <div class="slider">
        <div class="slider__wrapper">
            <div class="slider__card" v-if="category">
                <MyPrefixCarousel
                    :items-to-show="1"
                    :height="800"
                    :loop="false"
                    :autoplay="0"
                    :animationSpeed="10000"
                    :transition="1000"
                    v-model="currentSlide"
                 >
                    <MyPrefixSlide
                        v-for="items in selectedCategory"
                        :key="items.id"
                        class="slider__card__content"
                    >
                        <div class="slider__card__wrapper">
                            <div class="slider__card__title">
                                <h3>{{ items.name }} </h3>
                            </div>
                            <div class="slider__card__image">
                                <img :src="items.image" />
                            </div>
                        </div>
                    </MyPrefixSlide>
                    <template #addons>
                        <MyPrefixNavigation />
                    </template>
                </MyPrefixCarousel>
            </div>
            <div class="slider__content">
                <div class="slider__content__wrapper">
                    <div class="slider__content__title">
                        <h2>Apasih itu {{ selectedDisplayOption.name }} ?</h2>
                    </div>
                    <div class="slider__content__description">
                        <h5>{{ selectedDisplayOption.description }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default defineNuxtComponent({

     props: {
        category: {
            required: false,
            type: Array,
        },
        modelValue: {
            required: false,
            type: Number
        }
    },
    setup(props: any, {emit}: any) {


        const currentSlide = ref(0);
        const selectedCategory = ref(props.category ? props.category[props.modelValue].fitur : []);
        const selectedDisplayOption = ref(props.category ? props.category[props.modelValue].fitur[currentSlide.value] : null);

        watch(() => props.modelValue, (newValue: any, oldValue: any) => {
            currentSlide.value = 0;
            selectedCategory.value = props.category[newValue].fitur;
            selectedDisplayOption.value = props.category[newValue].fitur[currentSlide.value];
        });

        watch(currentSlide, (newValue: any, oldValue: any) => {
            selectedDisplayOption.value = props.category[props.modelValue].fitur[newValue];
        });

        return {
            currentSlide,
            selectedDisplayOption,
            selectedCategory
        }

    }

})

</script>

<style lang="scss" scoped>

.slider {
    padding: 15% 10%;


    &__wrapper {
            display: flex;
            flex-direction: column;
            gap: 30px;
    }

    &__card {

        &__wrapper {
            display: flex;
            gap: 15%;
            align-items: center;

            img {
                width: 100px;
                height: 100px;
            }

             @media (max-width: 320px) {
                display: flex;
                gap: 2%;
                align-items: center;

                img {
                    width: 60px;
                    height: 60px;
                }

            }

            @media (min-width: 760px) {
                display: flex;
                gap: 25%;
                align-items: center;

                img {
                    width: 200px;
                    height: 150px;
                }
            }

            @media (min-width: 1023px) {
                display: flex;
                gap: 20%;
                align-items: center;

                img {
                    width: 400px;
                    height: 400px;
                }
            }

        }

        &__title {
            h3 {
                font-size: 10px;

                @media (min-width: 760px) {
                    font-size: 15px;
                }

                @media (min-width: 1023px) {
                    font-size: 25px;
                }

            }
        }


    }

    &__content {
        padding: 5%;

        &__wrapper {
            background: $primary;
            border-radius: 10px;
            padding: 5%;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        &__title {

            h2 {
                font-size: 10px;
                letter-spacing: 1px;
            }
            
        }

        &__description {

            h5 {
                font-size: 8px;
                letter-spacing: 1px;
                font-weight: 200;
            }

        }

    }

}

</style>