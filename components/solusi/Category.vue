<template>
    <div class="category">
        <div class="category__wrapper">
            <div class="category__title">
                <h1>Solusi Permasalah Bisnis Anda</h1>
            </div>
            <div class="category__description">
                <h5>Solusi yang tepat untuk berbagai macam bisnis UMKM anda.</h5>
            </div>
            <div class="category__content">
                <div class="category__content__card">
                    <CommonCard  v-for="items in listCategory" :key="items" @click="toogleCategory(items)">{{ items.name }}</CommonCard>
                </div>
                <div class="category__content__description" v-html="selectedCategory?.description" />
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

    setup(){

        const listCategory = ref([
            {
                id: 1,
                name: "Coffeshop",
                description: "Tentukan langkah Anda menuju kemajuan bisnis dengan solusi ELC yang inovatif dan terjangkau! Apakah Anda memiliki bisnis UMKM dan ingin meningkatkan efisiensi operasional serta pengalaman pelanggan? Solusi ELC adalah jawabannya! <br /> <br /> Dengan ELC, Anda dapat: <br />  <br /> 📈   Melacak penjualan secara real-time untuk membuat keputusan yang tepat <br/>  💳   Menerima berbagai jenis pembayaran dengan cepat dan aman <br />  📊   Mengelola inventaris dengan mudah dan menghindari kekurangan atau kelebihan stok <br />  🎯   Meningkatkan loyalitas pelanggan melalui promosi dan program loyalitas terpadu <br /> 💻   Mengakses data bisnis kunci dari mana saja, kapan saja melalui platform online kami <br /> <br /> Tidak perlu lagi khawatir tentang pencatatan manual atau kehilangan kesempatan penjualan. Solusi ELC dirancang khusus untuk memenuhi kebutuhan bisnis UMKM, memberikan Anda alat yang Anda butuhkan untuk tumbuh dan bersaing di pasar yang kompetitif.",
                fitur: []
            },
            {
                id: 2,
                name: "Restaurant",
                description: "Kemajuan bisnis dengan solusi ELC yang inovatif dan terjangkau! Apakah Anda memiliki bisnis UMKM dan ingin meningkatkan efisiensi operasional serta pengalaman pelanggan? Solusi ELC adalah jawabannya! <br /> <br /> Dengan ELC, Anda dapat: <br />  <br /> 📈   Melacak penjualan secara real-time untuk membuat keputusan yang tepat <br/>  💳   Menerima berbagai jenis pembayaran dengan cepat dan aman <br />  📊   Mengelola inventaris dengan mudah dan menghindari kekurangan atau kelebihan stok <br />  🎯   Meningkatkan loyalitas pelanggan melalui promosi dan program loyalitas terpadu <br /> 💻   Mengakses data bisnis kunci dari mana saja, kapan saja melalui platform online kami <br /> <br /> Tidak perlu lagi khawatir tentang pencatatan manual atau kehilangan kesempatan penjualan. Solusi ELC dirancang khusus untuk memenuhi kebutuhan bisnis UMKM, memberikan Anda alat yang Anda butuhkan untuk tumbuh dan bersaing di pasar yang kompetitif.",
                fitur: []
            },
            {
                id: 3,
                name: "Hotel",
                description: " Anda menuju kemajuan bisnis dengan solusi ELC yang inovatif dan terjangkau! Apakah Anda memiliki bisnis UMKM dan ingin meningkatkan efisiensi operasional serta pengalaman pelanggan? Solusi ELC adalah jawabannya! <br /> <br /> Dengan ELC, Anda dapat: <br />  <br /> 📈   Melacak penjualan secara real-time untuk membuat keputusan yang tepat <br/>  💳   Menerima berbagai jenis pembayaran dengan cepat dan aman <br />  📊   Mengelola inventaris dengan mudah dan menghindari kekurangan atau kelebihan stok <br />  🎯   Meningkatkan loyalitas pelanggan melalui promosi dan program loyalitas terpadu <br /> 💻   Mengakses data bisnis kunci dari mana saja, kapan saja melalui platform online kami <br /> <br /> Tidak perlu lagi khawatir tentang pencatatan manual atau kehilangan kesempatan penjualan. Solusi ELC dirancang khusus untuk memenuhi kebutuhan bisnis UMKM, memberikan Anda alat yang Anda butuhkan untuk tumbuh dan bersaing di pasar yang kompetitif.",
                fitur: []
            },
        ])

        const selectedCategory = ref(listCategory.value[0])

        const toogleCategory = (index: any) => {
            selectedCategory.value = index;
            console.log(selectedCategory.value)
        }


        return {
            listCategory,
            toogleCategory,
            selectedCategory
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


}

</style>