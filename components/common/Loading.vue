<template>
  <div class="loading-container">
    <div class="spinner">
      <img src="/logo.svg" class="spinner-image" />
    </div>
  </div>
</template>

<script lang="ts">

</script>

<style scoped lang="scss">
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $primary; 
  z-index: 9999; 
}

.spinner {
  width: 100px;
  height: 100px;
  position: relative; 
  animation: spin 2s infinite linear;
}

.spinner-image {
  width: 120px; 
  height: 100px; 
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
