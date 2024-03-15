<template>
    <div class="promo">
        <div class="promo__wrapper">
            <div class="promo__title">
                <h1>
                    Promo
                </h1>
            </div>
            <div class="promo__content">
                
                <MyPrefixCarousel
                    :items-to-show="1"
                    :height="700"
                    :loop="true"
                    :autoplay="10000"
                    :animationSpeed="10000"
                    :transition="1000"
                >
                    <MyPrefixSlide
                        v-v-for="(item, index) in listPromo" 
                        :key="index"
                        class="promo__content__card"
                    >
                        <div class="promo__content__image">
                            <img src="">
                        </div>
                    </MyPrefixSlide>
                    <template #addons>
                        <MyPrefixPagination />
                    </template>
                </MyPrefixCarousel>
            </div>
        </div>
    </div>
</template>

<!-- <script lang="ts">

export default defineNuxtComponent({

    props: {
        promo: {
            required: false,
            type: Array,
        },
    },
    setup(props: any, {emit}: any){
        
        const option = ref(0)

        return {
            option
        }
    }
})

</script> -->

<script lang="ts">

export default defineNuxtComponent({

    setup() {
        const option = ref(0)

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
                description: "Hotel langkah Anda menuju kemajuan bisnis dengan solusi ELC yang inovatif dan terjangkau! Apakah Anda memiliki bisnis UMKM dan ingin meningkatkan efisiensi operasional serta pengalaman pelanggan? Solusi ELC adalah jawabannya! <br /> <br /> Dengan ELC, Anda dapat: <br />  <br /> 📈   Melacak penjualan secara real-time untuk membuat keputusan yang tepat <br/>  💳   Menerima berbagai jenis pembayaran dengan cepat dan aman <br />  📊   Mengelola inventaris dengan mudah dan menghindari kekurangan atau kelebihan stok <br />  🎯   Meningkatkan loyalitas pelanggan melalui promosi dan program loyalitas terpadu <br /> 💻   Mengakses data bisnis kunci dari mana saja, kapan saja melalui platform online kami <br /> <br /> Tidak perlu lagi khawatir tentang pencatatan manual atau kehilangan kesempatan penjualan. Solusi ELC dirancang khusus untuk memenuhi kebutuhan bisnis UMKM, memberikan Anda alat yang Anda butuhkan untuk tumbuh dan bersaing di pasar yang kompetitif."
            },
            {
                id: 3,
                name: "Bukalapak",
                description: "Restaurant langkah Anda menuju kemajuan bisnis dengan solusi ELC yang inovatif dan terjangkau! Apakah Anda memiliki bisnis UMKM dan ingin meningkatkan efisiensi operasional serta pengalaman pelanggan? Solusi ELC adalah jawabannya! <br /> <br /> Dengan ELC, Anda dapat: <br />  <br /> 📈   Melacak penjualan secara real-time untuk membuat keputusan yang tepat <br/>  💳   Menerima berbagai jenis pembayaran dengan cepat dan aman <br />  📊   Mengelola inventaris dengan mudah dan menghindari kekurangan atau kelebihan stok <br />  🎯   Meningkatkan loyalitas pelanggan melalui promosi dan program loyalitas terpadu <br /> 💻   Mengakses data bisnis kunci dari mana saja, kapan saja melalui platform online kami <br /> <br /> Tidak perlu lagi khawatir tentang pencatatan manual atau kehilangan kesempatan penjualan. Solusi ELC dirancang khusus untuk memenuhi kebutuhan bisnis UMKM, memberikan Anda alat yang Anda butuhkan untuk tumbuh dan bersaing di pasar yang kompetitif."
            },
            {
                id: 4,
                name: "Lazada",
                description: "Restaurant langkah Anda menuju kemajuan bisnis dengan solusi ELC yang inovatif dan terjangkau! Apakah Anda memiliki bisnis UMKM dan ingin meningkatkan efisiensi operasional serta pengalaman pelanggan? Solusi ELC adalah jawabannya! <br /> <br /> Dengan ELC, Anda dapat: <br />  <br /> 📈   Melacak penjualan secara real-time untuk membuat keputusan yang tepat <br/>  💳   Menerima berbagai jenis pembayaran dengan cepat dan aman <br />  📊   Mengelola inventaris dengan mudah dan menghindari kekurangan atau kelebihan stok <br />  🎯   Meningkatkan loyalitas pelanggan melalui promosi dan program loyalitas terpadu <br /> 💻   Mengakses data bisnis kunci dari mana saja, kapan saja melalui platform online kami <br /> <br /> Tidak perlu lagi khawatir tentang pencatatan manual atau kehilangan kesempatan penjualan. Solusi ELC dirancang khusus untuk memenuhi kebutuhan bisnis UMKM, memberikan Anda alat yang Anda butuhkan untuk tumbuh dan bersaing di pasar yang kompetitif."
            }           
        ])

        return {
            listPromo,
            option
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

}

</style>