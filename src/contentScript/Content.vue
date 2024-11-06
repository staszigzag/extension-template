<script setup lang="ts">

</script>

<template>
  <v-app>
    <v-main class="mega" style="background-color: blueviolet;">
      <h3>Content</h3>
      <TheCountSync />
    </v-main>
  </v-app>
</template>

<style scoped>
.mega{
  width: 15%;
  min-width: 250px;
  height: 20%;
  position: fixed;
  top: 0;
  /* left: 0; */
  z-index:999999
}
</style>
