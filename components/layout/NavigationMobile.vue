<template>
    <div class="navigation-mobile">
        <div class="navigation-mobile__wrapper">
            <div class="navigation-mobile__header">
                <span @click="$emit(`toogleCollapse`)">X</span>
            </div>
            <div class="navigation-mobile__router">
                <div 
                    v-for="items in navigation"
                    :key="items.id" 
                    class="navigation-mobile__router__link"
                    :class="{ active: route.path === items?.value }"
                >
                     <NuxtLink @click="$emit('toogleCollapse')" :to="items.value" >{{items.name}}</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default defineNuxtComponent({
    
    props: {
        navigation: {
            required: false,
            type: Array
        },
        
    },
    setup( { emit } : any){

            const route = useRoute();

            const router = useRouter();

            const isOpen = ref(false);


            const linkRouter = (index: string) => {
                router.push(index);
                emit('update:modelValue', isOpen);
            };


            return {
                route,
                linkRouter
            }
    }

})

</script>


<style lang="scss" scoped>

.navigation-mobile {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;

    &__wrapper {
        background: $primary;
        height: 100%;
        justify-content: center;
        padding: 10%;
    }

    &__header {
        text-align: end;
        color: $basic-100;
        cursor: pointer;
    }

    &__router {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 50px;
        padding: 120px 0%;

        .active {
            font-weight: bold;
        }

        @media (min-width: 500px) {
            padding: 200px 0%;
        }
        
        &__link {
            text-align: center;

            a {
                color: $basic-100;
                text-decoration: none;
            }

        }

    }

    @media (min-width: 1023px) {
        display: none;
    }

}


</style>