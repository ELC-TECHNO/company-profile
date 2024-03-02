<template>
    <div>
        <LayoutHeader />
            <CommonLoading v-if="loading" />
           <NuxtPage />
        <LayoutFooter />
    </div>
</template>

<script lang="ts" setup>
const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
   setTimeout(() => {
        loading.value = false;
    }, 2000);
});
</script>