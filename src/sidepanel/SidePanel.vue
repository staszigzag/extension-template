<script setup lang="ts">
import { onMounted, ref } from 'vue'

const countSync = ref(0)

onMounted(() => {
  chrome.storage.sync.get(['count'], (result) => {
    countSync.value = result.count ?? 0
  })

  chrome.runtime.onMessage.addListener((request) => {
    if (request.type === 'COUNT') {
      countSync.value = request?.count ?? 0
    }
  })
})
</script>

<template>
  <main>
    <h3>SidePanel Page</h3>

    <TheCountSync />
  </main>
</template>

<style>
</style>
