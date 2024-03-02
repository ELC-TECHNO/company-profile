<template>
    <div class="faq">
        <div class="faq__wrapper">
            <div class="faq__illustrator">
                <img src="/faq.png" />
            </div>
            <div class="faq__description">
                <div class="faq__description__title">
                    <h2>Masih ada yang bingung ? <br /> Gamaliel siap menjawab <br /> pertanyaan anda online 24 jam </h2>
                </div>
                <div class="faq__description__text">
                    <h5>Kami dapat membantu anda untuk mengenal kami lebih baik dengan menyiadakan langkah-langkah menggunakan ELC.</h5>
                </div>
                <div class="faq__description__button">
                    <button>F.A.Q</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.faq {
    padding: 10% 10%;

    &__wrapper {
        display: grid;
        grid-template-columns: repeat(1, 1fr);

        @media (min-width: 1023px) {
            grid-template-columns: repeat(2, 1fr);
            gap: 10%;
            align-items: center;

        }
    }

    &__description {
        display: flex;
        flex-direction: column;
        gap: 30px;

        &__title {
            
            h2 {
                text-align: left;
                font-weight: bold;

                @media (max-width: 1023px) {
                    font-size: 20px;
                }
            
            }

        }

        &__text {
            padding-right: 30%;

            h5 {
                font-weight: 300;
            }

        }

        &__button {

        button {
            padding: 3% 8%;
            border-radius: 10px;
            border: none;
            background: $primary;
            color: #ffffff;
            cursor: pointer;
        }

    }

    }

    &__illustrator {
        display: none;

        @media (min-width: 1023px) {
            display: block;
        }

        img {
            width: 100%;
        }

    }


}

</style>