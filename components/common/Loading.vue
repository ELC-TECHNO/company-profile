<template>
  <div class="loading-container">
    <div class="spinner">
        Sabar Anjing
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
  background-color: $primary; /* Background with transparency */
  z-index: 9999; /* Make sure loading spinner is on top */
}

.spinner {
  width: 50px;
  height: 50px;
  animation: spin 10s infinite linear;
  color: $basic-100;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(1800deg); }
}
</style>
