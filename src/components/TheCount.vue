<script setup lang="ts">
const count = ref(0)

function minus() {
  if (count.value > 0)
    count.value--
}

function add() {
  count.value++
}

onMounted(() => {
  chrome.storage.sync.get(['count'], (result) => {
    count.value = result.count ?? 0
  })
})

watch(count, (newCount) => {
  chrome.storage.sync.set({ count: newCount })

  chrome.runtime.sendMessage({ type: 'COUNT', count: count.value })
})
</script>

<template>
  <div class="mt-8">
    <v-btn :disabled="count <= 0" @click="minus">
      -
    </v-btn>
    <v-chip>{{ count }}</v-chip>
    <v-btn @click="add">
      +
    </v-btn>
  </div>
</template>

<style>
</style>
