<template>
    <div class="banner">
        <div class="banner__container">
            <div class="banner__description">
                <div class="banner__description__title">
                    <h1>SOLUSI <br /> PERMASALAHAN <br /> ANDA</h1>
                </div>
                <div class="banner__description__content">
                    <h5>
                        Permudah Bisninsmu untuk <br/> melakukan pemesanan dan <br/> pembayaran dengan cara <br/> digital.
                    </h5>
                </div>
                <div class="banner__description__highlight">
                    <h5>
                        scan <Icon name="mdi:arrow-right" /> pesan <Icon name="mdi:arrow-right" /> bayar <Icon name="mdi:arrow-right" /> selesai!
                    </h5>
                </div>
                <div class="banner__description__button">
                    <button>
                        kenapa ElC ?
                    </button>
                </div>
            </div>
            <div class="banner__image">
                <img src="/banner.svg" />
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

.banner {
    height: 700px;
    background: $primary;
    padding: 10% 7% 7% 7%;
    border-radius: 0px 0px 30px 30px;

    &__container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);

        @media (min-width: 1028px) {
            grid-template-columns: repeat(2, 1fr);
        }

    }

    &__description {
        color: $basic-100;
        display: flex;
        flex-direction: column;
        gap: 30px;

        &__title {

            h1 {
                font-size: 20px;
                font-weight: 800;
                letter-spacing: 2px;

                @media (min-width: 1028px) {
                    font-size: 34px;
                }

            }

        }

        &__content {

            h5 {
                letter-spacing: 0px;
                font-weight: 200;
                font-size: 16px;
            }

        }

        &__highlight {
            
            h5 {
                font-size: 15px;

                @media (min-width: 1028px) {
                    font-size: 20px;
                }

            }

        }
        
        &__button {

            button {
                width: 150px;
                padding: 10px;
                border-radius: 5px;
                border: none;
                font-weight: bold;
                color: $basic-100;
                background:  #01D3B9;
            }

        }

    }

    &__image {
        grid-row: 1;
        justify-self: center;

        @media (min-width: 1028px) {
            grid-column: 2;
        }

        img {
             width: 100%;
             height: 300px;
        }

    }

    @media (min-width: 1028px) {
        height: 600px;
        padding: 10% 5% 5% 5%;
        border-radius: 0px 0px 60px 60px;

    }

}

</style>