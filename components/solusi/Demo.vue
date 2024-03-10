<template>
    <div class="demo">
        <div class="demo__wrapper">
            <div class="demo__illustrator">
                <img src="/solusi/illustrator.svg" />
            </div>
            <div class="demo__description">
                <div class="demo__description__title">
                    <h2>Nah, sudah tertarik <br /> dengan fitur yang  <br /> ditawarkan ?</h2>
                </div>
                <div class="demo__description__button">
                    <button>Jadwalkan Demo</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.demo {
    padding: 5% 10% 10% 10%;

    &__wrapper {
        display: flex;
        flex-direction: column;

        @media (min-width: 760px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 5%;
            align-items: center;
            justify-content: center;
            justify-items: center;
        }

    }

    &__illustrator {

        display: none;

        @media (min-width: 760px) {
            display: block;
        }

        img {
        width: 100%;
        }

    }

    &__description {

        display: flex;
        flex-direction: column;
        gap: 30px;

        &__title {

            h2 {
                font-size: 20px;

                @media (min-width: 760px) {
                    font-size: 20px;
                    letter-spacing: 2px;
                }

                @media (min-width: 1023px) {
                    font-size: 30px;
                    letter-spacing: 2px;
                }

            }

        }

        &__button {

            button {
                padding: 12px;
                border: none;
                background: $primary;
                color: #ffffff;
                border-radius: 10px;
                font-size: 10px;
                cursor: pointer;

                @media (min-width: 760px) {
                    padding: 15px;
                    font-size: 10px;
                    letter-spacing: 1px;
                }

                @media (min-width: 1023px) {
                    padding: 25px;
                    font-size: 15px;
                    letter-spacing: 1px;
                }

            }

        }

    }

}

</style>