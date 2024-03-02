<template>
    <div class="demo">
        <div class="demo__wrapper">
            <div class="demo__description">
                <div class="demo__description__title">
                    <h3>Harga mulai dari Rp 100.000 / Bulan </h3>
                </div>
                <div class="demo__description__button">
                    <button>Jadwalkan Demo</button>
                </div>
            </div>
            <div class="demo__illustrator">
                <img src="/illustrator.png" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.demo {
    background: $primary;
    height: 100%;

    &__wrapper {
        padding: 10% 10%;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 7%;
        height: 100%;
        width: 100%;

        @media (min-width: 1023px) {
            grid-template-columns: repeat(2, 1fr);
            padding: 5% 10%;
        }
    }

    &__description {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 5%;

        @media (min-width: 1023px) {
            align-self: center;

            &__title {
                h3 {
                    font-size: 24px;
                }
            }
        }

        &__title {
            color: #ffffff;
            
        }

        &__button {
            padding: 5%;

            button {
                padding: 3%;
                border-radius: 10px;
                border: none;
                color: #ffffff;
                background: #01D3B9;
                cursor: pointer;
                letter-spacing: 2px;
            }

        }

    }

    &__illustrator {
        grid-row: 1;
        height: 100%;
        width: 100%;

        @media (min-width: 1023px) {
            grid-column: 2;
        }

        img {
            width: 100%;
            height: 100%;
        }

    }

}

</style>