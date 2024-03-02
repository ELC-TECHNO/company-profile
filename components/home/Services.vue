<template>
    <div class="services">
        <div class="services__wrapper">
            <div class="services__content">
                <div class="services__content__title">
                    <h3>Teknologi berbasis cloud service yang menjawab solusi kebutuhan bisnismu</h3>
                </div>
                <div class="services__content__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eveniet. Laboriosam cum dolores, hic odio repudiandae aliquam nisi delectus saepe, quo quasi quisquam laborum neque. Repellat facere harum eos eius?
                </div>
                <div class="services__content__option">
                    <div class="services__content__option__dropdown">
                        <span>Services</span>
                        <div>
                            <select name="cars" id="cars">
                                <option value="Restaurant">Restaurant</option>
                                <option value="Hotel">Hotel</option>
                                <option value="Sports">Sport</option>
                            </select>
                        </div>
                    </div>
                    <div class="services__content__option__display-mobile">
                        <img :src="selectedDisplayOption" />
                    </div>
                    <div class="services__content__option__card">
                        <CommonCard v-for="items in listOption" :key="items.id"  @click="toogleOption(items.image)"> {{ items.name }}</CommonCard>
                    </div>
                    <div class="services__content__option__more-services">
                        <h5>Penasaran cara kerjanya dan fitur lain nya ? <span>lihat Detail</span></h5>
                    </div>
                </div>
            </div>
            <div class="services__display">
                <img :src="selectedDisplayOption" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default defineNuxtComponent({

    setup() {

        const listOption = ref([
            {
                id: 1,
                name: "Table Management",
                image: "/services/table.png"
            },
            {
                id: 2,
                name: "Layanan scan dari meja",
                image: "/services/phone.png"
            },
            {
                id: 3,
                name: "Call waiter",
                image: "/services/waiter.png"
            },
        ])

        
        const selectedDisplayOption = ref(listOption.value[0].image)


        const toogleOption = (index: any) => {
            selectedDisplayOption.value = index;
        }


        return {
            listOption,
            toogleOption,
            selectedDisplayOption
        }

    }

})

</script>


<style lang="scss" scoped>

.services{
    padding: 5% 10%;

    &__wrapper {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 15px;

        @media (min-width: 1023px) {
            grid-template-columns: repeat(2, 1fr);
        }

    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 20px;

        &__title {
            
            h3 {
                color: #545454;
                font-size: 16px;
                font-weight: 700;

                @media (min-width: 1023px) {
                    font-size: 32px;
                }

            }

        }

        &__description {

            font-size: 12px;
            padding: 0% 50% 0% 0%;
            text-align: left;

            @media (min-width: 1023px ) {
                font-size: 15px;
            }

        }

        &__option {

            &__card {
                width: 100%;
                margin-top: 20px;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 5%;

                @media (min-width: 1023px) {
                    width: 80%;
                }
            }

            &__display-mobile {
                text-align: center;
                align-self: center;
                margin-top: 10%;

                img {
                    width: 200px;
                    height: 200px;
                }

                @media (min-width: 1023px) {
                    display: none;
                }

            }

            &__more-services {
                margin-top: 30px;

                h5 {
                    font-size: 10px;
                    cursor: pointer;

                    span {
                        text-decoration: underline;
                    }

                }

            }

            span {
                font-size: 10px;
                color: $primary;
                font-weight: 600;
            }

        }

        

    }

    &__display {
        text-align: center;
        align-self: center;

            @media (max-width: 1023px) {
                display: none;
            }

            img {
                width: 400px;
                height: 300px;
            }

    }
    

}


</style>