<template>
    <div class="header">
        <div class="header__container">
            <div class="header__logo">
                <NuxtImg src="/logo.svg" />
            </div>
            <div class="header__navigation">
                <div 
                    class="header__navigation__desktop"
                    v-for="items in navigationList"
                    :key="items.id"
                >
                     <NuxtLink to="/about">{{ items.name }}</NuxtLink>
                </div>
                <div class="header__navigation__mobile-toogle">
                    <span @click="toogleCollapse"><Icon name="foundation:list" color="white" /></span>
                </div>
            </div>
        </div>
    </div>
    <LayoutNavigationMobile v-if="navigation" @toogle-collapse="toogleCollapse" :navigation="navigationList" />
</template>


<script lang="ts">
export default defineNuxtComponent({

  setup() {
    
    const route = useRoute();
    const router = useRouter();

    const navigation = ref(false);

    const toogleCollapse = () => {
      navigation.value = !navigation.value
    }


    const linkRouter = (index: string) => {
      router.push(index);
    };


    const navigationList = ref([
      {
        id: 0,
        name: "Produk",
        value: "/dashboard",
      },
      {
        id: 1,
        name: "Solusi Bisnis",
        value: "/dashboard/merchant",
      },
      {
        id: 2,
        name: "F.A.Q",
        value: "/dashboard/pay-request",
      },
      {
        id: 3,
        name: "Contact",
        value: "/dashboard/account-merchant",
      },
    ]);

    return {
      route,
      navigationList,
      linkRouter,
      toogleCollapse,
      navigation,
    };
  },
});
</script>


<style lang="scss" scoped>

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: $primary;
    padding: 3% 7% 3% 5%;
    border-radius: 0px 0px 20px 20px;
    z-index: 999;
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    &__container {
        display: flex;
        justify-content: space-between;
    }

    &__logo {

        img {

            height: 100%;
            width: 100%;

            @media (min-width: 1028px) {
              width: 150px;
            }
        }

    }

    &__navigation {

            display: flex;
            gap: 50px;
            align-items: center;
            
            &__desktop {

              display: none;

              @media (min-width: 1028px) {

                display: block;

                a {
                    text-decoration: none;
                    color: $basic-100;
                    font-size: 1rem;
                }

              }
              
            }

            &__mobile-toogle {

                @media (min-width: 1028px){
                    display: none;
                }

            }
        
        
    }

    @media (min-width: 1028px) {
        padding: 1.5% 7% 1.5% 5%;
        border-radius: 0px 0px 60px 60px;

    }
}


</style>