<template>
    <div class="promo">
        <div class="promo__wrapper">
            <div class="promo__title">
                <h1>
                    Promo
                </h1>
            </div>
            <div class="promo__content">
                <div class="promo__content__card">
                    <CommonCard v-for="items in listPromo" :key="items.id"  @click="toogleCategory(items)" :class="{ 'active': selectedDisplayOption === items}"> {{ items.name }}</CommonCard>
                </div>
            </div>
            <div class="promo__description">
                <div class="promoe__description__image">
                    <div class="promo__description__image__wrapper">
                        <img src="/assets/img/promo.svg">
                    </div>
                </div>
                <div class="promo__description__detail">
                    <div class="promo__description__detail__wrapper">
                        <div v-html="selectedDisplayOption?.description"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default defineNuxtComponent({

    setup() {

        const listPromo = ref([
            {
                id: 1,
                name: "Tokopedia",
                image: "/assets/img/promo.svg",
                description: "Tentukan langkah Anda menuju kemajuan bisnis dengan solusi ELC yang inovatif dan terjangkau! Apakah Anda memiliki bisnis UMKM dan ingin meningkatkan efisiensi operasional serta pengalaman pelanggan? Solusi ELC adalah jawabannya! <br /> <br /> Dengan ELC, Anda dapat: <br />  <br /> 📈   Melacak penjualan secara real-time untuk membuat keputusan yang tepat <br/>  💳   Menerima berbagai jenis pembayaran dengan cepat dan aman <br />  📊   Mengelola inventaris dengan mudah dan menghindari kekurangan atau kelebihan stok <br />  🎯   Meningkatkan loyalitas pelanggan melalui promosi dan program loyalitas terpadu <br /> 💻   Mengakses data bisnis kunci dari mana saja, kapan saja melalui platform online kami <br /> <br /> Tidak perlu lagi khawatir tentang pencatatan manual atau kehilangan kesempatan penjualan. Solusi ELC dirancang khusus untuk memenuhi kebutuhan bisnis UMKM, memberikan Anda alat yang Anda butuhkan untuk tumbuh dan bersaing di pasar yang kompetitif."
            },
            {
                id: 2,
                name: "Shopee",
                image: "/assets/img/promo.svg",
                description: "Hotel langkah Anda menuju kemajuan bisnis dengan solusi ELC yang inovatif dan terjangkau! Apakah Anda memiliki bisnis UMKM dan ingin meningkatkan efisiensi operasional serta pengalaman pelanggan? Solusi ELC adalah jawabannya! <br /> <br /> Dengan ELC, Anda dapat: <br />  <br /> 📈   Melacak penjualan secara real-time untuk membuat keputusan yang tepat <br/>  💳   Menerima berbagai jenis pembayaran dengan cepat dan aman <br />  📊   Mengelola inventaris dengan mudah dan menghindari kekurangan atau kelebihan stok <br />  🎯   Meningkatkan loyalitas pelanggan melalui promosi dan program loyalitas terpadu <br /> 💻   Mengakses data bisnis kunci dari mana saja, kapan saja melalui platform online kami <br /> <br /> Tidak perlu lagi khawatir tentang pencatatan manual atau kehilangan kesempatan penjualan. Solusi ELC dirancang khusus untuk memenuhi kebutuhan bisnis UMKM, memberikan Anda alat yang Anda butuhkan untuk tumbuh dan bersaing di pasar yang kompetitif."
            },
            {
                id: 3,
                name: "Bukalapak",
                image: "/assets/img/promo.svg",
                description: "Restaurant langkah Anda menuju kemajuan bisnis dengan solusi ELC yang inovatif dan terjangkau! Apakah Anda memiliki bisnis UMKM dan ingin meningkatkan efisiensi operasional serta pengalaman pelanggan? Solusi ELC adalah jawabannya! <br /> <br /> Dengan ELC, Anda dapat: <br />  <br /> 📈   Melacak penjualan secara real-time untuk membuat keputusan yang tepat <br/>  💳   Menerima berbagai jenis pembayaran dengan cepat dan aman <br />  📊   Mengelola inventaris dengan mudah dan menghindari kekurangan atau kelebihan stok <br />  🎯   Meningkatkan loyalitas pelanggan melalui promosi dan program loyalitas terpadu <br /> 💻   Mengakses data bisnis kunci dari mana saja, kapan saja melalui platform online kami <br /> <br /> Tidak perlu lagi khawatir tentang pencatatan manual atau kehilangan kesempatan penjualan. Solusi ELC dirancang khusus untuk memenuhi kebutuhan bisnis UMKM, memberikan Anda alat yang Anda butuhkan untuk tumbuh dan bersaing di pasar yang kompetitif."
            }           
        ])

        const selectedDisplayOption = ref(listPromo.value[0])

        const toogleCategory = (index: any) => {
            selectedDisplayOption.value = index;
            console.log(selectedDisplayOption.value)
        }

        return {
            listPromo,
            toogleCategory,
            selectedDisplayOption
        }
    }
})

</script>

<style lang="scss" scoped>

.promo {
    padding: 20% 10%;

    &__wrapper {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;
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
    }

    &__description {
        background: $primary;
        color: white;
        display: grid;
        grid-template-columns: 30% 65%;
        gap: 5%;

        &__image {
            
            &__wrapper {
                display: flex;
                flex-direction: column;
                gap: 10px;

            }
            
        }

        &__detail {
            
            &__wrapper {
                display: flex;
                flex-direction: column;
                gap: 15px;
            }
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