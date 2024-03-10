<template>
    <div class="solution-bussiness">
        <div class="solution-bussiness__wrapper">
            <SolusiBanner />
            <SolusiCategory v-model="option" :category="listCategory"/>
            <SolusiSlider v-model="option" :category="listCategory" />
            <SolusiOffer />
            <SolusiDemo />
        </div>
    </div>
</template>


<script lang="ts">

export default defineNuxtComponent({

    setup(){

        const option = ref(0)

        const listCategory = ref([
            {
                id: 1,
                name: "Coffeshop",
                description: "Tentukan langkah Anda menuju kemajuan bisnis dengan solusi ELC yang inovatif dan terjangkau! Apakah Anda memiliki bisnis UMKM dan ingin meningkatkan efisiensi operasional serta pengalaman pelanggan? Solusi ELC adalah jawabannya! <br /> <br /> Dengan ELC, Anda dapat: <br />  <br /> 📈   Melacak penjualan secara real-time untuk membuat keputusan yang tepat <br/>  💳   Menerima berbagai jenis pembayaran dengan cepat dan aman <br />  📊   Mengelola inventaris dengan mudah dan menghindari kekurangan atau kelebihan stok <br />  🎯   Meningkatkan loyalitas pelanggan melalui promosi dan program loyalitas terpadu <br /> 💻   Mengakses data bisnis kunci dari mana saja, kapan saja melalui platform online kami <br /> <br /> Tidak perlu lagi khawatir tentang pencatatan manual atau kehilangan kesempatan penjualan. Solusi ELC dirancang khusus untuk memenuhi kebutuhan bisnis UMKM, memberikan Anda alat yang Anda butuhkan untuk tumbuh dan bersaing di pasar yang kompetitif.",
                fitur: [
                    {
                        id: 1, 
                        name: 'Table Management',
                        image: '/services/table.png',
                        description : 'Table Lorem lorem'
                    },
                    {
                        id: 2, 
                        name: 'Order from table',
                        image: '/services/phone.svg',
                        description : 'Phone Lorem lorem'
                    },
                    {
                        id: 3, 
                        name: 'Call waiter',
                        image: '/services/waiter.svg',
                        description : 'Waiter Lorem lorem'
                    },
            
                ]
            },
            {
                id: 2,
                name: "Hotel",
                description: "Hotel langkah Anda menuju kemajuan bisnis dengan solusi ELC yang inovatif dan terjangkau! Apakah Anda memiliki bisnis UMKM dan ingin meningkatkan efisiensi operasional serta pengalaman pelanggan? Solusi ELC adalah jawabannya! <br /> <br /> Dengan ELC, Anda dapat: <br />  <br /> 📈   Melacak penjualan secara real-time untuk membuat keputusan yang tepat <br/>  💳   Menerima berbagai jenis pembayaran dengan cepat dan aman <br />  📊   Mengelola inventaris dengan mudah dan menghindari kekurangan atau kelebihan stok <br />  🎯   Meningkatkan loyalitas pelanggan melalui promosi dan program loyalitas terpadu <br /> 💻   Mengakses data bisnis kunci dari mana saja, kapan saja melalui platform online kami <br /> <br /> Tidak perlu lagi khawatir tentang pencatatan manual atau kehilangan kesempatan penjualan. Solusi ELC dirancang khusus untuk memenuhi kebutuhan bisnis UMKM, memberikan Anda alat yang Anda butuhkan untuk tumbuh dan bersaing di pasar yang kompetitif.",
                fitur: [
                    {
                        id: 1, 
                        name: 'Order from tabl',
                        image: '/services/phone.svg',
                        description : 'Table Lorem lorem'
                    },
                    {
                        id: 2, 
                        name: 'Table Management',
                        image: '/services/table.png',
                        description : 'Phone Lorem lorem'
                    },
                    {
                        id: 3, 
                        name: 'Call waiter',
                        image: '/services/waiter.svg',
                        description : 'Waiter Lorem lorem'
                    },
            
                ]
            },
            {
                id: 3,
                name: "Restaurant",
                description: "Restaurant langkah Anda menuju kemajuan bisnis dengan solusi ELC yang inovatif dan terjangkau! Apakah Anda memiliki bisnis UMKM dan ingin meningkatkan efisiensi operasional serta pengalaman pelanggan? Solusi ELC adalah jawabannya! <br /> <br /> Dengan ELC, Anda dapat: <br />  <br /> 📈   Melacak penjualan secara real-time untuk membuat keputusan yang tepat <br/>  💳   Menerima berbagai jenis pembayaran dengan cepat dan aman <br />  📊   Mengelola inventaris dengan mudah dan menghindari kekurangan atau kelebihan stok <br />  🎯   Meningkatkan loyalitas pelanggan melalui promosi dan program loyalitas terpadu <br /> 💻   Mengakses data bisnis kunci dari mana saja, kapan saja melalui platform online kami <br /> <br /> Tidak perlu lagi khawatir tentang pencatatan manual atau kehilangan kesempatan penjualan. Solusi ELC dirancang khusus untuk memenuhi kebutuhan bisnis UMKM, memberikan Anda alat yang Anda butuhkan untuk tumbuh dan bersaing di pasar yang kompetitif.",
                fitur: [
                    {
                        id: 1, 
                        name: 'Order From Table',
                        image: '/services/phone.svg',
                        description : 'Table Lorem lorem'
                    },
                    {
                        id: 2, 
                        name: 'Table Management',
                        image: '/services/table.png',
                        description : 'Phone Lorem lorem'
                    },
                    {
                        id: 3, 
                        name: 'Call waiter',
                        image: '/services/waiter.svg',
                        description : 'Waiter Lorem lorem'
                    },
            
                ]
            }           
        ])


        return {
            listCategory,
            option
        }

    }

})

</script>