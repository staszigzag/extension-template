<script setup lang="ts">
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
  <h4>Count : {{ countSync }}</h4>
</template>

<style>
</style>
