<template>
  <div class="card">
    <div class="card__content">
        <slot />
    </div>
  </div>
</template>

<script lang="ts">

</script>

<style lang="scss" scoped>

.card {
  background-color: $primary;
  border-radius: 8px;
  padding: 20px;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  color: white;

  &__content {
    max-width: 100%;
    text-align: center;
    font-size: 10px;
  }
  
  @media screen and (max-width: 768px) {
    .card {
      padding: 10px;
      margin: 5px;
    }
  }

  @media (min-width: 1024px) {
    width: 100%;
    min-height: 120px;
  }
}

</style>
