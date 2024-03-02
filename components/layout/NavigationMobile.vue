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
                    class="navigation-mobile__router__link">
                     <NuxtLink>{{items.name}}</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" scoped>

export default defineNuxtComponent({
    
    props: {
        navigation: {
            required: false,
            type: Array
        }
    },

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

        @media (min-width: 500px) {
            padding: 200px 0%;
        }
        
        &__link {
            text-align: center;

            a {
                color: $basic-100;
            }

        }

    }

    @media (min-width: 1023px) {
        display: none;
    }

}


</style>