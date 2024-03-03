<template>
    <div class="offer">
       <hr />
        <div class="offer__wrapper">
            <div class="offer__title">
                <h2>Penawaran spesial untuk anda</h2>
            </div>
            <div class="offer__card">
                <CommonCard>Example Offer</CommonCard>
                <CommonCard>Example Offer</CommonCard>
                <CommonCard>Example Offer</CommonCard>
            </div>
        </div>
        <hr />
    </div>
</template>


<style lang="scss" scoped>

.offer {

    &__wrapper {
        
        padding: 5% 10%;
        display: flex;
        flex-direction: column;
        gap: 30px;

    }

    &__title {

        h2 {
            font-size: 15px;
        }

    }

    &__card {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;

        @media (min-width: 760px) {
            grid-template-columns: repeat(3, 1fr);
        }

        .card {
            background: transparent;
            border: 1px solid $primary;
            color: $primary;
        }

    }

}

</style>