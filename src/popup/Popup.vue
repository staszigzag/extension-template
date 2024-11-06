<script setup lang="ts">
function openOptions() {
  chrome.runtime.openOptionsPage()
}
</script>

<template>
  <v-app style="min-width: 20rem; min-height: 10rem;">
    <v-main>
      <h3>Popup Page</h3>
      <v-chip label append-icon="mdi-cog" color="primary" @click="openOptions">
        Open Options
      </v-chip>

      <TheCount />
    </v-main>
  </v-app>
</template>

<style>
</style>
