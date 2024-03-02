<template>
    <div class="product">
        <div class="product__wrapper">
            <div class="product__card">
                <div class="product__card__wrapper">
                    <CommonCard>asda</CommonCard>
                </div>
                <div class="product__card__wrapper">
                    <CommonCard>asda</CommonCard>
                </div>
                <div class="product__card__wrapper">
                    <CommonCard>asda</CommonCard>
                </div>
            </div>
            <div class="product__description">
                <div class="product__description__wrapper">
                    <div class="product__description__title">
                        <h2>Ragam Fitur Serba Otomatis</h2>
                    </div>
                    <div class="product__description__content">
                        <h5> Keloa bisnis jadi lebih hemat biaya, hemat tenaga, dan hemat waktu </h5>
                    </div>
                    <div class="product__description__button">
                        <button>Coba Sekarang</button>
                    </div>
                </div>
            </div>
            <div class="product__button">
                <button>Coba Sekarang</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.product {
    padding: 5% 10%;

    &__wrapper {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 50px;

        @media (min-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    &__card {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5%;

        &__wrapper {

            &:nth-child(1) {
                grid-row: 1;
            }

            &:nth-child(2) {
                grid-row: 2;
                grid-column: 2;
            }

            &:nth-child(3) {
                grid-row: 3;
            }
            
        }
        
    }

    &__description {
        grid-row: 1;
        text-align: center;

        &__wrapper {
            display: flex;
            flex-direction: column;
            gap: 20px;

        }

        &__title {

            h2 {
                color: $primary;
                font-weight: 600;
            }

        }

        &__content {
            padding: 0% 20%;

            @media (min-width: 1024px) {
                padding: 0% 35%;

                h5 {
                    font-size: 20px;
                }

            }

            h5 {
                font-weight: 300;
            }

        }

        &__button {
            display: none;
            padding: 0% 20%;

            @media (min-width: 1024px) {
                display: block;
            }

            button {
                width: 60%;
                padding: 3%;
                border-radius: 10px;
                border: 1px solid #000000;
                background: $primary;
                color: $basic-100;
            }

        }

        @media(min-width: 1024px) {
            grid-column: 2;
            align-items: center;
            align-content: center;
            align-self: center;
        }


    }

    &__button {
        margin-top: 10%;
        padding: 0% 20%;

        @media (min-width: 1024px) {
            display: none;
        }

            button {
                width: 100%;
                padding: 5%;
                border-radius: 10px;
                border: 1px solid $primary;
                background: #ffffff;
                color: #000000;
            }
    }



}

</style>