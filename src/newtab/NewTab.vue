<script setup lang="ts">
function getTime() {
  const date = new Date()
  const hour = String(date.getHours()).padStart(2, '0')
  const minute = String(date.getMinutes()).padStart(2, '0')
  const sec = String(date.getSeconds()).padStart(2, '0')
  return `${hour}:${minute}:${sec}`
}

const time = ref(getTime())
let intervalor: any = null

onMounted(() => {
  intervalor = setInterval(() => {
    time.value = getTime()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(intervalor)
})
</script>

<template>
  <section>
    <h1>New Tab</h1>
    <h1>{{ time }}</h1>
  </section>
</template>

<style>
h1 {
    color: #42b983;
    text-transform: uppercase;
    font-size: 6rem;
    margin: 2rem auto;
  }
</style>
