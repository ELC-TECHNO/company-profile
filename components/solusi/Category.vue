<template>
    <div class="category">
        <div class="category__wrapper">
            <div class="category__title">
                <h1>Solusi Permasalah Bisnis Anda</h1>
            </div>
            <div class="category__description">
                <h5>Solusi yang tepat untuk berbagai macam bisnis UMKM anda.</h5>
            </div>
            <div class="category__content" v-if="category">
                <div class="category__content__card">
                    <CommonCard  v-for="(items, index) in category" :key="items" @click="toogleCategory(index)" :class="{ 'active': option === index }">{{ items.name }}</CommonCard>
                </div>
                <div class="category__content__description" v-html="category[option].description" />
                <div class="category__content__feature">
                    <div class="category__content__feature__title">
                        <h5>Berikut adalah fitur yang terdapat didalam system kami untuk menyelesaikan solusi bisnis anda:</h5>
                    </div>
                    <div class="category__Content__feature__slider">

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
    },
    setup(props: any, {emit}: any){
        
        const option = ref(0)

        const toogleCategory = (index: number) => {
            emit('update:modelValue', index);
            option.value = index;
        };

        return {
            toogleCategory,
            option
        }

    }

})

</script>

<style lang="scss" scoped>

.category {
    padding: 5% 10%;

    &__wrapper {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 40px;
    }

    &__description {
        text-align: center;
        font-size: 12px;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 30px;

        &__card {
            display: flex;
            flex-direction: row;
            gap: 5%;

            @media (min-width: 1023px) {
                padding: 0% 30%;
            }

        }

        &__description {
            text-align: left;
            font-size: 12px;
        }

    }

    .card {
        background: transparent;
        border: 1px solid $primary;
        color: #000000;
        width: 100%;
    }

    .active {
        background: $primary;
        border: 1px solid $primary;
        color: #ffffff;
    }


}

</style>